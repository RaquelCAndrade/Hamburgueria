import React from "react"
import { Result } from "./style"

function ResultSearch({ valueInput }) {
	return (
		<Result>
			<p>
				Resultados para: <span>{valueInput}</span>
			</p>
		</Result>
	)
}

export default ResultSearch
