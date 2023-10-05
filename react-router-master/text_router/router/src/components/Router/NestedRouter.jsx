import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./../NestedRouter/Dashboard";
import Statistics from "./../NestedRouter/Statistics ";
import Charts from "./../NestedRouter/Charts";
import UserProfile from "./../NestedRouter/UserProfile";

export default function NestedRouter() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <ul className="nav-menu">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="./dashboard/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="./dashboard/charts">Charts</Link>
            </li>
            <li>
              <Link to="./profile">User Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Dashboard />} />
          <Route path="dashboard/statistics" element={<Statistics />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboard/statistics" element={<Statistics />} />
            <Route path="charts" element={<Charts />} />
          </Route> */}
          <Route path="/profile" element={<UserProfile />} />
        </Routes>

        <Routes>
          <Route path="/profile" element={<Dashboard />} />
          {/* <Route path="dashboard/statistics" element={<Statistics />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="dashboard/statistics" element={<Statistics />} />
            <Route path="charts" element={<Charts />} />
          </Route>
          <Route path="profile" element={<UserProfile />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
