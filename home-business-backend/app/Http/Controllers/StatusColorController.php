<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StatusColor;

class StatusColorController extends Controller
{
    public function index()
    {
        $data = StatusColor::all();
        return $data;
    }
}
