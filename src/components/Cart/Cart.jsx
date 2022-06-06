import React from "react"
import CartProduct from "../CartProduct/CartProduct"
import CartEmpty from "../CartEmpty/CartEmpty"
import CartTotal from "../CartTotal/CartTotal"
import { CartContainer } from "./style"

function Cart({ currentSale, handleItens, handleAllItens }) {
	return (
		<CartContainer>
			<div className="cartHeader">
				<p className="cartTitle">Carrinho de Compras</p>
			</div>
			{currentSale.length === 0 ? (
				<CartEmpty />
			) : (
				currentSale.map((sale) => (
					<div key={sale.id} className="cartItem">
						<CartProduct
							currentSale={sale}
							handleItens={handleItens}
						/>
					</div>
				))
			)}
			{currentSale.length > 0 ? (
				<CartTotal
					currentSale={currentSale}
					handleAllItens={handleAllItens}
				/>
			) : null}
		</CartContainer>
	)
}

export default Cart
