import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100 dark:bg-gray-900">
            {/* 404 Title with Spinning Basketball */}
            <div className="flex items-center justify-center text-9xl font-extrabold text-green-500">
                <span>4</span>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/861/861512.png"
                    alt="Basketball"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 animate-spin-slow"
                />
                <span>4</span>
            </div>

            {/* Title */}
            <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
                Oops! Page Not Found
            </h2>

            {/* Message */}
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
                Looks like you took a shot... and missed the hoop! The page you’re
                looking for doesn’t exist.
            </p>

            {/* Back Button */}
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
            >
                Back to Home
            </Link>

            {/* Illustration */}
            <div className="mt-10">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/748/748404.png"
                    alt="Not Found Illustration"
                    className="w-24 h-24 mx-auto sm:w-32 sm:h-32 md:w-36 md:h-36"
                />
            </div>

            {/* Custom CSS for slow spin */}
            <style>
                {`
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
        `}
            </style>
        </div>
    );
}
