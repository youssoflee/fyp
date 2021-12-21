<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registerSeller(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'role_id' => 1,
        ]);

        $token = $user->createToken('register seller')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        // Check email
        $user = User::where('email', $fields['email'])->first();
        $role = UserRole::where('id', $user->role_id)->first()->role;

        // Check password
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad credentials.'
            ], 401);
        }

        $currentUser = [
            'name' =>   $user->name,
            'email' => $user->email,
            'role' => $role
        ];

        $token = $user->createToken('login')->plainTextToken;

        $response = [
            'user' => $currentUser,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function logout()
    {
        // Revoke all tokens...
        auth()->user()->tokens()->delete();
        return response(['message' => 'Logged out'], 200);
    }
}
