import React from 'react';
import 'antd/dist/antd.css';
import ImagesComp from '../../components/ImagesComp/ImagesComp';

function ImagesPage(){     
    return (
        <div className="Home">
            <header className="App-header">
                <ImagesComp />
                <div id="blockbutton">
                </div>
            </header>
        </div>
    );
}   

export default ImagesPage;