import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";
import axios from "axios";
import { SignupBody } from "@ayushshivhare79/validation";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupBody>({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("HERE");
    try {
      const response = await axios.post(
        "http://localhost:8787/api/v1/user/signup",
        postInputs
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      //not working bro
      navigate("/signin");

      console.log(response.data.token);
    } catch (error) {
      alert("Error hogaya bhaiya");
    }
  };

  return (
    <>
      <div className=" grid grid-cols-2 ">
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center ">
          <div className="flex justify-center flex-col">
            <div>
              <h1 className="text-4xl font-medium">Create an account</h1>
              <h1 className="">Already have an account? Login</h1>
            </div>

            <div className=" p-2">
              <form action="">
                <div className="flex flex-col">
                  <Input
                    Label="Username"
                    placeholder="Enter your username"
                    onChange={(e) =>
                      setPostInputs((c) => ({ ...c, username: e.target.value }))
                    }
                  />
                  <Input
                    Label="First Name"
                    placeholder="First Name"
                    onChange={(e) =>
                      setPostInputs((c) => ({
                        ...c,
                        firstName: e.target.value,
                      }))
                    }
                  />
                  <Input
                    Label="Last Name"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setPostInputs((c) => ({ ...c, lastName: e.target.value }))
                    }
                  />
                  <Input
                    Label="Password"
                    placeholder="Enter your password"
                    onChange={(e) =>
                      setPostInputs((c) => ({ ...c, password: e.target.value }))
                    }
                  />
                  <Button label="Signup" onClick={handleClick} />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <Text />
        </div>
      </div>
    </>
  );
};

export default Signup;
