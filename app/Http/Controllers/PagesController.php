<?php

namespace App\Http\Controllers;

use App\Content\AppContent;
use Illuminate\Http\Request;

class PagesController extends Controller
{

    public function bestofthebest() {

        return view('pages.bestofthebest');

    }


    public function article($link) {

        $bestPractice = collect(AppContent::getContent('bestofthebest', 'bps'));

        return $bestPractice->where('link', $link)->first();

    }


    public function getBps() {

        return collect(AppContent::getContent('bestofthebest', 'bps'));

    }

}
