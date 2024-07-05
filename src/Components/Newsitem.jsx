import React from "react";

export const Newsitem = ({ title, description, src, url }) => {
  const defaultImage = '/src/assets/img/default-news.jpg';

  return (
    <div 
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" 
      style={{
        maxWidth: "345px", 
        textAlign: "center",
        transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={src || defaultImage}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "Click the button below to read the full article and stay updated with the latest news."}
        </p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
