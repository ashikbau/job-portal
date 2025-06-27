import Lottie from "lottie-react";
import signinLottieData from "../../assets/lottie/signin.json"
import { useContext } from "react";
import AuthContex from "../../contex/AuthContex/AuthContex";
import SocialLogIn from "../shared/SocialLogIn";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const {signInUser,signInWithGoogle} = useContext(AuthContex);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || "/";

    const handleSignIn =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        signInUser(email,password)
        .then(result=>{
            const user =result.user;
            // console.log(user)
            alert("user login sucessfully")
            form.reset();
            navigate(from);
        })
         .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode,errorMessage)


  })


  

    }

      const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error)
    })

  }
      
    return (
               <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-86">
        <Lottie animationData={signinLottieData}></Lottie>
      
      {/* <Lottie animationData={registerLottieData}></Lottie> */}
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold ml-8 mt-4">SignIN now!</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">SignIn</button>
        </div>
      </form>
      <div>
       
        <SocialLogIn></SocialLogIn>
         <button onClick={handleGoogleSignIn } className="btn btn-neutral w-full">Neutral</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;