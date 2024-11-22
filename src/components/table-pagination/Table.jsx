import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Loader from "../loader/Loader";

function Table() {
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTableData(pageNumber);
  }, [pageNumber]);

  const fetchTableData = async (pageNumber) => {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${pageNumber * 10}`
    );
    const data = await res.json();

    setTableData(data.products);
    setLoading(false);
  };

  return (
    <>
      <div className="w-[100vw] flex flex-col items-center">
        <h1 className="font-bold text-4xl mt-8">Table with Pagination</h1>
        <table className="w-[90vw] mt-8">
          <thead className="bg-teal-700 text-white">
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </thead>

          <tbody>
            {loading ? (
              <Loader />
            ) : (
              tableData.map((row) => (
                <>
                  <tr className=" border border-gray-400">
                    <td className="p-2">{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.price}</td>
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table>
        <Pagination pageNumber={pageNumber} changePageNumber={setPageNumber} />
      </div>
    </>
  );
}

export default Table;
