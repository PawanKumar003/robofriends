import React from "react";

function Card(props) {
  const { id, name, email } = props;
  return (
    <div className="">
      <img src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h3 id="">{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;
