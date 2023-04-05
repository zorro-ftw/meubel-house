import React, { useContext } from 'react';
import StyledDiv from './Bankinfo-styles';
import { ShopContext } from '../../logic/context/ShopContext';

function BankingInfo() {
  const context = useContext(ShopContext);

  const cartItems = context.currentState.cartProductList.map((item) => (
    <div key={item.product.sku} className="total__row cart-item">
      <span>{`${item.product.name} x ${item.quantity}`}</span>
      <span>{`${context.currentState.priceUnit} ${item.product.price}`}</span>
    </div>
  ));

  return (
    <StyledDiv>
      <div className="total">
        <div className="total__row title">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
        {cartItems}
        <div className="total__row cart-subt">
          <span>Subtotal</span>
          <span>{`${context.currentState.priceUnit} ${context.currentState.currentCartSubtotal}`}</span>
        </div>
      </div>
      <div className="divider" />
      <div>
        <div>
          <label htmlFor="option1">
            <input id="option1" type="radio" name="my-radio" value="option1" />
            Direct Bank Transfer
          </label>
        </div>
        <p>
          Make your payment directly into our bank account. Please use your Order ID as the payment reference.
          Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div>
          <label htmlFor="option1">
            <input id="option1" type="radio" name="my-radio" value="option1" />
            Option 1
          </label>
        </div>

        <div>
          <label htmlFor="option2">
            <input id="option2" type="radio" name="my-radio" value="option2" />
            Option 2
          </label>
        </div>

        <p>
          Your personal data will be used to support your experience throughout this website,
          to manage access to your account, and for other purposes described in our privacy policy.
        </p>
      </div>
      <button>
        Place Order
      </button>
    </StyledDiv>
  );
}

export default BankingInfo;
