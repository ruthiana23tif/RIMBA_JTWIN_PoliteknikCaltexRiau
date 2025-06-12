export default function Testimoni() {
  const reviews = [
    {
      message: "‘Great price, speedy delivery, great product!’",
      author: "Vivian",
    },
    {
      message:
        "‘I just wanted to tell you guys how much I LOVE this makeup remover! I can’t wait to try more of your products’",
      author: "Selena",
    },
    {
      message:
        "‘They have got the best face wash ever. Service as ever is fabulous’",
      author: "Mary",
    },
  ];

  return (
    <section className="px-6 py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">Reviews</h2>
      <p className="text-gray-600 mb-8">
        Hear what others have to say about us
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        {reviews.map((review, index) => (
          <div key={index} className="card w-full md:w-1/3 bg-base-100 shadow-md">
            <div className="card-body items-center text-center">
              <p className="italic text-gray-700">{review.message}</p>
              <p className="font-semibold text-gray-800 mt-4">– {review.author}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-outline btn-sm">See All</button>
    </section>
  );
}
