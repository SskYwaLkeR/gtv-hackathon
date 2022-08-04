import { NextPage } from 'next/types';
import React from 'react';

import styles from './Moments.module.css';
import { MomentTileCategories } from './MomentTileCategories';

type Props = {
	title: string;
	images?: any[];
};

export const MomentsCategories: NextPage<Props> = ({ title, images }) => {
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
				{images?.map((image) => (
					<MomentTileCategories
						imgsrc={image.src}
						height={135}
						width={240}
						timestamp={image.timestamp}
						imgtitle='Witcher'
						key={image}
					/>
				))}
			</div>
		</div>
	);
};
