import { useState } from "react";

export default function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b pb-2">
      <button
        className="w-full text-left font-medium text-lg text-gray-800 flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600 text-sm">{content}</p>}
    </div>
  );
}
