<?php

namespace App\Http\Controllers;

use App\Adverts;
use App\Categories;
use App\Locations;
use App\Users;
use Illuminate\Http\Request;

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
    public function newOne(Request $request){
//        dd($request->all());
        $advert = new Adverts(
//            [
//            'title' => $request->get('title'),
//            'description' => $request->get('description'),
//            'price' => $request->get('price'),
//            'url_photo' => "C'est pour le test",
//            'is_active' => false,
//            'category_id' => $request->get('category'),
//            'location_id' =>$request->get('location'),
//        ]
        );
        $advert->fill($request->all());

//        $image_name = sha1(time().uniqid()).'.'.$request->photo->getClientOriginalExtension();
//        $request->photo->move(public_path('uploads'), $image_name);
//        $advert->photo = $image_name;
        $advert->save();
        return response()->json('Operation Success');
    }
    public function updateOne($id, Request $request){
        $adverts = Adverts::find($id);
//        $request -> ;
        $adverts->save();
        return compact('adverts', 'categories', 'locations', 'users');
    }
    public function deleteOne($id){
        $adverts = Adverts::find($id);
        $adverts -> delete();
        return compact('adverts', 'categories', 'locations', 'users');
    }
}
