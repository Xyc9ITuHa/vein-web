import { lazy } from "react";

const InfiniteScroll = lazy(() => import("../common/InfiniteScroll/InfiniteScroll"));
const FeedbackCard = lazy(() => import("../common/InfiniteScroll/FeedbackCard"));

const items = [
    { content: <FeedbackCard stars={5} comment="just... WOW. Amazing work!!" author="Alice" /> },
    { content: <FeedbackCard stars={4} comment="there is no way it actually costs that much. I feel like a robber" author="Jules" /> },
    { content: <FeedbackCard stars={4.5} comment="HOW. IS. IT. POSSIBLE. TO BE SUCH A BEAUTY" author="Emma" /> },
    { content: <FeedbackCard stars={5} comment="I'm literally crying... it's PERFECT 😭✨" author="Lotte" /> },
    { content: <FeedbackCard stars={4.5} comment="okay but like... this is actual art?? not just flowers??" author="Dries" /> },
    { content: <FeedbackCard stars={4} comment="my friends keep asking where I got this done. I'm gatekeeping sorry not sorry" author="Noor" /> },
    { content: <FeedbackCard stars={5} comment="STOP. I can't handle how gorgeous this is omg" author="Bram" /> },
    { content: <FeedbackCard stars={4.5} comment="worth every single penny and then some. absolutely stunning work" author="Fien" /> },
    { content: <FeedbackCard stars={4} comment="I showed this to my mom and she immediately asked for your contact" author="Koen" /> },
    { content: <FeedbackCard stars={5} comment="this is why I believe in magic again ✨" author="Amber" /> },
    { content: <FeedbackCard stars={4.5} comment="I've been staring at this for 20 minutes. send help." author="Jasper" /> },
    { content: <FeedbackCard stars={4} comment="my wedding photographer said these were the most photogenic flowers ever. how." author="Lara" /> },
    { content: <FeedbackCard stars={5} comment="I CANNOT EVEN. This exceeded every expectation I had" author="Siebe" /> },
    { content: <FeedbackCard stars={4.5} comment="guys... this is what dreams are made of" author="Elise" /> },
    { content: <FeedbackCard stars={4} comment="I'm not crying, you're crying. okay fine, we're all crying" author="Matthias" /> },
    { content: <FeedbackCard stars={5} comment="-'is it raining?' -'no, it isn't' -'*rubbed tear of cheek* yes it is' (godlike work✋😐🤚) " author="Sofie" /> },
    { content: <FeedbackCard stars={4.5} comment="my cat knocked over my old arrangement. THIS one? she bows to it." author="Margot" /> },
    { content: <FeedbackCard stars={5} comment="I literally forgot how to breathe for a solid minute. worth the near-death experience" author="Tibo" /> },
    { content: <FeedbackCard stars={4} comment="my neighbor asked if I hired a fairy godmother. close enough tbh" author="Lien" /> },
    { content: <FeedbackCard stars={4.5} comment="I'm changing my wifi password to 'VeInIsGenius' don't @ me" author="Niels" /> },
    { content: <FeedbackCard stars={5} comment="this made me believe in love again and I'm single so that's saying something" author="Sanne" /> },
    { content: <FeedbackCard stars={4} comment="my dog has been staring at this all day. even she has taste apparently" author="Ruben" /> },
    { content: <FeedbackCard stars={4.5} comment="I just called my ex to tell him what he's missing. no regrets" author="Jolien" /> },
    { content: <FeedbackCard stars={5} comment="this is what happens when angels do flower arranging I CANNOT" author="Viktor" /> },
    { content: <FeedbackCard stars={4} comment="my grandma said 'finally, someone with real talent' and she's TOUGH" author="Luna" /> },
    { content: <FeedbackCard stars={4.5} comment="I put this as my phone wallpaper and now I can't stop smiling at random times" author="Robbe" /> },
    { content: <FeedbackCard stars={5} comment="forget therapy, I just stare at this when I'm sad and it WORKS. I have chronic depression" author="Hanne" /> },
    { content: <FeedbackCard stars={4} comment="my postman asked for the business card. I said absolutely not, you're competition" author="Wouter" /> },
    { content: <FeedbackCard stars={4.5} comment="this is giving main character energy and I'm here for ALL of it" author="Zara" /> },
    { content: <FeedbackCard stars={5} comment="I showed this to my plants and they're trying harder now" author="Finn" /> },
    { content: <FeedbackCard stars={4} comment="my Instagram followers think I moved to a botanical garden. not correcting them" author="Nora" /> },
];

function Feedback() {
    return (

        <section id="feedback" className="relative bottom-0 ">
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
            <div className="p-2 bg-dark-bg top-0 shadow-[0_-5px_20px_rgba(0,0,0,0.4)] mb-3 items-center flex justify-center z-50">
                <h2 className="font-helvetica font-bold text-white text-4xl">Positive feedback is <span className="font-extrabold decoration-wavy underline">guaranteed</span></h2>
            </div>
        </section >
    );
}

export default Feedback;

