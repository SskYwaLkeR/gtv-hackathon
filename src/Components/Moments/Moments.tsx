import React from 'react';
import { NextPage } from 'next';

import styles from './Moments.module.css';
import { MomentTile } from './MomentTile';

type Props = {
	title: string;
};

export const Moments: NextPage<Props> = ({ title }) => {
	return (
		<div>
			<div className={styles.sub__heading}>{title}</div>
			<MomentTile
				imgsrc={'/Content.png'}
				height={205}
				width={348}
				timestamp='Today'
				imgtitle='Big Bang Theory'
			/>
		</div>
	);
};
