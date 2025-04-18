import "./App.css";
import { Header } from "./component/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  console.log("Response Data From Store", productData)
 useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://ecommersewebsite-production.up.railway.app/product`);
        if (!res.ok) {
          throw new Error(`Fetch failed: ${res.status}`);
        }
  
        const resData = await res.json();
        console.log("Response Data from Server", resData);
        dispatch(setDataProduct(resData));
      } catch (err) {
        console.error("❌ Failed to fetch product data:", err.message);
      }

    })();
  }, [dispatch]);
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16  bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
