import React from "react";
import Image from "next/image";

const navItems = [
  ["Home", "#home"], ["About", "#about"], ["Skills", "#skills"],
  ["Projects", "#projects"], ["Experience", "#experience"], ["Achievements", "#achievements"],
];

const professionalSkills = [
  ["PHP", "🐘"], ["JavaScript", "JS"], ["TypeScript", "TS"], ["Node.js", "⬡"],
  ["Laravel", "◆"], ["NestJS", "N"], ["Express.js", "EX"], ["Python", "PY"],
  ["MySQL", "🐬"], ["PostgreSQL", "🐘"], ["SQLite", "SQ"], ["Supabase", "⚡"],
  ["Solidity", "◆"], ["Docker", "▣"], ["Google Cloud", "G"], ["REST APIs", "↔"],
];

const tools = [
  ["Linux", "🐧"], ["VS Code", "⌄"], ["Git", "◆"], ["Postman", "P"], ["Firebase", "🔥"],
];

const projectLinks: Record<string, string> = {
  "Smart Toilet DLH Kota Padang": "https://github.com/m1tsuha4/smart-toilet-dlh",
  "Mitbiz — SaaS Chatbot": "https://github.com/m1tsuha4/saas-metro",
  "Altama Project": "https://github.com/m1tsuha4/altama-api",
  "Ganie Tryout": "https://github.com/m1tsuha4/ganie-tryout-api",
};

const projects = [
  ["Gameblink Booking System", "Scalable booking and payment API supporting 100+ transactions daily, with Midtrans, branch management, and revenue monitoring.", ["NestJS", "MySQL", "Midtrans"]],
  ["Dotter — Detect Otter", "AI-based real-time wildlife monitoring system using Raspberry Pi, YOLO, Hailo AI, Supabase, and Flutter.", ["Raspberry Pi", "YOLOv11", "Supabase"]],
  ["Dansa Bonafide", "Multi-branch business system covering inventory, cashier operations, payroll, attendance, and KPI tracking.", ["Express.js", "SQLite"]],
  ["TheSuaraKu", "Blockchain-based decentralized e-voting application with Express.js and smart contracts.", ["Express.js", "Solidity", "Ganache"]],
  ["Pharmacy Information System", "Inventory and sales management with stock tracking, daily transactions, and automated financial reporting.", ["Laravel", "MySQL"]],
  ["Kamek", "AI-powered agricultural application with backend REST APIs and cloud data storage.", ["Express.js", "AI/ML", "REST API"]],
  ["Gym Guide", "Exercise instruction application developed with Bangkit Academy's cross-functional mobile, machine-learning, and cloud teams.", ["Node.js", "GCP", "Cloud Storage"]],
  ["Smart Toilet DLH Kota Padang", "IoT public-toilet monitoring dashboard with QRIS payments, gate-device communication, visitor logs, and revenue reporting.", ["NestJS", "PostgreSQL", "IoT"]],
  ["Mitbiz — SaaS Chatbot", "Omnichannel SaaS chatbot platform connecting Gmail and WhatsApp for automated customer communication and AI-powered workflows.", ["NestJS", "WhatsApp", "Gmail", "OpenAI"]],
  ["Altama Project", "Corporate landing pages and an administration dashboard for Tekiro, Ryu Power Tools, and Rexco Solution.", ["TypeScript", "NestJS", "Prisma", "Dashboard"]],
  ["Ganie Tryout", "Web exam platform for university entrance preparation, with cached tryout and exam data powered by Redis.", ["NestJS", "PostgreSQL", "Prisma", "Redis"]],
];

export default function Portfolio() {
  return (
    <div className="portfolio-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Iqbal Defri Prasetya home">IDP<span>.</span></a>
        <div className="nav-links">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <div className="nav-actions"><a className="nav-button" href="#contact">Contact</a></div>
      </nav>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">Hi there! <span className="wave">👋🏻</span></p>
            <h1>I&apos;m <strong>Iqbal Defri<br />Prasetya</strong></h1>
            <p className="role"><span>Backend Developer</span></p>
            <p className="hero-text">I build scalable JavaScript applications, secure payment integrations, RESTful APIs, and production-ready AI/IoT systems.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">View Projects</a>
              <a className="secondary-button" href="/CV_IQBAL_DEFRI_PRASETYA.pdf" download>Download Resume ↓</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Portrait of Iqbal Defri Prasetya">
            <div className="portrait-card">
              <div className="card-window-bar">
                <div className="code-dots"><i /><i /><i /></div>
                <span>iqbal@portfolio</span>
                <b>●</b>
              </div>
              <div className="card-code-line">console.log(<strong>&apos;Hello, World!&apos;</strong>);</div>
              <div className="portrait-image">
                <Image src="/iqbal-defri-prasetya.jpeg" alt="Iqbal Defri Prasetya sitting outdoors" fill sizes="(max-width: 600px) 280px, 360px" priority />
              </div>
              <div className="portrait-overlay">
                <div className="overlay-icon">⚡</div>
                <div><strong>Backend &amp; Cloud</strong><span>Node.js • NestJS • GCP • Docker</span></div>
                <b>Backend Developer</b>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap intro-section">
          <div>
            <p className="section-kicker">Discover</p>
            <h2>Let me <span>introduce</span> myself</h2>
            <p>Backend developer with 2+ years of hands-on experience building scalable JavaScript applications using Node.js, Express.js, NestJS, and Laravel.</p>
            <p>I specialize in <strong className="accent">RESTful APIs, database optimization, authentication, RBAC, cloud deployment, and secure payment integrations</strong>, and enjoy collaborating across product and engineering teams.</p>
          </div>
          <div className="about-stats">
            <div><strong>2+</strong><span>Years experience</span></div>
            <div><strong>10+</strong><span>Featured projects</span></div>
            <div><strong>3.91</strong><span>University GPA</span></div>
          </div>
        </section>

        <section id="skills" className="section-wrap skills-section">
          <div className="section-heading"><p className="section-kicker">Expertise</p><h2>Professional <span>skillset</span></h2></div>
          <div className="skill-pills">
            {professionalSkills.map(([name, icon]) => <span className="skill-pill" key={name}><i>{icon}</i>{name}</span>)}
          </div>
          <div className="section-heading tools-heading"><h2><span>Tools</span> I use</h2></div>
          <div className="skill-pills tools-pills">
            {tools.map(([name, icon]) => <span className="skill-pill" key={name}><i>{icon}</i>{name}</span>)}
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <div className="section-heading"><p className="section-kicker">Portfolio</p><h2>My recent <span>works</span></h2></div>
          <div className="project-grid">
            {projects.map(([title, description, tags], index) => (
              <article className="project-card" key={title as string}>
                <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{title as string}</h3>
                <p>{description as string}</p>
                <div className="tags">{(tags as string[]).map((tag) => <span key={tag}>{tag}</span>)}</div>
                {projectLinks[title as string] && (
                  <a className="project-link" href={projectLinks[title as string]} target="_blank" rel="noreferrer">GitHub ↗</a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-wrap experience-section">
          <div className="section-heading"><p className="section-kicker">Journey</p><h2>Experience &amp; <span>organizations</span></h2></div>
          <div className="timeline">
            <article><span className="timeline-dot" /><time>May 2024 — Nov 2026</time><h3>Backend Developer</h3><p>PT Metro Indonesian Software</p><small>Built RESTful APIs, authentication, role-based access control, Midtrans integrations, and multi-branch business systems.</small></article>
            <article><span className="timeline-dot" /><time>Jan 2024 — Mar 2024</time><h3>Backend Developer Intern</h3><p>RLA Digital Marketing Agency</p><small>Developed mobile-app REST APIs and collaborated with mobile developers on admin dashboard integrations.</small></article>
            <article><span className="timeline-dot" /><time>Nov 2023 — Jun 2024</time><h3>Backend Developer Core Team</h3><p>Google Developer Student Club UNAND</p><small>Led backend workshops and technical sharing sessions while collaborating on educational technology projects.</small></article>
            <article><span className="timeline-dot" /><time>Sep 2022 — Sep 2024</time><h3>Backend Developer &amp; Committee Member</h3><p>Neo Telemetri Student Organization</p><small>Developed internal Laravel systems and conducted backend bootcamps for recruitment participants.</small></article>
            <article><span className="timeline-dot" /><time>Aug 2023 — Jan 2024</time><h3>Cloud Computing Student</h3><p>Bangkit Academy 2023</p><small>Built Gym Guide with cross-disciplinary teams, deployed APIs on Google Cloud Run, and managed Cloud Storage media.</small></article>
          </div>
        </section>

        <section id="achievements" className="section-wrap achievements-section">
          <div className="section-heading"><p className="section-kicker">Recognition</p><h2>Achievements &amp; <span>education</span></h2></div>
          <div className="education-grid">
            <article><span>🥇</span><small>Gold Medal · MSU iRex 2025</small><h3>AI Monitoring System</h3><p>Raspberry Pi and YOLO-based wildlife monitoring system in Malaysia.</p></article>
            <article><span>🥈</span><small>2nd Place · National Hackathon 2024</small><h3>Blockchain E-Voting</h3><p>Secure blockchain-based online voting system using Express.js and smart contracts.</p></article>
            <article><span>🥈</span><small>2nd Place · Adiwidya Hackfest 2024</small><h3>Kamek AI Agriculture</h3><p>AI-powered agricultural application with REST APIs and data storage.</p></article>
            <article><span>🏅</span><small>Silver Medal · IATC 2024</small><h3>AI Cocoa Pod Prototype</h3><p>Android prototype for cocoa pod classification and price prediction.</p></article>
          </div>
          <div className="education-card">
            <div><p className="section-kicker">Education</p><h2>Andalas University</h2><p className="accent">Bachelor of Computer Engineering</p><small>September 2021 — July 2025 · GPA 3.91</small></div>
            <p>Outstanding Student Award · Campus Activist Award<br />Coursework: Web Development, Databases, Cloud Computing, Software Engineering</p>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <p className="section-kicker">Get in touch</p><h2>Let&apos;s build <span>something</span></h2>
          <p>Open to backend roles, collaborations, and meaningful technology projects.</p>
          <div className="hero-actions"><a className="primary-button" href="mailto:iqbaldefriprasetya@gmail.com">Email Me</a><a className="secondary-button" href="/CV_IQBAL_DEFRI_PRASETYA.pdf" download>Download Resume ↓</a></div>
        </section>
      </main>

      <footer>
        <p>Designed &amp; built by <strong>Iqbal Defri Prasetya</strong></p>
        <div><a href="mailto:iqbaldefriprasetya@gmail.com">Email</a><a href="https://github.com/m1tsuha4" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/iqbal-defri-prasetya-24a746128/" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>
    </div>
  );
}
