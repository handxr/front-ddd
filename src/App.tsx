import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { postRoutes } from "./routes/post.routes";

function App() {
  const Router = createBrowserRouter([...postRoutes]);

  return <RouterProvider router={Router} />;
}

export default App;
