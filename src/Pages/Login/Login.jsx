import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Login = () => {

    const {signIn}=useContext(AuthContext);
    const location =useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn =(event)=>{
        event.preventDefault()
        const form=event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            navigate(from, {replace:true})
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-24 flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn}>
            <div className="card-body">
              <h2 className="text-center text-4xl text-bold">Login</h2>
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
                  value="Sign In"
                />
              </div>
              <p className="text-center">Or Sign in with</p>
              <div className="flex gap-2 justify-center">
                <FaGoogle className="cursor-progress"></FaGoogle>
                <FaFacebookF className="cursor-progress"></FaFacebookF>
                <FaLinkedinIn className="cursor-progress"></FaLinkedinIn>
              </div>
              <h2>New User ? Please <Link className="btn-primary text-white rounded p-1" to='/signup'>Sign Up</Link></h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
