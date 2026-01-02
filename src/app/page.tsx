"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // THE "WIZARD OF OZ" MOMENT: 
    // We simulate a backend process to give the user instant gratification.
    setStatus("loading");
    setTimeout(() => {
      alert("SYSTEM MESSAGE: Case File #2026-URGENT Opened. A Senior Specialist has been alerted.");
      setStatus("idle");
    }, 1500);
  };

  return (
    <main className="relative z-10 w-full max-w-xl px-4 text-center">
      
      {/* STATUS BADGE */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-700/50 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        <span className="text-xs font-mono text-amber-200 tracking-wider uppercase">
          Deadline Passed: Late Filing Open
        </span>
      </div>

      {/* HERO HEADLINE */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
        Protect Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
          Contracts.
        </span>
      </h1>

      <p className="text-lg text-slate-400 mb-10 leading-relaxed">
        The January 1, 2026 Regional Headquarters mandate is now active.
        <br className="hidden md:block" />
        Unlicensed entities are currently{" "}
        <strong className="text-slate-200">ineligible for government tenders</strong>.
      </p>

      {/* THE CONVERSION ENGINE */}
      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-2xl ring-1 ring-white/10">
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Company Entity
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Corp Global"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Current Status
            </label>
            <div className="relative">
              <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <option>No RHQ License</option>
                <option>Application Pending</option>
                <option>Rejected / Blocked</option>
              </select>
              {/* Arrow Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-900/20 transition-all transform hover:scale-[1.01] active:scale-[0.98]"
          >
            {status === 'loading' ? 'Processing...' : 'Verify Eligibility Check →'}
          </button>

          <p className="text-[10px] text-slate-600 mt-4">
            Secure 256-bit Encrypted. Independent Advisory. Not a Government Agency.
          </p>
        </form>
      </div>
    </main>
  );
}