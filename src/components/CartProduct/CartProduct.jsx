import React from "react"

import { CartItens } from "./style"

function CartProduct({ currentSale, handleItens }) {
	const { img, name, category } = currentSale
	return (
		<CartItens>
			<div className="imgContainer">
				<img src={img} alt={name} />
			</div>
			<div className="cartItemName">
				<p>{name}</p>
				<span>{category}</span>
			</div>
			<button onClick={() => handleItens(currentSale)}>Remover</button>
		</CartItens>
	)
}

export default CartProduct
