import styled from "styled-components"

export const ProductContainer = styled.div`
	display: flex;

	flex-wrap: wrap;
	width: 940px;
	gap: 16px;

	margin-left: 115px;

	@media (max-width: 868px) {
		width: 100%;
		flex-wrap: nowrap;

		overflow-y: hidden;

		margin-left: 16px;
	}
`
