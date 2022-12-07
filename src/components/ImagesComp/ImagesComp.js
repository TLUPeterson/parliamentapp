import { useState } from "react";
import { images } from './images.js';
import { Button } from 'antd';
import "./ImagesComp.css";

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
            <div className="buttonsClass">
                <Button type="primary" disabled={index == 0} onClick={handlePreviousClick}>
                    PREVIOUS member
                </Button>
                <Button type="primary" disabled={index == 2} onClick={handleNextClick}>
                    NEXT member
                </Button>
            </div>
            <br />
            <div id="imageArea">
                <img
                    src={imageElement.pic}
                />
                
            </div>
            <div id="nameArea">
                <h1>
                    <i>{imageElement.name} </i>
                </h1>
            </div>
            <div id="textArea">
                <p style={{fontSize: "large"}}>
                    {imageElement.text}
                </p>
            </div>
            
            <div className="buttonsClass">
                <Button type="primary" onClick={Teams}>Back to Teams view</Button>
                <Button type="primary" onClick={Voting}>To Voting</Button>
            </div>
        </div>
    )
}

export default ImagesComp;