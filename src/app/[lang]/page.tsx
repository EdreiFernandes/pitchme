import { getDictionary } from "@/get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";
import ProfileIcon from "./components/profile-icon";
import MyLinks from "./components/my-links";
import MoreAbout from "./components/more-about";
import Bio from "./components/bio";

type Props = {
  params: Promise<{ lang: Locale }>
}

export default async function Home(props: Props) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="h-10">
        <LocaleSwitcher />
      </header>
      
      <main className="mb-auto h-10 ">
        <div id="content" className="grid grid-flow-col grid-rows-10 gap-5">
          <div id="header" className="row-span-2 col-span-2">
            <ProfileIcon />
          </div>

          <div id="bio" className="row-span-1 col-span-2">
            <Bio message={dictionary.home.message}/>
          </div>

          <div id="links" className="row-span-6 col-span-2">
            <MyLinks />
          </div>
        </div>
      </main>

      <footer className="h-10">
        <MoreAbout message={dictionary.home.copyright} />
      </footer>
    </div>
  );
}
