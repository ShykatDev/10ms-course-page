"use client";

import useData from "@/hooks/useData";
import Highlight from "./Highlight";
import Instructors from "./Instructors";
import QuickLinks from "./QuickLinks";
import Title from "./Title";

const CoursePage = () => {
  const { data, isLoading } = useData();

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div className="relative">
      <div className="top-section w-screen min-h-[300px] bg-[url(/assets/bg.jpeg)] bg-no-repeat bg-cover bg-center">
        <div className="container relative mx-auto ">
          <div className="w-2/3">
            <Title title={data?.title} desc={data?.description} />
          </div>
          <section className="absolute right-0 top-10">
            <Highlight />
          </section>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-2/3 relative space-y-8">
          <QuickLinks />
          {data.sections.map((item) => {
            if (item.type === "instructors") {
              return (
                <Instructors
                  key={item.name}
                  instructors={item} // ✅ Now properly accessible
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
