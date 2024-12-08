import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import GlitchSectionText from './glitchsection/GlitchSection';

function TimelineSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const timelineEvents = [
        {
            time: "8:00 AM",
            title: "Registration & Team Set-Up",
            description: "Participants arrive, register, and form teams. Get ready to meet your potential collaborators and prepare for an exciting hackathon journey.",
            side: "left"
        },
        {
            time: "9:00 AM",
            title: "Welcome & Opening Remarks",
            description: "Official welcome by organizers, introduction to the hackathon theme, rules, and expectations. Get inspired and motivated!",
            side: "right"
        },
        {
            time: "10:00 AM",
            title: "Hackathon Kickoff",
            description: "Coding begins! Teams start brainstorming, planning, and developing their innovative projects.",
            side: "left"
        },
        {
            time: "1:00 PM",
            title: "Lunch Break",
            description: "Refuel and recharge. Network with fellow participants and take a short mental break.",
            side: "right"
        },
        {
            time: "4:00 PM",
            title: "Midpoint Check-In",
            description: "Mentors and organizers provide guidance and support. Teams can seek advice and overcome challenges.",
            side: "left"
        },
        {
            time: "7:00 PM",
            title: "Project Submission",
            description: "Final submissions are due. Teams finalize their projects and prepare for presentations.",
            side: "right"
        },
        {
            time: "8:00 PM",
            title: "Closing & Finalists Revealed",
            description: "Top projects are selected by judges. Anticipation builds for the final announcements.",
            side: "left"
        },
        {
            time: "9:00 PM",
            title: "Winners Announcement",
            description: "Celebrate the most innovative and impactful projects. Recognition and prizes await!",
            side: "right"
        }
    ];

    const eventVariants = {
        hidden: {
            opacity: 0,
            x: (side) => side === 'left' ? -50 : 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="timeline" className="timeline-section" ref={ref}>
            <div className="timeline-wrapper">
                < GlitchSectionText size="4rem" heading="Event-Timeline"/>
                <div className="timeline-container">
                    <motion.div
                        className="timeline-line"
                        style={{
                            scaleY: scrollYProgress,
                            transformOrigin: 'top center'
                        }}
                    />
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-event ${event.side}`}
                            variants={eventVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: false,  // Allow multiple animations
                                amount: 0.3   // Trigger when 30% of element is in view
                            }}
                            custom={event.side}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5
                            }}
                        >
                            <motion.div
                                className="timeline-content"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <span className="timeline-time">{event.time}</span>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { TimelineSection };
