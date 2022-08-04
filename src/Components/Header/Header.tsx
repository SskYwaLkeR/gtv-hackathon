/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from './Header.module.css';

type Props = {
	heading: string;
	showback: boolean;
};

export const Header: NextPage<Props> = ({ heading, showback }) => {
	const router = useRouter();
	return (
		<div className={styles.heading__cont}>
			<div className={styles.heading}>
				{showback && (
					<img
						src='/back.png'
						alt='back button'
						// layout='fill'
						style={{
							height: '14px',
							width: '16px',
						}}
						onClick={() => router.back()}
					/>
				)}
				<span>{heading}</span>
			</div>
			<hr className={styles.heading__hr} />
		</div>
	);
};
