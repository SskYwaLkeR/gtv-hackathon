/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import React from 'react';

import styles from './Moments.module.css';

type Props = {
	imgsrc: string;
	imgtitle: string;
	timestamp: string;
	height: number;
	width: number;
};

export const MomentTile: NextPage<Props> = ({
	imgsrc,
	height,
	width,
	imgtitle,
	timestamp,
}) => {
	return (
		<div
			className={styles.moment_tile_container}
			style={{
				backgroundImage: `url(${imgsrc})`,
				width,
				height,
				margin: 'auto',
			}}
		>
			<div
				className={styles.moment_img_fade}
				style={{
					height,
					width,
				}}
			/>
			<div className={styles.moment_data}>
				<div className={styles.imgtitle}>{imgtitle}</div>
				<div className={styles.imgtimestamp}>{timestamp}</div>
			</div>
		</div>
	);
};
