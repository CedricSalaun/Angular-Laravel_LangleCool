<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

    Route::post('/adverts/new', "AdvertController@newOne");
    Route::get('/adverts/all', "AdvertController@showAll");
    Route::get('/adverts/{id}', "AdvertController@showOne");
    Route::put('/adverts/update', "AdvertController@updateOne");
    Route::delete('/adverts/delete', "AdvertController@deleteOne");

    Route::post('/categories/new', "CategoryController@newOne");
    Route::get('/categories/all', "CategoryController@showAll");
    Route::get('/categories/{id}', "CategoryController@showOne");
    Route::put('/categories/update', "CategoryController@updateOne");
    Route::delete('/categories/delete', "CategoryController@deleteOne");

    Route::post('/locations/new', "LocationController@newOne");
    Route::get('/locations/all', "LocationController@showAll");
    Route::get('/locations/{id}', "LocationController@showOne");
    Route::put('/locations/update', "LocationController@updateOne");
    Route::delete('/locations/delete', "LocationController@deleteOne");
