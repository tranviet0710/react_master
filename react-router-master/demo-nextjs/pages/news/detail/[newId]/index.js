import { useRouter } from "next/router";
import React from "react";

export default function NewsDetailPage() {
  const router = useRouter();
  const id = router.query.newId;
  return <h1>The News Detail Page : {id}</h1>;
}
