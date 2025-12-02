import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="hidden-mobile"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-accent)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    mixBlendMode: 'difference',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'var(--color-accent)' : 'rgba(192, 192, 192, 0)',
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />
            <div
                className="hidden-mobile"
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
                }}
            />
        </>
    );
};

export default CustomCursor;
