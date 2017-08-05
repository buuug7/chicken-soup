<?php namespace Buuug7\Soup\Models;

use Model;
use RainLab\User\Facades\Auth;

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
    ];

    /**
     * Validation
     * @var array
     */
    public $rules = [
        'content' => 'required|max:1024',
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
        'targetComment' => [
            'Buuug7\Soup\Models\Comment',
            'table' => 'buuug7_soup_comments',
            'key' => 'target_comment_id',
        ],
    ];
    public $belongsToMany = [
        'likeUsers' => [
            'RainLab\User\Models\User',
            'table' => 'buuug7_soup_comments_users',
        ],
    ];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

    public function hasLikeComment()
    {
        if (!Auth::check()) {
            return false;
        }
        $user = Auth::getUser();
        $exists = self::whereHas('likeUsers', function ($query) use ($user) {
            $query->where('user_id', $user->id)->where('comment_id', $this->id);
        })->exists();
        return $exists;
    }
}
