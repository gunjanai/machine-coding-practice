import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

function InfiniteTable() {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetchData(pageNumber);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNumber]);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >
      document.body.scrollHeight - 100
    ) {
      setPageNumber((prev) => {
        const newPage = prev + 1;
        fetchData(newPage);
        return newPage;
      });
    }
  };

  const fetchData = async (pageNumber) => {
    console.log(pageNumber);
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${pageNumber * 10}`
    );
    const data = await res.json();

    setTableData((prevData) => [...prevData, ...data?.products]);
  };

  console.log(tableData);

  return (
    <div>
      {loading && <Loader />}
      <h1 className="">Infinte Scrollable Table</h1>
      <table>
        <thead>
          <th className="text-center">ID</th>
          <th>Name</th>
          <th>Price</th>
        </thead>
        {tableData?.map((product) => (
          <tr key={product.id}>
            <td className="text-center">{product.id}</td>
            <td>{product.title}</td>
            <td>$ {product.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default InfiniteTable;
