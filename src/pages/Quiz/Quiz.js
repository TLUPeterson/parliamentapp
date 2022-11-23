import { React }  from 'react';
import 'antd/dist/antd.css';
import Header from '../../components/Header/Header';
import Quizcomponent from '../../components/Quiz/Quiz';

function Teams(){     

  console.log()
  return (
<>
    <div className="Home">
      <Header />

    </div>
      <Quizcomponent />
</>
  );
}   

export default Teams;