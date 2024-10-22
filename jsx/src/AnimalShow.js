import bird from './svg/bird.svg';
import heart from './svg/heart.svg';


const svgMap = {
    bird: bird,
    // cat: cat,
    // cow: cow

};

function AnimalShow({type}) {
    return <div>
        <img alt="animal" src={svgMap[type]}></img>
    </div>
}

export default AnimalShow;