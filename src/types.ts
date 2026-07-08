import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}

export interface ApproachStep {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface Capability {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FootprintItem {
  country: string;
  work: string;
  x: string;
  y: string;
}

export interface SignatureConcept {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
  desc: string;
  skills: string[];
}
