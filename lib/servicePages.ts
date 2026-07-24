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
      "Integrated 4PL supply chain solutions that connect transportation, suppliers, warehousing, and material management to keep projects on schedule.",
    hero: {
      pill: "industries we serve",
      title: "Lead Logistics Provider",
      titleBold: "for Capital Projects",
      body: "Integrated 4PL supply chain solutions that connect transportation, suppliers, warehousing, and material management to keep projects on schedule and materials moving efficiently.",
      image: "/images/hero-lead-logistics.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Connecting Every Part Of Your Supply Chain",
      body: "From planning through operations, we coordinate suppliers, transportation, warehousing, and project teams to keep materials moving and projects on schedule.",
      cards: [
        {
          title: "Pre-FEED Planning",
          body: "Identify logistics needs, project risks, and infrastructure constraints to support early planning.",
        },
        {
          title: "FEED Logistics",
          body: "Develop delivery schedules, material forecasts, and logistics strategies before procurement begins.",
        },
        {
          title: "EPCM Coordination",
          body: "Manage suppliers, procurement, and material readiness to keep projects aligned and on schedule.",
        },
        {
          title: "EPC Site Logistics",
          body: "Coordinate deliveries, material flow, and installation to support efficient construction progress.",
        },
        {
          title: "Project Reporting",
          body: "Provide clear KPI reporting and project visibility through structured logistics updates.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Turning Plans Into Execution",
      body: "Logistics activities are planned, managed, and coordinated across global suppliers, transportation providers, trade contractors, and project stakeholders. Clear accountabilities, reporting structures, and communication protocols keep execution priorities focused throughout the project and asset life cycle. By connecting logistics, procurement, material readiness, and project controls within a single management framework, stakeholders gain greater visibility, stronger coordination, and better control over project execution from procurement through final site handover.",
      items: [
        {
          title: "Logistics Execution Planning",
          icon: "/icons/llp-planning.svg",
          body: "Transportation studies, material flow mapping, delivery strategies, infrastructure assessments, and execution planning establish logistics requirements during the early stages of the project life cycle. This approach reduces uncertainty and provides a clear framework for procurement and construction activities.",
        },
        {
          title: "Supplier & Contractor Integration",
          icon: "/icons/llp-integration.svg",
          body: "Shared schedules, milestones, and reporting requirements align procurement teams, suppliers, manufacturers, contractors, and logistics providers around common project objectives. This coordinated approach improves accountability, reduces communication gaps, and helps keep project activities progressing against shared priorities and milestones.",
        },
        {
          title: "Material Readiness",
          icon: "/icons/llp-readiness.svg",
          body: "Manufacturing progress, procurement status, warehouse activity, transportation schedules, and delivery commitments are monitored against project requirements. Ongoing visibility into material readiness supports planning decisions and helps identify potential constraints before they affect project execution.",
        },
        {
          title: "Project Controls & Reporting",
          icon: "/icons/llp-controls.svg",
          body: "Logistics activities, supplier milestones, transportation status, material availability, and Key Performance Indicators (KPIs) are consolidated into a structured reporting framework. Stakeholders receive consistent, timely visibility into project progress and logistics performance, enabling faster decision-making and earlier identification of potential issues.",
        },
        {
          title: "Risk & Constraint Management",
          icon: "/icons/llp-risk.svg",
          body: "Potential transportation disruptions, supplier delays, documentation issues, infrastructure limitations, and schedule conflicts are identified and addressed before they impact project execution. Resolution follows established escalation and mitigation processes designed to minimize disruption and maintain project schedules.",
        },
        {
          title: "Logistics Governance",
          icon: "/icons/llp-governance.svg",
          body: "Management procedures, communication protocols, performance measurements, and reporting structures provide oversight throughout the project and asset life cycle. Governance frameworks support operational compliance, coordinate multi-vendor workflows, and establish clear accountability across project teams throughout execution.",
        },
      ],
    },
  },
  {
    slug: "data-center-project-logistics",
    metaTitle: "Data Center Project Logistics",
    metaDescription:
      "Engineered 3PL logistics for hyperscale and enterprise data centers, ensuring safe, timely delivery from warehouse to worksite.",
    hero: {
      pill: "industries we serve",
      title: "Data Center",
      titleBold: "Project Logistics",
      body: "Engineered 3PL logistics for hyperscale and enterprise data centers, ensuring safe, timely delivery from warehouse to worksite.",
      image: "/images/hero-data-center.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Your Projects Demand Precision, Coordination, and Speed",
      body: "With tight schedules and high-value equipment, we connect contractors, EPC teams, and OEMs through one integrated logistics solution to keep projects moving safely, efficiently, and on schedule.",
      cards: [
        {
          title: "End-to-End Logistics",
          body: "A single logistics partner managing every material movement from warehouse to worksite.",
        },
        {
          title: "Warehouse Management",
          body: "Integrated WMS, staging, and real-time tracking for complete project visibility.",
        },
        {
          title: "Equipment Handling",
          body: "Professional rigging and controlled offloading protect high-value equipment throughout delivery.",
        },
        {
          title: "Safety-First Delivery",
          body: "Safe, compliant logistics that reduce delays, congestion, and unnecessary costs.",
        },
        {
          title: "Project Coordination",
          body: "Seamless communication with EPC and GC teams for efficient planning and execution.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Driven By Results",
      body: "With tight schedules, restricted access, and high-value equipment, timing matters at every stage. By partnering with us, you gain one unified logistics system that connects general contractors (GC), Engineering, Procurement, and Construction (EPC) teams, and Original Equipment Manufacturers (OEM) to manage every material movement while maintaining project flow, compliance, and efficiency.",
      items: [
        {
          title: "Warehousing & Inventory Management",
          icon: "/icons/dc-warehousing.svg",
          body: "Materials are stored in secure, climate-controlled facilities located onsite or near major data center hubs. Dedicated vendor zones hold OEM equipment safely, providing short- and long-term storage options with full visibility whenever you need it.",
        },
        {
          title: "Trucking & Transportation",
          icon: "/icons/dc-trucking.svg",
          body: "Freight moves through regional and long-haul coordination supported by an insured, Department of Transportation (DOT) compliant fleet. Specialized and heavy-haul capability ensures critical components reach sites safely and on schedule.",
        },
        {
          title: "Truck Coordination & Staging",
          icon: "/icons/dc-staging.svg",
          body: "Deliveries are organized through pre-scheduled dock appointments and managed staging yards. Real-time tracking keeps every movement visible, reducing congestion and maintaining a steady flow from warehouse to job site.",
        },
        {
          title: "Warehouse Management System (WMS)",
          icon: "/icons/dc-wms.svg",
          body: "Real-time visibility of inventory through barcode tracking and digital confirmation from receipt to delivery. Reporting is customized to GC and EPC requirements, keeping every movement accurate and traceable.",
        },
        {
          title: "Offload, Rigging & Material Handling",
          icon: "/icons/dc-rigging.svg",
          body: "High-value equipment handled by certified rigging crews using safe-lift systems designed for generators, switchgear, and prefabricated modules. Each lift is planned to prevent delays, minimize risk, and maintain control during site delivery.",
        },
        {
          title: "Inter-Site Logistics",
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
      "End-to-end logistics for upstream, midstream, and downstream operations, ensuring critical equipment, materials, and supplies are delivered safely, efficiently, and on schedule.",
    hero: {
      pill: "industries we serve",
      title: "Oil & Gas",
      titleBold: "Logistics",
      body: "End-to-end logistics for upstream, midstream, and downstream operations, ensuring critical equipment, materials, and supplies are delivered safely, efficiently, and on schedule.",
      image: "/images/hero-oil-gas.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Every Hour Counts When Production Is On The Line",
      body: "Remote operations and demanding schedules require dependable logistics. We coordinate equipment, materials, and critical spares to keep your operations running safely and efficiently.",
      cards: [
        {
          title: "Rig Mobilization",
          body: "Efficient planning and coordination of drilling equipment and support assets between project locations.",
        },
        {
          title: "Heavy Lift & Project Cargo",
          body: "Safe transport of oversized equipment, modules, pipelines, and production assets.",
        },
        {
          title: "Offshore Logistics",
          body: "Coordinated vessel, port, and marine operations to support offshore installations.",
        },
        {
          title: "Hazardous Cargo",
          body: "Compliant handling and transport of regulated materials, chemicals, fuels, and gases.",
        },
        {
          title: "Time-Critical Deliveries",
          body: "Rapid transport of critical spares and equipment to minimize downtime and keep operations running.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Ready For Demanding Environments",
      body: "Oil and gas operations depend on the timely movement of equipment, personnel, critical spares, hazardous materials, and high-value cargo across onshore and offshore locations. Rig mobilizations, marine support services, supply base activities, project cargo movements, and expedited deliveries are coordinated in line with operational priorities to support production, maintenance, and field requirements.",
      items: [
        {
          title: "Rig Moves & Mobilization",
          icon: "/icons/og-rig-moves.svg",
          body: "Planning, transportation, lifting requirements, route assessments, and equipment deployment activities support the relocation of drilling rigs and associated infrastructure between operating locations.",
        },
        {
          title: "Offshore Logistics Support",
          icon: "/icons/og-offshore.svg",
          body: "Marine coordination, vessel scheduling, crew transfers, cargo handling, and shore base activities support offshore platforms, drilling units, floating production assets, and subsea operations.",
        },
        {
          title: "Supply Base Operations",
          icon: "/icons/og-supply-base.svg",
          body: "Warehouses, tubular yards, staging areas, and inventory management processes support drilling programs, production activities, maintenance requirements, and field operations with equipment, consumables, and critical spares.",
        },
        {
          title: "Project Cargo & Heavy Lift",
          icon: "/icons/og-heavy-lift.svg",
          body: "Transportation planning, route surveys, heavy-haul equipment, lifting operations, and delivery sequencing support the movement of oversized, overweight, and high-value cargo to operating facilities and project sites.",
        },
        {
          title: "Hazardous Materials Management",
          icon: "/icons/og-hazmat.svg",
          body: "Handling, storage, transportation, documentation, and regulatory compliance activities support the safe movement of hazardous materials, chemicals, fuels, and regulated cargo.",
        },
        {
          title: "Emergency & Expedited Response",
          icon: "/icons/og-emergency.svg",
          body: "Priority transportation services support urgent operational requirements, equipment failures, maintenance events, and production-critical situations where delays may impact field activities or asset performance.",
        },
      ],
    },
  },
  {
    slug: "wind-energy-logistics",
    metaTitle: "Wind Energy Logistics",
    metaDescription:
      "Specialized logistics for onshore and offshore wind projects, coordinating equipment, project cargo, and materials from manufacturing to installation.",
    hero: {
      pill: "industries we serve",
      title: "Wind Energy",
      titleBold: "Logistics",
      body: "Specialized logistics for onshore and offshore wind projects, coordinating equipment, project cargo, and materials from manufacturing to installation.",
      image: "/images/hero-wind-energy.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Timing Matters From Production to Installation",
      body: "Long turbine components, remote sites, and complex installation schedules require precise planning. We coordinate developers, EPC contractors, manufacturers, and transport partners to keep wind projects on track.",
      cards: [
        {
          title: "Route Planning & Permits",
          body: "Route surveys and transport planning identify restrictions before components move.",
        },
        {
          title: "Turbine Transport",
          body: "Safe movement of blades, towers, nacelles, and foundations to meet project schedules.",
        },
        {
          title: "Installation Coordination",
          body: "Align deliveries, crane schedules, and site readiness for efficient turbine installation.",
        },
        {
          title: "Port & Staging Operations",
          body: "Coordinate port handling, storage, and staging for seamless offshore project delivery.",
        },
        {
          title: "Marine Logistics",
          body: "Manage vessel schedules and offshore cargo transfers between ports and installation sites.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Aligned With Installation Schedules",
      body: "Wind energy developments depend on the coordinated movement and positioning of turbine components throughout construction and installation activities. Route planning, transportation, marshalling operations, staging areas, port activities, vessel coordination, and site deliveries are aligned with project schedules, crane operations, installation sequences, and commissioning milestones to support efficient project execution.",
      items: [
        {
          title: "Transport Engineering & Route Planning",
          icon: "/icons/wind-route-planning.svg",
          body: "Route surveys, swept-path analysis, bridge assessments, permit acquisition, escort planning, and stakeholder coordination support the safe movement of oversized wind turbine components across public road networks.",
        },
        {
          title: "Blade, Tower & Nacelle Transportation",
          icon: "/icons/wind-transport.svg",
          body: "Transportation planning and execution support the movement of turbine blades, towers, nacelles, hub assemblies, and associated components from manufacturing facilities, ports, and storage locations to project sites.",
        },
        {
          title: "Installation Support & Delivery Sequencing",
          icon: "/icons/wind-sequencing.svg",
          body: "Delivery schedules are aligned with crane availability, installation programs, and site readiness requirements to support turbine erection activities while reducing unnecessary handling and onsite storage.",
        },
        {
          title: "Marshalling Yard & Staging Operations",
          icon: "/icons/wind-marshalling.svg",
          body: "Temporary storage, inventory control, component inspection, cargo preparation, and staging activities support the organized flow of equipment between ports, storage locations, and installation sites.",
        },
        {
          title: "Port Operations & Vessel Coordination",
          icon: "/icons/wind-port.svg",
          body: "Port handling, cargo preparation, vessel scheduling, loading operations, and marine coordination support offshore wind projects requiring the transfer of large components to installation vessels.",
        },
        {
          title: "Offshore Wind Logistics",
          icon: "/icons/wind-offshore.svg",
          body: "Transportation, port services, marshalling activities, marine support, and component delivery programs support offshore wind developments from fabrication and storage through offshore installation campaigns.",
        },
      ],
    },
  },
  {
    slug: "specialized-trucking-and-heavy-haul",
    metaTitle: "Specialized Trucking & Heavy Haul",
    metaDescription:
      "Specialized transport for oversized, overweight, out-of-gauge (OOG), and high-value cargo, with engineered routing, permit coordination, and safe delivery.",
    hero: {
      pill: "industries we serve",
      title: "Specialized Trucking &",
      titleBold: "Heavy Haul",
      body: "Specialized transport for oversized, overweight, out-of-gauge (OOG), and high-value cargo, with engineered routing, permit coordination, and safe delivery.",
      image: "/images/hero-heavy-haul.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Careful Planning Behind Every Complex Move",
      body: "Oversized loads, restricted routes, and challenging site access require careful planning. We coordinate every move to deliver critical equipment safely and on schedule.",
      cards: [
        {
          title: "Route Planning & Permits",
          body: "Route surveys and permit planning identify restrictions before transport begins.",
        },
        {
          title: "Specialized Equipment",
          body: "The right trailers and transport equipment selected for every heavy haul project.",
        },
        {
          title: "Traffic Management",
          body: "Coordinated escorts, clearances, and traffic planning ensure safe, compliant transport.",
        },
        {
          title: "Site Delivery Coordination",
          body: "Align deliveries with lifting schedules, site readiness, and construction milestones.",
        },
        {
          title: "Secure Cargo Handling",
          body: "Controlled handling and monitoring protect high-value cargo throughout every journey.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      heading: "Built Around Cargo Requirements",
      body: "Oversized, overweight, and high-value cargo requires more than transportation capacity alone. Equipment selection, route engineering, permit management, stakeholder coordination, cargo handling, and site delivery activities are aligned with cargo characteristics, infrastructure limitations, and project requirements to support safe and efficient execution.",
      items: [
        {
          title: "Route Engineering & Feasibility Studies",
          icon: "/icons/haul-route-engineering.svg",
          body: "Route surveys, bridge evaluations, swept-path analysis, access assessments, and infrastructure reviews determine the safest and most practical transportation strategy before movement begins.",
        },
        {
          title: "Permit & Regulatory Coordination",
          icon: "/icons/haul-permits.svg",
          body: "Permit applications, municipal approvals, escort requirements, utility notifications, and regulatory coordination support compliance across all transport jurisdictions.",
        },
        {
          title: "Heavy-Haul Transportation",
          icon: "/icons/haul-transport.svg",
          body: "Specialized trailers, modular transport systems, and heavy-haul equipment support the movement of oversized, overweight, and out-of-gauge cargo across short-haul and long-distance routes.",
        },
        {
          title: "SPMT & Modular Transport Solutions",
          icon: "/icons/haul-spmt.svg",
          body: "Self-Propelled Modular Transporters (SPMTs) and hydraulic platform trailers support cargo requiring precise positioning, load distribution, and controlled movement within ports, industrial facilities, and project sites.",
        },
        {
          title: "Site Delivery & Positioning",
          icon: "/icons/haul-positioning.svg",
          body: "Transportation schedules, lifting plans, access reviews, and site coordination activities support the delivery and final placement of large equipment and project cargo.",
        },
        {
          title: "High-Value Cargo Management",
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
      "On-site logistics support coordinating suppliers, materials, and deliveries to keep projects on schedule and operations running smoothly.",
    hero: {
      pill: "industries we serve",
      title: "In-House Support",
      titleBold: "& Expediting",
      body: "On-site logistics support coordinating suppliers, materials, and deliveries to keep projects on schedule and operations running smoothly.",
      image: "/images/hero-in-house.png",
    },
    deliver: {
      pill: "Logistics That Deliver",
      heading: "Critical Materials Need More Than Status Updates",
      body: "Accurate supplier coordination and real-time status updates keep procurement, manufacturing, and deliveries aligned with project schedules.",
      cards: [
        {
          title: "On-Site Project Support",
          body: "Embedded specialists provide real-time logistics and procurement support.",
        },
        {
          title: "Supplier Coordination",
          body: "Monitor supplier progress and shipment milestones to prevent project delays.",
        },
        {
          title: "Factory Inspections",
          body: "Verify production progress and critical milestones through on-site factory visits.",
        },
        {
          title: "Issue Resolution",
          body: "Resolve delays, shortages, and documentation issues before they impact delivery.",
        },
        {
          title: "Expedited Deliveries",
          body: "Fast-track critical materials with dedicated transport and priority freight solutions.",
        },
      ],
    },
    whatYouGet: {
      pill: "what you get",
      // NOTE: heading is marked "TBA" in the Figma design — placeholder pending final copy
      heading: "Visibility From Supplier To Site",
      body: "Material status, supplier commitments, manufacturing progress, shipment readiness, and delivery milestones are monitored through direct engagement with suppliers, project teams, transportation providers, and operational personnel. Embedded support resources provide visibility of critical requirements while expediting activities help maintain alignment between procurement schedules, project priorities, and delivery commitments.",
      items: [
        {
          title: "Embedded Logistics Support",
          icon: "/icons/ih-embedded.svg",
          body: "Dedicated personnel operate within your facility, project office, warehouse, or operational environment to support logistics coordination, material tracking, supplier communication, and day-to-day execution requirements.",
        },
        {
          title: "Supplier Expediting",
          icon: "/icons/ih-expediting.svg",
          body: "Manufacturing schedules, production progress, inspection milestones, and shipment readiness are actively monitored through direct engagement with suppliers to support planned delivery requirements.",
        },
        {
          title: "Material Status Verification",
          icon: "/icons/ih-verification.svg",
          body: "Factory visits, supplier reviews, progress checks, and milestone validation activities provide accurate reporting on critical path materials, equipment, and procurement packages.",
        },
        {
          title: "Critical Path Monitoring",
          icon: "/icons/ih-monitoring.svg",
          body: "Priority materials, long-lead equipment, and schedule-sensitive deliveries are tracked against project milestones to identify potential delays and support timely intervention.",
        },
        {
          title: "Expedited Freight Coordination",
          icon: "/icons/ih-freight.svg",
          body: "Urgent transportation requirements are coordinated through dedicated transport solutions, priority freight services, courier networks, and accelerated delivery options when standard transit schedules cannot support operational requirements.",
        },
        {
          title: "Reporting & Escalation Management",
          icon: "/icons/ih-reporting.svg",
          body: "Structured reporting, exception tracking, issue escalation, and stakeholder communication provide visibility of material readiness, supplier performance, delivery status, and emerging risks throughout the supply chain.",
        },
      ],
    },
  },
];
