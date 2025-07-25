const Title = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="w-11/12 min-h-[300px] flex flex-col justify-center text-white">
      <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
        {title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: desc }}
        className="text-gray-400 "
      />
    </div>
  );
};

export default Title;
