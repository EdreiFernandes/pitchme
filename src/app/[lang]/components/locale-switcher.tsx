"use client";

import { usePathname } from "next/navigation";
import { i18n, type Locale } from "../../../i18n-config";
import BrazilFlag from "./icons/brazil-flag";
import UnitedStatesFlag from "./icons/united-states-flag";
import { useState } from "react";
import SpainFlag from "./icons/spain-flag";

export default function LocaleSwitcher() {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const renderFlag = (language: string) => {
    if (language == "en") return <UnitedStatesFlag />;
    if (language == "es") return <SpainFlag />;

    return <BrazilFlag />;
  };
  const showSelector = () => {
    setShowLanguageSelector(!showLanguageSelector);
  };

  return (
    <div className="items-center justify-items-end">
      <div id="localeSwitcher" className="mr-2">
        <button
          id="languageSelectorButton"
          onClick={showSelector}
          className="hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          type="button"
        >
          {renderFlag(pathname.replace("/", ""))}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {showLanguageSelector && (
          <div
            id="languageSelector"
            className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="languageButton"
            >
              {i18n.locales.map((locale) => {
                return (
                  <li key={locale}>
                    <a
                      href={redirectedPathname(locale)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {renderFlag(locale)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
