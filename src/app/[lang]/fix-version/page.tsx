import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "../components/locale-switcher";
import MoreAbout from "../components/more-about";
import { getLinks } from "@/get-links";
import Link from "next/link";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function FixVersion(props: Props) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const links = await getLinks();

  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="h-10">
        <div className="grid grid-flow-col grid-rows-1 gap-5">
          <div className="row-span-1 col-span-1">
            <Link
              href={links.home}
              className="font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 mt-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
              </svg>
              <span className="sr-only">Icon description</span>
            </Link>
          </div>
          <div className="row-span-1 col-span-1">
            <LocaleSwitcher />
          </div>
        </div>
      </header>

      <main className="mb-auto h-10 mt-5">
        <div className="grid grid-flow-col grid-rows-4 gap-5">
          <div className="row-span-1 col-span-2">
            <div
              id="actualVersion"
              className="items-center justify-items-center"
            >
              <h1 className="mb-5 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  {dictionary.version.label}:
                </span>{" "}
                {dictionary.version.current.code}
              </h1>
              <div className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center font-semibold">
                {dictionary.version.current.updates.map((update) => {
                  return (
                    <ul key={update} className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                      <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg
                          className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                          />
                        </svg>
                        <span>{update.toString()}</span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="row-span-3 col-span-2">
            <div className="items-center justify-items-center">
              <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mx-5">
                {dictionary.version.history.map((oldVersion) => {
                  return (
                    <div key={oldVersion.code} className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        {oldVersion.code}
                      </dt>
                      <dd className="text-lg font-semibold">
                        {oldVersion.updates.map((update) => {
                          return (
                            <ul key={update} className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                <svg
                                  className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 16 12"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5"
                                  />
                                </svg>
                                <span>{update.toString()}</span>
                              </li>
                            </ul>
                          );
                        })}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-15">
        <MoreAbout
          message={dictionary.home.copyright}
          version={dictionary.version.current.code}
        />
      </footer>
    </div>
  );
}
