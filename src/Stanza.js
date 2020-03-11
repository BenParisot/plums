import React, { useState, useEffect, useRef } from 'react';

const Stanza = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(stanzas => {
            stanzas.forEach(stanza => setIsVisible(stanza.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        >
            {props.children}
        </div>
    )
};

export default Stanza;
