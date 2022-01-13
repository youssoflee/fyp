<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function getCustomer()
    {
        $user = auth()->user();
        $customer = Customer::where('user_id', $user->id)->first();

        if ($customer) {
            return $customer;
        } else {
            return response('Customer not found.', 400);
        }
    }

    public function getCart()
    {
        $customer = $this->getCustomer();

        $order = Order::where('customer_id', $customer->id, '')->where('order_status', 'To Checkout')->get()->last();

        if ($order) {
            $order_detail_and_product = OrderDetail::with('Product')->where('order_id', $order->id)->get();
            $res = [];
            $cart = [];
            foreach ($order_detail_and_product as $detail) {
                $filter = [];
                $filter['product_name'] = $detail->product->name;
                $filter['purchase_quantity'] = $detail->purchase_quantity;
                $filter['amount'] = $detail->amount;
                array_push($cart, $filter);
            }

            $res['cart_id'] = $order->id;
            $res['cart'] = $cart;
            $res['total_amount'] = $order->total_amount;

            return response()->json(['result' => $res, 'status' => 200]);
        } else {
            return response()->json(['message' => 'No product']);
        }
    }

    public function addToCart(Request $request)
    {
        $customer = $this->getCustomer();
        $order = Order::create([
            'customer_id' => $customer->id,
            'total_amount' => $request->amount,
        ]);
        foreach ($request->order as $req) {
            OrderDetail::create([
                'order_id' => $order->id,
                'product_id' => $req['id'],
                'purchase_quantity' => $req['purchase_quantity'],
                'amount' => $req['amount'],
            ]);
        }
        $order->update(['order_status' => 'To Checkout']);
        return response()->json(['status' => 200, 'message' => 'Added to cart!']);
    }

    public function updateCart(Request $request)
    {
        $customer = $this->getCustomer();
        $order = Order::with('OrderDetail')->where('customer_id', $customer->id)->get()->last();
        $order_detail = $order->OrderDetail;
        foreach ($request->order as $req) {
            // $order_detail::create([
            //     'order_id' => $order->id,
            //     'product_id' => $req['id'],
            //     'purchase_quantity' => $req['purchase_quantity'],
            //     'amount' => $req['amount'],
            // ]);
        }
    }

    public function checkoutCart($id)
    {
        $order = Order::find($id);
        $order_product = OrderDetail::with('Product')->where('order_id', $order->id)->get();

        foreach ($order_product as $op) {
            $product = $op->product;
            $newQuantity = $product->quantity - $op->purchase_quantity;
            $product->update(['quantity' => $newQuantity]);
        }
        $order->order_status = 'To Pay';
        $order->save();
        return response()->json(['status' => 200, 'message' => 'Order placed succesfully!']);
    }
}
