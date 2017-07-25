<?php namespace Buuug7\Soup\Models;

use Model;

/**
 * Tag Model
 */
class Tag extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'buuug7_soup_tags';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * Validation
     * @var array
     */
    public $rules = [
        'name' => 'required',
        'slug' => 'required|unique:buuug7_soup_tags',
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
        'slug' => '别名',
    ];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [
        'soups' => [
            'Buuug7\Soup\Models\Soup',
            'table' => 'buuug7_soup_soups_tags',
        ],
    ];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

    public function afterDelete(){
        $this->soups()->detach();
    }
}
