import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
    const canvasRef = useRef(null);
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 100;

            const isScrollingDown =
                window.event &&
                window.event.wheelDelta !== undefined &&
                window.event.wheelDelta < 0;

            if (scrolledToBottom && isScrollingDown) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Three.js setup (same as previous implementation)
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particles setup
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;

        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 50;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: 'white',
            transparent: true,
            opacity: 0.5
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 15;

        const animate = () => {
            requestAnimationFrame(animate);
            particlesMesh.rotation.x += 0.001;
            particlesMesh.rotation.y += 0.001;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    const socialLinks = [
        { icon: faTwitter, url: 'https://twitter.com/your_handle' },
        { icon: faInstagram, url: 'https://instagram.com/your_handle' },
        { icon: faLinkedin, url: 'https://linkedin.com/in/your_profile' },
        { icon: faGithub, url: 'https://github.com/your_username' }
    ];

    return (
        <footer
            ref={footerRef}
            className={`contact-footer ${isVisible ? 'visible' : ''}`}
            style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                transition: 'transform 0.3s ease-in-out'
            }}
        >
            <canvas
                ref={canvasRef}
                className="three-js-background"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1
                }}
            />
            <div className="contact-container">
                <div className="contact-info">
                    <div className="image-container">
                        <a href="https://maps.app.goo.gl/aetAnwLKbzb32tdz9" target="_blank" rel="noopener noreferrer">
                            <img
                                src="src\Sections\sponsors\location.jpg"
                                alt="Location"
                                className="location-image"
                            />
                        </a>
                    </div>
                    <div className="contact-details">
                        <a href="mailto:hackonauts@example.com" className="contact-item">
                            📧 hackonauts@example.com
                        </a>
                        <a href="tel:+1234567890" className="contact-item">
                            📱 +1234567890
                        </a>
                        <a href="https://maps.app.goo.gl/aetAnwLKbzb32tdz9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item">
                            📍 Sir M Visvesvaraya Institute of Technology, Bangalore
                        </a>
                    </div>
                </div>
                <div className="social-handles">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn"
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export { ContactSection };
