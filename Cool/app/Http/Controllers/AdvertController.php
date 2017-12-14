<?php

namespace App\Http\Controllers;

use App\Adverts;
use App\Categories;
use App\Locations;
use App\Users;

class AdvertController extends Controller
{
    
    public function showAll(){
        $adverts = Adverts::all();
        $users = Users::all();
        $categories = Categories::all();
        $locations = Locations::all();
        return compact('adverts', 'categories', 'locations', 'users');
    }
    
    public function showOne($id){
        $adverts = Adverts::find($id);
        $users = Users::all();
        $categories = Categories::all();
        $locations = Locations::all();
        return compact('adverts', 'categories', 'locations', 'users');
    }
    public function newOne($id){
        $user = Users::find($id);
        $categories = Categories::all();
        $locations = Locations::all();
        return compact('categories', 'locations', 'user');
    }
}
