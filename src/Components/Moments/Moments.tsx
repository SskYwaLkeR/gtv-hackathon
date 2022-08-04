import React from 'react';
import { NextPage } from 'next';

import styles from './Moments.module.css';
import { MomentTile } from './MomentTile';

type Props = {
	title: string;
	imgsrc: string;
	toggleDrawer: any;
};

export const Moments: NextPage<Props> = ({ title, toggleDrawer, imgsrc }) => {
	return (
		<div onClick={toggleDrawer}>
			<div className={styles.sub__heading}>{title}</div>
			<MomentTile
				imgsrc={imgsrc}
				height={205}
				width={348}
				timestamp='Today'
				imgtitle='Big Bang Theory'
			/>
		</div>
	);
};
