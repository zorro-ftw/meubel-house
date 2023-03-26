import React, { useContext } from 'react';
import { ShopContext } from '../../logic/context/ShopContext';
import StyledSideTable from './SideTable-styles';
import SideTableCard from './SideTableCard/SideTableCard';

function SideTable() {
  const context = useContext(ShopContext);

  const products = context.currentState.productList.slice(0, 2);
  return (
    <StyledSideTable>
      <SideTableCard product={products[0]} />
      <SideTableCard product={products[1]} />
    </StyledSideTable>
  );
}

export default SideTable;
