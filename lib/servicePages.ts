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
      "End-to-end 4PL logistics integrating suppliers, contractors, transport providers, and warehouses to deliver visibility, coordination, and reliable project execution across the entire lifecycle.",
    hero: {
      pill: "industries we serve",
      title: "Lead Logistics Provider",
      titleBold: "for Capital Projects",
      body: "End-to-end 4PL logistics integrating suppliers, contractors, transport providers, and warehouses to deliver visibility, coordination, and reliable project execution across the entire lifecycle.",
      image: "/images/hero-lead-logistics.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Connecting Every Project Interface",
      body: "As projects progress from planning and procurement through construction and operations, vendor activities become increasingly interconnected. We manage these functions through a single point of contact, coordinating procurement activities, materials management, transportation, and operational workflows across all touchpoints to minimize communication gaps and mitigate supply chain risks.",
      cards: [
        {
          title: "Pre-FEED Planning",
          body: "Identify logistics requirements, infrastructure constraints, and project risks during Pre-Front-End Engineering Design (Pre-FEED) to inform feasibility assessments, early budgeting, and initial planning.",
        },
        {
          title: "FEED Logistics",
          body: "Develop delivery schedules, material forecasts, storage requirements, and execution strategies during Front-End Engineering Design (FEED) to establish logistics readiness and support sourcing plans.",
        },
        {
          title: "EPCM Coordination",
          body: "Manage supplier timelines, milestones, vendor expediting, and contractor requirements throughout Engineering, Procurement, and Construction Management (EPC/EPCM) execution to maintain strict alignment across sourcing, fabricators, and site teams.",
        },
        {
          title: "EPC Site Logistics",
          body: "Coordinate site arrivals, inventory allocation, installation sequencing, and field logistics to support construction progress and maintain the master project schedule.",
        },
        {
          title: "Project Reporting",
          body: "Consolidate vendor performance, operational data, and Key Performance Indicators (KPIs) into structured reporting to give project teams clear oversight across transportation, component availability, and last-mile site delivery.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Maintaining Control Across the Project Lifecycle",
      body: "Coordinating suppliers, transportation providers, warehouses, trade contractors, and project teams requires clear accountability, reporting structures, and communication protocols. By connecting logistics operations, procurement activities, materials tracking, and milestone tracking within a single management framework, all stakeholders maintain visibility, alignment, and control as projects progress from planning and procurement through construction and operations to ensure schedule performance, delivery continuity, and final site handover.",
      items: [
        {
          title: "Logistics Execution|Planning",
          icon: "/icons/llp-planning.svg",
          body: "Route surveys, material flow mapping, delivery strategies, infrastructure assessments, and execution planning establish logistics requirements during the early stages of the project lifecycle, supporting procurement planning, construction readiness, and execution activities.",
        },
        {
          title: "Supplier & Contractor|Integration",
          icon: "/icons/llp-integration.svg",
          body: "Shared schedules, milestones, and reporting requirements coordinate procurement teams, suppliers, manufacturers, contractors, and logistics providers around common objectives. Clear reporting structures and communication protocols help maintain accountability and keep project activities progressing.",
        },
        {
          title: "Material|Readiness",
          icon: "/icons/llp-readiness.svg",
          body: "Fabrication progress, procurement status, warehouse operations, transportation schedules, and delivery commitments are monitored against project requirements, tracking material status throughout the supply chain to support construction schedules and installation activities.",
        },
        {
          title: "Project Controls &|Reporting",
          icon: "/icons/llp-controls.svg",
          body: "Logistics operations, supplier milestones, transportation status, material availability, and KPIs are consolidated into a structured reporting system, providing project teams with timely visibility regarding logistics performance, milestone achievement, and material availability.",
        },
        {
          title: "Risk & Constraint|Management",
          icon: "/icons/llp-risk.svg",
          body: "Transportation disruptions, supplier delays, documentation issues, infrastructure limitations, and schedule conflicts are monitored throughout the project lifecycle. Established escalation and mitigation procedures provide a structured approach for resolving issues and maintaining schedule performance.",
        },
        {
          title: "Logistics|Governance",
          icon: "/icons/llp-governance.svg",
          body: "Management procedures, communication protocols, performance measurements, and reporting structures provide oversight throughout the project and asset lifecycle. Governance systems support operational compliance, manage multi-vendor interfaces, and establish clear accountability across all stakeholders.",
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
          title: "End-to-End Logistics",
          body: "Single logistics partner experienced in hyperscale and industrial projects to manage all material movement, keeping operational flows completely streamlined from the warehouse directly to the installation site.",
        },
        {
          title: "Warehouse Management",
          body: "Integrated warehouse management systems and staging operations support cargo processing, utilizing real-time tracking to connect facility inventory directly to daily construction site requirements.",
        },
        {
          title: "Equipment Handling",
          body: "Controlled offloading zones and professional rigging teams protect high-value equipment using planned handling procedures, strict site controls, and measurable operational performance tracking.",
        },
        {
          title: "Safety-First Delivery",
          body: "Safety-first, project-focused model keeps your site secure and compliant from start to finish, reducing idle time, congestion, and duplicated logistics costs.",
        },
        {
          title: "Project Coordination",
          body: "Centralized communication and coordinated planning with EPC and GC teams support delivery sequencing, scheduling, and component availability across every shipment and staging move.",
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
          body: "Materials are stored in secure, climate-controlled facilities located onsite or near major data center hubs. Dedicated vendor zones hold OEM equipment safely, providing short- and long-term storage options with full visibility.",
        },
        {
          title: "Trucking &|Transportation",
          icon: "/icons/dc-trucking.svg",
          body: "Freight is transported through regional and long-haul coordination supported by an insured, Department of Transportation (DOT) compliant fleet. Specialized and heavy-haul capability supports critical components reaching sites safely and on schedule.",
        },
        {
          title: "Truck Coordination &|Staging",
          icon: "/icons/dc-staging.svg",
          body: "Deliveries are organized through pre-scheduled dock appointments and managed staging yards. Real-time tracking supports scheduling accuracy, reduces congestion, and maintains efficient movement from warehouse to job site.",
        },
        {
          title: "Warehouse Management|System (WMS)",
          icon: "/icons/dc-wms.svg",
          body: "Real-time visibility of inventory through barcode tracking and digital confirmation from receipt to delivery. Reporting is customized to GC and EPC requirements, keeping every movement accurate and traceable.",
        },
        {
          title: "Offload, Rigging &|Material Handling",
          icon: "/icons/dc-rigging.svg",
          body: "High-value equipment handled by certified rigging crews using safe-lift systems designed for generators, switchgear, and prefabricated modules. Each lift is planned to prevent delays, minimize risk, and maintain control during site delivery.",
        },
        {
          title: "Inter-Site|Logistics",
          icon: "/icons/dc-intersite.svg",
          body: "Materials transfer between phases or buildings with organized handling of returnables, scrap removal, and vendor returns. Staging support for modular builds and assembly operations keeps projects on track.",
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
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Every Hour Counts When Production Is On The Line",
      body: "Remote locations, offshore facilities, production schedules, and maintenance activities leave little room for delays. Drilling contractors, operators, vessel owners, suppliers, and personnel all rely on timely access to equipment, materials, and critical spares. Our integrated logistics services coordinate these requirements across multiple locations to support ongoing operations and asset performance.",
      cards: [
        {
          title: "Rig Mobilization",
          body: "Plan rig mobilization and relocation logistics to coordinate drilling equipment, support infrastructure, and operational materials between exploration and production locations while minimizing disruption to ongoing activities.",
        },
        {
          title: "Heavy Lift & Project Cargo",
          body: "Execute heavy-lift transportation and project cargo movements to manage the delivery of oversized modules, process equipment, pipelines, and production assets across challenging operating environments.",
        },
        {
          title: "Offshore Logistics",
          body: "Coordinate offshore vessel movements, marine support activities, and port operations to maintain the flow of cargo, equipment, and personnel between shore bases and offshore installations.",
        },
        {
          title: "Hazardous Cargo",
          body: "Manage hazardous cargo handling procedures for the transportation and storage of chemicals, fuels, compressed gases, and regulated materials in accordance with operational and environmental requirements.",
        },
        {
          title: "Time-Critical Deliveries",
          body: "Initiate time-critical transportation solutions to expedite critical spares, replacement components, and maintenance equipment to reduce non-productive time (NPT) and maintain operational continuity.",
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
          body: "Planning, transportation, lifting requirements, route assessments, and equipment deployment activities facilitate the relocation of drilling rigs and associated infrastructure between operating locations.",
        },
        {
          title: "Offshore Logistics|Support",
          icon: "/icons/og-offshore.svg",
          body: "Marine coordination, vessel scheduling, crew transfers, cargo handling, and shore base activities support offshore platforms, drilling units, floating production assets, and subsea operations.",
        },
        {
          title: "Supply Base|Operations",
          icon: "/icons/og-supply-base.svg",
          body: "Warehouses, yards, intersite staging areas, and inventory management processes supply drilling programs, production activities, maintenance requirements, and operations with equipment, consumables, and critical spares.",
        },
        {
          title: "Project Cargo &|Heavy Lift",
          icon: "/icons/og-heavy-lift.svg",
          body: "Transportation planning, route surveys, heavy-haul equipment, lifting operations, and delivery sequencing streamline the movement of oversized, overweight, and high-value cargo to operating facilities and project sites.",
        },
        {
          title: "Hazardous Materials|Management",
          icon: "/icons/og-hazmat.svg",
          body: "Handling, storage, transportation, documentation, and regulatory compliance activities support the safe movement of hazardous materials, chemicals, fuels, and regulated cargo.",
        },
        {
          title: "Emergency &|Expedited Response",
          icon: "/icons/og-emergency.svg",
          body: "Priority transportation services fulfill urgent operational requirements, equipment failures, maintenance events, and production-critical situations where delays may impact field activities or asset performance.",
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
          title: "Route Planning & Permits",
          body: "Execute route surveys, infrastructure assessments, permit planning, and transport engineering to identify road restrictions, bridge limitations, turning radii, and access constraints before turbine components move to site.",
        },
        {
          title: "Turbine Transport",
          body: "Plan coordinated transportation of turbine blades, towers, nacelles, hubs, and foundation components to support construction schedules while maintaining handling requirements for oversized and high-value cargo.",
        },
        {
          title: "Installation Coordination",
          body: "Integrate installation sequences, crane availability, site readiness, and delivery schedules to position turbine components in the exact order required for erection and assembly activities.",
        },
        {
          title: "Port & Staging Operations",
          body: "Manage port operations, marshalling yards, temporary storage, component staging, and cargo preparation to support offshore wind projects requiring phased delivery and vessel loading activities.",
        },
        {
          title: "Marine Logistics",
          body: "Coordinate marine activities, vessel scheduling, cargo transfers, and offshore support to maintain the flow of equipment and components between manufacturing facilities, ports, and offshore installation locations.",
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
          body: "Feasibility studies, swept-path analysis, bridge assessments, permit acquisition, escort planning, and stakeholder coordination facilitate the safe movement of wind turbine components across public road networks and marine transport lanes.",
        },
        {
          title: "Onshore Wind|Logistics",
          icon: "/icons/wind-transport.svg",
          body: "Transportation planning and execution manage the movement of turbine blades, towers, nacelles, hub assemblies, and associated components from manufacturing facilities, ports, and storage locations to land-based construction footprints and onshore project sites.",
        },
        {
          title: "Installation Support &|Delivery Sequencing",
          icon: "/icons/wind-sequencing.svg",
          body: "Delivery schedules are integrated with crane availability, installation programs, and site readiness requirements to assist turbine erection activities while reducing unnecessary handling and onsite storage across all active areas.",
        },
        {
          title: "Marshalling Yard &|Staging Operations",
          icon: "/icons/wind-marshalling.svg",
          body: "Temporary storage, inventory control, component inspection, cargo preparation, intersite staging, and yard activities supply the organized flow of equipment between ports, storage locations, and construction sites.",
        },
        {
          title: "Port Operations &|Vessel Coordination",
          icon: "/icons/wind-port.svg",
          body: "Port handling, cargo preparation, vessel scheduling, loading operations, and marine coordination aid offshore wind projects requiring the transfer of large components to installation vessels.",
        },
        {
          title: "Offshore Wind|Logistics",
          icon: "/icons/wind-offshore.svg",
          body: "Transportation, port services, marshalling activities, marine support, and component delivery programs assist offshore wind developments from fabrication and storage through offshore installation campaigns.",
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
          title: "Route Planning & Permits",
          body: "Execute route surveys, bridge assessments, permit applications, and transport engineering activities to identify infrastructure restrictions before oversized or overweight cargo moves through public road networks.",
        },
        {
          title: "Specialized Equipment",
          body: "Configure multi-axle trailers, hydraulic platform trailers, lowboys, and Self-Propelled Modular Transporters (SPMTs) selected according to cargo dimensions, weight distribution, and site requirements.",
        },
        {
          title: "Traffic Management",
          body: "Coordinate escort logistics, utility clearances, traffic management plans, and stakeholder engagement to support transport operations through congested urban areas and restricted transport corridors.",
        },
        {
          title: "Site Delivery Coordination",
          body: "Integrate delivery sequencing, lifting requirements, and site readiness reviews to match transportation activities with construction schedules, installation programs, and operational milestones.",
        },
        {
          title: "Secure Cargo Handling",
          body: "Manage high-value equipment via controlled handling, cargo securing, monitoring, and transportation oversight throughout transit to maintain cargo integrity and reduce operational risk.",
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
          body: "Route surveys, bridge evaluations, swept-path analysis, access assessments, and infrastructure reviews determine the safest and most practical transportation strategy before movement begins.",
        },
        {
          title: "Permit & Regulatory|Coordination",
          icon: "/icons/haul-permits.svg",
          body: "Permit applications, municipal approvals, escort requirements, utility notifications, and regulatory coordination support compliance across all transport jurisdictions.",
        },
        {
          title: "Heavy-Haul|Transportation",
          icon: "/icons/haul-transport.svg",
          body: "Specialized trailers, modular transport systems, and heavy-haul equipment support the movement of oversized, overweight, and out-of-gauge cargo across short-haul and long-distance routes.",
        },
        {
          title: "SPMT & Modular|Transport Solutions",
          icon: "/icons/haul-spmt.svg",
          body: "Self-Propelled Modular Transporters (SPMTs) and hydraulic platform trailers support cargo requiring precise positioning, load distribution, and controlled movement within ports, industrial facilities, and intersite locations.",
        },
        {
          title: "Site Delivery &|Positioning",
          icon: "/icons/haul-positioning.svg",
          body: "Transportation schedules, lifting plans, access reviews, and site coordination activities support the delivery and final placement of large equipment and project cargo.",
        },
        {
          title: "Critical Asset|Protection",
          icon: "/icons/haul-high-value.svg",
          body: "Controlled handling procedures, cargo securing methods, movement monitoring, and transportation oversight support the movement of sensitive, critical, and high-value equipment.",
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
          title: "On-Site Project Support",
          body: "Deploy embedded personnel alongside procurement, logistics, and project teams to monitor material status, supplier performance, and delivery commitments while providing immediate day-to-day operational support.",
        },
        {
          title: "Supplier Coordination",
          body: "Maintain supplier engagement activities to verify manufacturing progress, production schedules, inspection readiness, and shipment milestones before delays affect procurement timelines and overall project requirements.",
        },
        {
          title: "Factory Inspections",
          body: "Execute factory visits, progress checks, and milestone verification to provide direct confirmation of critical path items where supplier reporting alone lacks sufficient visibility.",
        },
        {
          title: "Issue Resolution",
          body: "Manage escalation protocols and issue resolution activities to address production delays, documentation gaps, material shortages, and transportation constraints impacting delivery commitments.",
        },
        {
          title: "Expedited Deliveries",
          body: "Arrange expedited transportation solutions to support urgent material requirements through dedicated vehicles, priority airfreight, courier services, and accelerated delivery methods when standard transit timelines fail.",
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
          body: "Dedicated personnel operate within your facility, project office, warehouse, or operational environment to support logistics coordination, material tracking, supplier communication, and day-to-day execution requirements.",
        },
        {
          title: "Supplier|Expediting",
          icon: "/icons/ih-expediting.svg",
          body: "Manufacturing schedules, production progress, inspection milestones, and shipment readiness are actively monitored through direct engagement with suppliers to support planned delivery requirements.",
        },
        {
          title: "Material Status|Verification",
          icon: "/icons/ih-verification.svg",
          body: "Factory visits, supplier reviews, progress checks, and milestone validation activities provide accurate reporting on critical path materials, equipment, and intersite procurement packages.",
        },
        {
          title: "Critical Path|Monitoring",
          icon: "/icons/ih-monitoring.svg",
          body: "Priority materials, long-lead equipment, and schedule-sensitive deliveries are tracked against project milestones to identify potential delays and support timely intervention.",
        },
        {
          title: "Expedited Freight|Coordination",
          icon: "/icons/ih-freight.svg",
          body: "Urgent transportation requirements are coordinated through dedicated transport solutions, priority freight services, courier networks, and accelerated delivery options when standard transit schedules cannot support operational requirements.",
        },
        {
          title: "Reporting &|Escalation Management",
          icon: "/icons/ih-reporting.svg",
          body: "Structured reporting, exception tracking, issue escalation, and stakeholder communication provide visibility of material readiness, supplier performance, delivery status, and emerging risks throughout the supply chain.",
        },
      ],
    },
  },
];
