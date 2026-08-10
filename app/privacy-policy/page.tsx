import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Gulf of America Logistics (GoAL) collects, uses, shares, and protects information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero pill="Legal" titleBold="Privacy Policy" image="/images/talk-to-us-hero.png" />

      <LegalContent
        updated="August 7, 2026"
        intro={["Gulf of America Logistics, LLC — Website Privacy Policy"]}
        sections={[
          {
            heading: "Information We Collect",
            paragraphs: [
              "Gulf of America Logistics (GoAL) collect information you provide directly to us, including:",
            ],
            list: [
              "Contact details submitted through our enquiry form, such as company name, first and last name, email address, and phone number.",
              "The content of any message or enquiry you submit.",
              "Information you provide when corresponding with us by phone or email.",
              "Certain technical information automatically collected when you visit this Site, such as your IP address, browser type, device information, and pages accessed, where necessary for the operation and security of the Site.",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use the information we collect to:"],
            list: [
              "Respond to enquiries and provide requested information about our logistics services.",
              "Communicate with you about a potential or ongoing project.",
              "Maintain business records and correspondence.",
              "Comply with applicable legal, regulatory, and contractual obligations.",
            ],
          },
          {
            heading: "How We Share Your Information",
            paragraphs: [
              "We do not sell or share your personal information for advertising purposes. We may share information with trusted service providers that help us operate this Site, communicate with you, or support our business operations, including website hosting and email providers. We may also disclose information where required by applicable law, regulation, legal process, or to protect our legal rights.",
            ],
          },
          {
            heading: "Cookies and Tracking",
            paragraphs: [
              "This Site currently uses only cookies and similar technologies that are strictly necessary for its operation. If GoAL adopts analytics or marketing cookies in the future, this Privacy Policy will be updated and, where required, we will request your consent. Please refer to our Cookies Policy for more information.",
            ],
          },
          {
            heading: "Data Retention",
            paragraphs: [
              "We retain enquiry and correspondence information for as long as reasonably necessary to respond to your enquiry and to satisfy our legal, accounting, and business record-keeping requirements, unless a longer retention period is required or permitted by law.",
            ],
          },
          {
            heading: "Information Security",
            paragraphs: [
              "We maintain reasonable administrative, technical, and physical safeguards designed to protect the personal information we collect. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
            ],
          },
          {
            heading: "Your Choice and Rights",
            paragraphs: [
              `You may request access to, correction of, or deletion of the personal information you have submitted to us by contacting us at ${site.email}. Depending on your state or country of residence, you may have additional rights under applicable privacy laws, including the right to access, correct, delete, or obtain a copy of your personal information.`,
            ],
          },
          {
            heading: "Changes to This Privacy Policy",
            paragraphs: [
              "We may update this Privacy Policy from time to time. Any changes will be posted on this page together with the updated Effective Date.",
            ],
          },
          {
            heading: "Contact Us",
            paragraphs: [
              `If you have any questions about this Privacy Policy or our privacy practices, please contact us at ${site.email}.`,
            ],
          },
        ]}
      />
    </>
  );
}
