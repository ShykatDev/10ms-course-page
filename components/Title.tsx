import { StarIcon } from "@heroicons/react/24/solid";

const Title = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="container w-full md:w-11/12 min-h-[300px] flex flex-col justify-center text-white">
      <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl px-4 md:px-0">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row md:items-center gap-1 mb-2 px-4 md:px-0">
        <div className="flex items-center gap-1 mb-2">
          <StarIcon className="size-5 text-amber-500" />
          <StarIcon className="size-5 text-amber-500" />
          <StarIcon className="size-5 text-amber-500" />
          <StarIcon className="size-5 text-amber-500" />
          <StarIcon className="size-5 text-amber-500" />
        </div>
        <span className="inline-block text-sm md:text-base md:ml-2">
          (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: desc }}
        className="text-gray-400 text-sm md:text-base px-4 md:px-0"
      />
    </div>
  );
};

export default Title;
