import ImageK from "./ImageK";

function Comment() {
  return (
    <div className="bg-white p-4 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <ImageK
          src="/userImg.jpeg"
          className=" w-12 h-12 rounded-full object-cover"
          w="40"
        />
        <span className="font-semibold text-lg">jhon deo</span>
        <span className="text-gray-400 text-sm">2 days ago</span>
      </div>
      <div className="mt-4 font-medium">
        <p className="text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laborum
          voluptatibus neque a quia sequi! Eligendi reiciendis architecto esse
          aut! Alias laborum natus ex, velit inventore voluptas? Tempore,
          numquam alias.
        </p>
      </div>
    </div>
  );
}

export default Comment;
