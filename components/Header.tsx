"use client";

import {
  LanguageIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems: {
  en: string;
  bn: string;
  hasDropDown?: boolean;
}[] = [
  {
    en: "Class 6-12",
    bn: "ক্লাস ৬-১২",
  },
  {
    en: "Skills",
    bn: "স্কিলস",
  },
  {
    en: "Admission",
    bn: "ভর্তি পরীক্ষা",
    hasDropDown: false,
  },
  {
    en: "Online Batch",
    bn: "অনলাইন ব্যাচ",
  },
  {
    en: "English Centre",
    bn: "ইংলিশ সেন্টার",
  },
  {
    en: "More",
    bn: "আরো",
  },
];

const Header = () => {
  const router = useRouter();
  const [lang, setLang] = useState<"en" | "bn">("en");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const currentLang = searchParams.get("lang") === "bn" ? "bn" : "en";
    setLang(currentLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "bn" ? "en" : "bn";
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("lang", newLang);
    router.push(`?${searchParams.toString()}`);
    setLang(newLang);
  };

  return (
    <nav className="container mx-auto md:!px-0 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/10mslogo-svg.svg"
          alt="logo"
          width={200}
          height={200}
          className="h-7 w-fit object-cover"
        />

        <div className="hidden border px-4 py-1.5 min-w-[350px] md:flex items-center border-gray-300 gap-1 rounded-full w-fit">
          <MagnifyingGlassIcon className="size-5 text-gray-600 shrink-0" />
          <input
            className="outline-none placeholder:text-sm w-full"
            type="text"
            placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="lg:flex items-center gap-6 hidden">
          {navItems.map((item, i) => (
            <div
              key={`navbar-item-${i}`}
              className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer"
            >
              <span>{lang === "bn" ? item.bn : item.en}</span>
              {item.hasDropDown !== false && (
                <ChevronDownIcon className="size-4" />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-gray-500 border rounded px-2 py-0.5 border-gray-300 hover:bg-gray-100 cursor-pointer"
        >
          <LanguageIcon className="size-4 shrink-0" />
          <span className="text-black">{lang === "bn" ? "EN" : "বাং"}</span>
        </button>

        <button className="cursor-pointer text-green flex items-center gap-1">
          <PhoneIcon className="size-4" />
          <span className="hidden md:inline-block">16910</span>
        </button>

        <button className="bg-green py-1 px-3 md:px-6 rounded text-white">
          <span className="text-xs md:text-sm lg:text-base">লগ-ইন</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
