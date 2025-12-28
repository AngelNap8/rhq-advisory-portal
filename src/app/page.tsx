import React from 'react';
import { Building2, Globe, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar: Institutional & Sterile */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 text-white p-1.5 rounded">
                <Building2 size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">RHQ.com</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-slate-900">Jan 1 2026 Mandate</a>
              <a href="#" className="hover:text-slate-900">Jurisdiction Comparison</a>
              <a href="#" className="hover:text-slate-900">Compliance</a>
            </div>
            <button className="bg-slate-900 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-slate-800 transition">
              Check Eligibility
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section: The "Panic" Hook */}
      <div className="relative isolate pt-14 lg:pt-20 pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-900">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            Official Deadline: January 1, 2026
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
            Regional Headquarters <br />
            <span className="text-blue-700">Strategic Advisory</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            The Regional Headquarters (RHQ) Program is mandatory for government contractors in the GCC. 
            We facilitate rapid license issuance and strategic structuring for Riyadh and Dubai.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
              Start Assessment
            </button>
            <button className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1">
              Download 2026 Playbook <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Grid: High Value Content */}
      <div className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">One Mandate. Two Paths.</h2>
          <p className="mt-4 text-lg text-slate-600">Compare the incentives before you commit your capital.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KSA Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold leading-8 text-slate-900 flex items-center gap-2 mb-4">
              <Globe className="text-green-600" /> Riyadh RHQ
            </h3>
            <ul className="space-y-3 text-sm leading-6 text-slate-600">
              <li className="flex gap-x-3"><CheckCircle2 className="h-5 w-5 flex-none text-green-600" /> 30-Year Tax Holiday (0% CIT)</li>
              <li className="flex gap-x-3"><CheckCircle2 className="h-5 w-5 flex-none text-green-600" /> 10-Year Saudization Exemption</li>
              <li className="flex gap-x-3"><CheckCircle2 className="h-5 w-5 flex-none text-green-600" /> Gov. Tender Eligibility (Mandatory)</li>
            </ul>
          </div>

          {/* UAE Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold leading-8 text-slate-900 flex items-center gap-2 mb-4">
              <ShieldCheck className="text-blue-600" /> Dubai Strategic Hub
            </h3>
            <ul className="space-y-3 text-sm leading-6 text-slate-600">
              <li className="flex gap-x-3"><CheckCircle2 className="h-5 w-5 flex-none text-blue-600" /> 9% Corporate Tax (G20 Lowest)</li>
              <li className="flex gap-x-3"><CheckCircle2 className="h-5 w-5 flex-none text-blue-600" /> Global Talent Retention Hub</li>
              <li className="flex gap-x-3"><CheckCircle2 className="h-5 w-5 flex-none text-blue-600" /> 100% Foreign Ownership</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer (Crucial for Legal Safety) */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-xs text-center">
        <p>© 2026 RHQ Advisory. Disclaimer: We are a strategic consultancy, not a government agency.</p>
      </footer>
    </div>
  );
}