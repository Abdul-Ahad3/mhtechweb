import type { Project, ProjectCategory } from "@/types";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: "automotive", title: "Automotive" },
  { id: "biomedical", title: "Biomedical" },
  { id: "edge-ai", title: "Edge AI and Computer Vision" },
  { id: "embedded", title: "Embedded Systems" },
  { id: "app-dev", title: "Software and App Development" },
];

export const hasRealImage = (src?: string) =>
  Boolean(src) && !src!.includes("REPLACE_WITH");

export const PROJECTS: Project[] = [
  {
    slug: "smartpti",
    name: "SmartPTI Truck Inspection System",
    category: "automotive",
    description:
      "A dedicated embedded vehicle-inspection system that brings tyre-pressure, brake-test, location, and connectivity checks together on one microcontroller-based platform.",
    tags: ["Embedded firmware", "BLE sensors", "GPS & LTE"],
    image: {
      src: "/truck-inspection/ti-1.png",
      alt: "SmartPTI truck inspection system",
    },
    slides: [
      {
        src: "/truck-inspection/ti-1.png",
        alt: "SmartPTI truck inspection system",
      }
    ],
    detail: {
      overview: [
        "Vehicle inspections involve several separate checks, such as tyre pressure, brake performance, and connectivity. SmartPTI brings these functions into a single dedicated embedded device, so an inspection can be run, recorded, and reviewed from one unit.",
        "It is a purpose-built embedded system with its own display and physical controls, rather than a phone application.",
      ],
      approach: [
        "The system is built around a microcontroller-based hardware platform with a TFT display and physical buttons. Bluetooth Low Energy tyre-pressure sensors, GPS, LTE connectivity checks, and brake-test sensors feed into the controller, and results are logged to an SD card.",
        "The firmware manages inspection workflows, sensor readings, connectivity status, data logging, and fault conditions.",
      ],
      capabilities: [
        "Inspection workflows operated from a TFT display and physical buttons",
        "Wireless tyre-pressure readings from BLE sensors",
        "Brake-test sensor input",
        "GPS positioning",
        "LTE connectivity checks",
        "SD-card data logging",
        "Fault and connectivity status handling",
      ],
      technologies: [
        "Microcontroller platform",
        "Embedded firmware",
        "TFT display",
        "Bluetooth Low Energy",
        "GPS",
        "LTE",
        "SD-card storage",
        "Custom PCB",
      ],
      status:
        "The engineering work includes firmware testing on a development board and preparation of a custom PCB.",
    },
  },
  {
    slug: "audio-stimulator",
    name: "Smart Wearable & Audio Stimulation System",
    category: "biomedical",
    description:
      "An integrated wearable-sensing and stimulation project combining a sensor wearable, a programmable stimulation device, and a companion application.",
    tags: ["Wearable sensing", "Bluetooth LE", "Companion app"],
    image: {
      src: "/audio-stimulator/mp-1.png",
      alt: "Smart wearable and stimulation system",
    },
    slides: [
      {
        src: "/audio-stimulator/mp-1.png",
        alt: "Smart wearable and stimulation system",
      },
      {
        src: "/audio-stimulator/mp-2.jpg",
        alt: "Smart wearable and stimulation system",
      },
      {
        src: "/audio-stimulator/mp-3.jpg",
        alt: "Smart wearable and stimulation system",
      },
    ],
    detail: {
      overview: [
        "The project brings together three connected parts: a wearable that measures physiological and activity-related signals, a stimulation device with adjustable parameters, and a companion application that ties the data and controls together.",
        "It is presented here as an integrated hardware-and-software engineering project.",
      ],
      approach: [
        "The wearable incorporates sensors for PPG, heart rate and heart-rate variability, inertial motion, electrodermal activity, and temperature. The system explores activity and sleep analysis, supports Bluetooth Low Energy connectivity, and covers the collection and visualization of sensor data.",
        "The stimulation device supports programmable electrical-stimulation parameters and waveforms, with an OLED display and skin-conductance monitoring, and can be controlled through the application.",
        "The companion application supports data synchronization, session records, historical information, and trends.",
      ],
      capabilities: [
        "Multi-sensor wearable: PPG, heart rate and heart-rate variability, inertial motion, electrodermal activity, and temperature",
        "Exploration of activity and sleep analysis",
        "Bluetooth Low Energy connectivity",
        "Programmable stimulation parameters and waveforms",
        "OLED display and skin-conductance monitoring on the stimulation device",
        "App-based control of the stimulation device",
        "Data synchronization, session records, history, and trends in the companion app",
      ],
      technologies: [
        "PPG sensing",
        "Inertial sensors",
        "Electrodermal activity sensing",
        "Temperature sensing",
        "Bluetooth Low Energy",
        "OLED display",
        "Mobile companion application",
      ],
      status:
        "This page describes the engineering work only. It makes no claims about clinical effectiveness, diagnosis, or medical validation.",
    },
  },
  {
    slug: "mobile-anpr",
    name: "Mobile ANPR",
    category: "edge-ai",
    description:
      "A computer-vision system that recognizes vehicle number plates automatically and presents results through a mobile interface.",
    tags: ["Computer vision", "Edge AI", "Mobile app"],
    image: {
      src: "/mobile-anpr/ma-1.png",
      alt: "Mobile ANPR system",
    },
    slides: [
      {
        src: "/mobile-anpr/ma-1.png",
        alt: "Mobile ANPR system",
      },
      {
        src: "/mobile-anpr/ma-2.jpg",
        alt: "Mobile ANPR system",
      },
    ],
    detail: {
      overview: [
        "Automatic number-plate recognition (ANPR) uses computer vision to read vehicle plates from camera images. Reading plates automatically supports vehicle identification and monitoring without relying on manual transcription.",
      ],
      approach: [
        "This project combines AI-based number-plate recognition with a mobile application interface. The documented work covers plate recognition, vehicle identification, and vehicle-related activity and vehicle-of-interest functionality.",
        "The project also relates to edge-AI deployment and embedded computing. Edge AI means running recognition models on local, embedded compute hardware.",
      ],
      capabilities: [
        "Automatic number-plate recognition",
        "Vehicle identification",
        "Mobile application interface",
        "Vehicle activity and vehicle-of-interest functionality",
      ],
      technologies: [
        "Computer vision",
        "AI-based recognition",
        "Mobile application",
        "Edge AI",
        "Embedded computing",
      ],
    },
  },
  {
    slug: "ai-crowd-analytics",
    name: "AI Crowd Analytics",
    category: "edge-ai",
    description:
      "An AI-powered system intended to turn camera views of exhibition-style environments into insight about visitor movement and engagement.",
    tags: ["Computer vision", "Edge AI", "Analytics"],
    image: {
      src: "/crowd-analytics/ca-1.jpg",
      alt: "AI crowd analytics system",
    },
    slides: [
      {
        src: "/crowd-analytics/ca-1.jpg",
        alt: "AI crowd analytics system",
      },
      {
        src: "/crowd-analytics/ca-2.jpg",
        alt: "AI crowd analytics system",
      },
    ],
    detail: {
      overview: [
        "In environments such as exhibitions, understanding how visitors move and engage is valuable for planning and evaluating the space. AI Crowd Analytics is designed to convert visual activity into usable engagement and movement insight.",
      ],
      approach: [
        "The system is designed to analyze visual activity to produce booth visits, visitor engagement, dwell time, movement patterns, and zone activity, presented through dashboards and reports.",
        "The project material also references edge-AI processing and NVIDIA Jetson hardware.",
      ],
      capabilities: [
        "Booth visits",
        "Visitor engagement",
        "Dwell time",
        "Movement patterns",
        "Zone activity",
        "Dashboards",
        "Reports",
      ],
      technologies: [
        "Computer vision",
        "Edge AI",
        "NVIDIA Jetson",
        "Analytics dashboards and reports",
      ],
      status: "The analytics described reflect the intended scope of the system.",
    },
  },
  {
    slug: "rtta",
    name: "RTTA: Offline and Calling Real-Time Translator",
    category: "app-dev",
    description:
      "An embedded speech-translation device designed to translate spoken language locally, without depending on cloud connectivity.",
    tags: ["NVIDIA Jetson", "Speech translation", "On-device"],
    image: {
      src: "/rtta/rtta-1.jpg",
      alt: "RTTA offline real-time translator",
    },
    slides: [
      {
        src: "/rtta/rtta-1.jpg",
        alt: "RTTA offline real-time translator",
      },
    ],
    detail: {
      overview: [
        "RTTA is designed to support natural, low-latency spoken communication across languages while keeping processing local. Because translation runs on the device, it does not depend on cloud connectivity.",
      ],
      approach: [
        "The hardware combines an NVIDIA Jetson platform, microphones, audio amplification, a speaker, and embedded firmware. The microphones and amplifier handle sound in and out, while the Jetson platform runs the on-device pipeline.",
        "That pipeline combines speech recognition, multilingual translation, and text-to-speech output, so the device handles each step from spoken input to spoken translation.",
      ],
      capabilities: [
        "Local speech recognition",
        "Multilingual translation",
        "Text-to-speech output",
        "Operation without cloud connectivity",
        "Embedded audio hardware: microphones, amplification, and speaker",
      ],
      technologies: [
        "NVIDIA Jetson",
        "Microphones and audio amplification",
        "Speaker output",
        "Embedded firmware",
        "Speech recognition",
        "Multilingual translation",
        "Text-to-speech",
      ],
    },
  },
  {
    slug: "cradle-ai",
    name: "Cradle AI",
    category: "app-dev",
    description:
      "An enterprise AI and retrieval-augmented generation platform designed around governance, controlled access, and traceability.",
    tags: ["Enterprise AI", "RAG", "Governance"],
    image: {
      src: "/cradle-ai/cai-4.jpg",
      alt: "Cradle AI platform",
    },
    slides: [
      {
        src: "/cradle-ai/cai-1.jpg",
        alt: "Cradle AI platform",
      },
      {
        src: "/cradle-ai/cai-2.jpg",
        alt: "Cradle AI platform",
      },
      {
        src: "/cradle-ai/cai-3.jpg",
        alt: "Cradle AI platform",
      },
      {
        src: "/cradle-ai/cai-4.jpg",
        alt: "Cradle AI platform",
      },
      {
        src: "/cradle-ai/cai-5.jpg",
        alt: "Cradle AI platform",
      },
    ],
    detail: {
      overview: [
        "Cradle AI is an enterprise platform for retrieval-augmented generation (RAG), where AI answers draw on an organization's own documents. Governance, permissions, and traceability are central to its design, rather than treating it as an unrestricted chatbot.",
        "The project material references a Qwen-32B model deployed on a client's private AI server, with attention to data sovereignty and to African languages and cultural context.",
      ],
      approach: [
        "Documents are ingested and made available for AI-assisted retrieval, with role-based access controlling who can see what. Multilevel approval workflows, personally identifiable information (PII) detection, audit trails, analytics, and data lineage support oversight and traceability.",
      ],
      capabilities: [
        "Document ingestion",
        "AI-assisted retrieval",
        "Role-based access",
        "Multilevel approval workflows",
        "PII detection",
        "Audit trails",
        "Analytics",
        "Data lineage",
      ],
      technologies: [
        "Retrieval-augmented generation (RAG)",
        "Qwen-32B language model",
        "Private AI server deployment",
      ],
    },
  },
  {
    slug: "talkshift",
    name: "TalkShift",
    category: "app-dev",
    description:
      "An AI-powered keyboard app that helps users communicate across languages and improve their written responses.",
    tags: ["AI keyboard", "Translation", "Writing assistance"],
    image: {
      src: "/talkshift/ts-1.png",
      alt: "TalkShift keyboard app",
    },
    slides: [
      {
        src: "/talkshift/ts-1.png",
        alt: "TalkShift keyboard app",
      },
    ],
    detail: {
      overview: [
        "TalkShift is a communication and writing-assistance product delivered as an AI-powered keyboard application. It helps users translate what they write and refine how they respond.",
      ],
      capabilities: [
        "Real-time translation",
        "AI-assisted writing improvement",
        "Contextual smart replies",
        "Selectable response styles",
        "Feedback functionality",
      ],
    },
  },
  {
    slug: "fpl-transfer-optimisation",
    name: "FPL Transfer Optimisation",
    category: "app-dev",
    description:
      "A Python optimisation system that plans Fantasy Premier League transfers, chips, and lineups across multiple gameweeks.",
    tags: ["Python", "Google OR-Tools", "CP-SAT"],
    image: {
      src: "/fpl/fpl-1.jpg",
      alt: "FPL transfer optimisation system",
    },
    slides: [
      {
        src: "/fpl/fpl-1.jpg",
        alt: "FPL transfer optimisation system",
      },
      {
        src: "/fpl/fpl-2.jpg",
        alt: "FPL transfer optimisation system",
      },
      {
        src: "/fpl/fpl-3.jpg",
        alt: "FPL transfer optimisation system",
      },
      {
        src: "/fpl/fpl-4.jpg",
        alt: "FPL transfer optimisation system",
      },
      {
        src: "/fpl/fpl-5.jpg",
        alt: "FPL transfer optimisation system",
      },
    ],
    detail: {
      overview: [
        "Planning in Fantasy Premier League involves many linked choices: transfers, chip usage, lineups, and bench selection across several gameweeks. This project turns that planning into an optimisation problem that a solver can handle.",
      ],
      approach: [
        "The model is written in Python and uses Google OR-Tools with its CP-SAT constraint solver. It considers transfer decisions, chips, lineups, bench selection, and planning across multiple gameweeks, with the documented model covering horizons of up to six gameweeks.",
        "The supporting architecture references asynchronous jobs, Firebase Authentication and JWT, Google Cloud Run, Redis, Google Cloud Storage, and Docker. The engineering focus is expressing complex planning constraints in a form that can be solved efficiently, including work on solving time and memory usage.",
      ],
      capabilities: [
        "Transfer planning",
        "Chip planning",
        "Lineup and bench selection",
        "Planning across up to six gameweeks",
        "Asynchronous job processing",
      ],
      technologies: [
        "Python",
        "Google OR-Tools",
        "CP-SAT",
        "Firebase Authentication",
        "JWT",
        "Google Cloud Run",
        "Redis",
        "Google Cloud Storage",
        "Docker",
      ],
    },
  },
  {
    slug: "real-time-ai-vision",
    name: "Real-Time AI Vision",
    category: "edge-ai",
    description:
      "A real-time computer-vision project that links object detection and tracking to physical actuation in a Nintendo Switch-related application.",
    tags: ["Object detection", "Real-time control", "Hardware actuation"],
    image: {
      src: "/rtai-vision/rtai-1.png",
      alt: "Real-time AI vision system",
    },
    slides: [
      {
        src: "/rtai-vision/rtai-1.png",
        alt: "Real-time AI vision system",
      },
    ],
    detail: {
      overview: [
        "This project connects AI inference with real-time control. The system detects and tracks objects, applies prediction, and drives physical actuation in a Nintendo Switch-related application.",
      ],
      approach: [
        "Processing follows a detection, prediction, aiming, and actuation sequence. Detection uses YOLOv8 Nano running through ONNX Runtime. A microcontroller handles actuation, with UDP communication and multiplayer synchronization supporting the real-time behavior.",
      ],
      capabilities: [
        "Real-time object detection",
        "Object tracking and prediction",
        "Aiming and physical actuation",
        "Multiplayer synchronization",
      ],
      technologies: [
        "YOLOv8 Nano",
        "ONNX Runtime",
        "Microcontroller-based actuation",
        "UDP communication",
      ],
    },
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

export const getCategory = (id: ProjectCategory["id"]) =>
  PROJECT_CATEGORIES.find((c) => c.id === id);