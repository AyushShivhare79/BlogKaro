import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogComp = () => {
  const [Listen, setListen] = useState({
    title: "Loading...",
    content: "Loading...",
    author: {
      firstName: "",
    },
  });

  const param = useParams();
  const value = param.id;

  useEffect(() => {
    const hereWego = async () => {
      const response = await axios.get(
        "http://localhost:8787/api/v1/blog/" + value,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const jsonData = await response.data;
      setListen(jsonData);
    };
    hereWego();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5 pt-10">
        <h1 className="font-medium text-5xl">{Listen.title}</h1>
        <div className=" text-slate-400">Date</div>
        <p className="border-b-2 text-lg">{Listen.content}</p>
      </div>
    </>
  );
};

export default BlogComp;
