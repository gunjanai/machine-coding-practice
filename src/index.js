import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccordionWrapper from "./components/accordion/AccordionWrapper";
import Body from "./components/body/Body";
import AutoIncrementCounter from "./components/auto-increment-counter/AutoIncrementCounter";
import AutoComplete from "./components/autocomplete/AutoComplete";
import Carousel from "./components/carousel/Carousel";
import CountdownTimer from "./components/countdown-timer/CountdownTimer";
import CustomModal from "./components/custom-modal/CustomModal";
import InfiniteTable from "./components/infiniteTable/InfiniteTable";
import Loader from "./components/loader/Loader";
import ProtectedRoute from "./components/login/ProtectedRoute";
import Success from "./components/login/Success";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import SortList from "./components/sortList/SortList";
import StarRating from "./components/starRating/StarRating";
import Table from "./components/table-pagination/Table";
import Tabs from "./components/tabs/Tabs";
import Tictactoe from "./components/tic-tac-toe/Tictactoe";
import TrafficLights from "./components/traffic-lights/TrafficLights";
import TreeView from "./components/tree-view/TreeView";
import { data } from "./components/tree-view/data";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/accordion",
        element: <AccordionWrapper />,
      },
      {
        path: "/auto-increment-counter",
        element: <AutoIncrementCounter />,
      },
      {
        path: "/autocomplete",
        element: <AutoComplete />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
      },
      {
        path: "/countdown-timer",
        element: <CountdownTimer />,
      },
      {
        path: "/custom-modal",
        element: <CustomModal />,
      },
      {
        path: "/infinite-table",
        element: <InfiniteTable />,
      },
      {
        path: "/loader",
        element: <Loader />,
      },
      {
        path: "/login-success",
        element: (
          <ProtectedRoute>
            <Success />
          </ProtectedRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sort-list",
        element: <SortList />,
      },
      {
        path: "/star-rating",
        element: <StarRating />,
      },
      {
        path: "/table-pagination",
        element: <Table />,
      },
      {
        path: "/tabs",
        element: <Tabs />,
      },
      {
        path: "/tic-tac-toe",
        element: <Tictactoe />,
      },
      {
        path: "/traffic-lights",
        element: <TrafficLights />,
      },
      {
        path: "/tree-view-folder-structure",
        element: <TreeView data={data} />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>
);
