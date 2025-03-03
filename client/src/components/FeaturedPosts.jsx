import { Link } from "react-router-dom";
import ImageK from "./ImageK";

function FeaturedPosts() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}

        <ImageK
          src="/featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />

        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">football</Link>
          <span className="text-gray-500">02/09/2020</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
          error,
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageK
              src="/featured4.jpeg"
              className="rounded-1xl object-cover w-[298px] h-full"
            />
          </div>

          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">marketing</Link>
              <span className="text-gray-500 text-sm">09/03/2053</span>
            </div>
            {/* title */}
            <Link
              to=""
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur
            </Link>
          </div>
        </div>

        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageK
              src="/featured3.jpeg"
              className="rounded-2xl object-cover w-[298px] h-full"
              w="298"
            />
          </div>

          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800"> web design</Link>
              <span className="text-gray-500 text-sm">03/2/2020</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              id. Et hic sit
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageK
              src="/featured2.jpeg"
              className="rounded-2xl object-cover w-[298px] h-full"
              w="298"
            />
          </div>

          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800"> web design</Link>
              <span className="text-gray-500 text-sm">03/2/2020</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              id. Et hic sit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
