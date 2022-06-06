import React from "react"
import { ProductItens } from "./style"

const Product = ({ product, setCurrentSale }) => {
	return (
		<ProductItens>
			<div>
				<img src={product.img} alt={product.name} />
			</div>
			<p>{product.name}</p>
			<span className="category">{product.category}</span>
			<span className="price">R$ {product.price.toFixed(2)}</span>
			<button onClick={() => setCurrentSale(product.id)}>
				Adicionar
			</button>
		</ProductItens>
	)
}

export default Product
