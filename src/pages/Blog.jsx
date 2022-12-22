import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Blog() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/blogs/${id}`
  );

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            <p className="text-2xl font-bold">Loading...</p>
          </div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">Something went wrong :'(</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img src="/images/blog1.jpg" className="w-1/2" />
          </div>

          <div>
            <h1 className="font-bold">{data.header}</h1>
          </div>

          <div>
            <p>{data.title}</p>
          </div>

          <div>
            <p>{data.subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
