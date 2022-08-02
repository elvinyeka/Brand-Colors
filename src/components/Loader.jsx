import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={240}
      viewBox="0 0 600 240"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="5" y="6" rx="0" ry="0" width="60" height="40" />
      <rect x="83" y="5" rx="0" ry="0" width="60" height="40" />
      <rect x="162" y="5" rx="0" ry="0" width="60" height="40" />
      <rect x="238" y="3" rx="0" ry="0" width="60" height="40" />
      <rect x="5" y="61" rx="0" ry="0" width="60" height="40" />
      <rect x="84" y="59" rx="0" ry="0" width="60" height="40" />
      <rect x="323" y="112" rx="0" ry="0" width="60" height="40" />
      <rect x="398" y="112" rx="0" ry="0" width="60" height="40" />
    </ContentLoader>
  );
};

export default Loader;
