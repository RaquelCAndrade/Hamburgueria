import React from "react"
import { Total } from "./style"

function CartTotal({ currentSale, handleAllItens }) {
	return (
		<Total>
			<div>
				<span className="totalTitle">Total</span>
				<span className="totalValue">
					R${" "}
					{currentSale
						.reduce((acc, item) => (acc += item.price), 0)
						.toFixed(2)}
				</span>
			</div>

			<button onClick={() => handleAllItens()}>Remover Todos</button>
		</Total>
	)
}

export default CartTotal
