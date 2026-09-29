# Portfolio content sources

Reviewed 2026-09-28. The supplied `Azka_Ikramullah_CV.pdf` is the primary source for employment dates, education, outcomes, and publication status. GitHub's profile README has older dates; the CV takes precedence.

- GitHub profile / social account metadata: https://github.com/Azka1212
- Profile README and project descriptions: https://github.com/Azka1212/Azka1212
- Repository inventory: GitHub API via authenticated `gh repo list`. Private repositories are explicitly marked; no private source code is embedded.
- AAAI publication title, paper, PDF, DOI: https://ojs.aaai.org/index.php/AAAI/article/view/42223
- Research code: https://github.com/Azka1212/reasoning-code and https://github.com/Azka1212/SAC-Traid (repository spelling differs from the paper's SAC-Triad name).
- OpenReview paper links: extracted from the supplied CV. Automated verification of OpenReview pages/API was blocked. The general OpenReview link is an author search, not an invented profile ID.
- LinkedIn, Kaggle, Devpost, Stack Overflow: GitHub profile README and GitHub social account metadata. LinkedIn uses the GitHub-listed `/in/azka-ikramullah/`, also found in publication-related search results, rather than the CV's conflicting `/in/azka`.
- Google Scholar: author identifier extracted from the supplied CV.
- Hugging Face: retained from the original portfolio source.

The project directory includes 29 substantive projects and collections, including profile-listed projects without public code. `Azka1212` is the profile README repository, not a project. Six earlier portfolio copies/placeholders (`Portfolio`, `Azka-Portfolio`, `Potfolio-Website`, `Portfolio_azka`, `portfolio-website`, `Azka1212.github.io`) are omitted to avoid duplicate portfolio entries.

Business applications describe documented projects and an MVP. Founder/cofounder roles and consulting offers are now described separately in Consulting & Startups, following the user’s explicit update below. No clients or revenue are claimed. Interests summarize topics explicitly listed in the GitHub profile and CV; they are not a fabricated live news feed. Third-paper acceptance status follows the supplied CV, and no code URL was supplied for it.

## Detail restoration — 2026-09-29

Project detail records are stored in `lib/portfolio-details.ts`. The CodeAI, SOP-Generator, Pose_Project_API, BOT, Quiz-Generated, Swift-iOS, Story-Generated, and Django-RestfulAPI-Gen-AI READMEs were checked again. Specific CodeAI endpoints, SOP inputs, and pose API usage were added. Sparse READMEs are not expanded into invented features or outcomes.

Earlier roles and collaborations are retained from the original portfolio, with CV dates taking precedence. The tutoring end date is not established; collaborations are described as having started in 2024 rather than asserted to be current. All 29 project entries remain accessible without pagination, with independent expand/collapse controls. The persistent section navigation supports direct hash links and browser history.

## Source-based repository guides — 2026-09-29

Reviewed the trees, README files, and relevant implementation files of all 24 linked repositories. `lib/repository-guides.ts` contains status, workflow, source links, setup, and limits; project summaries and tools reflect the inspected code. Five entries without an established repository remain documented from the CV/profile without invented code links.

Corrections include GPT-3.5 in the chatbot source, OpenCV/OpenPose lineage for pose estimation, the tabular classifier in the PTSD training script, the empty quiz scaffold, and missing modules in the Django quiz and SAC-Triad snapshots. CV results are attributed and not represented as reproduced benchmarks. Setup instructions were source-reviewed; the individual research and application projects were not executed during documentation work.

The reasoning overview image is copied from `Azka1212/reasoning-code/AAAI/Diagram3.png`. Original paper links, experiment figures, CodeAI screenshots, maintained AgriDirect operating instructions, and FYP/PTSD project resource links are preserved in the corresponding READMEs. Workshop and MONAI tutorial attribution is retained. Private repository visibility remains unchanged.


## Consulting and startup roles — user update, 2026-09-29

The user requested a dedicated freelancing/AI consulting and startups tab, and explicitly supplied two roles: founder of an AI services and products venture, and cofounder of an agritech product intended to become a business later. Startup names, launch dates, traction, and commercial details have not been supplied. The agritech entry is not assigned to a specific repository without confirmation. Service descriptions draw on documented project experience; they do not claim existing customers or completed consulting engagements.


## Startup-only section — user correction, 2026-09-29

The user requested the tab be named Startups and removed the separate freelance offering. The section now contains only two venture entries. The AI business offers products and project-based services, including development and AI consulting. The old #consulting link continues to open this section; new navigation uses #startups.


## About and research organization — user update, 2026-09-29

Removed the About subtitle, Tools I use block, and Other research collaborations section at the user's request. Academic activities now appear in About. Renamed Topics I follow to Trends I follow. The user directly supplied their WiML at NeurIPS 2026 reviewer role; it is listed with the year only, without an invented month or review count.
