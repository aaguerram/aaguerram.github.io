/* Angel Guerra — portfolio interactivity: i18n, theme, ambient graph, reveal */
(() => {
  "use strict";

  /* ---------------- content ---------------- */
  const CONTENT = {
    en: {
      nav: { signals: "Signals", work: "Work", record: "Track record", stack: "Stack", contact: "Contact" },
      hero: {
        eyebrow: "Solutions Architect · Agentic AI · AWS / Azure",
        role: "Solutions Architect & Senior Backend Developer — Agentic AI · Python · Cloud · Technical Pre-Sales",
        thesis: "Ten years hardening banking platforms. Now I design the agents that run inside them.",
        location: "Quito, Ecuador",
        experience: "10+ years in banking & fintech platforms",
        ctaPrimary: "See featured systems",
        ctaCv: "Download CV",
        ctaGithub: "GitHub",
        cvFile: "assets/Angel_Guerra_CV_EN.pdf",
      },
      signals: {
        heading: "Where the market is pointing",
        kicker:
          "Eight themes recruiters and CTOs are paying a premium for right now — mapped to where I've actually shipped them.",
        items: [
          {
            title: "Agentic AI Engineering",
            body: "LLM agents that call tools, keep memory, and know when to stop — not chatbots. LangGraph orchestration, RAG over vector stores, MCP integrations, human-in-the-loop guardrails.",
            proof: "Proof → a verifiable LangGraph pipeline that maps user stories to BIAN, and Luna, an omnichannel sales agent on Bedrock AgentCore",
          },
          {
            title: "Solution Architecture for Regulated Industries",
            body: "Microservices, event-driven design, CQRS and hexagonal architecture — built for the audit trails and uptime banking actually demands, not the tutorial version.",
            proof: "Proof → lead architect, Produbanco's new mobile banking platform",
          },
          {
            title: "Cloud Platform Engineering",
            body: "Infrastructure as code on AWS and Azure, golden-image pipelines, and zero-ingress security models — SSM tunnels instead of open ports.",
            proof: "Proof → Terraform/Terragrunt AMI pipeline for a GPU RPA fleet",
          },
          {
            title: "Intelligent Automation & RPA at Scale",
            body: "Browser-automation bots that outlast a single script — headless Chromium fleets, retry logic, and the infrastructure that keeps them alive.",
            proof: "Proof → golden image behind Intuito's TaxFlash bot fleet",
          },
          {
            title: "Enterprise Observability & Data-Privacy Engineering",
            body: "Telemetry pipelines that encrypt at the source and never let PII touch a shared log store — OpenTelemetry standardization, event-streamed masking, and an audit trail regulators can trust.",
            proof: "Proof → designed Produbanco's bank-wide audit-log platform: OTel NuGet → Kafka/Strimzi → masked Cosmos DB + SIEM",
          },
          {
            title: "Conversational Commerce & Real-Time Dispatch",
            body: "Agentic ordering that doesn't stop at the chat — a sales-rep bot that takes orders in natural language and feeds a live route-optimization engine straight through to the warehouse floor.",
            proof: "Proof → built the Telegram ordering agent and real-time delivery-route planner for a poultry distributor's field sales force",
          },
          {
            title: "Interactive Spatial Interfaces",
            body: "Turning a flat render into an explorable space — SVG unit outlines mapped onto a floor-plan image through a shared coordinate space, surfacing price, availability and media the instant you point at a unit.",
            proof: "Proof → built the interactive unit-explorer for a real-estate portal's apartment availability tool",
          },
          {
            title: "Multi-Tenant Subscription & Reseller Platforms",
            body: "A service catalog that resells itself — clients subscribe to e-invoicing, e-signature and other services directly, while the company's own distributors manage their own sub-clients on top, blending resold and proprietary services in one account.",
            proof: "Proof → designed Intuito's client subscription & distributor management system",
          },
        ],
      },
      projects: {
        heading: "Selected systems",
        kicker:
          "AI first: two agentic systems where the LLM is boxed in by deterministic code. Then my latest public repositories, and two private engagements that can't be linked.",
        aiBadge: "Agentic AI",
        items: [
          {
            name: "BIAN Contract Mapper — Verifiable LLM Pipeline",
            status: "Public repository",
            statusClass: "public",
            ai: true,
            meta: "Python · LangGraph · Sep 2026",
            summary:
              "Maps a batch of user stories to the BIAN Service Domains that should own them — with contractual role, confidence, official operations and a written justification — so API contracts start from the banking standard instead of a guess.",
            tags: ["LangGraph", "LangChain", "Multi-LLM failover", "Groq · Gemini · OpenRouter", "RAG (lexical / vector)", "LangSmith", "Hexagonal architecture", "Python"],
            notes: [
              {
                label: "Isolated evaluation",
                body: "A LangGraph map-reduce over stories, with a 10-step subgraph per story (6 LLM nodes, 4 deterministic). Every candidate Service Domain gets its own LLM call against a closed evidence pack — no cross-contamination between candidates.",
              },
              {
                label: "Adversarial, but one-way",
                body: "An independent adversarial reviewer re-checks ownership; its findings can only downgrade a Service Domain, never promote one. The model can only answer with names from the 341-domain catalog.",
              },
              {
                label: "Never a false “no”",
                body: "Evidence is cache-first from BIAN Release 14. If the network fails, the decision is stored as BIAN_EVIDENCE_UNAVAILABLE — not a silent “doesn't apply.”",
              },
            ],
            link: "https://github.com/aaguerram/generacion_contrato_bian",
            linkLabel: "View on GitHub",
          },
          {
            name: "Luna — Omnichannel Sales Agent",
            status: "Public repository",
            statusClass: "public",
            ai: true,
            meta: "Python · Bedrock AgentCore · Jul 2026",
            summary:
              "An agentic assistant that answers skincare sales questions inside a live Telegram ↔ Amazon Connect contact center, then hands off to a human advisor the moment it's out of its depth.",
            tags: ["LangGraph", "Amazon Bedrock AgentCore", "AWS Lambda", "Amazon Connect", "DynamoDB", "RAG / Firestore", "Python"],
            notes: [
              {
                label: "Architecture note",
                body: "Session state (routing mode, agent session id, TTL) is synced across three independent Lambdas so a chat can drop into the agent mid-conversation and resume — without the services sharing a database.",
              },
              {
                label: "Escalation rule",
                body: "After three unresolved turns, Luna hands off to a human — silently, mid-conversation, no dead air.",
              },
            ],
            link: "https://github.com/aaguerram/omnicanal-demo-v1",
            linkLabel: "View on GitHub",
          },
          {
            name: "Cross-Realm M2M Identity for Banking APIs",
            status: "Public repository",
            statusClass: "public",
            meta: "TypeScript · Keycloak · WSO2 · Sep 2026",
            summary:
              "A test bench for machine-to-machine auth across Keycloak realms behind WSO2 API Manager: a channel app holds a single secret in its own realm and still consumes BIAN / ISO 20022 APIs whose owning realms decide what it may do.",
            tags: ["Keycloak 26", "RFC 7523 client assertions", "WSO2 API Manager", "Next.js", "TypeScript", "OpenAPI 3.1", "Docker Compose"],
            notes: [
              {
                label: "Authentication ≠ authorization",
                body: "The channel realm says who you are, the API-owner realm says what you may do, and the gateway enforces it. Each WSO2 product only accepts tokens from its own realm.",
              },
              {
                label: "Tested to fail",
                body: "Scripted tests prove the negatives: replayed assertions, multi-audience tokens, direct cross-realm Token Exchange and channel tokens presented at the gateway are all rejected.",
              },
            ],
            link: "https://github.com/aaguerram/keycloak-cross-realm-token-exchange",
            linkLabel: "View on GitHub",
          },
          {
            name: "Effort Estimation Calculator",
            status: "Public repository",
            statusClass: "public",
            meta: "TypeScript · React · PostgREST · Sep 2026",
            summary:
              "Load a project's scope — components, features, integrations and drivers — and get a P50/P80/P90 effort band, an optimal team plan, a duration and the model's warnings. Coefficients are calibrated against closed projects, not invented.",
            tags: ["React 19", "TypeScript", "Feature-Sliced Design", "IBM Carbon", "PostgREST", "PostgreSQL", "Vitest", "Playwright"],
            notes: [
              {
                label: "No backend to maintain",
                body: "PostgREST generates the API straight from the Postgres schema; the rules live in a deterministic, pure model layer covered by 242 unit tests.",
              },
              {
                label: "Calibration, not vibes",
                body: "A global factor from the geometric mean of actual/estimated ratios, per-component factors shrunk toward it, and a shared risk σ — all derived from the project history.",
              },
            ],
            link: "https://github.com/aaguerram/calculadora-estimacion",
            linkLabel: "View on GitHub",
          },
          {
            name: "Financial Observability Pipeline on Kafka",
            status: "Public repository",
            statusClass: "public",
            meta: "C# · .NET 10 · Kafka · Aug 2026",
            summary:
              "OpenTelemetry traces, metrics and logs are encrypted at the payload, streamed through Kafka, masked according to the originating service's OpenAPI contract, risk-scored and bulk-persisted — four independent .NET 10 services, end to end.",
            tags: [".NET 10 / C# 14", "Native AOT", "Kafka (Strimzi · KRaft)", "OpenTelemetry", "AES-256-GCM", "Protobuf", "Polly", "Cosmos DB"],
            notes: [
              {
                label: "The broker never sees plaintext",
                body: "Payloads travel in a self-contained Protobuf envelope encrypted with AES-256-GCM before they touch Kafka; keys come from a Vault behind a one-hour RAM cache.",
              },
              {
                label: "Masking by contract",
                body: "x-log-data-protection rules in each service's OpenAPI spec decide what gets hashed, truncated or erased — zero heap allocations, and a dedicated DLQ at every stage.",
              },
            ],
            link: "https://github.com/aaguerram/log_procesor_otel",
            linkLabel: "View on GitHub",
          },
          {
            name: "TaxFlash Golden-Image Pipeline",
            status: "Private — Intuito",
            statusClass: "",
            summary:
              "A Terraform pipeline that spins up a full AWS environment, bakes a GPU-accelerated browser-automation image for a fleet of RPA bots, then tears every temporary resource back down — leaving only the image behind.",
            tags: ["Terraform", "Terragrunt", "AWS EC2 / AMI / SSM", "cloud-init", "Playwright", "PowerShell"],
            notes: [
              {
                label: "Zero-ingress security",
                body: "The security group has no inbound rules at all — every check and every debug session runs over an SSM tunnel, never SSH.",
              },
              {
                label: "Validation gate",
                body: "The image is only published after it boots headless Chromium and opens a real AudioContext — not just “the package installed.”",
              },
            ],
            link: null,
          },
          {
            name: "Zammad Helpdesk — One-Command Disaster Recovery",
            status: "Private — Intuito",
            statusClass: "",
            summary:
              "Infrastructure as code for the company's support desk: Terraform provisions the box, an idempotent Ansible playbook (run inside an ephemeral container) hardens and installs it, and the whole stack rebuilds from a single script.",
            tags: ["Terraform", "Ansible", "Docker", "Linux hardening", "UFW / fail2ban"],
            notes: [
              {
                label: "Cert-only access",
                body: "Root login disabled, password SSH disabled — the only way in is a certificate, by design.",
              },
              {
                label: "Idempotent by necessity",
                body: "Every Ansible role can re-run mid-failure without re-provisioning the server from scratch.",
              },
            ],
            link: null,
          },
        ],
      },
      record: {
        heading: "Track record",
        kicker:
          "Read like the architecture decision records I write for a living — newest entry wins, each one superseded by the next.",
        entries: [
          {
            id: "ADR-0006",
            role: "Senior Solutions Architect",
            org: "Produbanco · Ecuador",
            dates: "07/2025 — Present",
            status: "Accepted · in effect",
            current: true,
            points: [
              "Leading solution-architecture governance for the bank's new retail mobile banking platform.",
              "Defined the institutional method for architecture discovery, design and ADR governance.",
            ],
          },
          {
            id: "ADR-0005",
            role: "Expert Solutions Architect — Channels",
            org: "Banco Pichincha · Ecuador",
            dates: "04/2024 — 07/2025",
            status: "Superseded by ADR-0006",
            current: false,
            points: [
              "Led architecture for BP One's MVP, unifying Genesys Cloud and Agencia 5Cola into one omnichannel experience.",
              "Contributed to the DetectID → Auth0 authentication migration across mobile, web and BP One.",
            ],
          },
          {
            id: "ADR-0004",
            role: "Lead Architect",
            org: "NTT Data · Ecuador / Peru",
            dates: "02/2023 — 03/2024",
            status: "Superseded by ADR-0005",
            current: false,
            points: [
              "Technical pre-sales lead for strategic clients across Ecuador and Peru.",
              "Designed RIMAC's (Peru) cloud data pipeline for automated Salesforce campaigns.",
            ],
          },
          {
            id: "ADR-0003",
            role: "Senior Backend Developer",
            org: "DACODE — Tenpo Project · Chile",
            dates: "11/2022 — 01/2023",
            status: "Superseded by ADR-0004",
            current: false,
            points: [
              "Built distributed core-banking services on Kafka + Redis with gRPC between microservices.",
              "Modeled onboarding and cash-in/out flows in BPMN, documented with the C4 model.",
            ],
          },
          {
            id: "ADR-0002",
            role: "Technical Lead / Software Architect",
            org: "Estrategit · Ecuador",
            dates: "11/2019 — 10/2022",
            status: "Superseded by ADR-0003",
            current: false,
            points: [
              "Software architect and cloud advisor for Chubb Insurance, KFC Group, Pycca and McDonald's Ecuador.",
              "Evolved the e-invoicing core for Ecuador and Colombia; hybrid Azure + DigitalOcean architectures.",
            ],
          },
          {
            id: "ADR-0001",
            role: "Head of Systems / Developer",
            org: "Tributasoft S.A. · Ecuador",
            dates: "09/2014 — 11/2019",
            status: "Superseded by ADR-0002",
            current: false,
            points: [
              "Led the development team building CRM, accounting ERP and e-invoicing for the SRI (Ecuador's tax authority).",
              "Built an event-driven messaging system to decouple the accounting platform's modules.",
            ],
          },
        ],
      },
      skills: {
        heading: "Stack",
        kicker: "Grouped the way I actually reach for it.",
        groups: [
          { title: "Architecture & Patterns", chips: ["Microservices", "DDD", "Hexagonal / Clean Architecture", "CQRS", "Event Sourcing", "Saga", "EDA", "BPMN", "C4 Model", "ADRs"] },
          { title: "Agentic AI", chips: ["LangGraph", "LangChain", "LangSmith", "Amazon Bedrock AgentCore", "RAG", "Vector Search", "Multi-LLM Failover", "Tool Calling", "MCP", "Prompt Engineering", "Human-in-the-loop"] },
          { title: "Identity & APIs", chips: ["Keycloak", "OAuth 2.0 / OIDC", "RFC 7523 / RFC 8693", "WSO2 API Manager", "BIAN", "ISO 20022"] },
          { title: "Cloud & Infra", chips: ["AWS", "Azure", "Terraform", "Terragrunt", "Docker", "Kubernetes / OpenShift", "GitHub Actions", "CI/CD"] },
          { title: "Languages & APIs", chips: ["Python", "Java", "Spring Boot", "C# / .NET (Native AOT)", "JavaScript / TypeScript", "React / Next.js", "REST / OpenAPI", "GraphQL", "gRPC"] },
          { title: "Data & Messaging", chips: ["Kafka", "Redis", "PostgreSQL", "PostgREST", "Azure Cosmos DB", "Elasticsearch", "OpenTelemetry", "Outbox Pattern", "CDC"] },
          { title: "Consulting", chips: ["Technical Pre-Sales", "Needs Discovery", "Solution Proposals", "Stakeholder Advisory", "Public Speaking"] },
        ],
      },
      contact: {
        heading: "Let's architect something.",
        sub: "Open to staff/principal architecture roles, agentic-AI engineering, and technical advisory engagements.",
        emailLabel: "Email",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        locationLabel: "Location",
        locationValue: "Quito, Ecuador — open to remote",
      },
      footer: "© 2026 Angel Guerra. Built with Terraform energy and too many browser tabs.",
      backToTop: "Back to top ↑",
    },
    es: {
      nav: { signals: "Señales", work: "Trabajo", record: "Trayectoria", stack: "Stack", contact: "Contacto" },
      hero: {
        eyebrow: "Arquitecto de Soluciones · IA Agéntica · AWS / Azure",
        role: "Arquitecto de Soluciones y Desarrollador Senior Backend — IA Agéntica · Python · Cloud · Preventa Técnica",
        thesis: "Diez años endureciendo plataformas bancarias. Ahora diseño los agentes que operan dentro de ellas.",
        location: "Quito, Ecuador",
        experience: "10+ años en plataformas de banca y fintech",
        ctaPrimary: "Ver sistemas destacados",
        ctaCv: "Descargar CV",
        ctaGithub: "GitHub",
        cvFile: "assets/Angel_Guerra_CV_ES.pdf",
      },
      signals: {
        heading: "Hacia dónde apunta el mercado",
        kicker:
          "Ocho temas que reclutadores y CTOs están pagando premium hoy — mapeados a dónde los he entregado de verdad.",
        items: [
          {
            title: "Ingeniería de IA Agéntica",
            body: "Agentes LLM que llaman herramientas, mantienen memoria y saben cuándo detenerse — no chatbots. Orquestación con LangGraph, RAG sobre bases vectoriales, integraciones MCP, guardrails human-in-the-loop.",
            proof: "Prueba → un pipeline LangGraph verificable que mapea historias de usuario a BIAN, y Luna, agente de ventas omnicanal en Bedrock AgentCore",
          },
          {
            title: "Arquitectura de Soluciones para Industrias Reguladas",
            body: "Microservicios, diseño orientado a eventos, CQRS y arquitectura hexagonal — construidos para el rastro de auditoría y el uptime que la banca realmente exige, no la versión de tutorial.",
            proof: "Prueba → arquitecto líder, nueva plataforma de banca móvil de Produbanco",
          },
          {
            title: "Ingeniería de Plataformas Cloud",
            body: "Infraestructura como código en AWS y Azure, pipelines de imagen dorada y modelos de seguridad de cero-ingreso — túneles SSM en lugar de puertos abiertos.",
            proof: "Prueba → pipeline Terraform/Terragrunt de AMI para una flota RPA con GPU",
          },
          {
            title: "Automatización Inteligente y RPA a Escala",
            body: "Bots de automatización de navegador que sobreviven a un solo script — flotas de Chromium headless, lógica de reintentos y la infraestructura que los mantiene vivos.",
            proof: "Prueba → imagen dorada detrás de la flota de bots TaxFlash de Intuito",
          },
          {
            title: "Observabilidad Empresarial e Ingeniería de Privacidad de Datos",
            body: "Pipelines de telemetría que cifran desde el origen y nunca dejan que un dato sensible toque un repositorio de logs compartido — estandarización OpenTelemetry, enmascarado por streaming, y un rastro de auditoría en el que un regulador puede confiar.",
            proof: "Prueba → diseñé la plataforma de logs de auditoría transversal de Produbanco: NuGet OTel → Kafka/Strimzi → Cosmos DB enmascarada + SIEM",
          },
          {
            title: "Comercio Conversacional y Despacho en Tiempo Real",
            body: "Toma de pedidos agéntica que no se queda en el chat — un bot para vendedores que toma pedidos en lenguaje natural y alimenta en vivo un motor de optimización de rutas hasta la bodega de despacho.",
            proof: "Prueba → construí el agente de pedidos por Telegram y el planificador de rutas de entrega en tiempo real para la fuerza de ventas de campo de una avícola",
          },
          {
            title: "Interfaces Espaciales Interactivas",
            body: "Convertir un render plano en un espacio explorable — contornos SVG de cada unidad mapeados sobre la imagen del plano mediante un sistema de coordenadas compartido, mostrando precio, disponibilidad y multimedia al instante al señalar una unidad.",
            proof: "Prueba → construí el explorador interactivo de unidades para la herramienta de disponibilidad de un portal inmobiliario",
          },
          {
            title: "Plataformas de Suscripción y Reventa Multi-Tenant",
            body: "Un catálogo de servicios que se revende a sí mismo — los clientes se suscriben directo a facturación electrónica, firma electrónica y otros servicios, mientras los distribuidores de la empresa gestionan a sus propios subclientes por encima, combinando servicios revendidos y propios en una sola cuenta.",
            proof: "Prueba → diseñé el sistema de suscripción de clientes y gestión de distribuidores de Intuito",
          },
        ],
      },
      projects: {
        heading: "Sistemas seleccionados",
        kicker:
          "Primero la IA: dos sistemas agénticos donde el LLM está acotado por código determinista. Luego mis repositorios públicos más recientes y dos proyectos privados que no se pueden enlazar.",
        aiBadge: "IA agéntica",
        items: [
          {
            name: "Mapeador de Contratos BIAN — Pipeline LLM Verificable",
            status: "Repositorio público",
            statusClass: "public",
            ai: true,
            meta: "Python · LangGraph · sep 2026",
            summary:
              "Mapea un lote de Historias de Usuario a los Service Domains BIAN que deben ser sus dueños — con rol contractual, confianza, operaciones oficiales y justificación escrita — para que los contratos de API nazcan del estándar bancario y no de una suposición.",
            tags: ["LangGraph", "LangChain", "Failover multi-LLM", "Groq · Gemini · OpenRouter", "RAG (léxico / vectorial)", "LangSmith", "Arquitectura hexagonal", "Python"],
            notes: [
              {
                label: "Evaluación aislada",
                body: "Un map-reduce en LangGraph sobre las historias, con un subgrafo de 10 pasos por HU (6 nodos LLM, 4 deterministas). Cada Service Domain candidato recibe su propia llamada LLM contra un paquete de evidencia cerrado — sin contaminación cruzada entre candidatos.",
              },
              {
                label: "Adversarial, pero en un solo sentido",
                body: "Un revisor adversarial independiente vuelve a contrastar el ownership; sus hallazgos solo pueden degradar un Service Domain, nunca promoverlo. El modelo solo puede responder con nombres del catálogo de 341 dominios.",
              },
              {
                label: "Nunca un falso “no”",
                body: "La evidencia es cache-first sobre BIAN Release 14. Si la red falla, la decisión queda como BIAN_EVIDENCE_UNAVAILABLE — no como un “no aplica” silencioso.",
              },
            ],
            link: "https://github.com/aaguerram/generacion_contrato_bian",
            linkLabel: "Ver en GitHub",
          },
          {
            name: "Luna — Agente de Ventas Omnicanal",
            status: "Repositorio público",
            statusClass: "public",
            ai: true,
            meta: "Python · Bedrock AgentCore · jul 2026",
            summary:
              "Un asistente agéntico que responde preguntas de venta de skincare dentro de un contact center real Telegram ↔ Amazon Connect, y deriva a un asesor humano en el momento en que se sale de su alcance.",
            tags: ["LangGraph", "Amazon Bedrock AgentCore", "AWS Lambda", "Amazon Connect", "DynamoDB", "RAG / Firestore", "Python"],
            notes: [
              {
                label: "Nota de arquitectura",
                body: "El estado de sesión (modo de enrutamiento, id de sesión del agente, TTL) se sincroniza entre tres Lambdas independientes para que un chat pueda entrar al agente a mitad de conversación y continuar — sin que los servicios compartan base de datos.",
              },
              {
                label: "Regla de escalamiento",
                body: "Tras tres turnos sin resolver, Luna deriva a un humano — en silencio, a mitad de conversación, sin tiempos muertos.",
              },
            ],
            link: "https://github.com/aaguerram/omnicanal-demo-v1",
            linkLabel: "Ver en GitHub",
          },
          {
            name: "Identidad M2M entre Reinos para APIs Bancarias",
            status: "Repositorio público",
            statusClass: "public",
            meta: "TypeScript · Keycloak · WSO2 · sep 2026",
            summary:
              "Un banco de pruebas de autenticación máquina a máquina entre reinos de Keycloak detrás de WSO2 API Manager: una aplicación de canal tiene un solo secreto en su reino y aun así consume APIs BIAN / ISO 20022 cuyos reinos dueños deciden qué puede hacer.",
            tags: ["Keycloak 26", "Client assertions RFC 7523", "WSO2 API Manager", "Next.js", "TypeScript", "OpenAPI 3.1", "Docker Compose"],
            notes: [
              {
                label: "Autenticación ≠ autorización",
                body: "El reino del canal dice quién eres, el reino dueño de la API dice qué puedes hacer y el gateway lo aplica. Cada producto de WSO2 solo acepta tokens de su propio reino.",
              },
              {
                label: "Probado para fallar",
                body: "Pruebas automatizadas demuestran los negativos: assertions reutilizadas, tokens con varias audiencias, Token Exchange directo entre reinos y tokens del canal presentados en el gateway son rechazados.",
              },
            ],
            link: "https://github.com/aaguerram/keycloak-cross-realm-token-exchange",
            linkLabel: "Ver en GitHub",
          },
          {
            name: "Calculadora de Estimación de Esfuerzo",
            status: "Repositorio público",
            statusClass: "public",
            meta: "TypeScript · React · PostgREST · sep 2026",
            summary:
              "Se carga el alcance de un proyecto — componentes, features, integraciones y drivers — y devuelve una banda de esfuerzo P50/P80/P90, un plan de equipo óptimo, la duración y las alertas del modelo. Los coeficientes se calibran contra proyectos cerrados, no se inventan.",
            tags: ["React 19", "TypeScript", "Feature-Sliced Design", "IBM Carbon", "PostgREST", "PostgreSQL", "Vitest", "Playwright"],
            notes: [
              {
                label: "Sin backend que mantener",
                body: "PostgREST genera la API directamente desde el esquema de Postgres; las reglas viven en una capa de modelo pura y determinista cubierta por 242 tests unitarios.",
              },
              {
                label: "Calibración, no intuición",
                body: "Un factor global por media geométrica de los ratios real/estimado, factores por componente encogidos hacia él y un σ de riesgo común — todo derivado del histórico.",
              },
            ],
            link: "https://github.com/aaguerram/calculadora-estimacion",
            linkLabel: "Ver en GitHub",
          },
          {
            name: "Pipeline de Observabilidad Financiera sobre Kafka",
            status: "Repositorio público",
            statusClass: "public",
            meta: "C# · .NET 10 · Kafka · ago 2026",
            summary:
              "Trazas, métricas y logs de OpenTelemetry se cifran a nivel de carga útil, viajan por Kafka, se enmascaran según el contrato OpenAPI del servicio de origen, se puntúan por riesgo y se persisten de forma masiva — cuatro servicios .NET 10 independientes, de punta a punta.",
            tags: [".NET 10 / C# 14", "Native AOT", "Kafka (Strimzi · KRaft)", "OpenTelemetry", "AES-256-GCM", "Protobuf", "Polly", "Cosmos DB"],
            notes: [
              {
                label: "El broker nunca ve texto en claro",
                body: "La carga viaja en un sobre Protobuf autosuficiente cifrado con AES-256-GCM antes de tocar Kafka; las claves vienen de un Vault con caché en RAM de una hora.",
              },
              {
                label: "Enmascarado por contrato",
                body: "Las reglas x-log-data-protection del OpenAPI de cada servicio deciden qué se hashea, trunca o borra — cero asignaciones en el heap y una DLQ dedicada en cada etapa.",
              },
            ],
            link: "https://github.com/aaguerram/log_procesor_otel",
            linkLabel: "Ver en GitHub",
          },
          {
            name: "Pipeline de Imagen Dorada de TaxFlash",
            status: "Privado — Intuito",
            statusClass: "",
            summary:
              "Un pipeline de Terraform que levanta un entorno AWS completo, arma una imagen de automatización de navegador acelerada por GPU para una flota de bots RPA, y luego destruye cada recurso temporal — dejando solo la imagen.",
            tags: ["Terraform", "Terragrunt", "AWS EC2 / AMI / SSM", "cloud-init", "Playwright", "PowerShell"],
            notes: [
              {
                label: "Seguridad de cero-ingreso",
                body: "El security group no tiene ninguna regla de entrada — cada verificación y cada sesión de debug corre por un túnel SSM, nunca SSH.",
              },
              {
                label: "Puerta de validación",
                body: "La imagen solo se publica después de arrancar Chromium headless y abrir un AudioContext real — no solo “el paquete quedó instalado”.",
              },
            ],
            link: null,
          },
          {
            name: "Mesa de Ayuda Zammad — Recuperación ante Desastres en un Comando",
            status: "Privado — Intuito",
            statusClass: "",
            summary:
              "Infraestructura como código para la mesa de soporte de la empresa: Terraform provisiona el servidor, un playbook de Ansible idempotente (corrido dentro de un contenedor efímero) lo endurece e instala, y toda la pila se reconstruye con un solo script.",
            tags: ["Terraform", "Ansible", "Docker", "Hardening Linux", "UFW / fail2ban"],
            notes: [
              {
                label: "Acceso solo por certificado",
                body: "Login root deshabilitado, SSH por contraseña deshabilitado — la única entrada es por certificado, por diseño.",
              },
              {
                label: "Idempotente por necesidad",
                body: "Cada rol de Ansible puede volver a correr a mitad de una falla sin re-provisionar el servidor desde cero.",
              },
            ],
            link: null,
          },
        ],
      },
      record: {
        heading: "Trayectoria",
        kicker:
          "Se lee como los Architecture Decision Records que escribo día a día — la entrada más nueva manda, cada una superada por la siguiente.",
        entries: [
          {
            id: "ADR-0006",
            role: "Arquitecto de Soluciones Senior",
            org: "Produbanco · Ecuador",
            dates: "07/2025 — Presente",
            status: "Aceptada · vigente",
            current: true,
            points: [
              "Lidero la gobernanza de arquitectura de solución para la nueva plataforma de banca móvil del banco.",
              "Definí el método institucional de descubrimiento, diseño y gobierno de ADRs.",
            ],
          },
          {
            id: "ADR-0005",
            role: "Arquitecto de Soluciones Experto — Canales",
            org: "Banco Pichincha · Ecuador",
            dates: "04/2024 — 07/2025",
            status: "Superada por ADR-0006",
            current: false,
            points: [
              "Lideré la arquitectura del MVP de BP One, unificando Genesys Cloud y Agencia 5Cola en una experiencia omnicanal.",
              "Contribuí a la migración de autenticación DetectID → Auth0 en banca móvil, web y BP One.",
            ],
          },
          {
            id: "ADR-0004",
            role: "Líder de Arquitectos",
            org: "NTT Data · Ecuador / Perú",
            dates: "02/2023 — 03/2024",
            status: "Superada por ADR-0005",
            current: false,
            points: [
              "Líder de preventa técnica para clientes estratégicos en Ecuador y Perú.",
              "Diseñé el pipeline de datos en la nube de RIMAC (Perú) para automatizar campañas en Salesforce.",
            ],
          },
          {
            id: "ADR-0003",
            role: "Desarrollador Senior Backend",
            org: "DACODE — Proyecto Tenpo · Chile",
            dates: "11/2022 — 01/2023",
            status: "Superada por ADR-0004",
            current: false,
            points: [
              "Construí servicios del core bancario distribuido sobre Kafka + Redis con gRPC entre microservicios.",
              "Modelé los flujos de alta y cash-in/cash-out en BPMN, documentados con el modelo C4.",
            ],
          },
          {
            id: "ADR-0002",
            role: "Líder Técnico / Arquitecto de Software",
            org: "Estrategit · Ecuador",
            dates: "11/2019 — 10/2022",
            status: "Superada por ADR-0003",
            current: false,
            points: [
              "Arquitecto de software y asesor cloud para Seguros Chubb, Grupo KFC, Pycca y McDonald's Ecuador.",
              "Evolucioné el core de facturación electrónica para Ecuador y Colombia; arquitecturas híbridas Azure + DigitalOcean.",
            ],
          },
          {
            id: "ADR-0001",
            role: "Jefe de Sistemas / Desarrollador",
            org: "Tributasoft S.A. · Ecuador",
            dates: "09/2014 — 11/2019",
            status: "Superada por ADR-0002",
            current: false,
            points: [
              "Dirigí el equipo de desarrollo del CRM, ERP contable y facturación electrónica para el SRI.",
              "Construí un sistema de mensajería orientado a eventos para desacoplar los módulos de la plataforma contable.",
            ],
          },
        ],
      },
      skills: {
        heading: "Stack",
        kicker: "Agrupado tal como lo uso en la práctica.",
        groups: [
          { title: "Arquitectura y Patrones", chips: ["Microservicios", "DDD", "Arquitectura Hexagonal / Limpia", "CQRS", "Event Sourcing", "Saga", "EDA", "BPMN", "Modelo C4", "ADRs"] },
          { title: "IA Agéntica", chips: ["LangGraph", "LangChain", "LangSmith", "Amazon Bedrock AgentCore", "RAG", "Búsqueda Vectorial", "Failover Multi-LLM", "Tool Calling", "MCP", "Ingeniería de Prompts", "Human-in-the-loop"] },
          { title: "Identidad y APIs", chips: ["Keycloak", "OAuth 2.0 / OIDC", "RFC 7523 / RFC 8693", "WSO2 API Manager", "BIAN", "ISO 20022"] },
          { title: "Cloud e Infraestructura", chips: ["AWS", "Azure", "Terraform", "Terragrunt", "Docker", "Kubernetes / OpenShift", "GitHub Actions", "CI/CD"] },
          { title: "Lenguajes y APIs", chips: ["Python", "Java", "Spring Boot", "C# / .NET (Native AOT)", "JavaScript / TypeScript", "React / Next.js", "REST / OpenAPI", "GraphQL", "gRPC"] },
          { title: "Datos y Mensajería", chips: ["Kafka", "Redis", "PostgreSQL", "PostgREST", "Azure Cosmos DB", "Elasticsearch", "OpenTelemetry", "Patrón Outbox", "CDC"] },
          { title: "Consultoría", chips: ["Preventa Técnica", "Descubrimiento de Necesidades", "Propuestas de Solución", "Asesoría a Stakeholders", "Oratoria"] },
        ],
      },
      contact: {
        heading: "Arquitectemos algo.",
        sub: "Abierto a roles de arquitectura staff/principal, ingeniería de IA agéntica y proyectos de asesoría técnica.",
        emailLabel: "Correo",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
        locationLabel: "Ubicación",
        locationValue: "Quito, Ecuador — abierto a remoto",
      },
      footer: "© 2026 Angel Guerra. Construido con energía de Terraform y demasiadas pestañas abiertas.",
      backToTop: "Volver arriba ↑",
    },
  };

  const EMAIL = "aaguerra11@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/angel-guerra-19586552";
  const GITHUB = "https://github.com/aaguerram";

  const ICONS = {
    external:
      '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 3H3v10h10v-3"/><path d="M9 3h4v4"/><path d="M13 3 7 9"/></svg>',
    pin: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 14s5-4.2 5-8a5 5 0 1 0-10 0c0 3.8 5 8 5 8Z"/><circle cx="8" cy="6" r="1.8"/></svg>',
    briefcase:
      '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="5" width="12" height="8" rx="1.2"/><path d="M6 5V3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5V5"/></svg>',
  };

  /* ---------------- storage (can throw in private mode / blocked site data) ---------------- */
  const store = {
    get(k) {
      try { return localStorage.getItem(k); } catch { return null; }
    },
    set(k, v) {
      try { localStorage.setItem(k, v); } catch { /* preference just won't persist */ }
    },
    remove(k) {
      try { localStorage.removeItem(k); } catch { /* ignore */ }
    },
  };

  /* ---------------- render ---------------- */
  const root = document.documentElement;

  function chip(text) {
    return `<span class="tag">${text}</span>`;
  }

  function renderNav(t) {
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.textContent = t.nav[el.dataset.nav];
    });
  }

  function renderHero(t) {
    document.getElementById("hero-eyebrow-text").textContent = t.hero.eyebrow;
    document.getElementById("hero-role").textContent = t.hero.role;
    document.getElementById("hero-thesis").textContent = t.hero.thesis;
    document.getElementById("hero-location-item").innerHTML = `${ICONS.pin}<span>${t.hero.location}</span>`;
    document.getElementById("hero-experience-item").innerHTML = `${ICONS.briefcase}<span>${t.hero.experience}</span>`;
    document.getElementById("hero-cta-primary").textContent = t.hero.ctaPrimary;
    const cv = document.getElementById("hero-cta-cv");
    cv.textContent = t.hero.ctaCv;
    cv.setAttribute("href", t.hero.cvFile);
    const gh = document.getElementById("hero-cta-github");
    gh.setAttribute("href", GITHUB);
    gh.innerHTML = `${t.hero.ctaGithub} ${ICONS.external}`;
  }

  function renderSignals(t) {
    document.getElementById("signals-heading").textContent = t.signals.heading;
    document.getElementById("signals-kicker").textContent = t.signals.kicker;
    const grid = document.getElementById("signals-grid");
    grid.innerHTML = t.signals.items
      .map(
        (s, i) => `
      <article class="signal-card reveal">
        <span class="signal-index">${String(i + 1).padStart(2, "0")} / ${String(t.signals.items.length).padStart(2, "0")}</span>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        <div class="signal-proof">${s.proof}</div>
      </article>`
      )
      .join("");
  }

  function renderProjects(t) {
    document.getElementById("projects-heading").textContent = t.projects.heading;
    document.getElementById("projects-kicker").textContent = t.projects.kicker;
    const list = document.getElementById("projects-list");
    list.innerHTML = t.projects.items
      .map(
        (p) => `
      <article class="project-card reveal${p.ai ? " is-ai" : ""}">
        <div class="project-main">
          <div class="project-head">
            <h3>${p.name}</h3>
            <div class="project-badges">
              ${p.ai ? `<span class="project-status ai">${t.projects.aiBadge}</span>` : ""}
              <span class="project-status ${p.statusClass}">${p.status}</span>
            </div>
          </div>
          ${p.meta ? `<div class="project-meta">${p.meta}</div>` : ""}
          <p class="project-summary">${p.summary}</p>
          <div class="tags project-tags">${p.tags.map(chip).join("")}</div>
          ${
            p.link
              ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">${ICONS.external} ${p.linkLabel}</a>`
              : ""
          }
        </div>
        <div class="project-notes">
          ${p.notes
            .map(
              (n) => `<div class="project-note"><div class="project-note-label">${n.label}</div><p>${n.body}</p></div>`
            )
            .join("")}
        </div>
      </article>`
      )
      .join("");
  }

  function renderRecord(t) {
    document.getElementById("record-heading").textContent = t.record.heading;
    document.getElementById("record-kicker").textContent = t.record.kicker;
    const list = document.getElementById("record-list");
    list.innerHTML = t.record.entries
      .map(
        (e) => `
      <article class="adr-entry reveal">
        <div class="adr-id"><strong>ADR</strong>${e.id.replace("ADR-", "")}</div>
        <div>
          <div class="adr-body-top">
            <div>
              <div class="adr-role">${e.role}</div>
              <div class="adr-org">${e.org}</div>
            </div>
            <div class="adr-dates">${e.dates}</div>
          </div>
          <div class="adr-status${e.current ? " current" : ""}">${e.status}</div>
          <ul class="adr-points">${e.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
        </div>
      </article>`
      )
      .join("");
  }

  function renderSkills(t) {
    document.getElementById("skills-heading").textContent = t.skills.heading;
    document.getElementById("skills-kicker").textContent = t.skills.kicker;
    const grid = document.getElementById("skills-grid");
    grid.innerHTML = t.skills.groups
      .map(
        (g) => `
      <div class="skill-group reveal">
        <h3>${g.title}</h3>
        <div class="tags">${g.chips.map(chip).join("")}</div>
      </div>`
      )
      .join("");
  }

  function renderContact(t) {
    document.getElementById("contact-heading").textContent = t.contact.heading;
    document.getElementById("contact-sub").textContent = t.contact.sub;
    const list = document.getElementById("contact-list");
    list.innerHTML = `
      <a href="mailto:${EMAIL}">${t.contact.emailLabel}<span>${EMAIL}</span></a>
      <a href="${LINKEDIN}" target="_blank" rel="noopener">${t.contact.linkedinLabel} ${ICONS.external}</a>
      <a href="${GITHUB}" target="_blank" rel="noopener">${t.contact.githubLabel} ${ICONS.external}</a>
      <span class="static">${t.contact.locationLabel}<span>${t.contact.locationValue}</span></span>
    `;
  }

  function renderFooter(t) {
    document.getElementById("footer-text").textContent = t.footer;
    document.getElementById("back-to-top").textContent = t.backToTop;
  }

  function render(lang) {
    const t = CONTENT[lang];
    root.setAttribute("lang", lang);
    renderNav(t);
    renderHero(t);
    renderSignals(t);
    renderProjects(t);
    renderRecord(t);
    renderSkills(t);
    renderContact(t);
    renderFooter(t);
    document.querySelectorAll(".lang-toggle button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    observeReveals();
  }

  function setLang(lang) {
    store.set("aag-lang", lang);
    render(lang);
  }

  function initLang() {
    const stored = store.get("aag-lang");
    if (stored && CONTENT[stored]) return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  }

  /* ---------------- theme ---------------- */
  function setTheme(theme) {
    if (theme) {
      root.setAttribute("data-theme", theme);
      store.set("aag-theme", theme);
    } else {
      root.removeAttribute("data-theme");
      store.remove("aag-theme");
    }
    updateThemeIcon();
  }

  function currentTheme() {
    const stored = store.get("aag-theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateThemeIcon() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const isDark = currentTheme() === "dark";
    btn.innerHTML = isDark
      ? '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="3.2"/><path d="M8 1.5v1.4M8 13v1.4M2.6 8H4M12 8h1.4M4.2 4.2l1 1M10.8 10.8l1 1M4.2 11.8l1-1M10.8 5.2l1-1"/></svg>'
      : '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M13.5 9.3A5.8 5.8 0 0 1 6.7 2.5a5.8 5.8 0 1 0 6.8 6.8Z"/></svg>';
  }

  /* ---------------- reveal on scroll ---------------- */
  let observer;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => observer.observe(el));
  }

  /* ---------------- ambient node graph (hero canvas) ---------------- */
  function initGraph() {
    const canvas = document.getElementById("graph-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const labels = ["Agentic AI", "Banking Core", "Cloud", "RPA", "Pre-Sales", "Events"];
    let nodes = [];
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function accentColor() {
      return getComputedStyle(root).getPropertyValue("--edge").trim();
    }
    function amberColor() {
      return getComputedStyle(root).getPropertyValue("--accent").trim();
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const count = w < 640 ? 5 : labels.length;
      nodes = new Array(count).fill(0).map((_, i) => ({
        x: (0.15 + 0.7 * Math.random()) * w,
        y: (0.12 + 0.76 * Math.random()) * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 2.6 + Math.random() * 1.6,
        label: labels[i],
      }));
    }

    function step() {
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < w * 0.06 || n.x > w * 0.94) n.vx *= -1;
        if (n.y < h * 0.08 || n.y > h * 0.92) n.vy *= -1;
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const edge = accentColor();
      const amber = amberColor();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          const max = Math.min(w, h) * 0.42;
          if (dist < max) {
            ctx.strokeStyle = edge;
            ctx.globalAlpha = (1 - dist / max) * 0.35;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      nodes.forEach((n, i) => {
        ctx.fillStyle = i === 0 ? amber : edge;
        ctx.globalAlpha = i === 0 ? 0.9 : 0.55;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function loop() {
      step();
      draw();
      if (!reduceMotion) requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
    if (!reduceMotion) requestAnimationFrame(loop);
  }

  /* ---------------- wire up controls ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    setTheme(store.get("aag-theme") || null);
    document.getElementById("theme-toggle").addEventListener("click", () => {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
    document.querySelectorAll(".lang-toggle button").forEach((b) => {
      b.addEventListener("click", () => setLang(b.dataset.lang));
    });
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (!store.get("aag-theme")) updateThemeIcon();
      });

    render(initLang());
    initGraph();
  });
})();
