import styled from "styled-components"

export const CartContainer = styled.div`
	width: 365px;

	margin-right: 115px;

	.cartHeader {
		display: inline-block;
		width: 365px;
		height: 65px;

		background: #27ae60;
		border-radius: 5px 5px 0px 0px;
	}

	.cartTitle {
		width: 189px;
		height: 30px;

		font-weight: 700;
		font-size: 18px;
		color: #ffffff;

		margin: 22px 0 13px 20px;
	}

	.cartItem {
		width: 343px;
		height: 80px;
	}

	@media (max-width: 868px) {
		margin: 30px auto;
	}

	/* @media (max-width: 1540px) {
		.cartHeader {
			width: 320px;
		}
	} */
`
