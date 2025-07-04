import React from 'react';
import kartik from '/videos/kartik.mp4';
import kartik1 from '/videos/kartik1.mp4';
import kartik2 from '/videos/kartik2.mp4';
import kartik3 from '/videos/kartik3.mp4';

const Video = () => {
    const videos = [
        {
            id: 1,
            title: 'Republic Day Event',
            description:
                'Every year on 26th January, our nation celebrates Republic Day with great pride and enthusiasm to honor the day when the Constitution of India came into effect in 1950.',
            src: kartik,
        },
        {
            id: 2,
            title: 'Republic Day Speech',
            description:
                'Students performing speech and patriotic acts on Republic Day to celebrate Indian constitution and democracy.',
            src: kartik1,
        },
        {
            id: 3,
            title: 'Classroom Practice',
            description: 'Students practicing choreography in the classroom for the upcoming event.',
            src: kartik2,
        },
        {
            id: 4,
            title: 'Best Events',
            description: 'Students practicing choreography in the classroom for the incoming event.',
            src: kartik3,
        },
    ];

    return (
        <div className="video-container py-5" style={{ background: '#f8f9fa' }}>
            <h2 className="text-center mb-5 fw-bold text-primary">🎥 Our Video Gallery</h2>
            <div className="container">
                <div className="row gx-4 gy-4">
                    {videos.map((video) => (
                        <div className="col-6 col-md-3" key={video.id}>
                            <div className="video-card shadow-sm p-3 bg-white rounded h-100 d-flex flex-column">
                                <video
                                    src={video.src}
                                    controls
                                    className="mb-3 rounded"
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                                <h5 className="text-dark fw-semibold">{video.title}</h5>
                                <p className="text-muted small flex-grow-1">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Video;
