import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {

  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const [ loginError, setLoginError ] = useState(' ');
  const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();

  // Email & Password Login Handle
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(' ');
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInUser(email, password);
      console.log('login successful!');
      navigate('/');
    }
    catch (error) {
      console.error(error);
      setLoginError(error.message);
    }
    finally {
      setLoading(false);
    }
  };

  // Google Login handler
  const handleGoogleSignIn = async () => {
    setLoginError(' ');
    try {
      await signInWithGoogle();
      console.log('Google Login Successful!');
      navigate('/');
    }
    catch (error) {
      console.error(error);
      setLoginError(error.message);
    }
  };
  
    return (
        <div>
      <form onSubmit={handleLogin} className="w-full max-w-md shadow-2xl card bg-base-100 shrink-0 mt-[80px] mx-auto">
        <h1 className="text-4xl text-[#001F46] font-bold text-shadow-light">Login now!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input w-[330px]" placeholder="Email" />
            
            {/* Password */}
            <label className="label">Password</label>
            <input type="password"
            name='password'
            className="input w-[330px]" placeholder="Password" />
            <div className='mt-2 text-left'>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* Error Message */}
            {loginError && <p className="mt-2 text-red-500">{loginError}</p>}
            
            {/* Login button */}
              <button type="submit" className="mt-4 btn bg-[#001F46] text-white text-[17px]" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
              </button>

            {/* Google Login button */}
            <button
            onClick={handleGoogleSignIn}
            type='button'
            className='mt-4 btn btn-outline bg-transparent text-[#001F46] bg-[#001F46]'><FcGoogle className='text-[20px]'/> Login With Google</button>

            <Link to="/register" className="mt-4 font-semibold">You don't have an account? Please <span className="font-semibold text-[17px] text-yellow-500 cursor-pointer hover:underline">Register</span></Link>
          </fieldset>
        </div>
      </form>
    </div>
    );
};

export default Login;