import { ScrollColorTitle } from "./scroll-color-title";

const linkedIn = "https://www.linkedin.com/in/eric-ormstead/";

const Arrow = () => <span aria-hidden="true">{"\u2197"}</span>;

const leadershipSignals = [
  ["01", "Ownership", "Takes responsibility for the path forward, not only the assigned task."],
  ["02", "Technical credibility", "Pairs hands-on engineering depth with sound architectural judgment."],
  ["03", "Dependability", "Builds trust by bringing complex work through to completion."],
  ["04", "Clarity under ambiguity", "Finds the core issue, organizes the problem, and creates momentum."],
  ["05", "Client trust", "Balances technical decisions with delivery realities and business outcomes."],
] as const;

const focusAreas = [
  {
    number: "01",
    label: "Office Depot foundation",
    title: "A decade-plus in application engineering",
    body: "More than ten years at Office Depot as a programmer and application engineer, including several years as a lead engineer. That tenure built deep enterprise context, delivery discipline, and hands-on technical credibility.",
    tags: ["Programming", "Application engineering", "Lead engineering"],
    art: "BUILD",
    className: "project projectLegacy",
  },
  {
    number: "02",
    label: "Enterprise delivery",
    title: "Cross-team technical leadership",
    body: "A key onshore technical point of contact coordinating development, testing, data, integrations, and business-process concerns across a roughly 15-person delivery environment.",
    tags: ["Delivery ownership", "E2E / UAT", "Client leadership"],
    art: "DELIVER",
    className: "project projectOne",
  },
  {
    number: "03",
    label: "Domain depth",
    title: "Stibo STEP and product data",
    body: "Deep expertise in enterprise product information management, backed by a broader engineering mindset that keeps the platform connected to architecture, integrations, and business value.",
    tags: ["Stibo STEP", "PIM", "Enterprise data"],
    art: "STEP",
    className: "project projectTwo",
  },
  {
    number: "04",
    label: "Engineering breadth",
    title: "Architecture and integration",
    body: "More than a decade of software engineering experience spanning integrations, JavaScript, Java, SQL, cloud technologies, and enterprise architecture.",
    tags: ["Integrations", "Java + JavaScript", "SQL + Cloud"],
    art: "ARCH",
    className: "project projectFour",
  },
] as const;

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="wordmark" href="#top"><span>ERIC</span>ORMSTEAD</a>
          <div className="navLinks">
            <a href="#profile">Profile</a>
            <a href="#leadership">Leadership</a>
            <a href="#experience">Experience</a>
            <a className="navContact" href={linkedIn} target="_blank" rel="noreferrer">Connect <Arrow /></a>
          </div>
        </nav>
        <div className="heroInner">
          <p className="heroEyebrow"><span /> Accenture perspective / Office Depot engineering foundation</p>
          <h1>Leadership<br /><em>built for</em> ambiguity.</h1>
          <div className="heroFoot">
            <p>A high-accountability technical leader who turns difficult programs into organized, aligned, and deliverable solutions.</p>
            <a href="#profile" aria-label="Explore Eric's professional profile">Explore <b>{"\u2193"}</b></a>
          </div>
        </div>
        <div className="heroShade" />
      </section>

      <section className="tileWrap" aria-label="Professional strengths">
        <div className="tileGrid">
          <a className="tile tileAbout" href="#profile">
            <div className="tileImage" /><div className="tileVeil" />
            <span className="tileEyebrow">Operating model</span><h2>Own the<br />outcome.</h2><span className="tileArrow"><Arrow /></span>
          </a>
          <a className="tile tileWork" href="#experience">
            <div className="tileImage" /><div className="tileVeil" />
            <span className="tileEyebrow">Technical depth</span><h2>Engineer<br />the path.</h2><span className="tileArrow"><Arrow /></span>
          </a>
          <a className="tile tileCloud" href="#leadership">
            <div className="tileImage" /><div className="tileVeil" />
            <span className="tileEyebrow">Complex delivery</span><h2>Align the<br />teams.</h2><span className="tileArrow"><Arrow /></span>
          </a>
          <a className="tile tileLead" href="#leadership">
            <div className="tileImage" /><div className="tileVeil" />
            <span className="tileEyebrow">Client leadership</span><h2>Build<br />trust.</h2><span className="tileArrow"><Arrow /></span>
          </a>
          <a className="tile tileConnect" href={linkedIn} target="_blank" rel="noreferrer">
            <span className="connectChevron">{">"}</span>
            <p>Technical leader first.<br />Deep Stibo expert second.</p>
            <ScrollColorTitle /><span className="tileArrow"><Arrow /></span>
          </a>
        </div>
      </section>

      <section className="about section" id="profile">
        <div className="sectionIndex">01 - Executive profile</div>
        <div className="sectionContent">
          <p className="overline">Beyond a traditional engineering role</p>
          <h2>Technical credibility.<br /><em>Delivery ownership.</em></h2>
          <div className="aboutGrid">
            <p className="aboutLead">A strong technical and delivery leader combining deep engineering expertise with high ownership and business awareness.</p>
            <div className="aboutBody">
              <p>Eric operates at the intersection of architecture, delivery, problem-solving, and team leadership. He is comfortable stepping into ambiguous situations, identifying the core issue, establishing a practical path forward, and driving teams toward resolution.</p>
              <p>His foundation includes more than a decade at Office Depot as a programmer and application engineer, with several years as a lead engineer. At Accenture, that hands-on depth now supports broader solution leadership, multi-team coordination, and trusted client delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="signals section" id="leadership">
        <div className="sectionIndex lightIndex">02 - Leadership signature</div>
        <div className="sectionContent">
          <p className="overline purpleOverline">How leadership should know me</p>
          <h2>Five signals of<br /><em>trusted leadership.</em></h2>
          <div className="signalGrid">
            {leadershipSignals.map(([number, title, body]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section" id="experience">
        <div className="sectionIndex">03 - Experience in action</div>
        <div className="sectionContent">
          <div className="workHeading">
            <div><p className="overline">Where I create value</p><h2>From ambiguity<br /><em>to execution.</em></h2></div>
            <p>The strongest positioning is not "a very good Stibo developer." It is a technical leader who happens to have deep Stibo expertise.</p>
          </div>
          <div className="projectList">
            {focusAreas.map((item) => (
              <article className={item.className} key={item.number}>
                <div className="projectNumber">{item.number}</div>
                <div className="projectText"><span>{item.label}</span><h3>{item.title}</h3><p>{item.body}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
                <div className="projectArt"><span>{item.art}</span><div className="architectureLines" aria-hidden="true"><i /><i /><i /><i /></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="leadershipQuote">
        <div className="quoteMark">{"“"}</div>
        <blockquote>Give him a difficult technical program with ambiguity and multiple teams involved - he'll figure it out and take ownership of getting it delivered.</blockquote>
        <p>The reputation I am building</p>
      </section>

      <section className="trajectory section" id="trajectory">
        <div className="sectionIndex">04 - Trajectory</div>
        <div className="sectionContent trajectoryContent">
          <p className="overline">The next evolution</p>
          <h2>Broader scope.<br /><em>Greater influence.</em></h2>
          <div className="trajectoryPath" aria-label="Professional trajectory">
            <article><span>Now</span><h3>Solution Architect</h3><p>Shape architecture and connect technical choices directly to business outcomes.</p></article>
            <b aria-hidden="true">{"\u2192"}</b>
            <article><span>Next</span><h3>Technology & Engineering Leadership</h3><p>Influence beyond the immediate workstream and develop leaders within teams.</p></article>
            <b aria-hidden="true">{"\u2192"}</b>
            <article><span>Future</span><h3>Senior Delivery & Technology Leadership</h3><p>Own increasingly complex programs across architecture, delivery, and client outcomes.</p></article>
          </div>
        </div>
      </section>

      <section className="credentials section" id="credentials">
        <div className="sectionIndex">05 - Foundation</div>
        <div className="sectionContent">
          <p className="overline">Current credentials</p><h2>Cloud fluency,<br /><em>formally validated.</em></h2>
          <div className="credentialGrid">
            <article><div className="awsMark">AWS</div><span>01</span><h3>Certified Solutions Architect</h3><p>Amazon Web Services<br />Current through August 2027</p></article>
            <article><div className="awsMark">AWS</div><span>02</span><h3>Certified Cloud Practitioner</h3><p>Amazon Web Services<br />Current through August 2027</p></article>
            <article className="education"><div className="awsMark">FAU</div><span>03</span><h3>Florida Atlantic University</h3><p>2008-2013<br />Lacrosse</p></article>
          </div>
        </div>
      </section>

      <footer>
        <div className="footerLead"><p>Have a difficult program that needs ownership?</p><h2>Let's turn<br /><em>complexity into progress.</em></h2><a href={linkedIn} target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a></div>
        <div className="footerBottom"><a className="wordmark" href="#top"><span>ERIC</span>ORMSTEAD</a><p>West Palm Beach, Florida</p><p>{"\u00a9"} {new Date().getFullYear()}</p><a href="#top">Back to top {"\u2191"}</a></div>
      </footer>
    </main>
  );
}
