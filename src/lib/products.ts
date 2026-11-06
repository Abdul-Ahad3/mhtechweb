import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    slug: "rtta",
    name: "ARIS TalkAI - Realtime Translation Ecosystem",
    description:
      "A real-time translation product combining an embedded offline translator device with ARIS Talk AI, a translated-calling application.",
    tags: ["Offline translation", "NVIDIA Jetson", "Translated calling"],
    image: {
      src: "/rtta/rtta-1.png",
      alt: "RTTA offline and calling real-time translator",
    },
    slides: [
      {
        src: "/rtta/rtta-1.png",
        alt: "RTTA offline and calling real-time translator",
      },
      {
        src: "/rtta/rtta-2.png",
        alt: "RTTA offline and calling real-time translator",
      },
      {
        src: "/rtta/rtta-3.png",
        alt: "RTTA offline and calling real-time translator",
      },
      {
        src: "/rtta/rtta-4.png",
        alt: "RTTA offline and calling real-time translator",
      },
    ],
    detail: {
      overview: [
        "RTTA is MHTechFusion's real-time translation product. It takes two forms: an embedded offline translator, and ARIS Talk AI, a translated-calling application.",
        "The offline translator is designed to support natural, low-latency spoken communication across languages while keeping processing local, without depending on cloud connectivity.",
      ],
      approach: [
        "The offline translator's hardware combines an NVIDIA Jetson platform, microphones, audio amplification, a speaker, and embedded firmware. The microphones and amplifier handle sound in and out, while the Jetson platform runs the on-device pipeline.",
        "That pipeline combines speech recognition, multilingual translation, and text-to-speech output, so the device handles each step from spoken input to spoken translation.",
      ],
      capabilities: [
        "Local speech recognition",
        "Multilingual translation",
        "Text-to-speech output",
        "Offline operation without cloud connectivity",
        "Translated calling through ARIS Talk AI",
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
    slug: "modular-sensor-platform",
    name: "Modular Sensor Platform",
    description:
      "A proposed modular hardware and software platform for research laboratories, combining interchangeable sensor interfaces, guided configuration, local data acquisition, and an offline AI assistant.",
    tags: [
      "Modular sensor hardware",
      "Embedded systems",
      "Offline AI",
      "Research data acquisition",
    ],
    image: {
      src: "/mod-sensor/ms-1.png",
      alt: "Modular Sensor Platform concept for laboratory sensor integration and data acquisition",
    },
    slides: [
      {
        src: "/mod-sensor/ms-1.png",
        alt: "Modular Sensor Platform baseboard and interchangeable sensor modules concept",
      },
    ],
    detail: {
      overview: [
        "The Modular Sensor Platform is a proposed hardware and software solution intended to simplify sensor integration and data acquisition in university and research laboratories. Researchers often need to connect sensors, configure acquisition parameters, integrate drivers, and build their own recording workflows before they can begin an experiment.",
        "The platform aims to bring these tasks together through a reusable hardware baseboard, interchangeable sensor modules, guided configuration, and local data recording. Its proposed offline AI assistant is designed to help researchers understand sensor documentation and configure supported hardware without depending on cloud-based AI services.",
      ],
      approach: [
        "The proposed hardware architecture combines a reusable baseboard with interchangeable sensor modules. Module metadata identifies supported sensors, channels, units, sampling limits, calibration information, and electrical requirements. Baseboard firmware reads this information, selects compatible supported drivers, and checks configurations against hardware limits.",
        "A companion application running on a local computer provides the experiment configuration and data-management interface. The proposed offline AI assistant runs on this computer rather than on the low-power baseboard. It can interpret private sensor documentation, explain configuration choices, and draft integration suggestions, while deterministic software checks enforce compatibility and electrical constraints.",
        "The intended workflow covers connecting sensors, configuring experiments, checking signal quality, recording measurements, and exporting datasets. Acquisition timestamps, synchronization accuracy, and reliable data capture are important engineering requirements that will need to be measured and validated.",
      ],
      capabilities: [
        "Reusable hardware baseboard with interchangeable sensor modules (proposed)",
        "Sensor identification through supported module metadata",
        "Compatibility checks for supported hardware and firmware profiles",
        "Sensor configuration using channels, units, sampling limits, and calibration information",
        "Local sensor-data acquisition and recording",
        "Experiment data export and reusable configurations",
        "Offline AI-assisted configuration and documentation analysis (under development)",
        "Private custom-sensor document import and guided integration (proposed)",
        "Configuration validation with safeguards against unsupported hardware settings",
      ],
      technologies: [
        "Embedded Microcontrollers",
        "Custom PCB Design",
        "Sensor Interfaces",
        "Embedded Firmware",
        "Sensor Drivers",
        "PPG",
        "IMU",
        "Bluetooth Low Energy",
        "USB",
        "Offline Large Language Models",
        "Local Document Processing",
        "Data Acquisition and Signal Analysis",
      ],
      status:
        "Pre-founding product concept. The proposed integrated hardware, software, and offline AI workflow remains under development and requires prototype integration, bench testing, pilot validation, and commercial assessment. Existing MHTechFusion experience in PCB development, embedded firmware, BLE, sensor integration, and data acquisition provides the engineering foundation for the product.",
    },
  },
  {
    slug: "talkshift",
    name: "TalkShift",
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
      {
        src: "/talkshift/ts-2.png",
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
];

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);