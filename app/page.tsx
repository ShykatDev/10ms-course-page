import Loading from "@/components/common/Loading";
import CoursePage from "@/components/CoursePage";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <CoursePage />;
    </Suspense>
  );
}
