import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../utility/ImageToBase64";
import { useState } from "react";
import { toast } from "react-hot-toast";
export const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(`http://localhost:8080/uploadProduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter required Fields");
    }
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-2 my-1"
          onChange={handleOnchange}
          value={data.name}
        />
        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-2 my-1"
          name="category"
          onChange={handleOnchange}
          value={data.category}
        >
          <option value={"other"}>select Category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetable"}>Vegetables</option>
          <option value={"icecream"}>Icecream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"piza"}>Piza</option>
          <option value={"rice"}>Rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
        </select>
        <label htmlFor="image">Image</label>
        <div className="h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center">
          {data.image ? (
            <img src={data.image} className="h-full" />
          ) : (
            <span className="text-5xl hover:cursor-pointer">
              <BsCloudUpload />
            </span>
          )}
          <input
            accept="image/"
            id="image"
            type={"file"}
            onChange={uploadImage}
            className="hidden"
          />
        </div>
        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          name="price"
          onChange={handleOnchange}
          value={data.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={3}
          className="bg-slate-200 p-1 my-1"
          name="description"
          onChange={handleOnchange}
          value={data.description}
        ></textarea>

        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};
