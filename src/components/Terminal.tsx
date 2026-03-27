import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const TerminalWindow = () => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const lines = [
    '> Initializing system architecture...',
    '> Loading AI integration modules...',
    '> Connecting to scalable backend...',
    '> Deploying modern web interfaces...',
    '> System ready. Architecting solutions.',
    '',
    'const developer = {',
    '  name: "Nikko Josef Avila",',
    '  role: "Full Stack & AI Integrator",',
    '  focus: ["Scalability", "AI", "UX"],',
    '  status: "Ready to build"',
    '};',
    '',
    'console.log("Welcome to the future.");'
  ];

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setText((prev) => prev + '\n');
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className="w-full max-w-2xl mx-auto lg:mx-0">
      <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 font-mono text-sm leading-relaxed">
        {/* Terminal Header */}
        <div className="bg-[#323233] px-4 py-2 flex items-center justify-between border-bottom border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">bash — 80x24</div>
          <div className="w-12"></div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 h-[320px] overflow-y-auto custom-scrollbar bg-[#1e1e1e]">
          <pre className="text-white/90 whitespace-pre-wrap">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
            />
          </pre>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="mt-4 flex justify-between items-center px-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">Server: Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">AI: Active</span>
          </div>
        </div>
        <div className="text-[10px] text-white/20 font-mono">UTF-8 // 1.0.4-stable</div>
      </div>
    </div>
  );
};

export default TerminalWindow;
