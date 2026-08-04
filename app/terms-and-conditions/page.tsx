import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Standard Trading Terms & Conditions",
  description:
    "GoAL's Standard Trading Terms and Conditions for Freight Forwarding, governing all freight forwarding services performed by Gulf of America Logistics.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        pill="Legal"
        titleBold="Standard Trading Terms & Conditions"
        image="/images/talk-to-us-hero.png"
      />

      <LegalContent
        updated="January 2026"
        intro={[
          "These Standard Trading Terms and Conditions for Freight Forwarding (“General Terms and Conditions”) govern all Freight Forwarding Services performed by Gulf of America Logistics (GoAL), its sister, holding, or associated companies.",
        ]}
        sections={[
          {
            heading: "I. Applicability",
            paragraphs: [
              "These General Terms and Conditions apply to all Freight Forwarding Services performed by GoAL, its sister, holding or associated companies. Freight Forwarding Services means services of any kind relating to the carriage, consolidation, storage, handling, packing or distribution of the goods as well as ancillary and advisory services in connection therewith, including but not limited to customs and fiscal matters, declaring the goods for official purposes, procuring insurance of the goods, and collecting or procuring payment or documents relating to the goods.",
              "Freight Forwarding Services also include engineering-level planning, route surveys, engineered lift designs, project cargo solutions, and multimodal transport coordination where applicable.",
              "In the absence of specific terms and conditions that may be issued by local GoAL locations (“Regional Terms and Conditions”) the present General Terms and Conditions are the governing terms and conditions of services that override any conflicting provisions even when GoAL does not expressly object to their inclusion. In the event that any GoAL office issues Regional Terms and Conditions, those will take precedence in their entirety.",
            ],
          },
          {
            heading: "II. Conclusion of Contract",
            paragraphs: [
              "Unless a local office has issued independent terms and conditions all offers made by GoAL, its sister, holding or associated companies, are based on and subject to these General Terms and Conditions. The order must be given to GoAL in writing and contain the following instructions:",
            ],
            list: [
              "Kind of merchandise and descriptions or classification (e.g. dangerous goods)",
              "Value of the goods",
              "Type of packing with contents, numbers, quantity, and weight (gross/net) of packages",
              "Addresses of shipper/consignee",
              "Place of delivery/receipt",
              "General instructions and conditions in respect of shipment, method of transportation (sea/air/road/rail/barge/multimodal, groupage, breakbulk, containerized cargo, etc.)",
              "Special instructions in respect of customs clearance, issue of documents, etc.",
              "Any project-specific engineering or planning instructions required for heavy haul or project cargo movements",
            ],
            after: [
              "In case of verbally given orders these must be confirmed by letter or email. It is the responsibility of the customer to transmit the above required information correct and complete. GoAL shall carry out its services according to the customer’s instructions if accepted.",
            ],
          },
          {
            heading: "III. Delivery Hindrances",
            paragraphs: [
              "If at any time GoAL’s performance is or is likely to be affected by any hindrance or risk of any kind (including but not limited to condition of goods) not arising from any fault or neglect of GoAL and which cannot be avoided by the exercise of reasonable endeavors, GoAL may abandon the carriage of the goods under the respective contract and, where reasonably possible, make the goods or any part of them available to the customer at a place which GoAL may deem safe and convenient, whereupon delivery shall be deemed to have been made, and the responsibility of GoAL in respect of such goods shall cease.",
              "In any event, GoAL shall be entitled to the agreed remuneration under the contract, and the customer shall pay any additional costs resulting from the above-mentioned circumstances.",
            ],
          },
          {
            heading: "IV. Liability",
            paragraphs: [
              "GoAL organizes the freight forwarding services as agent for the Customer at its own discretion and shall devote its best attention to the organization of the transport, carriage, and storage of the entrusted goods. GoAL shall select the appropriate means and mode of transport, as well as storage locations and shall be liable for its accurate and conscientious organization only.",
              "GoAL is not liable for acts and omissions by third parties, such as, but not limited to carriers, warehousemen, stevedores, port authorities and other freight forwarders, unless GoAL has failed to exercise due diligence in selecting, instructing, or supervising such third parties.",
              "These General Terms and Conditions apply whenever any claim is made against an employee, agent or other person GoAL engaged for the performance of the service (including any independent contractor) whether such claims are founded in contract or in tort, and the aggregate liability of GoAL and such employees, agents or other persons shall not exceed the limit applicable to the service concerned as expressly agreed between GoAL and the customer or following from these General Terms and Conditions.",
              "GoAL is authorized to carry out the shipment of the goods by substituting itself for the third party it would otherwise deal with on the customer’s behalf. If it makes use of this right, it has the rights and obligations of a carrier pertaining to the shipment. In such case GoAL is liable for damages to and loss of the goods in its care and custody. With respect to services other than carriage of goods such as, but not limited to, storage, handling, packing or distribution of the goods, as well as ancillary services in connection therewith, GoAL shall be liable only in case such services have been performed by GoAL itself using its own facilities or employees or GoAL has made an express undertaking to assume liability.",
              "The defenses, exclusions, and limitations of liability set forth in these General Terms and Conditions shall apply to and inure to the benefit of GoAL’s officers, directors, employees, agents, representatives, independent contractors, subcontractors, and any other persons or entities engaged by GoAL in the performance of the services. The aggregate liability of GoAL and all such persons or entities shall not exceed the liability limits applicable to GoAL under these Terms.",
            ],
          },
          {
            heading: "V. Exclusions, Assessment and Monetary Limits of Liability",
            paragraphs: ["GoAL shall in no event be liable for:"],
            list: [
              "Loss or damage to goods which occurs whilst the goods are not in actual custody and control of GoAL",
              "Valuables or dangerous goods unless declared to GoAL at the time of the conclusion of the contract",
              "Loss following from delay unless expressly agreed in writing",
              "Indirect or consequential loss such as, but not limited to, loss of profit, loss of market and conventional fines",
              "Inherent vice and nature of the goods",
              "Consequences of loading and unloading operations which GoAL has not performed",
              "Lack of, or defective packing, markings or stowage insofar as GoAL has not executed the packing, markings or stowage",
              "War, rebellion, revolution, insurrection, usurped power or confiscation, nationalization or requisition by or under orders of any government or public or local authority",
              "Natural disasters, acts of God, acts of robbery",
              "Circumstances which GoAL could not avoid and the consequence of which it was unable to prevent",
            ],
            after: [
              "The value of the goods shall be determined according to the sales price as indicated in the sales invoice or, if there is no such invoice, the current market price at the time and place of taking over the goods or if there is no current market price, by reference to the normal value of the goods of the same kind and quality.",
              "The liability of GoAL for any loss of or damage to the goods is limited to an amount equivalent of 2 SDR per kilogram of gross weight of the goods lost or damaged. If GoAL is liable in respect of loss following from delay, such liability shall be limited to an amount not exceeding the remuneration relating to the service giving rise to the delay.",
              "Nothing in these General Terms and Conditions shall be construed to increase GoAL’s liability beyond the limits imposed by applicable United States federal or state law or any mandatory international convention governing the carriage of goods. These contractual limitations are intended to operate in addition to, and not in substitution for, any statutory or convention-based defenses or limits of liability available to GoAL.",
            ],
          },
          {
            heading: "VI. Insurance",
            paragraphs: [
              "GoAL arranges for the insurance of the goods (e.g., cargo or warehouse insurance) with an insurer of its choice only if instructed to do so in writing at the conclusion of the contract. All insurances effected are subject to the usual exceptions and conditions of the policies of the insurance company or underwriters taking the risk. Unless otherwise agreed in writing, GoAL shall not be under any obligation to effect a separate insurance on each consignment but may declare it on any open or general policy held by GoAL.",
              "GoAL is obliged to cover its liabilities resulting from these terms with an insurer of its choice and will provide proof of its liability insurance cover upon the customer’s written request.",
            ],
          },
          {
            heading: "VII. Forfeiture",
            paragraphs: [
              "Upon delivery, the consignee shall check the condition of the goods, the quantity, the number and weight of packages and shall immediately report any apparent defects and missing items. Should any irregularity or missing item not be immediately apparent, the consignee shall send due reservations in writing within seven days after delivery. Otherwise, the conditions of the goods shall be deemed as delivered in the agreed upon condition.",
              "The same shall apply to claims resulting from delay if the consignee does not send due reservations in writing within twenty-one days after delivery of the goods.",
            ],
          },
          {
            heading: "VIII. Conditions of Payment / Lien",
            paragraphs: [
              "All monies due shall be paid without any reduction or deferment on account of any claim, counterclaim or set-off. This does not restrict the right of set-off with undisputed or legally decided claims.",
              "To the extent permitted by United States law, GoAL shall have a general lien on the goods and any documents relating thereto for any amount due at any time to GoAL from the customer including storage fees, uncontested remuneration from other freight forwarding contracts between GoAL and the customer and the cost of recovering same, and may enforce such liens in any reasonable manner.",
            ],
          },
          {
            heading: "IX. Claims in Tort",
            paragraphs: [
              "These General Terms and Conditions apply to all claims against GoAL whether the claim be found in contract or in tort.",
            ],
          },
          {
            heading: "X. Time Bar",
            paragraphs: [
              "GoAL shall, unless otherwise expressly agreed, be discharged of all liability under these Terms and Conditions unless suit is brought within one year after the delivery of the goods. The limitation period shall be governed by applicable United States law in cases of willful misconduct or gross negligence.",
            ],
          },
          {
            heading: "XI. Severability",
            paragraphs: [
              "The terms of these General Terms and Conditions shall be severable, and, if any part or term thereof shall be held invalid, such holding shall not affect the validity or enforceability of any other part or term thereof.",
            ],
          },
          {
            heading: "XII. Governing Law / Jurisdiction",
            paragraphs: [
              "The legal relationship between GoAL and its customer shall be governed by and construed in accordance with the laws of the United States and the State in which GoAL is incorporated or maintains its principal place of business, without regard to conflict of law principles. All actions against GoAL shall be brought exclusively in the state or federal courts of competent jurisdiction within the United States.",
            ],
          },
          {
            heading: "XIII. Indemnification",
            paragraphs: [
              "Each party (the “Indemnifying Party”) shall indemnify, defend, and hold harmless the other party, including its officers, directors, employees, agents, contractors, and affiliates (the “Indemnified Party”), from and against any and all claims, demands, losses, damages, liabilities, costs, and expenses, including reasonable attorneys’ fees, arising out of or related to the Indemnifying Party’s breach of these General Terms and Conditions, negligence, gross negligence, or willful misconduct.",
              "The customer shall further indemnify and hold harmless Gulf of America Logistics LLC (GoAL) from any claims, fines, penalties, losses, or liabilities arising from inaccurate, incomplete, or misleading information provided by the customer, including but not limited to cargo descriptions, weights, dimensions, classifications, documentation, or regulatory declarations.",
              "This indemnity shall survive delivery of the goods, completion of the services, and termination of the contractual relationship.",
            ],
          },
        ]}
      />
    </>
  );
}
