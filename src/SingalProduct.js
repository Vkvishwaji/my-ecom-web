import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/ProductContext";
import Navigation from "./components/Navigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helper/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

const API = "https://api.pujakaitem.com/api/products";
const SingalProduct = () => {
  const { getSingalProduct, isSingalLoading, singalProduct } =
    useProductContext();
  console.log(singalProduct);

  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singalProduct;

  useEffect(() => {
    getSingalProduct(`${API}?id=${id}`);
  }, []);

  if (isSingalLoading) {
    return <div className="page_loading">Loading....</div>;
  }

  return (
    <>
      <Navigation title={name} />
      <div class="container">
        <div class="row row-cols-2">
          <div class="col">
            <div className="product_image">
              <MyImage imgs={image} />
            </div>
          </div>
          <div class="col">
            <div className="product_data">
              <h2>{name}</h2>
              <p>{stars}</p>
              <p>{reviews} reviews</p>
              <p className="product_data_price">
                MRP:
                <del>
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p className="product_data_price product_data_real_price">
                Deal Of The Day: <FormatPrice price={price} />
              </p>
              <p>{description}</p>
              <div className="product_waranty_data">
              <div className="product_data_waranty">
                <TbTruckDelivery className="waranty_icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product_data_waranty">
                <TbReplace className="waranty_icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product_data_waranty">
                <TbTruckDelivery className="waranty_icon" />
                <p>Tech Delivery</p>
              </div>
              <div className="product_data_waranty">
                <MdSecurity className="waranty_icon" />
                <p>2 Years Waranty</p>
              </div>
              </div>

              <div className="product_data_info">
                <p>Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span> </p>
                <p>ID: <span>{id}</span></p>
                <p>Brand: <span>{company}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingalProduct;
