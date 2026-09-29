# Maintaining the portfolio

## Projects and README updates

The site syncs public repositories during deployment and daily at 04:23 UTC. GitHub schedules can be delayed. Existing public projects are included by name in `scripts/github-config.json`; add the **portfolio** topic to a new public repository to include it automatically. Remove that topic to remove a newly discovered project. For existing entries, remove the name from `include` or add it to `exclude`.

Update the README in its own repository to update the expanded portfolio details. Standard Markdown headings, lists, images, tables, and links are supported. Embedded HTML is parsed and sanitized before rendering; scripts and unsafe attributes are removed. Mermaid fences are shown as source, with the GitHub link available for its rendered diagram. Relative links and images resolve against the README's repository and directory. Keep the first prose paragraph short: it supplies the card summary. Existing curated titles and categories remain; new entries use the repository name and the Projects category.

Private repositories are never imported by this sync. Their previously approved descriptions stay in `lib/portfolio-data.ts`, `lib/portfolio-details.ts`, and `lib/repository-guides.ts`. Adding a private repository requires writing a public-safe summary yourself.

For an immediate refresh, open [the deployment workflow](https://github.com/Azka1212/Azka-AI-Developer/actions/workflows/pages.yml), select **Run workflow**, and choose **main**. No extra access token is needed in GitHub Actions. Locally, run `npm run sync:github`; an optional `GITHUB_TOKEN` is used only by the script, never by browser code.

The committed `lib/github-projects.json` is the initial fallback. Actions restores the newest cached snapshot and saves the refreshed one. If repository discovery fails, the previous snapshot remains. If a README request fails, its previous content remains with its original timestamp. A confirmed missing README clears the stored README. Public repositories no longer present in a successful discovery are removed. The visible date reports repository discovery; an individual README may be older after a failed fetch.

GitHub may disable scheduled workflows in public repositories after prolonged inactivity; use the Actions page to re-enable the schedule if needed. No sync commits are created, and source repositories are never modified by this workflow.

## Featured projects

The three short featured entries are in `app/page.tsx`. Selecting one filters the directory and opens the matching project.

## Learning resources

Add entries to `lib/learning-resources.ts` when ready:

```ts
{ title: 'Your topic', resources: [
  {label: 'Resource title', kind: 'Article', url: 'https://...'},
] }
```

Kinds are Article, Course, Notes, YouTube, and LinkedIn. Until real resources are added, the existing brief “More details to come” message remains. Do not publish placeholder URLs.

## Guided enquiries

The chat uses predefined questions and optional text. It is not a model-backed AI assistant. It has no model costs, backend, automatic email sending, or transcript storage. Answers stay in component memory while the page is open. “Continue by email” opens the visitor's email app with an editable summary; “Copy enquiry” provides an alternative. “Start again” clears the answers.

The assistant offers project exploration, a product enquiry, and research collaboration. Related-work suggestions use simple topic matching; it makes no pricing, timing, or feasibility commitments.

## Validation

Run `npm run test:sync`, `npx tsc --noEmit`, and `npm run build`. Browser checks cover disclosure controls, project filtering, README rendering, chat keyboard navigation, email draft contents, and mobile overflow.

References: [GitHub README API](https://docs.github.com/en/rest/repos/contents#get-a-repository-readme), [workflow schedules](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule), [Markdown security](https://github.com/remarkjs/react-markdown#security).
