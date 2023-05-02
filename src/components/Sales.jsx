import React from "react";
import Title from "./sides/Title";
import Item from "./sides/Item";
const Sales = ({ forpopular, endpoint: { title, items } }) => {
  // console.log(items.id);
  return (
    <>
      <div className="mx-20 lg:mx-10 md:mx-6 nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center  gap-7 md:gap-3 my-7 ${
            forpopular
              ? " grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : " grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {/* note:forpopular is not working */}
          {items?.map((items, i) => (
            <Item {...items} key={i} forpopular={forpopular} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
