"use client";
import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
	src: string;
	poster?: string;
	autoPlay?: boolean;
	loop?: boolean;
	muted?: boolean;
	controls?: boolean;
	showCustomControls?: boolean;
	width?: string | number;
	height?: string | number;
	containerClassName?: string;
	className?: string;
	onPlay?: () => void;
	onPause?: () => void;
	onEnded?: () => void;
	onError?: (error: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
	src,
	poster = "",
	autoPlay = false,
	loop = false,
	muted = false,
	controls = true,
	showCustomControls = false,
	width = "100%",
	height = "auto",
	containerClassName = "",
	className = "",
	onPlay,
	onPause,
	onEnded,
	onError,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
	const [isMuted, setIsMuted] = useState<boolean>(muted);
	const [error, setError] = useState<string | null>(null);

	const togglePlay = (): void => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
		}
	};

	const toggleMute = (): void => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	const handlePlay = (): void => {
		setIsPlaying(true);
		if (onPlay) onPlay();
	};

	const handlePause = (): void => {
		setIsPlaying(false);
		if (onPause) onPause();
	};

	const handleEnded = (): void => {
		setIsPlaying(false);
		if (onEnded) onEnded();
	};

	const handleError = (
		e: React.SyntheticEvent<HTMLVideoElement, Event>,
	): void => {
		setError("Failed to load video");
		if (onError) onError(e);
	};

	return (
		<div
			className={cn("relative inline-block", containerClassName)}
			style={{ width }}
		>
			<video
				ref={videoRef}
				src={src}
				poster={poster}
				autoPlay={autoPlay}
				loop={loop}
				muted={muted}
				controls={controls}
				width={width}
				height={height}
				onPlay={handlePlay}
				onPause={handlePause}
				onEnded={handleEnded}
				onError={handleError}
				className={cn("w-full", className)}
			>
				Your browser does not support the video tag.
			</video>

			{error && (
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white">
					<p className="text-center px-4">{error}</p>
				</div>
			)}

			{!controls && showCustomControls && (
				<div className="absolute bottom-4 left-4 flex gap-2">
					<button
						onClick={togglePlay}
						className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
						aria-label={isPlaying ? "Pause" : "Play"}
					>
						{isPlaying ? <Pause size={20} /> : <Play size={20} />}
					</button>
					<button
						onClick={toggleMute}
						className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
						aria-label={isMuted ? "Unmute" : "Mute"}
					>
						{isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
					</button>
				</div>
			)}
		</div>
	);
};

export default VideoPlayer;
