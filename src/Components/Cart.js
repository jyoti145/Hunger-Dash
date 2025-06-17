import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  
  const total = cartItems.reduce(
    (sum, item) =>
      sum +
     ((item.price
        ? item.price / 100
        : item.defaultPrice
        ? item.defaultPrice / 100
        : 0) * (item.quantity || 1)), 
    0
  );

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 min-h-[60vh]">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-60">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-28 h-28 mb-4 opacity-70"
          />
          <h2 className="text-xl font-semibold mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500">Add items to your cart to see them here.</p>
        </div>
      ) : (
        <>
          <div className="divide-y">
            {cartItems.map((item, idx) => (
              <div key={item.id + idx} className="flex items-center py-5">
                <img
                  src={
                    item.imageId
                      ? `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`
                      : "https://dummyimage.com/100x80/cccccc/000000&text=No+Image"
                  }
                  alt={item.name}
                  className="w-20 h-16 object-cover rounded border mr-4"
                />
                <div className="flex-1">
                  <div className="font-bold text-black text-base">{item.name}</div>
                  <div className="text-gray-800 font-semibold">
                    ₹
                    {item.price
                      ? item.price / 100
                      : item.defaultPrice
                      ? item.defaultPrice / 100
                      : "N/A"}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button
                      className="bg-orange-500 text-white px-3 py-1 font-bold text-lg hover:bg-orange-600"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-white font-semibold text-orange-500">
                      {item.quantity || 1}
                    </span>
                    <button
                      className="bg-orange-500 text-white px-3 py-1 font-bold text-lg hover:bg-orange-600"
                      onClick={() => dispatch(addItem(item))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8 border-t pt-4">
            <span className="text-xl font-bold">Total</span>
            <span className="text-xl font-bold text-orange-500">₹{total}</span>
          </div>
          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-lg shadow transition">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;