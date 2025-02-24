// write the book component code here
// write the book component code here
import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white w-64 text-center">
      {/* Book Cover Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      
      {/* Book Title */}
      <h2 className="mt-2 text-lg font-semibold">{name}</h2>
      
      {/* Book Genre */}
      <p className="text-gray-600">Genre: {genre}</p>
      
      {/* Book Author */}
      <p className="text-gray-600">Author: {author}</p>
    </div>
  );
};

export default BookCard;