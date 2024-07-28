import { Layout } from "@/components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <h1>Home</h1> },
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
