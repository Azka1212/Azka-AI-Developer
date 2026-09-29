export type RepositoryGuide = { status: string; flow: string[]; files: {path: string; url: string}[]; setup: string; notes: string; links: {label: string; url: string}[]; readme: string };
export const repositoryGuides: Record<string, RepositoryGuide> = {
  "When Reasoning Collapses": {
    "status": "Published research",
    "flow": [
      "Reasoning tasks",
      "Direct and reasoning prompts",
      "Model responses",
      "Accuracy by depth"
    ],
    "files": [
      {
        "path": "20250814-071739/AAAI_Abstract.ipynb",
        "url": "https://github.com/Azka1212/reasoning-code/blob/main/20250814-071739/AAAI_Abstract.ipynb"
      },
      {
        "path": "20250814-071739/run_config.json",
        "url": "https://github.com/Azka1212/reasoning-code/blob/main/20250814-071739/run_config.json"
      },
      {
        "path": "20250814-071739/preds",
        "url": "https://github.com/Azka1212/reasoning-code/tree/main/20250814-071739/preds"
      },
      {
        "path": "20250814-071739/plots",
        "url": "https://github.com/Azka1212/reasoning-code/tree/main/20250814-071739/plots"
      },
      {
        "path": "AAAI/graphs-2/graphs.ipynb",
        "url": "https://github.com/Azka1212/reasoning-code/blob/main/AAAI/graphs-2/graphs.ipynb"
      }
    ],
    "setup": "Open `20250814-071739/AAAI_Abstract.ipynb` in Jupyter or Colab. Inspect its dependency, dataset, and model-configuration cells before running it. Saved predictions and plots can be reviewed without making new model calls. There is no root dependency lockfile or packaged command-line entry point.",
    "notes": "Reproducing model calls requires your own provider access and dataset configuration. Saved results are experiment artifacts, not a fresh validation run.",
    "links": [
      {
        "label": "AAAI paper",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/42223"
      },
      {
        "label": "Paper PDF",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/download/42223/46184"
      },
      {
        "label": "DOI",
        "url": "https://doi.org/10.1609/aaai.v40i48.42223"
      }
    ],
    "readme": "https://github.com/Azka1212/reasoning-code/blob/main/README.md"
  },
  "SAC-Triad": {
    "status": "Research code; missing module",
    "flow": [
      "Evaluation tasks",
      "Controller and rewriter",
      "Target model",
      "Judge and reward",
      "Run records"
    ],
    "files": [
      {
        "path": "src/cli.py",
        "url": "https://github.com/Azka1212/SAC-Traid/blob/main/src/cli.py"
      },
      {
        "path": "src/rl/hybrid_sac.py",
        "url": "https://github.com/Azka1212/SAC-Traid/blob/main/src/rl/hybrid_sac.py"
      },
      {
        "path": "src/rewriter/rewriter_llm.py",
        "url": "https://github.com/Azka1212/SAC-Traid/blob/main/src/rewriter/rewriter_llm.py"
      },
      {
        "path": "src/judge/judge_llm.py",
        "url": "https://github.com/Azka1212/SAC-Traid/blob/main/src/judge/judge_llm.py"
      },
      {
        "path": "src/reward/rewarder.py",
        "url": "https://github.com/Azka1212/SAC-Traid/blob/main/src/reward/rewarder.py"
      },
      {
        "path": "src/store/run_store.py",
        "url": "https://github.com/Azka1212/SAC-Traid/blob/main/src/store/run_store.py"
      },
      {
        "path": "config/stack.yaml",
        "url": "https://github.com/Azka1212/SAC-Traid/blob/main/config/stack.yaml"
      },
      {
        "path": "requirements.txt",
        "url": "https://github.com/Azka1212/SAC-Traid/blob/main/requirements.txt"
      }
    ],
    "setup": "Create a Python virtual environment and inspect `requirements.txt` and `config/stack.yaml`. The main entry point is `src/cli.py`, but it imports `src.data.loader`, which is absent from the inspected tree. Restore that module and the referenced data before attempting the CLI. Configure the local model router/Ollama and any provider credentials separately.",
    "notes": "The repository name is spelled SAC-Traid; the research project is SAC-Triad. A complete runnable checkout cannot currently be claimed because the data-loader module is missing. Use the framework only with models and evaluation environments you are authorized to test.",
    "links": [
      {
        "label": "Paper PDF",
        "url": "https://openreview.net/pdf?id=hk3qQRuDwA"
      },
      {
        "label": "OpenReview",
        "url": "https://openreview.net/forum?id=hk3qQRuDwA"
      }
    ],
    "readme": "https://github.com/Azka1212/SAC-Traid/blob/main/README.md"
  },
  "Multi-Specialty Medical Chatbot": {
    "status": "API prototype",
    "flow": [
      "Question and specialty",
      "Conversation history",
      "Language model",
      "Response and saved history"
    ],
    "files": [
      {
        "path": "joined-api.py",
        "url": "https://github.com/Azka1212/BOT/blob/main/joined-api.py"
      }
    ],
    "setup": "The entry point is `joined-api.py`; the ASGI application is named `app`. After installing compatible FastAPI, Uvicorn, Pydantic, and OpenAI dependencies and configuring your own credentials, the server can be started with:\n\n```sh\npython -m uvicorn joined-api:app --reload\n```\n\nThe request schema and interactive API documentation are available from FastAPI at `/docs`. No dependency manifest is included in the root.",
    "notes": "The current source calls `gpt-3.5-turbo` through the legacy OpenAI SDK interface, even though the broader project was described as GPT-4 in the resume. Update model access and SDK compatibility before running. Generated responses are not clinical advice. Do not use real patient details in demo requests.",
    "links": [],
    "readme": "https://github.com/Azka1212/BOT/blob/main/README.md"
  },
  "AI Code Assistant": {
    "status": "API prototype",
    "flow": [
      "Text, image, or document",
      "Django REST endpoint",
      "Input processing and model call",
      "Code or explanation"
    ],
    "files": [
      {
        "path": "code/myproject/manage.py",
        "url": "https://github.com/Azka1212/CodeAI/blob/main/code/myproject/manage.py"
      },
      {
        "path": "code/myproject/myapp/urls.py",
        "url": "https://github.com/Azka1212/CodeAI/blob/main/code/myproject/myapp/urls.py"
      },
      {
        "path": "code/myproject/myapp/views.py",
        "url": "https://github.com/Azka1212/CodeAI/blob/main/code/myproject/myapp/views.py"
      },
      {
        "path": "code/myproject/requirements.txt",
        "url": "https://github.com/Azka1212/CodeAI/blob/main/code/myproject/requirements.txt"
      },
      {
        "path": "New Collection.postman_collection.json",
        "url": "https://github.com/Azka1212/CodeAI/blob/main/New%20Collection.postman_collection.json"
      },
      {
        "path": "Images/Pic1.jpg",
        "url": "https://github.com/Azka1212/CodeAI/blob/main/Images/Pic1.jpg"
      },
      {
        "path": "Images/Pic2.jpg",
        "url": "https://github.com/Azka1212/CodeAI/blob/main/Images/Pic2.jpg"
      },
      {
        "path": "Images/Pic3.jpg",
        "url": "https://github.com/Azka1212/CodeAI/blob/main/Images/Pic3.jpg"
      }
    ],
    "setup": "Use a fresh virtual environment rather than the committed `code/env` folder. Install the requirements from `code/myproject/requirements.txt`, configure your own model-provider credentials, and install Tesseract separately for OCR. From `code/myproject`, prepare the database and start Django:\n\n```sh\npython manage.py migrate\npython manage.py runserver\n```\n\nInspect `myapp/urls.py` and the Postman collection for the exact paths and payloads.",
    "notes": "The source and dependency snapshot are historical and have not been run against current provider APIs during this review. Some endpoints use different request fields; refer to their view functions rather than assuming one shared schema.",
    "links": [],
    "readme": "https://github.com/Azka1212/CodeAI/blob/main/README.md"
  },
  "PTSD Prediction Tool": {
    "status": "Student research prototype",
    "flow": [
      "Questionnaire or CSV features",
      "Preprocessing",
      "Classifier",
      "Results interface"
    ],
    "files": [
      {
        "path": "model.py",
        "url": "https://github.com/Azka1212/PTSD-Prediction-Tool/blob/main/model.py"
      },
      {
        "path": "home/views.py",
        "url": "https://github.com/Azka1212/PTSD-Prediction-Tool/blob/main/home/views.py"
      },
      {
        "path": "home/urls.py",
        "url": "https://github.com/Azka1212/PTSD-Prediction-Tool/blob/main/home/urls.py"
      },
      {
        "path": "home/models.py",
        "url": "https://github.com/Azka1212/PTSD-Prediction-Tool/blob/main/home/models.py"
      },
      {
        "path": "manage.py",
        "url": "https://github.com/Azka1212/PTSD-Prediction-Tool/blob/main/manage.py"
      },
      {
        "path": "PTSDAZKA_(1).ipynb",
        "url": "https://github.com/Azka1212/PTSD-Prediction-Tool/blob/main/PTSDAZKA_(1).ipynb"
      }
    ],
    "setup": "Inspect the notebook and `model.py` for the required dataset columns. There is no root requirements file. Configure Django and the scientific Python dependencies, use a fresh local database, and review model/scaler file paths before starting the application. The URL configuration references views that need checking against the implementation, so this checkout is not documented as ready to run unchanged.",
    "notes": "The CV reports 97.56% accuracy for the broader final-year project. That value was not reproduced from this checkout and should not be interpreted as clinical validation. This repository’s visible training script is a tabular logistic-regression pipeline, not evidence of a deployed NLP diagnosis system.",
    "links": [
      {
        "label": "Related hospital application",
        "url": "https://github.com/Azka1212/FYP"
      },
      {
        "label": "Related Android application",
        "url": "https://github.com/Azka1212/PTSD-Mobile-Application"
      }
    ],
    "readme": "https://github.com/Azka1212/PTSD-Prediction-Tool/blob/main/README.md"
  },
  "SOP Generator": {
    "status": "Source archive",
    "flow": [
      "Applicant details and resume",
      "Django form",
      "Prompt and model call",
      "SOP draft"
    ],
    "files": [
      {
        "path": "SOPProject2.zip",
        "url": "https://github.com/Azka1212/SOP-Generator/blob/main/SOPProject2.zip"
      }
    ],
    "setup": "Extract `SOPProject2.zip` into a new directory. The application root inside the archive is `SOPProject2/SOPProject2`, containing `manage.py`, `myproject/`, and `users/`. Inspect the imports in `users/views.py` for Django, requests, the OpenAI SDK, and PyMuPDF; no requirements file is included in the archive. Configure your own credentials and a fresh local database before using Django’s migration and development-server commands.",
    "notes": "Archive packaging makes code browsing and dependency management less convenient than a normal source tree. Generated drafts should be reviewed and personalized by the applicant.",
    "links": [],
    "readme": "https://github.com/Azka1212/SOP-Generator/blob/main/README.md"
  },
  "Creative Story Generator": {
    "status": "Command-line prototype",
    "flow": [
      "Reader preferences",
      "Story prompt",
      "Chapter generation",
      "Summaries and continuation"
    ],
    "files": [
      {
        "path": "summary_based.py",
        "url": "https://github.com/Azka1212/Story-Generated/blob/main/summary_based.py"
      }
    ],
    "setup": "Create a Python environment, install the imported dependencies, configure your own model-provider credentials, and run:\n\n```sh\npython summary_based.py\n```\n\nThe script prompts for its inputs in the terminal.",
    "notes": "No dependency manifest is included. The script uses the legacy OpenAI SDK API and names gpt-3.5-turbo; check compatibility and model availability before running.",
    "links": [],
    "readme": "https://github.com/Azka1212/Story-Generated/blob/main/README.md"
  },
  "Quiz Generator": {
    "status": "Empty scaffold",
    "flow": [
      "Planned input",
      "Planned quiz generation",
      "Planned output"
    ],
    "files": [
      {
        "path": "manage.py",
        "url": "https://github.com/Azka1212/Quiz-Generated/blob/main/manage.py"
      },
      {
        "path": "requirements.txt",
        "url": "https://github.com/Azka1212/Quiz-Generated/blob/main/requirements.txt"
      },
      {
        "path": "quiz_generated.json",
        "url": "https://github.com/Azka1212/Quiz-Generated/blob/main/quiz_generated.json"
      }
    ],
    "setup": "There is no runnable application or installable dependency list in this checkout. Add the actual project source and requirements before documenting a server command.",
    "notes": "This is a scaffold, not a finished application. No features, screenshots, or results can be verified from the empty files.",
    "links": [],
    "readme": "https://github.com/Azka1212/Quiz-Generated/blob/main/README.md"
  },
  "Generative AI REST APIs": {
    "status": "Incomplete project snapshot",
    "flow": [
      "Django entry point",
      "Missing application modules",
      "Example quiz outputs"
    ],
    "files": [
      {
        "path": "manage.py",
        "url": "https://github.com/Azka1212/Django-RestfulAPI-Gen-AI/blob/main/manage.py"
      },
      {
        "path": "requirements.txt",
        "url": "https://github.com/Azka1212/Django-RestfulAPI-Gen-AI/blob/main/requirements.txt"
      },
      {
        "path": "generated_quiz.txt",
        "url": "https://github.com/Azka1212/Django-RestfulAPI-Gen-AI/blob/main/generated_quiz.txt"
      },
      {
        "path": "quiz_generated.json",
        "url": "https://github.com/Azka1212/Django-RestfulAPI-Gen-AI/blob/main/quiz_generated.json"
      }
    ],
    "setup": "Inspect `manage.py` to identify the settings module it expects. The corresponding Django application/settings packages are not included in the inspected tree. Restore them before running migrations or the development server.",
    "notes": "The included generated files are examples, not evidence of a currently runnable API. Runtime and endpoint behavior cannot be verified from this snapshot.",
    "links": [],
    "readme": "https://github.com/Azka1212/Django-RestfulAPI-Gen-AI/blob/main/README.md"
  },
  "Skin Treatment Visualizer": {
    "status": "Image-generation prototype",
    "flow": [
      "Uploaded image",
      "Treatment and intensity",
      "Diffusion pipeline",
      "Generated image"
    ],
    "files": [
      {
        "path": "1.py",
        "url": "https://github.com/Azka1212/Skin-Treatment-Visualizer-Using-Stable-Diffusion/blob/main/1.py"
      },
      {
        "path": "requirements.txt",
        "url": "https://github.com/Azka1212/Skin-Treatment-Visualizer-Using-Stable-Diffusion/blob/main/requirements.txt"
      }
    ],
    "setup": "Create an environment with a compatible CUDA-enabled PyTorch installation and install `requirements.txt`. Review model access and any local configuration, then launch the actual entry point:\n\n```sh\nstreamlit run 1.py\n```",
    "notes": "The source explicitly selects CUDA. A CPU-only machine needs code changes. The earlier README referred to app.py, but the committed entry point is 1.py. Generated images are visual experiments, not predictions of medical outcomes.",
    "links": [],
    "readme": "https://github.com/Azka1212/Skin-Treatment-Visualizer-Using-Stable-Diffusion/blob/main/README.md"
  },
  "Pose Detection API": {
    "status": "Computer-vision API prototype",
    "flow": [
      "Front and side images + height",
      "Keypoint detection",
      "Measurement estimation",
      "JSON and pose image"
    ],
    "files": [
      {
        "path": "api.py",
        "url": "https://github.com/Azka1212/Pose_Project_API/blob/main/api.py"
      },
      {
        "path": "api_request.py",
        "url": "https://github.com/Azka1212/Pose_Project_API/blob/main/api_request.py"
      },
      {
        "path": "model/graph_opt.pb",
        "url": "https://github.com/Azka1212/Pose_Project_API/blob/main/model/graph_opt.pb"
      },
      {
        "path": "model/README.md",
        "url": "https://github.com/Azka1212/Pose_Project_API/blob/main/model/README.md"
      }
    ],
    "setup": "Install compatible FastAPI, Uvicorn, OpenCV, NumPy, and python-multipart dependencies in a fresh environment. Run from the repository root so the model path resolves:\n\n```sh\npython -m uvicorn api:app --reload\n```\n\nEdit the sample image paths and height in `api_request.py` before sending a request. FastAPI serves endpoint documentation at `/docs`.",
    "notes": "The current implementation writes a shared output-image filename, so concurrent requests need output isolation before production use. Measurements depend on input pose, image geometry, and the supplied height. The model README documents the upstream OpenCV/tf-pose-estimation lineage.",
    "links": [],
    "readme": "https://github.com/Azka1212/Pose_Project_API/blob/main/README.md"
  },
  "Pose Detection Experiments": {
    "status": "Computer-vision experiment",
    "flow": [
      "Input image",
      "OpenCV DNN graph",
      "Detected keypoints",
      "Skeleton overlay"
    ],
    "files": [
      {
        "path": "main_1.py",
        "url": "https://github.com/Azka1212/Pose_Project_Week4/blob/main/main_1.py"
      },
      {
        "path": "requirements.txt",
        "url": "https://github.com/Azka1212/Pose_Project_Week4/blob/main/requirements.txt"
      },
      {
        "path": "model/graph_opt.pb",
        "url": "https://github.com/Azka1212/Pose_Project_Week4/blob/main/model/graph_opt.pb"
      },
      {
        "path": "model/README.md",
        "url": "https://github.com/Azka1212/Pose_Project_Week4/blob/main/model/README.md"
      }
    ],
    "setup": "Install the checked-in requirements and adjust the example input-image path in `main_1.py`. Run from the repository root:\n\n```sh\npip install -r requirements.txt\npython main_1.py\n```",
    "notes": "The script is an image-based experiment, not the API in Pose_Project_API. Keep the upstream model attribution in model/README.md and model/LICENSE.",
    "links": [
      {
        "label": "API version",
        "url": "https://github.com/Azka1212/Pose_Project_API"
      }
    ],
    "readme": "https://github.com/Azka1212/Pose_Project_Week4/blob/main/README.md"
  },
  "Swift iOS Projects": {
    "status": "iOS sample application",
    "flow": [
      "Login or signup screen",
      "Firebase Authentication",
      "Welcome screen"
    ],
    "files": [
      {
        "path": "Login-Signup-Using-firebase/Project.xcodeproj",
        "url": "https://github.com/Azka1212/Swift-iOS/tree/main/Login-Signup-Using-firebase/Project.xcodeproj"
      },
      {
        "path": "Login-Signup-Using-firebase/Project/Screens/LoginVC.swift",
        "url": "https://github.com/Azka1212/Swift-iOS/blob/main/Login-Signup-Using-firebase/Project/Screens/LoginVC.swift"
      },
      {
        "path": "Login-Signup-Using-firebase/Project/Screens/SignUpVC.swift",
        "url": "https://github.com/Azka1212/Swift-iOS/blob/main/Login-Signup-Using-firebase/Project/Screens/SignUpVC.swift"
      }
    ],
    "setup": "Open `Login-Signup-Using-firebase/Project.xcodeproj` in Xcode. Resolve its Swift package dependencies, configure a Firebase project for your own bundle identifier, and select an iOS simulator or device. Replace the bundled Firebase configuration with your own project configuration before connecting to a backend.",
    "notes": "This repository contains an authentication sample. The separate iOS message-classification work described in the portfolio is not implemented in this repository.",
    "links": [],
    "readme": "https://github.com/Azka1212/Swift-iOS/blob/main/README.md"
  },
  "PTSD Mobile Application": {
    "status": "Android student prototype",
    "flow": [
      "Account access",
      "Questionnaire responses",
      "Result screens",
      "Score charts"
    ],
    "files": [
      {
        "path": "app/build.gradle",
        "url": "https://github.com/Azka1212/PTSD-Mobile-Application/blob/master/app/build.gradle"
      },
      {
        "path": "app/src/main/java/com/example/ptsdetector/Main.java",
        "url": "https://github.com/Azka1212/PTSD-Mobile-Application/blob/master/app/src/main/java/com/example/ptsdetector/Main.java"
      },
      {
        "path": "app/src/main/java/com/example/ptsdetector/Score.java",
        "url": "https://github.com/Azka1212/PTSD-Mobile-Application/blob/master/app/src/main/java/com/example/ptsdetector/Score.java"
      },
      {
        "path": "app/src/main/java/com/example/ptsdetector/Result.java",
        "url": "https://github.com/Azka1212/PTSD-Mobile-Application/blob/master/app/src/main/java/com/example/ptsdetector/Result.java"
      }
    ],
    "setup": "Open the repository in Android Studio and sync the Gradle project. Install the SDK versions specified in `app/build.gradle`, configure your own Firebase project, and select a device or emulator. Review result and scoring logic before interpreting its output.",
    "notes": "The mobile source is documented as a questionnaire application; this review did not establish an integrated, clinically validated prediction model.",
    "links": [
      {
        "label": "Related web project",
        "url": "https://github.com/Azka1212/FYP"
      },
      {
        "label": "Prediction repository",
        "url": "https://github.com/Azka1212/PTSD-Prediction-Tool"
      }
    ],
    "readme": "https://github.com/Azka1212/PTSD-Mobile-Application/blob/master/README.md"
  },
  "AgriDirect": {
    "status": "Private MVP",
    "flow": [
      "Voice or text",
      "Transcript review",
      "Structured offer or request",
      "Saved record",
      "Matching and dashboard"
    ],
    "files": [
      {
        "path": "app.py",
        "url": "https://github.com/Azka1212/agridirect-mvp/blob/main/app.py"
      },
      {
        "path": "pages",
        "url": "https://github.com/Azka1212/agridirect-mvp/tree/main/pages"
      },
      {
        "path": "services",
        "url": "https://github.com/Azka1212/agridirect-mvp/tree/main/services"
      },
      {
        "path": "models",
        "url": "https://github.com/Azka1212/agridirect-mvp/tree/main/models"
      },
      {
        "path": "tests",
        "url": "https://github.com/Azka1212/agridirect-mvp/tree/main/tests"
      },
      {
        "path": "requirements.txt",
        "url": "https://github.com/Azka1212/agridirect-mvp/blob/main/requirements.txt"
      }
    ],
    "setup": "Open the full repository guide linked below and follow its Run locally section. It specifies Python 3.12, the environment template, PostgreSQL/provider configuration, and the Streamlit entry point.",
    "notes": "Model-generated fields are reviewed before saving. Matching candidates require human checks. Existing evaluation and deployment instructions remain authoritative; no new accuracy or scale claims are added.",
    "links": [],
    "readme": "https://github.com/Azka1212/agridirect-mvp/blob/main/README.md"
  },
  "Labyrinth Game": {
    "status": "Search-algorithm project",
    "flow": [
      "Maze definition",
      "Increasing depth limit",
      "Path search",
      "Visualization"
    ],
    "files": [
      {
        "path": "main.py",
        "url": "https://github.com/Azka1212/Labyrinth-Game-Using-Prolog/blob/main/main.py"
      },
      {
        "path": "iterative_deepening.pl",
        "url": "https://github.com/Azka1212/Labyrinth-Game-Using-Prolog/blob/main/iterative_deepening.pl"
      },
      {
        "path": "labyrinth/loader.pl",
        "url": "https://github.com/Azka1212/Labyrinth-Game-Using-Prolog/blob/main/labyrinth/loader.pl"
      },
      {
        "path": "labyrinth/actions.pl",
        "url": "https://github.com/Azka1212/Labyrinth-Game-Using-Prolog/blob/main/labyrinth/actions.pl"
      },
      {
        "path": "Test.png",
        "url": "https://github.com/Azka1212/Labyrinth-Game-Using-Prolog/blob/main/Test.png"
      }
    ],
    "setup": "Install SWI-Prolog and a compatible PySwip package in a Python environment. Review the selected maze in `labyrinth/loader.pl`, then run the checked-in entry point:\n\n```sh\npython main.py\n```",
    "notes": "The earlier README named game.pl, which is not in the tree. This repository also includes teaching examples; their presence is not a claim of a separate finished application.",
    "links": [],
    "readme": "https://github.com/Azka1212/Labyrinth-Game-Using-Prolog/blob/main/readme.md"
  },
  "PTSD Final Year Project": {
    "status": "Final-year project prototype",
    "flow": [
      "Account role",
      "Records and questionnaire",
      "Stored model",
      "Results and appointments"
    ],
    "files": [
      {
        "path": "manage.py",
        "url": "https://github.com/Azka1212/FYP/blob/master/manage.py"
      },
      {
        "path": "hospital/views.py",
        "url": "https://github.com/Azka1212/FYP/blob/master/hospital/views.py"
      },
      {
        "path": "hospital/models.py",
        "url": "https://github.com/Azka1212/FYP/blob/master/hospital/models.py"
      },
      {
        "path": "hospitalmanagement/urls.py",
        "url": "https://github.com/Azka1212/FYP/blob/master/hospitalmanagement/urls.py"
      },
      {
        "path": "hospitalmanagement/model.py",
        "url": "https://github.com/Azka1212/FYP/blob/master/hospitalmanagement/model.py"
      },
      {
        "path": "requirements.txt",
        "url": "https://github.com/Azka1212/FYP/blob/master/requirements.txt"
      }
    ],
    "setup": "Inspect `requirements.txt`, Django settings, and the local paths in `hospitalmanagement/model.py`. Update the machine-specific training-data path and use a fresh database for a local demo. Check the URL configuration before starting: the inspected diagnosis route is missing a separator before the following route, so the checkout needs a small source repair before it can run.",
    "notes": "The source review does not establish clinical validity. The CV’s reported project accuracy was not reproduced here. Existing records and datasets are not needed for a public demo; use synthetic local examples.",
    "links": [
      {
        "label": "Prediction repository",
        "url": "https://github.com/Azka1212/PTSD-Prediction-Tool"
      },
      {
        "label": "Android application",
        "url": "https://github.com/Azka1212/PTSD-Mobile-Application"
      }
    ],
    "readme": "https://github.com/Azka1212/FYP/blob/master/README.md"
  },
  "Data Analytics": {
    "status": "Report collection",
    "flow": [
      "Power BI report",
      "Data model and visuals",
      "Report exploration"
    ],
    "files": [
      {
        "path": "Assignment3-Team3.pbix",
        "url": "https://github.com/Azka1212/DATA-Analytics/blob/main/Assignment3-Team3.pbix"
      }
    ],
    "setup": "Open `Assignment3-Team3.pbix` in Power BI Desktop. Review the report’s data-source settings and provide the original data if a refresh is required.",
    "notes": "The report was not executed or refreshed during this review. The repository does not document the underlying dataset or measured business outcomes.",
    "links": [],
    "readme": "https://github.com/Azka1212/DATA-Analytics/blob/main/README.md"
  },
  "Machine Learning Projects": {
    "status": "Notebook collection",
    "flow": [
      "Dataset",
      "Preprocessing and features",
      "Model comparison",
      "Evaluation notebooks"
    ],
    "files": [
      {
        "path": "Audio-Anomoly/Audio-Anomoly-Detection.ipynb",
        "url": "https://github.com/Azka1212/ML-Projects/blob/main/Audio-Anomoly/Audio-Anomoly-Detection.ipynb"
      },
      {
        "path": "Heart-Disease/heart-disease-prediction-usingdifferent-techniques.ipynb",
        "url": "https://github.com/Azka1212/ML-Projects/blob/main/Heart-Disease/heart-disease-prediction-usingdifferent-techniques.ipynb"
      },
      {
        "path": "Breast-Cancer-Prediction",
        "url": "https://github.com/Azka1212/ML-Projects/tree/main/Breast-Cancer-Prediction"
      },
      {
        "path": "Stock Pred.zip (Unzipped Files)/app.py",
        "url": "https://github.com/Azka1212/ML-Projects/blob/main/Stock%20Pred.zip%20(Unzipped%20Files)/app.py"
      },
      {
        "path": "bANK/DM.ipynb",
        "url": "https://github.com/Azka1212/ML-Projects/blob/main/bANK/DM.ipynb"
      }
    ],
    "setup": "Open one notebook at a time in Jupyter. Read its imports and update dataset paths before executing cells. The audio and heart-disease notebooks contain machine-specific paths; there is no unified requirements file for the collection.",
    "notes": "Datasets, package requirements, and evaluation methods differ between notebooks. File names mentioning accuracy are not independently reproduced results.",
    "links": [],
    "readme": "https://github.com/Azka1212/ML-Projects/blob/main/README.md"
  },
  "Python Learning Archive": {
    "status": "README-only repository",
    "flow": [
      "Planned notes",
      "Planned exercises"
    ],
    "files": [],
    "setup": "There is no application, notebook, or dependency file to run yet.",
    "notes": "This entry is a learning placeholder, not a completed Python project.",
    "links": [],
    "readme": "https://github.com/Azka1212/Python/blob/main/README.md"
  },
  "Applied Project Collection": {
    "status": "Mixed project collection",
    "flow": [
      "Choose a subproject",
      "Configure its dependencies and data",
      "Run its script or notebook",
      "Inspect outputs"
    ],
    "files": [
      {
        "path": "3d_segmentation/brats_segmentation_3d.ipynb",
        "url": "https://github.com/Azka1212/Projects/blob/main/3d_segmentation/brats_segmentation_3d.ipynb"
      },
      {
        "path": "medical/1.2.py",
        "url": "https://github.com/Azka1212/Projects/blob/main/medical/1.2.py"
      },
      {
        "path": "text/Parallel-version.py",
        "url": "https://github.com/Azka1212/Projects/blob/main/text/Parallel-version.py"
      },
      {
        "path": "text/Serial-version.py",
        "url": "https://github.com/Azka1212/Projects/blob/main/text/Serial-version.py"
      },
      {
        "path": "Estore-2.zip",
        "url": "https://github.com/Azka1212/Projects/blob/main/Estore-2.zip"
      }
    ],
    "setup": "Choose a subdirectory and inspect its imports before creating an environment. The segmentation notebook includes Colab setup and expects the appropriate medical-imaging data; the text examples run independently. There is no single repository-wide application command.",
    "notes": "The segmentation notebook identifies upstream Project MONAI tutorial material and an Apache 2.0 notice. Retain that attribution; this collection should not be presented as wholly original research.",
    "links": [
      {
        "label": "Upstream MONAI tutorials",
        "url": "https://github.com/Project-MONAI/tutorials"
      }
    ],
    "readme": "https://github.com/Azka1212/Projects/blob/main/README.md"
  },
  "Smart Bulb Control": {
    "status": "Reinforcement-learning experiment",
    "flow": [
      "Bulb state",
      "Agent chooses action",
      "Environment and reward",
      "Training and evaluation"
    ],
    "files": [
      {
        "path": "1-1.ipynb",
        "url": "https://github.com/Azka1212/IOT/blob/main/1-1.ipynb"
      }
    ],
    "setup": "Open `1-1.ipynb` in Jupyter and inspect the setup cells. Install PyTorch, NumPy, pandas, and Matplotlib in a compatible environment, then execute cells in order after reviewing the experiment settings.",
    "notes": "The implementation is stored in a notebook. Separate files named smart_bulb_env.py, dqn_agent.py, ppo_agent.py, and train_and_compare.py from the earlier README are not in this repository. Prior qualitative comparisons are not a new benchmark result.",
    "links": [],
    "readme": "https://github.com/Azka1212/IOT/blob/main/README.md"
  },
  "MENA ML Learning Materials": {
    "status": "Workshop and experiment notebooks",
    "flow": [
      "Tutorial or dataset",
      "Notebook exercises",
      "Model training or comparison",
      "Learning outputs"
    ],
    "files": [
      {
        "path": "Intro_to_transformers_Task.ipynb",
        "url": "https://github.com/Azka1212/MENAML-content/blob/main/Intro_to_transformers_Task.ipynb"
      },
      {
        "path": "dpo_Task.ipynb",
        "url": "https://github.com/Azka1212/MENAML-content/blob/main/dpo_Task.ipynb"
      },
      {
        "path": "queen.ipynb",
        "url": "https://github.com/Azka1212/MENAML-content/blob/main/queen.ipynb"
      },
      {
        "path": "queenai-1.ipynb",
        "url": "https://github.com/Azka1212/MENAML-content/blob/main/queenai-1.ipynb"
      },
      {
        "path": "Thai_Food_Problem.ipynb",
        "url": "https://github.com/Azka1212/MENAML-content/blob/main/Thai_Food_Problem.ipynb"
      }
    ],
    "setup": "Open the notebooks in Jupyter, Colab, or the environment referenced by their setup cells. Provide the task datasets before executing training or evaluation; some examples use Kaggle paths and local story datasets.",
    "notes": "The transformer and DPO notebooks link to MENA-ML/tutorials2025-tasks. These are workshop exercises and adaptations, not a claim that the upstream tutorial material was authored from scratch.",
    "links": [
      {
        "label": "Upstream workshop tasks",
        "url": "https://github.com/MENA-ML/tutorials2025-tasks"
      }
    ],
    "readme": "https://github.com/Azka1212/MENAML-content/blob/main/README.md"
  },
  "AI Developer Portfolio": {
    "status": "Portfolio website",
    "flow": [
      "Section navigation",
      "Project search and details",
      "Code, paper, and profile links"
    ],
    "files": [
      {
        "path": "app/page.tsx",
        "url": "https://github.com/Azka1212/Azka-AI-Developer/blob/main/app/page.tsx"
      },
      {
        "path": "app/globals.css",
        "url": "https://github.com/Azka1212/Azka-AI-Developer/blob/main/app/globals.css"
      },
      {
        "path": "lib/portfolio-data.ts",
        "url": "https://github.com/Azka1212/Azka-AI-Developer/blob/main/lib/portfolio-data.ts"
      },
      {
        "path": "lib/portfolio-details.ts",
        "url": "https://github.com/Azka1212/Azka-AI-Developer/blob/main/lib/portfolio-details.ts"
      },
      {
        "path": "package.json",
        "url": "https://github.com/Azka1212/Azka-AI-Developer/blob/main/package.json"
      }
    ],
    "setup": "Install dependencies and start the development server:\n\n```sh\nnpm ci\nnpm run dev\n```\n\nBuild the GitHub Pages export with:\n\n```sh\nNEXT_PUBLIC_BASE_PATH=/Azka-AI-Developer npm run build\n```\n\nThe export is written to `out/`. The GitHub Pages workflow publishes it from the main branch.",
    "notes": "Project details are maintained separately from layout code. Private repositories stay private; the portfolio identifies their visibility instead of embedding private source files.",
    "links": [
      {
        "label": "Live portfolio",
        "url": "https://azka1212.github.io/Azka-AI-Developer/"
      }
    ],
    "readme": "https://github.com/Azka1212/Azka-AI-Developer/blob/main/README.md"
  }
};
