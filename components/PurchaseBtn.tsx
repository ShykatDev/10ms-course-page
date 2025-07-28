const PurchaseBtn = ({ data }: { data: string }) => {
  return (
    <div className="p-4">
      <div className="flex flex-row sm:flex-col lg:flex-row items-center gap-5 w-full">
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

      <button className="mt-5 w-full relative bg-green whitespace-nowrap button primary text-center pt-2 pb-3 md:w-full text-white rounded shadow-[0]">
        {data}
        <span className="absolute bottom-0 left-0 w-full h-[5px] bg-dark-green rounded-b-md"></span>
      </button>
    </div>
  );
};

export default PurchaseBtn;
