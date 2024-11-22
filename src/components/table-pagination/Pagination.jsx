function Pagination({ pageNumber, changePageNumber }) {
  console.log(pageNumber);
  return (
    <div className=" flex items-start">
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          className={`border border-teal-700 p-2 px-4 mt-8 mr-2 ${
            page === pageNumber + 1 ? "bg-teal-700 text-white" : ""
          }`}
          onClick={() => changePageNumber(page - 1)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
