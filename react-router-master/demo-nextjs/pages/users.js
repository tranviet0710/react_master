import { useRouter } from 'next/router';
import React from 'react'

export default function users() {
    const router = useRouter();
    const { id, name } = router.query;
  return (
    <div>
          <h1>Hello {name}</h1>
            <h2>Id: {id}</h2>
    </div>
  )
}
