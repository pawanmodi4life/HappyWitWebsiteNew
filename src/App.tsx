import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  HeartHandshake,
  Lightbulb,
  Globe2,
  Sparkles,
  Phone,
  Mail,
  Linkedin,
  MessageSquare,
  Award,
  Compass,
  CheckCircle,
} from "lucide-react";

// Import Custom Modular Components
import ServicesSection from "./components/ServicesSection";
import HeroCarousel from "./components/HeroCarousel";
import ExperienceMap from "./components/ExperienceMap";
import LeadershipSection from "./components/LeadershipSection";
import ExperiencePlanner from "./components/ExperiencePlanner";
import BuyerQuestions from "./components/BuyerQuestions";

// Import Data
import {
  approach,
  capabilities,
  stats,
  signatureConcepts,
  experienceCategories,
  aboutImage,
  footerImage,
  imageTone,
  brandOverlay,
} from "./data";

export default function App() {
  return (
    <main className="min-h-screen bg-[#F8F9FC] text-gray-900 font-sans selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
      
      {/* 1. Glassmorphic Sticky Header */}
      <header className="sticky top-0 z-50 px-6 py-4 md:px-12 lg:px-20">
        <nav className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-black/5 bg-white/70 px-6 py-3 shadow-md backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center" aria-label="HappyWit Home">
              <img
                src="https://i.ibb.co/p68ZYTDW/Logo.png"
                alt="HappyWit Experience Design Studio Logo"
                className="h-10 md:h-12 w-auto transition hover:opacity-95"
              />
            </a>
          </div>

          <div className="hidden gap-8 text-sm font-semibold text-gray-500 lg:flex">
            <a href="#about" className="transition hover:text-[#2563EB]">About</a>
            <a href="#services" className="transition hover:text-[#2563EB]">Services</a>
            <a href="#experience" className="transition hover:text-[#2563EB]">Experience Map</a>
            <a href="#planner" className="transition hover:text-[#2563EB]">Experience Planner</a>
            <a href="#team" className="transition hover:text-[#2563EB]">Leadership</a>
            <a href="#contact" className="transition hover:text-[#2563EB]">Contact</a>
          </div>

          <a
            href="https://wa.me/918851221600"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition duration-300 hover:bg-gray-800 hover:-translate-y-0.5"
          >
            Book Discovery Call
          </a>
        </nav>
      </header>

      {/* 2. Full-bleed brand experience carousel */}
      <HeroCarousel />

      {/* Three connected pillars of the HappyWit philosophy */}
      <section aria-label="Our creative philosophy" className="overflow-hidden bg-[#07132D] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF9900]">Our philosophy, in three dimensions</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">Ideas begin with people. Technology expands them. Emotion makes them last.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3 [perspective:1200px]">
            {[
              { n: "01", title: "Human Creativity", copy: "The original thought. The strategic insight. The story only people can tell.", gradient: "from-[#1752C9]/45 via-[#1752C9]/10 to-white/5" },
              { n: "02", title: "Enhanced by AI", copy: "More intelligent possibilities, shaped by human judgment and creative intent.", gradient: "from-[#7253DC]/40 via-[#1752C9]/10 to-white/5" },
              { n: "03", title: "Driven by Emotion", copy: "The connection that turns a moment into a lasting brand memory.", gradient: "from-[#FF9900]/35 via-[#1752C9]/10 to-white/5" },
            ].map((pillar) => (
              <div key={pillar.n} tabIndex={0} className={`group relative isolate min-h-[280px] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br ${pillar.gradient} p-8 shadow-2xl transition-transform duration-500 hover:[transform:rotateY(-4deg)_rotateX(3deg)_translateY(-8px)] focus-visible:[transform:translateY(-5px)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF9900] motion-reduce:transform-none`}>
                <div aria-hidden="true" className="absolute -right-12 -top-12 h-52 w-52 rounded-full border border-white/15 bg-white/5 shadow-[inset_0_0_45px_rgba(255,255,255,.08)] transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-4 group-hover:rotate-12" />
                <div aria-hidden="true" className="absolute right-10 top-20 h-24 w-24 rotate-45 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm transition-transform duration-700 group-hover:rotate-90" />
                <div className="relative flex h-full flex-col justify-end">
                  <span className="mb-auto font-mono text-xs font-bold tracking-[0.2em] text-[#FFB04D]">{pillar.n} / 03</span>
                  <h3 className="font-display text-2xl font-black tracking-tight md:text-3xl">{pillar.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">{pillar.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Horizontal Stats Board */}
      <section className="px-6 relative z-10 md:px-12 lg:px-20 -mt-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/5 bg-white/90 p-8 shadow-lg backdrop-blur-md grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left relative after:hidden lg:after:block after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-gray-100 last:after:hidden">
              <div className="text-4xl font-black font-display tracking-tight text-[#2563EB] md:text-5xl">{stat.value}</div>
              <p className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. About Us Section (Asymmetric Bento) */}
      <section id="about" className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF9900] uppercase">Who We Are</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              We build experiences <br />that move people.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              HappyWit brings audience insight, creative storytelling and practical execution together. Our scope includes event concepts, exhibition stall design, 2D/3D design, scripting, AV content, immersive engagement and show calling, shaped around your audience and objectives.
            </p>
            
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <span className="text-xl">❤️</span>
                <h4 className="mt-3 font-bold text-gray-900">Emotion-First</h4>
                <p className="mt-1 text-xs text-gray-500">Every detail is mapped directly to human feeling and sensory feedback loops.</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <span className="text-xl">🤖</span>
                <h4 className="mt-3 font-bold text-gray-900">AI & Tech Enhanced</h4>
                <p className="mt-1 text-xs text-gray-500">We utilize custom digital frameworks to drive deep participant co-creation.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-3 shadow-md">
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3]">
              <img
                src={aboutImage}
                alt="Creative agency brainstorming experiential layout"
                className={`h-full w-full object-cover ${imageTone}`}
                loading="lazy"
              />
              <div className={brandOverlay} />
            </div>
            
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {["Experience-Led", "Co-Created", "Global Scale"].map((item) => (
                <div key={item} className="rounded-2xl bg-gray-50 border border-gray-100 p-4 text-center text-xs font-bold text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Capabilities Grid */}
      <section id="services" className="bg-white px-6 py-28 md:px-12 lg:px-20 border-y border-gray-100">
        <div className="mx-auto max-w-7xl">
          <ServicesSection />
        </div>
      </section>

      {/* 6. "How We Think" Step-by-Step interactive timeline */}
      <section className="bg-gradient-to-b from-[#EEF3FF]/40 to-transparent px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF9900] uppercase">The Framework</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              A precise process for<br />meaningful experiences.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {approach.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative h-full rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:border-[#2563EB]/10 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-black font-display text-gray-100 group-hover:text-[#2563EB]/10 transition duration-300">
                      {step.num}
                    </div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition-colors duration-300 group-hover:bg-[#EEF3FF] group-hover:text-[#2563EB]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-black text-gray-900 group-hover:text-[#2563EB] transition">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. "What We Bring" Brand Capabilities Grid */}
      <section className="px-6 py-28 md:px-12 lg:px-20 border-t border-gray-100">
        <div className="mx-auto max-w-7xl grid gap-16 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#2563EB] uppercase">Tactical Delivery</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Practical creativity with intelligent engagement.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              We deploy physical installations and custom tech integrations only where they actively improve the guest journey, amplify the brand message, or provide actionable feedback.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:border-[#2563EB]/15 hover:shadow-md"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#2563EB] shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-gray-900">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Global Experience Footprint Section */}
      <section id="experience" className="bg-white px-6 py-28 md:px-12 lg:px-20 border-y border-gray-100">
        <div className="mx-auto max-w-7xl">
          <ExperienceMap />
        </div>
      </section>

      {/* 9. Experience Planner (Interactive Lead Magnet Tool) */}
      <section id="planner" className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <ExperiencePlanner />
        </div>
      </section>

      {/* 10. Signature Experience Concept Concepts Showcase */}
      <section className="bg-white px-6 py-28 md:px-12 lg:px-20 border-y border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF9900] uppercase">Our Intellectual IPs</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Signature concepts we believe in.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-500">
              Original HappyWit experiential blueprints designed to act as custom culture-platforms, corporate milestones, or future IP programs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {signatureConcepts.map((concept, i) => {
              const Icon = concept.icon;
              return (
                <div
                  key={concept.title}
                  className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#2563EB] shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-black text-gray-900">{concept.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">{concept.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Experience Categories Taxonomy List */}
      <section className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#2563EB] uppercase">Our Catalog</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              What we have helped create.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-500">
              A comprehensive taxonomy of experiential projects and corporate environments fully supported by HappyWit.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {experienceCategories.map((cat) => (
              <div key={cat} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF3FF] text-[#2563EB]">
                  <Globe2 size={16} />
                </div>
                <span className="text-sm font-semibold text-gray-700">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Leadership Team Section */}
      <section id="team" className="bg-[#EEF3FF]/40 border-t border-gray-100 px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <LeadershipSection />
        </div>
      </section>

      {/* 13. "The HappyWit Difference" Segment */}
      <section className="px-6 py-28 md:px-12 lg:px-20 border-t border-gray-100">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF9900] uppercase">The Philosophy</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              We don't design events.<br />We design what guests remember.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              Our core objective is emotional resonance. We believe true engagement occurs when interactive mechanics align flawlessly with a human narrative.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Emotion",
                desc: "People register and retrieve events based on how they felt inside. We build visual and physical atmospheres to curate this feeling.",
              },
              {
                title: "Connection",
                desc: "Meaning is established long before a stage is erected. We anchor our creative concepts around genuine corporate or brand connections.",
              },
              {
                title: "Participation",
                desc: "True engagement is active, not passive. We integrate technology so attendees are direct participants, not just observers.",
              },
              {
                title: "AI Integration",
                desc: "We utilize algorithmic content generators, smart photography tools, and semantic onboarding to elevate the guest journey.",
              },
            ].map((diff) => (
              <div key={diff.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h4 className="font-display text-lg font-black text-gray-900">{diff.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{diff.desc}</p>
              </div>
            ))}

            <div className="col-span-full rounded-2xl bg-gray-900 p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full blur-2xl" />
              <p className="text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase">The Experiential Formula</p>
              <h4 className="mt-3 font-display text-3xl font-black">Memorable Experiences</h4>
              <p className="mt-4 text-sm font-semibold text-white/80">Emotion + Genuine Connection + Active Participation + Applied Technology</p>
            </div>
          </div>
        </div>
      </section>

      <BuyerQuestions />

      {/* 14. Luxury Dark Inquiries & Contact Section */}
      <section id="contact" className="relative px-6 py-20 md:px-12 lg:px-20 bg-gray-950 text-white overflow-hidden">
        {/* Glow Effects inside Contact section */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_25%_75%,rgba(255,153,0,0.10),transparent_35%)] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl relative z-10 rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            
            {/* Contact Details pane */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF9900] uppercase">Direct Connection</span>
                <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                  Let's Create<br />Something Remarkable
                </h2>
                <p className="mt-5 text-sm text-gray-400">
                  Every memorable brand experience begins with a single conversation. Talk to HappyWit Events, a New Delhi-based Experience Intelligence Studio, about your audience, objectives and brief.
                </p>
              </div>

              {/* Inquiry contacts block */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">Mobile Desk</p>
                  <a href="tel:+918851221600" className="mt-1 block text-base font-bold hover:text-[#FF9900] transition">
                    +91 8851221600
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">Inquiries Mail</p>
                  <a href="mailto:hello@happywitevents.com" className="mt-1 block text-base font-bold hover:text-[#FF9900] transition">
                    hello@happywitevents.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">Digital Hub</p>
                  <a href="https://www.happywitevents.com" target="_blank" rel="noopener noreferrer" className="mt-1 block text-base font-bold hover:text-[#FF9900] transition">
                    www.happywitevents.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase">Executive LinkedIn</p>
                  <a href="https://www.linkedin.com/company/happywit-experiences/" target="_blank" rel="noopener noreferrer" className="mt-1 block text-base font-bold hover:text-[#FF9900] transition">
                    happywit-experiences
                  </a>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://wa.me/918851221600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#FF9900] px-7 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-[#e68a00] hover:scale-105"
                >
                  WhatsApp Pawan Modi <ArrowRight size={15} className="ml-1.5" />
                </a>
                <span className="text-xs font-medium text-gray-400">Experience-led. Human-centered.</span>
              </div>
            </div>

            {/* Immersive Footer Visual */}
            <div className="relative min-h-[360px] lg:min-h-full bg-gray-900">
              <img
                src={footerImage}
                alt="Glowing experiential set design and event technology"
                className="absolute inset-0 h-full w-full object-cover brightness-75 contrast-105 saturate-[0.80]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/15 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase">Closing Philosophy</p>
                <p className="mt-2 text-xl font-black leading-snug">
                  Every great experience begins with a single meaningful moment.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Studio footer watermark */}
        <footer className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} HappyWit Design Studio & Experiences. All rights reserved.</p>
        </footer>
      </section>

    </main>
  );
}
