import { LoaderCircleIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="text-green h-screen w-screen flex gap-2 justify-center items-center">
      <LoaderCircleIcon className="animate-spin" />
      <p className="font-medium text-xl">Loading...</p>
    </div>
  );
};

export default Loading;
