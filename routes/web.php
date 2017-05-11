<?php


Route::get('/', 'PagesController@bestofthebest');

///// API /////

Route::group(['prefix' => 'api', 'name' => 'api'], function (){

    Route::get('/bps', 'PagesController@getBps');

    Route::get('/bp/{article}', 'PagesController@article');

});