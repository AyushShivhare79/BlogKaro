import axios from "axios";
import { useState } from "react";

const UserData = () => {
  const [username, setUsername] = useState("");

  const getAlldata = async () => {
    const response = await axios.get(
      "http://localhost:8787/api/v1/user/userDetails",
      {
        headers: {
          authorId: 1,
        },
      }
    );
    console.log("Response form userData", response);
    const firsName = await response.data.firstName;

    console.log("Username hu bhai", firsName);
    setUsername(firsName);
  };
  getAlldata();

  return (
    <>
      <div>Hello</div>
      <div>{username}</div>
    </>
  );
};

export default UserData;
