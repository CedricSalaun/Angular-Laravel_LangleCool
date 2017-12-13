<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answers extends Model
{
    protected $guarded = ['id'];

    public function advert(){
        return $this->belongsTo(Adverts::class);
    }
}
