const UploadBlogComp = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <input type="text" placeholder="Title" />
        <div>
          <textarea
            name=""
            id=""
            // cols="30"
            // rows="10"
            className="resize-none border-transparent overflow-auto"
            placeholder="Write your story"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default UploadBlogComp;
