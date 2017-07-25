<?php namespace Buuug7\Soup;

use Backend;
use System\Classes\PluginBase;

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
            'name'        => 'Soup',
            'description' => 'No description provided yet...',
            'author'      => 'Buuug7',
            'icon'        => 'icon-leaf'
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

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return []; // Remove this line to activate

        return [
            'Buuug7\Soup\Components\MyComponent' => 'myComponent',
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
                'label'       => 'Soup',
                'url'         => Backend::url('buuug7/soup/soups'),
                'icon'        => 'icon-coffee',
                'permissions' => ['buuug7.soup.access_soup'],
                'order'       => 600,
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
                ],
            ],
        ];
    }
}
