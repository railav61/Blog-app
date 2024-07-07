function Cards({ post }) {
  return (
    <div className="mt-5">
      <h1 className="font-[800] text-lg">{post.title}</h1>
      <p className="mt-1">
        By
        <span>
          <i> {post.author} </i>
        </span>{" "}
        on <span>{post.category}</span>
      </p>
      <p className="mt-1">Posted on {post.date}</p>
      <p className="mt-2 font-medium">{post.content}</p>
      <div className="mt-2 mb-8 space-x-3">
        {post.tags.map((tag, index) => {
          return (
            <span className="text-blue-500 underline" key={index}>
              {`#${tag}`}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default Cards;
