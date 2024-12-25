import React, { useState, useEffect } from "react";
import { MdOutlineEngineering, MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { TbZoomMoney } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";

const CategoriesGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Engineering",
      icon: <MdOutlineEngineering className="text-4xl" />,
    },
    {
      id: 2,
      name: "Marketing ",
      icon: <IoBagCheckOutline className="text-4xl text-gray-800" />,
    },

    {
      id: 3,
      name: "Product Design",
      icon: <AiOutlineProduct className="text-4xl text-gray-800" />,
    },
    {
      id: 4,
      name: "Design",
      icon: <MdOutlineDesignServices className="text-4xl text-gray-800" />,
    },
    {
      id: 5,
      name: "Data science",
      icon: <GoDatabase className="text-4xl text-gray-800" />,
    },
    {
      id: 6,
      name: "Sales",
      icon: <TbZoomMoney className="text-4xl text-gray-800" />,
    },
  ]; // useEffect ensures this runs once on component mount

  return (
    <main className="container w-full md:w-10/12 my-24 mx-auto">
      <div className="grid grid-cols-12 w-full gap-3 justify-center items-center">
        <div className="col-span-12 md:col-span-3 text-center md:text-left">
          <h3 className="font-medium text-2xl md:text-2xl lg:text-4xl "> Serach By Categories</h3>
          <p className="font-medium text-sm text-gray-500 my-3">Find. <br></br>BOOK.<br></br>GET BETTER.</p>
          <button className="btn bg-custom-gradient text-white rounded-xl min-h-10">
            See all
          </button>
        </div>
        <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-2">
          {categories.map((items) => {
            return (
              <div
                key={items.id}
                className="col-span-6 md:col-span-3 bg-white p-10 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <div className="flex flex-col items-center text-center">
                  <div>{items.icon}</div>
                  <h3 className="my-2 text-lg font-semibold text-gray-800">
                    {items.name}
                  </h3>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
};

export default CategoriesGrid;
