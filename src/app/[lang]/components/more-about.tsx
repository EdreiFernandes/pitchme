import { getLinks } from "@/get-links";
import Link from "next/link";

type Props = {
  message: string,
  version: string,
}

export default async function MoreAbout(props: Props) {
  const links = await getLinks();

  return (
    <div className="grid grid-flow-col grid-rows-2">
      <div id="copyright" className="row-span-1 col-span-1">
        <div className="items-center justify-items-center">
          <div>
            <p className="inline-flex items-center text-xs font-normal text-gray-500">
              &copy; {props.message}
            </p>
          </div>
        </div>
      </div>

      <div id="version" className="row-span-1 col-span-1">
        <div className="items-end justify-items-end">
          <div className="mr-2">
            <Link
              href={links.fixVersion}
              className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {props.version}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
