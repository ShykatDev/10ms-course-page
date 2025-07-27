import { ResponseType } from "@/types/responseType";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";

const Highlight = ({ data }: { data: ResponseType }) => {
  return (
    <div>
      <div className="w-[400px] bg-white border border-gray-300">
        <div className="w-full h-[300px] p-1">
          <Image
            alt={"thumb"}
            src={data.media[0]?.thumbnail_url}
            width={300}
            height={300}
            className="w-full"
          />
          <div className="flex p-4 items-center gap-4 overflow-x-hidden">
            {data?.media.map((item, i) => {
              const src =
                item?.resource_type === "image"
                  ? item.resource_value
                  : item.thumbnail_url;
              return (
                <Image
                  key={i}
                  alt={item.name}
                  src={src || ""}
                  width={300}
                  height={300}
                  className="w-[53px] h-7 shrink-0 object-cover"
                />
              );
            })}
          </div>
        </div>
        <div className="bg-red-100 sticky top-0">
          <div className="p-4">
            <div className="flex items-center gap-5">
              <h1 className="inline-block text-2xl font-semibold">
                ৳1000
                <span className="ml-2 text-base font-normal md:text-xl line-through">
                  ৳1500
                </span>
              </h1>

              <div className="relative inline-block bg-orange-400 text-white font-bold text-sm px-4 pr-2 py-1 clip-tag rounded-tr rounded-br after:absolute after:h-full after:border-l-[20px] after:border-t-0 after:border-b-[20px] after:border-l-transparent after:border-r-transparent after:border-b-orange-400 after:rotate-135 after:-left-[7px] after:top-[2.5px] ">
                <span className="absolute left-1 top-1/2 -translate-y-1/2 size-1.5 bg-white rounded-full"></span>
                <span className="text-xs">500 ট ছাড়</span>
              </div>
            </div>

            <button className="mt-5 relative bg-green-600 whitespace-nowrap button primary text-center pt-2 pb-3 md:w-full text-white rounded shadow-[0]">
              {data.cta_text.name}
              <span className="absolute bottom-0 left-0 w-full h-[5px] bg-green-800 rounded-b-md"></span>
            </button>
          </div>

          <div className="p-4">
            <h2 className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</h2>
            <ul>
              {data.checklist.map((item, i) => {
                return (
                  <li key={i} className="flex items-center mb-3 leading-5">
                    <Image
                      alt={item.id}
                      src={item.icon}
                      width={500}
                      height={500}
                      className="size-5 shrink-0"
                    />
                    <span className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
        <p>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
        <p className="flex items-center justify-center ml-2 underline cursor-pointer text-green-600">
          <PhoneIcon size={14} />
          <span className="ml-1">ফোন করুন (16910)</span>
        </p>
      </div>
    </div>
  );
};

export default Highlight;
