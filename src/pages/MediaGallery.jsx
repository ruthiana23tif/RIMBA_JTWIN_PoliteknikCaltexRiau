import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { galleryAPI } from "../services/galleryAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";

// Tambahkan ini 👇
function extractYouTubeID(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function MediaGallery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await galleryAPI.fetchGallery();
        setData(result);
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    500: 1,
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertBox>{error}</AlertBox>;
  if (data.length === 0) return <EmptyState message="Belum ada media." />;

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-4 p-4 "
      columnClassName="masonry-column"
    >
      {data.map((item) => {
        const isYouTube = item.file.includes("youtube.com") || item.file.includes("youtu.be");
        const isVideo = /\.(mp4|webm|ogg)(\?.*)?$/.test(item.file) || isYouTube;


        return (
          <div
            key={item.id}
            className="mb-4 overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition-shadow duration-300"
          >
            {isYouTube ? (
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeID(item.file)}`}
                title={`YouTube video ${item.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video rounded-xl"
              />
            ) : isVideo ? (
              <video
                src={item.file}
                controls
                className="w-full h-auto object-cover"
              />
            ) : (
              <img
                src={item.file}
                alt={`media-${item.id}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            )}
          </div>
        );
      })}
    </Masonry>
  );
}
