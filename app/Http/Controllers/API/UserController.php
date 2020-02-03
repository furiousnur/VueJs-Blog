<?php

namespace App\Http\Controllers\API;

use App\User;
use Faker\Provider\Image;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
        //ACL Permission..........
//        $this->authorize('isAdmin');
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        dump(\Log::info(print_r($request,true)));

        $this->validate($request,[
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|email:rfc|max:191|unique:users',
            'password' => 'required|string|min:8'
        ]);

        return User::create([
           'name' => $request['name'],
           'email' => $request['email'],
           'type' => $request['type'],
           'bio' => $request['bio'],
//           'photo' => $request['photo'],
           'photo' => "profile.png",
           'password' => bcrypt($request['password']),
        ]);
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

    public function profileEdit()
    {
        return auth('api')->user();
    }

    public function updateProfile( Request $request)
    {
        $user = auth('api')->user();

        $this->validate($request,[
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|email:rfc|max:191|unique:users,email,'.$request->id,
            'password' => 'sometimes|required|string|min:8'
        ]);

        $currentPhoto = $user->photo;

        if($request->photo != $currentPhoto){
            $name = time().'.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1];

            \Image::make($request->photo)->save(public_path('assets/images/').$name);
            $request->merge(['photo' => $name]);

            $userPhoto = public_path('assets/images/').$currentPhoto;
            if (file_exists($userPhoto)){
                @unlink($userPhoto);
            }
        }

        if($request->password){
            $request->merge(['password'=> bcrypt($request->password)]);
        }

        $user->update($request->all());
        return ['Message'=>'Success'];
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
        $user = User::findOrFail($id);

        $this->validate($request,[
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|email:rfc|max:191|unique:users,email,'.$id,
            'password' => 'sometimes|min:8'
        ]);

        $user->update($request->all());

        return ['Message' => 'Update the user info'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //ACL Permission..........
//        $this->authorize('isAdmin');

        User::findOrFail($id)->delete();

        return ['Message' => 'User Delete'];
    }
}
