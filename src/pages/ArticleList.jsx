import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { artikelAPI } from "../services/artikelAPI";

const PER_PAGE = 3;

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await artikelAPI.fetchArtikel();
        setArticles(data);
      } catch (error) {
        console.error("Gagal ambil artikel:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(articles.length / PER_PAGE);
  const displayedArticles = articles.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Recent Blog Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">
                <Link
                  to={`/articles/${article.id}`}
                  className="text-pink-600 hover:underline"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="text-xs text-gray-500 mt-3">
                {article.author} • {article.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          &larr; Prev
        </button>
        <span className="text-sm">
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages || totalPages === 0}
          className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
