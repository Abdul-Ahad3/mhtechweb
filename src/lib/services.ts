import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "hardware",
    title: "Hardware & PCB Design",
    summary:
      "We design and develop custom electronic hardware, from initial circuit concepts to fully functional prototypes. Services include schematic design, multilayer PCB layout, component selection, hardware integration, and testing.",
    short:
      "Custom electronic hardware, from circuit concepts to working prototypes.",
    technologies: [
      "Schematic Design",
      "PCB Layout",
      "Multilayer PCB",
      "Component Selection",
      "Hardware Prototyping",
      "Circuit Testing",
      "Hardware Validation",
    ],
  },
  {
    id: "firmware",
    title: "Embedded Firmware & RTOS",
    summary:
      "We develop reliable embedded firmware for microcontroller-based products, including real-time applications, hardware drivers, communication interfaces, and low-power systems.",
    short:
      "Reliable firmware for microcontroller-based products, from drivers to real-time applications.",
    technologies: [
      "STM32",
      "ESP32",
      "nRF",
      "FreeRTOS",
      "Zephyr",
      "Bare-Metal",
      "C/C++",
      "Device Drivers",
      "Communication Protocols",
    ],
  },
  {
    id: "linux",
    title: "Embedded Linux & BSP Development",
    summary:
      "We develop Linux-based embedded systems using ARM processors and System-on-Chip platforms. Services include custom Linux distributions, Board Support Packages (BSP), kernel configuration, device drivers, and hardware bring-up.",
    short:
      "Linux-based embedded systems on ARM processors and SoC platforms, including BSP development.",
    technologies: [
      "Embedded Linux",
      "Yocto",
      "Buildroot",
      "Linux Kernel",
      "BSP Development",
      "Device Drivers",
      "Rockchip",
      "NXP i.MX",
      "ARM SoCs",
    ],
  },
  {
    id: "automation",
    title: "Industrial Automation & Control Systems",
    summary:
      "We develop industrial automation solutions using PLCs, HMI interfaces, SCADA systems, and industrial communication protocols to improve machine control, monitoring, and manufacturing efficiency.",
    short:
      "PLC, HMI, and SCADA solutions that improve machine control and monitoring.",
    technologies: [
      "PLC Programming",
      "HMI Development",
      "SCADA",
      "Siemens PLC",
      "Modbus",
      "OPC UA",
      "Industrial Communication",
      "Machine Control",
    ],
  },
  {
    id: "iot",
    title: "IoT & Connected Systems",
    summary:
      "We build intelligent IoT solutions that connect sensors, electronic devices, and industrial equipment through secure wireless and wired networks, enabling remote monitoring, data collection, and cloud connectivity.",
    short:
      "Connected sensors, devices, and equipment with remote monitoring and cloud connectivity.",
    technologies: [
      "Internet of Things",
      "Industrial IoT",
      "BLE",
      "Wi-Fi",
      "LoRaWAN",
      "MQTT",
      "IoT Gateways",
      "Remote Monitoring",
      "OTA Updates",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps Automation",
    summary:
      "We streamline software and firmware development through automated CI/CD pipelines, cloud infrastructure, build systems, testing workflows, and reliable deployment processes.",
    short:
      "Automated CI/CD pipelines, build systems, and deployment for software and firmware.",
    technologies: [
      "Azure DevOps",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "CI/CD Pipelines",
      "Build Automation",
      "Automated Testing",
      "Cloud Deployment",
      "Release Engineering",
    ],
  },
  {
    id: "ai",
    title: "AI, Edge AI & Computer Vision",
    summary:
      "We develop intelligent AI solutions, including computer vision, edge AI, machine learning integration, and on-device inference for industrial, commercial, and embedded applications.",
    short:
      "Computer vision, edge AI, and on-device inference for industrial and embedded applications.",
    technologies: [
      "Artificial Intelligence",
      "Edge AI",
      "Computer Vision",
      "Object Detection",
      "LLM Integration",
      "ONNX",
      "TensorFlow Lite",
      "OpenCV",
      "Embedded Machine Learning",
    ],
  },
  {
    id: "web",
    title: "Web & Mobile Application Development",
    summary:
      "We design and develop modern web platforms, mobile applications, interactive dashboards, backend systems, and connected-device interfaces tailored to business and engineering requirements.",
    short:
      "Web platforms, mobile apps, dashboards, and backend systems for business and engineering needs.",
    technologies: [
      "Web Applications",
      "Mobile Applications",
      "Backend APIs",
      "Admin Dashboards",
      "Cloud Integration",
      "Database Systems",
      "Device Companion Apps",
    ],
  },
];