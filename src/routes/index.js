import FindService from "../pages/FindService";
import FindSuppliers from "../pages/FindSuppliers";
// React router dom Libraries
const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");
const { default: Home } = require("../pages/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/FindSuppliers",
        element: <FindSuppliers />,
      },
      {
        path: "/FindService",
        element: <FindService />,
      },
    ],
  },
]);

export default router;
