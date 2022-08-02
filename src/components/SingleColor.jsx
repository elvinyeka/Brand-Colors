import React, { useContext } from "react";
import Clipboard from "react-clipboard.js";
import { MdContentCopy } from "react-icons/md";
import MainContext from "../MainContext";
// import { BsClipboard } from "react-icons/bs";

// import rgbToHex from '../helpers/utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const { setCopied } = useContext(MainContext);
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb);
  const hex = `${hexColor}`;
  const setColor = (hex) => {
    setCopied(hex);
  };

  const copyIcon = index <= 10 ? "copy-icon" : "copy-icon color-light";

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <Clipboard
        data-clipboard-text={hex}
        onSuccess={() => setColor(hex)}
        className="brand-color"
        style={{
          backgroundColor: `transparent`,
          cursor: `pointer`,
          display: "flex",
        }}
      >
        <div className="color-content">
          <MdContentCopy className={copyIcon} />
          <p className="percent-value">{weight}%</p>
          <p className="color-value">#{hex}</p>
        </div>
      </Clipboard>
    </article>
  );
};

export default SingleColor;
