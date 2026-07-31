import Head from 'next/head'
import Link from 'next/link'

export default function Mission() {
  return (
    <>
      <Head>
        <title>Mission — Conclave</title>
        <meta name="description" content="Conclave mission: build a respectful, community-led platform for the furry fandom." />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/logo.png" alt="Conclave" style={{borderRadius:'8px'}} />
            <span className="brand">Conclave</span>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/faq">FAQ</a>
            <a href="#" className="btn-outline">Get Started</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section style={{padding: '3rem 0'}}>
          <h1>Our mission</h1>
          <p className="lead">Conclave exists to create a community-first platform tailored to the furry fandom — where creativity, safety, and discovery are prioritized.
          </p>

          <h2>What we stand for</h2>
          <ul>
            <li><strong>Community-led moderation:</strong> Tools and roles that let communities self-govern respectfully.</li>
            <li><strong>Privacy and safety:</strong> Clear controls for users and moderators to protect creators and participants.</li>
            <li><strong>Discovery and creativity:</strong> Features that help artists, event organizers, and fans find each other.</li>
            <li><strong>Interoperability:</strong> Bridges to other communities and tools where appropriate.</li>
          </ul>

          <p>If you want to help shape Conclave's mission, join the waitlist and contribute feedback once invited.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Conclave — Built for the furry community.</p>
        </div>
      </footer>
    </>
  )
}
