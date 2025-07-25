// type Props = {
//   instructors: Instructor[];
// };

import { InstructorsSection } from "@/types/responseType";
import Image from "next/image";

const Instructors = ({ instructors }: { instructors: InstructorsSection }) => {
  const value = instructors.values[0];

  console.log(value);
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold md:text-2xl">
        কোর্স ইন্সট্রাক্টর
      </h1>

      <div className="p-5 pb-0 border rounded-md flex items-center gap-6">
        <Image
          alt="instructor"
          src={value?.image}
          width={300}
          height={300}
          className="size-16 rounded-full -mt-5"
        />

        <div className="font-medium">
          <h2 className="text-lg">{value.name}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: value.description }}
            className="font-normal text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Instructors;
