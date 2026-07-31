import Head from 'next/head'

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ — Conclave</title>
        <meta name="description" content="Frequently asked questions about Conclave: privacy, moderation, waitlist, and integrations." />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/logo.png" alt="Conclave" style={{borderRadius:'8px'}} />
            <span className="brand">Conclave</span>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/mission">Mission</a>
            <a href="#" className="btn-outline">Get Started</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section style={{padding: '3rem 0'}}>
          <h1>Frequently asked questions</h1>

          <h2>Is Conclave free to use?</h2>
          <p>During early access and the waitlist period Conclave will be free. Future monetization models may include optional premium features for communities.</p>

          <h2>How does moderation work?</h2>
          <p>Communities have moderation tools and role-based permissions. We aim to provide clear appeals and transparent moderation logs for community trust.</p>

          <h2>What about privacy and safety?</h2>
          <p>Conclave will provide privacy controls for profiles, content, and groups. Safety-first defaults will be in place for new communities.</p>

          <h2>Can I connect my Discord/Telegram?</h2>
          <p>Yes — Conclave plans to support bridges and imports so communities can interop with existing channels where desired.</p>

          <h2>How do I join the waitlist?</h2>
          <p>Click "Join the waitlist" on the homepage and enter your email. You can also follow the project on social channels for updates.</p>

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
