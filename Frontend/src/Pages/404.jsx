import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <img src='/coins-img.png' className="w-[300px] md:w-[500px] mb-4 text-gray-400" />
            <h1 className="text-3xl font-bold mb-2 text-gray-800">Sorry, this page isn't available.</h1>
            <p className="text-gray-600 mb-6">
                The link you followed may be broken, or Check the internet connection !.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Go back to Home
            </button>
        </div>
    );
};

export default NotFoundPage;
