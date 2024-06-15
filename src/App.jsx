
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/quiz/:title",
          element: <Quiz />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;