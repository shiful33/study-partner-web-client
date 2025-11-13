import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  getAuth,
  updateProfile,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import AuthContext from "../../Context/AuthContext";


const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");


  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!user) {
      toast.error("You must be logged in to update profile.");
      setLoading(false);
      return;
    }

    const nameChanged = name !== user.displayName;
    const photoChanged = photo !== user.photoURL;
    const emailChanged = email !== user.email;
    const passwordChanged = newPassword.length > 0;

    if (!nameChanged && !photoChanged && !emailChanged && !passwordChanged) {
      toast.info("No changes detected to update.");
      setLoading(false);
      return;
    }

    try {
      if (emailChanged || passwordChanged) {
        
        if (!currentPassword) {
          toast.error(
            "Please enter your current password to change email or password."
          );
          setLoading(false);
          return;
        }

        // Re-authenticate
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        );
        await reauthenticateWithCredential(user, credential);
      }

      if (nameChanged || photoChanged) {
        await updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
      }

      if (emailChanged) {
        await updateEmail(user, email);
      }

      if (passwordChanged) {
        if (newPassword.length < 6) {
          toast.error(
            "New password must be at least 6 characters long (min 6 chars)."
          );
          setLoading(false);
          return;
        }
        await updatePassword(user, newPassword);
        setNewPassword("");
      }

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      if (error.code === "auth/wrong-password") {
        toast.error("Authentication failed. Current password is incorrect.");
      } else {
        toast.error("Update failed: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-4 py-12 mx-auto md:px-0">
      <h1 className="mb-10 text-3xl font-bold text-center text-shadow-light dark:light dark:text">
        Your Profile Dashboard
      </h1>

      <div className="flex-col items-center justify-center gap-10 lg:flex lg:flex-row">
        
        {/* User Profile Info-Left */}
        <div className="p-6 bg-white border-t-2 border-yellow-400 rounded-lg shadow-xl lg:w-1/3 h-fit">
          <div className="flex flex-col items-center">
            
            {/* Profile Image */}
            <div className="p-2 mb-4 overflow-hidden border-4 border-yellow-500 rounded-full shadow-lg h-50 w-50">
              <img
                src={
                  user?.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
                alt={user?.displayName || "User"}
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="text-2xl font-semibold text-[#001F46] mb-1">
              {user?.displayName || "User Name N/A"}
            </h2>
            <p className="mb-4 text-gray-600">{user?.email || "Email N/A"}</p>

            <div className="w-full mt-4 text-left">
              <h3 className="pb-2 mb-2 text-lg font-bold text-[#001F46] border-b">
                Details
              </h3>
              <p className="mb-2 text-gray-600">
                <strong>Account Status:</strong>{" "}
                <span className="text-[#08b625]">Active</span>
              </p>

              <p className="mb-2 text-gray-600">
                <strong>Phone:</strong> N/A (Update via form)
              </p>
            </div>
          </div>
        </div>

        {/* User Profile Info-Right */}
        <div className="p-8 bg-white rounded-lg shadow-xl lg:w-2/3">
          <h2 className="pb-2 mb-6 text-xl font-bold text-[#001F46]">
            Account Settings
          </h2>

          <div className="lg:w-2/3">
            <form onSubmit={handleUpdateProfile}>
              {/* Name Input */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  {" "}
                  Email Address{" "}
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="photoURL"
                >
                  {" "}
                  Photo URL{" "}
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="photoURL"
                  type="text"
                  placeholder="https://example.com/new_photo.jpg"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  required
                />
              </div>

              {/* Current Password Input */}
              <div className="mb-6 pt-">
                <p className="mb-2 text-sm font-semibold text-[#08b625]">
                  Required to change Email or Password
                </p>
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="currentPassword"
                >
                  {" "}
                  Current Password{" "}
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="currentPassword"
                  type="password"
                  placeholder="Enter Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {/* New Password Input */}
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="newPassword"
                >
                  {" "}
                  New Password (Optional){" "}
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="newPassword"
                  type="password"
                  placeholder="Leave blank to keep current password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-[#001F46] font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-200 cursor-pointer border-1 border-yellow-600"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
