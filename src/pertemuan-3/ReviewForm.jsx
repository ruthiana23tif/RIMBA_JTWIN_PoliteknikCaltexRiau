import { useState } from "react";
import InputFieldReview from "./components/InputFieldReview.jsx";
import AlertReview from "./components/AlertReview.jsx";
export default function ReviewForm() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const isNameValid = name.trim() && !/\d/.test(name);
  const isReviewValid = review.trim().length >= 10;
  const isRatingValid = rating !== "";
  const isFormValid = isNameValid && isReviewValid && isRatingValid;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Review Produk</h2>
        
        <InputFieldReview 
          Label="Nama" 
          type="text" 
          placeholder="Masukkan nama" 
          onChange={(e) => setName(e.target.value)}
        />
        <AlertReview error={!isNameValid} message="Nama tidak boleh kosong atau mengandung angka" />
        
        <InputFieldReview 
          Label="Review" 
          type="text" 
          placeholder="Tulis review Anda" 
          onChange={(e) => setReview(e.target.value)}
        />
        <AlertReview error={!isReviewValid} message="Review minimal 10 karakter" />
        
        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-1">Rating</label>
          <select 
            value={rating} 
            onChange={(e) => setRating(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded">
            <option value="">Pilih Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        
        {isFormValid && (
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit Review
          </button>
        )}
      </div>
    </div>
  );
}