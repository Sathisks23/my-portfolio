"use client";

import { useState } from "react";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });

  const categories = ["Technology", "Lifestyle", "Business", "Travel", "Education"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("title", formData.title);
    postData.append("description", formData.description);
    postData.append("category", formData.category);
    postData.append("image", formData.image);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: postData,
      });

      if (response.ok) {
        alert("Post created successfully!");
        setFormData({ title: "", description: "", category: "", image: null });
      } else {
        alert("Failed to create post.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("An error occurred while creating the post.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
            className="mt-1 block w-full text-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
