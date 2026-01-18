'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, Grid, Card, Flex, Link } from 'theme-ui'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const letterContent = "HandWritten is a YSWS where you turn your Hack Club journey into something real. You write it. We sign it. We ship it."

  return (
    <Box as="main" sx={{ bg: 'background', color: 'text', minHeight: '100vh' }}>
      {/* Letter Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>&times;</button>
            <div className="modal-text">
              <p>{letterContent}</p>
            </div>
          </div>
        </div>
      )}

      <div className="hero-container" style={{ alignItems: 'center', textAlign: 'center' }}>
        <Heading as="h1" variant="ultratitle" sx={{ color: 'primary', mb: 3, fontSize: [4, 5, 5], textAlign: 'center', lineHeight: 0.8, fontWeight: 'bold' }}>
          HandWritten
        </Heading>
        <Text as="p" sx={{ variant: 'subtitle', color: 'accent', fontWeight: 'bold', mb: 5, fontSize: [1, 2, 3], textAlign: 'center' }}>
          Your Hack Club journey, on paper.
        </Text>

        <div className="envelope-wrapper" onClick={() => setIsModalOpen(true)} style={{ margin: '0 auto' }}>
          <div className="envelope">
            <div className="letter">
              <div className="letter-text">
                {letterContent}
              </div>
            </div>
          </div>
        </div>

        <Link
          href="https://forms.fillout.com/t/8t6uHeb2Bvus"
          target="_blank"
          sx={{
            display: 'inline-block',
            mt: 3,
            px: 4,
            py: 2,
            bg: 'accent',
            color: 'white',
            borderRadius: 3,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: [2, 3],
            '&:hover': {
              bg: 'primary',
              color: 'background',
            },
          }}
        >
          RSVP Right Now!
        </Link>
        
        <Text as="p" sx={{ mt: 4, color: 'muted', fontSize: 1, fontStyle: 'italic' }}>
          (Hover to open, click to read)
        </Text>
      </div>

      {/* Main Content Sections */}
      <Container sx={{ py: [5, 6], px: [3, 4], maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ mb: 6 }}>
          <Heading as="h2" sx={{ variant: 'title', color: 'primary', mb: 4, fontSize: [1, 2, 3] }}>What's HandWritten?</Heading>
          <Box sx={{ textAlign: 'left' }}>
            <Flex sx={{ flexDirection: 'column', gap: 3 }}>
              <Box>
                <Text as="p" sx={{ mb: 2, fontSize: [1, 1, 2], fontWeight: 'bold', color: 'primary' }}>You write a short letter about:</Text>
                <Box as="ul" sx={{ listStyle: 'none', p: 0, fontSize: [0, 1, 1] }}>
                  <Text as="li" sx={{ mb: 1 }}>Your Hack Club journey</Text>
                  <Text as="li">Your favorite YSWS event</Text>
                </Box>
              </Box>
              <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: 'sheet', width: '100%' }}>
                <Text as="p" sx={{ fontSize: [0, 1, 1] }}>
                  You ship your story to us.
                  <br /><br />
                  We physically sign it and ship it back.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Heading as="h2" sx={{ variant: 'title', color: 'primary', mb: 4, fontSize: [1, 2, 3] }}>What can be signed?</Heading>
          <Flex sx={{ flexDirection: 'column', gap: 2, textAlign: 'left' }}>
            {['Handwritten letters', 'Printed letters', 'Photos or artwork', 'PFPs or images'].map((item, i) => (
              <div key={i} className="grid-card" style={{ fontSize: 'inherit' }}>
                <Text sx={{ fontWeight: 'bold', display: 'block', fontSize: [1, 1, 2] }}>{item}</Text>
              </div>
            ))}
          </Flex>
          <Text as="p" sx={{ mt: 3, color: 'muted', fontStyle: 'italic', fontSize: [0, 0, 0], width: '100%' }}>
            All signatures are done physically with pen, by your favorite person @ Hack Club!!!
          </Text>
        </Box>

        <Box sx={{ mb: 6, textAlign: 'left' }}>
          <Heading as="h2" sx={{ variant: 'title', color: 'primary', mb: 4, fontSize: [1, 2, 3] }}>So... Why HandWritten?</Heading>
          <Text as="p" sx={{ fontSize: [1, 1, 2], mb: 2, width: '100%' }}>
            Most projects are online and contact happens on Slack.
            <br />
            <Text as="span" sx={{ color: 'primary', fontWeight: 'bold' }}>This one is on your desk!</Text>
          </Text>
          <Text as="p" sx={{ color: 'secondary', fontSize: [0, 1, 1] }}>
            HandWritten lets you slow down and see your journey with Hack Club.
          </Text>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Heading as="h2" sx={{ variant: 'title', color: 'primary', mb: 4, fontSize: [1, 2, 3] }}>How it works</Heading>
          <Flex sx={{ flexDirection: 'column', gap: 4, textAlign: 'left' }}>
            {[
              { title: 'Write', text: 'You write your letter or choose an image' },
              { title: 'Ship', text: 'You ship it to us' },
              { title: 'Sign', text: 'We sign it by hand' },
              { title: 'Return', text: 'We ship it back to you' },
            ].map((step, i) => (
              <Box key={i} sx={{ py: 2 }}>
                <Heading as="h3" sx={{ mb: 1, fontSize: [1, 1, 2], color: 'primary' }}>{step.title}</Heading>
                <Text as="p" sx={{ color: 'secondary', fontSize: [0, 1, 1], width: '100%' }}>{step.text}</Text>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Footer */}
        <Box as="footer" sx={{ textAlign: 'left', pt: 4, pb: 5, borderTop: '1px solid', borderColor: 'sunken' }}>
          <Heading as="h2" sx={{ mb: 2, color: 'primary', fontSize: [3, 4] }}>HandWritten</Heading>
          <Text sx={{ color: 'muted', fontWeight: 'bold', fontSize: [1, 2], display: 'block', mb: 1 }}>
            A <Link href="https://hackclub.com" target="_blank" sx={{ color: 'muted', textDecoration: 'underline', '&:hover': { color: 'accent' } }}>Hack Club</Link> YSWS.
          </Text>
          <Text sx={{ color: 'muted', fontSize: 0, display: 'block', mb: 1 }}>
            Site built by <Link href="https://nok.is-a.dev/" target="_blank" sx={{ color: 'muted', textDecoration: 'underline', '&:hover': { color: 'accent' } }}>Alex Lam</Link>
          </Text>
          <Text sx={{ color: 'muted', fontSize: 0 }}>
            Envelope interaction adapted from <Link href="https://github.com/Hasnain-Mahmood009/Envelope-Letter-HTML-CSS" target="_blank" sx={{ color: 'muted', textDecoration: 'underline', '&:hover': { color: 'accent' } }}>Hasnain Mahmood</Link>
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
