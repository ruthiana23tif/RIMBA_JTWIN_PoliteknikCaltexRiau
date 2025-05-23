export default function ContactUs() {
    return (
      <section className="px-6 py-12 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Want to talk to us?</h2>
        <p className="text-gray-600 mb-8">
          Talk to one of our skin care representative
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  