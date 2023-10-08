import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import Product from "../Product";
// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ products, updateModal, updateCart }) {
  return (
    <>
      {products &&
        products.map((product, index) => (
          <Product
            key={index}
            product={product}
            updateModal={updateModal}
            updateCart={updateCart}
          />
        ))}
    </>
  );
}

function Pagination({ itemsPerPage, products, updateModal, updateCart }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex justify-end">
        <ReactPaginate
          className="react-paginate"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
      <div className="grid grid-cols-3">
        <Items
          products={currentItems}
          updateModal={updateModal}
          updateCart={updateCart}
        />
      </div>
    </>
  );
}

export default Pagination;
