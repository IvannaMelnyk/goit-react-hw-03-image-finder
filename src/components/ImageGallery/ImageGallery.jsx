import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map((image, index) => (
          <ImageGalleryItem
            src={image.webformatURL}
            alt={image.tags}
            largeImageURL={image.largeImageURL}
            key={index}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
