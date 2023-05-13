import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handelAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const newCoffee = {name, supplier, category, chef, taste, details, photo};
        console.log(newCoffee);

        // send to the server

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'user successfully connected',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

  return (
    <div className="md:mx-24">
      <h3 className="text-3xl font-extrabold text-center my-4">
        Add new coffee
      </h3>

      <form onSubmit={handelAddCoffee}>

        {/* left side */}

        <div className="md:flex gap-4">
          <div className="w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  name="name"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Supplier"
                  className="input input-bordered w-full"
                  name="supplier"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Category"
                  className="input input-bordered w-full"
                  name="category"
                />
              </label>
            </div>
          </div>

        {/* right side */}

          <div className="w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Chef"
                  className="input input-bordered w-full"
                  name="chef"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Taste"
                  className="input input-bordered w-full"
                  name="taste"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Details"
                  className="input input-bordered w-full"
                  name="details"
                />
              </label>
            </div>
          </div>
        </div>

        {/* footer */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Enter Photo URL"
              className="input input-bordered w-full"
              name="photo"
            />
          </label>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block my-4" />
      </form>
    </div>
  );
};

export default AddCoffee;
