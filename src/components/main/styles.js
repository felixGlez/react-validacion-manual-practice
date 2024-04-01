import styled from 'styled-components';

const StyledMainContainer = styled.div`
	width: 100%;
	max-width: 1440px;
	margin-inline: auto;
	height: 100vh;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: url(./images/bg-intro-desktop.png);
	background-color: #ff7979;
`;

// INFO
const StyledInfoContainer = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

const StyledTitle = styled.h1`
	font-family: 'Poppins', sans-serif;
	font-size: 3.125rem;
	line-height: 3.438rem;
	font-weight: 700;
	color: #ffffff;
`;

const StyledText = styled(StyledTitle)`
	font-size: 1rem;
	line-height: 1.625rem;
	font-weight: 400;
`;

// FORM
const StyledFormContainer = styled.div`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
`;

const StyledAd = styled.div`
	width: 100%;
	background-color: #5e54a4;
	box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.1469);
	padding: 1.063rem 6.875rem;
	border-radius: 0.625rem;
	color: #ffffff;
	font-family: 'Poppins', sans-serif;
	font-weight: 400;
	text-align: center;
`;

const StyledAdSpan = styled.span`
	font-weight: 700;
`;

const StyledForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	padding-block: 2rem;
	gap: 2rem;
	border-radius: 0.625rem;
	box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.1469);
`;

const StyledInput = styled.input`
	width: 90%;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	padding: 1rem 2rem;
	color: #3d3b48;
	border: 1px solid #dedede;
	border-radius: 0.313rem;
`;

const StyledButton = styled.button`
	width: 90%;
	font-family: 'Poppins', sans-serif;
	font-size: 1rem;
	font-weight: 600;
	letter-spacing: 1px;
	padding: 1rem 2rem;
	color: #ffffff;
	border: none;
	border-radius: 0.313rem;
	background-color: #38cc8b;
	box-shadow: inset 0px -4px 0px 0px rgba(0, 0, 0, 0.0909);
	cursor: pointer;
`;

export {
	StyledMainContainer,
	StyledInfoContainer,
	StyledTitle,
	StyledText,
	StyledFormContainer,
	StyledAd,
	StyledAdSpan,
	StyledForm,
	StyledInput,
	StyledButton
};
