import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CircleAlert,
  Github,
  Globe2,
  Layers3,
  Menu,
  Radio,
  Route,
  ShieldCheck,
  Siren,
  X,
} from 'lucide-react';
import newsScreen from '@/assets/images/screenshots/WhatsApp_Image_2026-09-30_at_17.26.44.jpeg';
import profileScreen from '@/assets/images/screenshots/WhatsApp_Image_2026-09-30_at_17.26.43_(1).jpeg';
import guideScreen from '@/assets/images/screenshots/WhatsApp_Image_2026-09-30_at_17.26.43.jpeg';
import homeScreen from '@/assets/images/screenshots/WhatsApp_Image_2026-09-30_at_17.26.42_(1).jpeg';
import mapScreen from '@/assets/images/screenshots/WhatsApp_Image_2026-09-30_at_17.26.42.jpeg';

const navItems = ['Platform', 'How it works', 'Intelligence', 'For authorities', 'Preparedness'];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionKicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`kicker ${light ? 'kicker-light' : ''}`}><span />{children}</p>;
}

function PhoneFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-speaker" />
      <img src={src} alt={alt} />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Vippatti Sarana home">
          <span className="brand-mark"><span /></span>
          <span>Vippatti <b>Sarana</b></span>
        </a>
        <nav className={menuOpen ? 'mobile-open' : ''} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} onClick={closeMenu}>{item}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="github-link" href="https://github.com/alenalex-009/vippatti_sarana" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <a className="button button-small button-dark" href="#platform">Explore platform <ArrowRight size={15} /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero" id="platform">
          <div className="hero-gridlines" />
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-inner container">
            <Reveal className="hero-copy">
              <SectionKicker light>Disaster intelligence · India</SectionKicker>
              <h1>Know the danger.<br /><em>Know where to go.</em><br />Act before it&apos;s too late.</h1>
              <p className="hero-lede">Vippatti Sarana is an India-wide disaster decision-support platform combining hazard intelligence, risk assessment, safe-zone capacity, evacuation routing and preparedness tools in one place.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#how-it-works">Explore the platform <ArrowRight size={17} /></a>
                <a className="text-link light-link" href="https://github.com/alenalex-009/vippatti_sarana" target="_blank" rel="noreferrer"><Github size={17} /> View on GitHub</a>
              </div>
              <p className="credibility"><span className="credibility-dot" /> Built for Smart India Hackathon 2026 <i /> Disaster Management</p>
            </Reveal>
            <Reveal className="hero-visual">
              <div className="hero-label label-top"><span className="pulse" /> LIVE HAZARDS <b>07</b></div>
              <div className="hero-phone-glow" />
              <PhoneFrame src={mapScreen} alt="Vippatti Sarana disaster radar map showing hazard markers across India" className="hero-phone" />
              <div className="hero-label label-left"><Layers3 size={14} /> SAFE ZONES <b>12</b></div>
              <div className="hero-label label-right"><Route size={14} /> ROUTING <b>ACTIVE</b></div>
              <div className="geo-coordinate">20°35&apos;N / 78°57&apos;E</div>
            </Reveal>
          </div>
          <div className="hero-bottom container"><span>Scroll to explore</span><ArrowDownRight size={18} /><span className="hero-rule" /><span>Decision support, not emergency service</span></div>
        </section>

        <section className="problem section" id="how-it-works">
          <div className="container problem-layout">
            <Reveal className="problem-intro"><SectionKicker>The moment that matters</SectionKicker><h2>Three questions matter when disaster strikes.</h2><p>When every minute counts, fragmented information becomes a risk of its own. Vippatti Sarana brings the critical pieces into one clear decision-support workflow.</p><a className="text-link green-link" href="#intelligence">See the intelligence pipeline <ArrowRight size={16} /></a></Reveal>
            <div className="question-list">
              {['Where is the danger?', 'Where can people go?', 'Who needs to move first?'].map((question, index) => <Reveal key={question} className="question"><span>0{index + 1}</span><h3>{question}</h3><ArrowUpRight /></Reveal>)}
            </div>
          </div>
          <div className="topographic topographic-one" /><div className="topographic topographic-two" />
        </section>

        <section className="showcase section" id="preparedness">
          <div className="container"><Reveal><SectionKicker>One platform. A clearer response.</SectionKicker><h2>From warning<br /><span>to action.</span></h2></Reveal>
            <div className="showcase-stories">
              <Reveal className="story story-first"><div className="story-copy"><span className="story-number">01 / 05</span><h3>See the danger</h3><p>Scan the disaster radar with hazard layers, approximate location context and a national view of what is unfolding.</p><div className="story-tags"><span><Radio size={14} /> Live hazard layers</span><span><Globe2 size={14} /> India-wide context</span></div></div><div className="story-media map-media"><PhoneFrame src={mapScreen} alt="Disaster radar map in Vippatti Sarana" /></div></Reveal>
              <Reveal className="story story-reverse"><div className="story-copy"><span className="story-number">02 / 05</span><h3>Understand your risk</h3><p>Translate location and hazard signals into a readable risk view, recommended actions and a next step that people can act on.</p><div className="story-callout"><CircleAlert size={18} /><span><b>Risk status</b> stays visible, explainable and labelled.</span></div></div><div className="story-media home-media"><PhoneFrame src={homeScreen} alt="Vippatti Sarana home screen showing elevated risk assessment" /></div></Reveal>
              <Reveal className="story story-third"><div className="story-copy"><span className="story-number">03 / 05</span><h3>Find a safer path</h3><p>Compare safe zones by distance, terrain, shelter capacity and route conditions — with alternatives when the first route is not enough.</p><div className="metric-line"><b>01</b><span>Hazard-aware routing</span><i /><b>02</b><span>Capacity check</span></div></div><div className="story-media route-media"><PhoneFrame src={mapScreen} alt="Vippatti Sarana map with route and safe zone context" /></div></Reveal>
              <Reveal className="story story-reverse story-news"><div className="story-copy"><span className="story-number">04 / 05</span><h3>Stay informed</h3><p>Follow the disaster news feed and listen to an audio bulletin designed for low-bandwidth moments and blackouts.</p><div className="story-callout"><Radio size={18} /><span><b>Audio bulletin</b> built for low-bandwidth playback.</span></div></div><div className="story-media news-media"><PhoneFrame src={newsScreen} alt="Vippatti Sarana news feed and audio bulletin screen" /></div></Reveal>
              <Reveal className="story story-guide"><div className="story-copy"><span className="story-number">05 / 05</span><h3>Prepare before disaster strikes</h3><p>Use disaster-specific guidance, survival checklists and emergency quick actions before information becomes critical.</p><div className="story-tags"><span><ShieldCheck size={14} /> Survival manual</span><span><Siren size={14} /> Emergency quick actions</span></div></div><div className="story-media guide-media"><PhoneFrame src={guideScreen} alt="Vippatti Sarana survival manual screen" /></div></Reveal>
            </div>
          </div>
        </section>

        <section className="intelligence dark-section" id="intelligence">
          <div className="container intelligence-layout"><Reveal className="intelligence-intro"><SectionKicker light>Decision support architecture</SectionKicker><h2>Turn fragmented disaster data into <em>actionable intelligence.</em></h2><p>Vippatti Sarana helps connect live signals, contextual risk and practical response options. It supports decisions — it does not replace official authorities.</p></Reveal>
            <Reveal className="pipeline"><div className="pipeline-line" />{['Live data', 'Hazard detection', 'Risk assessment', 'Safe-zone evaluation', 'Capacity check', 'Evacuation route', 'Relocation priority'].map((step, index) => <div className="pipeline-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b>{index < 6 && <ArrowDownRight size={15} />}</div>)}</Reveal>
          </div>
          <div className="source-strip container"><span>Signals and source labels</span>{['USGS', 'NASA FIRMS', 'IMD', 'GNews', 'Open-Meteo', 'OSRM'].map((source) => <b key={source}>{source}</b>)}</div>
        </section>

        <section className="transparency section"><div className="container transparency-layout"><Reveal className="transparency-copy"><SectionKicker>Trust is a feature</SectionKicker><h2>We don&apos;t pretend simulated data is real.</h2><p>Every signal has a provenance. Vippatti Sarana makes the difference visible so a person or authority can understand what is live, what is cached and what still needs verification.</p><a className="text-link green-link" href="#footer">Read the disclaimer <ArrowRight size={16} /></a></Reveal><Reveal className="provenance-board"><div className="board-header"><span>DATA PROVENANCE</span><span>STATUS / CONTEXT</span></div>{[['LIVE', 'Updated from an active source', 'live'], ['CACHED', 'Previously fetched and available locally', 'cached'], ['STALE', 'Known, but past its freshness window', 'stale'], ['SIMULATED', 'Demo or test data — never hidden', 'simulated'], ['DERIVED', 'Calculated from multiple signals', 'derived'], ['HISTORICAL', 'Useful context from past events', 'historical'], ['NOT CONFIGURED', 'Source connection is not available', 'not-configured']].map(([name, detail, tone]) => <div className="provenance-row" key={name}><span className={`status status-${tone}`}><i />{name}</span><span>{detail}</span><ArrowRight size={14} /></div>)}</Reveal></div></section>

        <section className="evacuation section"><div className="container"><Reveal className="evacuation-heading"><SectionKicker>Hazard-aware movement</SectionKicker><h2>From a hazard on the map<br /><span>to a safer place to go.</span></h2><p>Distance alone is not a plan. The platform brings together hazard, terrain, shelter capacity, safety and alternative routes to make the recommendation more useful.</p></Reveal><Reveal className="evacuation-flow">{[['01', 'Hazard detected', 'Signal identified in your area'], ['02', 'Risk evaluated', 'Context turns into a clear status'], ['03', 'Safe zones filtered', 'Options are checked against the hazard'], ['04', 'Shelter capacity checked', 'Space and carrying capacity matter'], ['05', 'Route evaluated', 'Terrain, distance and alternatives'], ['06', 'Safer destination recommended', 'A practical next move, explained']].map(([number, title, detail], index) => <div className={`flow-item ${index === 5 ? 'flow-final' : ''}`} key={number}><span>{number}</span><div><b>{title}</b><small>{detail}</small></div>{index < 5 && <ArrowDownRight size={18} />}</div>)}</Reveal></div></section>

        <section className="authority dark-green-section" id="for-authorities"><div className="container authority-layout"><Reveal className="authority-copy"><SectionKicker light>For the people coordinating the response</SectionKicker><h2>Built for people on the ground — and the people coordinating the response.</h2><p>The Authority Console turns field-level information into transparent prioritization, so response teams can see what needs attention and why.</p><a className="button button-light" href="#footer">Explore authority workflows <ArrowRight size={16} /></a></Reveal><Reveal className="authority-panel"><div className="panel-top"><span>AUTHORITY CONSOLE / PRIORITY VIEW</span><span className="panel-live"><i /> LIVE VIEW</span></div><div className="registry-row"><Globe2 /><div><b>Field registry</b><span>Habitation and shelter information</span></div><ArrowRight /></div><div className="priority-list"><div className="priority-heading"><span>RELOCATION PRIORITY</span><span>CRITERIA / 04</span></div>{[['IMMEDIATE', 'Flood exposure · 218 people', 'priority-red'], ['SHORT-TERM', 'Shelter capacity · 74 spaces', 'priority-amber'], ['MEDIUM-TERM', 'Access route · 1.8 km', 'priority-blue'], ['LOW', 'Verified safe · monitoring', 'priority-green']].map(([label, detail, tone]) => <div className="priority-row" key={label}><span className={`priority-pill ${tone}`}>{label}</span><span>{detail}</span><ArrowRight size={14} /></div>)}</div><p className="panel-note"><Check size={14} /> Explainable recommendations, not black-box decisions.</p></Reveal></div></section>

        <section className="offline section"><div className="container offline-layout"><Reveal className="offline-copy"><SectionKicker>Resilience by design</SectionKicker><h2>When connectivity fails, <span>preparedness shouldn&apos;t.</span></h2><p>Graceful fallback keeps the most useful context close at hand. Not full offline operation — cached information and guidance that remain available when networks are uncertain.</p></Reveal><Reveal className="offline-features">{[['01', 'Cached data', 'Previously loaded information stays close.'], ['02', 'Offline guidance', 'Survival steps remain readable.'], ['03', 'Emergency tools', 'Quick actions stay within reach.'], ['04', 'Audio bulletin', 'Low-bandwidth listening when text is hard.']].map(([number, title, text]) => <div className="offline-feature" key={number}><span>{number}</span><div><b>{title}</b><p>{text}</p></div><Check size={16} /></div>)}</Reveal></div></section>

        <section className="emergency section"><div className="container emergency-layout"><Reveal className="emergency-visual"><div className="red-rings" /><PhoneFrame src={profileScreen} alt="Vippatti Sarana profile screen with SOS center and emergency helplines" className="profile-phone" /></Reveal><Reveal className="emergency-copy"><SectionKicker>For the moment information becomes critical</SectionKicker><h2>Designed for the moment when information becomes <span>critical.</span></h2><p>Put a clear signal in the hands of the person who needs it: safety status, emergency helplines, battery and location context, situation reporting and preparedness tools.</p><div className="emergency-list">{[['SOS', 'Broadcast a clear distress signal'], ['Helplines', 'Keep priority contacts visible'], ['Situation report', 'Share context, not just a location'], ['Preparedness', 'Move from panic to a next step']].map(([title, detail]) => <div key={title}><span><Siren size={16} /></span><div><b>{title}</b><small>{detail}</small></div></div>)}</div></Reveal></div></section>

        <section className="final-cta dark-section"><div className="container final-cta-inner"><Reveal><SectionKicker light>Start with preparedness</SectionKicker><h2>Preparedness starts<br /><em>before the disaster.</em></h2><p>Vippatti Sarana brings hazard intelligence, safe-zone analysis, evacuation routing and preparedness tools together in one platform.</p><div className="hero-actions"><a className="button button-primary" href="#platform">Explore Vippatti Sarana <ArrowRight size={17} /></a><a className="text-link light-link" href="https://github.com/alenalex-009/vippatti_sarana" target="_blank" rel="noreferrer"><Github size={17} /> View the project on GitHub</a></div></Reveal></div></section>
      </main>

      <footer id="footer"><div className="container footer-top"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>Vippatti <b>Sarana</b></span></a><p>Disaster intelligence.<br />Preparedness. Action.</p><div className="footer-links"><a href="#platform">Platform</a><a href="#how-it-works">How it works</a><a href="https://github.com/alenalex-009/vippatti_sarana" target="_blank" rel="noreferrer">GitHub</a><a href="#footer">Disclaimer</a></div></div><div className="container footer-bottom"><span>© 2026 Vippatti Sarana</span><span>Built for Smart India Hackathon 2026</span><p>Vippatti Sarana is decision-support software, not an emergency service. It does not replace official emergency alerts, government authorities, or professional emergency response.</p></div></footer>
    </div>
  );
}

function ArrowUpRight() { return <ArrowRight size={21} className="arrow-up" />; }

export default App;
