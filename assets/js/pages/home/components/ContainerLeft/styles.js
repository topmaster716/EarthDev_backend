import styled from "styled-components";

import { device } from "../../../../components/styles";

export const ContainerTitle = styled.div`
	margin: 23vh 0;
	padding-left: 32px;
	max-width: 40%;
	width: 100%;

	@media ${device.tillLaptop} {
        max-width: 100%;
        margin: 0 0;
        margin-top: 
    }
`;

export const Title = styled.h1`
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 44px;
	color: #ffffff;
	letter-spacing: 0.1em;
`;

export const Content = styled.h2`
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	font-weight: 200;
	font-size: 18px;
	line-height: 22px;
	color: #ffffff;
	margin-top: 24px;
	letter-spacing: 0.1em;
`;
