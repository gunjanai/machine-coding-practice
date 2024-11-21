import { useEffect, useState } from "react";

function SortList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();

      setUsers(json);
    };

    loadUserData();
  }, []);

  const handleSort = (e) => {
    const btn = e.target.closest("button");
    const sortCol = btn.name;
    const newList = [...users];

    if (sortCol === "company") {
      newList.sort((a, b) => {
        if (a.company.name < b.company.name) return -1;
        if (a.company.name > b.company.name) return 1;
        return 0;
      });

      setUsers(newList);
    }

    newList.sort((a, b) => {
      if (a[sortCol] < b[sortCol]) return -1;
      if (a[sortCol] > b[sortCol]) return 1;
      return 0;
    });
    setUsers(newList);
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
              <div className="flex justify-center items-center">Address</div>
            </th>
          </tr>
        </thead>
        {users?.map((user) => (
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
