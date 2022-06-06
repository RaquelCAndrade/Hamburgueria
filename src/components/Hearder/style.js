import styled from "styled-components"

export const ThemeHeader = styled.header`
	width: 100vw;
	height: 83px;

	margin-bottom: 32px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: #f5f5f5;

	.logo {
		margin-left: 109px;
	}

	.inputSearch {
		width: 365px;
		height: 60px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-right: 115px;

		background: #ffffff;
		border: 2px solid #e0e0e0;
		border-radius: 8px;

		input {
			border: none;
			outline: none;
			width: calc(100% - 117px);
			margin-left: 15px;
		}

		input::placeholder {
			color: #e0e0e0;
			font-weight: 400;
			font-size: 1rem;
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;

			margin-right: 10px;
			padding: 0px 20px;

			width: 107px;
			height: 40px;

			background: #27ae60;

			border: 2px solid #27ae60;
			border-radius: 8px;

			font-weight: 500;
			font-size: 0.8rem;
			color: #ffffff;
		}
	}

	@media (max-width: 900px) {
		.logo {
			margin-left: 84px;
		}
		.inputSearch {
			width: 300px;

			margin-right: 90px;
		}
	}

	@media (max-width: 748px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 139px;

		.logo {
			display: flex;
			justify-content: center;
			align-items: center;

			margin-top: 14px;
			margin-left: 0;
			width: 100%;
		}

		.inputSearch {
			width: 382px;
			margin: 14px 16px;
		}
	}
`
