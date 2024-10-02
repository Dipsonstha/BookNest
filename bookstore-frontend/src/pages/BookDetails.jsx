import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // State to hold the book details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [buttonText, setButtonText] = useState("Call Now"); // State to manage button text

  // Fetch book details based on ID
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:80/BookNest/bookstore-backend/book/getSingleBook.php?id=${id}`
        );
        console.log(response.data);
        setBook(response.data); // Set the fetched book data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError("Error fetching book details");
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchBookDetails();
  }, [id]);

  // Handle Call Now button click
  const handleCallNow = () => {
    if (book) {
      const phoneNumber = "123-456-7890"; // Replace with actual phone number from book data if available
      setButtonText(phoneNumber); // Update button text to show phone number
    }
  };

  if (loading) {
    return <p>Loading book details...</p>; // Display loading state
  }

  if (error) {
    return <p>{error}</p>; // Display error message
  }

  // If book is not found
  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="container mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-green-600">Rs {book.price}</h1>
          <h2 className="text-xl font-semibold mt-1">{book.title}</h2>
          <div className="text-sm text-gray-500 flex items-center">
            <span className="mr-2">By:</span>
            <Link
              to={`/profile/${book.user_id}`} // Assuming user_id corresponds to the seller
              className="text-blue-500 hover:underline"
            >
              {book.userName} {/* Update to fetch and display seller name */}
            </Link>
            <span className="mx-2">|</span>
            {/* <span>Posted: {book.postedDate}</span> */}
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleCallNow} // Call the function when clicked
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700"
          >
            {buttonText} {/* Show current button text */}
          </button>
        </div>
      </div>

      {/* Book Image and Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        {/* Image Section */}
        <div>
          <img
            src={book.image ? `/uploads/${book.image}` : "notfound.jpg"} // Update image URL
            alt={book.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Description Section */}
        <div>
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="mt-2 text-gray-700">{book.description}</p>
          <div className="mt-4">
            <p className="text-gray-500">
              <strong>Condition:</strong> {book.book_condition}
            </p>
            <p className="text-gray-500">
              <strong>Date:</strong> {book.postedDate}{" "}
              {/* Ensure postedDate is in the book data */}
            </p>
            <p className="text-gray-500">
              <strong>Original Price:</strong> Rs {book.original_price}
            </p>
            <p className="text-gray-500 flex items-center">
              <CiLocationOn className="text-lg" />
              <span className="ml-2">
                <strong>Location:</strong> {book.location}{" "}
                {/* Make sure location is fetched correctly */}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
