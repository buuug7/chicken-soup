<?php namespace Buuug7\LoginWithWechat;

use Backend;
use System\Classes\PluginBase;

/**
 * LoginWithWechat Plugin Information File
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
            'name'        => 'LoginWithWechat',
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
            'Buuug7\LoginWithWechat\Components\MyComponent' => 'myComponent',
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
            'buuug7.loginwithwechat.some_permission' => [
                'tab' => 'LoginWithWechat',
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
            'loginwithwechat' => [
                'label'       => 'LoginWithWechat',
                'url'         => Backend::url('buuug7/loginwithwechat/mycontroller'),
                'icon'        => 'icon-leaf',
                'permissions' => ['buuug7.loginwithwechat.*'],
                'order'       => 500,
            ],
        ];
    }
}
