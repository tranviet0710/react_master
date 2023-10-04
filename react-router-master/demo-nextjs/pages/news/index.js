import Link from "next/link";
import React from "react";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <div>
        <a href="/news/1">New 1</a>
      </div>
      <div>
        <Link href="/news/2">New 2</Link>
      </div>
    </>
  );
}
