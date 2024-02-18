import Description from "../Description/Descripton";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";
import { useEffect, useState } from "react";
import css from "./App.module.css";

export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
