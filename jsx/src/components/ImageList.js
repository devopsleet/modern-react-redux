import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image}></ImageShow>;
  });

  return <div>{renderedImages}</div>;
}

export default ImageList;
