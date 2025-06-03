import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import WatchVideo from "./pages/WatchVideo";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <SideBar />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/results",
    element: (
      <>
        <Header />
        <SideBar />
        <SearchResults />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/watch",
    element: (
      <>
        <Header />
        <WatchVideo />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
