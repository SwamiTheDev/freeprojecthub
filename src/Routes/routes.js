import Homesection from "../Pages/Home/Homepage";
// import ServiceSection from "../Pages/Services/Services";
import Project from "../Pages/Project/ProjectSection";
import ContactForm from "../Pages/Contact/ContactSection";
import Blog from "../Pages/Blog/BlogSection.jsx";
import ProjectCard from "../Components/Project/Projectcard";

const routes = [
  { path: "/", component: <Homesection />, exact: true },
  { path: "/home", component: <Homesection />, exact: true },
  { path: "/homesection", component: <Homesection />, exact: true },
  { path: "/hero", component: <Homesection />, exact: true },
  { path: "/Project", component: <Project />, exact: true },
  { path: "/projects", component: <Project />, exact: true },

  { path: "/works", component: <Project />, exact: true },

  { path: "/contact", component: <ContactForm /> },
  { path: "/contactus", component: <ContactForm /> },
  { path: "/contactme", component: <ContactForm /> },
  // <Route path="/post/:id" component={BlogPost} />,
  { path: "/blog", component: <Blog /> },
  // { path: "/blogs", component: <Home /> },
];

export default routes;
