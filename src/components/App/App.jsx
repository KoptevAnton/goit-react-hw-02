import { useEffect, useState } from 'react';
import Description from '../Description/Description';

import Options from '../Options/Options ';

import './App.css';

export default function App() {
  const [feedback, setfeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setfeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const ressetFeedback = () => {
    setfeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100): 0;

  return (
    <div>
      <Description/>
      <Options
        updateFeedback={updateFeedback}
        ressetFeedback={ressetFeedback}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
    </div>
  );
}
