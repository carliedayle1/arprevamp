const RightTestimonial = ({ title, description, author, image }) => {
  return (
    <div className="services-area ptb-80">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12 center">
            <img src={image} alt="main-pic" />
          </div>

          <div className="col-lg-6 col-md-12 services-content">
            <div className="section-title" style={{ marginTop: "2rem" }}>
              <h2>"{title}"</h2>
              <div className="bar"></div>
              <p style={{ textAlign: "justify", fontStyle: "italic" }}>
                {description}
              </p>
              <h4 style={{ marginTop: "2rem" }}>- {author}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightTestimonial;
