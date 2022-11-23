import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../src/context/ProductContext";

const API = "https://api.pujakaitem.com/api/products";
const SingalProduct = () => {
  const { getSingalProduct, isSingalLoading, singalProduct } = useProductContext();
  console.log(singalProduct);

  const { id } = useParams();
  // const {
  //   id: alias,
  //   name,
  //   company,
  //   price,
  //   description,
  //   category,
  //   stock,
  //   stars,
  //   reviews,
  // } = singalProduct;

  useEffect(() => {
    getSingalProduct(`${API}?id=${id}`);
  }, []);
  return <div>SingalProduct</div>;
};

export default SingalProduct;
