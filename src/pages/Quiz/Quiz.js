import { React }  from 'react';
import Header from '../../components/Header/Header';
import Quizcomponent from '../../components/Quiz/Quiz';

function Teams(){     

  console.log()
  return (
<>
    <Header />
    <div className="App-teams">
      <Quizcomponent />

    </div>
      
</>
  );
}   

export default Teams;