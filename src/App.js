import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { forceCheck, forceVisible } from "react-lazyload";

import MainContext from "./MainContext";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Copied from "./components/Copied";
import { brandsArray } from "./data/brands";
import "./App.scss";
import Collection from "./components/Collection";
import ColorGenerator from "./components/ColorGenerator";

function App() {
  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(search))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  useEffect(() => {
    forceCheck();
    forceVisible();
  }, [brands]);
  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };

  return (
    <>
      <BrowserRouter>
        <MainContext.Provider value={data}>
          {copied && <Copied color={copied} />}
          <Sidebar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/collection/:slugs" element={<Collection />} />
            <Route path="/generator" element={<ColorGenerator />} />
          </Routes>
        </MainContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
