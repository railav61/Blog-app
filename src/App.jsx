import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
function App() {
  const { fetchblogposts } = useContext(AppContext);
  useEffect(() => {
    fetchblogposts();
  }, []);
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
export default App;
{
  /* <div className="bg-rose-200 h-20"></div>
      <div className="bg-rose-300 h-20"></div>
      <div className="bg-rose-400 h-20"></div>
      <div className="bg-rose-500 h-20"></div>
      <div className="bg-rose-600 h-20"></div>
      <div className="bg-rose-700 h-20"></div>
      <div className="bg-rose-800 h-20"></div>
      <div className="bg-rose-900 h-20"></div> */
}
