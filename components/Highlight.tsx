import { cn } from "@/lib/utils";
import { Medium, ResponseType } from "@/types/responseType";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PhoneIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import PurchaseBtn from "./PurchaseBtn";
import Title from "./Title";

const Highlight = ({ data }: { data: ResponseType }) => {
  const [activeMedia, setActiveMedia] = useState<{
    index: number;
    item: Medium;
  }>({
    index: 0,
    item: data?.media[0],
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleSticky = () => {
    const scrollThreshold = 500;
    if (window.scrollY > scrollThreshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleNext = () => {
    if (activeMedia.index < data?.media.length - 1) {
      setActiveMedia((prev) => ({
        ...prev,
        index: prev.index + 1,
        item: data?.media[prev.index + 1],
      }));
    }
    setIsPlaying(false);
  };

  const handlePrev = () => {
    if (activeMedia.index > 0) {
      setActiveMedia((prev) => ({
        ...prev,
        index: prev.index - 1,
        item: data?.media[prev.index - 1],
      }));
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <div>
      <div className=" w-full md:w-[280px] lg:w-[400px] md:bg-white md:border border-gray-300">
        <div className="w-full h-auto p-1 pb-0">
          <div className={cn("relative")}>
            {activeMedia.item?.resource_type === "image" ? (
              <Image
                alt={"thumb"}
                src={activeMedia.item.resource_value}
                width={300}
                height={300}
                className="w-full h-[200px] sm:h-[300px] md:h-[220px] object-cover"
              />
            ) : (
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[220px]">
                {!isPlaying && (
                  <>
                    <Image
                      alt="video thumbnail"
                      src={
                        activeMedia.item?.thumbnail_url ??
                        activeMedia.item?.resource_value
                      }
                      fill
                      className="object-cover rounded"
                    />

                    {/* Black overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

                    <div
                      className="z-20 p-1 bg-white/50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setIsPlaying(true)}
                    >
                      <div className="p-2.5 border w-fit bg-white border-gray-200 rounded-full">
                        <PlayIcon className="size-7 text-green" />
                      </div>
                    </div>
                  </>
                )}

                {isPlaying && (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeMedia.item.resource_value}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            )}

            <button
              onClick={handleNext}
              className="absolute top-1/2 -translate-y-1/2 right-2 p-0.5 border border-gray-200 w-fit rounded-full bg-white cursor-pointer z-10"
            >
              <ChevronRightIcon className="size-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute top-1/2 -translate-y-1/2 left-2 p-0.5 border border-gray-200 w-fit rounded-full bg-white cursor-pointer z-10"
            >
              <ChevronLeftIcon className="size-6" />
            </button>
          </div>
          <div className="flex p-4 items-center gap-4 overflow-x-hidden">
            {data?.media.map((item, i) => {
              const src =
                item?.resource_type === "image"
                  ? item.resource_value
                  : item?.thumbnail_url;
              return (
                <Image
                  onClick={() => {
                    setActiveMedia((prev) => ({
                      ...prev,
                      index: i,
                      item: data?.media[i],
                    }));
                    setIsPlaying(false);
                  }}
                  key={i}
                  alt={item.name}
                  src={src || ""}
                  width={300}
                  height={300}
                  className={cn(
                    "w-[53px] h-8 shrink-0 object-cover cursor-pointer",
                    i === activeMedia.index && "border-3 rounded border-green"
                  )}
                />
              );
            })}
          </div>
        </div>

        <div className="md:hidden">
          <Title title={data?.title} desc={data?.description} />
        </div>

        <div
          className={cn(
            isSticky
              ? "md:fixed top-6 z-20 w-full md:w-[280px] lg:w-[400px]"
              : "bg-white"
          )}
        >
          <div
            className={cn(
              isSticky ? "md:border bg-white border-gray-300" : "bg-white"
            )}
          >
            <PurchaseBtn data={data?.cta_text.name} />

            <div className="p-4 border-b md:border-0 border-gray-200">
              <h2 className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</h2>
              <ul>
                {data?.checklist.map((item, i) => {
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

          {isSticky && (
            <div className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
              <p>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
              <p className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
                <PhoneIcon className="size-4" />
                <span className="ml-1">ফোন করুন (16910)</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {!isSticky && (
        <div className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
          <p>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
          <p className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
            <PhoneIcon className="size-4" />
            <span className="ml-1">ফোন করুন (16910)</span>
          </p>
        </div>
      )}

      {isSticky && (
        <div className="fixed bottom-0 left-0 md:hidden z-10 w-full bg-white border-t border-gray-200 ">
          <PurchaseBtn data={data?.cta_text.name} />
        </div>
      )}
    </div>
  );
};

export default Highlight;
