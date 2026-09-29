export type LearningResource = {label:string; kind:'Article'|'Course'|'Notes'|'YouTube'|'LinkedIn'; url:string};
export type LearningTopic = {title:string; resources:LearningResource[]};
// Add a topic when its first resource is ready. No placeholder links are published.
export const learningTopics:LearningTopic[] = [];
