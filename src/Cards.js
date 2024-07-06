import React, { useState } from 'react';

const Cards = ({ id, info, image, name, release, remove }) => {
  const [readMore, setReadMore] = useState(false);
  const desc = readMore ? info : `${info.substring(0, 200)}...`;
  const navigateToPage = () => {
    window.location.href = 'https://www.imdb.com/?ref_=nv_home';
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
      <img src={image} alt={name} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-700 mb-2">{desc}</p>
          <button onClick={ navigateToPage }className="text-blue-500">
            Read more.
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Release Date: {release}</p>
          <button onClick={() => remove(id)} className="text-red-500 ml-4">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
