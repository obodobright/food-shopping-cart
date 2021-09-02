import React, { useState } from "react";

const Shop = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      goods: "Rice",
      quantity: 0,
      price: 10,
      img: "https://media.istockphoto.com/photos/jollof-rice-with-chicken-and-fried-plantain-west-african-cuisine-picture-id644430370?k=20&m=644430370&s=612x612&w=0&h=faqglBnxnZWd6BRdSMh4NmFg2tZZwmG4_gqXDGkM-AA=",
    },
    {
      id: 2,
      goods: "Bean",
      quantity: 0,
      price: 15,
      img: "https://media.istockphoto.com/photos/nigerian-bean-pottage-with-deep-fried-plantains-picture-id1008418658?k=20&m=1008418658&s=612x612&w=0&h=zOhd6Pe6KIPAKMC9TI8ZQMfMSIlP03z7KXQ1pCvmkWA=",
    },
    {
      id: 3,
      goods: "Babecuque",
      quantity: 0,
      price: 8,
      img: "https://media.istockphoto.com/photos/roasted-suya-on-display-picture-id1269320921?k=20&m=1269320921&s=612x612&w=0&h=st_hjyNyBWYwaXrnmkmgBNzc8INZ__0SYcN-9EcZLuo=",
    },
    {
      id: 3,
      goods: "Asun",
      quantity: 0,
      price: 20,
      img: "https://media.istockphoto.com/photos/pieces-of-freshly-roasted-chicken-in-tray-picture-id1087790060?k=20&m=1087790060&s=612x612&w=0&h=x9XNNfB84pV126sTwVt-uzY8Amp3ukJSV8_hnntUqmY=",
    },
    {
      id: 4,
      goods: "Sharwama",
      quantity: 0,
      price: 14,
      img: "https://media.istockphoto.com/photos/chicken-and-sausage-shawarma-picture-id1067935326?k=20&m=1067935326&s=612x612&w=0&h=iTQaPjzZzKMlKw9fmpDljTAlCbGfBRfvv-Z9DSVjtOs=",
    },
    {
      id: 5,
      goods: "Small Chops",
      quantity: 0,
      price: 10,
      img: "https://media.istockphoto.com/photos/nigerian-finger-snacks-meat-pie-puff-puff-and-sausage-roll-picture-id1159454199?k=20&m=1159454199&s=612x612&w=0&h=OkY6vbQrAOSJsJ-1hvGsluEjUVYvkFndCE-uhd5Vok8=",
    },
  ]);

  function addProduct(id) {
    const products = product.map((p) => {
      if (p.id === id) {
        p.quantity = p.quantity + 1;
      }
      return p;
    });
    setProduct(products);
  }

  const decreaseProduct = (id) => {
    setProduct(
      product.map((p) => {
        if (p.id === id) {
          p.quantity = p.quantity - 1;
        }
        return p;
      })
    );
  };

  const quantity = product.map((quantity) => quantity.quantity);

  const handleClearOrder = () => {
    const getQuantity = product.map((p) => {
      p.quantity = 0;

      return p;
    });
    setProduct(getQuantity);
  };
  

  function SumQuantity(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  const viewTotalQuality = SumQuantity(quantity);

  return (
    <React.Fragment>
      <main>
        <h3>Total Product: {viewTotalQuality}</h3>
      </main>
      <div>
        {product.map((products) => {
          return (
            <div key={products.id} className="bg-warning card m-3 text-center text-white" style={{ width: "500px", }}>
              <img src={products.img} alt={products.goods} width="498px" className="card-image" />
              <div>
                <h3>{products.goods}</h3>
                <p>${products.price}</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent:'space-between', border:'2px solid red' }} className="">
                <button
                  onClick={() => addProduct(products.id)}
                  className="btn btn-danger m-2"
                >
                  +
                </button>
                <h4>Quantity Order: {products.quantity}</h4>
                <button
                  onClick={() => decreaseProduct(products.id)}
                  className="btn btn-small btn-danger m-2"
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
        <button onClick={handleClearOrder}className="btn btn-large m-2 btn-danger w-75">Clear Order</button>
      </div>
    </React.Fragment>
  );
};

export default Shop;
