/* eslint-disable @next/next/no-img-element */
import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from './Header.module.css';

type Props = {
	heading: string;
	showback: boolean;
	showProfile?: boolean;
};

export const Header: NextPage<Props> = ({
	heading,
	showback,
	showProfile = false,
}) => {
	const router = useRouter();
	return (
		<div className={styles.heading__cont}>
			<div className={styles.heading}>
				<div className={styles.left}>
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
				<div className={styles.right}>
					{showProfile && <img src={'/profile.png'} alt='profile' />}
				</div>
			</div>
			<hr className={styles.heading__hr} />
		</div>
	);
};
