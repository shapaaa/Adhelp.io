import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const Container = styled.div`
	width: 1060px;
	height: 300px;
`;
const Chart = styled(Line)`
	position: absolute;
`;
const Main = styled.div`
	position: relative;
	&::-webkit-scrollbar {
		display: none;
	}
	overflow-x: scroll;
`;
const Title = styled.div`
	font-size: 2rem;
	font-weight: bolder;
	line-height: 1.3;
	margin: 10px 0;
`;
const ChartContainer = styled.div`
	background: white;
	margin: 10px 0;
	box-shadow: 0 0 10px #ecebeb;
`;
const labels = [
	'1Apr',
	'|',
	'|',
	'|',
	'|',
	'|',
	'7Apr',
	'|',
	'|',
	'|',
	'|',
	'|',
	'14Apr',
	'|',
	'|',
	'|',
	'|',
	'|',
	'21Apr',
	'|',
	'|',
	'|',
	'|',
	'|',
	'28Apr',
];
const data = (canvas) => {
	const ctx = canvas.getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 0, 160);
	gradient.addColorStop(0, '#6dbaf8');
	gradient.addColorStop(0.5, '#b8d7f0');
	gradient.addColorStop(1, 'rgba(249, 249, 248,.2)');
	return {
		labels: labels,
		datasets: [
			{
				data: [
					10, 16, 12, 17, 15, 17, 21, 22, 20, 18, 18, 20, 19, 20, 19, 18, 20, 19, 20, 19, 19, 20,
					17, 20, 18, 20, 19, 20,
				],
				fill: true,
				backgroundColor: gradient,
				borderColor: '#1A8FF0',
				tension: 0.4,
				borderWidth: 1,
				pointRadius: 0,
			},
		],
	};
};

const Summary = () => {
	const options = {
		responsive: true,
		layout: {
			padding: {
				top: 10,
				right: 20,
				left: 20,
				bottom: 60,
			},
		},
		maintainAspectRatio: false,
		plugins: {
			tooltip: {
				enabled: false,
			},
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
					borderColor: '#f2f6f9',
				},
				ticks: {},
			},
			y: {
				min: 5,
				max: 30,
				grid: {
					color: '#f2f6f9',
					drawBorder: false,
				},
				ticks: {
					callback: function (value, index, values) {
						return value + '%   ';
					},
				},
			},
		},
	};
	return (
		<>
			<Title>Conversion summary</Title>
			<ChartContainer>
				<Title style={{ padding: 20 }}> Last 30 days </Title>
				<Main>
					<Container>
						<Chart data={data} options={options} />
					</Container>
				</Main>
			</ChartContainer>
		</>
	);
};
export default Summary;
