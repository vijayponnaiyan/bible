import { createBrowserRouter } from "react-router-dom";
import MainLayots from "../layouts/MainLayots";
import Overview from "../pages/Overview";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayots />,
    children: [
      { index: true, element: <Overview /> },
      // { path: "users", element: <Users /> },
      // { path: "users/:id", element: <UserDetail /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
