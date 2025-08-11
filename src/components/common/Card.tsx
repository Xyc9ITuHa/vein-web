
interface CardProps {
    children: React.ReactNode;
    className?: string;
}

function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`shadow-md rounded-2xl bg-white flex overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all ease-in ${className}`}>
            {children}
        </div>
    );
}

export default Card;