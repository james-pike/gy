import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import IconTelegram from '../icons/IconTelegram';
import IconTwitter from '../icons/IconTwitter';

export default component$(() => {
    return (
        <div class="relative isolate -mt-1 bg-gray-200 rounded-lg dark:bg-gray-800">
            <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div class="relative px-6 pb-8 pt-8 sm:pt-32 lg:static lg:px-8 lg:py-24">
                    <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-white/5 lg:w-1/2">
                            <div class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true">
                                <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary-300 to-primary opacity-20 dark:opacity-30" style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)"></div>
                            </div>
                        </div>
                        <Headline2
                            title={"Get in Touch!"}
                            subtitle={"Reach out to learn more and for project collaborations, Bailey will be glad to hear from you!"}
                            highlight={"Contact Us"}
                        />
                        <dl class="mt-8 space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Telegram</span>
                                   <IconTelegram/>
                                </dt>
                                <dd><a class="hover:text-gray-900 dark:hover:text-white" href="https://t.me/+Civ_RQYiZH03Y2I5">https://t.me/+Civ_RQYiZH03Y2I5</a></dd>

                                <a></a>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Twitter / X</span>
                                  <IconTwitter/>
                                </dt>
                                <dd><a class="hover:text-gray-900 dark:hover:text-white" href="https://x.com/wienerKRC20">@wienerKRC20</a></dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Email</span>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                </dt>
                                <dd><a class="hover:text-gray-900 dark:hover:text-white" href="mailto:hello@example.com">hello@example.com</a></dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form action="#" method="POST" class="px-6 pb-6 pt-8 sm:pb-32 lg:px-8 lg:py-24">
                    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            <div>
                                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900 dark:text-white">Name</label>
                                <div class="mt-1.5">
                                    <input type="text" id="first-name" class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Satoshi" required />
                                </div>
                            </div>
                            <div>
                                <label for="last-name" class="block text-sm/6 font-semibold text-gray-900 dark:text-white">Project</label>
                                <div class="mt-1.5">
                                    <input type="text" id="last-name" class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="$WIENER" required />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="email" class="block text-sm/6 font-semibold text-gray-900 dark:text-white">Email</label>
                                <div class="mt-1.5">
                                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="satoshi@kaspa.org" required />
                                </div>
                            </div>

                        
                            <div class="sm:col-span-2">
                                <label for="message" class="block text-sm/6 font-semibold text-gray-900 dark:text-white">Message</label>
                                <div class="mt-1.5">
                                    <textarea id="message" rows={4} class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave Bailey a message :)"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3.5 flex">
                            <button type="submit" class="py-3 w-full px-5 text-sm font-medium text-center text-white rounded-md bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
});
