import { ResponseType, SectionType, sectionTypes } from "@/types/responseType";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

const QuickLinks = ({ data }: { data: ResponseType }) => {
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

  const filteredSections = data.sections.filter((section: { type: string }) =>
    sectionTypes.includes(section.type as SectionType)
  );

  const linksRef = useRef(null);

  const handleScrollRight = () => {
    if (linksRef.current) {
      (linksRef.current as HTMLElement).scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (linksRef.current) {
      (linksRef.current as HTMLElement).scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 border-b border-gray-300">
      <div className="relative">
        <button
          onClick={handleScrollRight}
          className="p-1 rounded-full bg-gray-200 cursor-pointer absolute -right-3 z-10 top-1/2 -translate-y-1/2 disabled:opacity-20"
        >
          <ChevronRightIcon className="size-6" />
        </button>
        <button
          onClick={handleScrollLeft}
          className="p-1 rounded-full bg-gray-200 cursor-pointer absolute -left-3 z-10 top-1/2 -translate-y-1/2"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <ul
          ref={linksRef}
          className="scrollbar-hide overflow-hidden relative flex flex-nowrap gap-0 scroll-smooth snap-x bg-white"
        >
          {filteredSections.map((item, i) => {
            return (
              <li
                onClick={() => handleScroll(item.type)}
                className="shrink-0 text-sm md:text-base capitalize px-6 py-4 cursor-pointer text-gray-500 hover:text-black"
                key={i}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
