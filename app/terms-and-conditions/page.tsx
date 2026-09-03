import PageHero from "@/components/PageHero";
import LegalContent from "@/components/LegalContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Standard Trading Terms & Conditions",
  description:
    "Gulf of America Logistics standard trading terms and conditions governing quotations, bookings, transportation, freight forwarding, warehousing, specialized trucking, and project logistics services.",
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
        updated="August 2026 (Version 02)"
        intro={[
          "Gulf of America Logistics, LLC — Terms and Conditions for Freight Forwarding",
          "These Standard Trading Terms and Conditions govern all quotations, bookings, transportation, freight forwarding, warehousing, specialized trucking, project logistics, engineering support, customs-related services, and other logistics services performed by Gulf of America Logistics LLC (“GoAL”). By requesting or accepting any Services, the Customer agrees to be bound by these Terms unless otherwise agreed in writing.",
        ]}
        sections={[
          {
            heading: "1. Applicability",
            paragraphs: [
              "These Standard Trading Terms and Conditions (“Terms”) apply to all services performed by GoAL, including its parent companies, subsidiaries, affiliates, successors, and assigns, unless otherwise expressly agreed in writing.",
              "For purposes of these Terms, Services include, but are not limited to:",
            ],
            list: [
              "Freight forwarding by air, ocean, road, rail, inland waterway, or multimodal transport;",
              "Domestic and international transportation management;",
              "Specialized trucking, heavy haul transportation, oversize and overweight transportation, self-propelled modular transporter (SPMT) operations, multi-axle trailer operations, and project transportation services;",
              "Warehousing, storage, consolidation, deconsolidation, handling, packing, crating, securing, distribution, inventory management, staging, and site logistics;",
              "Customs brokerage support, customs documentation, regulatory compliance assistance, and fiscal services where permitted by law;",
              "Engineering support, transport engineering, route surveys, lift planning, heavy haul engineering, project cargo planning, logistics consulting, and related advisory services;",
              "Collection or procurement of freight charges, shipping documents, customs documentation, and related commercial services;",
              "The Customer shall arrange and maintain appropriate cargo insurance or stock throughput insurance for its cargo at the Customer’s own expense.",
            ],
            after: [
              "These Terms govern every quotation, proposal, booking, shipment, purchase order, agreement, and Service performed by GoAL.",
              "Where a GoAL office has issued separate local or regional trading terms (“Regional Terms”), those Regional Terms shall apply only to Services performed by that office and shall prevail solely to the extent they conflict with these Terms.",
              "Any purchase order, vendor terms, shipping instructions, or other Customer documentation containing additional or conflicting terms shall not modify these Terms unless expressly accepted in writing by an authorized representative of GoAL.",
              "By requesting or accepting Services from GoAL, the Customer acknowledges that these Terms have been made available and agrees to be bound by them.",
            ],
          },
          {
            heading: "2. Conclusion of Contract",
            paragraphs: [
              "Unless otherwise agreed in writing, every quotation, proposal, booking, and Service provided by GoAL is subject exclusively to these Terms.",
              "Quotations are based upon the information supplied by the Customer and remain valid for thirty (30) days unless otherwise stated in writing.",
              "The Customer shall provide complete and accurate written instructions, including, where applicable:",
            ],
            list: [
              "Description and classification of the cargo, including dangerous goods;",
              "Commercial value of the cargo;",
              "Dimensions, weight, center of gravity, and axle loading where applicable;",
              "Packaging details, package count, gross and net weights;",
              "Shipper and consignee information;",
              "Collection and delivery locations;",
              "Requested transportation mode and routing;",
              "Customs and regulatory instructions;",
              "Required documentation;",
              "Delivery schedules;",
              "Project-specific engineering or handling requirements.",
            ],
            groups: [
              {
                paragraphs: [
                  "For specialized trucking, heavy haul, oversize, overweight, or project cargo transportation, the Customer shall additionally provide:",
                ],
                list: [
                  "Certified cargo dimensions and weights;",
                  "Engineering drawings where required;",
                  "Lift points;",
                  "Structural support information;",
                  "Loading and unloading requirements;",
                  "Site access information;",
                  "Road access restrictions;",
                  "Crane requirements;",
                  "Any special transportation or handling instructions.",
                ],
                after: [
                  "GoAL may rely entirely upon the accuracy of information supplied by the Customer.",
                  "Any change to cargo dimensions, weight, routing, loading requirements, project scope, schedule, engineering assumptions, or handling requirements may invalidate any quotation and entitle GoAL to revise its pricing and delivery schedule.",
                  "Verbal instructions shall not become binding until confirmed in writing by the Customer. Acceptance of any booking remains subject to equipment availability, carrier acceptance, operational feasibility, permit approval where applicable, and governmental authorization.",
                ],
              },
            ],
          },
          {
            heading: "3. Delivery Hindrances and Force Majeure",
            paragraphs: [
              "Should GoAL’s performance become impossible, delayed, restricted, or commercially impracticable due to circumstances beyond its reasonable control, GoAL may suspend, delay, modify, reroute, or terminate the affected Services without liability.",
              "Such circumstances include, but are not limited to: acts of God; natural disasters; floods; hurricanes; earthquakes; fires; severe weather; war; terrorism; civil unrest; labor disputes; government actions; customs delays; embargoes; trade sanctions; port congestion; carrier disruptions; equipment shortages; utility conflicts; bridge restrictions; road closures; seasonal road bans; permit delays; police escort availability; regulatory approvals; infrastructure limitations; cyber incidents; telecommunications failures; pandemics; epidemics; or any other event beyond the reasonable control of GoAL.",
              "Where reasonably practicable, GoAL shall notify the Customer of any material delay or operational restriction.",
              "If continued transportation becomes impracticable, GoAL may store the cargo, return the cargo, deliver it to an alternative location, or otherwise protect the Customer’s interests as GoAL reasonably determines.",
              "Delivery shall be deemed complete once the cargo has been made available at a safe and reasonable location.",
              "The Customer shall remain responsible for all transportation charges, storage charges, demurrage, detention, waiting time, accessorial charges, permit costs, third-party costs, and any additional expenses incurred as a result of such circumstances.",
              "GoAL shall not be liable for any loss, damage, delay, increased costs, or consequential losses arising directly or indirectly from any circumstance described in this Section.",
            ],
          },
          {
            heading: "4. Liability",
            paragraphs: [
              "GoAL performs the Services either as a freight forwarder, logistics provider, transportation intermediary, warehouse operator, customs service provider, project logistics provider, or, where expressly agreed in writing, as a carrier.",
              "Unless GoAL expressly agrees in writing to act as the carrier, GoAL performs the Services solely as an agent for the Customer and shall exercise reasonable care in selecting, instructing, and supervising carriers, subcontractors, warehouse operators, and other service providers engaged in the performance of the Services.",
              "GoAL may, at its sole discretion, select and engage carriers, subcontractors, warehouse operators, engineering consultants, heavy haul specialists, crane providers, rigging contractors, surveyors, customs brokers, escort providers, utility contractors, and other third parties necessary to perform the Services.",
              "GoAL shall not be liable for the acts, omissions, negligence, insolvency, delays, defaults, or failures of any third party engaged in the performance of the Services, provided GoAL exercised reasonable care in selecting such parties.",
              "Where GoAL expressly agrees in writing to perform transportation using its own equipment or personnel, or otherwise assumes the legal responsibilities of a carrier, GoAL shall have the rights, obligations, defenses, exclusions, and limitations of liability applicable to that mode of transportation under these Terms and applicable law.",
              "GoAL shall not be responsible for:",
            ],
            list: [
              "the structural integrity, engineering design, or transport suitability of the cargo unless expressly contracted to provide such engineering services;",
              "cargo loaded, secured, blocked, braced, or unloaded by the Customer or third parties;",
              "inaccurate cargo information provided by the Customer;",
              "delays arising from governmental authorities, permitting agencies, carriers, utilities, or infrastructure owners;",
              "engineering assumptions supplied by others;",
              "site conditions beyond GoAL’s reasonable control.",
            ],
            after: [
              "Where engineering, route surveys, transport planning, lift planning, logistics consulting, or other advisory services are provided, such Services are based upon information supplied by the Customer and conditions existing at the time of planning. GoAL shall not be liable for changes in site conditions, infrastructure, governmental requirements, weather conditions, or other circumstances occurring after such Services have been completed.",
              "All defenses, exclusions, exemptions, and limitations of liability contained in these Terms shall apply equally to GoAL’s officers, directors, employees, agents, affiliates, subcontractors, independent contractors, carriers, warehouse operators, consultants, and every other person or entity engaged by GoAL in connection with the Services.",
              "The aggregate liability of GoAL and all such persons or entities shall not exceed the maximum liability otherwise applicable to GoAL under these Terms.",
            ],
          },
          {
            heading: "5. Exclusions, Assessment, and Monetary Limits of Liability",
            paragraphs: [
              "Except to the extent prohibited by applicable law, GoAL shall not be liable for:",
            ],
            list: [
              "Loss or damage occurring while the cargo is not in GoAL’s actual care, custody, or control;",
              "Loss resulting from delays unless expressly agreed otherwise in writing;",
              "Consequential, indirect, incidental, special, exemplary, or punitive damages;",
              "Loss of profit; loss of production; business interruption; loss of revenue;",
              "Liquidated damages; contractual penalties; loss of market; loss of use; loss of opportunity;",
              "Demurrage, detention, or similar commercial losses claimed by third parties;",
              "Inherent vice or the natural characteristics of the cargo;",
              "Insufficient, defective, or unsuitable packaging, markings, blocking, bracing, or stowage not performed by GoAL;",
              "Loading or unloading operations performed by parties other than GoAL;",
              "Inaccurate or incomplete information supplied by the Customer;",
              "Dangerous goods that have not been properly declared;",
              "Government inspections; customs examinations; quarantine actions; regulatory enforcement actions;",
              "Permit restrictions; utility conflicts; police escort availability; bridge restrictions;",
              "Route modifications required by governmental authorities; seasonal road bans; infrastructure limitations;",
              "Equipment shortages; labor disputes;",
              "Force majeure events described in Section 3;",
              "Cyber incidents beyond GoAL’s reasonable control.",
            ],
            after: [
              "The value of the cargo shall be determined by the commercial invoice or, if unavailable, the prevailing market value of the cargo at the place and time GoAL accepted the cargo for transportation.",
              "Unless a higher value has been expressly declared in writing by the Customer and accepted in writing by GoAL prior to commencement of the Services, and any additional charges have been paid, GoAL’s liability for physical loss of or damage to cargo shall not exceed two (2) Special Drawing Rights (SDR) per kilogram of the gross weight of the cargo lost or damaged.",
              "Where liability arises solely from delay, GoAL’s liability shall not exceed the total compensation payable to GoAL for the specific Service giving rise to the claim.",
              "Nothing contained in these Terms shall increase GoAL’s liability beyond the limits established by applicable United States federal or state law or any applicable international convention governing the transportation of goods.",
            ],
          },
          {
            heading: "6. Insurance",
            paragraphs: [
              "The Customer is solely responsible for arranging and maintaining appropriate cargo insurance or stock throughput insurance for its cargo, at the Customer’s own expense, in amounts and on terms appropriate to the value and nature of the cargo, the transportation risks, and the Customer’s insurance requirements.",
              "GoAL does not provide cargo insurance, shipper’s interest insurance, or open cargo insurance as part of its standard Services and shall have no obligation to arrange or obtain such insurance on behalf of the Customer.",
              "The Customer acknowledges that GoAL’s liability for loss of or damage to cargo is subject to the exclusions, defenses, limitations, and monetary limits set forth in these Terms, regardless of whether the Customer maintains cargo insurance.",
              "The Customer is responsible for determining the adequacy of its insurance coverage and for ensuring that such coverage remains in effect for the duration of the transportation, storage, handling, and other Services provided by GoAL, as applicable.",
              "GoAL maintains insurance coverage applicable to its business operations as required by applicable law and as determined appropriate by GoAL and its insurance providers. Any insurance maintained by GoAL does not constitute cargo insurance, shipper’s interest insurance, or open cargo insurance for the benefit of the Customer. The existence or availability of any insurance maintained by GoAL shall not increase, replace, or otherwise modify GoAL’s liability or the limitations of liability contained in these Terms.",
              "Evidence of GoAL’s insurance coverage may be provided upon written request, subject to the confidentiality requirements of GoAL’s insurers and insurance providers.",
              "The Customer acknowledges that any insurance maintained by the Customer is separate from GoAL’s liability and does not increase, replace, or otherwise modify GoAL’s liability or the limitations of liability contained in these Terms.",
            ],
          },
          {
            heading: "7. Claims and Notice of Loss",
            paragraphs: [
              "The Customer or consignee shall inspect the cargo immediately upon delivery and shall notify GoAL in writing of any apparent loss, damage, shortage, or irregularity before or at the time of delivery.",
              "Where any loss or damage is not reasonably apparent at the time of delivery, written notice shall be provided to GoAL within seven (7) calendar days following delivery.",
              "Claims arising solely from delay shall be submitted in writing within twenty-one (21) calendar days following delivery.",
              "Failure to provide timely written notice in accordance with this Section shall constitute prima facie evidence that the Services were completed satisfactorily and that the cargo was delivered in the condition described in the applicable transportation documentation, subject to any rights that cannot be excluded under applicable law.",
              "All claims submitted to GoAL shall include sufficient supporting documentation, including, where applicable:",
            ],
            list: [
              "The transportation documents;",
              "Commercial invoice;",
              "Packing list;",
              "Photographs of the alleged damage;",
              "Survey reports, where available;",
              "Repair estimates or replacement costs;",
              "Any other documentation reasonably requested by GoAL to investigate the claim.",
            ],
            after: [
              "GoAL reserves the right to inspect the cargo or arrange an independent survey before repairs, disposal, or replacement occur.",
              "No claim shall be considered valid until GoAL has been provided a reasonable opportunity to investigate the alleged loss or damage.",
            ],
          },
          {
            heading: "8. Payment, Charges, and General Lien",
            paragraphs: [
              "Unless otherwise agreed in writing, all invoices issued by GoAL shall be payable in accordance with the payment terms stated on the applicable quotation or invoice.",
              "Payment shall be made without deduction, withholding, counterclaim, set-off, or offset, except where expressly required by applicable law or where the claim has been finally determined by a court of competent jurisdiction.",
              "Any invoice not paid when due may accrue interest at the maximum rate permitted by applicable law until paid in full.",
              "The Customer shall reimburse GoAL for all reasonable costs incurred in collecting overdue amounts, including collection agency fees, court costs, and reasonable attorneys’ fees where permitted by law.",
              "GoAL reserves the right to suspend performance of any Services where amounts owing by the Customer remain outstanding.",
              "The Customer shall remain responsible for all freight charges, transportation charges, duties, taxes, customs charges, storage charges, demurrage, detention, terminal handling charges, port charges, inspection fees, governmental assessments, and any other charges incurred in connection with the Services.",
            ],
            groups: [
              {
                subheading: "Specialized Transportation Charges",
                paragraphs: [
                  "For specialized trucking, heavy haul, oversize, overweight, or project cargo transportation:",
                ],
                list: [
                  "Rates are based upon the cargo description, dimensions, weights, routing, and handling requirements provided by the Customer.",
                  "Changes to cargo dimensions, weights, routing, engineering assumptions, loading requirements, or project scope may result in revised pricing.",
                  "Quotations remain valid for thirty (30) days unless otherwise stated in writing.",
                  "Rates are based upon normal Monday through Friday operating hours unless otherwise agreed.",
                  "Rates remain subject to equipment availability, carrier scheduling, permit approval, and governmental authorization.",
                  "Standard quotations include up to two (2) hours each for loading and unloading unless otherwise stated.",
                  "Loading and unloading shall be performed by others unless specifically included in the quotation.",
                  "Tarping, direct discharge, detention, layover, storage, attempted pickups or deliveries, waiting time, and other accessorial services shall be charged separately unless specifically included in the quotation.",
                  "Fuel surcharges, carbon taxes, tolls, duties, governmental fees, and applicable federal, state, provincial, or local taxes may be adjusted without notice where permitted by law.",
                ],
              },
              {
                subheading: "Third-Party Costs",
                paragraphs: [
                  "Unless expressly included in the quotation, the Customer shall reimburse GoAL for all third-party costs incurred in performing the Services. Such costs include, but are not limited to:",
                ],
                list: [
                  "Oversize and overweight permits; route surveys; engineering studies; bridge analyses;",
                  "Police escorts; civilian escorts; pilot vehicles; traffic control services;",
                  "Utility companies; bucket trucks; road modifications; fence removals; bridge shoring;",
                  "Crane services; site inspections; and any governmental or regulatory charges.",
                ],
                after: [
                  "Unless otherwise stated in the quotation, these costs shall be invoiced at cost plus fifteen percent (15%).",
                ],
              },
              {
                subheading: "Route Conditions",
                paragraphs: [
                  "Transportation quotations are based upon maintained paved public roads unless otherwise stated.",
                  "Transportation involving gravel roads, private roads, construction roads, unimproved roads, roads requiring chains, seasonal road bans, restricted access roads, or similar conditions may result in additional charges.",
                  "Transportation remains subject to permit approval, route availability, bridge restrictions, utility clearances, governmental requirements, and other operational constraints beyond GoAL’s reasonable control.",
                ],
              },
              {
                subheading: "Equipment Configuration",
                paragraphs: ["Unless otherwise agreed in writing:"],
                list: [
                  "Cargo shall be suitable for transportation.",
                  "Cargo shall be adequately prepared for transport.",
                  "Trailer configuration, cargo orientation, blocking, bracing, and securement shall be determined by GoAL or its subcontractors.",
                  "The Customer may be required to assist with trailer assembly or disassembly where operationally necessary.",
                  "The Customer shall provide safe loading and unloading facilities together with all required site access.",
                ],
              },
              {
                subheading: "General Lien",
                paragraphs: [
                  "To the fullest extent permitted by applicable law, GoAL shall have a continuing general lien upon all cargo, documents, and other property coming into its possession, custody, or control for all sums owing by the Customer arising from any Services provided by GoAL.",
                  "GoAL may enforce its lien by any lawful means, including storage, retention, or sale of the cargo following reasonable notice where required by law.",
                ],
              },
            ],
          },
          {
            heading: "9. Claims in Contract and Tort",
            paragraphs: [
              "These Terms shall apply to every claim against GoAL arising from or relating to the Services, whether such claim is based upon contract, tort, negligence, bailment, statutory duty, strict liability, indemnity, or any other legal theory.",
              "The exclusions, defenses, exemptions, and limitations of liability contained in these Terms shall apply regardless of the legal basis upon which any claim is asserted.",
              "No employee, officer, director, subcontractor, consultant, carrier, warehouse operator, agent, or affiliate of GoAL shall incur any greater liability than GoAL itself under these Terms.",
            ],
          },
          {
            heading: "10. Time Bar",
            paragraphs: [
              "Unless a shorter limitation period is required by applicable law or an applicable international convention, GoAL shall be discharged from all liability unless legal proceedings are commenced within one (1) year following the date of delivery of the cargo or, where delivery did not occur, the date on which delivery should reasonably have occurred.",
              "Failure to provide timely written notice under Section 7 or to commence legal proceedings within the applicable limitation period shall permanently bar the claim.",
              "Nothing contained in this Section shall limit any rights that cannot legally be excluded under applicable law or any applicable international convention.",
            ],
          },
          {
            heading: "11. Electronic Communications",
            paragraphs: [
              "The Customer acknowledges and agrees that GoAL may communicate, transact business, transmit quotations, shipping instructions, booking confirmations, invoices, transportation documents, customs documentation, and other communications electronically.",
              "GoAL may rely upon any communication, instruction, approval, authorization, or amendment that reasonably appears to have been transmitted by the Customer or an authorized representative of the Customer, including communications received by email or other agreed electronic means.",
              "GoAL shall not be liable for losses resulting from unauthorized access to electronic communications, email interception, transmission errors, delayed delivery, corrupted files, malware, phishing, spoofing, fraudulent instructions, or other cyber-related events beyond GoAL’s reasonable control, provided GoAL has exercised reasonable care in relying upon such communications.",
              "The Customer is responsible for maintaining appropriate security over its electronic communications and promptly notifying GoAL of any suspected unauthorized use or compromise of its communication systems.",
            ],
          },
          {
            heading: "12. Cybersecurity",
            paragraphs: [
              "GoAL maintains reasonable administrative, technical, and organizational safeguards designed to protect its information systems and electronic communications.",
              "Notwithstanding the foregoing, no electronic system or communication network can be guaranteed to be completely secure.",
              "GoAL shall not be liable for any loss, delay, corruption of data, unauthorized access, ransomware, malware, denial-of-service attacks, phishing attacks, cyber extortion, or other cybersecurity incidents unless such loss results directly from GoAL’s gross negligence or willful misconduct.",
              "Where a cybersecurity event affects the performance of the Services, GoAL may suspend, delay, reroute, or modify the affected Services until normal operations can reasonably resume.",
            ],
          },
          {
            heading: "13. Confidentiality",
            paragraphs: [
              "Each party shall treat as confidential all non-public commercial, financial, operational, engineering, technical, pricing, and proprietary information received from the other party in connection with the Services.",
              "Neither party shall disclose such confidential information to any third party except:",
            ],
            list: [
              "where required to perform the Services;",
              "where disclosure is required by applicable law or governmental authority;",
              "where disclosure is made to legal, financial, insurance, or professional advisers bound by confidentiality obligations; or",
              "with the prior written consent of the other party.",
            ],
            groups: [
              {
                paragraphs: [
                  "The confidentiality obligations contained in this Section shall survive completion of the Services for a period of five (5) years, except for information that:",
                ],
                list: [
                  "becomes publicly available through no fault of the receiving party;",
                  "was lawfully known prior to disclosure;",
                  "is independently developed; or",
                  "is lawfully obtained from another source.",
                ],
              },
            ],
          },
          {
            heading: "14. Export Controls, Sanctions, and Regulatory Compliance",
            paragraphs: [
              "The Customer represents and warrants that all cargo, shipments, documentation, transactions, and parties associated with the Services comply with all applicable laws and regulations, including those relating to customs, imports, exports, trade controls, economic sanctions, and anti-boycott requirements.",
              "The Customer shall provide all information and documentation necessary for GoAL to comply with applicable legal and regulatory requirements.",
              "GoAL reserves the right, without liability, to refuse, suspend, delay, inspect, or terminate any Service where GoAL reasonably believes that performing the Service may violate applicable law, government regulations, export controls, economic sanctions, customs requirements, or security regulations.",
              "The Customer shall indemnify and hold GoAL harmless from any fines, penalties, assessments, delays, losses, costs, or expenses arising from inaccurate documentation, regulatory non-compliance, or violations of applicable import, export, customs, or sanctions laws attributable to the Customer.",
            ],
          },
          {
            heading: "15. Severability",
            paragraphs: [
              "If any provision of these Terms is determined by a court of competent jurisdiction to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect.",
              "Any invalid or unenforceable provision shall be interpreted, modified, or replaced to the minimum extent necessary to make it enforceable while preserving the original commercial intent of the parties.",
            ],
          },
          {
            heading: "16. Governing Law and Jurisdiction",
            paragraphs: [
              "These Terms, and any dispute, claim, or controversy arising out of or relating to the Services provided by GoAL, shall be governed by and construed in accordance with the laws of the State of Louisiana, without regard to its conflict of law principles.",
              "The parties irrevocably agree that any legal action or proceeding arising out of or relating to these Terms or the Services shall be brought exclusively in the state or federal courts located in the State of Louisiana, and each party irrevocably submits to the exclusive jurisdiction of such courts.",
              "Nothing in these Terms shall prejudice or limit the application of any mandatory international convention or applicable federal law governing the carriage of goods, including, where applicable, the Carriage of Goods by Sea Act (COGSA), the Carmack Amendment, the Montreal Convention, the Warsaw Convention, or any other mandatory statute or convention that cannot legally be excluded.",
            ],
          },
          {
            heading: "17. Indemnification",
            paragraphs: [
              "The Customer shall indemnify, defend, and hold harmless GoAL, its parent companies, subsidiaries, affiliates, officers, directors, employees, agents, subcontractors, consultants, carriers, warehouse operators, and representatives from and against all claims, liabilities, damages, losses, fines, penalties, costs, expenses, and reasonable attorneys’ fees arising out of or relating to:",
            ],
            list: [
              "inaccurate, incomplete, or misleading information supplied by the Customer;",
              "incorrect cargo descriptions, classifications, dimensions, weights, or declared values;",
              "failure to properly declare dangerous goods or regulated cargo;",
              "violations of applicable customs, import, export, transportation, or regulatory requirements attributable to the Customer;",
              "defective packaging, loading, blocking, bracing, or securement performed by the Customer or third parties acting on the Customer’s behalf;",
              "personal injury, property damage, environmental damage, or governmental penalties arising from the nature or condition of the cargo;",
              "the Customer’s negligence, gross negligence, willful misconduct, or breach of these Terms.",
            ],
            after: [
              "The Customer shall further indemnify GoAL against all additional costs arising from permit revisions, route modifications, utility relocations, engineering changes, police escorts, bridge restrictions, governmental requirements, or other operational changes resulting from inaccurate or incomplete shipment information supplied by the Customer.",
              "The obligations contained in this Section shall survive delivery of the cargo, completion of the Services, termination of the contractual relationship, and payment of all outstanding invoices.",
            ],
          },
        ]}
      />
    </>
  );
}
