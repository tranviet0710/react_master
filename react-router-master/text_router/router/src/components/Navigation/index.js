import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {/* <li>
                    <Link to="/contact">Contact</Link>
                </li> */}
                {/* Thẻ a */}
                <li>
            <a href="/contact">Contact</a>
          </li>
            </ul>
        </nav>
    )
}
