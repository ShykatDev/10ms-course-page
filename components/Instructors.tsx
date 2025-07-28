import { InstructorsSection } from "@/types/responseType";
import Image from "next/image";
import SectionTitle from "./common/SectionTitle";

const Instructors = ({ instructors }: { instructors: InstructorsSection }) => {
  return (
    <section id={instructors.type}>
      <SectionTitle label={instructors.name} />

      <div className="p-5 pb-0 border border-gray-300 rounded-md ">
        {instructors.values.map((item, i) => {
          return (
            <div
              key={`${item.name}-${i}`}
              className="flex flex-col md:flex-row md:items-center gap-6 gap-y-2 md:gap-y-0 pt-4 md:pt-0"
            >
              <Image
                alt="instructor"
                src={item?.image}
                width={300}
                height={300}
                className="size-16 rounded-full -mt-5"
              />

              <div className="font-medium">
                <h2 className="text-lg">{item.name}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="font-medium text-gray-600 text-sm"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Instructors;
