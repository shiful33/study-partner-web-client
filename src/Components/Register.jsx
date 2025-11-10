import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const { createUser, signInWithGoogle, user, signOutUser } = useContext(AuthContext);

  const [ registerError, setRegisterError ] = useState(' ');
  const [ successMessage, setSuccessMessage ] = useState(' ');
  const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();

        const handleRegister = async (e) => {
          e.preventDefault();
          setRegisterError('');
          setSuccessMessage('');
          setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
          setRegisterError('Password must be at least 6 characters long.');
          setLoading(false);
          return;
        }

        try {
          const result = await createUser(email, password);
          // const firebaseUser = result.user;

        const newUser = {
          name: name,
          email: email,
          image: photo,
        };        
      
      // create user in the database
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      
      setSuccessMessage('Register successful! please login now.');
      await signOutUser();
      navigate('/login');
      
    }
    catch (error) {
      console.error(error);
      setRegisterError(error.message);
    }
    finally {
      setLoading(false);
    }
  };
  
    const handleGoogleSignIn = async () => {
    setRegisterError(' ');
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      const firebaseUser = result.user;

      const newUser = {
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        image: firebaseUser.photoURL,
      };

      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      
      navigate('/login');
      
    }
    catch (error) {
      console.error(error);
      setRegisterError(error.message);
    }
    finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div>
      <form onSubmit={handleRegister} className="w-full max-w-md mx-auto shadow-2xl card bg-base-100 shrink-0 mt-[80px]">
        <h1 className="text-4xl font-bold text-[#001F46] text-shadow-light">Register now!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            
            {/* Name */}
            <label className="text-[16px] label">Name</label>
            <input type="text" name="name" className="input w-[330px]" placeholder="Name" required />

            {/* Email */}
            <label className="text-[16px] label">Email</label>
            <input type="email" name="email" className="input w-[330px]" placeholder="Email" required />

            {/* Photo URL */}
            <label className="text-[16px] label">Photo URL</label>
            <input type="text" name="photo" className="input w-[330px]" placeholder="Photo URL" required />
            
            {/* Password */}
            <label className="text-[16px] label">Password</label>
            <input type="password"
            name="password"
            className="input w-[330px]" placeholder="**********" required />

            <div className="w-full mt-2 text-start">
              {registerError && <p className="text-red-500">{registerError}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}
            </div>
            
            <div className="mt-2 text-start">
              <a className="link link-hover">Forgot password?</a>
            </div>
            
            <button type="submit" className="mt-4 btn bg-[#001F46] text-white text-[18px]" disabled={loading}>
              {loading ? 'Processing...' : 'Register' }
            </button>

            <button
            onClick={handleGoogleSignIn}
            type="button"
            className='mt-4 btn btn-outline bg-transparent text-[#001F46] bg-[#001F46]' disabled={loading}>
              <FcGoogle className='text-[20px]'/> Register With Google</button>
            
            <Link to="/login" className="mt-4 font-semibold">Already have an account? Please <span className="font-semibold text-[17px] text-yellow-500 cursor-pointer hover:underline">Log In</span></Link>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Register;
