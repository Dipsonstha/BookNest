import React, { useEffect, useState } from "react";
import axios from "axios";

const BookForm = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [book, setBook] = useState({
    title: "",
    original_price: "",
    price: "",
    book_condition: "",
    description: "",
  });
  const [image, setImage] = useState(null); // State for image file

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:80/BookNest/bookstore-backend/categories/getCategories.php"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch subcategories when a category is selected
  useEffect(() => {
    const fetchSubcategories = async () => {
      if (selectedCategory) {
        try {
          const response = await axios.get(
            `http://localhost:80/BookNest/bookstore-backend/subcategories/getSubcategories.php?category_id=${selectedCategory}`
          );
          setSubcategories(response.data);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
        }
      } else {
        setSubcategories([]);
      }
    };
    fetchSubcategories();
  }, [selectedCategory]);

  // Handle input changes for text fields
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append all book details
    for (let key in book) {
      formData.append(key, book[key]);
    }

    // Add the selected category and subcategory to formData
    formData.append("category_id", selectedCategory);
    formData.append("subcategory_id", selectedSubcategory);

    // Append the image file if it exists
    if (image) {
      formData.append("image", image);
    }

    // Make the POST request to createBook.php
    try {
      const response = await axios.post(
        "http://localhost:80/BookNest/bookstore-backend/book/createBook.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status) {
        alert("Book added successfully!");
        // Clear the form by resetting the state
        setBook({
          title: "",
          original_price: "",
          price: "",
          book_condition: "",
          description: "",
        });
        setSelectedCategory("");
        setSelectedSubcategory("");
        setImage(null);
        setSubcategories([]);
      } else {
        alert("Failed to add book. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred: " + error.message); // Display error message
    }
  };

  return (
    <div className="p-6">
      {" "}
      <h2 className="text-center text-3xl pb-5">Post an Ad</h2>
      <form onSubmit={handleSubmit} className="p-8 border-x-8 border-y-4">
        {/* Form fields go here, same as before */}
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </label>

        <label className="block mb-2">
          Category:
          <select
            name="category_id"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSubcategories([]); // Reset subcategories when category changes
            }}
            required
            className="border rounded p-2 w-full"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-2">
          Subcategory:
          <select
            name="subcategory_id"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="">Select a subcategory</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-2">
          Original Price:
          <input
            type="text"
            step="0.01"
            name="original_price"
            value={book.original_price}
            maxLength={5}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </label>

        <label className="block mb-2">
          Price:
          <input
            type="text"
            step="0.01"
            name="price"
            value={book.price}
            onChange={handleChange}
            maxLength={5}
            required
            className="border rounded p-2 w-full"
          />
        </label>

        <label className="block mb-2">
          Book Condition:
          <input
            type="text"
            name="book_condition"
            value={book.book_condition}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </label>

        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          ></textarea>
        </label>

        <label className="block mb-2">
          Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border rounded p-2 w-full"
          />
        </label>

        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
