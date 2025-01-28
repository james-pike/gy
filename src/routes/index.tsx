import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/widgets/Hero";
import { SITE } from "~/config.mjs";
import Contact from "~/components/pages/Contact";

export default component$(() => {
  return (
    <>
      <Hero />
<Contact/>
<div class="h-2"></div>



    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
