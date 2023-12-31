import React, { useEffect, useState } from "react";

import { Card } from "flowbite-react";

import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-arts")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">Our Art Collections</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card className="max-w-sm">
          <img src={book.imageURL} alt="" className="h-80" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.artTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            </p>

            <button className="bg-green-200 text-white font-semibold py-2 rounded"></button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
