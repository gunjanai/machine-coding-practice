import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

function InfiniteTable() {
  const [pageNumber, setPageNumber] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(pageNumber);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNumber]);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 100
    ) {
      setPageNumber((prev) => {
        const updatedPageNumber = prev + 10;
        fetchData(updatedPageNumber);
        return updatedPageNumber;
      });
    }
  };

  const fetchData = async (currentPage) => {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${currentPage}`
    );
    const data = await res.json();
    setTableData((prev) => [...prev, ...data?.products]);
    setLoading(false);
  };

  return (
    <div>
      {loading && <Loader />}
      <table className="w-[90%] m-10 bg-teal-700">
        <th className=" text-white text-xl font-bold p-4">id</th>
        <th className=" text-white text-xl font-bold p-4">Name</th>
        <th className=" text-white text-xl font-bold p-4">Price</th>

        {tableData?.map((item) => (
          <>
            <tr className="bg-gray-200">
              <td className="py-4">{item.id}</td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default InfiniteTable;
