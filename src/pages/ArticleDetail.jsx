import { useParams } from "react-router-dom";
import articles from "../data/articles.json";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <div className="p-4 text-red-600">Artikel tidak ditemukan.</div>;
  }

  return (

      <div className="max-w-5xl mx-auto px-4 md:px-8 ">
        <h1 className="text-3xl md:text-4xl font-bold text-violet-700 leading-snug mb-2">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">{new Date(article.date).toLocaleDateString("id-ID", { day: '2-digit', month: 'long', year: 'numeric' })}</p>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-auto object-cover rounded-xl shadow-lg mb-6"
        />

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {article.description}
        </p>
      </div>
  );
}
