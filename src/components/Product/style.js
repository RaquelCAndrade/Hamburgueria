import styled from "styled-components"

export const ProductItens = styled.div`
	display: flex;
	flex-direction: column;

	width: 300px;
	height: 346px;

	background: #ffffff;
	border: 2px solid #e0e0e0;
	border-radius: 5px;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 295px;
		height: 150px;

		background: #f5f5f5;
	}

	img {
		width: 162px;
		height: 162px;

		margin-bottom: 6px;
	}

	p {
		width: 260px;
		height: 40px;

		font-weight: 700;
		font-size: 18px;
		color: #333333;

		margin: 26px 0 0 21px;
	}

	.category {
		height: 16px;

		margin-left: 22px;

		font-weight: 400;
		font-size: 12px;
		color: #828282;
	}

	.price {
		height: 24px;

		margin: 14px 0 0 22px;

		font-weight: 600;
		font-size: 14px;
		color: #27ae60;
	}

	button {
		width: 106px;
		height: 40px;

		margin: 14px 0 17px 20px;

		background: #27ae60;
		border: 2px solid #27ae60;
		border-radius: 8px;

		font-weight: 600;
		font-size: 14px;
		color: #ffffff;

		transition: 0.3s;

		&:hover {
			background: #93d7af;

			border: 2px solid #93d7af;
		}
	}

	@media (max-width: 1540px) {
		width: 250px;

		div {
			width: 245px;
		}
	}
`
