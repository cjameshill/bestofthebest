<?php

namespace App\Content;


class AppContent
{

    public static function getContent($content, $section = null){

        if(file_exists('../content/' . $content . '.json')){

            $getContentFile = file_get_contents('../content/' . $content . '.json');

            $content = json_decode($getContentFile, true);

            if($section){
                if(isset($content[$section])) {
                    return $content[$section];
                } else {
                    return $content;
                }
            } else {
                return $content;
            }

        } else {
            return null;
        }

    }

}