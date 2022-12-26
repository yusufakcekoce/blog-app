import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Cards() {
  const { data, loading, error } = useFetch("http://localhost:8800/api/blogs");

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  return (
    <div className="grid justify-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
        data.map((blog) => (
          <div className="mb-10" >
            <div className="max-w-sm bg-white border mt-5 mb-5 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 max-h-21 h-full">
              <Link to={`/blog/${blog._id}`}>
                <img className="rounded-lg" src={blog.photo} alt="" />

                <div className="p-5">
                  <p className="text-purple-800 font-medium">{blog.category}</p>

                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.header}
                  </h5>

                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    {blog.subtitle}
                  </p>
                  <div className="flex">
                    <p>
                      <img
                        className="h-9 w-9 rounded-full mt-2"
                        src={
                          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        alt=""
                      />
                    </p>
                    <div className="ml-3">
                      <p className="dark:text-white">Name Username</p>
                      <p className="text-gray-500 ">
                        {formatDate(blog.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cards;
