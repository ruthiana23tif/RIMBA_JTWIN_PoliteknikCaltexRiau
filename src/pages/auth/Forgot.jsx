export default function Forgot() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                Forgot Your Password? 🔒
            </h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
                Enter your email address and we'll send you a link to reset your password.
            </p>

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

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    Send Reset Link
                </button>

                <p className="mt-4 text-center text-sm text-gray-500">
                    Remembered your password? <a href="/login" className="text-green-500 hover:underline">Login</a>
                </p>
            </form>
        </div>
    )
}
