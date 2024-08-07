import React, { useEffect, useState } from "react";
import { Newsitem } from "./Newsitem";

export const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=27fd7377d7eb480f9fe5ee587f92644c`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        if (!data || !data.articles) {
          console.error("Invalid data structure:", data);
          throw new Error("Invalid data structure");
        }
        // Check if articles is an array before accessing its length
        if (Array.isArray(data.articles) && data.articles.length > 0) {
          // Process articles
          console.log("Articles:", data.articles);
        } else {
          console.log("No articles found or invalid articles structure");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
