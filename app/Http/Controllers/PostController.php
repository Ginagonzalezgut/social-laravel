<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PostController extends Controller
{
    public function create()
    {
        return Inertia::render("Posts/Create");
    }

    public function index()
    {
        $results = DB::select("select * from posts");
        return Inertia::render("Posts/Index", [
            'posts' => $results
        ]);
    }
    public function store(Request $request): RedirectResponse
    {
        $image = $request->image;
        $caption = $request->caption;
        $userId = $request->user()->id;

        DB::insert("insert into posts (image,caption,user_id)values (?,?,?)", [$image, $caption, $userId]);
        return redirect("/posts");
    }
}
