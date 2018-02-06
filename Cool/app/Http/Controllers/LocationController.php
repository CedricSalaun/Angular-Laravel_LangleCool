<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Locations;

class LocationController extends Controller
{
    public function showAll(){
        $locations = Locations::all();
        return compact('locations');
    }
}
