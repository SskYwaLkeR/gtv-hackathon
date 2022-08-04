/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextPage } from "next";
import styles from "./ShareImage.module.css";
import { useRouter } from "next/router";

import getCroppedImg from "../CropImage/CropImage";
import Cropper from "react-easy-crop";
import { Header } from "../Header";

export const ShareImage: NextPage = () => {
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [rotation, setRotation] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState<Blob | string>();
  const [activeMode, setActiveMode] = React.useState<string>("potrait");
  const [aspectRatio, setAspectRatio] = React.useState(9 / 16);
  const router = useRouter();

  const showCroppedImage = React.useCallback(async () => {
    if (!croppedImage) return;
    try {
      const croppedImage = await getCroppedImg(
        `${router.query.img}`,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onCropComplete = React.useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
      if (croppedAreaPixels) showCroppedImage();
      console.log("***", croppedArea);
    },
    [showCroppedImage]
  );

  const shareImage = async () => {
    let blob = await fetch(croppedImage as string).then((r) => r.blob());
    const filesArray = [
      new File([blob], "shareablemedia.png", {
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
      <Header heading="Create Story" showback={true} showProfile={false} />
      <div>
        <div className={styles.sub__heading}>Setup the frame</div>
        <div className={styles.container}>
          <Cropper
            image={router.query.img as string}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={aspectRatio}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            onCropAreaChange={showCroppedImage}
          />
        </div>
      </div>
      <div className={styles.orientation}>
        <div
          className={styles.potrait}
          style={{
            backgroundColor: activeMode === "potrait" ? "white" : "#ffffff10",
          }}
          onClick={() => {
            setActiveMode("potrait");
            setAspectRatio(9 / 16);
          }}
        >
          <div
            className={styles.potrait__inside}
            style={{
              backgroundColor: activeMode === "potrait" ? "black" : "#ffffff80",
            }}
          >
            <div
              className={styles.potrait__inside__dot}
              style={{
                backgroundColor: activeMode === "potrait" ? "white" : "black",
              }}
            />
          </div>
        </div>
        <div
          className={styles.landscape}
          style={{
            backgroundColor: activeMode === "landscape" ? "white" : "#ffffff10",
          }}
          onClick={() => {
            setActiveMode("landscape");
            setAspectRatio(16 / 9);
          }}
        >
          <div
            className={styles.landscape__inside}
            style={{
              backgroundColor:
                activeMode === "landscape" ? "black" : "#ffffff80",
            }}
          >
            <div
              className={styles.landscape__inside__dot}
              style={{
                backgroundColor: activeMode === "landscape" ? "white" : "black",
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.publish__btn__container}>
        <button className={styles.publish__btn} onClick={shareImage}>
          <img src={"/share_icon.png"} alt="share-icon" />
          Publish your story
        </button>
      </div>
    </div>
  );
};
