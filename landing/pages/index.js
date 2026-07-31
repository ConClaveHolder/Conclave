import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  return (
    <>
      <Head>
        <title>Conclave — Community for the Furry Fandom</title>
        <meta name="description" content="Conclave: a community-first platform for the furry fandom — safer, private, and community-led." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/logo.png" alt="Conclave" style={{borderRadius:'8px'}} />
            <span className="brand">Conclave</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="/mission">Mission</a>
            <a href="/faq">FAQ</a>
            <a href="#community">Community</a>
            <a href="#cta" className="btn-outline">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <h1>Welcome to Conclave — your community, your rules</h1>
            <p className="lead">A dedicated, respectful space for the furry fandom — better moderation, better discovery, and focused community tools.</p>
            <div className="hero-cta">
              <form className="waitlist-form" onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.email?.value?.trim();
                if (!email) { setMessage({type:'error', text:'Please enter a valid email.'}); return }
                setLoading(true);
                try {
                  const res = await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
                  if (res.ok) {
                    setMessage({type:'success', text:'Thanks — you are on the waitlist!'});
                    e.target.reset();
                  } else {
                    const json = await res.json().catch(()=>({message:'Unknown error'}));
                    setMessage({type:'error', text: json.message || 'Submission failed'});
                  }
                } catch (err) {
                  setMessage({type:'error', text: 'Network error'});
                } finally { setLoading(false) }
              }}>
                <input name="email" type="email" placeholder="you@example.com" required />
                                <button className="btn-primary" type="submit" disabled={loading}>{loading ? 'Joining...' : 'Join the waitlist'}</button>
                <button type="button" className="btn-ghost" onClick={()=>{document.querySelector('#features')?.scrollIntoView({behavior:'smooth'})}}>See features</button>
                                <div className="waitlist-message" aria-live="polite">{message ? message.text : ''}</div>
              </form>
            </div>
          </div>
        </section>

        <section id="features" className="features container">
          <h2>Features built for community</h2>
          <div className="feature-grid">
            <div className="feature">
              <h3>Private groups</h3>
              <p>Create invite-only circles for roleplay, art trades, or guilds.</p>
            </div>
            <div className="feature">
              <h3>Robust moderation</h3>
              <p>Tools for moderators to keep spaces safe and welcoming.</p>
            </div>
            <div className="feature">
              <h3>Discoverable content</h3>
              <p>Find artists, events, and conversations tailored to you.</p>
            </div>
          </div>
        </section>

        <section id="community" className="community container">
          <h2>Join the community</h2>
          <p>Connect via channels, groups, and events — bring your friends and grow together.</p>
          <div className="community-links">
            <a className="chip" href="#">Discord (bridge)</a>
            <a className="chip" href="#">Telegram (bridge)</a>
            <a className="chip" href="#">Official Blog</a>
          </div>
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
