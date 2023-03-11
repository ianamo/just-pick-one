import React from "react";

export default function Item(props) {
  return (
    <div
      className="item"
      style={{
        borderColor: props.id == props.selected ? "red" : "black"
      }}
      onClick={function () {
        props.deleteMethod(props.id);
      }}
    >
      <span className="item-name">{props.name}</span>
    </div>
  );
}
