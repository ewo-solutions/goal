export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    pill: string;
    title: string;
    titleBold: string;
    body: string;
    image: string;
    /** Overrides the default bottom-anchored crop. Only needed where the photo
     * is a much taller aspect than the banner band, so bottom-anchoring would
     * cut the subject off the top. */
    imagePosition?: string;
  };
  /** Middle highlight section with glass cards over the map background */
  deliver: {
    pill: string;
    heading: string;
    body: string;
    cards: { title: string; body: string }[];
  };
  /** "What you get" style section with icon items */
  whatYouGet: {
    pill: string;
    heading: string;
    body: string;
    items: { title: string; body: string; icon: string }[];
  };
};

export const servicePages: ServicePageData[] = [
  {
    slug: "lead-logistics-provider",
    metaTitle: "Lead Logistics Provider for Capital Projects",
    metaDescription:
      "End-to-end 4PL logistics integrating suppliers, contractors, transport providers, and warehouses to deliver visibility, coordination, and reliable project execution across the entire project lifecycle.",
    hero: {
      pill: "industries we serve",
      title: "Lead Logistics Provider",
      titleBold: "for Capital Projects",
      body: "End-to-end 4PL logistics integrating suppliers, contractors, transport providers, and warehouses to deliver visibility, coordination, and reliable project execution across the entire project lifecycle.",
      image: "/images/hero-lead-logistics.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Connecting Every Project Interface",
      body: "As projects progress from planning and procurement through construction and operations, vendor activities become increasingly interconnected. We manage these functions through a single point of contact, coordinating procurement activities, materials management, transportation, and operational workflows across all touchpoints to minimize communication gaps and mitigate supply chain risks.",
      cards: [
        {
          title: "Pre-FEED Project Planning",
          body: "Identify logistics requirements, infrastructure constraints, and project risks to support feasibility assessments, early budgeting, and planning.",
        },
        {
          title: "FEED Execution Planning",
          body: "Develop delivery schedules, material forecasts, storage requirements, and execution strategies to support logistics readiness and sourcing.",
        },
        {
          title: "Engineering & Construction",
          body: "Manage supplier timelines, vendor expediting, milestones, and contractor requirements throughout Engineering, Procurement and Construction (EPC/EPCM) execution.",
        },
        {
          title: "Site & Material Coordination",
          body: "Coordinate site arrivals, inventory allocation, installation sequencing, and field activities to maintain construction progress and schedules.",
        },
        {
          title: "Performance & KPI Reporting",
          body: "Consolidate vendor performance, operational data, and key performance indicators (KPI) to provide oversight of transportation and site delivery.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Maintaining Control Across the Project Lifecycle",
      body: "Coordinating suppliers, transportation providers, warehouses, trade contractors, and project teams require clear accountability, reporting structures, and communication protocols. By connecting logistics operations, procurement activities, materials tracking, and milestone tracking within a single management framework, all stakeholders maintain visibility, alignment, and control as projects progress from planning and procurement through construction and operations to ensure schedule performance, delivery continuity, and final site handover.",
      items: [
        {
          title: "Logistics Execution|Planning",
          icon: "/icons/llp-planning.svg",
          body: "Route surveys, material flow mapping, delivery strategies, and infrastructure assessments establish logistics requirements for procurement, construction readiness, and project execution.",
        },
        {
          title: "Supplier & Contractor|Integration",
          icon: "/icons/llp-integration.svg",
          body: "Shared schedules, milestones, and reporting structures connect procurement teams, suppliers, manufacturers, contractors, and logistics providers throughout project execution and delivery.",
        },
        {
          title: "Material|Readiness",
          icon: "/icons/llp-readiness.svg",
          body: "Visibility across fabrication, procurement, warehousing, transportation, and delivery status keeps materials available according to construction schedules, installation requirements, and project milestones.",
        },
        {
          title: "Project Controls &|Reporting",
          icon: "/icons/llp-controls.svg",
          body: "Structured reporting consolidates logistics operations, supplier milestones, transportation status, material availability, and KPIs, giving project teams visibility into execution performance.",
        },
        {
          title: "Risk & Constraint|Management",
          icon: "/icons/llp-risk.svg",
          body: "Monitoring, escalation, and mitigation procedures address transportation disruptions, supplier delays, documentation issues, infrastructure limitations, and schedule conflicts affecting project execution.",
        },
        {
          title: "Logistics|Governance",
          icon: "/icons/llp-governance.svg",
          body: "Management procedures, communication protocols, performance measures, and reporting structures provide oversight, compliance, and accountability across project stakeholders and multi-vendor interfaces.",
        },
      ],
    },
  },
  {
    slug: "data-center-project-logistics",
    metaTitle: "Data Center Project Logistics",
    metaDescription:
      "Engineered 3PL logistics for hyperscale data centers and semiconductor projects, coordinating storage, transport, and site delivery for safe, efficient, and on-schedule execution.",
    hero: {
      pill: "industries we serve",
      title: "Data Center",
      titleBold: "Project Logistics",
      body: "Engineered 3PL logistics for hyperscale data centers and semiconductor projects, coordinating storage, transport, and site delivery for safe, efficient, and on-schedule execution.",
      image: "/images/hero-data-center.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Your Projects Demand Precision, Coordination, and Speed",
      body: "With tight schedules, restricted access, and high-value equipment, timing matters at every stage. Our data center logistics teams work directly with General Contractors (GCs), Engineering, Procurement, and Construction (EPC) teams, and Original Equipment Manufacturers (OEMs) to coordinate material movement, maintain delivery schedules, and support construction activities from receipt through installation.",
      cards: [
        {
          title: "Material Flow Management",
          body: "Manage material movement from warehouse to installation site through a single logistics partner supporting complex construction projects.",
        },
        {
          title: "Warehousing & Staging",
          body: "Integrate warehouse management, staging operations, and real-time tracking to align inventory with daily construction requirements.",
        },
        {
          title: "Equipment Handling & Rigging",
          body: "Handle high-value equipment using controlled offloading, professional rigging, planned procedures, and strict site controls.",
        },
        {
          title: "Project Team Coordination",
          body: "Coordinate communication, delivery sequencing, scheduling, and component availability with Engineering, Procurement and Construction and General Contractor teams.",
        },
        {
          title: "Safety & Site Compliance",
          body: "Maintain secure, compliant sites while reducing idle time, congestion, and duplicated logistics costs throughout project execution.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Driven By Results",
      body: "As your project third-party logistics (3PL) provider, you gain a single interface to coordinate every shipment, staging move, and delivery in line with your Key Performance Indicators (KPIs) and milestones. Communication, reporting, and shipment visibility are centralized across suppliers to keep operations aligned, reduce site congestion, and improve safety. Every delivery follows a just-in-time schedule to support construction progress while helping lower overall project costs through efficiency and control.",
      items: [
        {
          title: "Warehousing & Inventory|Management",
          icon: "/icons/dc-warehousing.svg",
          body: "Secure, climate-controlled storage near major data center hubs includes dedicated vendor zones, flexible storage options, and inventory visibility.",
        },
        {
          title: "Warehouse Management|System (WMS)",
          icon: "/icons/dc-wms.svg",
          body: "Real-time inventory visibility through barcode tracking, digital receipt-to-delivery confirmation, and customized reporting provides GC and EPC teams with traceability.",
        },
        {
          title: "Trucking &|Transportation",
          icon: "/icons/dc-trucking.svg",
          body: "Regional and long-haul transportation through an insured, Department of Transportation (DOT)-compliant fleet provides specialized and heavy-haul capability for critical components.",
        },
        {
          title: "Offload, Rigging &|Material Handling",
          icon: "/icons/dc-rigging.svg",
          body: "Planned offloading, rigging, and material handling using certified crews and lifting systems protects generators, switchgear, and prefabricated modules during delivery.",
        },
        {
          title: "Truck Coordination &|Staging",
          icon: "/icons/dc-staging.svg",
          body: "Scheduled dock appointments, managed staging yards, and real-time tracking control delivery flow, reduce congestion, and maintain site planning.",
        },
        {
          title: "Intersite|Logistics",
          icon: "/icons/dc-intersite.svg",
          body: "Site-to-site material transfers, returnables management, scrap removal, vendor returns, modular staging, and assembly maintain flow across project phases and buildings.",
        },
      ],
    },
  },
  {
    slug: "oil-and-gas-logistics",
    metaTitle: "Oil & Gas Logistics",
    metaDescription:
      "Integrated logistics for upstream, midstream, and downstream operations, managing transport, storage, marine logistics, and hazardous cargo to ensure safe, uninterrupted operations.",
    hero: {
      pill: "industries we serve",
      title: "Oil & Gas",
      titleBold: "Logistics",
      body: "Integrated logistics for upstream, midstream, and downstream operations, managing transport, storage, marine logistics, and hazardous cargo to ensure safe, uninterrupted operations.",
      image: "/images/hero-oil-gas.png",
      // Full source photo (2528x1350) rather than Figma's pre-cropped banner
      // render, so the rig operations stay visible. It is far taller in aspect
      // than the band, so it is centred instead of bottom-anchored.
      imagePosition: "object-center",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Every Hour Counts When Production Is On The Line",
      body: "Remote locations, offshore facilities, production schedules, and maintenance activities leave little room for delays. Drilling contractors, operators, vessel owners, suppliers, and personnel all rely on timely access to equipment, materials, and critical spares. Our integrated logistics services coordinate these requirements across multiple locations to support ongoing operations and asset performance.",
      cards: [
        {
          title: "Rig Mobilization & Relocation",
          body: "Manage the movement of drilling equipment, support infrastructure, and operational materials between exploration and production locations.",
        },
        {
          title: "Heavy-Lift & Project Cargo",
          body: "Transport oversized modules, process equipment, pipelines, and production assets across complex and challenging operating environments.",
        },
        {
          title: "Offshore & Marine Support",
          body: "Coordinate offshore asset movements, port operations, cargo, equipment, and personnel between shore bases and offshore installations.",
        },
        {
          title: "Hazardous Cargo Handling",
          body: "Transportation and storage of chemicals, fuels, compressed gases, and regulated materials in line with operational and environmental requirements.",
        },
        {
          title: "Time-Critical Transport",
          body: "Expedite critical spares, replacement components, and maintenance equipment to minimize non-productive time (NPT) and maintain operational continuity.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Ready For Demanding Environments",
      body: "Oil and gas operations depend on the timely movement of equipment, personnel, critical spares, dangerous goods, and high-value cargo across onshore and offshore locations. Rig demobilizations and mobilizations, marine support services, supply base activities, project cargo movements of oversized modules and pipelines, and expedited deliveries are coordinated in line with operational priorities to back ongoing upstream, midstream, and downstream production, maintenance, and field requirements.",
      items: [
        {
          title: "Onshore &|Offshore Moves",
          icon: "/icons/og-rig-moves.svg",
          body: "Rig relocation covering transportation, lifting, route assessments, and equipment deployment between exploration, production, and other operating locations and facilities.",
        },
        {
          title: "Offshore Logistics|Support",
          icon: "/icons/og-offshore.svg",
          body: "Vessel scheduling, crew transfers, cargo handling, and shore base operations for platforms, drilling units, floating production assets, and subsea operations.",
        },
        {
          title: "Supply Base|Operations",
          icon: "/icons/og-supply-base.svg",
          body: "Warehouse, yard, intersite staging, and inventory services supply drilling, production, maintenance, and operations with equipment, consumables, and critical spares.",
        },
        {
          title: "Project Cargo &|Heavy Lift",
          icon: "/icons/og-heavy-lift.svg",
          body: "Transportation planning, route surveys, heavy-haul equipment, lifting operations, and delivery sequencing move oversized, overweight, and high-value cargo to operating sites.",
        },
        {
          title: "Hazardous Materials|Management",
          icon: "/icons/og-hazmat.svg",
          body: "Handling, storage, transportation, documentation, and regulatory compliance for hazardous materials, chemicals, fuels, and regulated cargo throughout operational activities.",
        },
        {
          title: "Emergency &|Expedited Response",
          icon: "/icons/og-emergency.svg",
          body: "Priority transportation for urgent requirements, equipment failures, maintenance events, and production-critical situations where delays impact field activities or asset performance.",
        },
      ],
    },
  },
  {
    slug: "wind-energy-logistics",
    metaTitle: "Wind Energy Logistics",
    metaDescription:
      "Specialized logistics for wind energy projects, coordinating turbine components, transport, port operations, and site delivery to support efficient construction and on-time installation.",
    hero: {
      pill: "industries we serve",
      title: "Wind Energy",
      titleBold: "Logistics",
      body: "Specialized logistics for wind energy projects, coordinating turbine components, transport, port operations, and site delivery to support efficient construction and on-time installation.",
      image: "/images/hero-wind-energy.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Timing Matters From Production to Installation",
      body: "The transportation of oversized turbine components involves complex transport stages, specialized port operations, and staging requirements. We manage the movement of components from origin through marshalling areas straight to installation sites, coordinating delivery programs to support site activities and protect critical construction timelines.",
      cards: [
        {
          title: "Route & Transport Planning",
          body: "Execute route surveys, infrastructure assessments, permit planning, and transport engineering to identify transport constraints before delivery.",
        },
        {
          title: "Turbine Component Transportation",
          body: "Plan transportation of turbine components to support construction schedules while maintaining handling requirements for oversized cargo.",
        },
        {
          title: "Installation Sequence Planning",
          body: "Integrate installation sequences, crane availability, site readiness, and delivery schedules to support turbine erection activities.",
        },
        {
          title: "Port & Staging Operations",
          body: "Manage port operations, marshalling yards, temporary storage, component staging, and cargo preparation for offshore wind projects.",
        },
        {
          title: "Marine & Offshore Support",
          body: "Coordinate marine activities, vessel scheduling, cargo transfers, and offshore support between ports and installation locations.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Aligned With Installation Schedules",
      body: "Onshore and offshore wind energy developments depend on the timely movement of oversized components, specialized installation equipment, and high-value cargo from manufacturing facilities to site. Transport engineering, permit planning, route planning, specialized haulage configurations, marshalling yard operations, port operations, and marine vessel coordination are integrated with installation schedules to support continuous turbine erection, component assembly, and foundation activities.",
      items: [
        {
          title: "Transport Engineering &|Route Planning",
          icon: "/icons/wind-route-planning.svg",
          body: "Feasibility studies, swept-path analysis, bridge assessments, permit acquisition, escort planning, and coordination support turbine movements across road and marine lanes.",
        },
        {
          title: "Installation Support &|Delivery Sequencing",
          icon: "/icons/wind-sequencing.svg",
          body: "Delivery schedules, crane availability, installation programs, and site readiness requirements support turbine erection while reducing unnecessary handling and onsite storage.",
        },
        {
          title: "Marshalling Yard &|Staging Operations",
          icon: "/icons/wind-marshalling.svg",
          body: "Storage, inventory control, component inspection, cargo preparation, intersite staging, and yard operations maintain equipment flow between ports and construction sites.",
        },
        {
          title: "Port Operations &|Vessel Coordination",
          icon: "/icons/wind-port.svg",
          body: "Port handling, cargo preparation, vessel scheduling, loading, and marine coordination support offshore wind projects requiring component transfers to installation vessels.",
        },
        {
          title: "Onshore Wind|Logistics",
          icon: "/icons/wind-transport.svg",
          body: "Transportation planning covers turbine blades, towers, nacelles, hub assemblies, and components from manufacturing facilities, ports, and storage to onshore sites.",
        },
        {
          title: "Offshore Wind|Logistics",
          icon: "/icons/wind-offshore.svg",
          body: "Fabrication, storage, port services, marshalling, marine operations, and component delivery programs support equipment movement through offshore installation campaigns.",
        },
      ],
    },
  },
  {
    slug: "specialized-trucking-and-heavy-haul",
    metaTitle: "Specialized Trucking & Heavy Haul",
    metaDescription:
      "Heavy-haul transport for oversized, overweight, OOG, and high-value cargo, combining route planning, permit coordination, and transport engineering for safe, reliable delivery.",
    hero: {
      pill: "industries we serve",
      title: "Specialized Trucking &",
      titleBold: "Heavy Haul",
      body: "Heavy-haul transport for oversized, overweight, OOG, and high-value cargo, combining route planning, permit coordination, and transport engineering for safe, reliable delivery.",
      image: "/images/hero-heavy-haul.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Careful Planning Behind Every Complex Move",
      body: "Every oversized and heavy-haul movement brings its own combination of cargo dimensions, weight distribution, handling variables, and high-value equipment delivery conditions. Using carefully planned transport operations, heavy equipment, and route-specific solutions, we tailor each movement to the technical requirements of the load, route, and final location.",
      cards: [
        {
          title: "Route & Permit Planning",
          body: "Execute route surveys, bridge assessments, permit planning, and transport engineering to identify infrastructure restrictions before transport.",
        },
        {
          title: "Specialized Transport Equipment",
          body: "Configure multi-axle trailers, hydraulic platform trailers, lowboys, and Self-Propelled Modular Transporters for oversized cargo.",
        },
        {
          title: "Transport Operations Coordination",
          body: "Coordinate escort logistics, utility clearances, traffic management, and stakeholder engagement for oversized transport operations.",
        },
        {
          title: "Delivery & Site Coordination",
          body: "Integrate delivery sequencing, lifting requirements, and site readiness to support construction schedules and installation activities.",
        },
        {
          title: "High-Value Cargo Handling",
          body: "Manage controlled handling, cargo securing, transportation oversight, and monitoring to protect high-value equipment during transit.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Built Around Cargo Requirements",
      body: "Transport engineering, state-by-state permitting, regulatory compliance, and heavy-haul equipment configurations are carefully integrated before any over-dimensional movement begins. Complex transport corridors, structural load restrictions, multi-axle trailers, SPMTs, and technical site deliveries are fully managed in line with project requirements to support the safe movement of overweight, out-of-gauge cargo, industrial execution, and final equipment placement.",
      items: [
        {
          title: "Route Engineering &|Feasibility Studies",
          icon: "/icons/haul-route-engineering.svg",
          body: "Route surveys, bridge assessments, swept-path analysis, access reviews, and infrastructure evaluations identify transportation constraints before oversized cargo movement begins.",
        },
        {
          title: "Permit & Regulatory|Coordination",
          icon: "/icons/haul-permits.svg",
          body: "Permit applications, municipal approvals, escort requirements, utility notifications, and regulatory coordination address transportation requirements across applicable state and local jurisdictions.",
        },
        {
          title: "Heavy-Haul|Transportation",
          icon: "/icons/haul-transport.svg",
          body: "Specialized trailers, modular transport systems, and heavy-haul equipment provide transportation for oversized, overweight, and out-of-gauge cargo across short- and long-distance routes.",
        },
        {
          title: "SPMT & Modular|Transport Solutions",
          icon: "/icons/haul-spmt.svg",
          body: "Self-Propelled Modular Transporters (SPMTs) and hydraulic platform trailers provide precise positioning, load distribution, and controlled movement within ports, industrial facilities, and intersite locations.",
        },
        {
          title: "Site Delivery &|Positioning",
          icon: "/icons/haul-positioning.svg",
          body: "Transportation schedules, lifting plans, access reviews, and site coordination provide controlled delivery and final positioning of large equipment and project cargo.",
        },
        {
          title: "Critical Asset|Protection",
          icon: "/icons/haul-high-value.svg",
          body: "Controlled handling, cargo securing, movement monitoring, and transportation oversight protect sensitive, critical, and high-value equipment throughout transportation and site delivery.",
        },
      ],
    },
  },
  {
    slug: "in-house-support-and-expediting",
    metaTitle: "In-House Support & Expediting",
    metaDescription:
      "Supplier expediting and project support services track production, verify milestones, and coordinate with vendors to maintain visibility, reduce delays, and protect project schedules.",
    hero: {
      pill: "industries we serve",
      title: "In-House Support",
      titleBold: "& Expediting",
      body: "Supplier expediting and project support services track production, verify milestones, and coordinate with vendors to maintain visibility, reduce delays, and protect project schedules.",
      image: "/images/hero-in-house.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Critical Materials Need More Than Status Updates",
      body: "Procurement schedules, supplier commitments, manufacturing progress, and delivery milestones all contribute to successful project execution. Operating as an extension of your teams, we provide on-the-ground support, working with suppliers, manufacturers, and project personnel to track critical materials through each stage of the sourcing, procurement, and logistics workflow.",
      cards: [
        {
          title: "Embedded Project Support",
          body: "Deploy embedded personnel alongside procurement, logistics, and project teams to provide day-to-day operational support.",
        },
        {
          title: "Supplier Progress Monitoring",
          body: "Maintain supplier engagement to verify manufacturing progress, production schedules, inspection readiness, and shipment milestones.",
        },
        {
          title: "Factory Verification Services",
          body: "Execute factory visits, progress checks, and milestone verification to confirm critical path manufacturing and delivery status.",
        },
        {
          title: "Issue & Escalation Management",
          body: "Manage production delays, documentation gaps, material shortages, and transportation constraints affecting delivery commitments.",
        },
        {
          title: "Expedited Material Delivery",
          body: "Arrange expedited transportation through dedicated vehicles, priority airfreight, courier services, and accelerated delivery methods.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Active Field Oversight",
      body: "Industrial supply chains and capital projects depend on accurate material tracking and direct supplier intervention. Sourcing status, manufacturer commitments, fabrication progress, shipment readiness, and critical milestones are monitored through direct engagement with technical vendors, internal teams, transportation providers, and operational personnel. Embedded support resources provide complete visibility of materials tracking while expediting activities help maintain adherence between procurement schedules, priorities, and final delivery commitments.",
      items: [
        {
          title: "Embedded Logistics|Support",
          icon: "/icons/ih-embedded.svg",
          body: "Dedicated personnel operate within your facility, project office, warehouse, or operational environment, providing day-to-day logistics coordination, material tracking, supplier communication, and execution support.",
        },
        {
          title: "Supplier|Expediting",
          icon: "/icons/ih-expediting.svg",
          body: "Direct supplier engagement monitors manufacturing schedules, production progress, inspection milestones, and shipment readiness against planned delivery requirements and project schedules.",
        },
        {
          title: "Material Status|Verification",
          icon: "/icons/ih-verification.svg",
          body: "Factory visits, supplier reviews, progress checks, and milestone validation provide accurate reporting on critical path materials, equipment, and intersite procurement packages.",
        },
        {
          title: "Critical Path|Monitoring",
          icon: "/icons/ih-monitoring.svg",
          body: "Priority materials, long-lead equipment, and schedule-sensitive deliveries are tracked against project milestones to identify potential delays and enable timely intervention.",
        },
        {
          title: "Expedited Freight|Coordination",
          icon: "/icons/ih-freight.svg",
          body: "Dedicated transport, priority freight services, courier networks, and accelerated delivery options address urgent requirements when standard transit schedules cannot meet operational needs.",
        },
        {
          title: "Reporting &|Escalation Management",
          icon: "/icons/ih-reporting.svg",
          body: "Structured reporting, exception tracking, issue escalation, and stakeholder communication provide visibility into material readiness, supplier performance, delivery status, and emerging supply chain risks.",
        },
      ],
    },
  },
];
