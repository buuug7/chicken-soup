<?php namespace Buuug7\Soup\Controllers;

use BackendMenu;
use Backend\Classes\Controller;

/**
 * Soups Back-end Controller
 */
class Soups extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController'
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public $requiredPermissions = ['buuug7.soup.access_soup'];

    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('Buuug7.Soup', 'soup', 'soups');
    }
}
