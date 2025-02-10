import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
function WritePage() {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <div>loading...</div>;
  if (isLoaded && !isSignedIn) return <div> you should sign in</div>;
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-cl font-light">write a post</h1>

      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          add a cover image
        </button>
        <input
          type="text"
          placeholder="tell your story"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm">category</label>
          <select name="cat" className="p-4 rounded-xl bg-white shadow-md">
            <option value="web-design">General</option>
            <option value="development">development</option>
            <option value="databases">databases</option>
            <option value="web-design">marketing</option>
            <option value="development">frontend devloper</option>
            <option value="databases">backend devloper</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="write your description"
          className="p-4 rounded-xl bg-white shadow-md"
        />

        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2">
            <h1>img</h1>
            <h1>v </h1>
          </div>

          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
          />
        </div>
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed">
          share post
        </button>
      </form>
    </div>
  );
}

export default WritePage;
