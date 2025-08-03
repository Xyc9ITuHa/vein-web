
interface CardProps {
    children: React.ReactNode;
    className?: string;
}

function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`shadow-xl rounded-2xl w-full bg-white flex overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

export default Card;