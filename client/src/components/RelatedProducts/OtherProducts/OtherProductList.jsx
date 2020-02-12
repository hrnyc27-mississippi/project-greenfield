import React, { useState, useEffect } from 'react';
import ProdCard from './ProdCard';

const OtherProductList = ({ relatedProds, relatedStyles, prodInfo }) => {
  const [relatedProductsIndex, setrelatedProductsIndex] = useState(0);

  useEffect(() => {
    setrelatedProductsIndex(0);
  }, [relatedProds]);

  const prodCards = relatedProds.map((product, index) => (
    <ProdCard
      key={index}
      product={product}
      style={relatedStyles[index]}
      prodInfo={prodInfo}
      type="related"
    />
  ));

  return (
    <div className="related-products">
      {relatedProductsIndex > 0 ? (
        <a
          className="related-prev"
          onClick={() => {
            if (relatedProductsIndex > 0) {
              setrelatedProductsIndex(prev => prev - 1);
            }
          }}
        >
          {/* {'🡠'} */}
          &#129120;
        </a>
      ) : (
        <></>
      )}
      {prodCards.slice(relatedProductsIndex, relatedProductsIndex + 4)}
      {relatedProductsIndex < relatedProds.length - 4 ? (
        <a
          className="related-next"
          onClick={() => {
            if (relatedProductsIndex < relatedProds.length - 4)
              setrelatedProductsIndex(prev => prev + 1);
          }}
        >
          {/* {'🡢'} */}
          &#129122;
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OtherProductList;
