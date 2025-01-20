import PropTypes from 'prop-types';
import s from './ImageCard.module.css';

const ImageCard = ({
  info: {
    alt_description,
    urls: { small },
  }, onClick
}) => {
  return (
    <div>
      <img className={s.galleryImage} src={small} alt={alt_description} onClick={onClick} />
    </div>
  );
};

ImageCard.propTypes = {
  info: PropTypes.shape({
    alt_description: PropTypes.string,
    urls: PropTypes.shape({
      small: PropTypes.string,
    }),
  }),
};

export default ImageCard;