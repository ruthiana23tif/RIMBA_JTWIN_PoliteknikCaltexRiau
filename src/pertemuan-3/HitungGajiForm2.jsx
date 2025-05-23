import { useState } from "react";
import InputGaji from "./components/InputGaji";

import Alert from "./components/Alert";
export default function HitungGajiForm2() {
        const[gaji, setGaji] = useState("");
        const pajak = 0.1;
        const totalGaji = gaji-(gaji*pajak)
    return (
      <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Masukkan Gaji</h2>
        <InputGaji label="Gaji Pokok"
          type="number" 
          placeholder="Masukkan jumlah gaji" 
        onChange={(e) => setGaji(e.target.value)}
        />
         <Alert gaji={gaji} totalGaji={totalGaji}/>
			</div>
		</div>
	);
}
