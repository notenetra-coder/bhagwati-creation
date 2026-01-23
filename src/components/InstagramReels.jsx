import React, { useRef, useState, useEffect } from 'react';
import { Play, Volume2, VolumeX, ArrowRight, ArrowLeft } from 'lucide-react';

import vid1 from '../assets/carousel-video-1.mp4';
import vid2 from '../assets/carousel-video-2.mp4';
import vid3 from '../assets/carousel-video-3.mp4';
import vid4 from '../assets/carousel-video-4.mp4';
import vid5 from '../assets/carousel-video-5.mp4';
import vid6 from '../assets/carousel-video-6.mp4';

const reelsData = [
    {
        id: 1,
        video: vid1,
        views: "115K"
    },
    {
        id: 2,
        video: vid2,
        views: "89K"
    },
    {
        id: 3,
        video: vid3,
        views: "238K"
    },
    {
        id: 4,
        video: vid4,
        views: "397K"
    },
    {
        id: 5,
        video: vid5,
        views: "93.9K"
    },
    {
        id: 6,
        video: vid6,
        views: "105K"
    }
];

const ReelCard = ({ data }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.error("Autoplay fail:", e));
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div
            className="relative flex flex-col group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Card Container - Fixed Aspect Ratio */}
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-md bg-gray-200">
                <video
                    ref={videoRef}
                    src={data.video}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                    preload="auto"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Mute Button (Top Right) */}
                <button
                    onClick={toggleMute}
                    className="absolute top-3 right-3 p-2 bg-black/30 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>

                {/* Play Icon (Center - hidden when playing) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Optional: Central play button if desired, or keep clean as per user image seemingly just showing content. Use small indicator if needed. */}
                </div>

                {/* Views Count (Bottom Left) */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white/90">
                    <Play size={14} fill="currentColor" strokeWidth={0} />
                    <span className="text-sm font-medium">{data.views}</span>
                </div>
            </div>
        </div>
    );
};

const ACCESS_TOKEN = ""; // TODO: Paste your Instagram Basic Display Access Token here. Generate one at developers.facebook.com

const InstagramReels = () => {
    const [reels, setReels] = useState(reelsData);

    useEffect(() => {
        const fetchReels = async () => {
            if (!ACCESS_TOKEN) return;
            try {
                const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`);
                const data = await response.json();

                if (data && data.data) {
                    const videoReels = data.data.filter(item => item.media_type === 'VIDEO' || item.media_type === 'CAROUSEL_ALBUM').slice(0, 6).map(item => ({
                        id: item.id,
                        video: item.media_url,
                        views: "New" // The Basic Display API does not provide view counts. Consider Graph API for insights if needed.
                    }));
                    if (videoReels.length > 0) setReels(videoReels);
                }
            } catch (error) {
                console.error("Error fetching Instagram reels:", error);
            }
        };

        fetchReels();
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                        Follow us on Instagram for exciting content
                    </h2>
                    <p className="text-rose-500 font-medium text-sm">
                        @bhagwati_creations01
                    </p>
                </div>

                {/* Reels Slider Container */}
                <div className="relative group/slider">
                    {/* Left Arrow */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('reels-container');
                            if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 p-2 rounded-full shadow-lg text-gray-800 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-0 hidden md:block"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => {
                            const container = document.getElementById('reels-container');
                            if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 p-2 rounded-full shadow-lg text-gray-800 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 hidden md:block"
                    >
                        <ArrowRight size={20} />
                    </button>

                    {/* Scrollable Row */}
                    <div
                        id="reels-container"
                        className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reels.map((reel) => (
                            <div key={reel.id} className="min-w-[200px] md:min-w-[240px] snap-center">
                                <ReelCard data={reel} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center"></div>

            </div>
        </section>
    );
};

export default InstagramReels;
