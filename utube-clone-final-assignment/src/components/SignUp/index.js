import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import { useEffect } from "react";

const SignUp = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    firstName: "Trần",
    lastName: "Việt",
    password: "",
    password2: "",
    email: "",
  });
  const onAccountChange = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  });
  const handleRegister = (e) => {
    e.preventDefault();

    const result = axios
      .post("http://localhost:5001/api/users/n-a/register", account)
      .then((response) => {
        if (response.data.success === true) {
          console.log("Register successfully!!!");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
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
                  REGISTER SYSTEM
                </p>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
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
                    value={account.email}
                    onChange={onAccountChange}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
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
                    value={account.password}
                    onChange={onAccountChange}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className=""></div>
                  <button
                    type="submit"
                    className="w-[150px] text-white bg-[#7648F8] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={handleRegister}
                  >
                    SIGN UP
                  </button>
                  <button
                    type="reset"
                    className="w-[150px] text-gray-300 border border-inherit focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={() => {
                      setAccount({
                        ...account,
                        password: "",
                        email: "",
                      });
                    }}
                  >
                    RESET
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-end">
                  <a
                    href="/login"
                    className="font-medium text-black hover:underline dark:text-primary-500 italic"
                  >
                    You have account already?
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
