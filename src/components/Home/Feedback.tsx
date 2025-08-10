import InfiniteScroll from "../common/InfiniteScroll/InfiniteScroll";
import FeedbackCard from "../common/InfiniteScroll/FeedbackCard";

const items = [
    { content: <FeedbackCard stars={5} comment="Excellent service!" author="Alice" /> },
    { content: <FeedbackCard stars={4} comment="Excellent service!" author="Alice" /> },
    { content: <FeedbackCard stars={4.5} comment="Excellent service!" author="Alice" /> },
];

function Feedback() {
    return (

        <section id="feedback" className="relative">
            <div style={{ height: '500px', position: 'relative' }}>
                <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection='left'
                    autoplay={true}
                    autoplaySpeed={0.3}
                    autoplayDirection="down"
                />
            </div>
        </section>
    );
}

export default Feedback;