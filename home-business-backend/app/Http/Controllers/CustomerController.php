<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customer = Customer::all();
        return response()->json([
            'status'=> 200,
            'customers'=> $customer,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        $customer = new Customer;
        $customer->name = $request->input('name');
        $customer->email = $request->input('email');
        $customer->password = $request->input('password');
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
            'status'=> 200,
            'message'=> 'Customer Added Successfully',
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
        return Customer::findOrFail($id);
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
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'phone_num' => 'required',
            'address' => 'required',
            'zipcode' => 'required',
            'city' => 'required',
            'state' => 'required'
        ]);
    
        $customer = Customer::find($id);
        return response()->json([
            'status'=> 200,
            'customer'=> $customer,
        ]);
        // $customer->update($request->all());
        // return $customer;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Customer::destroy($id);
    }
}
