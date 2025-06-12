export default function LoadingSpinner({ text = "Loading..." }) {
  return (
    // contoh penggunaan daisy ui
    <div className="flex justify-center items-center py-10">
      <span className="loading loading-spinner text-pink-500"></span>
    </div>
  );
}
