"use client";

import React, { useState } from 'react';
import { Building2, Globe, ShieldCheck, ArrowRight, CheckCircle2, X } from 'lucide-react';

export default function Home() {
  // State to handle the Wizard Popup
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ jurisdiction: '', revenue: '', email: '' });

  const handleStart = () => setIsWizardOpen(true);
  const handleClose = () => { setIsWizardOpen(false); setStep(1); };

  const submitStep = (value: string, field: string) => {
    setFormData({ ...formData, [field]: value });
    setStep(step + 1);
  };

const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Visual Feedback (Loading)
    const btn = e.currentTarget.querySelector('button');
    if (btn) btn.textContent = "Generating Assessment...";

    // 2. Send Data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          jurisdiction: formData.jurisdiction,
          revenue: formData.revenue,
          source: "RHQ.ae Wizard"
        })
      });

      if (response.ok) {
        // 3. Success State
        alert("Success! Your 2026 Assessment has been sent to your email.");
        handleClose();
        setStep(1); // Reset for next user
      } else {
        alert("Error sending data. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- WIZARD MODAL (Hidden by default) --- */}
      {isWizardOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl relative">
            <button onClick={handleClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-900">
              <X size={24} />
            </button>
            
            {/* Step 1: Jurisdiction */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Step 1 of 3</span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">Which market is your primary focus?</h3>
                <div className="mt-6 space-y-3">
                  <button onClick={() => submitStep('KSA', 'jurisdiction')} className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-blue-600 hover:bg-blue-50 transition">
                    <span className="font-semibold">Saudi Arabia (Riyadh)</span>
                    <Globe size={20} className="text-slate-400" />
                  </button>
                  <button onClick={() => submitStep('UAE', 'jurisdiction')} className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-blue-600 hover:bg-blue-50 transition">
                    <span className="font-semibold">UAE (Dubai/Abu Dhabi)</span>
                    <ShieldCheck size={20} className="text-slate-400" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Revenue */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Step 2 of 3</span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">Estimated Annual Revenue</h3>
                <div className="mt-6 space-y-3">
                  <button onClick={() => submitStep('<10M', 'revenue')} className="w-full rounded-xl border border-slate-200 p-4 text-left font-semibold hover:border-blue-600 hover:bg-blue-50 transition">
                    Less than $10 Million
                  </button>
                  <button onClick={() => submitStep('>10M', 'revenue')} className="w-full rounded-xl border border-slate-200 p-4 text-left font-semibold hover:border-blue-600 hover:bg-blue-50 transition">
                    $10 Million - $50 Million
                  </button>
                  <button onClick={() => submitStep('Enterprise', 'revenue')} className="w-full rounded-xl border border-slate-200 p-4 text-left font-semibold hover:border-blue-600 hover:bg-blue-50 transition">
                    Enterprise ($50 Million+)
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: The Lead Trap */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="text-xs font-bold uppercase tracking-wider text-green-600">Final Step</span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">View Your Eligibility Report</h3>
                <p className="mt-2 text-slate-600">Enter your corporate email to generate the PDF assessment.</p>
                <form onSubmit={handleFinalSubmit} className="mt-6">
                  <label className="block text-sm font-medium text-slate-700">Business Email</label>
                  <input 
                    type="email" 
                    required 
                    className="mt-2 block w-full rounded-lg border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-blue-500" 
                    placeholder="name@company.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <button type="submit" className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-3 font-bold text-white hover:bg-slate-800 transition">
                    Show My Results
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- MAIN PAGE CONTENT --- */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 text-white p-1.5 rounded">
                <Building2 size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">RHQ.ae</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-slate-900">Jan 1 2026 Mandate</a>
              <a href="#" className="hover:text-slate-900">Jurisdiction Comparison</a>
              <a href="#" className="hover:text-slate-900">Compliance</a>
            </div>
            <button onClick={handleStart} className="bg-slate-900 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-slate-800 transition">
              Check Eligibility
            </button>
          </div>
        </div>
      </nav>

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
            <button onClick={handleStart} className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
              Start Assessment
            </button>
            <button className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1">
              Download 2026 Playbook <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">One Mandate. Two Paths.</h2>
          <p className="mt-4 text-lg text-slate-600">Compare the incentives before you commit your capital.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <footer className="bg-slate-900 text-slate-400 py-12 text-xs text-center">
        <p>© 2026 RHQ.ae Advisory. Disclaimer: We are a strategic consultancy, not a government agency.</p>
      </footer>
    </div>
  );
}