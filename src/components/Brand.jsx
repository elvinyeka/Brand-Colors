import React, { useContext } from "react";
import { MdContentCopy, MdDone } from "react-icons/md";
import Clipboard from "react-clipboard.js";
import MainContext from "../MainContext";

import { getContrastYIQ } from "../helpers";

const Brand = ({ brand }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);
  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };
  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h3 onClick={toggleSelected} className="brand-title">
        <MdDone className="title-icon" />
        {brand.title}
      </h3>
      <div className="brand-colors">
        {brand.colors.map((color, i) => {
          return (
            <Clipboard
              data-clipboard-text={`#${color}`}
              onSuccess={() => setColor(color)}
              className="brand-color"
              key={i}
              style={{
                backgroundColor: `#${color}`,
                color: `${getContrastYIQ(color)}`,
              }}
            >
              <MdContentCopy />
              <span>{color}</span>
            </Clipboard>
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
