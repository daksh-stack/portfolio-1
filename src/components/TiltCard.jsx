import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = (mouseY / height - 0.5) * 20 * -1; // Max 20deg rotation
        const rY = (mouseX / width - 0.5) * 20;

        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default TiltCard;
