import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AboutSection } from "@/types/responseType";
import SectionTitle from "./common/SectionTitle";

const CourseDetails = ({ details }: { details: AboutSection }) => {
  return (
    <section id={details.type}>
      <SectionTitle label={details.name} />

      <div className="border border-gray-300 rounded-lg px-5 py-2">
        <Accordion type="single" collapsible>
          {details?.values.map((item, i) => {
            return (
              <AccordionItem
                key={`${item.id}-${i}`}
                value={`item-${i}`}
                className="border-dashed border-gray-300"
              >
                <AccordionTrigger className="font-medium md:text-base mx-lg:text-sm">
                  <div dangerouslySetInnerHTML={{ __html: item.title }} />
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-2 text-gray-500">
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default CourseDetails;
