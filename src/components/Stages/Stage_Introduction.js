import { images } from './images.js';
import { Button } from 'antd';
//Might be useless here
function StageIntorductionComp(){
    var gamecode = localStorage.getItem('gamecode');

    const Teams = () => {
        let path = "/teams/" + gamecode;
        window.location.href = path;
    }

    return (
    <div>

    </div>
    )
}

export default StageIntorductionComp;