import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="container p-t-5 text-center">
        <div className="row main-col">
          <div className="col  services-1">
            <TbTruckDelivery className="icon-1" />
            <h4 className="fs-6 icon-text">Super Fast and Free Delivery</h4>
          </div>
          <div className="col  services-2">
            <div className="col service-col-1">
              <MdSecurity className="icon" />
              <h4 className="fs-6 icon-text">Non-contact Shipping</h4>
            </div>
            <div className="col service-col-1">
              <GiReceiveMoney className="icon" />
              <h4 className="fs-6 icon-text">Mony Back Guaranted</h4>
            </div>
          </div>
          <div className="col  services-3">
            <RiSecurePaymentLine className="icon-1" />
            <h4 className="fs-6 icon-text">Super Secure Payment System</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
