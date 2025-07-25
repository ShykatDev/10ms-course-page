const links = [
  {
    label: "কোর্স ইন্সট্রাক্টর",
    value: "#instructor",
  },
  {
    label: "কোর্সটি যেভাবে সাজানো হয়েছে",
    value: "#course-flow",
  },
  {
    label: "কোর্সটি করে যা শিখবেন",
    value: "#learning-outcome",
  },
  {
    label: "কোর্স এক্সক্লুসিভ ফিচার",
    value: "#exclusive-feature",
  },
  {
    label: "কোর্স সম্পর্কে বিস্তারিত",
    value: "#course-details",
  },
];

const QuickLinks = () => {
  return (
    <div className="sticky top-0">
      <ul className="flex bg-white gap-6 flex-nowrap overflow-auto">
        {links.map((item, i) => {
          return (
            <li className="shrink-0" key={i}>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuickLinks;
