import type { Locale } from "./locale";
import * as ruSite from "./site";
import * as enSite from "./en/site";
import * as ruCases from "./cases";
import * as enCases from "./en/cases";
import * as ruPartners from "./partners";
import * as enPartners from "./en/partners";
import * as ruPosts from "./posts";
import * as enPosts from "./en/posts";
import * as ruShots from "./shots";
import * as enShots from "./en/shots";
import * as ruIntegrations from "./integrations";
import * as enIntegrations from "./en/integrations";
import * as ruI18n from "./i18n";
import * as enI18n from "./en/i18n";
import { strings, homeFaq } from "./ui";

// One lookup for everything that differs per language.
export function getContent(locale: Locale) {
  const en = locale === "en";
  const site = en ? enSite : ruSite;
  const cases = en ? enCases : ruCases;
  const partners = en ? enPartners : ruPartners;
  const posts = en ? enPosts : ruPosts;
  const shots = en ? enShots : ruShots;
  const integ = en ? enIntegrations : ruIntegrations;
  const i18n = en ? enI18n : ruI18n;
  return {
    locale,
    site,
    cases: cases.cases,
    getCase: cases.getCase,
    caseSlugs: cases.caseSlugs,
    partners: partners.partners,
    getPartner: partners.getPartner,
    partnerSlugs: partners.partnerSlugs,
    posts: posts.posts,
    getPost: posts.getPost,
    postSlugs: posts.postSlugs,
    getShots: shots.getShots,
    caseShots: shots.caseShots,
    integrations: integ.integrations,
    integrationCats: integ.integrationCats,
    ui: i18n.ui,
    meta: i18n.meta,
    jsonLd: i18n.jsonLd,
    t: strings[locale],
    faq: homeFaq[locale],
  };
}

export type Content = ReturnType<typeof getContent>;

// The reading helpers are language-independent.
export { readingMinutes, stripHtml, postText } from "./posts";
export { ruPosts };
