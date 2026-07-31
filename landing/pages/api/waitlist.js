export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })
  try {
    const { email } = req.body || {}
    if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return res.status(400).json({ message: 'Invalid email' })
    }

    // NOTE: This handler currently logs submissions to server logs only.
    // For production persistence, integrate Mailchimp, Buttondown, or a database.
    console.log('[waitlist] New submission:', email)

    return res.status(200).json({ message: 'ok' })
  } catch (err) {
    console.error('waitlist error', err)
    return res.status(500).json({ message: 'server error' })
  }
}
