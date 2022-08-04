/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Drawer from 'react-modern-drawer';
import React from 'react';

import { useRouter } from 'next/router';

import styles from './BottomSheet.module.css';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

type Props = {
	isOpen: boolean;
	setIsOpen: any;
	toggleDrawer: any;
	imgsrc: string;
};

export const BottomSheet: NextPage<Props> = ({
	toggleDrawer,
	setIsOpen,
	isOpen,
	imgsrc,
}) => {
	const router = useRouter();
	const shareImage = async () => {
		let blob = await fetch(imgsrc as string).then((r) => r.blob());
		const filesArray = [
			new File([blob], 'shareablemedia.png', {
				type: blob.type,
				lastModified: new Date().getTime(),
			}),
		];
		const shareData = {
			files: filesArray,
		};
		if (navigator.share) {
			navigator.share(shareData);
		}
	};
	return (
		<div>
			<Drawer
				duration={250}
				open={isOpen}
				onClose={toggleDrawer}
				direction='bottom'
				size={200}
			>
				<div className={styles['bottom-sheet__container']}>
					<div
						className={styles['bottom-sheet__list']}
						style={{
							paddingTop: '10px',
						}}
						onClick={() => router.push(`/share?img=${imgsrc}`)}
					>
						<img
							src={'/icon_publish.png'}
							alt='publish-icon'
							className={styles['bottom-sheet__icon']}
						/>
						<span className={styles['bottom-sheet__text']}>
							Publish as story
						</span>
					</div>
					<div className={styles['bottom-sheet__list']}>
						<a
							download={imgsrc}
							href={imgsrc}
							title='ImageName'
							className={styles['bottom-sheet__download']}
						>
							<img
								src={'/icon_download.png'}
								alt='publish-icon'
								className={styles['bottom-sheet__icon']}
							/>
							<span className={styles['bottom-sheet__text']}>
								Download Media
							</span>
						</a>
					</div>
					<div className={styles['bottom-sheet__list']}>
						<img
							src={'/icon_gif.png'}
							alt='publish-icon'
							className={styles['bottom-sheet__icon']}
						/>
						<span className={styles['bottom-sheet__text']}>Create GIF</span>
					</div>
					<div className={styles['bottom-sheet__list']} onClick={shareImage}>
						<img
							src={'/icon_share.png'}
							alt='publish-icon'
							className={styles['bottom-sheet__icon']}
						/>
						<span className={styles['bottom-sheet__text']}>Share Moment</span>
					</div>
				</div>
			</Drawer>
		</div>
	);
};
