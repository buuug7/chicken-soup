<?php namespace Buuug7\LoginWithGithub;

use Backend;
use System\Classes\PluginBase;

/**
 * LoginWithGithub Plugin Information File
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
            'name'        => 'LoginWithGithub',
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
            'Buuug7\LoginWithGithub\Components\MyComponent' => 'myComponent',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'buuug7.loginwithgithub.some_permission' => [
                'tab' => 'LoginWithGithub',
                'label' => 'Some permission'
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
        return []; // Remove this line to activate

        return [
            'loginwithgithub' => [
                'label'       => 'LoginWithGithub',
                'url'         => Backend::url('buuug7/loginwithgithub/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['buuug7.loginwithgithub.*'],
                'order'       => 500,
            ],
        ];
    }
}
