/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  Home as HomeIcon, 
  History, 
  Briefcase, 
  Mail, 
  ArrowRight, 
  Terminal, 
  ShoppingCart, 
  MousePointerClick, 
  CheckCircle2,
  ExternalLink,
  Code2,
  Share2,
  Send,
  Cpu,
  TrendingUp,
  Layout as LayoutIcon,
  ChevronRight,
  Loader2
} from 'lucide-react';

import TerminalWindow from './components/Terminal.tsx';

// --- Types ---
// ... (rest of the imports and types)

type Page = 'home' | 'experience' | 'projects' | 'contact';

// --- Components ---

const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl shadow-2xl shadow-slate-950/50">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant/20">
            <img 
              alt="Nikko Josef Avila Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/d/1nZ4SFuBGn0iYTZ7JjdIlFAWzNuSWgjaQ"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-lg tracking-[0.2em] font-black text-slate-50 font-headline uppercase">NIKKO JOSEF AVILA</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-label text-[10px] font-bold tracking-widest uppercase">
          <button 
            onClick={() => setPage('home')}
            className={`${activePage === 'home' ? 'text-sky-400' : 'text-slate-400 hover:text-teal-400'} transition-colors duration-300`}
          >
            Home
          </button>
          <button 
            onClick={() => setPage('experience')}
            className={`${activePage === 'experience' ? 'text-sky-400' : 'text-slate-400 hover:text-teal-400'} transition-colors duration-300`}
          >
            Experience
          </button>
          <button 
            onClick={() => setPage('projects')}
            className={`${activePage === 'projects' ? 'text-sky-400' : 'text-slate-400 hover:text-teal-400'} transition-colors duration-300`}
          >
            Projects
          </button>
          <button 
            onClick={() => setPage('contact')}
            className={`${activePage === 'contact' ? 'text-sky-400' : 'text-slate-400 hover:text-teal-400'} transition-colors duration-300`}
          >
            Contact
          </button>
        </nav>

        <button className="text-sky-400 scale-95 active:scale-90 transition-transform md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

const BottomNav = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  const navItems: { id: Page; label: string; icon: any }[] = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'experience', label: 'Experience', icon: History },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900/80 backdrop-blur-2xl rounded-full border border-slate-800/50 shadow-[0_20px_40px_rgba(6,14,32,0.6)] flex justify-around items-center px-4 py-3 z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setPage(item.id)}
          className={`flex flex-col items-center justify-center transition-all px-4 py-1 rounded-full ${
            activePage === item.id 
              ? 'text-sky-400 bg-sky-400/10' 
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <item.icon size={20} className="mb-1" />
          <span className="font-label text-[10px] font-bold tracking-widest uppercase">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

const HomePage = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-24"
    >
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase font-label">Full Stack Developer & AI Integrator</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter text-on-surface leading-[0.9] mb-8"
          >
            Architecting <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-tertiary to-primary">Digital Solutions:</span> <br/>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-on-surface-variant block mt-6 max-w-2xl">
              Modern Websites, Scalable Applications, and AI-Driven Integration
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-on-surface-variant leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12 font-body"
          >
            I bridge the gap between complex technology and seamless user experiences. Specializing in high-performance web development, custom application architecture, and integrating cutting-edge AI assistants to streamline business operations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button className="px-8 py-4 rounded-full bg-primary text-on-primary font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20 flex items-center gap-2 group hover:scale-105 transition-all duration-300">
              Explore Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface font-bold text-sm uppercase tracking-widest hover:bg-surface-container transition-all duration-300">
              Consultation
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 order-1 lg:order-2 w-full"
        >
          <TerminalWindow />
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'AI Integration', desc: 'Implementing intelligent LLM-powered assistants and automation to streamline business workflows.', icon: Cpu, color: 'tertiary' },
          { title: 'Custom Architecture', desc: 'Building scalable backend infrastructures and high-performance frontends that grow with your brand.', icon: Terminal, color: 'primary' },
          { title: 'Strategic Growth', desc: 'Leveraging years of Amazon Account Management experience to build results-oriented digital products.', icon: TrendingUp, color: 'on-secondary-container' },
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-xl bg-surface-container-high border border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
            <item.icon size={24} className={`text-${item.color} mb-4`} />
            <h3 className="text-xl font-headline font-bold mb-3">{item.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Featured Products Section */}
      <div className="mt-24">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-headline font-extrabold tracking-tight text-on-surface">Featured Digital Products</h2>
          <div className="h-px flex-grow bg-outline-variant/20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Seff Car Rental', desc: 'Premium booking platform with a high-performance architecture.', icon: Briefcase, tag: 'Web App', color: 'primary' },
            { title: 'B&MC Rental', desc: 'Robust rental service featuring real-time availability tracking.', icon: Briefcase, tag: 'Fleet Mgmt', color: 'tertiary' },
            { title: 'Akitai Shop', desc: 'Elegant storefront focused on fluid brand storytelling.', icon: ShoppingCart, tag: 'E-Commerce', color: 'primary' },
            { title: 'Portal Tasks', desc: 'Comprehensive SaaS application for task monitoring and productivity.', icon: LayoutIcon, tag: 'SaaS', color: 'tertiary' },
          ].map((item, i) => (
            <div key={i} className={`group p-6 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:border-${item.color}/30 transition-all duration-300`}>
              <div className="flex justify-between items-start mb-4">
                <item.icon size={20} className={`text-${item.color}`} />
                <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">{item.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ExperiencePage = () => {
  const experiences = [
    {
      period: '2025 — 2026',
      role: 'Full Stack Developer',
      company: 'Freelance',
      tags: ['Python', 'PostgreSQL', 'Vue.js'],
      icon: Terminal,
      color: 'primary',
      points: [
        'Developed a scalable inventory management system for e-commerce clients using Python/Django.',
        'Integrated third-party payment gateways (Stripe, PayPal) ensuring secure and seamless checkout experiences.',
        'Refactored legacy database schemas, optimizing query performance by 25%.'
      ]
    },
    {
      period: '2023 — 2025',
      role: 'Amazon Account Manager',
      company: 'Freelance',
      tags: ['PPC Optimization', 'E-commerce', 'Shopify'],
      icon: ShoppingCart,
      color: 'tertiary',
      reverse: true,
      points: [
        'Optimized product listings through comprehensive keyword research, leading to an increase in organic search visibility and sales.',
        'Managed and optimized PPC campaigns achieving a significant reduction in ACoS and increase in ROAS.',
        'Established and nurtured relationships with new suppliers, improving product sourcing efficiency, and reducing cost of goods.',
        'Drove external traffic to Amazon listings through TikTok and Shopify.'
      ]
    },
    {
      period: '2022 — 2023',
      role: 'Amazon Account Manager',
      company: 'Basilio Inc. Company',
      tags: ['Product Research', 'SEO', 'Marketing'],
      icon: MousePointerClick,
      color: 'outline-variant',
      points: [
        'Keyword Research and Listing Optimization',
        'Managing PPC Product Research',
        'Outside Traffic Management'
      ]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto"
    >
      <div className="mb-24">
        <span className="font-label text-tertiary tracking-[0.3em] uppercase text-xs mb-4 block">Professional Journey</span>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-none mb-6">Experience <span className="text-primary">Timeline</span></h1>
        <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
          A track record of driving growth in e-commerce and building robust digital architectures for diverse technical landscapes.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-tertiary/50 to-surface-container-low -translate-x-1/2 opacity-20 hidden md:block"></div>
        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <div key={i} className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className={`${exp.reverse ? 'md:order-2' : 'md:text-right'}`}>
                <span className="font-label text-primary-fixed-dim tracking-widest text-sm mb-2 block">{exp.period}</span>
                <h3 className="font-headline text-2xl font-bold text-on-surface">{exp.role}</h3>
                <p className="text-tertiary-fixed-dim font-medium mb-4">{exp.company}</p>
                <div className={`flex flex-wrap ${!exp.reverse ? 'md:justify-end' : ''} gap-2 mb-6`}>
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 hidden md:block">
                <div className={`w-12 h-12 bg-surface-container-lowest rounded-full border-2 border-${exp.color} flex items-center justify-center shadow-[0_0_20px_rgba(137,206,255,0.3)]`}>
                  <exp.icon size={20} className={`text-${exp.color}`} />
                </div>
              </div>

              <div className={`pl-12 md:pl-0 ${exp.reverse ? 'md:order-1' : ''}`}>
                <div className={`bg-surface-container p-8 rounded-xl border-${exp.reverse ? 'r' : 'l'}-4 border-${exp.color} ${exp.reverse ? 'md:text-right' : ''} shadow-2xl shadow-slate-950/20`}>
                  <ul className="space-y-4 text-on-surface-variant leading-relaxed">
                    {exp.points.map((point, j) => (
                      <li key={j} className={`flex ${exp.reverse ? 'md:flex-row-reverse' : ''} gap-3`}>
                        <CheckCircle2 size={14} className={`text-${exp.color} mt-1.5 shrink-0`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web App', 'E-Commerce', 'SaaS', 'Fleet Management'];

  const projects = [
    {
      title: 'Seff Car Rental',
      desc: 'A premium car rental platform serving Tacloban, Leyte, and Samar with a sleek booking interface.',
      img: 'https://lh3.googleusercontent.com/d/1mEbHuQBxvDU7kx_uFcWtG9pS0xp9rVSc',
      tags: ['Automotive', 'Web App'],
      span: 'md:col-span-8',
      color: 'primary',
      stack: ['REACT', 'NODE.JS', 'POSTGRES'],
      impact: '99.9% Uptime'
    },
    {
      title: 'Akitai',
      desc: 'An elegant e-commerce experience for handmade jewelry and accessories, focusing on brand storytelling.',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
      tags: ['E-Commerce'],
      span: 'md:col-span-4',
      color: 'tertiary',
      stack: ['SHOPIFY', 'LIQUID'],
      impact: '2x Sales Growth'
    },
    {
      title: 'Portal',
      desc: 'A comprehensive application for creating and monitoring tasks with integrated time tracking.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6yvFCYEUeXaSGSfXChQm5mCJRCDuNOiOUX3fg0mmZ01_N7L7ZJjwIL-99TsIYQCv-DdO8zv2JI3i8H148-jvoqictS2ZcxOKKbfFYAKPCs98eKir03Ucm8YI-VmLRbzBeGWfgpOdAqar4iBg96iRYTmjduruN3qGSgogBuVN8nzmOe4qsSHaQ0hg4V_KQIpvULR2BAjO2PgA4hdvDkTO8L1qVHL7B3Nk5NMnzhipWqLAgHIgZZpUcXBZ8D9FgX0V-9OUdKqpOmgYu',
      tags: ['SaaS'],
      span: 'md:col-span-4',
      color: 'primary',
      stack: ['NEXT.JS', 'SUPABASE'],
      impact: '500+ Active Users'
    },
    {
      title: 'B&MC Car Rental',
      desc: 'A robust car rental service website featuring fleet management and real-time availability.',
      img: 'https://lh3.googleusercontent.com/d/16viy-ww7C7V25NDHeI9IlB6kwG3iXO8g',
      tags: ['Fleet Management'],
      span: 'md:col-span-8',
      color: 'tertiary',
      stack: ['REACT', 'NODE.JS', 'POSTGRES'],
      impact: 'Real-time Tracking'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary font-label">Portfolio 2026</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface max-w-3xl leading-[1.1]">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Work</span> & Digital Experiments.
        </h2>
        <p className="mt-8 text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
          A curated selection of projects focusing on high-performance architecture, human-centric design, and kinetic user experiences.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
              filter === cat 
                ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20 scale-105' 
                : 'bg-surface-container-high text-on-surface-variant border-outline-variant/10 hover:border-primary/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {filteredProjects.map((project, i) => (
          <div key={i} className={`${project.span} group relative overflow-hidden rounded-2xl bg-surface-container shadow-2xl transition-all duration-500 hover:bg-surface-container-high border border-outline-variant/5`}>
            <div className={`grid ${project.span === 'md:col-span-8' ? 'md:grid-cols-2' : 'grid-cols-1'} h-full`}>
              <div className={`relative overflow-hidden ${project.span === 'md:col-span-8' ? 'h-full min-h-[350px]' : 'aspect-video'}`}>
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                  src={project.img} 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Impact Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full bg-${project.color}/20 backdrop-blur-md border border-${project.color}/30 text-[10px] font-black text-${project.color} uppercase tracking-widest`}>
                    {project.impact}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-[10px] font-bold tracking-widest uppercase text-${project.color} font-label bg-${project.color}/10 px-3 py-1 rounded-full`}>{tag}</span>
                    ))}
                  </div>
                  <h3 className={`text-3xl md:text-4xl font-headline font-black mb-4 group-hover:text-${project.color} transition-colors tracking-tight`}>{project.title}</h3>
                  <p className="text-on-surface-variant text-base leading-relaxed mb-8 max-w-md">{project.desc}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    {project.stack?.map(s => (
                      <span key={s} className="text-on-secondary-container text-[10px] font-black font-label tracking-widest uppercase opacity-60">{s}</span>
                    ))}
                  </div>
                  <button className={`inline-flex items-center gap-2 text-${project.color} font-black uppercase text-xs tracking-[0.2em] group/btn`}>
                    View Case Study 
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-lowest text-center relative overflow-hidden border border-outline-variant/10">
        <div className="relative z-10">
          <h3 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-on-surface">Interested in collaborating?</h3>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently available for new projects and creative partnerships. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-on-primary-container rounded-full text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Start a Conversation
            </button>
            <button className="w-full md:w-auto px-8 py-4 border border-outline-variant/30 rounded-full text-on-surface font-bold hover:bg-primary/5 transition-colors">
              Download Resume
            </button>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px]"></div>
      </div>
    </motion.section>
  );
};

const ContactPage = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20"
    >
      <span className="text-tertiary font-label text-xs tracking-[0.2em] uppercase mb-6">Get in touch</span>
      <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-8 leading-[0.9]">
        LET'S BUILD <br/>
        <span className="text-primary">SOMETHING</span> <br/>
        ICONIC.
      </h2>
      <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-16 font-body leading-relaxed">
        Currently available for new opportunities and high-impact design collaborations. Whether you have a specific project in mind or just want to say hello, my inbox is always open. The best and only way to reach me is via email.
      </p>
      
      <div className="flex flex-col items-center gap-8 justify-center w-full">
        <a 
          href="mailto:avilanikkojosef1@gmail.com"
          className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center gap-6 hover:scale-105 transition-transform duration-500 cursor-pointer w-full md:w-auto"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Mail size={40} />
          </div>
          <div>
            <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-2">Email Me At</p>
            <p className="text-2xl md:text-3xl font-headline font-bold text-on-surface">avilanikkojosef1@gmail.com</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary font-label text-sm uppercase tracking-widest">
            <span>Send an Email</span>
            <ArrowRight size={16} />
          </div>
        </a>

        <div className="mt-12 flex flex-col items-center">
          <p className="text-xs font-label text-on-surface-variant uppercase tracking-[0.3em] mb-6">Or connect via</p>
          <div className="flex gap-4">
            {[ExternalLink, Code2, Share2].map((Icon, i) => (
              <button key={i} className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-lg">
                <Icon size={24} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen tonal-shift-bg">
      <Navbar activePage={page} setPage={setPage} />
      
      <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {page === 'home' && <HomePage key="home" />}
          {page === 'experience' && <ExperiencePage key="experience" />}
          {page === 'projects' && <ProjectsPage key="projects" />}
          {page === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      <BottomNav activePage={page} setPage={setPage} />

      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-tertiary/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
}
