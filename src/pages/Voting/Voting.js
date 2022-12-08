import { React }  from 'react';
import 'antd/dist/antd.css';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Voting from '../../components/Voting/Voting';

function Teams(){     

  console.log()
  return (
    <div id="votingbody" className='votingbody' style={{backgroundColor: '#282C34'}}>
      {/* <ProgressBar /> */}
      <br/>
      <Voting/>
    </div>

  );
}   

export default Teams;