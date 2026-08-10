import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookies Policy",
  description:
    "How Gulf of America Logistics (GoAL) uses cookies and similar technologies on this website.",
  path: "/cookies-policy",
});

export default function CookiesPolicyPage() {
  return (
    <>
      <PageHero pill="Legal" titleBold="Cookies Policy" image="/images/talk-to-us-hero.png" />

      <LegalContent
        updated="August 7, 2026"
        intro={["Gulf of America Logistics, LLC — Website Cookies Policy"]}
        sections={[
          {
            heading: "What Are Cookies?",
            paragraphs: [
              "Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember your preferences, improve your browsing experience, and, in some cases, understand how visitors use the Site.",
            ],
          },
          {
            heading: "Cookies We Use",
            paragraphs: [
              "This Site currently uses only strictly necessary cookies that are required for its operation. These cookies enable core website functionality, such as security, page navigation, and remembering your language preference where applicable.",
              "We do not currently use analytics, advertising, performance, or third-party tracking cookies.",
            ],
          },
          {
            heading: "Strictly Necessary Cookies",
            paragraphs: [
              "These cookies are essential for the Site to operate as intended and cannot be disabled through our website. Restricting or blocking these cookies through your browser settings may affect how parts of the Site function.",
              "If GoAL introduces analytics, performance, functional, or marketing cookies in the future, this Cookies Policy will be updated to describe those cookies and, where required by applicable law, a cookie consent option will be provided.",
            ],
          },
          {
            heading: "Managing Cookies",
            paragraphs: [
              "Most web browsers allow you to manage cookies through their settings, including viewing, blocking, or deleting cookies. For more information about managing cookies, refer to your browser's help documentation.",
              "Please note that disabling strictly necessary cookies may affect the functionality and performance of this Site.",
            ],
          },
          {
            heading: "Changes to This Cookies Policy",
            paragraphs: [
              "We may update this Cookies Policy from time to time to reflect changes in the cookies we use, applicable legal or regulatory requirements, or improvements to our website. Any changes will be posted on this page together with the updated Effective Date.",
            ],
          },
          {
            heading: "Contact Us",
            paragraphs: [
              `If you have any questions about this Cookies Policy, please contact us at ${site.email}.`,
            ],
          },
        ]}
      />
    </>
  );
}
