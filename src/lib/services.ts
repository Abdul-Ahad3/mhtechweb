import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "hardware",
    title: "Hardware & PCB Development",
    summary:
      "Custom electronics and circuit board design, developed alongside firmware and software so the whole device works together.",
    capabilities: [
      {
        title: "Custom hardware",
        description:
          "Hardware solutions for connected devices, paired with firmware for reliable connectivity.",
      },
      {
        title: "PCB design",
        description: "Circuit board design for connected devices.",
      },
      {
        title: "Hardware and software integration",
        description:
          "Hardware, firmware, and software developed to work together.",
      },
    ],
  },
  {
    id: "iot",
    title: "IoT & Embedded Systems",
    summary:
      "Connected devices that link the physical world to digital systems, from hardware and firmware to cloud integration.",
    capabilities: [
      {
        title: "Hardware and firmware",
        description:
          "Custom hardware and firmware that enable seamless device connectivity.",
      },
      {
        title: "Cloud integration and analytics",
        description:
          "Cloud infrastructure and data analytics that turn device data into insight.",
      },
      {
        title: "Industrial IoT",
        description:
          "Connected systems with real-time monitoring, predictive maintenance, and operational analytics.",
      },
      {
        title: "Smart home systems",
        description:
          "Home automation focused on comfort, security, and energy efficiency.",
      },
      {
        title: "Healthcare IoT",
        description:
          "Remote patient monitoring, medical device integration, and healthcare management systems.",
      },
      {
        title: "Smart city solutions",
        description:
          "Infrastructure systems for lighting, traffic, waste management, and public safety.",
      },
    ],
    technologies: [
      "Arduino",
      "Raspberry Pi",
      "ESP32/ESP8266",
      "MQTT",
      "Zigbee",
      "LoRaWAN",
      "Node-RED",
      "AWS IoT",
      "Azure IoT Hub",
      "TensorFlow Lite",
    ],
  },
  {
    id: "ai",
    title: "AI & Computer Vision",
    summary:
      "AI solutions that find patterns in your data and understand images and video.",
    capabilities: [
      {
        title: "Computer vision",
        description:
          "Image and video analysis for object detection, quality control, and more.",
      },
      {
        title: "Machine learning solutions",
        description:
          "Custom models that learn from your data to automate decisions and detect patterns.",
      },
      {
        title: "Predictive analytics",
        description:
          "Forecasting models that help you anticipate trends, behavior, and opportunities.",
      },
      {
        title: "Natural language processing",
        description:
          "Text analysis, sentiment analysis, and chatbots for better customer interactions.",
      },
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLTK",
      "OpenCV",
      "Keras",
      "Pandas",
      "CUDA",
      "AWS SageMaker",
      "Azure ML",
    ],
  },
  {
    id: "web",
    title: "Web Development",
    summary:
      "Responsive websites and web applications built with modern frameworks, designed to work well on every device.",
    capabilities: [
      {
        title: "Responsive websites",
        description:
          "Custom websites that adapt to all screen sizes and devices.",
      },
      {
        title: "Web applications",
        description:
          "Feature-rich applications that deliver desktop-like functionality through the browser.",
      },
      {
        title: "E-commerce solutions",
        description:
          "Online stores with secure payment processing, inventory management, and customer engagement features.",
      },
      {
        title: "Progressive web apps",
        description:
          "Solutions that combine the best of web and mobile apps, including offline capabilities.",
      },
    ],
    technologies: [
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "AWS/Azure",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    summary:
      "Native mobile apps and companion apps, designed for performance and a smooth user experience.",
    capabilities: [
      {
        title: "Native iPhone and iPad apps",
        description:
          "Custom applications built with Swift and SwiftUI for performance and user experience.",
      },
      {
        title: "Apple Watch companion apps",
        description:
          "Focused, convenient apps that extend your product to the wrist.",
      },
      {
        title: "App Store submission",
        description:
          "Support through the App Store submission process and its guidelines.",
      },
      {
        title: "Maintenance and updates",
        description:
          "Ongoing support, performance optimization, and updates for new iOS features.",
      },
    ],
    technologies: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Core Data",
      "ARKit",
      "Core ML",
      "WidgetKit",
      "CloudKit",
      "Push Notifications",
      "In-App Purchases",
    ],
  },
  {
    id: "game",
    title: "Game Development",
    summary:
      "Cross-platform games and interactive experiences, from first concept to tested, polished gameplay.",
    capabilities: [
      {
        title: "Mobile games",
        description:
          "Games for iOS and Android with intuitive controls and optimized performance.",
      },
      {
        title: "PC and console games",
        description:
          "Immersive experiences for PC and major console platforms.",
      },
      {
        title: "AR/VR experiences",
        description:
          "Augmented and virtual reality games and interactive experiences.",
      },
      {
        title: "Multiplayer and social games",
        description:
          "Multiplayer frameworks with real-time interaction, leaderboards, and social features.",
      },
    ],
    technologies: [
      "Unity",
      "Unreal Engine",
      "C#",
      "C++",
      "ARKit",
      "ARCore",
      "PlayFab",
      "Photon",
      "WebGL",
      "Blender",
    ],
  },
];