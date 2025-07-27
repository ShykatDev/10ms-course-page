import { Pointer, PointersSection } from "@/types/responseType";
import { CheckIcon } from "lucide-react";
import SectionTitle from "./common/SectionTitle";

const LearningOutcomeItem = ({ item }: { item: Pointer }) => {
  return (
    <div className="flex items-start gap-2 mb-2">
      <CheckIcon size={18} className="shrink-0 mt-1 text-blue-500" />
      <p>{item.text}</p>
    </div>
  );
};

const LearningOutcome = ({ pointer }: { pointer: PointersSection }) => {
  return (
    <section id={pointer.type}>
      <SectionTitle label={pointer.name} />

      <div className="grid grid-cols-1 gap-4 rounded-md border border-gray-300 p-5 md:grid-cols-2 md:gap-8">
        {pointer?.values.map((item, i) => {
          return <LearningOutcomeItem key={`${item.id}-${i}`} item={item} />;
        })}
      </div>
    </section>
  );
};

export default LearningOutcome;
