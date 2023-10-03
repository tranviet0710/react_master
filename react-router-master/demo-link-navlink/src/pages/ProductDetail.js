import React from "react";
import { Link, useParams } from "react-router-dom";
export default function ProductDetail() {
  const params = useParams();
  return (
    <div>
      <p>Product Detail: {params.id}</p>
      <p>
        {/* default relative is set to route */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
}
