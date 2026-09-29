import {learningTopics} from '@/lib/learning-resources';
export default function LearningResources(){
  return <div className="learning-preview">
    <p>AI, topic by topic: articles, courses, notes, and related YouTube and LinkedIn posts.</p>
    {learningTopics.length ? <div className="learning-topics">{learningTopics.map(topic=><details key={topic.title}><summary>{topic.title}</summary><ul>{topic.resources.map(resource=><li key={resource.url}><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.label} <span>· {resource.kind} ↗</span></a></li>)}</ul></details>)}</div> : <p>More details to come.</p>}
  </div>;
}
