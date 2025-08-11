import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
    const navigate = useNavigate();

    const { logIn, setUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(result.user);
                navigate("/");
                setUser(user);
                toast.success("successfully logged in");
            })
            .catch(err => {
                toast.error("error", err);
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8  transition ">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login to <span className="text-blue-600">Sportify</span>
                </h2>

                <form onSubmit={handleLogin}>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {/* Forgot password */}
                    <div className="text-right mb-6">
                        <a
                            href="#"
                            className="text-blue-600 hover:underline text-sm font-medium"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login button */}
                    <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 shadow-md transition">
                        Login
                    </button>
                </form>

                {/* Sign up link */}
                <div>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don’t have an account?{" "}
                        <Link to={"/auth/signup"} className="text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Continue with Google */}
                <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-lg font-medium hover:bg-gray-50 shadow-sm transition">
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google logo"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>
            </div>
        </div>
    );
}
