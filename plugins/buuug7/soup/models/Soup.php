<?php namespace Buuug7\Soup\Models;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Model;
use October\Rain\Exception\ValidationException;

/**
 * Soup Model
 */
class Soup extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'buuug7_soup_soups';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [
        'content',
        'reference',
        'contributor_id',
        'status',
        'published',
        'published_at'
    ];

    protected $dates = ['published_at'];

    /**
     * Validation
     * @var array
     */
    public $rules = [
        'content' => 'required|min:8',
        'contributor_id' => 'required',
        'reference' => 'required',
        'status' => 'required',
    ];

    /**
     * @var array
     */
    public $customMessages = [
        'required' => '请填写 :attribute ',
    ];

    /**
     * @var array
     */
    public $attributeNames = [
        'content' => '内容',
        'contributor_id' => '贡献者',
        'published_at' => '发布时间',
        'reference' => '参考',
        'status' => '状态',
    ];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [
        'comments' => [
            'Buuug7\Soup\Models\Comment',
            'table' => 'buuug7_soup_comments',
            'order' => 'created_at DESC',
        ],
    ];
    public $belongsTo = [
        'contributor' => [
            'RainLab\User\Models\User',
            'key' => 'contributor_id',
        ],
    ];
    public $belongsToMany = [
        'tags' => [
            'Buuug7\Soup\Models\Tag',
            'table' => 'buuug7_soup_soups_tags',
        ],
        'collections' => [
            'Buuug7\Soup\Models\Collection',
            'table' => 'buuug7_soup_collections_soups',
        ],
    ];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

    public function afterDelete()
    {
        $this->tags()->detach();
        $this->collections()->detach();
        $this->comments()->delete();
    }

    public function afterCreate()
    {
        TimelineEvent::create([
            'user_id' => $this->contributor_id,
            'event_type' => self::class,
            'event_id' => $this->id,
            'data' => [
                'method' => 'create',
            ],
            'created_at' => Carbon::now(),
        ]);
    }

    public function afterUpdate()
    {
        TimelineEvent::create([
            'user_id' => $this->contributor_id,
            'event_type' => self::class,
            'event_id' => $this->id,
            'data' => [
                'method' => 'update',
            ],
            'created_at' => Carbon::now(),
        ]);
    }

    public function scopeIsPublished($query)
    {
        return $query
            ->whereNotNull('published_at')
            ->where('published', true)
            ->whereNotNull('published')
            ->where('published_at', '<', Carbon::now());
    }

    public function scopeIsFeatured($query)
    {
        return $query
            ->isPublished()
            ->whereNotNull('featured')
            ->where('featured', true);
    }

    public function afterValidate()
    {
        if ($this->published && !$this->published_at) {
            throw new ValidationException([
                'published_at' => '请指定发布日期',
            ]);
        }
    }

    public function previousSoup()
    {
        return self::isPublished()->where('id', '<', $this->id)->max('id');
    }

    public function nextSoup()
    {
        return self::isPublished()->where('id', '>', $this->id)->min('id');
    }

    public function getStatusOptions()
    {
        return [
            'checking' => '审核中',
            'not-passed' => '未通过',
            'passed' => '通过',
        ];
    }

    /**
     * @param Illuminate\Query\Builder $query
     * @param array $tags list of tag ids
     * @return  Illuminate\Query\Builder
     */
    public function scopeFilterTags($query, $tags)
    {
        return $query->whereHas('tags', function ($q) use ($tags) {
            $q->whereIn('id', $tags);
        });
    }

    public function scopeSearch($query, $search, $size = 5)
    {
        if (!$search) {
            return;
        }
        $searchableFileds = ['content'];
        return $query->isPublished()->searchWhere($search, $searchableFileds)->paginate($size);
    }
}
