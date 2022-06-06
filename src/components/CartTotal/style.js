import styled from "styled-components"

export const Total = styled.div`
	display: flex;
	flex-direction: column;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		border-top: 2px solid #e0e0e0;

		font-weight: 600;
		font-size: 14px;
	}

	.totalTitle {
		width: 35px;
		height: 24px;

		margin: 14px 0 0 10px;

		color: #333333;
	}

	.totalValue {
		width: 66px;
		height: 24px;

		margin: 14px 10px 0 0;

		color: #828282;
	}

	button {
		width: 343px;
		height: 60px;

		margin: 22px 10px;

		background: #e0e0e0;
		border: 2px solid #e0e0e0;
		border-radius: 8px;

		font-weight: 600;
		font-size: 16px;
		color: #828282;
	}
`
