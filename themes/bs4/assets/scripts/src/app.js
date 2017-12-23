/*
 |--------------------------------------------------------------------------
 | app
 |--------------------------------------------------------------------------
 |
 | Created by puguohong on 22/12/2017.
 | 
 |
*/

// add style
// extract by webpack to assets/styles/css folder

import styles from '../../styles/scss/app.scss';


// import js
import init from './init';
import cardShowMoreContent from './card-show-more-content';
import sidebarToggle from './sidebarToggle';
import navbarSearch from './navbar-search';

// main
$(function ($) {

    init();

    // car show more content
    cardShowMoreContent(150);

    // sidebar toggle
    sidebarToggle();

    // navbar search
    navbarSearch();

});