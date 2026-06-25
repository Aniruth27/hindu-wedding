import React, { useState, useEffect, useRef } from 'react';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.js';

// --- Lotus SVG Component ---
function Lotus({ className = '', style = {} }) {
    return (
        <svg
            className={`lotus-svg ${className}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '1em', height: '1em', display: 'inline-block', verticalAlign: 'middle', ...style }}
        >
            <path d="M12 22C12 22 7.5 17.5 7.5 13C7.5 9 10.5 8 12 5C13.5 8 16.5 9 16.5 13C16.5 17.5 12 22 12 22Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M12 22C12 22 3.5 19 3.5 13.5C3.5 10 6 9.5 8 10.5C8 10.5 10.5 7.5 12 5C13.5 7.5 16 10.5 16 10.5C18 9.5 20.5 10 20.5 13.5C20.5 19 12 22 12 22Z" />
            <path d="M12 13C12 13 9.5 15.5 6 15.5C3.5 15.5 3 13 3 13" />
            <path d="M12 13C12 13 14.5 15.5 18 15.5C20.5 15.5 21 13 21 13" />
        </svg>
    );
}

// --- Islamic 8-Pointed Star (decorative sparkle element) ---
function RubElHizb({ className = '', style = {} }) {
    return (
        <svg
            className={`rub-el-hizb-svg ${className}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '1em', height: '1em', display: 'inline-block', verticalAlign: 'middle', ...style }}
        >
            <rect x="5" y="5" width="14" height="14" />
            <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
            <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        </svg>
    );
}

// --- Ganesha Outline SVG ---
function GaneshaIcon({ className = '', style = {} }) {
    return (
        <svg
            className={`ganesha-svg ${className}`}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto', ...style }}
        >
            {/* Crown (Mukut) */}
            <path d="M45 15 L50 6 L55 15 L50 22 Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M41 22 H59 M44 26 H56" />
            {/* Ears */}
            <path d="M40 30 C25 30 22 45 35 52 C25 60 30 68 40 60" />
            <path d="M60 30 C75 30 78 45 65 52 C75 60 70 68 60 60" />
            {/* Head and Trunk */}
            <path d="M50 26 C42 28 41 42 44 48 C46 51 47 56 44 62 C41 68 37 70 34 70 C30 70 29 65 32 61" />
            <path d="M50 26 C58 28 59 42 56 48 C54 51 53 56 56 62 C59 68 63 70 66 70 C70 70 71 65 68 61" />
            <path d="M50 32 L50 44" />
            <circle cx="33" cy="59" r="2.5" fill="currentColor" />
            <circle cx="50" cy="36" r="1.5" fill="currentColor" />
        </svg>
    );
}

// --- South Indian Temple Silhouette ---
function TempleSilhouette() {
    return (
        <svg
            className="temple-silhouette-svg"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%' }}
        >
            <defs>
                <linearGradient id="templeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#590011" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#7A0019" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.15" />
                </linearGradient>
            </defs>
            {/* Outline of Gopuram tower */}
            <path
                d="M 400 50 
                   L 420 80 L 380 80 Z 
                   M 360 80 H 440 L 450 120 H 350 Z 
                   M 340 120 H 460 L 470 170 H 330 Z 
                   M 320 170 H 480 L 490 230 H 310 Z 
                   M 300 230 H 500 L 512 300 H 288 Z 
                   M 276 300 H 524 L 540 380 H 260 Z 
                   M 245 380 H 555 L 575 480 H 225 Z 
                   M 200 480 H 600 V 600 H 200 Z"
                fill="url(#templeGradient)"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeOpacity="0.4"
            />
            <path d="M 400 20 V 50 M 392 35 H 408" stroke="#D4AF37" strokeWidth="2" />
            <circle cx="400" cy="20" r="3.5" fill="#D4AF37" />
            <path d="M 355 100 H 445 M 345 145 H 455 M 335 200 H 465 M 315 265 H 485 M 295 340 H 505 M 268 430 H 532" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
        </svg>
    );
}

// --- Traditional Brass Lamp (Deepam) ---
function Deepam() {
    return (
        <svg
            className="deepam-svg"
            viewBox="0 0 100 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '60px', height: '90px' }}
        >
            <defs>
                <linearGradient id="lampGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF8E7" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#9E7E1D" />
                </linearGradient>
                <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFEA88" stopOpacity="1" />
                    <stop offset="40%" stopColor="#C21807" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#C21807" stopOpacity="0" />
                </radialGradient>
            </defs>
            {/* Flame */}
            <path d="M 50 15 C 38 45 50 60 50 60 C 50 60 62 45 50 15 Z" fill="url(#flameGlow)" className="flame-glow" />
            <path d="M 50 25 C 43 45 50 55 50 55 C 50 55 57 45 50 25 Z" fill="#FFF8E7" className="flame-core" />

            {/* Brass Stand */}
            <path d="M 30 70 C 30 60 70 60 70 70 L 65 95 C 65 95 75 105 50 105 C 25 105 35 95 35 95 Z" fill="url(#lampGold)" stroke="#D4AF37" strokeWidth="0.5" />
            <path d="M 45 105 H 55 V 140 H 45 Z" fill="url(#lampGold)" />
            <path d="M 25 140 H 75 C 75 140 70 148 50 148 C 30 148 25 140 25 140 Z" fill="url(#lampGold)" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
    );
}

function App() {
    // --- React States ---
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isEntered, setIsEntered] = useState(false);
    const [particles, setParticles] = useState([]);

    // Audio State
    const [isPlaying, setIsPlaying] = useState(false);

    // Story Overlays Active State
    const [activeStory, setActiveStory] = useState(0); // 0 = none, 1, 2, 3

    // Personalized Guest Name State
    const [guestName, setGuestName] = useState('');

    // Countdown Timer State
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        isExpired: false
    });

    // RSVP States
    const [rsvpName, setRsvpName] = useState('');
    const [rsvpEmail, setRsvpEmail] = useState('');
    const [rsvpAttendance, setRsvpAttendance] = useState('accept');
    const [rsvpGuests, setRsvpGuests] = useState(1);
    const [rsvpWishes, setRsvpWishes] = useState('');
    const [rsvpStatus, setRsvpStatus] = useState('idle'); // idle, loading, success

    // --- React References for ScrollyVideo ---
    const [videoSrc, setVideoSrc] = useState('');
    const videoContainerRef = useRef(null);
    const scrollyVideoInstanceRef = useRef(null);
    const audioRef = useRef(null);

    // --- Pre-loader Particle Generation ---
    useEffect(() => {
        const particleList = [];
        for (let i = 0; i < 20; i++) {
            particleList.push({
                id: i,
                size: Math.random() * 20 + 8,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                duration: Math.random() * 5 + 5,
                type: i % 3 === 0 ? 'marigold' : (i % 3 === 1 ? 'rose' : 'sparkle')
            });
        }
        setParticles(particleList);
    }, []);

    // --- Extract Guest Name from URL ---
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        let name = params.get('name') || params.get('to') || params.get('guest');

        if (!name) {
            const path = window.location.pathname;
            const pathName = decodeURIComponent(path.replace(/^\/|\/$/g, '')).trim();
            if (pathName && pathName !== 'index.html' && !pathName.includes('.') && !pathName.includes('assets')) {
                name = pathName;
            }
        }

        if (name) {
            setGuestName(name);
        }
    }, []);

    // --- Video Preloading Effect ---
    useEffect(() => {
        const videoUrl = '/scroll-video1.mp4';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', videoUrl, true);
        xhr.responseType = 'blob';

        xhr.onprogress = (event) => {
            if (event.lengthComputable) {
                const percent = Math.round((event.loaded / event.total) * 100);
                setProgress(percent);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const blob = xhr.response;
                const videoObjectUrl = URL.createObjectURL(blob);
                setVideoSrc(videoObjectUrl);
                setIsLoaded(true);
            } else {
                console.error('Failed to load scroll video, falling back to direct URL.');
                setVideoSrc(videoUrl);
                setIsLoaded(true);
            }
        };

        xhr.onerror = () => {
            console.error('Error preloading scroll video, falling back to direct URL.');
            setVideoSrc(videoUrl);
            setIsLoaded(true);
        };

        xhr.send();
    }, []);

    // --- High-Performance ScrollyVideo Scroll Effect ---
    useEffect(() => {
        if (!isEntered || !videoContainerRef.current) return;

        const instance = new ScrollyVideo({
            src: videoSrc || '/scroll-video1.mp4',
            scrollyVideoContainer: videoContainerRef.current,
            cover: true,
            sticky: false,
            full: true,
            trackScroll: false,
            useWebCodecs: true
        });

        scrollyVideoInstanceRef.current = instance;

        const handleScroll = () => {
            const heroSection = document.getElementById('hero-scroll-section');
            if (!heroSection) return;

            const scrollTop = window.scrollY;
            const totalScrollable = heroSection.scrollHeight - window.innerHeight;

            if (totalScrollable > 0) {
                const scrollFraction = Math.min(1, Math.max(0, scrollTop / totalScrollable));

                // Manually set video percentage in scrolly-video
                if (scrollyVideoInstanceRef.current) {
                    scrollyVideoInstanceRef.current.setVideoPercentage(scrollFraction);
                }

                // Story Overlays triggers based on scroll progress
                if (scrollFraction >= 0.03 && scrollFraction <= 0.26) {
                    setActiveStory(1);
                } else if (scrollFraction >= 0.35 && scrollFraction <= 0.64) {
                    setActiveStory(2);
                } else if (scrollFraction >= 0.73 && scrollFraction <= 0.96) {
                    setActiveStory(3);
                } else {
                    setActiveStory(0);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollyVideoInstanceRef.current) {
                scrollyVideoInstanceRef.current.destroy();
                scrollyVideoInstanceRef.current = null;
            }
        };
    }, [isEntered, videoSrc]);

    // --- Countdown Timer Effect ---
    useEffect(() => {
        if (!isEntered) return;

        // Auspicious Muhurtham Date: February 15, 2027 at 06:30 AM
        const targetDate = new Date('February 15, 2027 06:30:00').getTime();

        const updateTime = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeLeft(prev => ({ ...prev, isExpired: true }));
                clearInterval(countdownInterval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
                isExpired: false
            });
        };

        updateTime();
        const countdownInterval = setInterval(updateTime, 1000);

        return () => clearInterval(countdownInterval);
    }, [isEntered]);

    // --- Scroll-reveal Elements Observer Effect ---
    useEffect(() => {
        if (!isEntered) return;

        const sections = document.querySelectorAll('.reveal-section');
        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, [isEntered]);

    // --- Enter Button Click Triggers ---
    const handleEnterInvitation = () => {
        setIsEntered(true);

        // Start background ambient audio
        if (audioRef.current) {
            audioRef.current.volume = 0.45;
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(err => {
                    console.log("Autoplay blocked by browser. Music toggling ready.", err);
                });
        }
    };

    // Toggle Audio Functionality
    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(err => console.error("Error playing audio:", err));
            }
        }
    };

    // RSVP Submit Handler
    const handleRSVPSubmit = (e) => {
        e.preventDefault();
        setRsvpStatus('loading');
        setTimeout(() => {
            setRsvpStatus('success');
        }, 1500);
    };

    return (
        <>
            {/* Premium Preloader */}
            {!isEntered && (
                <div id="preloader" className="preloader-container" onClick={guestName && isLoaded ? handleEnterInvitation : undefined} style={{ cursor: guestName && isLoaded ? 'pointer' : 'default' }}>
                    {/* Ambient background image */}
                    <img
                        src="/bg-1.png"
                        alt="Background"
                        className="preloader-bg-image"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1
                        }}
                    />
                    {/* Dark overlay on top of video */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(30, 0, 8, 0.55)',
                        zIndex: 2
                    }}></div>

                    {/* Floating Petals in Preloader */}
                    <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 3, overflow: 'hidden', pointerEvents: 'none' }}>
                        {particles.map(p => (
                            <div
                                key={p.id}
                                className="preloader-particle"
                                style={{
                                    width: p.size,
                                    height: p.size,
                                    left: `${p.left}%`,
                                    animationDelay: `${p.delay}s`,
                                    animationDuration: `${p.duration}s`,
                                    background: p.type === 'marigold'
                                        ? 'radial-gradient(circle, #FFB300 0%, #E65100 100%)'
                                        : p.type === 'rose'
                                            ? 'radial-gradient(circle, #D50000 0%, #880E4F 100%)'
                                            : 'radial-gradient(circle, #FFF8E7 0%, rgba(212, 175, 55, 0) 70%)',
                                    borderRadius: p.type === 'sparkle' ? '50%' : '50% 0 50% 50%',
                                    boxShadow: p.type === 'sparkle' ? '0 0 6px #D4AF37' : 'none'
                                }}
                            />
                        ))}
                    </div>

                    <div className="preloader-glass" style={{ zIndex: 4, position: 'relative', maxWidth: '500px', width: '90%' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <GaneshaIcon className="shimmer-gold" style={{ color: 'var(--clr-gold-primary)' }} />
                        </div>

                        {guestName ? (
                            <div className="personalized-preloader">
                                <h2 className="guest-dear font-serif" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-gold-light)', fontSize: '1.4rem' }}>Dear</h2>
                                <h1 className="guest-name-title" style={{ fontFamily: 'var(--font-heading)', color: 'var(--clr-gold-primary)', margin: '10px 0', fontSize: '2.4rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{guestName}</h1>
                                <div className="guest-stars" style={{ color: 'var(--clr-gold-light)' }}><Lotus /></div>

                                <div className="preloader-progress-box" style={{ width: '100%', margin: '25px 0' }}>
                                    <div className="preloader-progress-bar" style={{ height: '3px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div className="progress-fill" style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, var(--clr-gold-dark) 0%, var(--clr-gold-light) 50%, var(--clr-gold-dark) 100%)', transition: 'width 0.2s ease-out' }}></div>
                                    </div>
                                </div>

                                <button
                                    className={`enter-btn btn-gold ${!isLoaded ? 'disabled' : ''}`}
                                    disabled={!isLoaded}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEnterInvitation();
                                    }}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        boxShadow: 'none',
                                        padding: '0',
                                        margin: '0 auto',
                                        display: 'block'
                                    }}
                                >
                                    <span className="tap-to-open" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '2px', color: 'var(--clr-gold-light)', fontSize: '1rem', textTransform: 'uppercase' }}>✦ &nbsp; tap to open &nbsp; ✦</span>
                                </button>
                            </div>
                        ) : (
                            <>
                                <h1 className="preloader-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '3.2rem', color: 'var(--clr-maroon-deep)', margin: '15px 0 5px 0' }}>Arjun &amp; Priya</h1>
                                <p className="preloader-subtitle" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-gold-dark)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '1rem', marginBottom: '35px' }}>The Royal Union</p>

                                <div className="preloader-progress-box" style={{ margin: '30px 0' }}>
                                    <div className="preloader-progress-bar" style={{ height: '4px', background: 'rgba(48, 12, 17, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div id="progress-fill" className="progress-fill" style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, var(--clr-gold-dark) 0%, var(--clr-gold-primary) 50%, var(--clr-gold-dark) 100%)', transition: 'width 0.2s ease-out' }}></div>
                                    </div>
                                    <span id="progress-text" className="progress-text" style={{ fontSize: '0.85rem', color: 'var(--clr-maroon-accent)', marginTop: '12px', display: 'block', fontWeight: '500' }}>{progress}% Loaded</span>
                                </div>

                                <button
                                    id="enter-btn"
                                    className={`enter-btn btn-gold ${!isLoaded ? 'disabled' : ''}`}
                                    disabled={!isLoaded}
                                    onClick={handleEnterInvitation}
                                    style={{ padding: '14px 40px', borderRadius: '30px', fontWeight: '600', fontSize: '1rem', letterSpacing: '2px', color: 'var(--clr-maroon-deep)' }}
                                >
                                    <span>Enter Invitation</span>
                                    <i className="fa-solid fa-chevron-right btn-arrow" style={{ marginLeft: '10px' }}></i>
                                </button>
                                <p id="enter-hint" className="enter-hint" style={{ fontSize: '0.85rem', color: 'var(--clr-maroon-accent)', marginTop: '16px', fontStyle: 'italic' }}>
                                    {!isLoaded ? "Please wait while the invitation loads..." : "Invitation loaded. Tap to unveil."}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Ambient Audio Player */}
            <audio id="bg-music" ref={audioRef}>
                <source src="/bg-music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Music Floating Button */}
            {isEntered && (
                <button
                    onClick={toggleMusic}
                    className="music-toggle-btn"
                    aria-label="Toggle Background Music"
                    style={{
                        position: 'fixed',
                        bottom: '25px',
                        right: '25px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'var(--clr-maroon-deep)',
                        border: '2px solid var(--clr-gold-primary)',
                        color: 'var(--clr-gold-light)',
                        zIndex: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-gold)',
                        transition: 'var(--transition-smooth)'
                    }}
                >
                    <i className={`fa-solid ${isPlaying ? 'fa-music fa-spin' : 'fa-volume-xmark'}`} style={{ animationDuration: '4s' }}></i>
                </button>
            )}

            {/* Main Content */}
            <div id="main-content" className={`app-container ${!isEntered ? 'hidden' : ''}`}>

                {/* ScrollyVideo Hero Section */}
                <section id="hero-scroll-section" className="hero-scroll-section" style={{ height: '350vh', position: 'relative' }}>
                    <div className="canvas-sticky-wrapper" style={{
                        position: 'sticky',
                        top: 0,
                        height: '100vh',
                        overflow: 'hidden',
                        background: '#0a0004',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* ScrollyVideo Container — driven by scroll position */}
                        <div
                            ref={videoContainerRef}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 0,
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                    {/* Spacer to stretch scroll sequence */}
                    <div className="scroll-height-spacer" style={{ height: '250vh' }}></div>
                </section>

                {/* Sanskrit Quote Card Section */}
                <section id="mantra-verse-section" className="mantra-verse-section reveal-section" style={{ padding: '80px 0 40px 0' }}>
                    <div className="container">
                        <div className="mantra-card" style={{ background: 'var(--clr-maroon-medium)', border: '2px solid var(--clr-gold-primary)', boxShadow: 'var(--shadow-gold)' }}>
                            <div className="mantra-content">
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                                    <svg width="240" height="70" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 50 Q75 10 150 50 T285 50" stroke="url(#goldGradient)" strokeWidth="1.5" strokeLinecap="round" />
                                        <text x="50%" y="60" dominantBaseline="middle" textAnchor="middle" fill="url(#goldGradient)" fontFamily="'Cinzel Decorative', Georgia, serif" fontSize="24" letterSpacing="1">ॐ श्री गणेशाय नमः</text>
                                        <defs>
                                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="var(--clr-gold-dark)" />
                                                <stop offset="50%" stopColor="var(--clr-gold-light)" />
                                                <stop offset="100%" stopColor="var(--clr-gold-dark)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="mantra-sanskrit" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--clr-gold-primary)', letterSpacing: '0', marginBottom: '20px' }}>
                                    मंगलम भगवान विष्णु, मंगलम गरुड़ध्वज।<br />
                                    मंगलम पुण्डरीकाक्ष, मंगलाय तनो हरि॥
                                </div>
                                <p className="mantra-translation" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontStyle: 'normal', color: 'var(--clr-light-text)' }}>
                                    "All auspiciousness to Lord Vishnu, all auspiciousness to the one who has Garuda as His flag. All auspiciousness to the lotus-eyed Lord, and auspiciousness to Hari."
                                </p>
                                <div className="mantra-ref" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-gold-light)' }}>Mangala Mantra</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Couple Section */}
                <section id="love-story-section" className="love-story-section reveal-section temple-pattern-bg-light" style={{ padding: '80px 0' }}>
                    <div className="section-bg-ornament"></div>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Our Journey</span>
                            <h2 className="section-title">The Couple</h2>
                            <div className="header-divider">
                                <span className="divider-line"></span>
                                <Lotus className="divider-heart" style={{ color: 'var(--clr-gold-primary)' }} />
                                <span className="divider-line"></span>
                            </div>
                        </div>

                        <div className="couple-grid">
                            {/* Groom Card */}
                            <div className="couple-card groom-card" id="groom-card">
                                <div className="temple-arch-frame" style={{ border: '2px solid var(--clr-gold-primary)', padding: '6px', borderRadius: '170px 170px 0 0', background: 'var(--clr-gold-bg)' }}>
                                    <div className="couple-image-wrapper" style={{ borderRadius: '164px 164px 0 0', overflow: 'hidden' }}>
                                        <img src="https://i.pinimg.com/736x/28/f5/81/28f5813b36cd8a5e9c482bfc22ae8791.jpg" alt="Arjun" className="couple-photo" />
                                        <div className="couple-role-tag" style={{ background: 'var(--clr-maroon-deep)', color: 'var(--clr-gold-light)', border: '1px solid var(--clr-gold-primary)' }}>The Groom</div>
                                    </div>
                                </div>
                                <div className="couple-details">
                                    <h3 className="couple-name" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)' }}>Arjun</h3>
                                    <p className="couple-bio" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                                        An elegant, warm-hearted software architect who values family, traditions, and growth. Devoted to creating a beautiful, peaceful life, Arjun found his perfect partner, best friend, and absolute blessing in Priya.
                                    </p>
                                    <div className="couple-social">
                                        <a href="#" aria-label="Groom Instagram"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#" aria-label="Groom Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Love Knot Center Divider */}
                            <div className="love-knot-center">
                                <div className="love-knot-circle" style={{ background: 'var(--clr-maroon-deep)', border: '2px solid var(--clr-gold-primary)' }}>
                                    <Lotus className="center-knot-icon" style={{ color: 'var(--clr-gold-light)' }} />
                                </div>
                            </div>

                            {/* Bride Card */}
                            <div className="couple-card bride-card" id="bride-card">
                                <div className="temple-arch-frame" style={{ border: '2px solid var(--clr-gold-primary)', padding: '6px', borderRadius: '170px 170px 0 0', background: 'var(--clr-gold-bg)' }}>
                                    <div className="couple-image-wrapper" style={{ borderRadius: '164px 164px 0 0', overflow: 'hidden' }}>
                                        <img src="https://i.pinimg.com/736x/87/18/52/87185251f7584038db95c16c7d9d362d.jpg" alt="Priya" className="couple-photo" />
                                        <div className="couple-role-tag" style={{ background: 'var(--clr-maroon-deep)', color: 'var(--clr-gold-light)', border: '1px solid var(--clr-gold-primary)' }}>The Bride</div>
                                    </div>
                                </div>
                                <div className="couple-details">
                                    <h3 className="couple-name" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)' }}>Priya</h3>
                                    <p className="couple-bio" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                                        A talented graphic designer with a gentle spirit and vibrant smile. Her creativity, kindness, and grace illuminate every path she treads. She is thrilled to begin this lifelong journey of love and togetherness with Arjun.
                                    </p>
                                    <div className="couple-social">
                                        <a href="#" aria-label="Bride Instagram"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#" aria-label="Bride Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Story Narrative Section */}
                        <div className="story-narrative-grid" style={{ marginTop: '70px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            <div className="story-narrative-card glass-card card-hover-effect" style={{ padding: '35px 25px', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(212, 175, 55, 0.3)', background: 'rgba(255, 248, 231, 0.65)' }}>
                                <div style={{ fontSize: '1.6rem', color: 'var(--clr-gold-dark)', marginBottom: '10px' }}>
                                    <i className="fa-solid fa-spa"></i>
                                </div>
                                <h4 className="story-narrative-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)', fontSize: '1.35rem', marginBottom: '12px' }}>How We Met</h4>
                                <p style={{ fontSize: '0.92rem', color: 'var(--clr-dark-text)', lineHeight: '1.65', fontFamily: 'var(--font-body)' }}>
                                    Some journeys are written by destiny. What began as a friendship blossomed into a beautiful bond of love, trust, and companionship.
                                </p>
                            </div>
                            <div className="story-narrative-card glass-card card-hover-effect" style={{ padding: '35px 25px', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(212, 175, 55, 0.3)', background: 'rgba(255, 248, 231, 0.65)' }}>
                                <div style={{ fontSize: '1.6rem', color: 'var(--clr-gold-dark)', marginBottom: '10px' }}>
                                    <i className="fa-solid fa-fire"></i>
                                </div>
                                <h4 className="story-narrative-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)', fontSize: '1.35rem', marginBottom: '12px' }}>The Proposal</h4>
                                <p style={{ fontSize: '0.92rem', color: 'var(--clr-dark-text)', lineHeight: '1.65', fontFamily: 'var(--font-body)' }}>
                                    Surrounded by family blessings and cherished moments, we chose forever.
                                </p>
                            </div>
                            <div className="story-narrative-card glass-card card-hover-effect" style={{ padding: '35px 25px', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(212, 175, 55, 0.3)', background: 'rgba(255, 248, 231, 0.65)' }}>
                                <div style={{ fontSize: '1.6rem', color: 'var(--clr-gold-dark)', marginBottom: '10px' }}>
                                    <i className="fa-solid fa-bell"></i>
                                </div>
                                <h4 className="story-narrative-title" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)', fontSize: '1.35rem', marginBottom: '12px' }}>Today</h4>
                                <p style={{ fontSize: '0.92rem', color: 'var(--clr-dark-text)', lineHeight: '1.65', fontFamily: 'var(--font-body)' }}>
                                    With joyful hearts, we invite you to celebrate the beginning of our new chapter.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Countdown Section */}
                <section id="countdown-section" className="countdown-section reveal-section" style={{ backgroundAttachment: 'fixed', backgroundImage: 'linear-gradient(rgba(122, 0, 25, 0.85), rgba(122, 0, 25, 0.85)), url("https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=80")' }}>
                    <div className="countdown-glass-container" style={{ border: '2px solid var(--clr-gold-primary)', background: 'rgba(90, 0, 17, 0.55)', padding: '50px 30px' }}>
                        <span className="section-badge" style={{ color: 'var(--clr-gold-light)', display: 'block', marginBottom: '14px', letterSpacing: '4px' }}>Save The Date</span>
                        <h3 className="countdown-heading" style={{ fontSize: '2.8rem', marginBottom: '8px', fontWeight: '300', fontFamily: 'var(--font-heading)', color: 'var(--clr-gold-primary)' }}>February 15, 2027</h3>
                        <p className="countdown-description font-serif italic-text" style={{ color: 'var(--clr-gold-light)', fontSize: '1.2rem', marginBottom: '32px', opacity: 0.9 }}>
                            Meenakshi Convention Hall &bull; Madurai, Tamil Nadu
                        </p>

                        {!timeLeft.isExpired ? (
                            <div className="countdown-timer" id="wedding-countdown">
                                <div className="countdown-box" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.2)' }}>
                                    <span id="days" className="time-num" style={{ color: 'var(--clr-gold-light)' }}>{timeLeft.days}</span>
                                    <span className="time-label" style={{ color: 'var(--clr-gold-bg)' }}>Days</span>
                                </div>
                                <div className="countdown-divider" style={{ color: 'var(--clr-gold-primary)' }}>:</div>
                                <div className="countdown-box" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.2)' }}>
                                    <span id="hours" className="time-num" style={{ color: 'var(--clr-gold-light)' }}>{timeLeft.hours}</span>
                                    <span className="time-label" style={{ color: 'var(--clr-gold-bg)' }}>Hours</span>
                                </div>
                                <div className="countdown-divider" style={{ color: 'var(--clr-gold-primary)' }}>:</div>
                                <div className="countdown-box" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.2)' }}>
                                    <span id="minutes" className="time-num" style={{ color: 'var(--clr-gold-light)' }}>{timeLeft.minutes}</span>
                                    <span className="time-label" style={{ color: 'var(--clr-gold-bg)' }}>Mins</span>
                                </div>
                                <div className="countdown-divider" style={{ color: 'var(--clr-gold-primary)' }}>:</div>
                                <div className="countdown-box" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.2)' }}>
                                    <span id="seconds" className="time-num" style={{ color: 'var(--clr-gold-light)' }}>{timeLeft.seconds}</span>
                                    <span className="time-label" style={{ color: 'var(--clr-gold-bg)' }}>Secs</span>
                                </div>
                            </div>
                        ) : (
                            <div className="countdown-timer">
                                <div className="time-num accent-text italic-text" style={{ fontSize: '2rem', width: '100%', letterSpacing: '1px', color: 'var(--clr-gold-light)', fontFamily: 'var(--font-serif)' }}>
                                    Today is our Wedding Day! Bless us.
                                </div>
                            </div>
                        )}

                        <div className="countdown-date-badge" style={{ marginTop: '30px', background: 'rgba(212,175,55,0.15)', color: 'var(--clr-gold-light)', border: '1px solid var(--clr-gold-primary)' }}>
                            <i className="fa-regular fa-calendar-check" style={{ marginRight: '8px' }}></i>
                            <span>Wedding Muhurtham &bull; Feb 15, 2027</span>
                        </div>
                    </div>
                </section>

                {/* Event Details Section */}
                <section id="details-section" className="details-section reveal-section temple-pattern-bg-light" style={{ padding: '80px 0' }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">When &amp; Where</span>
                            <h2 className="section-title">The Wedding Events</h2>
                            <div className="header-divider">
                                <span className="divider-line"></span>
                                <Lotus className="divider-location" style={{ color: 'var(--clr-gold-primary)' }} />
                                <span className="divider-line"></span>
                            </div>
                        </div>

                        <div className="events-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '40px', alignItems: 'stretch' }}>
                            {/* Haldi Ceremony */}
                            <div className="event-card glass-card card-hover-effect" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="event-icon-box" style={{ background: 'var(--clr-gold-bg)', border: '1px solid var(--clr-gold-primary)' }}>
                                    <i className="fa-solid fa-bowl-food" style={{ color: 'var(--clr-gold-dark)' }}></i>
                                </div>
                                <h3 className="event-type" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)' }}>Haldi Ceremony</h3>
                                <div className="muhurtham-badge event-tag-mehndi" style={{ background: '#FFC107', color: '#3B000C', fontWeight: '600' }}>Auspicious Turmeric Ritual</div>

                                <div className="event-time-details">
                                    <p className="event-date"><i className="fa-regular fa-calendar" style={{ color: 'var(--clr-gold-dark)' }}></i> Sunday, February 14, 2027</p>
                                    <p className="event-time"><i className="fa-regular fa-clock" style={{ color: 'var(--clr-gold-dark)' }}></i> 9:00 AM onwards</p>
                                </div>

                                <div className="event-location-details">
                                    <h4 className="venue-name" style={{ fontFamily: 'var(--font-serif)' }}>Sandalwood Lawn</h4>
                                    <p className="venue-address">Meenakshi Convention Hall, Madurai</p>
                                </div>

                                <p className="event-notes" style={{ flexGrow: 1 }}>
                                    Join us as we smear the couple with auspicious turmeric paste amidst music, laughter, and traditional songs. Yellow-themed casual traditional wear is recommended.
                                </p>

                                <a href="https://maps.google.com/?q=Meenakshi+Convention+Hall+Madurai" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ marginTop: 'auto' }}>
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    <span>View on Google Maps</span>
                                </a>
                            </div>

                            {/* Mehendi & Sangeet Night */}
                            <div className="event-card glass-card card-hover-effect" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="event-icon-box" style={{ background: 'var(--clr-gold-bg)', border: '1px solid var(--clr-gold-primary)' }}>
                                    <i className="fa-solid fa-hand-sparkles" style={{ color: 'var(--clr-gold-dark)' }}></i>
                                </div>
                                <h3 className="event-type" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)' }}>Mehendi &amp; Sangeet Night</h3>
                                <div className="muhurtham-badge event-tag-mehndi" style={{ background: '#4CAF50', color: '#FFF', fontWeight: '600' }}>Henna, Dance &amp; Festivities</div>

                                <div className="event-time-details">
                                    <p className="event-date"><i className="fa-regular fa-calendar" style={{ color: 'var(--clr-gold-dark)' }}></i> Sunday, February 14, 2027</p>
                                    <p className="event-time"><i className="fa-regular fa-clock" style={{ color: 'var(--clr-gold-dark)' }}></i> 4:00 PM onwards</p>
                                </div>

                                <div className="event-location-details">
                                    <h4 className="venue-name" style={{ fontFamily: 'var(--font-serif)' }}>Marigold Courtyard &amp; Royal Ballroom</h4>
                                    <p className="venue-address">Meenakshi Convention Hall, Madurai</p>
                                </div>

                                <p className="event-notes" style={{ flexGrow: 1 }}>
                                    An evening filled with intricate henna designs, followed by high energy musical performances and family dances. Dress in vibrant colors and bring your dancing shoes!
                                </p>

                                <a href="https://maps.google.com/?q=Meenakshi+Convention+Hall+Madurai" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ marginTop: 'auto' }}>
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    <span>View on Google Maps</span>
                                </a>
                            </div>

                            {/* Wedding Muhurtham */}
                            <div className="event-card glass-card card-hover-effect" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="event-icon-box" style={{ background: 'var(--clr-gold-bg)', border: '1px solid var(--clr-gold-primary)' }}>
                                    <i className="fa-solid fa-bell" style={{ color: 'var(--clr-gold-dark)' }}></i>
                                </div>
                                <h3 className="event-type" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)' }}>Wedding Muhurtham</h3>
                                <div className="muhurtham-badge event-tag-muhurtham" style={{ background: 'var(--clr-gold-primary)', color: '#3B000C', fontWeight: '600' }}>Wedding Rituals</div>

                                <div className="event-time-details">
                                    <p className="event-date"><i className="fa-regular fa-calendar" style={{ color: 'var(--clr-gold-dark)' }}></i> Monday, February 15, 2027</p>
                                    <p className="event-time"><i className="fa-regular fa-clock" style={{ color: 'var(--clr-gold-dark)' }}></i> 6:30 AM - 8:30 AM</p>
                                </div>

                                <div className="event-location-details">
                                    <h4 className="venue-name" style={{ fontFamily: 'var(--font-serif)' }}>Temple Mandapam</h4>
                                    <p className="venue-address">Meenakshi Convention Hall, Madurai</p>
                                </div>

                                <p className="event-notes" style={{ flexGrow: 1 }}>
                                    The main auspicious ceremony where Arjun and Priya take their holy vows around the sacred fire. Traditional South Indian temple attire is highly appreciated.
                                </p>

                                <a href="https://maps.google.com/?q=Meenakshi+Convention+Hall+Madurai" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ marginTop: 'auto' }}>
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    <span>View on Google Maps</span>
                                </a>
                            </div>

                            {/* Grand Reception */}
                            <div className="event-card glass-card card-hover-effect" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="event-icon-box" style={{ background: 'var(--clr-gold-bg)', border: '1px solid var(--clr-gold-primary)' }}>
                                    <i className="fa-solid fa-spa" style={{ color: 'var(--clr-gold-dark)' }}></i>
                                </div>
                                <h3 className="event-type" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-maroon-deep)' }}>Grand Reception</h3>
                                <div className="muhurtham-badge event-tag-reception" style={{ background: 'var(--clr-maroon-accent)', color: '#FFF', fontWeight: '600' }}>Dinner &amp; Blessings</div>

                                <div className="event-time-details">
                                    <p className="event-date"><i className="fa-regular fa-calendar" style={{ color: 'var(--clr-gold-dark)' }}></i> Monday, February 15, 2027</p>
                                    <p className="event-time"><i className="fa-regular fa-clock" style={{ color: 'var(--clr-gold-dark)' }}></i> 7:00 PM onwards</p>
                                </div>

                                <div className="event-location-details">
                                    <h4 className="venue-name" style={{ fontFamily: 'var(--font-serif)' }}>Grand Plaza</h4>
                                    <p className="venue-address">Meenakshi Convention Hall, Madurai</p>
                                </div>

                                <p className="event-notes" style={{ flexGrow: 1 }}>
                                    Celebrate the newly wedded couple at a grand dinner reception. An evening of music, gourmet Indian cuisine, and memorable photographs. Formal/ethnic wear.
                                </p>

                                <a href="https://maps.google.com/?q=Meenakshi+Convention+Hall+Madurai" target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ marginTop: 'auto' }}>
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    <span>View on Google Maps</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Gallery Section */}
                <section id="gallery-section" className="gallery-section reveal-section temple-pattern-bg-light" style={{ padding: '80px 0' }}>
                    <div className="container">
                        <div className="section-header">
                            <span className="section-badge">Captured Moments</span>
                            <h2 className="section-title">Memories in Frames</h2>
                            <div className="header-divider">
                                <span className="divider-line"></span>
                                <Lotus style={{ color: 'var(--clr-gold-primary)', fontSize: '1.5rem' }} />
                                <span className="divider-line"></span>
                            </div>
                        </div>

                        <div className="gallery-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '24px',
                            marginTop: '40px'
                        }}>
                            {[
                                { src: "https://i.pinimg.com/736x/28/f5/81/28f5813b36cd8a5e9c482bfc22ae8791.jpg", caption: "Arjun" },
                                { src: "https://i.pinimg.com/736x/87/18/52/87185251f7584038db95c16c7d9d362d.jpg", caption: "Priya" },
                                { src: "/rituals.jpg", caption: "Rituals" },
                                { src: "/celebration.jpg", caption: "Celebrations" }
                            ].map((photo, i) => (
                                <div key={i} className="gallery-item" style={{
                                    position: 'relative',
                                    borderRadius: 'var(--border-radius-md)',
                                    overflow: 'hidden',
                                    border: '2px solid var(--clr-gold-primary)',
                                    padding: '8px',
                                    background: 'var(--clr-gold-bg)',
                                    boxShadow: 'var(--shadow-soft)',
                                    transition: 'var(--transition-smooth)',
                                    cursor: 'pointer'
                                }}>
                                    <div className="gallery-card" style={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingTop: '65%',
                                        overflow: 'hidden',
                                        borderRadius: 'calc(var(--border-radius-md) - 8px)'
                                    }}>
                                        <img src={photo.src} alt={photo.caption} className="gallery-img" style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }} />
                                        <div className="gallery-overlay" style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(to top, rgba(90, 0, 17, 0.9) 0%, rgba(90, 0, 17, 0) 100%)',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            paddingBottom: '20px',
                                            transition: 'opacity 0.4s ease'
                                        }}>
                                            <span className="gallery-caption" style={{ fontFamily: 'var(--font-serif)', color: 'var(--clr-gold-light)', fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>{photo.caption}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Wedding Venue Section */}
                <section id="venue-section" className="venue-section reveal-section temple-pattern-bg-light" style={{ padding: '80px 0' }}>
                    <div className="container small-container">
                        <div className="section-header">
                            <span className="section-badge">The Destination</span>
                            <h2 className="section-title">Wedding Venue</h2>
                            <div className="header-divider">
                                <span className="divider-line"></span>
                                <Lotus style={{ color: 'var(--clr-gold-primary)', fontSize: '1.5rem' }} />
                                <span className="divider-line"></span>
                            </div>
                        </div>

                        <div className="venue-card glass-card card-hover-effect" style={{ marginTop: '40px', borderRadius: 'var(--border-radius-lg)', padding: '50px 30px', border: '2px solid var(--clr-gold-primary)', background: 'rgba(255,248,231,0.85)', boxShadow: 'var(--shadow-gold)', textAlign: 'center' }}>
                            <div className="event-icon-box" style={{ background: 'var(--clr-gold-bg)', border: '1px solid var(--clr-gold-primary)', margin: '0 auto 15px auto', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1.6rem', color: 'var(--clr-gold-dark)' }}>
                                <i className="fa-solid fa-place-of-worship"></i>
                            </div>
                            <h3 className="venue-name" style={{ fontSize: '2.1rem', color: 'var(--clr-maroon-deep)', fontFamily: 'var(--font-serif)', margin: '15px 0' }}>Meenakshi Convention Hall</h3>
                            <p className="venue-address" style={{ fontSize: '1.1rem', color: 'var(--clr-dark-text)', marginBottom: '20px', fontFamily: 'var(--font-body)' }}>Madurai, Tamil Nadu, India</p>

                            <div className="venue-divider" style={{ margin: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Lotus style={{ fontSize: '1.5rem', color: 'var(--clr-gold-primary)' }} />
                            </div>

                            <p className="event-notes" style={{ fontSize: '0.95rem', color: 'var(--clr-dark-text)', marginBottom: '30px', fontFamily: 'var(--font-body)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 30px auto' }}>
                                The wedding celebration and all traditional rituals will be hosted at the grand Meenakshi Convention Hall, echoing the royal heritage and temple-inspired beauty of Madurai.
                            </p>

                            {/* Google Maps Integration */}
                            {/* <div className="map-wrapper" style={{ borderRadius: 'var(--border-radius-md)', overflow: 'hidden', border: '1.5px solid var(--clr-gold-primary)', marginBottom: '30px', boxShadow: 'var(--shadow-soft)' }}>
                                <iframe 
                                    title="Meenakshi Convention Hall Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.144474771239!2d78.1193!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b13c7bbf%3A0x8f2d5de862df13ef!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="350" 
                                    style={{ border: 0, display: 'block' }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div> */}

                            <a href="https://maps.google.com/?q=Meenakshi+Convention+Hall+Madurai" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ display: 'inline-flex', padding: '12px 30px', textDecoration: 'none', borderRadius: '30px', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', border: 'none', cursor: 'pointer', gap: '8px', alignItems: 'center' }}>
                                <i className="fa-solid fa-map-location-dot"></i>
                                <span>Navigate on Google Maps</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Blessing & Hosts Section */}
                <section id="blessing-section" className="blessing-section reveal-section temple-pattern-bg-light" style={{ padding: '80px 0' }}>
                    <div className="container small-container">
                        <div className="blessing-card" style={{ border: '2px solid var(--clr-gold-primary)', background: 'var(--clr-maroon-medium)', color: 'var(--clr-light-text)', padding: '50px 30px', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-gold)', textAlign: 'center' }}>
                            <div style={{ marginBottom: '20px' }}>
                                <Lotus style={{ fontSize: '2.5rem', color: 'var(--clr-gold-primary)' }} />
                            </div>
                            <p className="blessing-message" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--clr-gold-light)' }}>
                                May the Divine bless this union<br />
                                with love, prosperity &amp; everlasting happiness.<br />
                                We humbly seek your presence &amp; blessings.
                            </p>

                            <div className="hosts-divider" style={{ margin: '30px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className="hosts-divider-line" style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.4) 100%)' }}></span>
                                <span className="hosts-divider-text" style={{ padding: '0 15px', fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--clr-gold-primary)' }}>Hosted with love by</span>
                                <span className="hosts-divider-line" style={{ flex: 1, height: '1px', background: 'linear-gradient(270deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.4) 100%)' }}></span>
                            </div>

                            <div className="hosts-names">
                                <h3 className="host-parent-names" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--clr-light-text)', margin: '10px 0', lineHeight: '1.5' }}>
                                    Mr. K. Srinivasan &amp; Mrs. S. Rajalakshmi<br />
                                    <span style={{ fontSize: '1.1rem', display: 'block', margin: '8px 0', color: 'var(--clr-gold-primary)' }}>&amp;</span>
                                    Mr. M. Ramakrishnan &amp; Mrs. R. Meenakshi
                                </h3>
                                <p className="host-family-names" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--clr-gold-light)', marginTop: '20px', letterSpacing: '1px', opacity: 0.8 }}>
                                    Srinivasan Family &nbsp;&bull;&nbsp; Ramakrishnan Family
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="app-footer" style={{ borderTop: '2px solid var(--clr-gold-primary)', background: 'var(--clr-maroon-deep)', position: 'relative', overflow: 'hidden' }}>
                    <div className="footer-bg-glow"></div>
                    <div className="container" style={{ position: 'relative', zIndex: 1, padding: '50px 0 25px 0' }}>
                        <div className="footer-logo" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--clr-gold-primary)', letterSpacing: '2px' }}>A &bull; P</div>
                        <h2 className="footer-heading" style={{ fontFamily: 'var(--font-heading)', color: 'var(--clr-gold-light)', fontSize: '2.5rem', margin: '15px 0' }}>Arjun &amp; Priya</h2>
                        <p className="footer-tagline" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--clr-light-text)', opacity: 0.8, maxWidth: '500px', margin: '0 auto 20px auto' }}>With Love &amp; Gratitude, thank you for being part of our special day.</p>
                        <div className="footer-divider" style={{ margin: '20px 0' }}><Lotus style={{ color: 'var(--clr-gold-primary)', fontSize: '1.2rem' }} /></div>
                        <p className="footer-copyright" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', letterSpacing: '0.5px' }}>&copy; 2027 Arjun &amp; Priya Wedding Celebration. Built with love.</p>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default App;
