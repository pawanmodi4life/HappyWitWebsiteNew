import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Check, Zap, Cpu, Users2, HelpCircle } from "lucide-react";

interface Step {
  title: string;
  options: { value: string; label: string; icon: string; desc: string }[];
}

export default function ExperiencePlanner() {
  const [step, setStep] = useState<number>(1);
  const [selections, setSelections] = useState({
    format: "",
    vibe: "",
    size: "",
  });
  const [blueprint, setBlueprint] = useState<any>(null);

  const formats = [
    { value: "Corporate & Brand Experiences", label: "Corporate & Brand Experiences", icon: "🏢", desc: "Product Launches, Town Halls, Leadership & Employee Meets" },
    { value: "Creative & AV Production", label: "Creative & AV Production", icon: "🎬", desc: "Brand Films, Animation & VFX, Concepts & Scriptwriting" },
    { value: "Exhibition", label: "Exhibition", icon: "🎪", desc: "Immersive exhibition booths & custom sensory zones" },
    { value: "Event Show Running", label: "Event Show Running", icon: "⏱️", desc: "Stage design, theatrical timing, cue & backup commands" },
  ];

  const vibes = [
    { value: "Futuristic Tech", label: "AI & Tech-Infused", icon: "⚡", desc: "Generative AI art, holographic projection, smart RFID" },
    { value: "Deep Storytelling", label: "Narrative & Cinematic", icon: "📖", desc: "Cinematic story arcs, curated journeys, emotion-led styling" },
    { value: "High Participation", label: "Co-Creative", icon: "🎭", desc: "Crowdsourced music, live voting, audience-led content" },
    { value: "Ultra Luxury", label: "Elite & Refined", icon: "🥂", desc: "Sensory gastronomy, bespoke detail, personalized memory hooks" },
  ];

  const sizes = [
    { value: "Intimate (<100)", label: "Intimate (< 100 guests)", icon: "👥", desc: "Focuses on deep, personalized interactions" },
    { value: "Mid-Scale (100-500)", label: "Mid-Scale (100 - 500 guests)", icon: "🎪", desc: "High-impact production with dynamic networking" },
    { value: "Large (500-2000)", label: "Large (500 - 2,000 guests)", icon: "🏟️", desc: "Festival-style with multiple custom content tracks" },
    { value: "Flagship (2000+)", label: "Flagship (2,000+ guests)", icon: "🌎", desc: "Cross-border ecosystem, live streaming & mainstages" },
  ];

  const handleSelect = (key: "format" | "vibe" | "size", value: string) => {
    const updated = { ...selections, [key]: value };
    setSelections(updated);
    
    if (key === "format") setStep(2);
    else if (key === "vibe") setStep(3);
    else if (key === "size") {
      generateBlueprint(updated);
      setStep(4);
    }
  };

  const generateBlueprint = (data: typeof selections) => {
    // Generate intelligent creative advice based on the selected format and engagement vibe
    let title = "";
    let techStack: string[] = [];
    let activationIdea = "";
    let conceptHighlight = "";

    if (data.format === "Corporate & Brand Experiences") {
      if (data.vibe === "Futuristic Tech") {
        title = `The "Nexus Sphere" Corporate Experience`;
        techStack = [
          "Interactive NFC smart-chips embedded in invitations",
          "Dynamic holographic product pedestals & holographic presenters",
          "Real-time corporate data visualizations mapped onto custom 360-degree LED panels"
        ];
        activationIdea = "We configure a physical 'Unlocking Plinth' where key executives touch their NFC badges simultaneously. This triggers a breathtaking 3D mapping cascade of the product reveal across the entire room.";
        conceptHighlight = "Interactive, awe-inspiring, flawlessly aligned with the brand's future vision.";
      } else if (data.vibe === "Deep Storytelling") {
        title = `The "Legacy Arc" Corporate Journey`;
        techStack = [
          "Directional spatial audio soundscapes guiding guest steps",
          "Bespoke museum-grade physical display frames layered with translucent OLED screens",
          "Ambient scenic lighting mapped dynamically to theatrical script cues"
        ];
        activationIdea = "Instead of standard slide decks, the team's historic milestones are presented as a guided walk-through gallery where actors, projection-mapped shadows, and narrative audio co-create the story live.";
        conceptHighlight = "Deeply emotional, sophisticated, highlighting human legacy.";
      } else if (data.vibe === "High Participation") {
        title = `The "Co-Lab Forum" Team Experience`;
        techStack = [
          "Real-time mobile voting & instant word-cloud generator APIs",
          "Interactive digital brainstorming panels on main stage screens",
          "Multi-user shared video grids to capture off-site participant reactions"
        ];
        activationIdea = "We integrate interactive pulse-meters into tables. The audience's raw sentiment alters the active presentation path, turning standard town hall speeches into a fully co-directed open conversation.";
        conceptHighlight = "Democratic, energetic, driving real engagement.";
      } else {
        title = `The "Summit Club" VIP Elite Retreat`;
        techStack = [
          "Personalized mobile micro-displays per guest seat",
          "Custom biometric facial profile greeting upon executive entry",
          "Private real-time chat with executive support team"
        ];
        activationIdea = "A hyper-tailored experience where every single agenda detail, seating assignment, and custom gift package dynamically updates based on pre-event profile questions.";
        conceptHighlight = "Prestigious, ultra-luxurious, tailored down to the millimeter.";
      }
    } else if (data.format === "Creative & AV Production") {
      if (data.vibe === "Futuristic Tech") {
        title = `The "Synapse Generative" Brand Film Gala`;
        techStack = [
          "Real-time AI video generative rendering engines",
          "Interactive stage tracking cameras (motion capture)",
          "8K ultra-wide laser projection canvas"
        ];
        activationIdea = "We build an interactive projection tunnel where entering guests' movements feed parameters into a generative rendering model, projecting a customized digital dreamscape surrounding them.";
        conceptHighlight = "Cutting-edge, unforgettable, visually breathtaking.";
      } else if (data.vibe === "Deep Storytelling") {
        title = `The "Cinematic Odyssey" Film Premiere`;
        techStack = [
          "Stereoscopic 3D staging screen overlays",
          "Spatialized Dolby Atmos theatrical audio master setups",
          "Cinematic multi-layered anamorphic projections"
        ];
        activationIdea = "We produce a bespoke brand movie accompanied by live instrumental artists. Custom-made environmental scents and thermal triggers match key movie beats (e.g. fresh wood fires or rain).";
        conceptHighlight = "Multi-sensory storytelling, deeply moving, premium narrative.";
      } else if (data.vibe === "High Participation") {
        title = `The "Co-Director" Interactive Film Lab`;
        techStack = [
          "Dynamic instant branching-path video playback servers",
          "Audience interactive dials integrated into seats",
          "Live-generated customized kinetic credit rolls"
        ];
        activationIdea = "Audiences actively vote on crucial character paths during the brand film presentation. The show-running servers switch feeds on the fly, showing the customized story branch chosen by the room.";
        conceptHighlight = "High focus, engaging, creative co-ownership.";
      } else {
        title = `The "Aura Luxe" High-Fidelity AV Showcase`;
        techStack = [
          "Premium transparent MicroLED screens",
          "Isolated acoustic glass dome audio systems",
          "Ultra-premium master class digital screens"
        ];
        activationIdea = "An ultra-premium gallery-style layout where guests experience brand films from isolated sensory chairs equipped with independent sound domes and custom color-temperature backlighting.";
        conceptHighlight = "Refined, exclusive, high fidelity visual excellence.";
      }
    } else if (data.format === "Exhibition") {
      if (data.vibe === "Futuristic Tech") {
        title = `The "Portal Prime" Interactive Smart Booth`;
        techStack = [
          "RFID product-discovery pedestals & smart weight sensors",
          "Dynamic transparent screen overlays covering display items",
          "Augmented reality interactive touch mirrors"
        ];
        activationIdea = "When a guest lifts a product model from its physical pedestal, the transparent background instantly transforms to showcase the internal mechanics, engineering blueprints, and interactive live stats.";
        conceptHighlight = "Organic curiosity loops, sleek tech integration, seamless exploration.";
      } else if (data.vibe === "Deep Storytelling") {
        title = `The "Scent & Shadow" Immersive Pavilion`;
        techStack = [
          "Theatrical spotlight mapping & laser arrays",
          "Micro-encapsulated organic scent dispersion nodes",
          "Curated directional ambient sound cones"
        ];
        activationIdea = "We construct a non-linear walkthrough pavilion where the walls tell stories based on proximity. Directional audio, projection shadows, and subtle mist follow visitors to create an intimate brand exploration.";
        conceptHighlight = "Atmospheric, mysterious, deeply memorable.";
      } else if (data.vibe === "High Participation") {
        title = `The "Sandbox" Co-Creation Pavilion`;
        techStack = [
          "Large scale multi-touch LED collaborative walls",
          "Smart spatial digital graffiti nozzles",
          "Live social integration screens tracking digital checkins"
        ];
        activationIdea = "Guests use custom physical nozzles to draw virtual light-graffiti on a massive digital canvas. Their designs are combined on-the-fly into a master digital tapestry exported live to their social feeds.";
        conceptHighlight = "High viral potential, energetic, collaborative.";
      } else {
        title = `The "Atelier" Private Luxury Lounge`;
        techStack = [
          "Integrated soft lighting modules matching guest profiles",
          "Invisible integrated surface speakers",
          "Private digital catalog terminals built into velvet furniture"
        ];
        activationIdea = "A strictly private, luxury-appointed VIP exhibition parlor where products are presented individually by experts. Displays are hidden behind premium fabrics and slide into view mechanically.";
        conceptHighlight = "Ultra-premium, private, elegant, highly sophisticated.";
      }
    } else { // Event Show Running
      if (data.vibe === "Futuristic Tech") {
        title = `The "Command Matrix" Automated Stage`;
        techStack = [
          "Fully automated DMX-over-Ethernet visual consoles",
          "Real-time sensor-triggered backup audio & visual feeds",
          "Redundant hot-spare synchronized video servers"
        ];
        activationIdea = "A high-precision stage workflow controlled by sub-millisecond automated cues. Presenters step onto designated tracking markers to trigger specialized spot arrays and multi-angle camera feeds instantly.";
        conceptHighlight = "Impeccable timing, zero human latency, premium high-tech precision.";
      } else if (data.vibe === "Deep Storytelling") {
        title = `The "Rhythm & Cue" Orchestrated Live Stage`;
        techStack = [
          "Live soundtrack pitch-tracking software",
          "Dynamic cinematic lighting desks syncing with speech tone",
          "Integrated director's intercom and stage status displays"
        ];
        activationIdea = "We orchestrate the entire live show's atmosphere around the speaker's natural pacing. The visual tempo, backdrops, and backing soundscapes expand, contract, and peak in perfect harmony with the narrative.";
        conceptHighlight = "Theatrical, highly artistic, fully synchronized storytelling.";
      } else if (data.vibe === "High Participation") {
        title = `The "Pulse" Crowd-Responsive Stage Control`;
        techStack = [
          "Room volume & applause-meter decibel trackers",
          "Audience bracelet LED controllers",
          "Dynamic interactive live feed screens"
        ];
        activationIdea = "The entire room's physical response dictates the state of the stage. The intensity of audience cheering automatically alters the visual color palettes and triggers dramatic light-burst sequences.";
        conceptHighlight = "Vibrant, high-impact, directly connecting stage and crowd.";
      } else {
        title = `The "Pinnacle Elite" Bespoke Show Direct`;
        techStack = [
          "Dedicated high-end private headsets for VIP tables",
          "Multichannel high-fidelity audio monitoring",
          "Private luxury live stream portals"
        ];
        activationIdea = "A premium live event where VIP tables receive direct, clean audio feeds through custom headsets. The master show-runner controls isolated camera feeds and custom visual angles for private high-net-worth guests.";
        conceptHighlight = "Prestige quality, maximum discretion, bulletproof luxury execution.";
      }
    }

    setBlueprint({
      title,
      techStack,
      activationIdea,
      conceptHighlight,
      format: data.format,
      vibe: data.vibe,
      size: data.size,
    });
  };

  const resetPlanner = () => {
    setSelections({ format: "", vibe: "", size: "" });
    setBlueprint(null);
    setStep(1);
  };

  const getWhatsAppLink = () => {
    if (!blueprint) return "";
    const text = `Hello Pawan! I designed a custom event concept on your website:\n\n*Format*: ${blueprint.format}\n*Engagement*: ${blueprint.vibe}\n*Audience*: ${blueprint.size}\n*Generated Concept*: "${blueprint.title}"\n\nI'd love to chat with HappyWit Design Studio about bringing this blueprint to life!`;
    return `https://wa.me/918851221600?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="experience-planner" className="w-full rounded-[2.5rem] border border-black/10 bg-white p-6 shadow-xl md:p-10 lg:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 bg-gradient-to-tr from-[#FF9900]/10 via-transparent to-transparent rounded-full blur-2xl" />

      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
            <Sparkles size={13} /> Interactive Tool
          </div>
          <h3 className="mt-2 text-2xl font-black text-gray-900 md:text-3xl">HappyWit Experience Planner</h3>
          <p className="mt-1.5 text-sm text-gray-500">Draft your creative experience parameters to receive an instant concept blueprint.</p>
        </div>
        
        {step < 4 && (
          <div className="text-right font-mono text-sm font-semibold text-gray-400">
            Step <span className="text-[#2563EB]">{step}</span> / 3
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {step < 4 && (
        <div className="mb-8 h-1 w-full rounded-full bg-gray-100 overflow-hidden relative z-10">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#2563EB] to-[#FF9900]"
            initial={{ width: "33%" }}
            animate={{ width: `${step === 1 ? 33 : step === 2 ? 66 : 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}

      {/* Steps Render */}
      <div className="relative z-10 min-h-[300px]">
        <AnimatePresence initial={false} mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="mb-6 font-display text-lg font-bold text-gray-800">
                1. What is the format of your upcoming experience?
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {formats.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => handleSelect("format", f.value)}
                    className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-left transition duration-300 hover:border-[#2563EB] hover:bg-[#EEF3FF]/30"
                  >
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900">{f.label}</div>
                      <div className="mt-1 text-xs text-gray-500">{f.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="mb-4 font-display text-lg font-bold text-gray-800">
                2. Select your primary audience engagement vibe:
              </h4>
              <button 
                onClick={() => setStep(1)} 
                className="mb-4 text-xs font-semibold text-[#2563EB] hover:underline"
              >
                ← Back to Format
              </button>
              <div className="grid gap-3 sm:grid-cols-2">
                {vibes.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => handleSelect("vibe", v.value)}
                    className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-left transition duration-300 hover:border-[#2563EB] hover:bg-[#EEF3FF]/30"
                  >
                    <span className="text-2xl">{v.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900">{v.label}</div>
                      <div className="mt-1 text-xs text-gray-500">{v.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="mb-4 font-display text-lg font-bold text-gray-800">
                3. Estimated audience reach or guest count:
              </h4>
              <button 
                onClick={() => setStep(2)} 
                className="mb-4 text-xs font-semibold text-[#2563EB] hover:underline"
              >
                ← Back to Engagement Vibe
              </button>
              <div className="grid gap-3 sm:grid-cols-2">
                {sizes.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => handleSelect("size", s.value)}
                    className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/50 p-4 text-left transition duration-300 hover:border-[#2563EB] hover:bg-[#EEF3FF]/30"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900">{s.label}</div>
                      <div className="mt-1 text-xs text-gray-500">{s.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && blueprint && (
            <motion.div
              key="blueprint"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-[#2563EB]/15 bg-gradient-to-b from-[#EEF3FF]/20 to-transparent p-6 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 h-12 w-12 text-blue-500/10">
                <Zap size={48} />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-bold text-[#2563EB]">
                  {blueprint.format}
                </span>
                <span className="rounded-full bg-[#FF9900]/10 px-3 py-1 text-xs font-bold text-[#FF9900]">
                  {blueprint.vibe}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                  {blueprint.size}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">Creative Experience Direction</p>
                <h4 className="mt-1 font-display text-2xl font-black text-gray-900 md:text-3xl">
                  {blueprint.title}
                </h4>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-5">
                <h5 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">💡</span>
                  Signature Participation Feature
                </h5>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {blueprint.activationIdea}
                </p>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-5">
                <h5 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">⚙️</span>
                  Recommended Experience Technology Stack
                </h5>
                <ul className="mt-2 space-y-2">
                  {blueprint.techStack.map((tech: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#2563EB]" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1F2937]"
                >
                  Discuss with Pawan Modi on WhatsApp <ArrowRight size={16} className="ml-2" />
                </a>
                <button
                  onClick={resetPlanner}
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                >
                  Create New Blueprint
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
