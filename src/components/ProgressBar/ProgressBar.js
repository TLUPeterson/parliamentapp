import { Statistic, Steps } from 'antd';
import React from 'react';

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
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;