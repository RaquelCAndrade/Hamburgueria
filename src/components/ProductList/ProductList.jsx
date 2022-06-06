import React from "react"
import Product from "../Product/Product"
import { ProductContainer } from "./style"

const ProductList = ({ products, setCurrentSale, filteredProducts }) => {
	return (
		<ProductContainer>
			{filteredProducts.length === 0
				? products.map((product) => (
						<div key={product.id}>
							<Product
								product={product}
								setCurrentSale={setCurrentSale}
							/>
						</div>
				  ))
				: filteredProducts.map((product) => (
						<div key={product.id}>
							<Product
								product={product}
								setCurrentSale={setCurrentSale}
							/>
						</div>
				  ))}
		</ProductContainer>
	)
}

export default ProductList

// {products.map((product) => (
// 	<div key={product.id}>
// 		<Product
// 			product={product}
// 			setCurrentSale={setCurrentSale}
// 		/>
// 	</div>
// ))}
