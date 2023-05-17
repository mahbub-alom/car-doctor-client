import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

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
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
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
              {/* <div className="flex gap-2 justify-center">
                
                <FaFacebookF className="cursor-progress"></FaFacebookF>
                <FaLinkedinIn className="cursor-progress"></FaLinkedinIn>
              </div> */}
            </div>
          </form>
          <p className="my-4 text-center">New to car Doctors? <Link to='/signup' className="text-orange-600 font-bold">Sign Up</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
