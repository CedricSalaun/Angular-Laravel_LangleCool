<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Adverts;
use App\Http\Resources\Adverts as AdvertsResource;

class AdvertController extends Controller
{
    public function showAll(){
        return Adverts::all();
    }
    public function showOne($id){
        return Adverts::find($id);
    }
}
