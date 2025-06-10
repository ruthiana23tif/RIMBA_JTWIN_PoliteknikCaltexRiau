import { useParams } from "react-router-dom";
import articles from "../data/articles.json";
import Header from "../layouts/Header";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <div className="p-4 text-red-600">Artikel tidak ditemukan.</div>;
  }

  return (
    <>
     
      <div className="max-w-3xl mx-auto p-6">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <p className="text-sm text-pink-500">{article.category}</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{article.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{article.author} • {article.date}</p>
        <p className="text-gray-700 leading-relaxed">{article.description}</p>
      </div>
    </>
  );
}
