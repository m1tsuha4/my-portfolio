import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-24">
        
        {/* 1. HERO SECTION */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight">
            Hi, I'm Iqbal Defri Prasetya
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-400">
            Backend Developer — Laravel • NestJS • Express.js • Supabase • GCP • Docker
          </h2>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-slate-400">
            I build scalable backend systems, secure payment integrations, and blockchain applications, with experience integrating AI/IoT pipelines into real-world production.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              View Projects
            </a>
            <a href="mailto:iqbaldefriprasetya@gmail.com" className="px-6 py-3 border border-slate-700 rounded-lg font-medium hover:bg-slate-800 transition text-slate-200">
              Contact Me
            </a>
          </div>
        </section>

        {/* 2. ABOUT ME */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">About Me</h3>
          <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
            <p>
              Detail-oriented Backend Developer with hands-on experience in building and optimizing server-side applications using Laravel, NestJS, Express.js, and Supabase. 
            </p>
            <p>
              Skilled in API design, database modeling, cloud deployment with Google Cloud Run, containerization with Docker, and blockchain integration using Solidity. Experienced integrating AI/IoT pipelines (YOLOv11 + Hailo AI Kit) into production-style apps.
            </p>
          </div>
        </section>

        {/* 3. SKILLS */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">Technical Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Languages</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>PHP & Python</li>
                <li>JavaScript & TypeScript</li>
                <li>SQL & Solidity</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Frameworks / Runtime</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>Laravel</li>
                <li>NestJS</li>
                <li>Express.js & Node.js</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Database & Cloud</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>MySQL, PostgreSQL, SQLite</li>
                <li>Supabase & Firebase</li>
                <li>GCP (Cloud Run, Storage)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">DevOps, Web & AI</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>Docker & Nginx</li>
                <li>REST API, JWT, OAuth2</li>
                <li>YOLOv11 & Smart Contracts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS */}
        <section id="projects" className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 hover:border-blue-500/50 transition">
              <h4 className="text-xl font-bold text-slate-200">Gameblink Booking System</h4>
              <p className="text-sm text-slate-400">RESTful API for booking gaming consoles with payment gateway integration. Handles ~300 transactions/day with an admin dashboard to monitor revenue.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">NestJS</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">MySQL</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Midtrans</span>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 hover:border-blue-500/50 transition">
              <h4 className="text-xl font-bold text-slate-200">Dotter (Detect Otter)</h4>
              <p className="text-sm text-slate-400">Monitoring system for otter detection integrating AI/IoT pipelines into a production app, serving real-time Flutter mobile app monitoring.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Raspberry Pi 5</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">YOLOv11</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Supabase</span>
              </div>
            </div>

             <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 hover:border-blue-500/50 transition">
              <h4 className="text-xl font-bold text-slate-200">Dansa Bonafide Business System</h4>
              <p className="text-sm text-slate-400">Multi-branch system covering inventory, cashier operations, payroll, KPI, and employee attendance.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Express.js</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">SQLite</span>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 hover:border-blue-500/50 transition">
              <h4 className="text-xl font-bold text-slate-200">TheSuaraKu (Hackathon)</h4>
              <p className="text-sm text-slate-400">Blockchain-based decentralized e-voting application with a secure backend API.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Express.js</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Solidity</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Ganache</span>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 hover:border-blue-500/50 transition">
              <h4 className="text-xl font-bold text-slate-200">Pharmacy Information System</h4>
              <p className="text-sm text-slate-400">REST API built for managing medicine stock, sales, purchases, employee data, and financial reporting.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Laravel</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">SQLite</span>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 hover:border-blue-500/50 transition">
              <h4 className="text-xl font-bold text-slate-200">Kamek (AI Integration)</h4>
              <p className="text-sm text-slate-400">REST APIs for weather forecasts, cocoa news, disease analysis, and prediction result storage.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">Laravel API</span>
                <span className="px-2 py-1 bg-slate-800 text-xs rounded text-blue-300">AI Model Integration</span>
              </div>
            </div>

          </div>
        </section>

        {/* 5. EXPERIENCE */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">Experience</h3>
          <div className="space-y-8 border-l border-slate-800 ml-3 pl-8 relative">
            
            <div className="relative">
              <span className="absolute -left-10 w-4 h-4 bg-blue-600 rounded-full mt-1.5 ring-4 ring-slate-950"></span>
              <h4 className="text-lg font-bold text-slate-200">Backend Developer</h4>
              <p className="text-sm text-blue-400 mb-2">PT Metro Indonesian Software | May 2024 – Present</p>
              <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>Designed, developed, and maintained backend systems using Laravel, NestJS, Express.js.</li>
                <li>Implemented authentication, RBAC, and query optimizations.</li>
                <li>Integrated Midtrans payment gateway for secure online transactions.</li>
                <li>Delivered scalable solutions (Pharmacy, Business Management, Gameblink).</li>
              </ul>
            </div>

            <div className="relative">
              <span className="absolute -left-10 w-4 h-4 bg-slate-700 rounded-full mt-1.5 ring-4 ring-slate-950"></span>
              <h4 className="text-lg font-bold text-slate-200">Internship Trainee, Backend Developer</h4>
              <p className="text-sm text-slate-500 mb-2">PT Metro Indonesian Software | Mar 2024 – Apr 2024</p>
              <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>Developed pilot backend for company profile website (auth, roles, portfolios).</li>
                <li>Built secure RESTful APIs and collaborated with frontend for seamless integration.</li>
              </ul>
            </div>

            <div className="relative">
              <span className="absolute -left-10 w-4 h-4 bg-slate-700 rounded-full mt-1.5 ring-4 ring-slate-950"></span>
              <h4 className="text-lg font-bold text-slate-200">Internship Trainee, Backend Developer</h4>
              <p className="text-sm text-slate-500 mb-2">RLA Digital Marketing Agency | Jan 2024 – Mar 2024</p>
              <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>Developed RESTful APIs for Silungkang Playground mobile app.</li>
                <li>Helped build admin dashboard using PHP native & JavaScript.</li>
              </ul>
            </div>

            <div className="relative">
              <span className="absolute -left-10 w-4 h-4 bg-slate-700 rounded-full mt-1.5 ring-4 ring-slate-950"></span>
              <h4 className="text-lg font-bold text-slate-200">Cloud Computing Student</h4>
              <p className="text-sm text-slate-500 mb-2">Bangkit Academy | Aug 2023 – Jan 2024</p>
              <ul className="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>Built prediction API on Google Cloud Run and integrated video storage on Cloud Storage.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 6. ACHIEVEMENTS & EDUCATION */}
        <section className="grid md:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">Achievements</h3>
            <ul className="space-y-5 text-sm text-slate-400">
              <li>
                <span className="text-lg">🥇</span> <strong className="text-slate-200">Gold Medal — MSU iRex 2025</strong><br/>
                Presented Dotter (Detect Otter) integrating Raspberry Pi 5 + Hailo AI Kit, Supabase, and Flutter in Shah Alam, Malaysia.
              </li>
              <li>
                <span className="text-lg">🥈</span> <strong className="text-slate-200">2nd Place — Hackathon CyberTech PNP 2024</strong><br/>
                Blockchain-powered e-voting system (TheSuaraKu).
              </li>
              <li>
                <span className="text-lg">🥈</span> <strong className="text-slate-200">2nd Place — Adiwidya Hackfest 2024 (ITB)</strong><br/>
                Kamek backend API with AI model integration.
              </li>
              <li>
                <span className="text-lg">🥈</span> <strong className="text-slate-200">Silver Medal — IATC 2024</strong><br/>
                Early prototype of Kamek integrating AI & backend APIs.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2">Education</h3>
            <div className="space-y-2">
              <h4 className="font-bold text-slate-200">Andalas University</h4>
              <p className="text-sm text-blue-400">Bachelor of Computer Engineering</p>
              <p className="text-sm text-slate-500">Sep 2021 – Present • Expected Graduation: Sep 2025</p>
              <p className="text-sm text-slate-400 pt-2 border-t border-slate-800/50 inline-block">GPA: <span className="font-semibold text-slate-200">3.9</span></p>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-8 pt-4">Community</h3>
            <div className="space-y-2">
              <h4 className="font-bold text-slate-200">Neo Telemetri Student Organization</h4>
              <p className="text-sm text-blue-400">Backend Developer & Organizing Committee</p>
              <p className="text-sm text-slate-500">Aug 2022 – Sep 2024</p>
              <p className="text-sm text-slate-400 pt-1">Built SIPENJARU (room booking) in Laravel & SQLite. Conducted web bootcamps for new members.</p>
            </div>
          </div>

        </section>

        {/* 7. CONTACT */}
        <section id="contact" className="space-y-6 text-center pt-12 border-t border-slate-800">
          <h3 className="text-2xl font-bold text-slate-100">Let's Build Something</h3>
          <p className="text-slate-400 max-w-md mx-auto">Open to backend roles, internships, and collaborations. Feel free to reach out.</p>
          <div className="flex justify-center items-center gap-6 pt-4">
            <a href="mailto:iqbaldefriprasetya@gmail.com" className="text-slate-400 hover:text-blue-400 transition">Email</a>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <a href="https://github.com/m1tsuha4" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition">GitHub</a>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <a href="https://www.linkedin.com/in/iqbal-defri-prasetya-24a746128/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </section>

      </main>
    </div>
  );
}