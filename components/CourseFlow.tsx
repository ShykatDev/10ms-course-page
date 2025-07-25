const CourseFlowContent = () => {
  return (
    <div>
      icon
      <div>
        <h1>৫০+ ভিডিও লেকচার</h1>
        <p>
          IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন
          নিয়ে in-depth আলোচনা
        </p>
      </div>
    </div>
  );
};

const CourseFlow = () => {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827]/10 p-5 md:grid-cols-2 md:gap-8">
      <CourseFlowContent />
      <CourseFlowContent />
      <CourseFlowContent />
      <CourseFlowContent />
    </div>
  );
};

export default CourseFlow;
