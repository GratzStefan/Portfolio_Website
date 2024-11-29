/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_K7pTbxw4.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_BnZ5HJYJ.mjs';
import { $ as $$Icon, a as aboutPageContent, b as $$Layout } from '../chunks/Layout_D0GiudRb.mjs';
import 'clsx';
import { M as Markdown } from '../chunks/component_DbO0ykBD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$ResumeItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ResumeItem;
  const { title, company, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(company.url, "href")} class="py-3 flex items-center justify-between group-hover:opacity-60 hover:!opacity-100 transition-opacity"> <div class="flex items-center gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": company.image, "alt": company.name, "width": 40, "height": 40, "class": "rounded-full w-[40px] h-[40px] object-cover" })} <div> <h3 class="font-medium">${title}</h3> <p class="text-sm opacity-60">${company.name}</p> </div> </div> <p class="text-sm opacity-60">${date}</p> </a>`;
}, "C:/Projekte/Portfolio_Website/Portfolio_Website/astronautical-axis/src/components/ResumeItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$SocialLinkBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialLinkBox;
  const { title, url, icon, external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="p-4 rounded-lg border border-white border-opacity-30 flex items-center gap-3 group-hover:opacity-30 hover:!opacity-100 transition-opacity"${addAttribute(external ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "width": 25, "height": 25 })} <div class="flex items-center justify-between w-full"> <p>${title}</p> <div class="rotate-45"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })} </div> </div> </a>`;
}, "C:/Projekte/Portfolio_Website/Portfolio_Website/astronautical-axis/src/components/SocialLinkBox.astro", void 0);

const $$Astro$1 = createAstro();
const $$ResumItemEducation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResumItemEducation;
  const { title, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="py-3 flex items-center justify-between group-hover:opacity-60 hover:!opacity-100 transition-opacity"> <div class="flex items-center gap-4"> <div> <h3 class="font-medium">${title}</h3> </div> </div> <p class="text-sm opacity-60">${date}</p> </a>`;
}, "C:/Projekte/Portfolio_Website/Portfolio_Website/astronautical-axis/src/components/ResumItemEducation.astro", void 0);

const $$Astro = createAstro();
const $$ResumItemSkills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResumItemSkills;
  const { name, experiencelevel, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="d-flex justify-items-center"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "Skill", "width": 75, "height": 75, "class": "w-[75px] h-[75px] object-contain overflow-hidden" })} <h1 class="py-1 opacity-85">${name}</h1> <h3 class="py-1 opacity-70">${experiencelevel}</h3> </div>`;
}, "C:/Projekte/Portfolio_Website/Portfolio_Website/astronautical-axis/src/components/ResumItemSkills.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": aboutPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">About</h1> <p class="opacity-60 mb-10">${aboutPageContent.subtitle}</p> <div class="mb-14"> ${renderComponent($$result2, "Markdown", Markdown, { "of": aboutPageContent.about.description })} </div> <div class="flex flex-col min-[410px]:flex-row"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_l.url, "alt": aboutPageContent.about.image_l.alt, "width": 300, "height": 250, "class": "w-[300px] h-[250px] object-cover rounded-xl -rotate-6" })} ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_r.url, "alt": aboutPageContent.about.image_r.alt, "width": 225, "height": 225, "class": "w-[225px] h-[225px] object-cover rounded-xl rotate-6 mx-auto sm:ml-auto" })} </div> </section> <section class="my-20 mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Experiences</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Markdown", Markdown, { "of": aboutPageContent.experiences.description })} </div> <div class="grid grid-cols-1 group"> ${aboutPageContent.experiences.items.map((item) => renderTemplate`${renderComponent($$result2, "ResumeItem", $$ResumeItem, { ...item })}`)} </div> </div> </section> <section class="my-20 mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Education</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Markdown", Markdown, { "of": aboutPageContent.education.description })} </div> <div class="grid grid-cols-1 group"> ${aboutPageContent.education.items.map((item) => renderTemplate`${renderComponent($$result2, "ResumItemEducation", $$ResumItemEducation, { ...item })}`)} </div> </div> </section> <section class="my-20 mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Skills</h2> <div class="container"> <div class="mb-10"> ${renderComponent($$result2, "Markdown", Markdown, { "of": aboutPageContent.skills.description })} </div> <div class="flex flex-wrap gap-8"> ${aboutPageContent.skills.items.map((item) => renderTemplate`${renderComponent($$result2, "ResumItemSkills", $$ResumItemSkills, { ...item })}`)} </div> </div> </section> <section class="mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Connect</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Markdown", Markdown, { "of": aboutPageContent.about.description })} </div> <div class="grid grid-cols-2 gap-2 group"> ${aboutPageContent.connect.links.map((item) => renderTemplate`${renderComponent($$result2, "SocialLinkBox", $$SocialLinkBox, { ...item })}`)} </div> </div> </section> ` })}`;
}, "C:/Projekte/Portfolio_Website/Portfolio_Website/astronautical-axis/src/pages/about.astro", void 0);

const $$file = "C:/Projekte/Portfolio_Website/Portfolio_Website/astronautical-axis/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
