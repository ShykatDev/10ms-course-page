"use client";

import { ResponseType } from "@/types/responseType";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useData = () => {
  const [lang, setLang] = useState<"en" | "bn">("en");
  const param = useSearchParams();

  useEffect(() => {
    const langParam = param.get("lang");
    if (langParam === "en" || langParam === "bn") {
      setLang(langParam);
    }
  }, [param]);

  const fetchCourse = async () => {
    const response = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-TENMS-SOURCE-PLATFORM": "web",
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch");

    return response.json();
  };

  const {
    data: courseData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ielts-course", lang],
    queryFn: fetchCourse,
  });

  const data: ResponseType = courseData?.data;
  return { data, isLoading, isError };
};

export default useData;
