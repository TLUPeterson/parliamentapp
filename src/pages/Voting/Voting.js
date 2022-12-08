import { React }  from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Voting from '../../components/Voting/Voting';
import Header from '../../components/Header/Header';

function Teams(){     

  console.log()
  return (
    <div id="votingbody" className='votingbody' style={{backgroundColor: '#282C34'}}>
      {/* <ProgressBar /> */}
      <Header/>
      <br/>
      <Voting/>
    </div>

  );
}   

export default Teams;