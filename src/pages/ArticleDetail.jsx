import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { artikelAPI } from "../services/artikelAPI";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await artikelAPI.fetchArtikelById(id);
        if (data) {
          setArticle(data);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Gagal memuat artikel:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (notFound || !article)
    return <div className="p-4 text-red-600">Artikel tidak ditemukan.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-violet-700 leading-snug mb-2">
        {article.title}
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(article.date).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}{" "}
        • {article.author}
      </p>

      <img
        src={article.image_url}
        alt={article.title}
        className="w-full h-auto object-cover rounded-xl shadow-lg mb-6"
      />

      <p className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
        {article.content}
      </p>
    </div>
  );
}
