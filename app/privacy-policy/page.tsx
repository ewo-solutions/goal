import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Gulf of America Logistics (GoAL) collects, uses, and protects information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero pill="Legal" titleBold="Privacy Policy" image="/images/talk-to-us-hero.png" />

      <LegalContent
        updated="Draft — pending GoAL review"
        intro={[
          "This is a draft Privacy Policy prepared for Gulf of America Logistics (GoAL, “we,” “us,” or “our”) review and is not yet final. It describes how we collect, use, and protect information submitted through goalogistics.com (the “Site”).",
        ]}
        sections={[
          {
            heading: "Information We Collect",
            paragraphs: ["We collect information you provide directly to us, including:"],
            list: [
              "Contact details submitted through our enquiry form, such as company name, first and last name, email address, and phone number",
              "The content of any message or enquiry you submit to us",
              "Information you provide when corresponding with us by phone or email",
            ],
          },
          {
            heading: "How We Use Your Information",
            paragraphs: ["We use the information we collect to:"],
            list: [
              "Respond to enquiries and provide requested information about our logistics services",
              "Communicate with you about a potential or ongoing project",
              "Maintain records of our business correspondence",
              "Comply with legal, regulatory, and contractual obligations",
            ],
          },
          {
            heading: "How We Share Your Information",
            paragraphs: [
              "We do not sell your personal information. We may share information with service providers who help us operate this Site or respond to your enquiry (such as email and hosting providers), and where required by law, regulation, or legal process.",
            ],
          },
          {
            heading: "Cookies & Tracking",
            paragraphs: [
              "This Site currently uses only cookies that are strictly necessary for it to function. If GoAL adopts analytics or marketing cookies in the future, this policy will be updated and, where required, we will request your consent. See our Cookies Policy for more detail.",
            ],
          },
          {
            heading: "Data Retention",
            paragraphs: [
              "We retain enquiry and correspondence information for as long as needed to respond to your enquiry and to satisfy our legal, accounting, and business record-keeping requirements.",
            ],
          },
          {
            heading: "Your Choices & Rights",
            paragraphs: [
              `You may request access to, correction of, or deletion of the personal information you have submitted to us by contacting us at ${site.email}. Depending on where you are located, you may have additional rights under applicable data protection law.`,
            ],
          },
          {
            heading: "Contact Us",
            paragraphs: [
              `Questions about this Privacy Policy can be sent to ${site.email} or ${site.phone}.`,
            ],
          },
        ]}
      />
    </>
  );
}
