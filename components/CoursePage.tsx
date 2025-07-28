"use client";

import useData from "@/hooks/useData";
import CourseDetails from "./CourseDetails";
import CourseFlow from "./CourseFlow";
import ExclusiveFeatures from "./ExclusiveFeatures";
import Highlight from "./Highlight";
import Instructors from "./Instructors";
import LearningOutcome from "./LearningOutcome";
import QuickLinks from "./QuickLinks";
import Title from "./Title";
import Loading from "./common/Loading";

const CoursePage = () => {
  const { data, isLoading } = useData();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="relative">
      <div className="top-section w-screen min-h-[300px] bg-[url(/assets/bg.jpeg)] bg-no-repeat bg-cover bg-center">
        <div className="md:container relative mx-auto ">
          <div className="md:w-2/3 hidden md:block">
            <Title title={data?.title} desc={data?.description} />
          </div>
          <section className="md:absolute z-10 md:bg-white right-0 lg:right-10 xl:right-32 top-10">
            <Highlight data={data} />
          </section>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="md:w-3/5 lg:w-3/6 xl:w-3/5 relative space-y-8">
          <QuickLinks data={data} />

          {data?.sections.map((item) => {
            if (item.type === "instructors") {
              return <Instructors key={item.name} instructors={item} />;
            }

            if (item.type === "features") {
              return <CourseFlow key={item.name} features={item} />;
            }

            if (item.type === "pointers") {
              return <LearningOutcome key={item.name} pointer={item} />;
            }

            if (item.type === "feature_explanations") {
              return <ExclusiveFeatures key={item.name} exclusive={item} />;
            }

            if (item.type === "about") {
              return <CourseDetails key={item.name} details={item} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
