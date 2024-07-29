import { Layout } from "@/components/Layout/Admin/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Flow from "./components/Graph/Graph";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/visualizer", element: <Flow /> },
        { path: "about", element: <h1>About</h1> },
        { path: "contact", element: <h1>Contact</h1> },
        { path: "*", element: <h1>Not Found</h1> },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
