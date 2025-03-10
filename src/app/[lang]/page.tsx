import { getDictionary } from "@/get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <div id="content" className="grid grid-flow-col grid-rows-8 gap-4">
        <div id="switcherLaguange" className="row-span-1 col-span-2">
          <div className="items-center justify-items-end mr-6 mt-3">
            <LocaleSwitcher />
          </div>
        </div>

        <div id="profileImage" className="row-span-4 col-span-2 bg-pink-500">
          <div className="items-center justify-items-center">
            <img className="h-48 object-cover rounded-full " src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg" />
          </div>
        </div>
        <div id="descrition" className="row-span-2 col-span-2 bg-pink-500">
          <div className="items-center justify-items-center">
            03 - bio: aqui vai ficar uma descrição bacana
          </div>
        </div>
        <div id="links" className="row-span-1 col-span-2 bg-pink-500">04 - links</div> 
      </div>
    </div>
  );
}
