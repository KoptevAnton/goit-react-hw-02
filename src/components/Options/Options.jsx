import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  ressetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.container}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={ressetFeedback}>Resset</button>}
    </div>
  );
}
