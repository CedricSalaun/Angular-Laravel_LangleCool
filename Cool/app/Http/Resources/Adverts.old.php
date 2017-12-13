<?php
    namespace App\Http\Resources;
    use Illuminate\Http\Resources\Json\ResourceCollection;
    class Adverts extends ResourceCollection{
        private $id;
        private $title;
        private $description;
        private $price;
        private $url_photo;
        private $is_active;
        private $created_at;
        private $updated_at;
        private $user_id;
        private $category_id;
        private $location_id;
        
        /**
         * Transform the resource collection into an array.
         *
         * @param  \Illuminate\Http\Request $request
         * @return array
         */
        public function toArray($request){
            return array(
                'id'          => (int)$this->id,
                'title'       => (string)$this->title,
                'description' => (string)$this->description,
                'price'       => (int)$this->price,
                'url_photo'   => (string)$this->url_photo,
                'is_active'   => (boolean)$this->is_active,
                'created_at'  => (string)$this->created_at,
                'updated_at'  => (string)$this->updated_at,
                'user_id'     => (int)$this->user_id,
                'category_id' => (int)$this->category_id,
                'location_id' => (int)$this->location_id
            );
        }
    }
