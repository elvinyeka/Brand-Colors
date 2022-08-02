import React, { useContext, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

import MainContext from "../MainContext";
import Download from "./Download";
import Brand from "./Brand";
import Loader from "./Loader";

const Collection = () => {
  const { slugs } = useParams();
  let navigate = useNavigate();
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext);
  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    navigate("/");
  };
  useEffect(() => {
    setSelectedBrands(slugs.split(","));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrands} className="back-btn">
          <button>
            <BsArrowLeftShort />
            All Brands
          </button>
        </Link>
        <Download />
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              once={true}
              key={uuidv4()}
              overflow={true}
              placeholder={<Loader />}
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
};

export default Collection;
