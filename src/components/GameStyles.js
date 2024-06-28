import styled, { keyframes } from 'styled-components';

export const StyledTetrisWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: #000;

	background-size: cover;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledTetris = styled.div`
	display: flex;
	align-items: flex-start;
	padding: 40px;
	margin: 0 auto;
	width: 1300px;
	background: black;

	aside {
		width: 100%;
		max-width: 200px;
		display: block;
		padding: 0 20px;
	}
`;

export const LColumn = styled.div`
	padding: 0px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90vh;
	width: 500px;
	margin-right: 20px;
`;

export const LTop = styled.div`
	height: 400px;
`;

export const LBottom = styled.div`
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const RColumn = styled.div``;

export const ToggleButton = styled.button`
	box-sizing: border-box;
	margin: 20px 0;
	padding: 20px;
	min-height: 30px;
	width: 100%;
	border-radius: 20px;
	border: none;
	color: white;
	background: #333;
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 1rem;
	outline: none;
	cursor: pointer;
`;

export const StyledSelect = styled.select`
	width: 120px;
	padding: 10px;
	border: 5px solid #333;
	border-radius: 15px;
	color: lightgray;
	margin: 0 auto;
`;

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const CentralMessage = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-family: Pixel, Arial, Helvetica, sans-serif;
	color: #fff;
	font-size: 2rem;
	background: rgba(0, 0, 0, 0.8);
	padding: 20px;
	border-radius: 10px;
	animation: ${fadeInOut} 2s linear forwards;
`;
