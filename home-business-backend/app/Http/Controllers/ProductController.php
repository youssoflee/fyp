<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Product::all();
        $product = Product::with('ProductStatus')->get();
        return response()->json([
            'status' => 200,
            'products' => $product,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $name = $request->name;
        // $type = $request->type;
        // $desc = $request->desc;
        // $quantity = $request->quantity;
        // $price = $request->price;
        // return Product::create($request->all());
        $request->validate([
            'name' => 'required',
            'type' => 'required',
            'desc' => 'required',
            'quantity' => 'required',
            'price' => 'required',
            // 'zipcode' => 'required',
            // 'city' => 'required',
            // 'state' => 'required',
        ]);
        $product = Product::create(array_merge($request->all(), ['min_quantity' => 10, 'status_id' => 2]));

        if ($product) {
            return response()->json([
                'status' => 200,
                'message' => 'Product Added Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'product' => 'No product ID FOUND',
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
        return Product::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);
        if ($product) {
            return response()->json([
                'status' => 200,
                'product' => $product,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'product' => 'No product ID FOUND',
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
        //     'type' => 'required',
        //     'desc' => 'required',
        //     'quantity' => 'required',
        //     'price' => 'required'
        // ]);

        // $order = Product::find($id);
        // $order->update($request->all());
        // return $order;
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:191',
            'type' => 'required|max:191',
            'desc' => 'required|max:191',
            'quantity' => 'required|max:191',
            'price' => 'required|max:191',
            // 'zipcode' => 'required|max:191|min:5',
            // 'city' => 'required|max:191',
            // 'state' => 'required|max:191',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            // $product = new Product();
            $product = Product::find($id);
            if ($product) {
                $product->name = $request->input('name');
                $product->type = $request->input('type');
                $product->desc = $request->input('desc');
                $product->quantity = $request->input('quantity');
                $product->price = $request->input('price');
                // $customer->zipcode = $request->input('zipcode');
                // $customer->city = $request->input('city');
                // $customer->state = $request->input('state');
                $product->save();
                // echo $name;
                // echo $phone_num;
                // echo $address;
                // echo $zipcode;
                // echo $city;
                // echo $state;
                // echo $request;
                return response()->json([
                    'status' => 200,
                    'message' => 'Product Updated Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'product' => 'No product ID FOUND',
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
        // Product::destroy($id);
        $product = Product::find($id);
        // Customer::destroy($id);
        $product->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Product deleted successfully',
        ]);
    }

    public function checkStock()
    {
        $products = Product::all();
        foreach ($products as $p) {
            if ($p->quantity <= $p->min_quantity) {
                $p->status_id = 3;
            } else if ($p->quantity > $p->min_quantity) {
                $p->status_id = 1;
            } else if ($p->quantity == 0) {
                $p->status_id = 2;
            }
            $p->save();
        }
        return $products;
    }

    public function addStock(Request $request, $id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->quantity = $product->quantity + $request->input('quantity');;
            $product->save();
        }
        // return $product->quantity + input('quantity');
        return $product;
    }
}
