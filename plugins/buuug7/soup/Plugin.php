<?php namespace Buuug7\Soup;

use Backend;
use Carbon\Carbon;
use System\Classes\PluginBase;
use RainLab\User\Models\User as UserModel;
use RainLab\User\Controllers\Users as UserController;

/**
 * Soup Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name' => 'Soup',
            'description' => 'No description provided yet...',
            'author' => 'Buuug7',
            'icon' => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
        Carbon::setLocale('zh');
        UserModel::extend(function ($model) {
            // 用户贡献的soup
            $model->hasMany['contributeSoups'] = [
                'Buuug7\Soup\Models\Soup',
                'key' => 'contributor_id',
            ];
            // 用户创建的收藏单
            $model->hasMany['createdCollections'] = [
                'Buuug7\Soup\Models\Collection',
            ];
            // 用户收藏别人的收藏单
            $model->belongsToMany['collectCollections'] = [
                'Buuug7\Soup\Models\Collection',
                'table' => 'buuug7_soup_collections_users',
            ];
            // 用户点赞的别人的评论
            $model->belongsToMany['likeComments'] = [
                'Buuug7\Soup\Models\Comment',
                'table' => 'buuug7_soup_comments_users',
            ];
        });

        UserController::extend(function ($widget) {
            //TODO:: more features
        });
    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {

        return [
            'Buuug7\Soup\Components\Soup' => 'soupSoup',
            'Buuug7\Soup\Components\Collection' => 'soupCollection',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {

        return [
            'buuug7.soup.access_soup' => [
                'tab' => 'Soup',
                'label' => 'Access Soup'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {

        return [
            'soup' => [
                'label' => 'Soup',
                'url' => Backend::url('buuug7/soup/soups'),
                'icon' => 'icon-coffee',
                'permissions' => ['buuug7.soup.access_soup'],
                'order' => 600,
                'sideMenu' => [
                    'soups' => [
                        'label' => 'soups',
                        'icon' => 'icon-coffee',
                        'url' => Backend::url('buuug7/soup/soups'),
                        'permissions' => ['buuug7.soup.access_soup'],
                    ],
                    'tags' => [
                        'label' => 'tags',
                        'icon' => 'icon-tags',
                        'url' => Backend::url('buuug7/soup/tags'),
                        'permissions' => ['buuug7.soup.access_soup'],
                    ],
                    'collections' => [
                        'label' => 'collections',
                        'icon' => 'icon-folder-open',
                        'url' => Backend::url('buuug7/soup/collections'),
                        'permissions' => ['buuug7.soup.access_soup'],
                    ],
                ],
            ],
        ];
    }

    public function registerMarkupTags()
    {
        return [
            'filters' => [
                'time_diff' => [$this, 'makeTimeDiff'],
            ],
        ];
    }

    public function makeTimeDiff($text)
    {
        return Carbon::parse($text)->diffForHumans();
    }

}
