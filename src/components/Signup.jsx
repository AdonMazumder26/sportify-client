import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {


    const navigate = useNavigate();


    const { createUser } = useContext(AuthContext);



    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;

        // Password validation
        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long!");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter!");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter!");
            return;
        }
        if (!/[0-9]/.test(password)) {
            toast.error("Password must contain at least one number!");
            return;
        }

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("successfully created user");
                navigate("/");
            })
            .catch(err => {
                toast.error("error", err.message);
            })


    };

    const handleGoogleSignUp = () => {
        console.log("Google sign-up triggered");
        // Add your Google auth logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs md:max-w-sm lg:max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                <form onSubmit={handleSignUp} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block font-medium mb-1">Photo URL</label>
                        <input
                            type="url"
                            name="photoURL"
                            placeholder="Enter your photo URL"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Continue with Google */}
                <div className="mt-4">
                    <button
                        onClick={handleGoogleSignUp}
                        className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Continue with Google
                    </button>
                </div>

                {/* Link to login */}
                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link to={"/auth/login"} className="text-blue-500 hover:underline">
                        Log In
                    </Link>
                </p>
                {/* Toast Container */}
                <ToastContainer position="top-right" />

            </div>
        </div >
    );
};

export default SignUp;
