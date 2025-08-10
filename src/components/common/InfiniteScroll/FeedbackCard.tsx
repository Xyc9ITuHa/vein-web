import { Star, StarHalf } from 'lucide-react'

interface FeedbackCardProps {
    stars: number;
    comment: string;
    author: string;
}

function FeedbackCard({ stars, comment, author }: FeedbackCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg px-6 flex flex-col items-center w-full h-full pb-4 pt-2">
            <div className="flex flex-row items-center justify-between w-full top-0">
                <p className="font-helvetica font-extrabold">{author}</p>
                <div className="flex flex-row">
                    {[...Array(5)].map((_, i) => (
                        <span key={i}>
                            {stars >= i + 1 ? (
                                <Star size={16} className="text-yellow-500 fill-current" />
                            ) : stars > i ? (
                                <StarHalf size={16} className="text-yellow-500 fill-current" />
                            ) : (
                                <Star size={16} className="text-gray-300/0" />
                            )}
                        </span>
                    ))}
                </div>
            </div>
            <div className="h-full flex items-center justify-center">
                <p className="font-helvetica font-medium">{comment}</p>
            </div>
        </div>
    );
}

export default FeedbackCard;