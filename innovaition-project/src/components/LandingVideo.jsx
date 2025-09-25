import React from "react";

export default function LandingVideo() {
    return (
        <div className="w-full flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-4xl aspect-video">
                <video
                    autoPlay
                    loop
                    muted
                    disablePictureInPicture
                    playsInline
                    preload="auto"
                    controls={false}
                    className="w-full h-full object-cover"
                >
                    <source src="/landingVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}