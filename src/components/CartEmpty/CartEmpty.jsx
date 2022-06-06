import React from "react"
import { EmptyCart } from "./style"

function CartEmpty() {
	return (
		<EmptyCart>
			<p>Sua sacola está vazia</p>
			<small>Adicione itens</small>
		</EmptyCart>
	)
}

export default CartEmpty
