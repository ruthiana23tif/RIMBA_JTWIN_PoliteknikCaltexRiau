import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <div className="flex flex-col items-center justify-center mb-6">
                    <h1 className="text-4xl font-poppins font-extrabold text-gray-800">
                        <span className="text-green-500">Glow</span>
                        <span className="text-black">shere</span>
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">Shine from within ✨</p>
                </div>

                <Outlet />

                <p className="text-center text-xs text-gray-400 mt-8">
                    © 2025 Glowshere. All rights reserved.
                </p>
            </div>
        </div>
    )
}
