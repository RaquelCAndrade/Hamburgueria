import "./App.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import React, { useState, useEffect } from "react"
import { GlobalStyle } from "./style/global"
import Header from "./components/Hearder/Header"
import ProductList from "./components/ProductList/ProductList"
import Cart from "./components/Cart/Cart"
import ResultSearch from "./components/ResultSearch/ResultSearch"

function App() {
	const [products, setProducts] = useState([])
	const [currentSale, setCurrentSale] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])
	const [valueInput, setValueInput] = useState()

	useEffect(() => {
		fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
			.then((resp) => resp.json())
			.then((data) => setProducts(data))
			.catch((err) => console.error(err))
	}, [])

	const notify = () => toast.warn("Item já adicionado ao carrinho")

	const clearWaitingQueue = () => {
		toast.clearWaitingQueue()
	}

	function handleClick(productId) {
		const selectProduct = products.find((product) => {
			return product.id === productId
		})
		const isItemAdd = currentSale.some(
			(item) => item.id === selectProduct.id
		)

		if (isItemAdd) {
			notify()
			clearWaitingQueue()
		} else {
			setCurrentSale([...currentSale, selectProduct])
		}
	}

	function handleItens(removeItem) {
		//função para remover item unico do carrinho
		const itens = currentSale.filter((item) => item !== removeItem)
		setCurrentSale(itens)
	}

	function handleAllItens() {
		//função para remover todos os itens
		setCurrentSale([])
	}

	function showProducts(valueInput) {
		const produtosFiltrados = products.filter((product) => {
			return (
				product.name.toLowerCase().includes(valueInput) ||
				product.category.toLowerCase().includes(valueInput)
			)
		})
		setFilteredProducts(produtosFiltrados)
	}

	return (
		<>
			<GlobalStyle />
			<ToastContainer limit={3} />
			<Header
				showProducts={showProducts}
				filteredProducts={filteredProducts}
				valueInput={valueInput}
				setValueInput={setValueInput}
			/>
			{filteredProducts.length !== 0 && valueInput !== "" ? (
				<ResultSearch valueInput={valueInput} />
			) : null}
			<div className="main">
				<ProductList
					products={products}
					setCurrentSale={handleClick}
					filteredProducts={filteredProducts}
				/>
				<Cart
					currentSale={currentSale}
					handleItens={handleItens}
					handleAllItens={handleAllItens}
				/>
			</div>
		</>
	)
}

export default App
