import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../Cart-item/cartItem';
import { toggleStatusTab } from '../../../stores/cart';
import './CartTab.css';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <aside className={`cart-tab ${statusTab ? 'cart-tab--open' : ''}`}>      
      <div className="cart-tab__header">
        <h2>Shopping Cart</h2>
      </div>

      <section className="cart-tab__content">
        {carts.map((item, index) => (
          <CartItem key={index} data={item} />
        ))}
      </section>

      <footer className="cart-tab__footer">
        <div
          className="cart-tab__btn cart-tab__btn--close"
          onClick={handleCloseTabCart}
        >
          CLOSE
        </div>
        <div className="cart-tab__btn cart-tab__btn--checkout">
          CHECKOUT
        </div>
      </footer>
    </aside>
  );
};

export default CartTab;