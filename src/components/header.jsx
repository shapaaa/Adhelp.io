import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	height: 80px;
	background-color: var(--blue);
	align-items: center;
	justify-content: space-around;
`;
const Title = styled.div`
	color: #ffffff;
	font-size: clamp(1.5rem, 3vw, 2rem);
	font-weight: 400;
	cursor: pointer;
`;
const Header = () => {
	return (
		<Container>
			<Title>AdHelp.io</Title>
			<Title>Collaborate | Logout</Title>
		</Container>
	);
};
export default Header;
