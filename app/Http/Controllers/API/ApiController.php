<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Validator;
use JWTAuth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Worklog;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    //

    public function worklog()
    {
        $id_user = auth('api')->user()->id;

        $worklogs = Worklog::where('user_id', $id_user)->get();

        return response()->json([
            'success' => true,
            'data' => $worklogs
        ], 200);
    }


    public function login(Request $request)
    {
        $input = $request->only('email', 'password');
        $jwt_token = null;

        if (!$jwt_token = JWTAuth::attempt($input)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
            ], Response::HTTP_UNAUTHORIZED);
        }

        return response()->json([
            'success' => true,
            'token' => $jwt_token,
        ]);
    }

    public function getUser()
    {
        try {
            // Mendapatkan pengguna yang terotentikasi
            $user = Auth::user();

            // Mengembalikan data pengguna
            return response()->json([
                'success' => true,
                'user' => $user,
            ]);
        } catch (\Exception $e) {
            // Menangani kesalahan
            return response()->json([
                'success' => false,
                'message' => 'Error retrieving user data',
            ], 500);
        }
    }

    public function logout()
    {
        auth('api')->logout();

        return response()->json([
            'success' => true,
            'pesan' => 'Berhasil Logout',
        ], 200);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
