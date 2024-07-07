import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { fetchblogposts, page, totalpage } = useContext(AppContext);
  let x = 0;
  function prevhandler() {
    if (page > 1) {
      x = page - 1;
      fetchblogposts(x);
    } else {
      fetchblogposts(totalpage);
    }
  }
  function nexthandler() {
    if (page < totalpage) {
      x = page + 1;
      fetchblogposts(x);
    } else {
      fetchblogposts(1);
    }
  }
  return (
    <div className="w-screen flex flex-row justify-evenly items-center fixed bottom-0 bg-white py-2 border-t-[1px] border-black">
      <div className="mr-[90px]">
        <button
          className="border-[1px] border-black p-2 h-10 rounded-lg"
          onClick={prevhandler}
        >
          Previous
        </button>
        <button
          className="border-[1px] border-black p-2 h-10 ml-2 rounded-lg"
          onClick={nexthandler}
        >
          Next
        </button>
      </div>
      <p>
        Page <span>{page}</span> of <span>{totalpage}</span>
      </p>
    </div>
  );
}
export default Pagination;
