import { getLinks } from "@/get-links";

export default async function MyLinks() {
  const links = await getLinks();

  return (
    <div>
      <ul className="my-4 space-y-3 mx-5">
        <li id="musiquinhas-link">
          <a
            href={links.musiquinhas}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Filled"
              viewBox="0 0 24 24"
              className="h-5"
            >
              <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Musiquinhas</span>
          </a>
        </li>
        <li id="github-link">
          <a
            href={links.github}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="git-icon"
              viewBox="0 0 24 24"
              className="h-5"
            >
              <path d="M24,3.5c0-1.933-1.567-3.5-3.5-3.5s-3.5,1.567-3.5,3.5c0,1.396,.818,2.601,2,3.163v1.837c0,1.378-1.122,2.5-2.5,2.5H7.5c-.899,0-1.75,.217-2.5,.602V6.663c1.182-.562,2-1.767,2-3.163,0-1.933-1.567-3.5-3.5-3.5S0,1.567,0,3.5c0,1.396,.818,2.601,2,3.163v10.674c-1.182,.562-2,1.767-2,3.163,0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5c0-1.396-.818-2.601-2-3.163v-.837c0-1.378,1.122-2.5,2.5-2.5h9c3.033,0,5.5-2.467,5.5-5.5v-1.837c1.182-.562,2-1.767,2-3.163Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">GitHub</span>
          </a>
        </li>
        <li id="nous-link">
          <a
            href={links.nous}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg
              id="note-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
            >
              <path d="m22.554.923a3.978 3.978 0 0 0 -3.291-.853l-9.184 1.722a5 5 0 0 0 -4.079 4.914v9.85a3.959 3.959 0 0 0 -2-.556 4 4 0 1 0 4 4v-9.124a2 2 0 0 1 1.632-1.966l11.183-2.1a1 1 0 0 1 1.185.99v5.76a3.959 3.959 0 0 0 -2-.56 4 4 0 1 0 4 4v-13a3.987 3.987 0 0 0 -1.446-3.077z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Nous</span>
          </a>
        </li>
        <li id="partyhub-link">
          <a
            href={links.partyhub}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg
              id="partyhub-icon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m0 0h32v32h-32z" />

                <path
                  d="m14.5 0c3.8659932 0 7 3.13400675 7 7 0 3.5261219-2.6071882 6.4433024-5.9989899 6.9289666l-.0010101 12.0710334h13v6h-28v-6h13l-.0000082-12.07089c-3.3922902-.4852332-5.9999918-3.4026409-5.9999918-6.92911 0-3.86599325 3.1340068-7 7-7z"
                  fill="#000000ff"
                  transform="translate(1.5)"
                />
              </g>
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Party Hub</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
