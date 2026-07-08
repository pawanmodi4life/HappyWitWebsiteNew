import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Globe, ArrowRight, Star } from "lucide-react";
import { footprint } from "../data";
import { FootprintItem } from "../types";

export default function ExperienceMap() {
  const [activeFootprint, setActiveFootprint] = useState<FootprintItem>(footprint[0]);

  return (
    <div className="w-full rounded-[2.5rem] border border-black/10 bg-white p-6 shadow-sm md:p-10 lg:p-12">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        
        {/* Left Side: Selected Region Card */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF2E0] px-3 py-1 text-xs font-semibold text-[#FF9900]">
              <Globe size={13} className="animate-spin-slow" /> Global Operations
            </div>
            <h3 className="mt-3 font-display text-3xl font-black text-gray-900 md:text-4xl">
              Cross-Border Footprint
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              A luxury showcase of world-class formats and corporate activations designed across major cultural and financial capitals.
            </p>
          </div>

          <div className="mt-8 relative overflow-hidden rounded-[2rem] border border-gray-100 bg-[#F8FAFC] p-6 shadow-sm">
            <div className="absolute top-0 right-0 h-32 w-32 bg-[#2563EB]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB] shadow-sm">
                <MapPin size={22} className="animate-bounce" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF9900]">Selected Territory</p>
                <h4 className="text-2xl font-black text-gray-900">{activeFootprint.country}</h4>
              </div>
            </div>

            <p className="mt-5 text-sm font-medium leading-relaxed text-gray-600">
              {activeFootprint.work}
            </p>

            <div className="mt-6 border-t border-gray-100 pt-5 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                <Star size={13} className="fill-[#FF9900] text-[#FF9900]" /> 5.0 Core Execution Rating
              </span>
              <a 
                href="#contact" 
                className="inline-flex items-center text-xs font-bold text-[#2563EB] hover:underline"
              >
                Inquire for Region <ArrowRight size={13} className="ml-1" />
              </a>
            </div>
          </div>

          <div className="mt-8 hidden lg:block">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Quick Navigation</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {footprint.slice(0, 5).map((item) => (
                <button
                  key={item.country}
                  onClick={() => setActiveFootprint(item)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                    activeFootprint.country === item.country
                      ? "bg-[#2563EB] text-white shadow-sm"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {item.country}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Map Visual */}
        <div className="flex flex-col">
          <div className="relative aspect-[1.55/1] min-h-[380px] overflow-hidden rounded-[2rem] border border-gray-100 bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF3FF_100%)] shadow-inner">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/5 pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2563EB]/5 pointer-events-none" />
            
            <svg viewBox="0 0 900 560" className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
              {/* Connected Route Paths to show premium network connectivity */}
              <path d="M612 268 C580 228 520 205 435 185 C365 168 330 146 300 116" fill="none" stroke="#2563EB" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="5 5" />
              <path d="M612 268 C590 292 560 327 520 408" fill="none" stroke="#2563EB" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="5 5" />
              <path d="M612 268 C690 278 745 318 756 408" fill="none" stroke="#2563EB" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="5 5" />
              <path d="M612 268 C638 285 663 312 681 325" fill="none" stroke="#2563EB" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="5 5" />
              <path d="M612 268 C585 253 560 249 540 252" fill="none" stroke="#FF9900" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="5 5" />
            </svg>

            {/* Pulsing Active Node Markers */}
            {footprint.map((item) => {
              const isActive = activeFootprint.country === item.country;
              return (
                <button
                  key={item.country}
                  type="button"
                  onClick={() => setActiveFootprint(item)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-10 group"
                  style={{ left: item.x, top: item.y }}
                >
                  <span className={`absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full transition duration-300 ${
                    isActive ? "bg-[#2563EB]/20 animate-ping" : "bg-transparent group-hover:bg-gray-200/50"
                  }`} />
                  
                  <span className={`relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-white shadow-md transition duration-300 ${
                    isActive ? "bg-[#FF9900] scale-125" : "bg-[#2563EB] group-hover:bg-[#FF9900] group-hover:scale-110"
                  }`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  {/* Desktop Hover Label */}
                  <span className={`absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-lg border px-2.5 py-1 text-[10px] font-bold shadow-sm pointer-events-none transition duration-200 ${
                    isActive 
                      ? "border-[#2563EB]/20 bg-white text-[#111827] opacity-100 scale-100" 
                      : "border-gray-100 bg-white/90 text-gray-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                  }`}>
                    {item.country}
                  </span>
                </button>
              );
            })}

            {/* HUD Status Bar overlay */}
            <div className="absolute left-4 bottom-4 rounded-full border border-gray-100 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 shadow-sm backdrop-blur">
              ⚡ LIVE EVENT DEPLOYMENT TERMINALS
            </div>
          </div>

          {/* Navigation Grid beneath the map for seamless territory exploration */}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
            {footprint.map((item) => {
              const isActive = activeFootprint.country === item.country;
              return (
                <button
                  key={item.country}
                  type="button"
                  onClick={() => setActiveFootprint(item)}
                  className={`rounded-xl border px-2 py-2.5 text-center text-xs font-semibold transition truncate ${
                    isActive 
                      ? "border-[#2563EB] bg-[#EEF3FF] text-[#2563EB]" 
                      : "border-gray-100 bg-gray-50/50 text-gray-500 hover:bg-white"
                  }`}
                >
                  {item.country}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
