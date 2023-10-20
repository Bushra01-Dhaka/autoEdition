import { AiFillDelete } from "react-icons/ai";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";


const EachCart = ({ cart, newCart, setNewCart }) => {
  const { _id, name, brand, type, rating, image, price, description } = cart;

  const handleDelete = _id => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#191717',
        cancelButtonColor: '#4F4A45',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
       
       fetch(`http://localhost:5000/carts/${_id}`, {
        method: 'DELETE'
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.deletedCount > 0)
        {
            
            Swal.fire(
                'Deleted!',
                'Coffee has been deleted.',
                'success'
                
              )
              const remaining = newCart.filter(cof => cof._id !== _id);
              setNewCart(remaining);
              console.log(remaining)
        }
       })

         }
      })

  }

  


  return (
    <div>
      <div className="card h-[400px] mx-auto bg-base-100 shadow-xl rounded ">
        <figure>
          <img className="h-[200px] w-[70%] mx-auto p-4" src={image} alt="Shoes" />
        </figure>
        <div className="flex p-4 justify-evenly gap-4">
          <div>
            <h2 className=" text-black font-bold text-2xl">{name}</h2>
            <p className="text-black">{description}</p>
          </div>
          <div>
            <button onClick={() => handleDelete(_id)}  className="btn"><AiFillDelete className="text-2xl"></AiFillDelete></button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 p-4 mb-4 text-black">
          <div className="text-black">
            <p><span className="font-bold text-black">Brand:</span> {brand}</p>
            <p><span className="font-bold text-black">Type:</span> {type}</p>
          </div>
          <div>
            <p><span className="font-bold text-black">Price:</span> {price}</p>
            <p><span className="font-bold text-black">Rating:</span> {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

EachCart.propTypes = {
    cart: PropTypes.object.isRequired,
    setNewCart: PropTypes.func,
    newCart: PropTypes.array

}

export default EachCart;
