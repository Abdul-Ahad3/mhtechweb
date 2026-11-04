import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
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
  {
    slug: "rtta",
    name: "RTTA: Offline and Calling Realtime Translator (ARIS Talk AI)",
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
        src: "/rtta/rtta-2.jpg",
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
];

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);