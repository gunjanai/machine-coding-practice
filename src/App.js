import { useEffect } from "react";
import "./App.css";
import ParentComponent from "./components/useCallbackHook/ParentComponent";
import UseMemoComponent from "./components/useMemoHook/UseMemoComponent";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/slice/userSlice";
import AccordionWrapper from "./components/accordion/AccordionWrapper";
import AutoIncrementCounter from "./components/auto-increment-counter/AutoIncrementCounter";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
      {/* <ParentComponent /> */}
      {/* <UseMemoComponent /> */}
      {/* <AccordionWrapper /> */}

      {/* <AutoIncrementCounter /> */}
    </div>
  );
}

export default App;
