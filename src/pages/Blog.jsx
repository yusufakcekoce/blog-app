import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { ToastContainer, toast } from "react-toastify";

function Blog() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/blogs/${id}`
  );

  const deleteBlog = () => {
    if (user) {
      fetch(`http://localhost:8800/api/blogs/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          window.location.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Please login for delete this blog", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

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
            <img src={data.photo} className="w-1/2" />
          </div>

          <div>
            <h1 className="font-bold">{data.header}</h1>
          </div>

          <div>
            <p>{data.subtitle}</p>
          </div>
          <div>
            <p>{data.title}</p>
          </div>

          <div>
            <button
              onClick={deleteBlog}
              type="submit"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </button>
            <ToastContainer />

            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
