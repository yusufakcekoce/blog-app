import React from "react";

function CreateNew({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-3 w-1/2 rounded">
        <form className="flex flex-col">
          <label className="text-left">Category</label>
          <select
            className="block w-full mb-5 outline-none p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="country"
            name="country"
          >
            <option value="technologies">Technologies</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>

          <label className="text-left">Header</label>
          <input
            type="text"
            className="block w-full mb-5 outline-none p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Header"
          />

          <label className="text-left">Subject</label>
          <input
            type="text"
            className="block w-full mb-5 outline-none p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Subject"
          />
        </form>

        <div className="flex justify-end">
          <button className="text-white right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-1">
            Send
          </button>
          <button
            onClick={onClose}
            className="text-white right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
