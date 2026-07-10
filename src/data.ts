import {
  Rocket,
  Building2,
  Users,
  Eye,
  Sparkles,
  Route,
  UserCheck,
  FileText,
  Share2,
  BarChart3,
  Compass,
  HeartHandshake,
  Trophy,
  LayoutGrid,
  Film,
  Search,
  Palette,
  Activity,
  Megaphone,
  TrendingUp,
} from "lucide-react";
import { Service, FootprintItem, SignatureConcept, TeamMember, Stat, Capability, ApproachStep } from "./types";

export const services: Service[] = [
  {
    title: "Corporate & Brand Experiences",
    desc: "Comprehensive curation and flawless execution of high-profile Product Launches, interactive Town Halls, key executive Leadership Meets, and energetic Employee Meets.",
    icon: Building2,
    image: "https://i.ibb.co/rGHg9jSs/Chat-GPT-Image-Jul-8-2026-11-02-43-PM.png?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Creative & AV Production",
    desc: "Next-generation brand storytelling through premium Brand Films, immersive script-to-screen concepts, stunning 2D & 3D visual animatics, and cinematic VFX editing.",
    icon: Film,
    image: "https://i.ibb.co/j9ybr4W1/ai-assistant-modern-office-futuristic-technology-workspace-digital-innovation-artificial-inte.jpg?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exhibition",
    desc: "Architectural design and physical-digital building of immersive Exhibition Booths and sensory interactive brand zones that capture attention and drive exploration.",
    icon: LayoutGrid,
    image: "https://i.ibb.co/mr7NBq6G/66755.jpg",
  },
  {
    title: "Event Show Running",
    desc: "The ultimate live command center. We orchestrate split-second stage timing, multi-feed sensor integration, and theatrical audio-visual cue coordination to guarantee perfection.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const approach: ApproachStep[] = [
  { num: "01", title: "Discover", desc: "Understand the brand, audience, objective, culture and business context.", icon: Search },
  { num: "02", title: "Design", desc: "Shape meaningful moments, interactions and guest journeys.", icon: Palette },
  { num: "03", title: "Engage", desc: "Drive audience participation before, during and after the experience.", icon: Activity },
  { num: "04", title: "Amplify", desc: "Extend impact through content, social sharing and community conversations.", icon: Megaphone },
  { num: "05", title: "Measure", desc: "Learn what worked, what people felt and how the next experience can improve.", icon: TrendingUp },
];

export const capabilities: Capability[] = [
  {
    icon: Route,
    title: "Audience Journey Design",
    desc: "Designing every touchpoint from invite to post-event engagement.",
  },
  {
    icon: Users,
    title: "Live Engagement Ideas",
    desc: "Creating participation-led moments that audiences remember.",
  },
  {
    icon: UserCheck,
    title: "Smart Registration Flows",
    desc: "Simple, smooth and personalized guest onboarding.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experiences",
    desc: "Tailored moments based on audience profiles and interests.",
  },
  {
    icon: LayoutGrid,
    title: "Interactive Brand Zones",
    desc: "Immersive spaces that encourage exploration and engagement.",
  },
  {
    icon: FileText,
    title: "Content-Led Planning",
    desc: "Building experiences around stories, not just logistics.",
  },
  {
    icon: Share2,
    title: "Social Amplification",
    desc: "Designed for sharing, content creation and digital reach.",
  },
  {
    icon: BarChart3,
    title: "Post-Event Insights",
    desc: "Understanding engagement, participation and impact.",
  },
];

export const stats: Stat[] = [
  { value: "100+", label: "Years of Collective Experience" },
  { value: "500+", label: "Experiences Supported" },
  { value: "15+", label: "Countries Touched" },
  { value: "100+", label: "Brands Contributed To" },
];

export const footprint: FootprintItem[] = [
  { country: "India", work: "Corporate experiences, brand launches and culture programs", x: "68%", y: "48%" },
  { country: "UAE", work: "Leadership summits and premium corporate gatherings", x: "60%", y: "45%" },
  { country: "Sri Lanka", work: "Dealer, partner and business engagement programs", x: "69%", y: "58%" },
  { country: "Thailand", work: "Incentives, recognition and destination experiences", x: "76%", y: "55%" },
  { country: "Europe", work: "Creative support and event consulting across cultural hubs", x: "48%", y: "31%" },
  { country: "UK", work: "Experience design and planning support for international audiences", x: "43%", y: "28%" },
  { country: "Australia", work: "Creative development and experience thinking for flagship IPs", x: "84%", y: "73%" },
  { country: "South Africa", work: "Strategic event planning and local community activation support", x: "52%", y: "73%" },
  { country: "Singapore", work: "Corporate events, regional leadership meetings and incentive programs", x: "74%", y: "59%" },
  { country: "Indonesia", work: "Brand activations, conferences and destination experiences", x: "78%", y: "65%" },
  { country: "China", work: "Product launches, exhibitions and high-end business forums", x: "79%", y: "44%" },
  { country: "New Zealand", work: "Creative consulting and experiential brand design support", x: "92%", y: "82%" },
];

export const signatureConcepts: SignatureConcept[] = [
  {
    title: "Human Upgrade Festival",
    desc: "A future-focused transformation experience where technology, wellness, creativity, finance, career and culture come together.",
    icon: Sparkles,
  },
  {
    title: "Leadership Experience 2.0",
    desc: "A smarter leadership summit format designed around participation, deep insight and meaningful conversations.",
    icon: Compass,
  },
  {
    title: "Employee Festival",
    desc: "Recognition, culture, learning and belonging combined into one immersive employee platform.",
    icon: HeartHandshake,
  },
  {
    title: "Community Experience Platform",
    desc: "A year-round engagement ecosystem that extends beyond a single-day event.",
    icon: Users,
  },
  {
    title: "Dealer Engagement 2.0",
    desc: "Gamified engagement, immersive showcases and partner-led growth experiences.",
    icon: Trophy,
  },
];

export const experienceCategories = [
  "Leadership & Townhall Experiences",
  "Product & Brand Launches",
  "Dealer & Partner Meets",
  "Incentive & Reward Experiences",
  "Exhibitions & Experience Zones",
  "Community & Culture Experiences",
];

export const team: TeamMember[] = [
  {
    name: "Pawan Modi",
    role: "Creative Experience Director",
    experience: "15 Years Experience",
    image: "https://i.ibb.co/RpxP0bYL/Chat-GPT-Image-Jun-3-2026-07-33-02-PM.png",
    desc: "Transforms ideas into immersive, AI-powered brand experiences through world-class storytelling and creative strategy.",
    skills: ["2D & 3D Strategy", "Storytelling", "Experiential Tech", "Art Direction", "IP Ideation"],
  },
  {
    name: "Rahul Tiwari",
    role: "Operations Experience Director",
    experience: "20 Years Experience",
    image: "https://i.ibb.co/vxyYyJhS/1748581806843.jpg",
    desc: "Leads flawless event execution with rigorous operational, budget, and logistical coordination globally.",
    skills: ["Operations", "Budget Management", "Logistics Planning", "Global Execution", "Safety Protocols"],
  },
  {
    name: "Kulbir Singh",
    role: "Master of Event Experience",
    experience: "30 Years Experience",
    image: "https://i.ibb.co/n4mWbGX/Chat-GPT-Image-Jul-8-2026-09-18-51-PM.png",
    desc: "30+ years of high-impact strategic leadership, managing high-profile corporate clients and expanding business footprints.",
    skills: ["Strategic Leadership", "Client Relations", "Enterprise Growth", "Event Governance", "Risk Mitigation"],
  },
  {
    name: "Saurabh Sharma",
    role: "Chief Editor & Producer",
    experience: "15 Years Experience",
    image: "https://i.ibb.co/6Jr1vkJs/Whats-App-Image-2026-07-02-at-7-04-21-PM.jpg",
    desc: "Crafts cinematic narrative arcs, handling video production, AV direction, and post-production for premium brands.",
    skills: ["Creative Production", "AV Direction", "Post Production", "AV Producing", "Corporate Films", "Motion Editing"],
  },
   {
    name: "Anoop Chauhan",
    role: "Master of Event Experience",
    experience: "30 Years Experience",
    image: "https://i.ibb.co/B5mHfXZB/Chat-GPT-Image-Jul-10-2026-01-11-19-PM.png",
    desc: "Experienced experiential leader delivering high-impact corporate events and brand activations.",
    skills: ["Strategic Leadership", "Client Relations", "Enterprise Growth", "Event Governance", "Risk Mitigation"],
  },
];

export const heroImage = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85";
export const aboutImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";
export const footerImage = "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1400&q=80";

export const imageTone = "brightness-95 contrast-105 saturate-[0.90] transition duration-500 hover:scale-[1.02]";
export const portraitTone = "brightness-100 contrast-105 saturate-[0.95]";
export const brandOverlay = "absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#FF9900]/8 pointer-events-none";
