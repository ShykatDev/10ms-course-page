const LearningOutcomeItem = () => {
  return (
    <div>
      icon
      <p>Detailed rules and regulations of each module of the IELTS test</p>
    </div>
  );
};

const LearningOutcome = () => {
  return (
    <div>
      <h1>What you will learn by doing the course</h1>

      <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827]/10 p-5 md:grid-cols-2 md:gap-8">
        <LearningOutcomeItem />
        <LearningOutcomeItem />
        <LearningOutcomeItem />
        <LearningOutcomeItem />
        <LearningOutcomeItem />
        <LearningOutcomeItem />
      </div>
    </div>
  );
};

export default LearningOutcome;
