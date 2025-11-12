import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Register = () => {
  const { createUser, signInWithGoogle, user, signOutUser } =
    useContext(AuthContext);

  const [registerError, setRegisterError] = useState(" ");
  const [successMessage, setSuccessMessage] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError("");
    setSuccessMessage("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    // console.log(regExp.test(password));

    if (!regExp.test(password)) {
      toast.error(
        "The Password should be at least 8 characters long and include at least one uppercase letter, one lowercase latter, minimum one number, and one special character. "
      );
      setLoading(false);
      return;
    }

    try {
      const result = await createUser(email, password);
      const firebaseUser = result.user;

      await updateProfile(firebaseUser, {
        displayName: name,
        photoURL: photo,
      });

      const newUser = {
        name: name,
        email: email,
        image: photo,
      };

      // create user in the database
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      toast.success("Register successful! Please login now.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      await signOutUser();
      navigate("/login");
    } catch (error) {
      toast.error(error);
      setRegisterError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setRegisterError(" ");
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
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      navigate("/login");
    } catch (error) {
      toast.error(error);
      setRegisterError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="w-full md:max-w-md lg:max-w-lg mx-auto shadow-2xl card bg-base-100 shrink-0 my-[80px]"
      >
        <h1 className="text-4xl font-bold text-[#001F46] text-shadow-light mt-6 text-center">
          Register now!
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="text-[15px] text-[#001F46] font-semibold label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input lg:w-[465px]"
              placeholder="Name"
              required
            />

            {/* Email */}
            <label className="text-[15px] text-[#001F46] font-semibold label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input lg:w-[465px]"
              placeholder="Email"
              required
            />

            {/* Photo URL */}
            <label className="text-[15px] text-[#001F46] font-semibold label">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input lg:w-[465px]"
              placeholder="Photo URL"
              required
            />

            {/* Password */}
            <div className="relative">
              <label className="text-[15px] text-[#001F46] font-semibold label mb-1">
                Password
              </label>
              <br />
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input lg:w-[465px]"
                placeholder="**********"
                required
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute text-[16px] right-8 top-9 cursor-pointer"
              >
                {show ? <FaEye /> : <IoMdEyeOff />}
              </span>
            </div>

            <button
              type="submit"
              className="mt-4 btn bg-[#001F46] text-white text-[18px]"
              disabled={loading}
            >
              {loading ? "Processing..." : "Register"}
            </button>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="mt-4 btn btn-outline bg-transparent text-[#001F46] bg-[#001F46]"
              disabled={loading}
            >
              <FcGoogle className="text-[20px]" /> Register With Google
            </button>

            <Link to="/login" className="mt-4 font-semibold text-center">
              Already have an account? Please{" "}
              <span className="font-semibold text-[17px] text-yellow-500 cursor-pointer hover:underline">
                LogIn
              </span>
            </Link>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Register;
