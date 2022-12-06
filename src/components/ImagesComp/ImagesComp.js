import { useState } from "react";
import { images } from './images.js';
import { Button } from 'antd';

function ImagesComp(){
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handlePreviousClick() {
        setIndex(index - 1);
    }

    var gamecode = localStorage.getItem('gamecode');

    const Teams = () => {
        let path = "/teams/" + gamecode;
        window.location.href = path;
    }
    const Voting = () => {
        let path = "/voting/";
        window.location.href = path;
    }

    let imageElement = images[index];
    return (
        <div>
        <Button disabled={index == 0} onClick={handlePreviousClick}>
            PREVIOUS member
        </Button>
        <Button disabled={index == 2} onClick={handleNextClick}>
            NEXT member
        </Button>
        <br />
        <br />
        <img
            src={imageElement.pic}
        />
        <h1>
            <i>{imageElement.name} </i>
        </h1>
        <p style={{fontSize: "medium"}}>
            {imageElement.text}
        </p>
        
        <Button type="primary" onClick={Teams}>Back to Teams view</Button>
        <Button type="primary" onClick={Voting}>To Voting</Button>
    </div>
    )
}

export default ImagesComp;