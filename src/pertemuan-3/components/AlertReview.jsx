export default function AlertReview({ error, message }) {
    return (
      error && (
        <div className="mt-2 p-2 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p className="text-sm">{message}</p>
        </div>
      )
    );
  }