<?php namespace Buuug7\Soup\Models;

use Model;

/**
 * Collection Model
 */
class Collection extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'buuug7_soup_collections';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [
        'name','user_id'
    ];

    /**
     * Validation
     * @var array
     */
    public $rules = [
        'name' => 'required',
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
        'name' => '名称',
        'user_id' => '创建者',
    ];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [
        'owner' => [
            'RainLab\User\Models\User',
            'key' => 'user_id',
        ],
    ];
    public $belongsToMany = [
        'soups' => [
            'Buuug7\Soup\Models\Soup',
            'table' => 'buuug7_soup_collections_soups',
            'order' => 'published_at DESC',
        ],
        'collectors' => [
            'RainLab\User\Models\User',
            'table' => 'buuug7_soup_collections_users',
        ],
    ];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

    public function hasCollected($soupId)
    {
        //trace_sql();
        $exists = self::whereHas('soups', function ($query) use ($soupId) {
            $query->where('soup_id',$soupId)
            ->where('collection_id',$this->id);
        })->exists();
        return $exists;
    }
}
