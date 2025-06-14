import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/register.json"
import { useContext, useState } from "react";
import AuthContex from "../../contex/AuthContex/AuthContex";
import SocialLogIn from "../shared/SocialLogIn";


const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {createUser,signInWithGoogle} = useContext(AuthContex);


  const handleRegister =(e)=>{
    e.preventDefault();
    setError('');
    setSuccess('');

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email,password}

    
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
   

    
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (!uppercasePattern.test(password)) {
      setError('Password must include at least one uppercase letter.');
      return;
    }

    if (!lowercasePattern.test(password)) {
      setError('Password must include at least one lowercase letter.');
      return;
    }
    createUser(email,password)
    .then(currentUser=>{
      const user = currentUser.user;
      // console.log(user)
      alert("user created successfully")
      form.reset();
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode,errorMessage)


  })}

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
    <div className="text-center lg:text-left w-96">
      
      <Lottie animationData={registerLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold ml-8 mt-4">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
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
          <button className="btn btn-primary">Register</button>
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

export default Register;