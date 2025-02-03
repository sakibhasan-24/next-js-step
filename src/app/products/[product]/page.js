import React from "react";

export default async function SingleProduct({ params }) {
  console.log(await params);
  return (
    <div>
      <h1 className="text-4xl text-center">this is Single Products</h1>
    </div>
  );
}
