import styled from "styled-components"

export const Result = styled.div`
	p {
		width: 330px;
		height: 50px;

		margin: 30px 0 7px 115px;

		font-weight: 700;
		font-size: 26px;
		color: #333333;
	}

	span {
		color: #828282;
	}

	@media (max-width: 900px) {
		p {
			margin-left: 84px;
		}
	}

	@media (max-width: 748px) {
		p {
			margin: 0 auto;
		}
	}
`
