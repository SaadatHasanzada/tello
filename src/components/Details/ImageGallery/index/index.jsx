import React from "react";
import "./gallery.scss";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";

const MyGallery = ({ filteredUrl, setFilteredUrl }) => {
  const { product, colorId } = useSelector((state) => state.product);

  React.useEffect(() => {
    const urls = product?.assets
      ?.filter((obj) => colorId?.includes(obj.id))
      .map((el) => el.url);
    setFilteredUrl(urls);
  }, [colorId]);
  const images = filteredUrl?.map((url) => ({ original: url, thumbnail: url }));

  return (
    <>
      {images && (
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      )}
    </>
  );
};

export default MyGallery;
