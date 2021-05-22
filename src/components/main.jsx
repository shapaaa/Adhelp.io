import styled from 'styled-components';
import { data } from '../data';
import Data from './Data';
const Container = styled.div`
	display: grid;
	margin: 30px 0;
	grid-template-rows: auto;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas: 'd d p';
	grid-gap: 20px;
	@media only screen and (max-width: 1100px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-areas: 'd d p p ';
	}
	@media only screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-areas:
			'd d d d'
			'p p p p';
	}
`;
const Text = styled.div`
	color: #3d4955;
	font-weight: 400;
	font-size: 1.3rem;
	line-height: 1.5;
	margin-left: 10px;
`;
const DataContainer = styled.div`
	display: grid;
	grid-area: d;
	row-gap: 16px;
	column-gap: 12px;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;
const Title = styled.div`
	color: #3d4955;
	font-weight: bolder;
	font-size: 1.6rem;
`;
const SubTitle = styled.div`
	color: #757575;
	margin-top: 10px;
	font-size: 1.2rem;
`;
const AdsContainer = styled.div`
	background-color: white;
	padding: 0 10px;
	margin-top: 10px;
	box-shadow: 0 0 10px #ecebeb;
`;
const Performance = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	grid-area: p;
`;
const Ad = styled.div`
	display: flex;
	align-items: center;
	margin: 10px;
	padding: 10px;
`;
const Index = styled.div`
	color: var(--blue);
	padding: 10px 16px;
	border-radius: 18px;
	font-weight: 900;
	font-size: 1.4rem;
	background-color: #e7f3fb;
`;
const Main = () => {
	return (
		<Container>
			<DataContainer>
				{data.map((d) => (
					<Data key={d.id} data={d} />
				))}
			</DataContainer>
			<Performance>
				<Title>Top 3 performing Ads/ URLs</Title>
				<SubTitle>Based on most conversions/ Clicks</SubTitle>
				<AdsContainer>
					<Ad>
						<Index>1</Index>
						<Text>Nike Air | Sports Shoes | Summer Sale</Text>
					</Ad>
					<Ad>
						<Index>2</Index>
						<Text>Nike sport | Sports Shoes female | Summer Sale</Text>
					</Ad>
					<Ad>
						<Index>3</Index>
						<Text>Nike Air Max | Men's Shoes | Summer Sale</Text>
					</Ad>
				</AdsContainer>
			</Performance>
		</Container>
	);
};
export default Main;
