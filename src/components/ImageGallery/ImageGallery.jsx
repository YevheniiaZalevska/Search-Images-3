import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ articles, openModal }) => {
  return (
    <ul className={s.gallery}>
      {articles.map((article) => (
        <li key={article.id} className={s.galleryItem}>
          <ImageCard article={article} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;