const navItems = [
  ["Showreel", "#showreel"],
  ["Work", "#work"],
  ["Services", "#services"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const projects = [
  {
    title: "Political Campaign Reel",
    badge: "Instagram Reel",
    duration: "00:42",
    description: "High-energy social edit with punchy captions, crowd moments, and campaign rhythm.",
    tone: "teal",
  },
  {
    title: "Mindset Coach Podcast Edit",
    badge: "Podcast",
    duration: "52:10",
    description: "Long-form interview edit shaped for retention, clarity, and clean speaker flow.",
    tone: "amber",
  },
  {
    title: "YouTube Talking Head Edit",
    badge: "YouTube Video",
    duration: "12:48",
    description: "Jump cuts, story beats, graphics, and pacing for audience watch time.",
    tone: "red",
  },
  {
    title: "Election Campaign Film",
    badge: "Campaign Film",
    duration: "02:36",
    description: "Narrative campaign cut with music build, public moments, and emotional lift.",
    tone: "steel",
  },
  {
    title: "Music Video Cut",
    badge: "Music Video",
    duration: "03:28",
    description: "Performance-led cut with tempo matching, visual texture, and cinematic polish.",
    tone: "teal",
  },
  {
    title: "Brand Promo Reel",
    badge: "YouTube Short",
    duration: "00:31",
    description: "Fast product and people montage built for social launch campaigns.",
    tone: "amber",
  },
  {
    title: "Documentary Sequence",
    badge: "Documentary",
    duration: "06:14",
    description: "Observational sequence with story structure, breath, and natural sound.",
    tone: "steel",
  },
  {
    title: "Instagram Viral Short",
    badge: "Instagram Reel",
    duration: "00:27",
    description: "Hook-first vertical edit with caption timing and replay-friendly movement.",
    tone: "red",
  },
  {
    title: "Podcast Highlight Clip",
    badge: "YouTube Short",
    duration: "01:05",
    description: "Condensed insight clip for social distribution from a long-form episode.",
    tone: "teal",
  },
  {
    title: "Social Media Ad Edit",
    badge: "Campaign Film",
    duration: "00:45",
    description: "Platform-ready ad edit with direct messaging, rhythm, and end-card polish.",
    tone: "amber",
  },
];

const services = [
  ["Reels & Shorts Editing", "Hook-first vertical edits with captions, sound design, and scroll-stopping rhythm.", "Scissors"],
  ["YouTube Video Editing", "Talking heads, explainers, retention edits, graphics, and platform-ready exports.", "Monitor"],
  ["Podcast Editing", "Long-form episodes, multicam sync, audio cleanup, highlight clips, and shorts.", "Mic"],
  ["Campaign Videos", "Political and public-facing campaign edits built for urgency, message, and reach.", "Flag"],
  ["Music Videos", "Performance cuts, beat-matched sequences, stylized transitions, and mood-driven pacing.", "Music"],
  ["Documentary Editing", "Story structure, interviews, actuality, emotional progression, and cinematic assembly.", "Film"],
  ["Social Media Video Packages", "Monthly content engines for reels, shorts, promos, clips, and campaign assets.", "Grid"],
  ["Thumbnails & Graphics", "YouTube thumbnails, social graphics, titles, lower thirds, and Canva/Photoshop assets.", "Image"],
];

const experience = [
  {
    role: "Sr. Video Editor",
    company: "Epic Businesses",
    dates: "Feb 2024 - Present",
    location: "Jaipur",
    bullets: [
      "Creates podcasts and YouTube videos for Mindvalley Coach and Terry Real.",
      "Edits interactive reels, shorts, and long-form YouTube content.",
      "Leads a team of editors and created SOPs for videos and designs.",
    ],
  },
  {
    role: "Video Editor",
    company: "DesignBoxed",
    dates: "Mar 2023 - Feb 2024",
    location: "Jaipur",
    bullets: [
      "Created videos, reels, and clips for Ashok Gehlot's official social handles.",
      "Produced Rajasthan Assembly Election campaign videos for Rajasthan Pradesh Congress.",
      "Created regular client videos and led a team of interns.",
    ],
  },
  {
    role: "Freelance Video Editor",
    company: "Independent",
    dates: "Jun 2016 - Present",
    location: "Jaipur",
    bullets: [
      "Works with clients, brands, and individuals on video and visual enhancement.",
      "Creates recurring client videos and YouTube content.",
    ],
  },
  {
    role: "Video Editor",
    company: "Attrock Pvt Ltd",
    dates: "Apr 2018 - Dec 2018",
    location: "Jaipur",
    bullets: ["Worked with clients, brands, and individuals for video and visual enhancement."],
  },
  {
    role: "Video Editor",
    company: "The Open Space Society - TOSS",
    dates: "Jun 2018 - Apr 2018",
    location: "Jaipur",
    bullets: ["Worked in the studio as part of a production team to edit films and videos."],
  },
  {
    role: "Video Editor & Co-Founder",
    company: "Rangae Moda Production",
    dates: "Aug 2017 - Jan 2018",
    location: "Jaipur",
    bullets: [
      "Worked with Vasundhara Raje's DigiFest Rajasthan project for DoITC.",
      "Shot, edited, and created content for in-house projects and campaigns.",
      "Created social promotional campaigns for Sachin Pilot plus brand/client videos.",
    ],
  },
  {
    role: "Video Editor Intern",
    company: "Scoonews",
    dates: "Jul 2016 - Aug 2016",
    location: "Jaipur",
    bullets: ["Created video content for YouTube, thumbnails, and social graphics."],
  },
];

const tools = ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Canva"];
const capabilities = [
  "Color correction",
  "Motion graphics",
  "Sound sync",
  "Story pacing",
  "Social cuts",
  "Captions",
  "YouTube retention edits",
  "Podcast highlights",
  "Political campaign edits",
  "Thumbnail design",
];

const process = [
  "Brief & Footage Review",
  "Story Structure",
  "Rough Cut",
  "Sound, Captions & Motion",
  "Final Polish",
  "Delivery for Platform",
];

const testimonials = [
  ["Placeholder Client", "Kunal understands pacing, platform format, and storytelling. The edits feel sharp without losing the message."],
  ["Placeholder Producer", "He turns long footage into social-first cuts that are clear, fast, and ready for publishing."],
  ["Placeholder Creator", "Reliable, creative, and fast with revisions. The final videos always feel polished."],
];

function Icon({ name }) {
  const icons = {
    Play: "M8 5v14l11-7z",
    Mail: "M4 6h16v12H4z M4 7l8 6 8-6",
    Phone: "M7 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2h2z",
    Link: "M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1 M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1",
    Scissors: "M4 6l16 12 M4 18l16-12 M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    Monitor: "M4 5h16v11H4z M9 21h6 M12 16v5",
    Mic: "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z M5 11a7 7 0 0 0 14 0 M12 18v3",
    Flag: "M5 21V4h11l-1 4 1 4H5",
    Music: "M9 18V5l10-2v13 M9 18a3 3 0 1 1-2-3 M19 16a3 3 0 1 1-2-3",
    Film: "M4 5h16v14H4z M8 5v14 M16 5v14 M4 9h4 M4 15h4 M16 9h4 M16 15h4",
    Grid: "M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z",
    Image: "M4 5h16v14H4z M7 15l4-4 3 3 2-2 3 3 M8 9h.01",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d={icons[name] || icons.Play} />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Kunal Senani home">
        <span className="brand-mark">KS</span>
        <span>Kunal Senani</span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-action" href="mailto:kunalsenani2@gmail.com">
        Book Edit
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-band" id="home">
      <div className="grain" />
      <div className="hero-copy">
        <p className="eyebrow"><span className="record-dot" /> Jaipur, India | 9+ Years Editing</p>
        <h1>Kunal Senani</h1>
        <h2>Video Editor for Reels, YouTube, Podcasts, Campaigns & Cinematic Stories</h2>
        <p>
          9+ years of editing experience across films, music videos, documentaries, podcasts,
          political campaigns, social-first content, and brand videos.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#showreel"><Icon name="Play" /> View Showreel</a>
          <a className="button ghost" href="#contact">Contact Kunal</a>
        </div>
      </div>

      <div className="editor-panel" aria-label="Showreel preview mock player">
        <div className="player-top">
          <div><span className="record-dot" /> REC 09+ YEARS</div>
          <div className="timecode">00:09:28:13</div>
        </div>
        <div className="preview-frame">
          <div className="crop crop-a" />
          <div className="crop crop-b" />
          <div className="crop crop-c" />
          <div className="crop crop-d" />
          <div className="thumbnail-stack">
            {/* Replace these placeholder frames with real showreel stills or hosted video thumbnails later. */}
            <span />
            <span />
            <span />
          </div>
          <button className="play-orb" aria-label="Play showreel preview"><Icon name="Play" /></button>
          <div className="caption-bar">SHOWREEL_PREVIEW_FINAL_V03.mp4</div>
        </div>
        <div className="timeline-ui">
          {["Intro", "Hook", "Story", "Motion", "Grade", "Export"].map((label, index) => (
            <div className="track" key={label} style={{ "--i": index }}>
              <span>{label}</span>
              <i />
            </div>
          ))}
        </div>
        <div className="waveform" aria-hidden="true">
          {Array.from({ length: 42 }).map((_, index) => <span key={index} style={{ "--bar": index % 9 }} />)}
        </div>
      </div>
    </section>
  );
}

function Showreel() {
  return (
    <section className="section showreel" id="showreel">
      <div className="section-heading">
        <p className="eyebrow">Featured Showreel</p>
        <h2>Fast-paced edits, emotional storytelling, polished cuts, platform-ready delivery.</h2>
      </div>
      <div className="showreel-grid">
        <div className="video-embed">
          {/* Replace this placeholder YouTube embed with Kunal's final showreel URL. */}
          <iframe
            src="https://www.youtube.com/embed/rg1Yn9ctYWs?rel=0&modestbranding=1"
            title="Featured showreel placeholder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="showreel-notes">
          <p>
            Built for modern screens: tight hooks, clean dialogue, kinetic reels, documentary breath,
            campaign urgency, and export discipline for every platform.
          </p>
          <div className="tag-row">
            {["Reels", "YouTube", "Podcasts", "Campaigns", "Music Videos", "Documentaries"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioGrid() {
  return (
    <section className="section" id="work">
      <div className="section-heading split-heading">
        <p className="eyebrow">Video Portfolio</p>
        <h2>Project cards ready for real links, embeds, and thumbnails.</h2>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <article className={`project-card ${project.tone}`} key={project.title}>
            <div className="project-thumb">
              {/* Replace card data with real YouTube, Instagram, or hosted video links later. */}
              <span className="platform">{project.badge}</span>
              <div className="frame-number">F{String(index + 1).padStart(2, "0")}</div>
              <button aria-label={`Play ${project.title}`}><Icon name="Play" /></button>
            </div>
            <div className="project-body">
              <div className="project-meta"><span>{project.duration}</span><span>HD EXPORT</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Editing support for creators, brands, public figures, and production teams.</h2>
      </div>
      <div className="service-grid">
        {services.map(([title, description, icon]) => (
          <article className="service-card" key={title}>
            <div className="service-icon"><Icon name={icon} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div>
        <p className="eyebrow">About Kunal</p>
        <h2>Raw footage in. Sharp, engaging stories out.</h2>
      </div>
      <div className="about-copy">
        <p>
          Kunal Senani is a Jaipur-based video editor with 9+ years of experience helping creators,
          brands, public figures, and production teams shape raw footage into sharp, engaging stories.
        </p>
        <p>
          His work spans films, music videos, documentaries, podcasts, reels, political campaigns,
          YouTube videos, brand films, writing, direction, team leadership, and repeatable post-production systems.
        </p>
        <div className="stats-grid">
          {["9+ Years Experience", "1000+ Edits Delivered", "Reels, YouTube & Podcasts", "Political & Brand Campaigns", "Team Lead Experience"].map((stat) => (
            <span key={stat}>{stat}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience Timeline</p>
        <h2>A compact reel of roles, campaigns, teams, and long-running client work.</h2>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-card" key={`${item.company}-${item.dates}`}>
            <div className="timeline-pin" />
            <div className="timeline-date">{item.dates}</div>
            <h3>{item.role}</h3>
            <p className="company">{item.company} | {item.location}</p>
            <ul>
              {item.bullets.slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="education">
        <span>Education</span>
        <p>Masters in Mass Communication, Haridev Joshi University | Aug 2019 - Jan 2022</p>
        <p>Bachelor in Commerce, Rajasthan University | Aug 2012 - Aug 2015</p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills">
      <div className="section-heading">
        <p className="eyebrow">Editing Toolkit</p>
        <h2>Software fluency plus the instincts that make edits feel finished.</h2>
      </div>
      <div className="tool-grid">
        {tools.map((tool) => <div className="tool-card" key={tool}>{tool}</div>)}
      </div>
      <div className="chip-cloud">
        {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process">
      <div className="section-heading">
        <p className="eyebrow">Production Pipeline</p>
        <h2>A clean workflow from footage dump to final platform delivery.</h2>
      </div>
      <div className="process-line">
        {process.map((step, index) => (
          <article key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>Placeholder client notes for the next proof layer.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map(([name, quote]) => (
          <article key={quote}>
            <p>"{quote}"</p>
            <span>{name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-band" id="contact">
      <div className="contact-panel">
        <p className="eyebrow"><span className="record-dot" /> Available for edits</p>
        <h2>Bring the footage. Build the story.</h2>
        <p>
          For reels, YouTube videos, podcasts, campaign films, documentaries, music videos,
          thumbnails, graphics, and ongoing post-production support.
        </p>
        <div className="contact-grid">
          <a href="mailto:kunalsenani2@gmail.com"><Icon name="Mail" /> kunalsenani2@gmail.com</a>
          <a href="tel:+919983989783"><Icon name="Phone" /> 9983989783</a>
          <a href="https://linktr.ee/kunalsenani1" target="_blank" rel="noreferrer"><Icon name="Link" /> linktr.ee/kunalsenani1</a>
          <span>Jaipur, India</span>
        </div>
        <div className="hero-actions">
          <a className="button primary" href="mailto:kunalsenani2@gmail.com">Email Kunal</a>
          <a className="button ghost" href="https://linktr.ee/kunalsenani1" target="_blank" rel="noreferrer">Open Portfolio</a>
          <a className="button ghost" href="tel:+919983989783">Call Now</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>Kunal Senani | Video Editor | Jaipur, India</span>
      <a href="#home">Back to top</a>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Showreel />
        <PortfolioGrid />
        <Services />
        <About />
        <ExperienceTimeline />
        <Skills />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
