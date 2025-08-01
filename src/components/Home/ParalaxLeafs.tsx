import ParallaxDiv from "../common/ParalaxDiv";
import leaf1 from '../../images/leaf1.webp';
import leaf2 from '../../images/leaf2.webp';
import leaf3 from '../../images/leaf3.webp';
import leaf4 from '../../images/leaf4.webp';
import leaf5 from '../../images/leaf5.webp';

function ParalaxLeafs() {
    return (
        <ParallaxDiv>
            <div className="relative z-50 w-full justify-between">
                <img src={leaf1} alt="paralax leaf" className="h-auto w-70 absolute right-0 z-50" />
                <img src={leaf2} alt="paralax leaf" className="h-auto w-70 absolute right-0 z-50" />
                <img src={leaf3} alt="paralax leaf" className="h-auto w-70 absolute left-0 z-50" />
                <img src={leaf4} alt="paralax leaf" className="h-auto w-70 absolute left-0 z-50" />
                <img src={leaf5} alt="paralax leaf" className="h-auto w-70 absolute right-0 z-50" />
            </div>
        </ParallaxDiv>
    );
}

export default ParalaxLeafs;