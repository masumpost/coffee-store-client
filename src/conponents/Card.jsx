import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ coffee, coffees, setCoffees }) => {
  
  
    const { _id, name, supplier, category,  taste, photo } = coffee;

  const handelDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="w-full flex justify-between pr-2 items-center">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{supplier}</p>
          <p>{category}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical gap-1">
            <button className="btn">View</button>
            <Link to={`/updateCoffee/${_id}`}>
                <button className="btn">Edit</button>
            </Link>
            <button
              onClick={() => handelDelete(_id)}
              className="btn bg-red-700"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
