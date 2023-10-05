import React from "react";
import { useRouter } from "next/router";
export default function index() {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.meetupId}</h1>
    </div>
  );
}
