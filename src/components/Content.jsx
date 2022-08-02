import React, { useContext } from "react";
import { List, AutoSizer } from "react-virtualized";

import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import Download from "./Download";
import Loader from "./Loader";

const Content = () => {
  const { brands } = useContext(MainContext);

  const rowRenderer = ({ key, index, style, isScrolling }) => {
    const content = isScrolling ? <Loader /> : <Brand brand={brands[index]} />;
    return (
      <div style={style} key={key}>
        {content}
      </div>
    );
  };

  return (
    <main className="content">
      <header className="header">
        <Search />
        <Download />
      </header>
      <section className="brands">
        {/* {brands.map((brand) => {
          return <Brand key={uuidv4()} brand={brand} />;
        })} */}
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowCount={brands.length}
              rowHeight={103}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </section>
    </main>
  );
};

export default Content;
