<?php namespace Buuug7\Soup\Models;

use Model;

/**
 * Comment Model
 */
class Comment extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'buuug7_soup_comments';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [
        'content',
        'user_id',
        'target_user_id',
        'target_comment_id',
        'like_users',
    ];

    protected $jsonable = ['like_users'];

    /**
     * Validation
     * @var array
     */
    public $rules = [
        'content' => 'required|max:255',
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
    ];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [
        'soup' => [
            'Buuug7\Soup\Models\Soup',
            'table' => 'buuug7_soup_soups',
        ],
        'user' => [
            'RainLab\User\Models\User',
            'table' => 'users',
        ],
        'targetUser' => [
            'RainLab\User\Models\User',
            'table' => 'users',
            'key' => 'target_user_id',
        ],
    ];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];
}
