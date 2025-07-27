import { sectionTypes } from "@/types/responseType";

const QuickLinks = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyTop = document.body.getBoundingClientRect().top;
      const elementTop = el.getBoundingClientRect().top;
      const scrollTo = elementTop - bodyTop - offset;

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0">
      <ul className="scrollbar-hide relative flex flex-nowrap gap-4  scroll-smooth snap-x  bg-white">
        {sectionTypes.map((item, i) => {
          return (
            <li
              onClick={() => handleScroll(item)}
              className="shrink-0 capitalize p-4 cursor-pointer"
              key={i}
            >
              {item.includes("_") ? item.split("_").join(" ") : item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuickLinks;
