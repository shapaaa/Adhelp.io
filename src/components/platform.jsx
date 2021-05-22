import styled, { css } from 'styled-components';
import slack from '../assets/slack.png';
import knowledge from '../assets/knowledge.png';
import facebook from '../assets/facebook.png';

const Container = styled.div`
	display: flex;
	justify-content: center;
	@media only screen and (max-width: 825px) {
		flex-direction: column;
		align-items: center;
	}
	margin: 40px 0;
	gap: 20px;
`;
const Icon = styled.img`
	${({ f }) =>
		f &&
		css`
			width: 15px;
			height: 25px;
		`}
	${({ s }) =>
		s &&
		css`
			width: 20px;
			height: 25px;
		`}
   ${({ k }) =>
		k &&
		css`
			width: 12px;
			height: 24px;
		`}
`;
const Text = styled.div`
	font-size: 1.2rem;
	margin-left: 15px;
	${({ f }) =>
		f &&
		css`
			color: #3b5998;
		`}
	${({ s }) =>
		s &&
		css`
			color: #000000;
		`}
   ${({ k }) =>
		k &&
		css`
			color: var(--blue);
		`}
`;
const Platform = styled.div`
	${(props) =>
		props.f
			? css`
					border: 1px solid #3b5998;
			  `
			: props.s
			? css`
					border: 1px solid #c7cacd;
					background: white;
			  `
			: css`
					border: 1px solid var(--blue);
			  `};
	@media only screen and (min-width: 825px) {
		width: 200px;
	}
	width: 70%;
	height: 50px;
	padding: 8px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
`;

const Platforms = () => {
	return (
		<Container>
			<Platform f>
				<Icon f src={facebook} />
				<Text f>Advertise on Facebook </Text>
			</Platform>
			<Platform s>
				<Icon s src={slack} />
				<Text s>Connect to Slack </Text>
			</Platform>
			<Platform k>
				<Icon k src={knowledge} />
				<Text k>Knowledge center </Text>
			</Platform>
		</Container>
	);
};
export default Platforms;
