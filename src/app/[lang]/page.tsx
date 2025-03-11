import { getDictionary } from "@/get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";
import ProfileIcon from "./components/profile-icon";
import MyLinks from "./components/my-links";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="mt-6">
      <div id="content" className="grid grid-flow-col grid-rows-10 gap-6">
        <div id="header" className="row-span-2 col-span-2">
          <div className="col-span-2 grid grid-cols-subgrid gap-1">
            <div className="items-center justify-items-end">
              <LocaleSwitcher />
            </div>
            <div className="items-center justify-items-center">
              <ProfileIcon />
            </div>
          </div>
        </div>

        <div id="bio" className="row-span-1 col-span-2">
          <div className="items-center justify-items-center">
            <b id="name">Edrei Fernandes</b>
            <p id="message">{dictionary.home.message}</p>
          </div>
        </div>

        <div id="links" className="row-span-6 col-span-2">
          <MyLinks/>
        </div>
      </div>
    </div>
  );
}
