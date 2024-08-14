

export default function Options({
  updateFeedback,
  ressetFeedback,
  totalFeedback,
}) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={ressetFeedback}>Resset</button>}
    </div>
  );
}
