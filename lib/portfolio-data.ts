export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string;
  repo?: string;
  private?: boolean;
};
export const projects: Project[] = [
  {
    "title": "When Reasoning Collapses",
    "category": "Research",
    "description": "Experiments on how language-model accuracy changes when a question requires more reasoning steps. The work compares direct answers and reasoning prompts on CLUTRR and ProofWriter.",
    "stack": "Python · Jupyter · LLM evaluation",
    "repo": "reasoning-code"
  },
  {
    "title": "SAC-Triad",
    "category": "Research",
    "description": "A research implementation for evaluating language-model jailbreak robustness with a reinforcement-learning controller, prompt rewriting, target-model calls, and a judging stage.",
    "stack": "Python · PyTorch · Typer · Ollama/model router",
    "repo": "SAC-Traid"
  },
  {
    "title": "Multi-Specialty Medical Chatbot",
    "category": "Generative AI",
    "description": "A specialty-aware medical chatbot API. A request contains a user identifier, a question, and a selected specialty; the response contains generated text.",
    "stack": "Python · FastAPI · Pydantic · OpenAI SDK",
    "repo": "BOT",
    "private": true
  },
  {
    "title": "AI Code Assistant",
    "category": "Generative AI",
    "description": "A Django REST API for generating, explaining, converting, and debugging code, with additional image and document input workflows.",
    "stack": "Python · Django REST Framework · OpenAI SDK · Pillow · Tesseract",
    "repo": "CodeAI",
    "private": true
  },
  {
    "title": "PTSD Prediction Tool",
    "category": "Research",
    "description": "A student project combining a Django interface with PTSD classification experiments. The committed model.py trains a classifier from structured CSV columns; the original project proposal also discussed text-based prediction.",
    "stack": "Python · Django · pandas · scikit-learn · imbalanced-learn",
    "repo": "PTSD-Prediction-Tool",
    "private": true
  },
  {
    "title": "SOP Generator",
    "category": "Generative AI",
    "description": "A Django application that drafts a statement of purpose from an applicant’s background, university choice, course, and reasons for applying. The source is distributed inside SOPProject2.zip.",
    "stack": "Python · Django · OpenAI SDK · PyMuPDF",
    "repo": "SOP-Generator",
    "private": true
  },
  {
    "title": "Creative Story Generator",
    "category": "Generative AI",
    "description": "An interactive command-line story generator that accepts the reader’s age, genre, and story idea. It supports short stories and chapter-by-chapter longer stories.",
    "stack": "Python · OpenAI SDK · requests",
    "repo": "Story-Generated",
    "private": true
  },
  {
    "title": "Quiz Generator",
    "category": "Generative AI",
    "description": "A placeholder repository for a planned quiz-generation application. The current tree does not contain a working quiz generator.",
    "stack": "Planned Django application",
    "repo": "Quiz-Generated",
    "private": true
  },
  {
    "title": "Generative AI REST APIs",
    "category": "Generative AI",
    "description": "An incomplete Django project snapshot associated with generative quiz APIs. It includes a management entry point, dependencies, and sample quiz output files.",
    "stack": "Python · Django · OpenAI SDK",
    "repo": "Django-RestfulAPI-Gen-AI",
    "private": true
  },
  {
    "title": "Skin Treatment Visualizer",
    "category": "Computer vision",
    "description": "A Streamlit image-to-image prototype that applies treatment-themed prompts to an uploaded facial image and lets users download the generated result.",
    "stack": "Python · Streamlit · PyTorch · Diffusers · Pillow",
    "repo": "Skin-Treatment-Visualizer-Using-Stable-Diffusion",
    "private": true
  },
  {
    "title": "Pose Detection API",
    "category": "Computer vision",
    "description": "A FastAPI service that estimates body keypoints and approximate measurements from front and side photographs plus a supplied height.",
    "stack": "Python · FastAPI · OpenCV DNN · NumPy · TensorFlow graph",
    "repo": "Pose_Project_API"
  },
  {
    "title": "Pose Detection Experiments",
    "category": "Computer vision",
    "description": "An OpenCV pose-estimation experiment that detects body keypoints and draws a skeleton on an image.",
    "stack": "Python · OpenCV DNN · NumPy",
    "repo": "Pose_Project_Week4",
    "private": true
  },
  {
    "title": "Swift iOS Projects",
    "category": "Mobile",
    "description": "A Swift/UIKit sample application implementing login and signup with Firebase Authentication.",
    "stack": "Swift · UIKit · Firebase Authentication · Xcode",
    "repo": "Swift-iOS"
  },
  {
    "title": "PTSD Mobile Application",
    "category": "Mobile",
    "description": "An Android student application with account screens, a questionnaire, result/suggestion screens, and score visualizations.",
    "stack": "Java · Android · Firebase Auth/Database · MPAndroidChart",
    "repo": "PTSD-Mobile-Application",
    "private": true
  },
  {
    "title": "iOS ML Classifier",
    "category": "Mobile",
    "description": "An NLP-based message classifier integrated into a Swift application.",
    "stack": "Swift · NLP · LSTM"
  },
  {
    "title": "Bug Detector Mobile App",
    "category": "Mobile",
    "description": "A mobile bug detection and suggestion project listed on my GitHub profile.",
    "stack": "Mobile · Machine learning"
  },
  {
    "title": "RAG Restaurant Assistant",
    "category": "Business AI",
    "description": "Natural-language access to business data, reporting, and restaurant sales analysis.",
    "stack": "RAG · Business intelligence"
  },
  {
    "title": "Restaurant Review Manager",
    "category": "Business AI",
    "description": "Review classification, sentiment analysis, and dashboard visualization.",
    "stack": "NLP · Sentiment analysis"
  },
  {
    "title": "AgriDirect",
    "category": "Business AI",
    "description": "A Streamlit workspace for turning voice or text briefings into reviewed agricultural offers and buyer requests, with history, matching, and dashboard views.",
    "stack": "Python 3.12 · Streamlit · PostgreSQL · Groq",
    "repo": "agridirect-mvp",
    "private": true
  },
  {
    "title": "Chapter Summarizer & Story Builder",
    "category": "Generative AI",
    "description": "Adaptive chapter summaries and personalized stories based on reader interests.",
    "stack": "ChatGPT · Text generation"
  },
  {
    "title": "Labyrinth Game",
    "category": "Learning & experiments",
    "description": "A Prolog pathfinding project that searches obstacle-filled grids using iterative deepening and visualizes the path.",
    "stack": "SWI-Prolog · Python · PySwip",
    "repo": "Labyrinth-Game-Using-Prolog"
  },
  {
    "title": "PTSD Final Year Project",
    "category": "Research",
    "description": "A Django hospital-management and PTSD-questionnaire student project with separate administrator, doctor, and patient flows.",
    "stack": "Python · Django · scikit-learn · pandas · SQLite",
    "repo": "FYP",
    "private": true
  },
  {
    "title": "Data Analytics",
    "category": "Learning & experiments",
    "description": "A repository containing a Power BI coursework report.",
    "stack": "Power BI Desktop",
    "repo": "DATA-Analytics",
    "private": true
  },
  {
    "title": "Machine Learning Projects",
    "category": "Learning & experiments",
    "description": "A collection of machine-learning notebooks covering audio anomalies, heart disease, breast cancer, stock prediction, and bank-related analysis.",
    "stack": "Python · Jupyter · scikit-learn · librosa · PyTorch/Keras · Streamlit",
    "repo": "ML-Projects",
    "private": true
  },
  {
    "title": "Python Learning Archive",
    "category": "Learning & experiments",
    "description": "A placeholder for Python learning material. The current repository contains only a README.",
    "stack": "Python learning notes",
    "repo": "Python",
    "private": true
  },
  {
    "title": "Applied Project Collection",
    "category": "Learning & experiments",
    "description": "A collection of smaller projects and learning notebooks for medical-image segmentation, specialty-aware chat, and serial/parallel text processing.",
    "stack": "Python · MONAI · PyTorch · Jupyter · multiprocessing",
    "repo": "Projects",
    "private": true
  },
  {
    "title": "Smart Bulb Control",
    "category": "Learning & experiments",
    "description": "A notebook comparing DQN, Double DQN, and PPO in a simulated smart-bulb environment.",
    "stack": "Python · PyTorch · NumPy · pandas · Matplotlib",
    "repo": "IOT",
    "private": true
  },
  {
    "title": "MENA ML Learning Materials",
    "category": "Learning & experiments",
    "description": "Learning notebooks for transformers, direct preference optimization, food-related tasks, and customer-value modeling.",
    "stack": "Python · Jupyter · PyTorch · Transformers · scikit-learn",
    "repo": "MENAML-content",
    "private": true
  },
  {
    "title": "AI Developer Portfolio",
    "category": "Web",
    "description": "A portfolio website organizing my background, experience, projects, research, and professional profiles.",
    "stack": "TypeScript · Next.js · React · CSS",
    "repo": "Azka-AI-Developer"
  }
];

export const socials = [
  {
    name: "GitHub",
    label: "Code & experiments",
    url: "https://github.com/Azka1212",
  },
  {
    name: "Google Scholar",
    label: "Publications & citations",
    url: "https://scholar.google.com/citations?user=NcI0lBAAAAAJ",
  },
  {
    name: "OpenReview",
    label: "Find my papers",
    url: "https://openreview.net/search?term=Azka%20Ikramullah",
  },
  {
    name: "LinkedIn",
    label: "Professional updates",
    url: "https://www.linkedin.com/in/azka-ikramullah/",
  },
  {
    name: "Hugging Face",
    label: "Models & community",
    url: "https://huggingface.co/azka45",
  },
  {
    name: "Kaggle",
    label: "Data & notebooks",
    url: "https://www.kaggle.com/azkaikramullah",
  },
  {
    name: "Devpost",
    label: "Projects & hackathons",
    url: "https://devpost.com/azkaikramullah496",
  },
  {
    name: "Stack Overflow",
    label: "Developer community",
    url: "https://stackoverflow.com/users/18824165/azka-ikramullah",
  },
];

export const papers = [
  {
    title: "When Reasoning Collapses",
    subtitle: "A Depth-Aware Probe into LLM Reasoning (Student Abstract)",
    venue: "AAAI 2026",
    status: "Published · Student abstract",
    description:
      "Testing how reasoning performance changes as tasks require more inference steps, with direct-answer and reasoning-prompt comparisons.",
    authors: "Azka Ikramullah, Abdul Majeed, Kyunghyun Lee, Seong Oun Hwang",
    links: [
      {
        label: "Paper",
        url: "https://ojs.aaai.org/index.php/AAAI/article/view/42223",
      },
      {
        label: "PDF",
        url: "https://ojs.aaai.org/index.php/AAAI/article/download/42223/46184",
      },
      {
        label: "GitHub code",
        url: "https://github.com/Azka1212/reasoning-code",
      },
      { label: "DOI", url: "https://doi.org/10.1609/aaai.v40i48.42223" },
    ],
  },
  {
    title: "SAC-Triad",
    subtitle:
      "Reinforcement Learning Framework for Evaluating LLM Jailbreak Robustness",
    venue: "AAAI TrustAgent 2026",
    status: "Workshop paper",
    description:
      "A tri-agent reinforcement learning framework for automated adversarial testing and safety evaluation of language models.",
    authors: "Azka Ikramullah, Kyunghyun Lee, Abdul Majeed, Seong Oun Hwang",
    links: [
      { label: "Paper PDF", url: "https://openreview.net/pdf?id=hk3qQRuDwA" },
      {
        label: "OpenReview",
        url: "https://openreview.net/forum?id=hk3qQRuDwA",
      },
      { label: "GitHub code", url: "https://github.com/Azka1212/SAC-Traid" },
    ],
  },
  {
    title: "More Thinking, Less Reading?",
    subtitle:
      "Separating Reasoning Utility from Evidence Selection in Factual QA",
    venue: "NeurIPS WiML 2026",
    status: "Accepted poster · As listed in CV",
    description:
      "Investigating when additional reasoning helps factual question answering, and when selecting better evidence matters more.",
    authors: "Azka Ikramullah, Seong Oun Hwang",
    links: [
      { label: "Paper PDF", url: "https://openreview.net/pdf?id=IBSVk8DrQ0" },
      {
        label: "OpenReview",
        url: "https://openreview.net/forum?id=IBSVk8DrQ0",
      },
    ],
  },
];

export const interests = [
  {
    title: "Reasoning & agentic AI",
    category: "LLMs + reinforcement learning",
    text: "How models plan, use tools, and maintain reliable reasoning as tasks grow more complex.",
    query: "LLM reasoning reinforcement learning agents",
  },
  {
    title: "Trustworthy AI",
    category: "Safety, security & privacy",
    text: "Adversarial robustness, jailbreak evaluation, differential privacy, and secure ML pipelines.",
    query: "large language model safety adversarial robustness privacy",
  },
  {
    title: "Multimodal intelligence",
    category: "Language, vision & generation",
    text: "Diffusion models, image–text systems, and the ways multiple modalities can work together.",
    query: "multimodal AI diffusion models",
  },
  {
    title: "Sustainable AI",
    category: "Efficient models & edge systems",
    text: "Energy-efficient models, carbon-aware training, and practical AI under resource constraints.",
    query: "sustainable AI energy efficient edge models",
  },
  {
    title: "AI for sustainable finance",
    category: "Fintech & real-world impact",
    text: "Applications in green finance, ESG analysis, and climate-resilient financial systems.",
    query: "artificial intelligence sustainable finance ESG",
  },
];
