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
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://${process.env.REACT_APP_SERVER_DOMAIN}/product`);
        const resData = await res.json();
        console.log(resData);
        dispatch(setDataProduct(resData));
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    })();
  }, [dispatch]);
  

  console.log(productData);
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
