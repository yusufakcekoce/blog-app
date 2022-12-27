import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function CreateNew({ visible, onClose }) {
  const [formData, setFormData] = useState({
    category: "",
    header: "",
    subtitle: "",
    title: "",
    photo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (event.target.type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8800/api/blogs", formData).then((response) => {
      window.location.reload();
    });
    try {
      toast.success("Blog added successfully", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Something went wrong", {
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

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-3 w-1/2 rounded">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-left">Category</label>
          <select
            required
            value={formData.category}
            onChange={handleChange}
            className="block w-full mb-5 outline-none p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="category"
            name="category"
          >
            <option value="">Select Category</option>
            <option value="Technologies">Technologies</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Other">Other</option>
          </select>

          <label className="text-left">Header</label>
          <input
            required
            type="text"
            name="header"
            className="block w-full mb-5 outline-none p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Header"
            value={formData.header}
            onChange={handleChange}
          />

          <label className="text-left">Subtitle</label>
          <input
            required
            type="text"
            name="subtitle"
            className="block w-full mb-5 outline-none p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={handleChange}
          />

          <label className="text-left">Title</label>
          <textarea
            required
            type="text"
            name="title"
            className="block w-full mb-5 outline-none p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />

          <label className="text-left">Photo</label>
          <input required type="file" name="photo" onChange={handleChange} />

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-1"
            >
              Send
            </button>
            <ToastContainer />
            <button
              onClick={onClose}
              className="text-white right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNew;
