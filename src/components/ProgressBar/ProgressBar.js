import { Statistic, Steps } from 'antd';
import React from 'react';
import "./ProgressBar.css";

const description = 'This is a description.';
const { Countdown } = Statistic;
let deadlineInitial = Date.now() + 1000 * 5; // 1000 = 1 second

const App = () => (
  <Steps
    responsive={true}
    current={1}
    initial={0}
    style={{  }}
    items={[
      {
        title: 'Read manifestos',
        'description': 'Read the manifestos of the teams',
      },
      {
        title: 'Voting (In Progress)',
        description: 'Make best possible votes for your Party',
      },
      {
        title: 'Go to reading session',
        description: 'Hear from President of European Parliament',
      },
    ]}
  />
);
export default App;