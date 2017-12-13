<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adverts extends Model
{
    protected $guarded = ['id'];

    public function category(){
        return $this->belongsTo(Categories::class);
    }
    public function user(){
        return $this->belongsTo(Users::class);
    }
    public function location(){
        return $this->belongsTo(Locations::class);
    }
}
