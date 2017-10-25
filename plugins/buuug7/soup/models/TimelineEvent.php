<?php namespace Buuug7\Soup\Models;

use Illuminate\Support\Facades\DB;
use Model;

/**
 * TimelineEvent Model
 * event: signup soup collection
 * data: ['foo'=>'bar']
 */
class TimelineEvent extends Model
{
    const CATEGORY_USER = 'user';
    const EVENT_SIGNUP = 'signup';
    const EVENT_SOUP = 'soup';
    const EVENT_COLLECTION = 'collection';

    /**
     * @var string The database table used by the model.
     */
    public $table = 'buuug7_soup_timeline_events';

    public $timestamps =false;

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [
        'user_id',
        'category',
        'event',
        'data'
    ];

    protected $datas = ['created_at'];

    protected $casts = [
        'data' => 'array',
    ];
    
    public $rules = [
        'user_id' => 'required',
        'category' => 'required',
        'event' => 'required',
        'data' => 'required',
    ];
    

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [
        'user' => [
            'RainLab\User\Models\User',
            'key' => 'user_id',
        ],
    ];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];
}
