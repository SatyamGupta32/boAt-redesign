import React, { useState, useEffect } from "react";
import { products } from "../../../data/product";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../../stores/cart";
import "./CartItem.css";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find((product) => product.id === productId);
    setDetail(findDetail || {});
  }, [productId]);

  const handleMinusQuantity = (e) => {
    e?.preventDefault?.();
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: Math.max(1, quantity - 1),
      })
    );
  };

  const handlePlusQuantity = (e) => {
    e?.preventDefault?.();
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={detail.image} alt={detail.name} />
      </div>
      <div className="name-price-qty">
        <p>{detail.name}</p>
        <div className="price-qty">
          <p className="cart-item-price">${(detail.price?.newPrice || 0) * quantity}</p>
          <div className="cart-item-quantity">
            <div onClick={handleMinusQuantity}>-</div>
            <span>{quantity}</span>
            <div onClick={handlePlusQuantity}>+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
