import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Swal from 'sweetalert2'

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const { title, _id, price, service_id, img } = service;

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      img,
      email,
      date,
      price: price,
      service_id: _id,
      service: title,
    };

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl mb-4">book service: {title}</h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <input type="date" className="input input-bordered" name="date" />
          </div>
          <div className="form-control">
            <input
              type="email"
              defaultValue={user?.email}
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={"$ " + price}
              className="input input-bordered"
              name="price"
            />
          </div>
          <div className="form-control"></div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
