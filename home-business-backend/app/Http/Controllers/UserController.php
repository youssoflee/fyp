<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Customer;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $data = User::with('UserRole')->get();
        return response($data, 201);
    }

    public function registerCustomer(Request $request)
    {

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|confirmed|string',
        ]);

        //store user data
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role_id' => 2,
            'created_at' => Carbon::now(),
        ]);

        Customer::create(['user_id' => $user->id]);

        $role = UserRole::where('id', 2)->first()->role;

        $token = $user->createToken('register')->plainTextToken;

        $currentUser = [
            'name' =>   $user->name,
            'email' => $user->email,
            'role' => $role
        ];

        $response = [
            'user' => $currentUser,
            'token' => $token
        ];

        return response($response, 201);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getCurrentUser()
    {
        $currentUser = Auth::user();

        if ($currentUser->role_id == 2) {
            return User::with('Customer')->find($currentUser->id);
        } else {
            return $currentUser;
        }
    }
}
