import React, { useContext, useState } from 'react';
import StyledRow from './CartItemCont-styles';
import { ShopContext } from '../../logic/context/ShopContext';

function CartItemCont({ cartItem }) {
  const context = useContext(ShopContext);

  const [display, setDisplay] = useState(cartItem.quantity);

  return (
    <StyledRow>
      <td className="cart__item-img">
        <div style={{ backgroundImage: `url(${cartItem.product.mainImagePath})` }} />
      </td>
      <td className="cart__item-name">{cartItem.product.name}</td>
      <td className="cart__item-price">{`${context.currentState.priceUnit} ${cartItem.product.price}`}</td>
      <td className="cart__item-qty">
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={display}
          onChange={(e) => {
            if (e.target.value !== '0') {
              setDisplay(e.target.value);
              context.updateQtyInCart(cartItem, e.target.value);
            }
          }}
        />
      </td>
      <td className="cart__item-subt">{`${context.currentState.priceUnit} ${cartItem.product.price * cartItem.quantity}`}</td>
      <td onClick={() => {
        context.removeCartItem(cartItem);
      }}
      >
        <i className="fa-solid fa-trash" />
      </td>
    </StyledRow>
  );
}
export default CartItemCont;
