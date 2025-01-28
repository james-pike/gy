import { component$, useStore } from "@builder.io/qwik";
import ToggleMenu from "~/components/common/ToggleMenu";
import IconChevronDown from "../icons/IconChevronDown";
import { useContent } from "@builder.io/qwik-city";

import ToggleTheme from "../common/ToggleTheme";
import IconTelegram from "../icons/IconTelegram";
import IconTwitter from "../icons/IconTwitter";
import IconPhone from "../icons/IconPhone";
import IconMail from "../icons/IconMail";

export default component$(() => {
  
  const store = useStore({
    isScrolling: false,
  });
  
  const { menu } = useContent();


  return (
    <header
      id="header"
      class={`sticky top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out ${
        store.isScrolling
          ? " md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900"
          : ""
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="absolute inset-0 bg-white/90 dark:bg-gray-900/90"></div>
      <div class="relative text-default py-2.5 px-2.5 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">

          <a class="flex items-center" href={"/"}>
          <svg width="35px" height="35px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Desktop25"></g> <g id="Desktop24"></g> <g id="Desktop23"></g> <g id="Desktop22"></g> <g id="Desktop21"></g> <g id="Desktop20"></g> <g id="Desktop19"></g> <g id="Desktop18"></g> <g id="Desktop17"></g> <g id="Desktop16"></g> <g id="Desktop15"></g> <g id="Desktop14"></g> <g id="Desktop13"></g> <g id="Desktop12"></g> <g id="Desktop11"></g> <g id="Desktop10"></g> <g id="Desktop09"></g> <g id="Desktop08"></g> <g id="Desktop07"></g> <g id="Desktop06"></g> <g id="Desktop05"></g> <g id="Desktop04"></g> <g id="Desktop03"></g> <g id="Desktop02"></g> <g id="Desktop01"> <g> <path d="M31,6v16c0,1.65-1.35,3-3,3H4c-1.65,0-3-1.35-3-3V6c0-1.65,1.35-3,3-3h24C29.65,3,31,4.35,31,6z" fill="#2197F3"></path> </g> <path d="M21,27h-4v-3c0-0.5522-0.4478-1-1-1s-1,0.4478-1,1v3h-4c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h10 c0.5522,0,1-0.4478,1-1S21.5522,27,21,27z" fill="#FFC10A"></path> <g> <path d="M31,17v5c0,1.65-1.35,3-3,3H4c-1.65,0-3-1.35-3-3v-5H31z" fill="#3F51B5"></path> </g> </g> </g></svg>        

            <span class="self-center ml-1 sm:ml-2 text-2xl md:text-2xl font-bold text-primary hover:text-primary-300 whitespace-nowrap flex items-center">
  
  Webdev.ca
</span>
          </a>
          <div class="flex items-center md:hidden">
          <ToggleTheme/>
          <a
                        class="text-gray-500 dark:text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                        href={"https://t.me/+Civ_RQYiZH03Y2I5"}
                      >
                        <IconMail />
                      </a>
          <a
                        class="text-gray-500 dark:text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                        href={"https://x.com/wienerKRC20"}
                      >
                        <IconPhone />
                      </a>
            <ToggleMenu />
          </div>
        </div>
        <nav
          class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5"
          aria-label="Main navigation"
        >
          {menu && menu.items ? (
            <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
              {menu.items.map(({ text, href, items }, key) => (
                <li key={key} class={items?.length ? "dropdown" : ""}>
                  {items?.length ? (
                    <>
                      <button class="hover:text-primary px-4 py-3 flex items-center">
                        {text} <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                      </button>
                      <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-slate-800 rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl">
                        {items.map(({ text: text2, href: href2 }, key2) => (
                          <li key={key2}>
                            <a
                              class="first:rounded-t last:rounded-b md:hover:bg-gray-100  hover:text-primary dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap"
                              href={href2}
                            >
                              {text2}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a class="hover:text-primary px-4 py-3 flex items-centers" href={href}>
                      {text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
        <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div class="items-center flex justify-between w-full md:w-auto">
            <div class="flex">
              <a
                        class="text-gray-500 dark:text-gray-400 hover:bg-primary-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                        href={"/"}
                      >
                        <IconTelegram />
                      </a>
                      <a
                        class="text-gray-500 dark:text-gray-400 hover:bg-primary-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                        href={"/"}
                      >
                        <IconTwitter />
                      </a>

                      <ToggleTheme/>
            </div>
            <span class="ml-4 rtl:ml-0 rtl:mr-4">
              <a
                href="https://kas.fyi/token/krc20/WIENER"
                class="btn btn-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
              >
                Book A Consultation
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});
