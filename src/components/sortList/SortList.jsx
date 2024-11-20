import { useEffect, useState } from "react";

function SortList() {
  const [users, setUsers] = useState([]);
  const [clonedList, setClonedList] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();

      setUsers(json);
      setClonedList(json);
    };

    loadUserData();
  }, []);

  const handleSort = (e) => {
    const btn = e.target.closest("button");
    const sortCol = btn.name;
    console.log(sortCol);
  };

  return (
    <div className="flex flex-col justify-between">
      <h1 className="text-3xl font-bold m-5">User List</h1>
      <table>
        <thead>
          <tr>
            <th className="border p-2 bg-teal-800 text-white">
              <div className="flex justify-center items-center">
                Name{" "}
                <button
                  name="name"
                  className="cursor-pointer"
                  onClick={handleSort}
                >
                  <div className="flex flex-col ml-4">
                    <span>˰</span>
                    <span>˅</span>
                  </div>
                </button>
              </div>
            </th>
            <th name="company" className="border p-2 bg-teal-800 text-white ">
              <div className="flex justify-center items-center">
                Company
                <button
                  name="company"
                  className="cursor-pointer"
                  onClick={handleSort}
                >
                  <div className="flex flex-col ml-4">
                    <span>˰</span>
                    <span>˅</span>
                  </div>
                </button>
              </div>
            </th>
            <th name="email" className="border p-2 bg-teal-800 text-white">
              <div className="flex justify-center items-center">
                Email
                <button
                  name="email"
                  className="cursor-pointer"
                  onClick={handleSort}
                >
                  <div className="flex flex-col ml-4">
                    <span>˰</span>
                    <span>˅</span>
                  </div>
                </button>
              </div>
            </th>
            <th name="phone" className="border p-2 bg-teal-800 text-white">
              <div className="flex justify-center items-center">
                Phone
                <button
                  name="phone"
                  className="cursor-pointer"
                  onClick={handleSort}
                >
                  <div className="flex flex-col ml-4">
                    <span>˰</span>
                    <span>˅</span>
                  </div>
                </button>
              </div>
            </th>
            <th name="address" className="border p-2 bg-teal-800 text-white">
              <div className="flex justify-center items-center">
                Address
                <button
                  name="address"
                  className="cursor-pointer"
                  onClick={handleSort}
                >
                  <div className="flex flex-col ml-4">
                    <span>˰</span>
                    <span>˅</span>
                  </div>
                </button>
              </div>
            </th>
          </tr>
        </thead>
        {clonedList?.map((user) => (
          <tr key={user.id}>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.company.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.phone}</td>
            <td className="border p-2">
              {user.address.suite +
                ", " +
                user.address.street +
                ", " +
                user.address.city +
                ", " +
                user.address.zipcode}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default SortList;
