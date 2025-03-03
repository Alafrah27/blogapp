import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";
function SideMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilltr = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        sort: e.target.value,
      });
    }
  };
  return (
    <div className="px-4 h-max sticky  top-16">
      <h1 className=" mb-4 text-2xl font-bold  text-gray-400">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-2xl font-bold  text-gray-400">Filter</h1>
      <div className="flex flex-col gap-2 text-sm ">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="newest"
            name="sort"
            onChange={handleFilltr}
            className="appearance-none bg-white cursor-pointer w-6 h-6 border-[1.5px] rounded-lg border-blue-600 checked:bg-blue-600"
          />
          newest
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="most-popular"
            name="sort"
            onChange={handleFilltr}
            className="appearance-none cursor-pointer bg-white w-6 h-6 border-[1.5px] rounded-lg border-blue-600 checked:bg-blue-600"
          />
          most popular
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="trending"
            name="sort"
            onChange={handleFilltr}
            className="appearance-none bg-white cursor-pointer w-6 h-6 border-[1.5px] rounded-lg border-blue-600 checked:bg-blue-600"
          />
          Trending
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="oldest"
            name="sort"
            onChange={handleFilltr}
            className="appearance-none bg-white cursor-pointer w-6 h-6 border-[1.5px] rounded-lg border-blue-600 checked:bg-blue-600"
          />
          oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-2xl font-bold  text-gray-400">Category</h1>
      <div className="flex flex-col gap-2 text-sm ">
        <Link to="/posts" className="underline text-blue-600">
          All
        </Link>
        <Link to="/posts?cat=web-design" className="underline text-blue-600">
          web design
        </Link>
        <Link to="/posts?cat=marketting" className="underline text-blue-600">
          marketting
        </Link>
        <Link
          to="/posts?cat=search-engines"
          className="underline text-blue-600"
        >
          Search Engines
        </Link>
        <Link to="/posts?cat=databases" className="underline text-blue-600">
          database
        </Link>
        <Link to="/posts?cat=devlopement" className="underline text-blue-600">
          devlopement
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
