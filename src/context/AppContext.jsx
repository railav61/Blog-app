import { baseurl } from "../baseurl";

const { createContext, useState } = require("react");

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setpost] = useState([]);
  const [page, setpage] = useState("1");
  const [totalpage, settotalpage] = useState(null);

  async function fetchblogposts(page = 1) {
    setloading(true);
    let url = `${baseurl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setpage(data.page);
      setpost(data.posts);
      settotalpage(data.totalPages);
    } catch (error) {
      alert("error in fetching data !!");
      setpage(1);
      setpost([]);
      settotalpage(null);
    }
    setloading(false);
  }

  function handlepagechange(page) {
    setpage(page);
    fetchblogposts(page);
  }

  const value = {
    loading,
    setloading,
    posts,
    setpost,
    page,
    setpage,
    totalpage,
    settotalpage,
    fetchblogposts,
    handlepagechange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
