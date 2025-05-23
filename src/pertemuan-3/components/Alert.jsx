export default function Alert({ gaji, totalGaji }) {
    return (
      <div className="mb-3">
       {!gaji ? (
                <div className="mt-4 p-3 bg-red-100 border-1-4 border-red-500 text-red-700">
                    <p className="font-semibold">
                        Silahkan masukkan gaji yang valid (tidak boleh kosong atau negatif).
                    </p>
                </div>
            ) : (         
				<div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
					<p className="font-semibold">
						Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
					</p>
				</div>
            )}
      </div>
    );
  }
