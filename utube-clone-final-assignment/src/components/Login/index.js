import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthContext from "../../store/AuthContext";
const Login = (props) => {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToSignUpPage = () => {
    navigate("/register");
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  });
  const loginHandler = async (event) => {
    event.preventDefault();
    const loginData = await axios
      .post("http://localhost:5001/api/users/n-a/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          return res;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (loginData?.data.success === true) {
      login();
      localStorage.setItem("accessToken", loginData.data.data.accessToken);
      localStorage.setItem("email", loginData.data.data.email);
    }
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-center">
              <p
                className=""
                style={{
                  color: "#7648F8",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                LOGIN SYSTEM
              </p>
            </div>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={loginHandler}
            >
              <div className="flex items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-44"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={emailChangeHandler}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-44"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  minLength="8"
                  value={password}
                  onChange={passwordChangeHandler}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className=""></div>
                <button
                  type="submit"
                  className="w-[150px] text-white bg-[#7648F8] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  LOG IN
                </button>
                <button
                  type="reset"
                  className="w-[150px] text-gray-300 border border-inherit focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={() => {
                    setEmail("");
                    setPassword("");
                  }}
                >
                  RESET
                </button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-end">
                <a
                  href="#"
                  className="font-medium text-black hover:underline dark:text-primary-500 italic"
                  onClick={goToSignUpPage}
                >
                  You don't have any account?
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
