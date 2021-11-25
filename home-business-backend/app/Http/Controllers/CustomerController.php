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
        return Customer::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
        $name = $request->name;
        $phone_num = $request->phone_num;
        $address = $request->address;
        $zipcode = $request->zipcode;
        $city = $request->city;
        $state = $request->state;
        // echo $name;
        // echo $phone_num;
        // echo $address;
        // echo $zipcode;
        // echo $city;
        // echo $state;
        // echo $request;
        return Customer::create($request->all());
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
            'phone_num' => 'required',
            'address' => 'required',
            'zipcode' => 'required',
            'city' => 'required',
            'state' => 'required'
        ]);
    
        $customer = Customer::find($id);
        $customer->update($request->all());
        return $customer;

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
