import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, Check, Compass, Info, Zap } from "lucide-react";
import { services } from "../data";
import { Service } from "../types";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Custom detailed data to make the service interaction exceptionally rich
  const getServiceDetails = (title: string) => {
    switch (title) {
      case "Corporate & Brand Experiences":
        return {
          whatWeOffer: "HappyWit develops corporate event and product launch concepts around your audience, message and objectives. The agreed scope can include the theme, guest journey, stage and screen design, invitations, presentation content, engagement ideas and show flow. Share the date, city, guest count, venue status and budget to define the creative and production requirements.",
          aiAndHuman: "Human insight shapes the story and the moments guests take part in. AI can support early concept exploration, content drafts and personalised engagement ideas, with the creative team reviewing the work against the brief.",
          techs: ["QR registration and digital check-in", "Live audience polls", "Interactive screens and engagement zones", "AI-assisted photo experiences"]
        };
      case "Creative & AV Production":
        return {
          whatWeOffer: "Creative and AV production connects the event message with the content guests see and hear. HappyWit's scope can include concepts, scripts, storyboards, voiceover coordination, brand films, event openers, motion graphics, 2D/3D visuals and video editing. Screen dimensions, duration, language, available footage, approvals and delivery formats shape the production plan.",
          aiAndHuman: "Human creative direction leads the script, visual treatment and edit. AI can help explore visual directions and develop selected content elements, with review for brand fit and consistency before delivery.",
          techs: ["Motion graphics for event LED screens", "2D/3D visualisation and animation", "AI-assisted visual development", "Video edits and screen-format adaptations"]
        };
      case "Exhibition":
        return {
          whatWeOffer: "HappyWit plans exhibition stalls around the stand dimensions, open sides, organiser rules and products on display. The scope can include layouts, 3D concepts, brand graphics, demo zones, AV content, meeting areas and fabrication. For technology brands, the design can connect a product demonstration with an explanation area and a place for sales conversations. Confirm materials, power and AV needs, approvals, installation and dismantling responsibilities in the proposal.",
          aiAndHuman: "The design team leads spatial planning, product storytelling and material choices. AI can support concept exploration and visual development. Layout decisions follow the actual stand plan, organiser requirements and practical production review.",
          techs: ["Touchscreen product explainers", "Digital product demonstration content", "AR or AI engagement concepts", "QR access to product information"]
        };
      case "Event Show Running":
        return {
          whatWeOffer: "Show calling brings the agenda, speakers, performers and technical cues into one run of show. HappyWit can support cue sheets, rehearsal planning, speaker transitions and live coordination across video, sound, lighting and stage teams. Share the agenda, content list, technical plan and rehearsal window so responsibilities and backup cues can be agreed.",
          aiAndHuman: "The show caller makes the live timing decisions and communicates cues with the crew. Digital planning tools and AI-assisted document preparation can support the process, with the final cue sequence reviewed and rehearsed by the people running the show.",
          techs: ["Digital run-of-show and cue sheets", "Presentation and video playback planning", "Crew communication and rehearsal cues", "Backup playback and contingency planning"]
        };
      default:
        return {
          whatWeOffer: "End-to-end premium curation of corporate formats, live storytelling, and high-impact physical activations designed around audience emotion and brand recall.",
          aiAndHuman: "Expert creative directors align the human story with intelligent algorithmic tools to craft responsive design cues and personalized customer journeys.",
          techs: ["Interactive touchscreens", "Immersive audio soundscapes", "Custom localized web interfaces"]
        };
    };
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl text-center mb-16">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF2E0] px-3 py-1 text-xs font-semibold text-[#FF9900]">
          <Compass size={13} /> Specialized Capabilities
        </div>
        <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Designed for brands that want<br />to be felt, not just seen.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
          HappyWit is a New Delhi-based studio for corporate events, exhibition stall design and fabrication, creative AV and show calling. We connect the concept, content and production plan around your audience, venue and objectives.
        </p>
      </div>

      {/* Services Bento Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              onClick={() => setSelectedService(item)}
              className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-3 shadow-md cursor-pointer transition hover:-translate-y-2 hover:shadow-xl hover:border-[#2563EB]/15"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Image Container with Custom Gradients */}
              <div className="relative overflow-hidden rounded-[1.6rem] aspect-[4/3] w-full bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 brightness-95 saturate-[0.85]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Embedded floating index number */}
                <span className="absolute top-3 right-3 text-xs font-mono font-bold text-white/50 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  0{index + 1}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB] shadow-sm transition duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-black leading-tight text-gray-900 group-hover:text-[#2563EB] transition">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-[#2563EB] group-hover:text-[#FF9900] transition">
                  <span className="flex items-center gap-1.5"><Info size={13} /> Core Mechanics</span>
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Modal Drawer for Service Mechanics */}
      <AnimatePresence>
        {selectedService && (() => {
          const Icon = selectedService.icon;
          const details = getServiceDetails(selectedService.title);
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-6 shadow-2xl z-10 md:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition"
                  aria-label="Close"
                >
                  ✕
                </button>

                <div className="flex items-center gap-3.5 border-b border-gray-100 pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB] shadow-sm">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF9900] uppercase">Experiential design framework</span>
                    <h3 className="font-display text-2xl font-black text-gray-900">{selectedService.title}</h3>
                  </div>
                </div>

                <div className="mt-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                  {/* What We Offer */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-[#2563EB]">💼</span>
                      What We Offer
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                      {details.whatWeOffer}
                    </p>
                  </div>

                  {/* How AI & Human Creativity is Aligned */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-600">✨</span>
                      AI & Human Creativity Aligned
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 bg-[#EEF3FF]/45 border border-[#EEF3FF] rounded-2xl p-4 font-medium">
                      {details.aiAndHuman}
                    </p>
                  </div>

                  {/* Technology Integration */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-600">⚡</span>
                      Technology and delivery options
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {details.techs.map((tech, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-100 p-2.5 rounded-xl">
                          <Check size={14} className="mt-0.5 shrink-0 text-[#2563EB]" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-5 flex items-center justify-between">
                  <a
                    href="https://wa.me/918851221600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1F2937] transition"
                  >
                    Discuss Campaign <ArrowRight size={13} />
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-400 hover:bg-gray-50"
                  >
                    Dismiss
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
