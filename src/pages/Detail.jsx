import React from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Detail</h1>
      <Link to="/">홈으로 이동</Link>
    </div>
  );
};

export default Detail;
