"use client"
import { asset } from "@/lib/assets";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Linkedin,
  Brain,
  Code,
  Cloud,
  Database,
  ChevronDown,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Github,
  ExternalLink,
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Globe,
  FileText,
  Lightbulb,
  Download,
  Link,
  Star,
} from "lucide-react"



export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "education",
        "projects",
        "skills",
        "colleagues",
        "testimonials",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    technical: ["Prompt engineering & function/tool calling","Agentic workflows (LangGraph/LangChain)","Planning & tool routing","Fine-tuning/LoRA","Distillation/quantization (GGUF, bitsandbytes)","Context caching & batching","Python", "Swift", "Objective-C", "Django", "Bash"],
    aiml: ["PyTorch", "TensorFlow", "Hugging Face Transformers", "OpenCV", "Stable Diffusion", "PoseNet","RAG pipelines (chunking, hybrid search)","Vector DBs (FAISS, pgvector, Pinecone, Weaviate)","Reranking (bge-reranker, ColBERT)", "Document loaders & indexing","Query expansion & multi-step retrieval","Hallucination/groundedness checks","Stable Diffusion/ControlNet","OpenCV & image pipelines","CLIP/BLIP/ViT","Pose/landmark estimation","Whisper/Speech-to-text",
    "Multimodal RAG",],
    cloud: ["AWS (EC2, Lambda, S3)", "Google Cloud Platform", "CI/CD Pipelines", "RESTful APIs","FastAPI/ASGI, gRPC","vLLM/ONNX/TensorRT-LLM serving","Ray/Modal/Azure/GCP deploy","Docker, Terraform, Helm","CI/CD (GitHub Actions)","Feature flags & canary releases",],
    tools: ["Google Analytics","Offline/online evals (accuracy, groundedness)","A/B testing, regression suites","Tracing/telemetry (LangSmith, Phoenix)","Prompt injection/PII mitigation (OWASP LLM)","Policy/guardrails & safety filters","Cost/latency profiling & caching (Redis)",],
    soft: ["Team Leadership", "Remote Collaboration", "Technical Training", "Communication"],
  }

  const researchExperiences = [
    {
      title: "Master's Researcher, Computer Engineering",
      organization: "Gachon University, South Korea",
      period: "Mar 2025 – Present",
      type: "research",
      description: [
        "Conducting research on LLM Security with focus on adversarial robustness and safe deployment",
        "Investigating privacy-aware guardrails for generative models under resource-constrained settings",
        "Exploring cloud-scalable AI architectures with emphasis on security and privacy",
        "Contributing to cutting-edge research in AI security, privacy, and ethical AI deployment",
      ],
      papers: ["LLM Security Framework (In Progress)", "Privacy-Aware AI Architectures (Submitted)"],
      projects: ["Adversarial Robustness Evaluation Tool", "Cloud-Scalable Security Framework"],
      links: [
        { name: "Gachon University", url: "https://www.gachon.ac.kr/kor/index.jsp" },
        { name: "Lab website", url: "https://ai-security.github.io/professor_main_e.htm" },
      ],
    },
    {
      title: "FinTech Research Collaborator",
      organization: "University of East London (with Dr. Fahimeh Jafari)",
      period: "Jan 2024 – Present",
      type: "research",
      description: [
        "Contributing to AI-driven sustainability frameworks in financial systems, aligned with ESG and SDG goals",
        "Authored research paper on PTSD detection using NLP techniques, achieving 97.56% accuracy",
        "Focusing on risk mitigation in AI models for credit scoring, fraud detection, and ethical automation",
        "ML-based PTSD prediction through textual data analysis in healthcare systems",
      ],
      papers: ["PTSD Detection Using NLP (Published)", "AI-Driven Sustainability in FinTech (Under Review)"],
      projects: ["PTSD Prediction Model", "Sustainable FinTech Framework"],
      links: [
        { name: "University of East London", url: "https://www.uel.ac.uk/" },
        { name: "Dr. Fahimeh Jafari", url: "https://www.uel.ac.uk/about-uel/staff/fahimeh-jafari" },
        { name: "GitHub Profile", url: "https://github.com/Azka1212" },
      ],
    },
    {
      title: "Research and Development Intern",
      organization: "Bio-AI Lab, Tromsø, Norway",
      period: "Mar 2024 – Present",
      type: "research",
      description: [
        "Writing comprehensive review paper on Sustainable AI Approaches for Edge Devices",
        "Conducting practical research on energy-efficient AI techniques and low-power algorithms",
        "Collaborating with international teams to evaluate environmental sustainability in AI",
        "Implementing sustainable AI approaches to reduce energy consumption in edge computing",
      ],
      papers: [
        "Sustainable AI Approaches for Edge Devices (In Progress)",
        "Energy-Efficient AI for Environmental Sustainability (Under Review)",
      ],
      projects: ["Sustainable AI Evaluation Tool", "Edge Device Optimization Framework"],
      links: [
        { name: "Bio-AI Lab", url: "https://www.bioailab.org/" },
        { name: "University of Tromsø", url: "https://en.uit.no/" },
        { name: "GitHub Profile", url: "https://github.com/bioailab" },
      ],
    },
  ]

  const industryExperiences = [
    {
      title: "AI Developer",
      organization: "AIO (Stealth Mode AI Startup)",
      period: "May 2024 – Present",
      location: "Islamabad, Pakistan",
      type: "industry",
      description: [
        "Developed RAG-based AI assistant for real-time business data communication and analysis",
        "Built automated reputation management system with advanced sentiment analysis capabilities",
        "Annotated 20k+ reviews to train aspect-based review analyzer with high accuracy",
        "Optimized Generative AI models (Phi-3, GPT-4.0) reducing operational costs by 60%",
        "Created speech-to-speech reservation system using NLP and speech recognition",
        "Developed AI-powered software for automated business marketing and customer engagement",
        "Built text-to-text Generative AI applications using GPT-3.5 for multiple domains",
        "Created Django-based RESTful API endpoints for 9 different AI-powered modules",
        "Developed multi-specialty medical chatbot with API integration for healthcare applications",
      ],
      achievements: ["60% cost reduction", "20k+ reviews processed", "9 API modules", "Real-time monitoring system"],
      links: [{ name: "Company Website", url: "#" }],
    },
    {
      title: "Executive iOS App Developer",
      organization: "FITFLEX",
      period: "Dec 2023 – Mar 2024",
      location: "Islamabad, Pakistan",
      type: "industry",
      description: [
        "Developed robust iOS applications (Dialer & Messenger) using Swift and Objective-C",
        "Created ML-based message classifier using LSTM, increasing accuracy by 70%",
        "Led AdTech initiative to predict user call behavior for targeted advertising optimization",
        "Researched CDR data usage for predicting user call patterns and marketing insights",
      ],
      achievements: ["70% accuracy improvement", "iOS app launch", "AdTech optimization", "LSTM implementation"],
      links: [{ name: "FITFLEX", url: "#" }],
    },
    {
      title: "Machine Learning Tutor",
      organization: "Teeny Coders",
      period: "Feb 2023 – Present",
      location: "Lahore, Pakistan (Remote)",
      type: "industry",
      description: [
        "Designed and delivered comprehensive ML course outlines for international students",
        "Trained 50+ students worldwide with 95% course satisfaction rate",
        "Enhanced students' knowledge through engaging practical content and hands-on projects",
        "Created interactive learning materials and assessment frameworks",
      ],
      achievements: ["50+ students trained", "95% satisfaction rate", "International reach", "Curriculum development"],
      links: [{ name: "Teeny Coders", url: "https://www.teenycoders.com/" }],
    },
  ]

  const internships = [
    {
      title: "Python Intern – Audio Forensics",
      organization: "National Cybercrime Forensics Lab, Air University",
      period: "Jun 2022 – Sep 2022",
      location: "Islamabad, Pakistan",
      description: [
        "Built ML models for rare event classification in audio data, achieving 90% accuracy",
        "Created and annotated a custom audio dataset for forensic analysis",
        "Developed a web-based application for audio forensics and analysis",
      ],
      links: [{ name: "Air University", url: "https://www.au.edu.pk/" }],
    },
    {
      title: "iOS Developer Intern",
      organization: "Switch Communications",
      period: "Sep 2023 – Nov 2023",
      location: "Islamabad, Pakistan",
      description: [
        "Developed and deployed iOS apps with integrated ML features for enhanced user experience",
        "Spearheaded app design with high user engagement focus",
        "Implemented machine learning capabilities within mobile applications",
      ],
      links: [{ name: "Switch Communications", url: "#" }],
    },
    {
      title: "Innovation Consultant Intern",
      organization: "GlobalShala, India",
      period: "Jun 2022 – Jul 2022",
      location: "Remote",
      description: [
        "Worked on startup innovation strategies with focus on experimentation and risk analysis",
        "Contributed to entrepreneurship projects through strategic planning and analytics",
      ],
      links: [{ name: "GlobalShala", url: "https://globalshala.com/" }],
    },
    {
      title: "M-Labs Fellow – Game Development",
      organization: "Mindstorm Studios, Lahore, Pakistan",
      period: "Jul 2021 – Sep 2021",
      location: "Lahore, Pakistan",
      description: [
        "Developed a hyper-casual Unity game 'Rob it All' in a multidisciplinary team",
        "Trained in 3D modeling, Unity, Blender, and gaming pipeline fundamentals",
      ],
      links: [{ name: "Mindstorm Studios", url: "https://mindstormstudios.com/" }],
    },
  ]

  const fellowships = [
    {
      title: "MENA Machine Learning Winter School 2025",
      organization: "Qatar Computing Research Institute (QCRI)",
      period: "Feb 2025",
      location: "Doha, Qatar",
      description: [
        "Participated in technical workshops and lectures from leading ML researchers across MENA",
        "Topics included Responsible AI, LLMs, and Federated Learning",
      ],
      links: [{ name: "QCRI", url: "https://www.hbku.edu.qa/en/qcri" }],
    },
    {
      title: "FYP Accelerator Fellow",
      organization: "10Pearls Pakistan",
      period: "Oct 2022 – Jun 2023",
      location: "Islamabad, Pakistan",
      description: [
        "Selected for a competitive program bridging academia and industry through mentorship",
        "Worked on a machine learning-based final year project under supervision of senior engineers",
      ],
      links: [{ name: "10Pearls", url: "https://10pearls.com/" }],
    },
    {
      title: "Graduate Trainee (AI Track)",
      organization: "Dawlance (Arçelik Group)",
      period: "Jun 2022 – Sep 2023",
      location: "Karachi, Pakistan",
      description: [
        "Completed intensive training sessions in career development and applied AI",
        "Collaborated on a real-world ML project under industry mentorship",
      ],
      links: [{ name: "Dawlance", url: "https://www.dawlance.com.pk/" }],
    },
  ]

  const projects = [
    {
      title: "GPT-4 Medical Bot",
      description:
        "Context-aware healthcare assistant using large language models. FastAPI-powered AI chatbot delivering expert responses across cardiology, psychiatry, and dentistry using specialty-specific prompt templates.",
      tech: ["GPT-4", "FastAPI", "Medical AI", "Context-Aware Systems"],
      github: "https://github.com/Azka1212/BOT",
      image: "/images/medical-bot.jpeg",
    },
    {
      title: "Skin Treatment Visualizer",
      description:
        "A Stable Diffusion-based simulation of cosmetic effects on facial images. Web-based tool simulating aesthetic treatments (e.g., Botox, fillers) on uploaded images. Users can visualize cosmetic outcomes in real time.",
      tech: ["Stable Diffusion", "Computer Vision", "Web Development", "Image Processing"],
      github: "https://github.com/Azka1212/Skin-Treatment-Visualizer-Using-Stable-Diffusion",
      image: "/images/skin.png",
    },
    {
      title: "PTSD Prediction Model",
      description:
        "Achieved 97.56% accuracy using NLP techniques on clinical text data. Built a text-based neural model to detect PTSD from patient records, contributing to mental health diagnosis and early intervention.",
      tech: ["Neural Networks", "NLP", "Healthcare AI", "Clinical Data"],
      github: "https://github.com/Azka1212/PTSD-Prediction-Tool",
      image: "/images/PTSD.jpeg",
    },
    {
      title: "Restaurant Review Manager",
      description:
        "A sentiment analysis dashboard for restaurant reviews using text classification. System for review classification, sentiment analysis, and dashboard visualization with automated processing capabilities.",
      tech: ["NLP", "Sentiment Analysis", "Data Visualization", "Dashboard"],
      github: "https://github.com/Azka1212",
      image: "/images/review.jpeg",
    },
    {
      title: "RAG-based Restaurant Chatbot",
      description:
        "Retrieval-augmented chatbot for restaurant owners to interact with business data, generate reports, and analyze sales. Built for US market with comprehensive business intelligence features.",
      tech: ["RAG", "Business Intelligence", "Data Analytics", "Chatbot"],
      github: "https://github.com/Azka1212",
      image: "/images/R-chatbot.jpeg",
    },
    {
      title: "Code Generator & Optimizer",
      description:
        "An AI-powered tool that generates, refactors, and optimizes code snippets for multiple languages. Developer productivity API offering endpoints for code generation, bug fixing, and explanation.",
      tech: ["GPT-4", "Code Generation", "Developer Tools", "Multi-language"],
      github: "https://github.com/Azka1212/CodeAI",
      image: "/images/code.jpeg",
    },
  ]

  const certifications = [
    "Prompt Engineering for ChatGPT",
    "Google Advanced Data Analytics",
    "Google Analytics Certification",
    "Supervised & Unsupervised ML by Andrew Ng",
  ]

  const colleagueImages = [
    {
      src: "/images/bio.png",
      alt: "Research collaboration team in Norway",
      caption: "Bio-AI Lab Research Team, Tromsø, Norway",
      link: "https://www.bioailab.org/",
      description:
        "Collaborative research on sustainable AI approaches for edge devices with international teams at University of Tromsø.",
      images: [
        "/images/sus.jpeg",
        "/images/green.jpeg",
      ],
    },
    {
      src: "/images/Fintech.png",
      alt: "FinTech research collaboration with UK team",
      caption: "FinTech Research Collaboration, University of East London",
      link: "https://www.uel.ac.uk/",
      description:
        "AI-driven sustainability frameworks in financial systems with Dr. Fahimeh Jafari and research team.",
      images: [
        "/images/fin.png",
        "/images/finn.png",
      ],
    },
    {
      src: "/images/AIO-logo.png",
      alt: "AI development team at AIO startup",
      caption: "AI Development Team, AIO Startup",
      link: "#",
      description: "Cross-functional AI development team working on RAG-based systems and generative AI applications.",
      images: [
        "/images/AIO-meet.png",
        "/images/AIO-team.png",
      ],
    },
    {
      src: "/images/Mena-ml.png",
      alt: "Academic conference with international researchers",
      caption: "MENA ML Winter School 2025, Qatar",
      link: "https://www.hbku.edu.qa/en/qcri",
      description: "International machine learning conference with researchers from across MENA region at QCRI.",
      images: [
        "/images/Mena.png",
        "/images/Mena-con.png",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Dr. Fahimeh Jafari",
      role: "Senior Lecturer, University of East London",
      company: "University of East London",
      image: "/images/fahime.png",
      testimonial:
        "Azka has demonstrated exceptional research capabilities in our FinTech AI collaboration. Her work on PTSD detection using NLP techniques achieved remarkable 97.56% accuracy, showcasing her deep understanding of both technical implementation and real-world applications.",
      rating: 5,
    },
    {
      name: "Prof. Research Supervisor",
      role: "Research Director, Bio-AI Lab",
      company: "University of Tromsø, Norway",
      image: "/placeholder.svg?height=100&width=100&text=Prof.+Norway",
      testimonial:
        "Working with Azka on sustainable AI approaches has been incredibly productive. Her ability to bridge theoretical research with practical implementation, especially in edge computing environments, has contributed significantly to our publications.",
      rating: 5,
    },
    {
      name: "Senior Developer",
      role: "Lead AI Engineer",
      company: "AIO Startup",
      image: "/placeholder.svg?height=100&width=100&text=AIO+Lead",
      testimonial:
        "Azka's contribution to our AI development team has been outstanding. She successfully optimized our generative AI models, reducing operational costs by 60% while maintaining high performance. Her technical expertise in RAG systems is exceptional.",
      rating: 5,
    },
    {
      name: "Team Lead",
      role: "iOS Development Manager",
      company: "FITFLEX",
      image: "/placeholder.svg?height=100&width=100&text=FITFLEX+Lead",
      testimonial:
        "During her time with us, Azka developed robust iOS applications and created ML-based message classifiers that improved accuracy by 70%. Her leadership in AdTech initiatives and technical innovation made a significant impact on our projects.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-x-hidden relative">
      {/* Halo Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-white/10 via-blue-400/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-radial from-purple-400/10 via-indigo-400/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-gradient-radial from-cyan-400/10 via-blue-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300/40 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-purple-300/40 rounded-full animate-bounce opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
              Azka Ikramullah
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "education", label: "Education" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "colleagues", label: "Collaborations" },
                { id: "testimonials", label: "Testimonials" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-all duration-300 hover:text-white hover:scale-110 ${
                    activeSection === item.id
                      ? "text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>

        {/* Enhanced halo background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-white/10 via-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-400/10 via-indigo-400/5 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-cyan-400/10 via-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in-up">
              {/* Profile Image */}
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-white/20 via-blue-400/20 to-purple-400/20 p-1 hover:scale-110 transition-all duration-500 animate-float drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <div className="w-full h-full rounded-full bg-slate-900/80 flex items-center justify-center overflow-hidden border border-white/20">
                  <img
                    src={asset("/images/profile.jpeg")}
                    alt="Azka Ikramullah"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                Hi, I'm Azka Ikramullah
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-4 animate-fade-in-up animation-delay-500">
                <span className="font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  AI Engineer | Generative AI Specialist | Cloud ML Developer
                </span>
              </p>
              <p className="text-base md:text-lg text-slate-300 mb-8 animate-fade-in-up animation-delay-700">
                MSc Computer Engineering @ Gachon University | BS IT (1st Class Honors) @ Air University
              </p>
            </div>

            <div className="text-base md:text-lg lg:text-xl text-slate-200 mb-12 leading-relaxed animate-fade-in-up animation-delay-1000">
              <p className="mb-4">
                <strong>AI-first innovator</strong> passionate about creating real-world impact through cutting-edge{" "}
                <span className="text-blue-300 font-semibold drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                  machine learning
                </span>{" "}
                and{" "}
                <span className="text-purple-300 font-semibold drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">
                  generative AI(Agentic AI) solutions
                </span>
                .
              </p>
              <p className="mb-4">
                <strong>Research Focus:</strong> Utilizing AI-based research to innovate and contribute to the
                betterment of society through sustainable and ethical AI solutions.
              </p>
              <p className="mb-4">
                <strong>Development Philosophy:</strong> Building and automating cutting-edge AI systems that transform
                intelligent concepts into scalable, production-ready applications.
              </p>
              <p className="italic text-slate-300 border-l-4 border-white/30 pl-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                "I thrive at the intersection of AI research and practical implementation—bridging the gap between
                theoretical innovation and real-world deployment."
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-1500">
              <Button
                onClick={() => scrollToSection("experience")}
                size="lg"
                className="bg-gradient-to-r from-white/20 to-blue-400/20 hover:from-white/30 hover:to-blue-400/30 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 border border-white/20 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                View My Research
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-slate-200 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 bg-transparent backdrop-blur-sm drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              >
                <a href="mailto:azkaikramullah496@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-slate-200 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 bg-transparent backdrop-blur-sm drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              >
                <a href={asset("/images/Azka.pdf")} download="Azka_Ikramullah_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up animation-delay-2000">
              <a
                href="https://huggingface.co/azka45"
                className="text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Hugging Face"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.036 3C7.589 3 4 6.589 4 11.036S7.589 19.071 12.036 19.071 20.071 15.482 20.071 11.036 16.482 3 12.036 3zm0 14.857c-3.482 0-6.321-2.839-6.321-6.321S8.554 5.215 12.036 5.215s6.321 2.839 6.321 6.321-2.839 6.321-6.321 6.321z" />
                  <circle cx="9.321" cy="9.321" r="1.607" />
                  <circle cx="14.75" cy="9.321" r="1.607" />
                  <path d="M12.036 17.25c2.321 0 4.214-1.179 4.214-2.643 0-.179-.036-.357-.107-.536-.179.357-.536.643-.964.643-.643 0-1.179-.536-1.179-1.179s.536-1.179 1.179-1.179c.429 0 .786.286.964.643.071-.179.107-.357.107-.536 0-1.464-1.893-2.643-4.214-2.643s-4.214 1.179-4.214 2.643c0 .179.036.357.107.536.179-.357.536-.643.964-.643.643 0 1.179.536 1.179 1.179s-.536 1.179-1.179 1.179c-.429 0-.786-.286-.964-.643-.071.179-.107.357-.107.536 0 1.464 1.893 2.643 4.214 2.643z" />
                </svg>
              </a>
              <a
                href="https://github.com/Azka1212"
                className="text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/azka-ikramullah"
                className="text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.kaggle.com/azkaikramullah"
                className="text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Kaggle"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336" />
                </svg>
              </a>
            </div>

            {/* About Me Quick Info */}
            <div className="text-center animate-fade-in-up animation-delay-2200">
              <p className="text-slate-400 mb-2">
                Based in{" "}
                <span className="text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">Seoul, South Korea</span> |
                Origin:{" "}
                <span className="text-purple-300 drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">Islamabad, Pakistan</span>
              </p>
              <p className="text-slate-400">
                Research Areas:{" "}
                <span className="text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">Edge AI</span>,{" "}
                <span className="text-purple-300 drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">Diffusion Models</span>,
                and{" "}
                <span className="text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]">
                  Multimodal Architectures
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-slate-900/30 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                  I'm an{" "}
                  <span className="text-blue-300 font-semibold drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                    AI Developer
                  </span>{" "}
                  with 1st Class Honors in BS IT from Air University, Islamabad, currently pursuing a Master's degree in
                  Computer Engineering at Gachon University, South Korea.
                </p>
                <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                  My research focuses on{" "}
                  <span className="text-blue-300 font-semibold drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                    LLM Security
                  </span>
                  ,{" "}
                  <span className="text-purple-300 font-semibold drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">
                    FinTech Innovation
                  </span>
                  , and{" "}
                  <span className="text-cyan-300 font-semibold drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]">
                    Sustainable AI Systems
                  </span>
                  , with a passion for developing socially responsible and ethically aligned AI solutions.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed">
                  I've led cross-functional teams across 3+ international research collaborations and have contributed
                  to cutting-edge research in AI security, sustainability, and financial technology.
                </p>
              </div>

              <div className="space-y-6 animate-fade-in-right">
                <Card className="bg-slate-800/30 border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-5 h-5 text-blue-300 mr-2 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]" />
                      <span className="text-slate-200">Based in Seoul, South Korea</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-5 h-5 text-purple-300 mr-2 drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]" />
                      <span className="text-slate-200">AI Developer & Researcher</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="w-5 h-5 text-cyan-300 mr-2 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]" />
                      <span className="text-slate-200">Master's Student at Gachon University</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/10 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <div className="text-2xl font-bold text-blue-300 animate-counter drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                      50+
                    </div>
                    <div className="text-sm text-slate-400">Students Trained</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/10 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                    <div className="text-2xl font-bold text-purple-300 animate-counter drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">
                      97.56%
                    </div>
                    <div className="text-sm text-slate-400">Model Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-blue-400/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Professional Experience
            </h2>

            {/* Research Experience */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center">
                <BookOpen className="w-6 h-6 mr-2 text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]" />
                Research Experience
              </h3>
              <div className="space-y-6">
                {researchExperiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div>
                          <CardTitle className="text-lg md:text-xl text-blue-300 flex items-center drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                            <Target className="w-5 h-5 mr-2" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-slate-200">{exp.organization}</CardDescription>
                        </div>
                        <div className="text-sm text-slate-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm md:text-base text-slate-200 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-300 mb-2 flex items-center drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]">
                          <FileText className="w-4 h-4 mr-1" />
                          Resulted Papers:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.papers.map((paper, i) => (
                            <Badge
                              key={i}
                              className="bg-cyan-400/20 text-cyan-200 border-cyan-400/30 text-xs backdrop-blur-sm drop-shadow-[0_0_8px_rgba(103,232,249,0.3)]"
                            >
                              {paper}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">
                          <Lightbulb className="w-4 h-4 mr-1" />
                          Projects:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project, i) => (
                            <Badge
                              key={i}
                              className="bg-purple-400/20 text-purple-200 border-purple-400/30 text-xs backdrop-blur-sm drop-shadow-[0_0_8px_rgba(196,181,253,0.3)]"
                            >
                              {project}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                          <Link className="w-4 h-4 mr-1" />
                          Links:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-white hover:text-blue-200 transition-colors text-xs bg-white/10 px-2 py-1 rounded border border-white/20 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Industry Experience */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center">
                <Briefcase className="w-6 h-6 mr-2 text-purple-300 drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]" />
                Industry Experience
              </h3>
              <div className="space-y-6">
                {industryExperiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div>
                          <CardTitle className="text-lg md:text-xl text-purple-300 flex items-center drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">
                            <TrendingUp className="w-5 h-5 mr-2" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-slate-200">{exp.organization}</CardDescription>
                        </div>
                        <div className="text-sm text-slate-400">
                          <div className="flex items-center mb-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm md:text-base text-slate-200 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                          <Award className="w-4 h-4 mr-1" />
                          Key Achievements:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <Badge
                              key={i}
                              className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                          <Link className="w-4 h-4 mr-1" />
                          Links:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-white hover:text-blue-200 transition-colors text-xs bg-white/10 px-2 py-1 rounded border border-white/20 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center">
                <Users className="w-6 h-6 mr-2 text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]" />
                Internships
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {internships.map((internship, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]">
                        {internship.title}
                      </CardTitle>
                      <CardDescription className="text-slate-200">{internship.organization}</CardDescription>
                      <div className="text-sm text-slate-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {internship.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {internship.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-slate-200 mb-4">
                        {internship.description.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                          <Link className="w-4 h-4 mr-1" />
                          Links:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-white hover:text-blue-200 transition-colors text-xs bg-white/10 px-2 py-1 rounded border border-white/20 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Fellowships & Training */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center">
                <Globe className="w-6 h-6 mr-2 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                Fellowships & Training
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fellowships.map((fellowship, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                        {fellowship.title}
                      </CardTitle>
                      <CardDescription className="text-slate-200">{fellowship.organization}</CardDescription>
                      <div className="text-sm text-slate-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {fellowship.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {fellowship.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-slate-200 mb-4">
                        {fellowship.description.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2 flex items-center drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                          <Link className="w-4 h-4 mr-1" />
                          Links:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {fellowship.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-white hover:text-blue-200 transition-colors text-xs bg-white/10 px-2 py-1 rounded border border-white/20 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-900/30 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Education & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-left backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                    Master of Science in Computer Engineering
                  </CardTitle>
                  <CardDescription className="text-slate-200">Gachon University, South Korea</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-slate-400 mr-2" />
                    <span className="text-slate-200">Mar 2025 – Present</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-white mr-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">CGPA: 4.5/4.5</span>
                  </div>
                  <p className="text-slate-200 mb-4">
                    <strong>Focus Areas:</strong> Generative AI, ML Systems, Cloud Architecture
                  </p>
                  <p className="text-sm text-slate-400">
                    <strong>Ongoing Research:</strong> LLM Security, FinTech Innovation, Sustainable AI Systems
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-right backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300 drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">
                    BSc Information Technology
                  </CardTitle>
                  <CardDescription className="text-slate-200">Air University, Islamabad, Pakistan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-slate-400 mr-2" />
                    <span className="text-slate-200">May 2019 – May 2023</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Award className="w-4 h-4 text-white mr-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">1st Class Honors</span>
                  </div>
                  <p className="text-slate-200 mb-2">
                    <strong>Relevant Coursework:</strong> AI, Data Science, Software Engineering, ML
                  </p>
                  <p className="text-sm text-slate-400">
                    <strong>Final Year Project:</strong> PTSD Prediction using NLP (97.56% accuracy)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up backdrop-blur-sm border border-white/10 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Award className="w-5 h-5 text-white mr-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    <span className="text-slate-200">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 overflow-hidden animate-fade-in-up backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative group">
                    <img
                      src={asset(project.image || "/placeholder.svg")}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <a
                        href="https://github.com/Azka1212"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-900/80 p-2 rounded-full text-white hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-300 flex items-center justify-between drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                      {project.title}
                      <ExternalLink className="w-4 h-4 opacity-50" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-200 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-white/10 text-slate-200 hover:bg-white/20 transition-colors duration-200 border border-white/20 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href="https://github.com/Azka1212"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-300 hover:text-white transition-all duration-300 text-sm hover:scale-105 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/30 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                    <Code className="w-5 h-5 mr-2" />
                    Languages & Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-blue-400/20 text-blue-200 border-blue-400/30 hover:bg-blue-400/30 transition-colors duration-200 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(147,197,253,0.3)]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-200 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-300 drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]">
                    <Brain className="w-5 h-5 mr-2" />
                    AI/ML & Toolkits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.aiml.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-purple-400/20 text-purple-200 border-purple-400/30 hover:bg-purple-400/30 transition-colors duration-200 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(196,181,253,0.3)]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-400 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]">
                    <Cloud className="w-5 h-5 mr-2" />
                    Cloud & DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-cyan-400/20 text-cyan-200 border-cyan-400/30 hover:bg-cyan-400/30 transition-colors duration-200 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(103,232,249,0.3)]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-600 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <CardHeader>
                  <CardTitle className="flex items-center text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    <Database className="w-5 h-5 mr-2" />
                    Tools & Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-800 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-200 drop-shadow-[0_0_8px_rgba(191,219,254,0.5)]">
                    <Users className="w-5 h-5 mr-2" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-blue-400/20 text-blue-200 border-blue-400/30 hover:bg-blue-400/30 transition-colors duration-200 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(147,197,253,0.3)]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Colleagues & Collaborations Section */}
      <section id="colleagues" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/5 via-transparent to-transparent"></div>
        {/* Background Images */}
        <div className="absolute inset-0 opacity-10">
          {colleagueImages.map((image, index) => (
            <div
              key={index}
              className="absolute w-96 h-64 bg-cover bg-center rounded-lg blur-sm"
              style={{
                backgroundImage: `url(${asset(image.src)})`,
                top: `${20 + index * 15}%`,
                left: `${10 + index * 20}%`,
                transform: `rotate(${-10 + index * 5}deg)`,
                animationDelay: `${index * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Research Collaborations & Team Work
            </h2>

            <div className="text-center mb-12 animate-fade-in-up animation-delay-300">
              <p className="text-xl text-slate-200 leading-relaxed">
                Throughout my research journey, I've had the privilege of collaborating with talented researchers and
                developers across multiple international projects. These collaborations have shaped my understanding of
                global AI challenges and solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {colleagueImages.map((collaboration, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up backdrop-blur-sm cursor-pointer drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => window.open(collaboration.link, "_blank")}
                >
                  <div className="relative group overflow-hidden rounded-t-lg">
                    <img
                      src={asset(collaboration.src || "/placeholder.svg")}
                      alt={collaboration.alt}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-slate-900/80 p-2 rounded-full text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-blue-300 mb-2 hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                      {collaboration.caption}
                    </h3>
                    <p className="text-slate-200 text-sm mb-4">{collaboration.description}</p>

                    {/* Additional Images */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {collaboration.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative group">
                          <img
                            src={asset(img || "/placeholder.svg")}
                            alt={`${collaboration.caption} ${imgIndex + 1}`}
                            className="w-full h-24 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300 rounded"></div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-blue-300 text-sm drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Click to visit organization
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
              <p className="text-slate-400 italic">
                "Great achievements are born from great collaborations. These experiences have enriched my perspective
                on global AI research and development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-900/30 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              What Colleagues & Supervisors Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 animate-fade-in-up backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={asset(testimonial.image || "/placeholder.svg")}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4 border-2 border-white/20 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]">
                          {testimonial.name}
                        </h3>
                        <p className="text-slate-200 text-sm">{testimonial.role}</p>
                        <p className="text-slate-400 text-xs">{testimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-white fill-current drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                        />
                      ))}
                    </div>

                    <blockquote className="text-slate-200 italic leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Let's Connect
            </h2>

            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-200 mb-8 text-center animate-fade-in-up animation-delay-300">
                Ready to collaborate on innovative AI research or discuss opportunities? I'd love to hear from you!
              </p>

              <div className="space-y-6 animate-fade-in-up animation-delay-600">
                <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <CardContent className="p-6 flex items-center">
                    <Mail className="w-8 h-8 text-blue-300 mr-4 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:azkaikramullah496@gmail.com"
                        className="text-slate-200 hover:text-white transition-colors duration-300"
                      >
                        azkaikramullah496@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/20 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <CardContent className="p-6 flex items-center">
                    <Linkedin className="w-8 h-8 text-cyan-300 mr-4 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                      <a
                        href="https://linkedin.com/in/azka-ikramullah"
                        className="text-slate-200 hover:text-white transition-colors duration-300"
                      >
                        linkedin.com/in/azka-ikramullah
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 justify-center animate-fade-in-up animation-delay-900">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-white/20 to-blue-400/20 hover:from-white/30 hover:to-blue-400/30 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 border border-white/20 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  <a href="mailto:azkaikramullah496@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-slate-200 hover:bg-white/10 bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/25 backdrop-blur-sm drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                >
                  <a href="https://linkedin.com/in/azka-ikramullah" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>

              <div className="text-center mt-8 animate-fade-in-up animation-delay-1200">
                <p className="text-slate-400 mb-4">More About Me:</p>
                <div className="flex justify-center space-x-4 text-sm">
                  <a
                    href="https://devpost.com/azkaikramullah496"
                    className="text-blue-300 hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]"
                  >
                    Devpost Portfolio
                  </a>
                  <a
                    href="https://www.kaggle.com/azkaikramullah"
                    className="text-purple-300 hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(196,181,253,0.5)]"
                  >
                    Kaggle Competitions
                  </a>
                  <a
                    href="https://stackoverflow.com/users/18824165/azka-ikramullah"
                    className="text-cyan-300 hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]"
                  >
                    Stack Overflow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950/80 border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">© 2025 Azka Ikramullah. All rights reserved.</div>
            <div className="flex space-x-6">
              <a
                href="mailto:azkaikramullah496@gmail.com"
                className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/azka-ikramullah"
                className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Azka1212"
                className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.kaggle.com/azkaikramullah"
                className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Kaggle"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336" />
                </svg>
              </a>
              <a
                href="https://huggingface.co/azka45"
                className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Hugging Face"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.036 3C7.589 3 4 6.589 4 11.036S7.589 19.071 12.036 19.071 20.071 15.482 20.071 11.036 16.482 3 12.036 3zm0 14.857c-3.482 0-6.321-2.839-6.321-6.321S8.554 5.215 12.036 5.215s6.321 2.839 6.321 6.321-2.839 6.321-6.321 6.321z" />
                  <circle cx="9.321" cy="9.321" r="1.607" />
                  <circle cx="14.75" cy="9.321" r="1.607" />
                  <path d="M12.036 17.25c2.321 0 4.214-1.179 4.214-2.643 0-.179-.036-.357-.107-.536-.179.357-.536.643-.964.643-.643 0-1.179-.536-1.179-1.179s.536-1.179 1.179-1.179c.429 0 .786.286.964.643.071-.179.107-.357.107-.536 0-1.464-1.893-2.643-4.214-2.643s-4.214 1.179-4.214 2.643c0 .179.036.357.107.536.179-.357.536-.643.964-.643.643 0 1.179.536 1.179 1.179s-.536 1.179-1.179 1.179c-.429 0-.786-.286-.964-.643-.071.179-.107.357-.107.536 0 1.464 1.893 2.643 4.214 2.643z" />
                </svg>
              </a>
            </div>
          </div>
          <Separator className="my-4 bg-white/10" />
          <div className="text-center text-slate-500 text-sm mb-4">
            Built with Next.js, Tailwind CSS, and passion for AI innovation
          </div>
          <div className="text-center text-slate-400 italic">
            <p>"AI won't replace people—but people who use AI will replace those who don't."</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-900 {
          animation-delay: 900ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-1200 {
          animation-delay: 1200ms;
        }

        .animation-delay-1500 {
          animation-delay: 1500ms;
        }

        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        .animation-delay-2200 {
          animation-delay: 2200ms;
        }
      `}</style>
    </div>
  )
}
