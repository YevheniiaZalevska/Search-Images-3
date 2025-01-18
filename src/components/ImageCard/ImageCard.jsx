import s from './ImageCard.module.css'

const ImageCard = ({ article, openModal }) => {
  return (
    <div className={s.container}
      onClick={() => {
        console.log("Image clicked:", article.urls.small);
        openModal(article.urls.regular);
      }}
    >
      <img className={s.img} src={article.urls.small} alt={article.alt_description} />
    </div>
  );
};

export default ImageCard;