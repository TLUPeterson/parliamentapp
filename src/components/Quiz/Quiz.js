import { Alert, Button } from 'antd';
import React, { useState } from 'react';
import questionsSol from './questionsSol';
import questionsTrad from './questionsTrad';
import questionsLib from './questionsLib';
import questionsEco from './questionEco';
var questions;
var currentTeam = localStorage.getItem('team');
if(currentTeam==='teamSolidarity'){questions=questionsSol};
if(currentTeam==='teamTradition'){questions=questionsTrad};
if(currentTeam==='teamEcology'){questions=questionsEco};
if(currentTeam==='teamLiberty'){questions=questionsLib};

console.log(questions)
function Quizcomponent(){
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [visible, setVisible] = useState(false);
  const handleClose = () => {
    setVisible(false);
  };
  //When final question is answerd correctly waits for x seconds then goes to new page. Doesnt work yet.
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  const handleDelaytoPage = async event => {
    console.log('first check')
    await delay(2000)
    console.log('second check')
    window.location.href = '/images';
   
  };
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      var nextQuestion = currentQuestion + 1;
      setVisible(false);
      if(questions.length<=currentQuestion+1){
        console.log('end')
        handleDelaytoPage();
        window.location.href = '/images';
      } 
    }else{
      console.log('try againe')
      setVisible(true);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    console.log(questions.length, isCorrect);
  }
  return (
    <div id="App-teams">
    <div className='question-section' style={{color: 'white'}}>
    {visible && (
        <Alert message="Try again" type="error" closable afterClose={handleClose} style={{width: '50vh'}}/>
      )}
      <div className='question-count' style={{textAlign: 'center'}}>
        <span>Question {currentQuestion + 1}</span>
      </div>
      <div className='question-text' style={{textAlign: 'center'}}>
        {questions[currentQuestion].questionText}
      </div>
    </div>

    <div className='answer-section' style={{alignItems: 'center'}}>
      {
        questions[currentQuestion].answerOptions.map((answerOptions) => (
          <Button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</Button>
        ))
      }
    </div>
  </div>
    
    )
}

export default Quizcomponent;