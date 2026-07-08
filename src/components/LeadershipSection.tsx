import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Quote, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import { team } from "../data";
import { TeamMember } from "../types";

export default function LeadershipSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="w-full">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF3FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
          <ShieldCheck size={13} /> HappyWit Directors
        </div>
        <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Creativity With Purpose.<br />Experiences With Impact.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
          HappyWit is led by high-caliber veterans bringing together decades of experience design, robust operations, AV editing, and flawless project governance.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => {
          const isHovered = hoveredMember === member.name;
          return (
            <motion.div
              key={member.name}
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white p-3 shadow-md transition duration-300 hover:border-[#2563EB]/20 hover:shadow-xl"
              whileHover={{ y: -8 }}
            >
              {/* Photo Area with customized premium tone filter */}
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gray-900 aspect-[4/5]">
                <img
                  src={member.image}
                  alt={`${member.name} leadership profile`}
                  className={`h-full w-full object-cover object-top transition duration-700 group-hover:scale-105 ${
                    isHovered ? "brightness-105 saturate-100 contrast-100" : "brightness-95 saturate-[0.85] contrast-[1.02]"
                  }`}
                  loading="lazy"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />

                {/* Years badge inside picture */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                  <Calendar size={11} className="text-[#FF9900]" /> {member.experience}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] font-mono font-bold tracking-widest text-[#FF9900] uppercase">{member.role}</p>
                  <h4 className="mt-1 font-display text-2xl font-black tracking-tight">{member.name}</h4>
                </div>
              </div>

              {/* Text Description Area */}
              <div className="p-4 pt-5">
                <p className="line-clamp-2 text-sm leading-relaxed text-gray-500 min-h-[40px]">
                  {member.desc}
                </p>

                {/* Render limited skills cloud */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-gray-50 border border-gray-100 px-2 py-1 text-[10px] font-bold text-gray-600 transition group-hover:border-[#2563EB]/10 group-hover:bg-[#EEF3FF]/20"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="rounded-lg bg-gray-50 border border-gray-100 px-1.5 py-1 text-[10px] font-bold text-gray-400">
                      +{member.skills.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4 flex items-center justify-between text-xs font-bold text-[#2563EB] group-hover:text-[#FF9900] transition">
                  <span>View Full Profile</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Modal Drawer for Selected Leadership Member */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black"
            />

            {/* Modal body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70 backdrop-blur transition"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
                {/* Photo Col */}
                <div className="relative h-64 sm:h-auto bg-gray-900">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="rounded-full bg-[#FF9900] px-3 py-1 text-xs font-bold text-white shadow-md">
                      {selectedMember.experience}
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-black leading-tight">{selectedMember.name}</h3>
                    <p className="text-sm font-semibold text-white/80">{selectedMember.role}</p>
                  </div>
                </div>

                {/* Information Col */}
                <div className="p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#2563EB] uppercase">Executive Director bio</span>
                    
                    <div className="mt-4 relative bg-gray-50 border border-gray-100 rounded-2xl p-4 italic text-sm text-gray-600 flex items-start gap-2.5">
                      <Quote size={24} className="text-[#2563EB] shrink-0 opacity-40" />
                      <p className="relative z-10 font-medium">"{selectedMember.desc}"</p>
                    </div>

                    <div className="mt-6">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">Core Domain Expertise</h5>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedMember.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-[#EEF3FF] border border-[#2563EB]/10 px-3 py-1.5 text-xs font-bold text-[#2563EB]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-gray-100 pt-5 flex items-center justify-between">
                    <a
                      href="mailto:hello@happywitevents.com"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#111827] hover:text-[#2563EB] transition"
                    >
                      <Mail size={16} /> Contact Office
                    </a>
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="rounded-full border border-gray-200 px-5 py-2 text-xs font-semibold text-gray-500 hover:bg-gray-50"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
