import styled from "styled-components"

export const CartItens = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	width: 343px;
	height: 80px;

	margin: 20px 10px 26px 10px;

	.imgContainer {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 70px;
		height: 70px;

		background: #f5f5f5;
	}

	img {
		width: 60px;
		height: 60px;
	}

	.cartItemName {
		margin-left: 15px;

		width: 170px;
	}

	.cartItemName p {
		height: 30px;

		font-weight: 700;
		font-size: 14px;
		color: #333333;
	}

	.cartItemName span {
		height: 16px;

		font-weight: 400;
		font-size: 12px;
		color: #828282;
	}

	button {
		border: none;
		background: transparent;

		width: 51px;
		height: 15px;

		font-weight: 500;
		font-size: 12px;
		color: #bdbdbd;
	}
`
