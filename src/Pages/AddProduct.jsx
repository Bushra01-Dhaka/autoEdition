
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";
import Nav2 from "../Components/Nav2";

const AddProduct = () => {

    useEffect(() => {
        Aos.init();
      }, []);

      const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const price = form.price.value;
        const image = form.image.value;

        const newProductInfo = {name,brand,type,rating,description,price,image};
        console.log(newProductInfo);

        fetch('http://localhost:5000/products', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newProductInfo),
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId)
          {
            Swal.fire(
              'Success',
              'Product Added Successfully!',
              'success'
            )
          }
        })
      }

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Nav2></Nav2>
      <div className="container mx-auto bg-[#F4F3F0] pt-8">
        <div data-aos="fade-down" data-aos-anchor-placement="top-center" >
          <h1 className="text-center text-4xl font-bold text-black">Add Product</h1>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <form onSubmit={handleAddProduct} className="mt-20 px-4">
            {/* row for name and brand name*/}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="form-control  lg:w-1/2 ">
                <label className="label">
                  <span className="text-black font-bold  bg-white">
                    Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
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
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

             {/* row for Type and Price*/}
             <div className="flex flex-col lg:flex-row gap-4">
              <div className="form-control  lg:w-1/2 ">
                <label className="label">
                  <span className="text-black font-bold  bg-white">
                   Type
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="type"
                    placeholder="Type"
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
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

            </div>
    
            <input type="submit" value="Add Product" className="btn btn-block bg-black text-white hover:bg-gray-900 mt-6"  />

          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddProduct;
