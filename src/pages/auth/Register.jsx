export default function Register() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Join Glowshere Today ✨
            </h2>

            <form>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    Create Account
                </button>

                <p className="mt-4 text-center text-sm text-gray-500">
                    Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a>
                </p>
            </form>
        </div>
    )
}
