'use client';
import {useState} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {MessageCircle, X, ArrowUpRight} from 'lucide-react';
type Destination = 'projects' | 'research';
export default function ConsultationChat({onNavigate}: {onNavigate:(section:Destination,query?:string)=>void}) {
  const [open,setOpen]=useState(false);
  const [mode,setMode]=useState<'home'|'product'|'research'|'explore'>('home');
  const [step,setStep]=useState(0);
  const [copyStatus,setCopyStatus]=useState('');
  const [answers,setAnswers]=useState(['','','','']);
  const questions=mode==='research' ? ['What research topic interests you?','What kind of collaboration?','What material do you have?','Any timing to keep in mind?'] : ['What would you like to build?','Where are you starting?','What data or content do you have?','Any timing to keep in mind?'];
  const options=mode==='research' ? [[],['Joint research','Evaluation or review','Other'],['Paper or proposal','Code or dataset','Still exploring'],['Flexible','This month','Next few months']] : [[],['An idea','A prototype','An existing product'],['Documents or data','An existing application','Not sure yet'],['Flexible','This month','Next few months']];
  const labels=mode==='research'?['Research topic','Collaboration','Available material','Timing']:['Product idea','Current stage','Data or content','Timing'];
  const summary=answers.map((answer,i)=>`${labels[i]}: ${answer || 'To discuss'}`).join('\n');
  const email=`mailto:azkaikramullah496@gmail.com?subject=${encodeURIComponent(mode==='research'?'Research collaboration enquiry':'Product enquiry')}&body=${encodeURIComponent(`Hi Azka,\n\n${summary}\n\nI’d like to discuss the next steps.\n\nName: \n`)}`;
  const suggestion=mode==='research'?'When Reasoning Collapses':/restaurant|review|sales|report/i.test(answers[0])?'RAG Restaurant Assistant':/farm|agri|crop/i.test(answers[0])?'AgriDirect':/code|developer|api/i.test(answers[0])?'AI Code Assistant':'';
  function start(next:typeof mode){setMode(next);setStep(0);setCopyStatus('');setAnswers(['','','','']);}
  function visit(section:Destination,query?:string){setOpen(false);onNavigate(section,query);}
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger className="chat-launcher"><MessageCircle size={18} aria-hidden="true"/>Let’s talk</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="chat-overlay"/>
      <Dialog.Content className="chat-panel">
        <div className="chat-heading"><div><Dialog.Title>Let’s talk</Dialog.Title><Dialog.Description>Guided enquiry · sent only when you email</Dialog.Description></div><Dialog.Close className="chat-close" aria-label="Close chat"><X size={20}/></Dialog.Close></div>
        <div className="chat-body">
          {mode==='home' && <><p>Hi! What brings you here?</p><div className="chat-options"><button onClick={()=>start('explore')}>Explore my work</button><button onClick={()=>start('product')}>Discuss a product</button><button onClick={()=>start('research')}>Research collaboration</button></div></>}
          {mode==='explore' && <><p>Choose what you’d like to see.</p><div className="chat-options"><button onClick={()=>visit('projects')}>Projects & code</button><button onClick={()=>visit('research')}>Research & papers</button><button onClick={()=>start('product')}>Discuss your own idea</button></div></>}
          {(mode==='product'||mode==='research') && step<4 && <form onSubmit={e=>{e.preventDefault();if(answers[step].trim())setStep(step+1);}}>
            <p className="chat-step">{step+1} of 4</p>
            <label htmlFor="chat-answer">{questions[step]}</label>
            <div className="chat-options">{options[step].map(option=><button type="button" key={option} aria-pressed={answers[step]===option} onClick={()=>{setAnswers(prev=>prev.map((a,i)=>i===step?option:a));setStep(step+1);}}>{option}</button>)}</div>
            <textarea key={`${mode}-${step}`} autoFocus id="chat-answer" maxLength={step===0?240:100} value={answers[step]} onChange={e=>setAnswers(prev=>prev.map((a,i)=>i===step?e.target.value:a))} placeholder={step===0?'A sentence or two is enough.':'Or write your own answer.'} required/>
            <div className="chat-actions">{step>0&&<button type="button" onClick={()=>setStep(step-1)}>Back</button>}<button className="chat-primary" disabled={!answers[step].trim()} type="submit">Continue</button></div>
          </form>}
          {(mode==='product'||mode==='research') && step===4 && <><h3>Your enquiry</h3><dl className="chat-summary">{answers.map((answer,i)=><div key={labels[i]}><dt>{labels[i]}</dt><dd>{answer}</dd></div>)}</dl><p>Azka can review the details with you by email.</p><a className="chat-primary" href={email}>Continue by email <ArrowUpRight size={15}/></a><p className="chat-caption">Opens an editable draft in your email app.</p><button className="chat-related" onClick={()=>visit(mode==='research'?'research':'projects',mode==='research'?undefined:(suggestion||undefined))}>{suggestion ? `Related work: ${suggestion}` : "Explore the project directory"} ↗</button><div className="chat-actions"><button onClick={()=>setStep(0)}>Edit answers</button><button onClick={async()=>{try{await navigator.clipboard.writeText(summary);setCopyStatus("Enquiry copied.");}catch{setCopyStatus("Select the summary above to copy it.");}}}>Copy enquiry</button></div><p role="status" className="chat-caption">{copyStatus}</p></>}
          {mode!=='home'&&<button className="chat-reset" onClick={()=>start('home')}>Start again</button>}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
