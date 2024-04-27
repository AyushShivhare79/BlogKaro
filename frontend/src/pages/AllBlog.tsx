import AllBlogComp from "../components/AllBlogComp";

export const AllBlog = () => {
  return (
    <>
      <div className="grid grid-cols-10 pt-20">
        <div className="grid col-span-8 border">
          <AllBlogComp />
        </div>

        <div className="grid col-span-2">
          <img src="" alt="Image" />
        </div>
      </div> 


    </>
  );
};

export default AllBlog;
