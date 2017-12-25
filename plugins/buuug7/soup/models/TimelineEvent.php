<?php namespace Buuug7\Soup\Models;

use Illuminate\Support\Facades\DB;
use Model;

/**
 * TimelineEvent Model
 *
 *
 * one event like this
 *
 * /////////////////////////////////////////////////////
 * id: 1
 * user_id : 1
 * event_type: 'RainLab\User\Models\User',
 * event_id: 1
 * data: { method:'create', message:'some message' }
 * created_at: '2017-12-22 07:28:03'
 * /////////////////////////////////////////////////////
 *
 *
 */
class TimelineEvent extends Model
{
    /**
     * @var string The database table used by the model.
     */
    public $table = 'buuug7_soup_timeline_events';

    public $timestamps = false;

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [
        'user_id',
        'event_type',
        'event_id',
        'data'
    ];

    protected $datas = ['created_at'];

    protected $casts = [
        'data' => 'array',
    ];

    public $rules = [
        'user_id' => 'required',
        'event_type' => 'required',
        'event_id' => 'required',
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

    public function afterFetch()
    {

        // parse event type as object for use

        $eventTypeClass = $this->event_type;

        $target = $eventTypeClass::find($this->event_id);

        if ($target) {
            $this['target'] = $target;
        }
    }
}
