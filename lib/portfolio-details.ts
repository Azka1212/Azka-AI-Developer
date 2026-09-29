// Details from the supplied CV, original portfolio, and linked GitHub READMEs.
export type ProjectDetail = {
  period?: string;
  context: string;
  work: string[];
  result?: string;
};
export const projectDetails: Record<string, ProjectDetail> = {
  "When Reasoning Collapses": {
    "period": "2026",
    "context": "Experiments on how language-model accuracy changes when a question requires more reasoning steps. The work compares direct answers and reasoning prompts on CLUTRR and ProofWriter.",
    "work": [
      "Compare five models at multiple reasoning depths.",
      "Inspect saved predictions, experiment configuration, and per-model plots.",
      "Reproduce the analysis from notebooks after configuring the required datasets and model access."
    ],
    "result": "Reasoning benefits at shallow depths weakened or reversed as tasks became more complex. The work appeared as an AAAI 2026 student abstract and was presented at WiML at ICML 2026."
  },
  "SAC-Triad": {
    "period": "2026",
    "context": "A research implementation for evaluating language-model jailbreak robustness with a reinforcement-learning controller, prompt rewriting, target-model calls, and a judging stage.",
    "work": [
      "Organize target models, the rewriter, judge, and reward calculation as separate components.",
      "Run experiments with Soft Actor-Critic and compare algorithm, reward, and component ablations.",
      "Includes implementations of several published attack baselines and run-aggregation utilities."
    ],
    "result": "Presented as workshop research at AAAI TrustAgent 2026. No new baseline scores were calculated during documentation review."
  },
  "Multi-Specialty Medical Chatbot": {
    "period": "2025",
    "context": "A specialty-aware medical chatbot API. A request contains a user identifier, a question, and a selected specialty; the response contains generated text.",
    "work": [
      "Expose POST /chat_specialty/ with user_id, user_input, and specialty fields.",
      "Use specialty-specific prompting for cardiology, psychiatry, and dentistry.",
      "Load and save per-user conversation history as JSON."
    ]
  },
  "AI Code Assistant": {
    "period": "2025",
    "context": "A Django REST API for generating, explaining, converting, and debugging code, with additional image and document input workflows.",
    "work": [
      "Seven routes cover prompt-to-code, design-to-code, image-to-solution, document-to-solution, language conversion, explanation, and bug detection.",
      "Process image uploads with Pillow and OCR through pytesseract.",
      "Record API-call metadata and provide a Postman collection with request examples."
    ]
  },
  "PTSD Prediction Tool": {
    "period": "2023",
    "context": "A student project combining a Django interface with PTSD classification experiments. The committed model.py trains a classifier from structured CSV columns; the original project proposal also discussed text-based prediction.",
    "work": [
      "Provide registration, login, questionnaire, patient, doctor, and result-related pages.",
      "Prepare tabular features using StandardScaler and SMOTE before logistic-regression training.",
      "Save a trained model and scaler for inference."
    ],
    "result": "Part of the Air University final-year project, supported by 10Pearls mentorship."
  },
  "SOP Generator": {
    "period": "2025",
    "context": "A Django application that drafts a statement of purpose from an applicant’s background, university choice, course, and reasons for applying. The source is distributed inside SOPProject2.zip.",
    "work": [
      "Provide account signup and login pages.",
      "Accept applicant information and an optional resume upload.",
      "Extract resume content with PyMuPDF and generate a draft using structured prompts.",
      "Store SOP requests and render the resulting draft."
    ]
  },
  "Creative Story Generator": {
    "context": "An interactive command-line story generator that accepts the reader’s age, genre, and story idea. It supports short stories and chapter-by-chapter longer stories.",
    "work": [
      "Prompt for age, genre, idea, and short/long format.",
      "Generate chapters and summaries using a language model.",
      "Ask whether to continue generating chapters in long-story mode."
    ]
  },
  "Quiz Generator": {
    "context": "A placeholder repository for a planned quiz-generation application. The current tree does not contain a working quiz generator.",
    "work": [
      "Names placeholders for an application, API, dependency file, and generated quiz outputs.",
      "The inspected files are empty apart from the original README title."
    ]
  },
  "Generative AI REST APIs": {
    "context": "An incomplete Django project snapshot associated with generative quiz APIs. It includes a management entry point, dependencies, and sample quiz output files.",
    "work": [
      "Retain the Django management entry point and dependency manifest.",
      "Include generated quiz examples in text and JSON form."
    ]
  },
  "Skin Treatment Visualizer": {
    "period": "2024",
    "context": "A Streamlit image-to-image prototype that applies treatment-themed prompts to an uploaded facial image and lets users download the generated result.",
    "work": [
      "Accept JPG, JPEG, and PNG images.",
      "Select one or more treatment themes and set intensity from 1 to 10.",
      "Run StableDiffusionImg2ImgPipeline and display before/after images.",
      "Download the generated PNG."
    ]
  },
  "Pose Detection API": {
    "context": "A FastAPI service that estimates body keypoints and approximate measurements from front and side photographs plus a supplied height.",
    "work": [
      "Accept multipart front_image, side_image, and height fields at POST /estimate-pose/.",
      "Load an OpenPose-style MobileNet graph through OpenCV DNN.",
      "Estimate measurement values and produce an annotated pose image."
    ]
  },
  "Pose Detection Experiments": {
    "context": "An OpenCV pose-estimation experiment that detects body keypoints and draws a skeleton on an image.",
    "work": [
      "Load the TensorFlow graph in model/graph_opt.pb.",
      "Detect keypoints and connect body parts into a skeleton.",
      "Display and save annotated output."
    ]
  },
  "Swift iOS Projects": {
    "context": "A Swift/UIKit sample application implementing login and signup with Firebase Authentication.",
    "work": [
      "Provide login, signup, and welcome screens.",
      "Connect account operations to Firebase Authentication.",
      "Include interface files, an Xcode project, and test targets."
    ]
  },
  "PTSD Mobile Application": {
    "context": "An Android student application with account screens, a questionnaire, result/suggestion screens, and score visualizations.",
    "work": [
      "Support signup, login, and account recovery screens.",
      "Present questionnaire items and collect selected responses.",
      "Display result-related screens and charts using MPAndroidChart."
    ]
  },
  "iOS ML Classifier": {
    "context": "Message classification work carried out during my mobile development experience.",
    "work": [
      "Developed a machine-learning message classifier using an LSTM model.",
      "Integrated message classification into Swift-based mobile application work."
    ],
    "result": "My resume reports a 70% improvement in prediction accuracy for the message-classification system."
  },
  "Bug Detector Mobile App": {
    "context": "A mobile project listed on my GitHub profile.",
    "work": [
      "Explored on-device bug detection and suggestions using a lightweight machine-learning model.",
      "A separate public repository is not linked on the profile."
    ]
  },
  "RAG Restaurant Assistant": {
    "context": "An assistant for restaurant owners to ask questions about their business data.",
    "work": [
      "Used retrieval-augmented generation: finding relevant business information before generating an answer.",
      "Supported natural-language queries, reporting, and sales analysis.",
      "Developed for restaurant business workflows in the US market."
    ]
  },
  "Restaurant Review Manager": {
    "context": "A system for organizing customer reviews and understanding recurring feedback.",
    "work": [
      "Classified reviews and analyzed sentiment.",
      "Built a dashboard for reviewing the results.",
      "Annotated more than 20,000 reviews for an aspect-based review analyzer, as described in the original portfolio."
    ]
  },
  "AgriDirect": {
    "context": "A Streamlit workspace for turning voice or text briefings into reviewed agricultural offers and buyer requests, with history, matching, and dashboard views.",
    "work": [
      "Transcribe a briefing, review it, and extract structured offer fields.",
      "Store offers and buyer requests with their source and reviewed versions.",
      "Browse records, review matching candidates, and view operational summaries.",
      "Import offers and prepare messages for manual sharing."
    ]
  },
  "Chapter Summarizer & Story Builder": {
    "context": "A text-generation project listed on my GitHub profile.",
    "work": [
      "Used ChatGPT to create chapter summaries.",
      "Adapted story generation to a reader’s stated interests."
    ]
  },
  "Labyrinth Game": {
    "context": "A Prolog pathfinding project that searches obstacle-filled grids using iterative deepening and visualizes the path.",
    "work": [
      "Define starts, goals, and obstacles in maze files.",
      "Run iterative deepening over multiple included maze sizes.",
      "Use a Python/PySwip entry point and Prolog utilities for search and display."
    ]
  },
  "PTSD Final Year Project": {
    "period": "2023",
    "context": "A Django hospital-management and PTSD-questionnaire student project with separate administrator, doctor, and patient flows.",
    "work": [
      "Manage patient and doctor records, approval flows, and appointments.",
      "Include questionnaire and result pages alongside hospital-management views.",
      "Train a logistic-regression model and save the model/scaler artifacts."
    ]
  },
  "Data Analytics": {
    "context": "A repository containing a Power BI coursework report.",
    "work": [
      "Store the Assignment3-Team3.pbix report for exploration in Power BI Desktop."
    ]
  },
  "Machine Learning Projects": {
    "context": "A collection of machine-learning notebooks covering audio anomalies, heart disease, breast cancer, stock prediction, and bank-related analysis.",
    "work": [
      "Extract audio features and compare classification approaches.",
      "Explore heart-disease and breast-cancer prediction notebooks.",
      "Include stock-prediction notebooks and a Streamlit app.",
      "Retain reports and experimental outputs beside the notebooks."
    ]
  },
  "Python Learning Archive": {
    "context": "A placeholder for Python learning material. The current repository contains only a README.",
    "work": [
      "Provide a named location for future Python notes and exercises."
    ]
  },
  "Applied Project Collection": {
    "context": "A collection of smaller projects and learning notebooks for medical-image segmentation, specialty-aware chat, and serial/parallel text processing.",
    "work": [
      "Include a BraTS segmentation notebook using MONAI and SegResNet.",
      "Store medical-chat scripts and notebooks.",
      "Compare serial and multiprocessing text-sanitization scripts.",
      "Keep an e-store project archive."
    ]
  },
  "Smart Bulb Control": {
    "context": "A notebook comparing DQN, Double DQN, and PPO in a simulated smart-bulb environment.",
    "work": [
      "Represent brightness, hue, saturation, power, and mode in the environment state.",
      "Train and compare value-based and policy-based agents.",
      "Plot episode rewards and training-related metrics."
    ],
    "result": "The notebook contains training and comparison plots. No new training runs were performed while documenting the repository."
  },
  "MENA ML Learning Materials": {
    "context": "Learning notebooks for transformers, direct preference optimization, food-related tasks, and customer-value modeling.",
    "work": [
      "Work through attention and transformer-building exercises.",
      "Explore direct preference optimization with GPT-2 and preference datasets.",
      "Experiment with customer lifetime-value models and model comparison.",
      "Retain workshop task archives and a food-related notebook."
    ]
  },
  "AI Developer Portfolio": {
    "context": "A portfolio website organizing my background, experience, projects, research, and professional profiles.",
    "work": [
      "Navigate between About, Experience, Projects, Research, Startups, and Contact.",
      "Search and filter projects and expand implementation details.",
      "Read publication summaries and follow paper, code, and profile links.",
      "Download the current CV and inspect research figures."
    ]
  }
};

export const experience = [
  {
    organization: "ISML Lab, Gachon University",
    role: "Graduate Research Assistant",
    dates: "Mar 2025 — Present",
    location: "Seongnam, South Korea",
    type: "Academia",
    summary:
      "I study reasoning failures and security weaknesses in large language models.",
    details: [
      "Developed evaluation frameworks for jailbreak robustness and multi-step reasoning.",
      "Conduct empirical studies of adversarial behavior and generative AI security.",
      "Explore multimodal systems, reinforcement learning for alignment, and agent-based AI.",
      "Contribute to a Korean government-funded BK21 research project.",
    ],
    url: "https://ai-security.github.io/professor_main_e.htm",
  },
  {
    organization: "AIO App Inc.",
    role: "AI Process Automation Engineer",
    dates: "May 2024 — Mar 2025",
    location: "Islamabad, Pakistan",
    type: "Industry",
    summary:
      "I built AI assistants and APIs for business data, customer feedback, and healthcare-related applications.",
    details: [
      "Built RAG assistants for querying business data in natural language.",
      "Developed a GPT-4 medical chatbot and automated tests for LLM response quality.",
      "Worked on review classification, sentiment analysis, and customer feedback dashboards.",
      "Optimized AI pipelines and Django APIs, reducing cloud infrastructure costs by 60%.",
    ],
    url: "https://www.aioapp.com/",
  },
  {
    organization: "FitFlex",
    role: "iOS Developer",
    dates: "Sep 2023 — Mar 2024",
    location: "Islamabad, Pakistan",
    type: "Industry",
    summary:
      "I developed Swift applications and added machine learning to mobile products.",
    details: [
      "Built iOS applications following Apple’s interface guidelines.",
      "Developed a message-classification system with a reported 70% improvement in prediction accuracy.",
      "Contributed to call-behavior prediction for advertising analytics.",
      "Worked with other teams to deliver mobile applications for client deployments.",
    ],
    url: "https://fitflexapp.com/",
  },
];

export const earlierExperience = [
  {
    title: "National Cybercrime Forensics Lab",
    role: "Python / audio forensics intern",
    dates: "Jun — Sep 2022",
    text: "Built machine-learning models for rare-event audio classification, created and annotated an audio dataset, and developed a web interface for forensic analysis.",
  },
  {
    title: "Teeny Coders",
    role: "Machine learning tutor",
    dates: "From Feb 2023",
    text: "Designed course outlines and practical machine-learning lessons for international students. The original portfolio does not provide a confirmed end date.",
  },
  {
    title: "10Pearls",
    role: "FYP Accelerator fellow",
    dates: "Oct 2022 — Jun 2023",
    text: "Received industry mentorship while developing my machine-learning final-year project.",
  },
  {
    title: "Dawlance",
    role: "Graduate trainee, applied AI",
    dates: "Jun 2022 — Sep 2023",
    text: "Participated in the Women in Tech graduate program and worked on an applied machine-learning project with mentorship.",
  },
  {
    title: "GlobalShala",
    role: "Innovation consultant intern",
    dates: "Jun — Jul 2022",
    text: "Researched market trends and compiled findings and recommendations for an educational startup.",
  },
  {
    title: "Mindstorm Studios",
    role: "M Labs fellow",
    dates: "Jul — Sep 2021",
    text: "Worked in a four-person team on the Unity game Rob it All and trained in 3D modeling, Blender, and game development.",
  },
];
