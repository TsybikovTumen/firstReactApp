import { useState, useEffect } from 'react';
import './styles.css';

const ScrollToTop = ({ 
    showAfter = 300,
    smoothScroll = true
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > showAfter);
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
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
                    aria-label="Вернуться наверх"
                    title="Наверх"
                >
                    <svg 
                        className="scroll-icon" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M12 19V5M12 5L5 12M12 5L19 12" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="scroll-pulse"></span>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
