import { Feature, FeaturesSection } from "@/types/responseType";
import Image from "next/image";
import SectionTitle from "./common/SectionTitle";

const CourseFlowContent = ({ item }: { item: Feature }) => {
  return (
    <div className="flex items-start gap-4">
      <Image
        alt={item.title}
        src={item.icon}
        width={300}
        height={300}
        className="size-9"
      />
      <div className="flex flex-col flex-1 gap-2">
        <h1 className="text-[18px] font-[500px] leading-[26px] text-white">
          {item.title}
        </h1>
        <p className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
};

const CourseFlow = ({ features }: { features: FeaturesSection }) => {
  return (
    <section id={features.type}>
      <SectionTitle label={features.name} />

      <div className="grid grid-cols-1 gap-4 rounded-md border border-gray-300 bg-[#111827] p-5 md:grid-cols-2 md:gap-8">
        {features?.values.map((item, i) => {
          return <CourseFlowContent key={`${item.id}-${i}`} item={item} />;
        })}
      </div>
    </section>
  );
};

export default CourseFlow;
