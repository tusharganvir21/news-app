import React, { useEffect, useState } from "react";
import { Newsitem } from "./Newsitem";

export const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-primary">News</span>
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {articles.length === 0 ? (
          <p className="text-center">No news available.</p>
        ) : (
          articles.map((news, index) => (
            <div className="col" key={index}>
              <Newsitem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
