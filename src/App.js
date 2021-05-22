import Header from './components/header';
import Budget from './components/budget';
import Main from './components/main';
import Platform from './components/platform';
import Summary from './components/summary';
import styled from 'styled-components';

const Container = styled.div`
	@media only screen and (max-width: 370px) {
		width: 94vw;
	}
	width: 80vw;
	margin: 0 auto;
`;
function App() {
	return (
		<>
			<Header />
			<Container>
				<Budget />
				<Main />
				<Summary />
				<Platform />
			</Container>
		</>
	);
}

export default App;
