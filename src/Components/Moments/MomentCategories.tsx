import { NextPage } from 'next/types';
import React from 'react';

import styles from './Moments.module.css';
import { MomentTileCategories } from './MomentTileCategories';

type Props = {
	title: string;
};

export const MomentsCategories: NextPage<Props> = ({ title }) => {
	return (
		<div>
			<div
				className={styles.sub__heading}
				style={{
					marginTop: '25px',
				}}
			>
				{title}
			</div>
			<div
				style={{
					display: 'flex',
					overflow: 'scroll',
				}}
			>
				<MomentTileCategories
					imgsrc={'/Content.png'}
					height={135}
					width={240}
					timestamp='Today'
					imgtitle='Big Bang Theory'
				/>
				<MomentTileCategories
					imgsrc={'/Content.png'}
					height={135}
					width={240}
					timestamp='Today'
					imgtitle='Big Bang Theory'
				/>
			</div>
		</div>
	);
};
