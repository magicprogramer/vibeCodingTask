'use client';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-purple-600 mb-4">Hello, Tailwind!</h1>
        <p className="text-gray-600 mb-6">This is a test component to verify Tailwind CSS is working properly.</p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}
