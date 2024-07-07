import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Cards from "./Cards";
function Blogs() {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="flex justify-center">
      <div className="w-[700px] my-16">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div className="flex justify-center mt-5">
            <p>NO POST FOUND</p>
          </div>
        ) : (
          posts.map((post) => {
            return <Cards key={post.id} post={post} />;
          })
        )}
      </div>
    </div>
  );
}
export default Blogs;
