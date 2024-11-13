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
