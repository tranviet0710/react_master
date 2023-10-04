import React from "react";
import { Link, useLocation } from "react-router-dom";
const Breadcrumb = () => {
  const location = useLocation();
  console.log("location.pathname", location.pathname);
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log("pathnames", pathnames);
  return (
    <div>
      {pathnames.length > 0 && (
        <nav className="flex justify-center">
          <ul className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/">Home</Link>
            </li>
            {pathnames.map((path, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return (
                <li key={path} className="inline-flex items-center">
                  {isLast ? (
                    <span>{path}</span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        class="w-3 h-3 text-gray-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      {path}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Breadcrumb;
