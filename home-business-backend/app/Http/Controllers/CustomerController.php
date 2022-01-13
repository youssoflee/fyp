<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customer = Customer::with('User')->get();
        return response([
            'customers' => $customer,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            // 'password' => 'required',
            'phone_num' => 'required',
            'address' => 'required',
            'zipcode' => 'required',
            'city' => 'required',
            'state' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt("!Abc123"),
            'role_id' => 2,
            'created_at' => Carbon::now(),
        ]);

        $customer = Customer::create([
            'user_id' => $user->id,
            'phone_num' => $request->phone_num,
            'address' => $request->address,
            'zipcode' => $request->zipcode,
            'city' => $request->city,
            'state' => $request->state,
        ]);

        if ($customer) {
            return response()->json([
                'status' => 200,
                'message' => 'Customer Added Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'customer' => 'No customer ID FOUND',
            ]);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Customer::findOrFail($id);
    }

    public function edit($id)
    {
        $customer = Customer::find($id);
        if ($customer) {
            return response()->json([
                'status' => 200,
                'customer' => $customer,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'customer' => 'No customer ID FOUND',
            ]);
        }
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
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'email' => 'required|email|max:191',
            // 'password' => 'required|max:191',
            'phone_num' => 'required|max:191|min:10',
            'address' => 'required|max:191',
            'zipcode' => 'required|max:191|min:5',
            'city' => 'required|max:191',
            'state' => 'required|max:191',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $user = User::find($request->user_id);
            $customer = Customer::find($id);
            if ($customer) {
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $user->save();
                $customer->phone_num = $request->input('phone_num');
                $customer->address = $request->input('address');
                $customer->zipcode = $request->input('zipcode');
                $customer->city = $request->input('city');
                $customer->state = $request->input('state');
                $customer->save();
                // echo $name;
                // echo $phone_num;
                // echo $address;
                // echo $zipcode;
                // echo $city;
                // echo $state;
                // echo $request;
                return response()->json([
                    'status' => 200,
                    'message' => 'Customer Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'customer' => 'Customer ID NOT FOUND',
                ]);
                // $customer->update($request->all());
                // return $customer;
            }
        }
    }

    public function updateAddress(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'address' => 'required|max:191',
            'zipcode' => 'required|max:191|min:5',
            'city' => 'required|max:191',
            'state' => 'required|max:191',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $user = User::find($request->user_id);
            $customer = Customer::find($id);
            if ($customer) {
                $customer->address = $request->input('address');
                $customer->zipcode = $request->input('zipcode');
                $customer->city = $request->input('city');
                $customer->state = $request->input('state');
                $customer->save();
                // echo $name;
                // echo $phone_num;
                // echo $address;
                // echo $zipcode;
                // echo $city;
                // echo $state;
                // echo $request;
                return response()->json([
                    'status' => 200,
                    'message' => 'Address Details Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'customer' => 'Customer ID NOT FOUND',
                ]);
                // $customer->update($request->all());
                // return $customer;
            }
        }
    }

    public function updateInformation(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'email' => 'required|email|max:191',
            // 'password' => 'required|max:191',
            'phone_num' => 'required|max:191|min:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $user = User::find($request->user_id);
            $customer = Customer::find($id);
            if ($customer) {
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $user->save();
                $customer->phone_num = $request->input('phone_num');
                $customer->save();
                // echo $name;
                // echo $phone_num;
                // echo $address;
                // echo $zipcode;
                // echo $city;
                // echo $state;
                // echo $request;
                return response()->json([
                    'status' => 200,
                    'message' => 'Customer Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'customer' => 'Customer ID NOT FOUND',
                ]);
                // $customer->update($request->all());
                // return $customer;
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::with('User')->find($id);
        $res = User::destroy($customer->user->id);
        // $customer->delete();
        if ($res) {
            return response()->json([
                'status' => 200,
                'message' => 'Customer deleted successfully',
            ]);
        }
        return response()->json([
            'status' => 400,
            'message' => 'Customer was not deleted. Try again!',
        ]);
    }
}
