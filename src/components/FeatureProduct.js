import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "../components/Product";
const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
        
  if (isLoading) {
    return <div>.......Loading</div>;
  }
  return (
    <>
      <section>
        <div className="container">
          <p className="fs-6">Check Now</p>
          <h4>Our Feature Services</h4>
           <div className="grid grid-three-column">
            {
                featureProducts.map((curElem)=>{
                    return <Product key={curElem.id}{...curElem}/>
                })
            }
           </div>




          {/* <div class="container text-center">
            <div className="row">
               <div className="col">
              Column
               </div>
              <div className="col">
               Column
               </div>
            <div className="col">
              Column
          </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;
