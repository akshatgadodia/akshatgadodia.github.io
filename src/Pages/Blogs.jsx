import React, { useState, useEffect } from "react";
import "./Stylesheets/Blogs.css";
import SectionHeading from "./Components/SectionHeading";
import DisplayBlog from "./Components/DisplayBlog";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Spin } from 'antd';

const Achievements = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akshatgadodia&api_key=o7zrqybzpmkhqjhh55yxjmu7op7cytfgwpbanbsm"
        );
        const data = await response.json();

        if (data.status !== "ok") {
          throw data.message;
        }
        setBlogsData(data.items);
      setIsLoading(false)

      } catch (error) {
        console.error(error);
      setIsLoading(false)

      }
    };
    fetchData();
  }, []);

  return (
    <div className="blogs" id="blogs">
      <SectionHeading
        heading="Blogs"
        quote="“Genius is one percent inspiration and ninety-nine percent perspiration.”"
        quoteBy="- Thomas Edison"
      />
      <div className="blogs-container">
        {!isLoading && blogsData.map((data, idx) => {
          return (
            <DisplayBlog
              key={idx}
              title={data.title}
              categories={data.categories}
              link={data.link}
            />
          );
        })}
      </div>
      {isLoading && 
        <div className="blogs-loader">
          <Spin size="large" spinning={isLoading}/>
        </div>
      }
      <div className="blogs-all-blogs">
        {blogsData.length == 0 && !isLoading && (
            <a
              href="https://medium.com/@akshatgadodia"
              target="_blank"
              className="blogs-display-more-button"
            >
              Unable to Load Blogs. View Blogs on Medium <CallMadeIcon fontSize="10px" />
            </a>
        )}
        {blogsData.length > 0 && !isLoading && (
          <a
            href="https://medium.com/@akshatgadodia"
            target="_blank"
            className="blogs-display-more-button"
          >
            View All Blogs on Medium <CallMadeIcon fontSize="10px" />
          </a>
        )}
      </div>
    </div>
  );
};
export default Achievements;
