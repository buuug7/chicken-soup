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
import showMoreContent from './show-more-content';


// main
$(function ($) {
    init();
    showMoreContent(150);
});