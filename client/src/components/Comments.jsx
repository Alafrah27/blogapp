import Comment from "./Comment";

function Comments() {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-2xl font-bold underline text-gray-400">Comments</h1>
      <div className="flex items-center justify-between gap-8">
        <textarea
          placeholder="write a comment...."
          className="w-full px-4 py-2 rounded-xl"
        />
        <button className="bg-blue-800 text-white px-4 py-2 rounded-xl mt-4">
          send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

export default Comments;
