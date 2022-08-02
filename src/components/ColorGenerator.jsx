import React, { useState } from "react";

import Values from "values.js";
import SingleColor from "./SingleColor";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [colorName, setColorName] = useState("RebeccaPurple");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("RebeccaPurple").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  const handleSubmitSelect = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(colorName).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="color-generator">
      <section className="container section">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#be2edd"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <form onSubmit={handleSubmitSelect} className="section select">
        <h5>Or choose name</h5>
        <div className="select-box">
          <select
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            className={`form-select shadow-sm`}
          >
            <option>Choose color name</option>
            <option>AliceBlue</option>
            <option>AntiqueWhite</option>
            <option>Aqua</option>
            <option>Aquamarine</option>
            <option>Beige</option>
            <option>Bisque</option>
            <option>Black</option>
            <option>BlanchedAlmond</option>
            <option>Blue</option>
            <option>BlueViolet</option>
            <option>Brown</option>
            <option>BurlyWood</option>
            <option>CadetBlue</option>
            <option>Chartreuse</option>
            <option>Chocolate</option>
            <option>Coral</option>
            <option>CornflowerBlue</option>
            <option>Cornsilk</option>
            <option>Crimson</option>
            <option>Cyan</option>
            <option>DarkBlue</option>
            <option>DarkCyan</option>
            <option>DarkGoldenRod</option>
            <option>DarkGray</option>
            <option>DarkGrey</option>
            <option>DarkGreen</option>
            <option>DarkKhaki</option>
            <option>DarkMagenta</option>
            <option>DarkOliveGreen</option>
            <option>DarkOrange</option>
            <option>DarkOrchid</option>
            <option>DarkRed</option>
            <option>DarkSalmon</option>
            <option>DarkSeaGreen</option>
            <option>DarkSlateBlue</option>
            <option>DarkSlateGray</option>
            <option>DarkSlateGrey</option>
            <option>DarkTurquoise</option>
            <option>DarkViolet</option>
            <option>DeepPink</option>
            <option>DeepSkyBlue</option>
            <option>DimGray</option>
            <option>DimGrey</option>
            <option>DodgerBlue</option>
            <option>FireBrick</option>
            <option>FloralWhite</option>
            <option>ForestGreen</option>
            <option>Fuchsia</option>
            <option>Gainsboro</option>
            <option>GhostWhite</option>
            <option>Gold</option>
            <option>GoldenRod</option>
            <option>Gray</option>
            <option>Grey</option>
            <option>Green</option>
            <option>GreenYellow</option>
            <option>HoneyDew</option>
            <option>HotPink</option>
            <option>IndianRed</option>
            <option>Ivory</option>
            <option>Khaki</option>
            <option>Lavender</option>
            <option>LavenderBlush</option>
            <option>LawnGreen</option>
            <option>LemonChiffon</option>
            <option>LightBlue</option>
            <option>LightCoral </option>
            <option>LightCyan</option>
            <option>LightGoldenRodYellow</option>
            <option>LightGray</option>
            <option>LightGrey</option>
            <option>LightGreen</option>
            <option>LightPink</option>
            <option>LightSalmon</option>
            <option>LightSeaGreen</option>
            <option>LightSkyBlue</option>
            <option>LightSlateGray</option>
            <option>LightSlateGrey</option>
            <option>LightSteelBlue</option>
            <option>LightYellow</option>
            <option>Lime</option>
            <option>LimeGreen</option>
            <option>Linen</option>
            <option>Magenta</option>
            <option>Maroon</option>
            <option>MediumAquaMarine</option>
            <option>MediumBlue</option>
            <option>MediumOrchid</option>
            <option>MediumPurple</option>
            <option>MediumSlateBlue</option>
            <option>MediumSpringGreen</option>
            <option>MediumTurquoise</option>
            <option>MediumVioletRed</option>
            <option>MidnightBlue</option>
            <option>MintCream</option>
            <option>MistyRose</option>
            <option>Moccasin</option>
            <option>NavajoWhite </option>
            <option>Navy</option>
            <option>OldLace</option>
            <option>Olive</option>
            <option>OliveDrab</option>
            <option>Orange</option>
            <option>OrangeRed </option>
            <option>Orchid</option>
            <option>PaleGoldenRod</option>
            <option>PaleGreen</option>
            <option>PaleTurquoise</option>
            <option>PaleVioletRed</option>
            <option>PapayaWhip</option>
            <option>PeachPuff</option>
            <option>Peru</option>
            <option>Pink</option>
            <option>Plum</option>
            <option>PowderBlue</option>
            <option>Purple</option>
            <option>RebeccaPurple</option>
            <option>Red</option>
            <option>RosyBrown</option>
            <option>RoyalBlue</option>
            <option>SaddleBrown</option>
            <option>Salmon</option>
            <option>SandyBrown</option>
            <option>SeaGreen</option>
            <option>SeaShell</option>
            <option>Sienna</option>
            <option>Silver</option>
            <option>SkyBlue</option>
            <option>SlateBlue</option>
            <option>SlateGray</option>
            <option>SlateGrey</option>
            <option>Snow</option>
            <option>SpringGreen</option>
            <option>SteelBlue</option>
            <option>Tan</option>
            <option>Teal</option>
            <option>Thistle</option>
            <option>Tomato</option>
            <option>Turquoise</option>
            <option>Violet</option>
            <option>Wheat</option>
            <option>White</option>
            <option>WhiteSmoke</option>
            <option>Yellow</option>
            <option>YellowGreen</option>
          </select>
          <button className="btn" type="submit">
            submit
          </button>
        </div>
      </form>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ColorGenerator;
