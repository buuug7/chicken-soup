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
    protected $fillable = [];

    protected $dates = ['published_at'];

    /**
     * Validation
     * @var array
     */
    public $rules = [
        'content' => 'required|min:8',
        'user_id' => 'required',
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
        'user_id' => '贡献者',
        'published_at' => '发布时间',
    ];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [
        'user' => [
            'RainLab\User\Models\User',
        ],
    ];
    public $belongsToMany = [
        'tags' => [
            'Buuug7\Soup\Models\Tag',
            'table' => 'buuug7_soup_soups_tags',
        ],
    ];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

    public function afterDelete()
    {
        DB::table('buuug7_soup_soups_tags')->where('soup_id', $this->id)->delete();
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

}
