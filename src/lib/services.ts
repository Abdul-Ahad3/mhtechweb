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
    cta: "Let's Design Your Hardware and PCB Projects Together",
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
    cta: "Discuss Your Embedded Firmware Project",
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
    cta: "Discuss Your Embedded Linux Project",
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
    cta: "Discuss Your Automation Project",
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
    cta: "Connect your IoT Devices and Systems With Us",
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
    cta: "Automate your DevOps and Cloud Workflows",
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
    cta: "Discuss Your AI & Computer Vision Project",
  },
  {
    id: "remote-debug",
    title: "Remote Engineering Support & Debugging",
    summary:
      "Expert remote engineering assistance for industrial automation, control systems, embedded technologies, and complex engineering installations. We help diagnose faults, troubleshoot existing systems, support commissioning, and optimize equipment alongside on-site technical teams.",
    short:
      "Remote troubleshooting, debugging, commissioning, and technical assistance for industrial and embedded systems.",
    technologies: [
      "PLC & HMI Debugging",
      "SCADA Systems",
      "Control Panel Troubleshooting",
      "System Commissioning",
      "Embedded Hardware & Firmware",
      "Industrial Communication",
      "Fault Diagnosis",
      "Remote Engineering Sessions",
    ],
    cta: "Schedule a Remote Support Session",
  },
  {
    id: "cad",
    title: "3D Enclosure & Mechanical Design",
    summary:
      "We design custom 3D enclosures and mechanical components for electronic devices, embedded systems, IoT products, and industrial applications. Our designs consider PCB integration, component placement, mounting, thermal management, assembly, and manufacturability.",
    short:
      "Custom 3D enclosures and mechanical designs for electronic, embedded, IoT, and industrial products.",
    technologies: [
      "Custom Electronic Enclosures",
      "3D CAD Modeling",
      "Mechanical Product Design",
      "PCB & Component Integration",
      "Industrial & IoT Housings",
      "3D-Printing-Ready Designs",
      "Design for Manufacturing",
      "Design for Assembly",
    ],
    cta: "Discuss Your Design",
  },
  {
    id: "consult",
    title: "Engineering Consultancy & Technical Audits",
    summary:
      "We help companies, startups, and engineering teams evaluate existing systems, overcome technical challenges, and make informed development decisions through architecture reviews, design assessments, technical audits, feasibility studies, and performance optimization.",
    short:
      "Technical assessments, engineering audits, feasibility studies, and expert guidance for complex projects.",
    technologies: [
      "Technical Project Assessments",
      "Hardware & PCB Reviews",
      "Firmware Design Reviews",
      "System Architecture Consulting",
      "Technology Consulting",
      "Product Feasibility Analysis",
      "Risk Analysis",
      "Performance & Reliability Optimization",
    ],
    cta: "Book an Engineering Consultation",
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
    cta: "Let's Make Your Web & Mobile Apps Together",
  },
];