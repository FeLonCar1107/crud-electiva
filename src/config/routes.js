import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";
import Sigin from "../pages/Admin/Sigin";
import GeneralLayout from "../layouts/GeneralLayout";
import SignIn from "../pages/Admin/SignIn/SignIn";

const routesAdmin = [
  // { path: "/admin", layout: GeneralLayout, component: Sigin },
  // { path: "/admin/contact", layout: GeneralLayout, component: Contact },
  { path: "/admin", layout: GeneralLayout, component: Home },
  { path: "/admin/login/*", layout: GeneralLayout, component: SignIn },
];

const routesGeneral = [
  { path: "/", layout: GeneralLayout, component: Home },
  { path: "*", layout: GeneralLayout, component: NotFound },
];

const projectRoutes = [...routesAdmin, ...routesGeneral];
export default projectRoutes;