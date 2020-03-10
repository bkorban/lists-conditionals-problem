import React from "react";

const charComponent = props => {
  const styles = {
    display: "inlineBlock",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return (
    <div style={styles} onClick={props.onDelete}>
      {props.char}
    </div>
  );
};

export default charComponent;
