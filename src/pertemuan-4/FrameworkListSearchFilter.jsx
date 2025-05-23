import { useState } from "react";
import frameworkData from "./framework.json";
import TailwindCSS from "../pertemuan-3/TailwindCSS";
import "./tailwind.css";

export default function FrameworkListSearchFilter() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        /*Tambah state lain beserta default value*/
    });

    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm);

        // const matchesTag = selectedTag
        //     ? framework.tags.includes(selectedTag)
        //     : true;
        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;
        return matchesSearch && matchesTag;
    });
    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];
    return (
        <div className="p-8">
            <input
                // type="text"

                value={dataForm.searchTerm}
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={handleChange}
            />

            <select
                name="selectedTag"
                value={dataForm.selectedTag}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {" "}
                        {/* harus ada key */}
                        {tag}
                    </option>
                ))}
            </select>
            <div className="grid grid-cols-3 md:grid-cols-4">
            {filteredFrameworks.map((item) => (
                <div 
                    key={item.id}
                    className="border overflow-auto p-4 mb-4 rounded-lg shadow-md bg-white"
                >
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>

                    {/* Menampilkan Developer */}
                    <p className="text-sm text-gray-500">
                        <strong>Developed by:</strong> {item.details.developer}(
                        {item.details.releaseYear})
                    </p>

                    {/* Menampilkan Link Official Website */}
                    <a
                        href={item.details.officialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Visit Website
                    </a>
                    <div className="mt-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
