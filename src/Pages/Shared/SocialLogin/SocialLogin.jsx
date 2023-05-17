import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
// import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const googleSignIn = () => {
    googleLogin()
    .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
    })
    .catch(error=>{
        console.log(error.message);
    })
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center mb-5">
        <button onClick={googleSignIn} className="btn btn-circle btn-outline">
          G{/* <FaGoogle className="cursor-progress"></FaGoogle> */}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
