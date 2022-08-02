import React, { useContext, useEffect, useState } from "react";
import MainContext from "../MainContext";
import { MdLink, MdDownload, MdClose } from "react-icons/md";

const Download = () => {
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [extension, setExtension] = useState("css");
  const collectedClass = selectedBrands.length
    ? "downloads-collected"
    : "downloads-collected muted";
  const collection = selectedBrands.reverse().join(",");
  const getLink = () => {
    prompt(
      "Here's the URL to share",
      `http://localhost:3000/collection/${collection}`
    );
  };

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";
      switch (extension) {
        case "css":
          output += ":root {\n";
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            return brand.colors.map((color, key) => {
              return (output += `--${slug}-${key} : #${color}\n`);
            });
          });
          output += "}";
          break;
        case "scss":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            return brand.colors.map((color, key) => {
              // eslint-disable-next-line no-useless-escape
              return (output += `\$${slug}-${key} : #${color}\n`);
            });
          });
          break;
        case "less":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            return brand.colors.map((color, key) => {
              return (output += `@${slug}-${key} : #${color}\n`);
            });
          });
          break;
        default:
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);

      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrands, extension]);
  return (
    <div className="downloads">
      <div className={collectedClass}>
        <select
          onChange={(e) => setExtension(e.target.value)}
          className="downloads-select"
        >
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brands.${extension}`} href={downloadUrl}>
          <MdDownload />
        </a>
        <button onClick={getLink}>
          <MdLink />
        </button>
        <button onClick={() => setSelectedBrands([])}>
          <MdClose />
        </button>
        <p>{selectedBrands.length} brands collected</p>
      </div>
      <button className="downloads-allBrands">
        <MdDownload />
        All Brands
      </button>
    </div>
  );
};

export default Download;
