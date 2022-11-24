import React from "react";

const CardWidget = () => { 
    return (
        <button type="button" class="btn btn position-relative">
  <img src="img/cart3.svg" alt="carrito" width="30" />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
</button>
  
    )
}

export default CardWidget;