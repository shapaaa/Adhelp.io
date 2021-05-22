import styled from 'styled-components';
import parse from 'html-react-parser';
import good from '../assets/good.png';
import bad from '../assets/bad.png';
import medium from '../assets/medium.png';

const Container = styled.div`
	background-color: white;
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	box-shadow: 0 0 10px #ecebeb;
`;
const Title = styled.div`
	color: #3d4955;
	font-size: 1.6rem;
	font-weight: 700;
	padding: 4px;
`;
const Value = styled('div')`
	font-weight: bolder;
	font-size: 22px;
	padding: 4px;
	color: var(--blue);
`;
const Statement = styled('div')`
	padding: 4px;
	color: #3d4955;
	font-size: 1.2rem;
	font-weight: 600;
`;
const Icon = styled('img')`
	// padding:2px;
	width: 35px;
	height: 35px;
`;
const Context = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
const Data = (props) => {
	const { title, value, statement, gain } = props.data;
	return (
		<Container>
			<Context>
				<Title>{title}</Title>
				<Value>{value}</Value>
				<Statement>{parse(statement)}</Statement>
			</Context>
			{gain === 'good' ? (
				<Icon src={good} />
			) : gain === 'bad' ? (
				<Icon src={bad} />
			) : (
				<Icon src={medium} />
			)}
		</Container>
	);
};
export default Data;
