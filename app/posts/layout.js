import React from 'react'

export const metadata={
    title: "posts page",
};

export default function({children}) {
  return (
    <div>
        <h1>posts layout</h1>
        {children}
    </div>
  )
}
