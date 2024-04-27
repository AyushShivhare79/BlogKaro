import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBlogComp = () => {
  const [Listen, setListen] = useState([
    {
      id: "#",
      title: "Loading...",
      content: "Loading...",
      authorId: 0,
      author: {
        firstName: "",
      },
    },
  ]);
  //AirBlog name
  useEffect(() => {
    const callBackend = async () => {
      const oldResponse = await axios.get(
        "http://localhost:8787/api/v1/blog/bulk",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setListen(oldResponse.data);
    };
    callBackend();
  }, []);

  return (
    <>
      <div className="flex px-72 pt-10">
        <div>
          {Listen.map((data) => (
            <div>
              <div className="flex gap-5">
                <div className="flex justify-center border rounded-xl bg-slate-400 w-7 ">
                  {data.author.firstName[0] || " "}
                </div>

                <div>{data.author.firstName}</div>
                <div className=" text-slate-400">Date</div>
                <div>{data.id}</div>
              </div>

              <Link to={`/${data.id}`}>
                <h1 className="font-medium text-3xl">{data.title}</h1>

                <p className="border-b-2 pb-10 mb-8 ">
                  {data.content.length > 300
                    ? `${data.content.slice(0, 300)} ...`
                    : data.content}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//No need of this now changed backend and can fetch the userdata from their

// const UserData = () => {
//   const [username, setUsername] = useState("");

//   const getAlldata = async () => {
//     const response = await axios.get(
//       "http://localhost:8787/api/v1/user/userDetails",
//       {
//         headers: {
//           authorId: 1,
//         },
//       }
//     );
//     console.log("Response form userData", response);
//     const firsName = await response.data.firstName;

//     console.log("Username hu bhai", firsName);
//     setUsername(firsName);
//   };
//   getAlldata();
//   return (
//     <>
//       <div>{username}</div>
//     </>
//   );
// };

export default AllBlogComp;
