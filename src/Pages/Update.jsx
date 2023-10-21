import { useLoaderData } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";
import Nav2 from "../Components/Nav2";

const Update = () => {
  const products = useLoaderData();
  const { 
    _id, 
    name, 
    brand, 
    type, 
    rating, 
    image, 
    description, 
    price 
     } = products;

  useEffect(() => {
    Aos.init();
  }, []);

  const handleUpdateProduct = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const price = form.price.value;
    const image = form.image.value;

    const updatedProductInfo = {name,brand,type,rating,description,price,image};
    console.log(updatedProductInfo);

    fetch(`https://brand-shop-server-jbppt2hrj-bushras-projects-96f4a913.vercel.app/products/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProductInfo),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0)
      {
        Swal.fire(
          'Success',
          'Product Updated Successfully!',
          'success'
        )
      }
    })
  }





  return (
    <div className="bg-[#F4F3F0]">
      <Nav2></Nav2>
      <div>
        <div className="container mx-auto bg-[#F4F3F0] pt-8">
          <div data-aos="fade-down" data-aos-anchor-placement="top-center">
            <h1 className="text-center text-4xl font-bold text-black">
              Update Product: {name}
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <form onSubmit={handleUpdateProduct} className="mt-20 px-4">
              {/* row for name and brand name*/}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-control  lg:w-1/2 ">
                  <label className="label">
                    <span className="text-black font-bold  bg-white">Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      defaultValue={name}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control lg:w-1/2 ">
                  <label className="label">
                    <span className="text-black  bg-white   font-bold">
                      Brand Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="brand"
                      placeholder="Brand Name"
                      defaultValue={brand}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* row for Type and Price*/}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-control  lg:w-1/2 ">
                  <label className="label">
                    <span className="text-black font-bold  bg-white">Type</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="type"
                      placeholder="Type"
                      defaultValue={type}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control lg:w-1/2 ">
                  <label className="label">
                    <span className="text-black  bg-white   font-bold">
                      Price
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      defaultValue={price}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* row for Rating and Description*/}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-control  lg:w-1/2 ">
                  <label className="label">
                    <span className="text-black font-bold  bg-white">
                      Rating
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="rating"
                      placeholder="Rating"
                      defaultValue={rating}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control lg:w-1/2 ">
                  <label className="label">
                    <span className="text-black  bg-white   font-bold">
                      Short Description
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="description"
                      placeholder="Short Description"
                      defaultValue={description}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              {/* row for image*/}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="form-control  lg:w-full ">
                  <label className="label">
                    <span className="text-black font-bold  bg-white">
                      Image
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="image"
                      placeholder="Image URL"
                      defaultValue={image}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <input
                type="submit"
                value="Update Product"
                className="btn btn-block bg-black text-white hover:bg-gray-900 mt-6"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Update;
