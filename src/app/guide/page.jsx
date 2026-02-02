"use client";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {
    BookOpen,
    Clock,
    Award,
    BrainCircuit,
    Target,
    Zap,
    CheckCircle2,
    BarChart3,
    PenTool
} from "lucide-react";

export default function GuidePage() {
    return (
        <>
            <Navbar />
            <main className="bg-slate-50 min-h-screen">

                {/* HERO HEADER */}
                <section className="bg-slate-900 py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full scale-150 translate-x-1/2 -translate-y-1/2"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Comprehensive Resource</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Everything You Need to Know <br /> About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">GRE General Test</span>
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Demystifying the exam structure, scoring, and how Millionaire-GRE empowers you to achieve a top 1% score.
                        </p>
                    </div>
                </section>

                {/* SECTION 1: THE REAL GRE */}
                <section className="py-20 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Understanding the Exam</h2>
                        <p className="text-slate-500 mt-3">The GRE General Test measures verbal reasoning, quantitative reasoning, critical thinking, and analytical writing skills.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Verbal */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Verbal Reasoning</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Evaluates your ability to analyze and draw conclusions from discourse, understand multiple levels of meaning, and select important points.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Text Completion</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Sentence Equivalence</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Reading Comprehension</li>
                            </ul>
                        </div>

                        {/* Quant */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BrainCircuit className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Quantitative Reasoning</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Assesses basic mathematical skills and understanding of elementary mathematical concepts, as well as the ability to reason quantitatively.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>Algebra & Geometry</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>Data Analysis</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>Arithmetic</li>
                            </ul>
                        </div>

                        {/* Analytical Writing */}
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <PenTool className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Analytical Writing</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Measures critical thinking and analytical writing skills, specifically your ability to articulate and support complex ideas clearly and effectively.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>Analyze an Issue</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>Critique an Argument</li>
                            </ul>
                        </div>
                    </div>

                    {/* SCORING STRIP */}
                    <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">How is the GRE Scored?</h3>
                            <p className="text-slate-400 text-sm max-w-lg">
                                Verbal and Quant are scored on a scale of 130–170 each (1-point increments). Writing is scored 0–6 (0.5-point increments).
                            </p>
                        </div>
                        <div className="flex gap-6 relative z-10 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                            <div className="text-center px-4 border-r border-white/10">
                                <p className="text-3xl font-black text-indigo-400">340</p>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Total Max</p>
                            </div>
                            <div className="text-center px-4">
                                <p className="text-3xl font-black text-emerald-400">5yr</p>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Validity</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: HOW WE HELP */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <span className="text-indigo-600 font-bold uppercase text-xs tracking-widest mb-2 block">The Millionaire Advantage</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Prepare With Us?</h2>
                            <p className="text-slate-500 mt-4 text-lg">
                                We bridge the gap between "Understanding the GRE" and "Cracking the GRE". Our platform is engineered to mirror the actual exam environment.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Feature List */}
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Real-Time Adaptive Simulation</h3>
                                        <p className="text-slate-600 mt-2 leading-relaxed">
                                            Our test engine mimics the GRE's section-level adaptability. If you perform well on the first section, the second gets harder (and worth more), just like the real test.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Deep Performance Analytics</h3>
                                        <p className="text-slate-600 mt-2 leading-relaxed">
                                            We don't just tell you your score. We analyze your time-per-question, topic strengths (e.g., Geometry vs. Algebra), and error patterns to create a targeted study plan.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Curated "Hard" Question Bank</h3>
                                        <p className="text-slate-600 mt-2 leading-relaxed">
                                            To get a 160+ in Quant, you need to solve trick questions. Our question bank focuses heavily on high-difficulty problems often missed by average students.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Card */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
                                <div className="relative bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
                                    <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs font-mono text-slate-500">Simulation Mode</span>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-sm">Quantitative Reasoning</span>
                                            <span className="text-emerald-400 font-mono font-bold">168 / 170</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                            <div className="bg-emerald-500 w-[94%] h-full"></div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-sm">Verbal Reasoning</span>
                                            <span className="text-blue-400 font-mono font-bold">162 / 170</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 w-[85%] h-full"></div>
                                        </div>

                                        <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-4">
                                            <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">96th Percentile</p>
                                                <p className="text-slate-500 text-xs mt-1">You are ready for test day!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
