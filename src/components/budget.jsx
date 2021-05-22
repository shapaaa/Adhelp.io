import styled from 'styled-components';
import downArrow from '../assets/downArrow.svg';

const Container = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas: 'b b ad';
	@media only screen and (max-width: 1186px) {
		grid-template-areas:
			'b b b'
			'ad ad ad';
	}
	margin: 40px 0;
`;
const BudgetContainer = styled.div`
	grid-area: b;
	display: flex;
	@media only screen and (max-width: 575px) {
		flex-direction: column;
		height: 60px;
		padding: 10px;
	}
	width: 100%;
	justify-content: space-around;
	height: 50px;
	background-color: #ffffff;
`;
const LVContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Label = styled.label`
	font-size: 1.4rem;
	line-height: clamp(1, 1.2, 1.5);
`;
const Value = styled.div`
	font-size: 1.4rem;
	line-height: clamp(1, 1.2, 1.5);
	font-weight: 600;
	color: var(--blue);
	margin-left: 1vw;
`;
const AdContainer = styled.div`
	grid-area: ad;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-left: 30px;
	@media only screen and (max-width: 1186px) {
		margin: 30px 0px;
		justify-content: center;
	}
`;
const Option = styled.option`
	padding: 0 10px;
`;
const Select = styled('select')`
	cursor: pointer;
	display: block;
	padding: 0.5rem 2rem;
	-moz-appearance: none;
	-webkit-appearance: none;
	width: clamp(150px, 30vw, 230px);
	border-radius: 4px;
	border: none;
	margin: 0 10px;
	height: 40px;
	background: white url(${downArrow}) no-repeat 95% 60%;
	background-size: 30px 25px;
`;
const Header = () => {
	return (
		<Container>
			<BudgetContainer>
				<LVContainer>
					<Label>Daily cost :</Label>
					<Value>SEK 1,000</Value>
				</LVContainer>
				<LVContainer>
					<Label>Projected monthly budget :</Label>
					<Value>SEK 31,698</Value>
				</LVContainer>
			</BudgetContainer>
			<AdContainer>
				<Select>
					<Option>Google Ads</Option>
					<Option></Option>
				</Select>
				<Select>
					<Option>Select Range</Option>
					<Option></Option>
				</Select>
			</AdContainer>
		</Container>
	);
};
export default Header;
