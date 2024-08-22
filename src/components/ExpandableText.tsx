import React, { ReactNode, useState } from "react";

interface props {
  children: String;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: props) => {
  const [expand, setExpand] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = expand ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpand(!expand)}>
        {expand ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
