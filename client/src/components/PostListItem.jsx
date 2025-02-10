import { Link } from "react-router-dom";
import ImageK from "./ImageK";

function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/2">
        <ImageK
          src="/postImg.jpeg"
          alt="post"
          className=" object-cover rounded-2xl"
          w="800"
        />
      </div>

      {/* {detail} */}

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/text" className="font-semibold text-3xl title text-gray-950">
          Lorem ipsum dolor sit amet,
          porro.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>written by</span>
          <Link className="text-blue-800">jhon deo</Link>
          <span>on</span>
          <Link className="text-blue-800">web Desingin</Link>
          <span>10 day ago</span>
        </div>

        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          perspiciatis recusandae minus expedita molestiae, ab earum, corrupti
          fugiat alias sapiente quae voluptatum hic! Expedita asperiores
          voluptatibus inventore, tempore impedit quisquam.
        </p>
        <Link to="/test" className="text-blue-800 underline text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostListItem;
