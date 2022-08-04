import React from 'react';
import { Header } from '../src/Components/Header';
import { Moments } from '../src/Components/Moments';
import { MomentsCategories } from '../src/Components/Moments/MomentCategories';

const thriller = [
	{
		src: '/witcher.png',
		timestamp: 'Today',
	},
	{
		src: '/witcher_logo.png',
		timestamp: '2 days ago',
	},
];
const emotional = [
	{
		src: '/witcher_person.png',
		timestamp: 'Today',
	},
];

const Activecorner = () => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				background: '#1e1e1e',
			}}
		>
			<Header
				heading='Glance Active Corner'
				showback={false}
				showProfile={true}
			/>
			<Moments title='Recent Moment' />

			<MomentsCategories title='Thriller Moments' images={thriller} />

			<MomentsCategories title='Emotional Moments' images={emotional} />
		</div>
	);
};

export default Activecorner;
