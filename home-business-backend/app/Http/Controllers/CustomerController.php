<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Support\Facades\Validator;
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
            'status' => 200,
            'customers' => $customer,
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
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'phone_num' => 'required',
            'address' => 'required',
            'zipcode' => 'required',
            'city' => 'required',
            'state' => 'required',
        ]);

        $customer = Customer::create($request->all());

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


        // $validator = Validator::make($request->all(),[
        //     'name'=>'required|max:191',
        //     'email'=>'required|email|max:191',
        //     'password'=>'required|max:191',
        //     'phone_num'=>'required|max:191|min:10',
        //     'address'=>'required|max:191',
        //     'zipcode'=>'required|max:191|min:5',
        //     'city'=>'required|max:191',
        //     'state'=>'required|max:191',
        // ]);

        // if($validator->fails())
        // {
        //     return response()->json([
        //         'validate_err'=> $validator->messages(),
        //     ]);
        // }
        // else
        // {
        // $customer = new Customer;
        // $customer = Customer::find($id);
        // if(Customer::create($request->all()))
        // {
        //     return response()->json([
        //         'status'=> 200,
        //         'message'=> 'Customer Added Successfully',
        //     ]);
        // }
        // else
        // {
        //     return response()->json([
        //         'status'=> 404,
        //         'customer'=> 'No customer ID FOUND',
        //     ]);
        // }
        // }
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
        // $request->validate([
        //     'name' => 'required',
        //     'email' => 'required',
        //     'password' => 'required',
        //     'phone_num' => 'required',
        //     'address' => 'required',
        //     'zipcode' => 'required',
        //     'city' => 'required',
        //     'state' => 'required'
        // ]);
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'email' => 'required|email|max:191',
            'password' => 'required|max:191',
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
            $customer = new Customer;
            $customer = Customer::find($id);
            if ($customer) {
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
                    'status' => 200,
                    'message' => 'Customer Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'customer' => 'No customer ID FOUND',
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
        $customer = Customer::find($id);
        // Customer::destroy($id);
        $customer->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Customer deleted successfully',
        ]);
    }
}
