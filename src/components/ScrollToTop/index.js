import React, { useState, useEffect } from 'react';
import './styles.css';

const ScrollToTop = ({ 
    showAfter = 300,        // через сколько px показывать
    smoothScroll = true,    // плавная прокрутка
    color = "#2c5aa0",      // цвет кнопки
    hoverColor = "#1e3a8a"  // цвет при наведении
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > showAfter);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [showAfter]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: smoothScroll ? 'smooth' : 'auto'
        });
    };

    return (
        <>
            {isVisible && (
                <button 
                    onClick={scrollToTop}
                    className="scroll-to-top"
                    style={{
                        '--button-color': color,
                        '--button-hover-color': hoverColor
                    }}
                    aria-label="Вернуться наверх"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollToTop;