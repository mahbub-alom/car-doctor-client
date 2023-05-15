import React, { useContext } from "react";
import signup from '../../../assets/images/login/login.svg';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProviders/AuthProviders";

const SignUp = () => {

    const {signUp}=useContext(AuthContext);

    const handleSignUp =(event)=>{
        event.preventDefault()
        const form=event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        
        signUp(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-24 flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={signup} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp}>
            <div className="card-body">
              <h2 className="text-center text-4xl text-bold">Sign Up</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-center">Or Sign up with</p>
              <div className="flex gap-2 justify-center">
                <FaGoogle className="cursor-progress"></FaGoogle>
                <FaFacebookF className="cursor-progress"></FaFacebookF>
                <FaLinkedinIn className="cursor-progress"></FaLinkedinIn>
              </div>
              <h2>
                Already Have an account ? Please {' '}
                <Link
                  className="btn-primary text-white rounded p-1"
                  to="/Login"
                >
                  Login
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
