import React, { useEffect, useState } from "react";
// import CategoryForm from "./CategoryForm";
// import CategoriesApi from "../API/CategoriesApi";

const Category = () => {
//   const [categories, setCategories] = useState([]); // Initialize as empty array
//   //   const [loading, setLoading] = useState(true); // Add loading state if needed
//   const { getCategories } = CategoriesApi();

//   useEffect(() => {
//     getCategories("/category")
//       .then((res) => {
//         setCategories(res);
//         // setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching categories:", err);
//         // setLoading(false);
//       });
//   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>; // Optionally show loading indicator
  //   }

  return (
    <div className="container mt-5">
      {/* <CategoryForm /> */}
      <div className="mt-9 form-section">
        <h2 className="text-3xl text-center">Category</h2>
        <ul className="list-group">
          {/* {categories.map((category, index) => (
            <li key={index} className="list-group-item">
              <strong>{category.name}</strong>
              <br />
              {category.images && (
                <img
                  src={category.images}
                  alt={category.name}
                  className="h-40 mt-3 w-30 bg-slate-950"
                />
              )}
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Category;
