import React from "react";
import { CiGlass } from "react-icons/ci";
import { Link } from "react-router-dom";
const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 justify-center">
          {book?.map((book) => (
            <div
              key={book.id}
              className="rounded-lg w-60 h-auto bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="w-full h-[40%]">
                <img
                  src={"/uploads/" + book.image}
                  alt={book.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderEndEndRadius: "10px",
                    objectFit: "cover",
                  }}
                  onError={(e) => (e.target.src = "notfound.jpg")}
                />
              </div>
              {/* Book Details */}
              <div className="p-4 flex flex-col gap-2">
                <p className="text-sm text-center text-blue-600 font-semibold py-1 px-3 rounded-md bg-blue-100 hover:bg-blue-200 transition-colors cursor-pointer">
                  {book.s_name}
                </p>

                <h1 className="text-lg font-semibold text-gray-800 truncate">
                  {book.title}
                </h1>
                <p className="text-md text-gray-600">Rs{book.price}</p>
              </div>
              {/* Read More Button */}
              <div className="p-4">
                <Link
                  to={`/books/${book.id}`}
                  className="inline-block w-full text-center py-2 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 ease-in-out"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
