import { Link } from "react-router-dom";
import ImageK from "../components/ImageK";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-12">
      {/* detail */}
      <div className="flex gap-8">
        <div className="flex flex-col lg:w-3/5 gap-8">
          <h1 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            nulla rerum aliquid. Qui
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>written by</span>
            <Link className="text-blue-800">jhon deo</Link>
            <span>on</span>
            <Link className="text-blue-800">web Desingin</Link>
            <span>10 day ago</span>
          </div>
          <p className="text-black font-bold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            ipsa dolorum natus? Reprehenderit unde numquam exercitationem,
            facilis quibusdam cum
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImageK
            src="/featured1.jpeg"
            className="rounded-3xl object-cover"
            w="895"
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg  flex flex-col gap-4 text-justify">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            non sunt a, nulla, ratione nostrum quo perferendis temporibus enim
            dignissimos nesciunt aliquam consequatur quisquam iure minima?
            Voluptates sed sequi incidunt repellat eligendi? Totam officiis cum
            hic iste nesciunt rerum tempore, voluptatibus reiciendis molestiae
            inventore, minima commodi asperiores corrupti rem quae! non sunt a,
            nulla, ratione nostrum quo perferendis temporibus enim dignissimos
            nesciunt aliquam consequatur quisquam iure minima? Voluptates sed
            sequi incidunt repellat eligendi? Totam officiis cum hic iste
            nesciunt rerum tempore, voluptatibus reiciendis molestiae inventore,
            minima commodi asperiores corrupti rem quae!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-16">
          <h1 className="mt- mb-4 text-sm font-medium">author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <ImageK
                src="/userImg.jpeg"
                className="rounded-full object-cover w-12 h-12"
                w="40"
                h="40"
              />
              <Link className="font-medium underline text-blue-600">
                jhon deo
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis,
            </p>
            <div className="flex gap-4">
              <Link>
                <ImageK src="/facebook.svg" w="40" h="40" />
              </Link>
              <Link>
                <ImageK src="/instagram.svg" w="40" h="40" />
              </Link>
            </div>
            <PostMenuAction />
            <h1 className="mt-8 mb-4 text-sm font-medium"> Categries</h1>
            <div className="flex flex-col gap-2">
              <Link to="/" className="underline text-blue-600">
                All categorey
              </Link>
              <Link to="/" className="underline text-blue-600">
                web Desingin
              </Link>
              <Link to="/" className="underline text-blue-600">
                frontend devloper
              </Link>
              <Link to="/" className="underline text-blue-600">
                backend devloper
              </Link>
              <Link to="/" className="underline text-blue-600">
                marketting
              </Link>
            </div>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      {/* comment section */}
      <Comments />
    </div>
  );
}

export default SinglePostPage;
