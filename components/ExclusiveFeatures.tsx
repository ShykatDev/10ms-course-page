import { Exclusive, FeatureExplanationsSection } from "@/types/responseType";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./common/SectionTitle";

const FeatureItem = ({ item }: { item: Exclusive }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 py-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-[500px] leading-[30px] text-[#111827] md:text-base">
          {item.title}
        </h2>
        {item?.checklist.map((check, i) => {
          return (
            <div key={i} className="flex gap-4">
              <CheckIcon className="text-blue-500 shrink-0 mt-[0.5]" />
              <p className="text-sm font-normal leading-[24px] text-[#4B5563] md:text-base">
                {check}
              </p>
            </div>
          );
        })}
      </div>
      <Image
        alt={item.title}
        src={item.file_url}
        width={300}
        height={300}
        className="w-full md:w-60 object-cover"
      />
    </div>
  );
};

const ExclusiveFeatures = ({
  exclusive,
}: {
  exclusive: FeatureExplanationsSection;
}) => {
  return (
    <section id={exclusive.type}>
      <SectionTitle label={exclusive.name} />

      <div className="border border-gray-300 rounded-lg px-5 divide-y divide-gray-300">
        {exclusive?.values.map((item, i) => {
          return <FeatureItem key={`${item.id}-${i}`} item={item} />;
        })}
      </div>
    </section>
  );
};

export default ExclusiveFeatures;
