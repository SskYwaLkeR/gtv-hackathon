import React from 'react';
import { Header } from '../src/Components/Header';
import { Moments } from '../src/Components/Moments';
import { MomentsCategories } from '../src/Components/Moments/MomentCategories';

const Activecorner = () => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				background: '#1e1e1e',
			}}
		>
			<Header heading='Glance Active Corner' showback={true} />
			<Moments title='Recent Moment' />

			<MomentsCategories title='Thriller Moments' />

			<MomentsCategories title='Emotional Moments' />
		</div>
	);
};

export default Activecorner;
