import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookies Policy",
  description: "How Gulf of America Logistics (GoAL) uses cookies on this website.",
  path: "/cookies-policy",
});

export default function CookiesPolicyPage() {
  return (
    <>
      <PageHero pill="Legal" titleBold="Cookies Policy" image="/images/talk-to-us-hero.png" />

      <LegalContent
        updated="Draft — pending GoAL review"
        intro={[
          "This is a draft Cookies Policy prepared for Gulf of America Logistics (GoAL, “we,” “us,” or “our”) review and is not yet final. It explains how cookies and similar technologies are used on goalogistics.com (the “Site”).",
        ]}
        sections={[
          {
            heading: "What Are Cookies",
            paragraphs: [
              "Cookies are small text files placed on your device when you visit a website. They help a site function correctly, remember your preferences, and can be used to understand how visitors use the site.",
            ],
          },
          {
            heading: "Cookies We Use",
            paragraphs: [
              "This Site currently uses only strictly necessary cookies required for core functionality (such as remembering your language preference). We do not currently use analytics, advertising, or third-party tracking cookies.",
            ],
            list: [
              "Strictly Necessary — required for the Site to operate as intended; cannot be switched off",
            ],
            after: [
              "If GoAL introduces analytics or marketing cookies in the future, this policy will be updated to describe them and, where required by law, a cookie consent option will be added to the Site.",
            ],
          },
          {
            heading: "Managing Cookies",
            paragraphs: [
              "Most web browsers let you control cookies through their settings, including blocking or deleting them. Restricting strictly necessary cookies may affect how parts of this Site function.",
            ],
          },
          {
            heading: "Changes to This Policy",
            paragraphs: [
              "We may update this Cookies Policy from time to time to reflect changes in the cookies we use or for legal or regulatory reasons.",
            ],
          },
          {
            heading: "Contact Us",
            paragraphs: [
              `Questions about this Cookies Policy can be sent to ${site.email} or ${site.phone}.`,
            ],
          },
        ]}
      />
    </>
  );
}
