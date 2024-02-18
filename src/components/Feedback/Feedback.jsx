import css from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.total}>Total: {total}</p>
      <p className={css.positive}>Positive: {positiveFeedback}%</p>
    </>
  );
}
