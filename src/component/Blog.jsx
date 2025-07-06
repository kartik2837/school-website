import React, { useState } from 'react';
import video from '../assets/video.png'
import akash from '../assets/akash.png'
import shyam from '../assets/shyam.png'
// List of Videos
const videoData = [
    {
        id: 1,
        title: 'Maharishi Vidya Mandir Event',
        type: 'local',
        thumbnail: video,
        videoSrc: '/videos/kartik.mp4', // Put video.mp4 inside /public/videos/
    },
    {
        id: 2,
        title: 'Annual Day Performance',
        type: 'local',
        thumbnail: akash,
        videoSrc: '/videos/kartik1.mp4',
    },
    {
        id: 3,
        title: 'Classroom Learning',
        type: 'local',
        thumbnail: shyam,
        videoSrc: '/videos/kartik3.mp4',
    },
];

const Blog = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">🎥 Our School Videos</h2>

            {/* Video Player */}
            {selectedVideo && (
                <div className="video-player mb-5">
                    <div className="ratio ratio-16x9">
                        {selectedVideo.type === 'youtube' ? (
                            <iframe
                                src={selectedVideo.videoSrc}
                                title="School Video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        ) : (
                            <video controls width="100%">
                                <source src={selectedVideo.videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            )}

            {/* Video Thumbnails */}
            <div className="row g-4">
                {videoData.map((video) => (
                    <div className="col-md-4" key={video.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="card-img-top"
                                onClick={() => setSelectedVideo(video)}
                                style={{ cursor: 'pointer', height: '230px', objectFit: 'cover' }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{video.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
