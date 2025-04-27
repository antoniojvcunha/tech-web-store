import React from 'react';
import { Link } from 'wouter';

const CategoryCard = ({ image, categoryName, link,  bgColor, colSpan}) => {
  return (
    <div className={`relative ${bgColor} ${colSpan} p-6 rounded-3xl overflow-hidden flex items-center transition-all duration-300 hover:scale-105`}>
      
      {/* Texto grande de fundo */}
      <h1 className="absolute top-12 left-6 text-5xl font-extrabold text-gray-700 opacity-20 z-0">
        {categoryName}
      </h1>

      {/* Imagem */}
      <div className="flex justify-center z-10 mt-4">
        <img src={image} alt={categoryName} className="h-40 object-contain" />
      </div>

      {/* Botão */}
      <div className="z-10 mt-4">
        <Link to={link}>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full cursor-pointer">
            Browse
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
