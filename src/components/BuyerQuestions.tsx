const questions = [
  {
    question: "What does HappyWit do?",
    answer: "HappyWit is a New Delhi-based Experience Intelligence Studio for corporate events, exhibitions, creative and AV. We combine human creativity, AI and emotion through concept development, 2D/3D design, scripting, immersive engagement and show calling.",
  },
  {
    question: "What goes into an exhibition stall design?",
    answer: "Begin with your stand size, open sides, organiser rules, products and visitor journey. A useful design connects the layout, product demonstrations, graphics, AV and meeting space. Confirm design deliverables, fabrication responsibilities, venue approvals and execution support in the agreed scope.",
  },
  {
    question: "Can HappyWit support a corporate event or product launch?",
    answer: "HappyWit can help shape the concept, audience journey, stage and screen design, scripts, AV content, interactive moments and live show flow. Share the audience, objectives, location, date, format and budget so the appropriate deliverables can be agreed.",
  },
  {
    question: "How can AI support corporate event engagement?",
    answer: "AI can assist with content development, interactive prompts and personalised experience ideas when they serve a clear audience need. Human creative direction and on-site judgement remain central. Choose the interaction around a useful participant action rather than adding technology for its own sake.",
  },
  {
    question: "What are event AV content and show calling?",
    answer: "AV content includes films, motion graphics, presentations, scripts and screen content that carry the event story. Show calling coordinates the live sequence of speaker, video, audio, lighting and stage cues through an agreed run of show, rehearsals and clear communication with the technical team.",
  },
  {
    question: "What is Return on Experiences (ROX) in events?",
    answer: "HappyWit uses ROX to consider anticipation before the event, engagement during it, and memory and action afterwards. Agree measures such as relevant registrations, participation, demo completion, recall and qualified follow-up against the objective. ROX complements financial ROI; these measures are a planning framework, not a promise of results.",
  },
];

export default function BuyerQuestions() {
  return (
    <section id="questions" aria-labelledby="questions-title" className="border-t border-gray-100 bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">Before we begin</span>
          <h2 id="questions-title" className="mt-3 font-display text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Clear answers for your next experience.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-500">
            Planning an event, exhibition or creative AV brief? Start with the audience, the message and the action you want the experience to support.
          </p>
          <a href="#contact" className="mt-6 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2563EB]">
            Discuss your brief
          </a>
        </div>
        <div className="divide-y divide-gray-100">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5 first:pt-0">
              <summary className="cursor-pointer text-base font-bold leading-relaxed text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
