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

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      var nextQuetions = currentQuestion + 1;
      setVisible(false);
    }else{
      console.log('try againe')
      setVisible(true);

    }

    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
  }
  return (
    <>
    <div className='question-section' style={{color: 'white'}}>
    {visible && (
        <Alert message="Try again" type="error" closable afterClose={handleClose} style={{width: '50vh'}}/>
      )}
      <div className='question-count'>
        <span>Question {currentQuestion + 1}</span>
      </div>
      <div className='question-text'>
        {questions[currentQuestion].questionText}
      </div>
    </div>

    <div className='answer-section'>
      {
        questions[currentQuestion].answerOptions.map((answerOptions) => (
          <Button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</Button>
        ))
      }
    </div>
  </>
    
    )
}

export default Quizcomponent;