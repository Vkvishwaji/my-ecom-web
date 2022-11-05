import React from "react";

const Trusted = () => {
  return (
    <>
      <div className="shadow p-3 mb-5 bg-body rounded ">
      <p className="fs-4 text-center mt-5">Trusted By 1000+ Companies</p>
        <div className="container trust-s text-center">
          <div className="row">
            <div className="col"><img src="./images/logo-1.jpg" width='200px' height='200px' alt="logo1" /></div>
            <div className="col"><img src="./images/logo-2.jpg" width='200px' height='200px' alt="logo1" /></div>
            <div className="col"><img src="./images/logo-3.jpg" width='200px' height='200px' alt="logo1" /></div>
            <div className="col"><img src="./images/logo-4.jpg" width='200px' height='200px' alt="logo1" /></div>
            <div className="col"><img src="./images/logo-5.jpg" width='200px' height='200px' alt="logo1" /></div>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
