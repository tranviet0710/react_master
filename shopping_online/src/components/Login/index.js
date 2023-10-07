import React, { useContext, useState } from "react";
import AuthContext from "../../store/AuthContext";
import axios from "axios";
export default function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = async (event) => {
    await axios
      .post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("accessToken", res.data.token);
          localStorage.setItem("userId", res.data.id);
          login();
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            style={{ width: 50 + "vw" }}
          >
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <h1 className="text-center text-2xl text-green-dark">Login</h1>
              <form className="pt-6 pb-2 my-2">
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    User Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="username"
                    type="text"
                    value={username}
                    onChange={userNameChangeHandler}
                    placeholder="User name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                    id="password"
                    type="password"
                    value={password}
                    onChange={passwordChangeHandler}
                    placeholder="Password"
                  />
                </div>
                <div className="block md:flex items-center justify-between">
                  <div className="mt-4 md:mt-0">
                    <a href="#" className="text-green no-underline">
                      Forget Password?
                    </a>
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => props.updateModal()}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={loginHandler}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
