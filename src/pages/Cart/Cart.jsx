import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItemCont from '../../components/CartItemCont/CartItemCont';
import Intro from '../../components/Intro/Intro';
import NavBar from '../../components/NavBar/NavBar';
import { ShopContext } from '../../logic/context/ShopContext';
import Total from '../../components/Total/Total';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import StyledDiv from './Cart-styles';

function Cart() {
  const context = useContext(ShopContext);
  const list = context.currentState.cartProductList.map((cartItem) => (
    <CartItemCont key={cartItem.product.sku} cartItem={cartItem} />
  ));
  return (
    <>
      <NavBar />
      <Intro />
      <StyledDiv>
        <table className="cart__table">
          <thead>
            <tr>
              <th>{' '}</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>{' '}</th>
            </tr>
          </thead>
          {list.length > 0 ? (
            <tbody>
              {list}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="6" className="cart-empty">Your cart is empty. Start shopping!</td>
              </tr>
            </tbody>
          )}

        </table>
        <div className="cart__sidebar">
          <h3 className="cart__sidebar-title">Cart Totals</h3>
          <div className="cart__sidebar-sub">
            <span>Subtotal</span>
            <span>{`${context.currentState.priceUnit} ${context.currentState.currentCartSubtotal}`}</span>
          </div>
          <div className="cart__sidebard-tot">
            <span>Total</span>
            <span>{`${context.currentState.priceUnit} ${context.currentState.currentCartSubtotal}`}</span>
          </div>
          <Link to="/checkout">Checkout</Link>
        </div>
      </StyledDiv>
      <Banner />
      <Footer />
    </>
  );
}

export default Cart;
