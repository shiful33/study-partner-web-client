import React, { useContext, useState, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import AuthContext from "../Context/AuthContext";
import { FaUserEdit } from "react-icons/fa";
import { GiLoveMystery } from "react-icons/gi";
import { RiCollageFill } from "react-icons/ri";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const auth = getAuth();
  const emailRef = useRef(null);

  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  // Email & Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInUser(email, password);
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(error.message || "Login failed. Please try again.");
      toast.error("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleSignIn = async () => {
    setLoginError("");
    try {
      await signInWithGoogle();
      toast.success("Google Login Successful!");
      navigate("/");
    } catch (error) {
      console.error("Google Login error:", error);
      setLoginError(error.message || "Google login failed.");
      toast.error("Google login failed!");
    }
  };

  // Forgot Password
  const handleForgetPassword = () => {
    const email = emailRef.current?.value?.trim();

    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`Password reset link sent to ${email}`);
      })
      .catch((error) => {
        console.error("Password reset error:", error);
        if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else {
          toast.error("Failed to send reset link. Try again.");
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="w-full mx-auto mt-20 mb-10 shadow-lg md:max-w-md lg:max-w-lg card bg-base-100 shrink-0"
      >
        <h1 className="text-2xl text-[#001F46] font-bold text-shadow-light text-center mt-6">
          Login now!
        </h1>

        <div className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="font-semibold text-[#001F46] label">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="w-full input input-bordered"
              placeholder="Enter your email"
              required
            />

            {/* Password */}
            <div className="relative">
              <label className="label font-semibold text-[#001F46] mb-1">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="w-full pr-10 input input-bordered"
                placeholder="Enter password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute text-gray-600 cursor-pointer right-3 top-8"
              >
                {show ? <FaEye size={20} /> : <IoMdEyeOff size={20} />}
              </span>
            </div>

            {/* Forgot Password */}
            <label className="label">
              <a
                onClick={handleForgetPassword}
                className="text-red-500 cursor-pointer label-text-alt link link-hover hover:text-yellow-600"
              >
                Forgot password?
              </a>
            </label>

            {/* Error Message */}
            {loginError && (
              <p className="mt-2 text-sm text-center text-red-500">
                {loginError}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="mt-4 btn bg-[#001F46] text-white text-[17px] hover:bg-[#001f46dd]"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="mt-4 btn btn-outline bg-transparent text-[#001F46]"
            >
              <FcGoogle className="text-[20px] mr-2" /> Login With Google
            </button>

            {/* Register Link */}
            <p className="mt-4 font-medium text-center">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-yellow-500 hover:underline text-[16px]"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </form>

      <div className="text-center">
        <h2 className="mb-4 dark:light dark:text">JOIN OTHERS REQUIRE AS A</h2>
        <div className="flex justify-center gap-4 mb-16">
        <button className="btn btn-outline  dark:light dark:text text-[17px]"><FaUserEdit className="text-yellow-500 text-[22px]" />Student</button>
        <button className="btn btn-outline  dark:light dark:text text-[17px]"><GiLoveMystery className="text-yellow-500 text-[22px]" /> Donor</button>
        <button className="btn btn-outline  dark:light dark:text text-[17px]"><RiCollageFill className="text-yellow-500 text-[22px]" /> Institution</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
