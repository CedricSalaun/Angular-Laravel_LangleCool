<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories;

class CategoryController extends Controller
{
    public function showAll(){
        $categories = Categories::all();
        return compact( 'categories');
    }
}
