import React from "react";
import CategoryCard from "./CategoryCard.jsx"; // (o componente que criámos antes)

const categories = [
  {
    imageSrc: "../images/gaming_removed_bg.png",
    title: "Enjoy With",
    categoryName: "GAMING",
    link: "/category/gaming",
    bgColor: "bg-gray-900",
    colSpan: "col-span-2",
  },
  {
    imageSrc: "../images/laptop_remove_bg.png",
    title: "Enjoy With",
    categoryName: "LAPTOPS",
    link: "/category/laptops",
    bgColor: "bg-orange-400",
    colSpan: "col-span-2",
  },
  {
    imageSrc: "../images/headphone_removed_bg.png",
    title: "Enjoy With",
    categoryName: "HEADPHONES",
    link: "/category/headphones",
    bgColor: "bg-blue-500",
    colSpan: "col-span-4",
  },
  {
    imageSrc: "../images/smartphone_removed_bg.png",
    title: "Enjoy With",
    categoryName: "SMARTPHONES",
    link: "/category/smartphones",
    bgColor: "bg-green-500",
    colSpan: "col-span-4",
  },
  {
    imageSrc: "../images/accessories_image-removebg-preview.png",
    title: "Enjoy With",
    categoryName: "ACCESSORIES",
    link: "/category/accessories",
    bgColor: "bg-yellow-300",
    colSpan: "col-span-2",
  },
  {
    imageSrc: "../images/tv2-removebg-preview.png",
    title: "Enjoy With",
    categoryName: "TV´S",
    link: "/category/smartwatches",
    bgColor: "bg-pink-500",
    colSpan: "col-span-2",
  },
];

const CategoriesGrid = () => {
  return (
    <div className="max-w-full mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6 my-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            imageSrc={category.imageSrc}
            title={category.title}
            categoryName={category.categoryName}
            link={category.link}
            bgColor={category.bgColor}
            colSpan={category.colSpan}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
