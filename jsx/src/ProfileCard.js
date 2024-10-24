function Profilecard({ title, handle, imageSrc, description}) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageSrc} alt="pda logo"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>

      {/* <img src={imageSrc} alt="alexa"></img> */}
    </div>
  );
}

export default Profilecard;
