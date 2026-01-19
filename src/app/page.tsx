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
          Submit your journey
        </Link>
        
        <Text as="p" sx={{ mt: 3, color: 'muted', fontStyle: 'italic', fontSize: [0, 1] }}>
          (Hover to open the envelope)
        </Text>
      </div>

      {/* Main Content Sections */}
      <Container sx={{ py: [5, 6], px: [3, 4], maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ mb: 6 }}>
          <Heading as="h2" sx={{ variant: 'title', color: 'primary', mb: 4, fontSize: [3, 4] }}>What's HandWritten?</Heading>
          <Box sx={{ textAlign: 'left' }}>
            <Flex sx={{ flexDirection: 'column', gap: 3 }}>
              <Box>
                <Text as="p" sx={{ mb: 2, fontSize: [2, 3], fontWeight: 'bold', color: 'primary' }}>You write a short letter about:</Text>
                <Box as="ul" sx={{ listStyle: 'none', p: 0, fontSize: [1, 2] }}>
                  <Text as="li" sx={{ mb: 1 }}>Your Hack Club Journey</Text>
                  <Text as="li" sx={{ mb: 1 }}>Your Favourite YSWS</Text>
                  <Text as="li">Your Favourite Person At The HQ</Text>
                </Box>
              </Box>
              <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: 'muted', width: '100%' }}>
                <Text as="p" sx={{ fontSize: [1, 2], mb: 3 }}>
                  If You write About Your Favourite Person At The HQ You Can Get A Photo Of Them Printed And Signed By Them Then Shipped To You!
                </Text>
                <Text as="p" sx={{ fontSize: [1, 2], color: 'accent', fontWeight: 'bold' }}>
                  Another Surprise: You can write a letter to anyone and we will mail it as a surprise to them without them knowing! (They will know a surprise is coming though).
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Heading as="h2" sx={{ variant: 'title', color: 'primary', mb: 4, fontSize: [3, 4] }}>What can be signed?</Heading>
          <Box as="ul" sx={{ listStyle: 'none', p: 0, m: 0, textAlign: 'left' }}>
            {['Handwritten letters', 'Printed letters', 'Photos or artwork', 'PFPs or images'].map((item, i) => (
              <Box as="li" key={i} sx={{ py: 1, display: 'flex', alignItems: 'center' }}>
                <Heading as="h3" sx={{ fontWeight: 'bold', fontSize: [1, 2] }}>- {item}</Heading>
              </Box>
            ))}
          </Box>
          <Heading as="h4" sx={{ mt: 3, color: 'muted', fontSize: [1, 2], fontWeight: 'normal', width: '100%' }}>
            All signatures are done physically with pen, by your favorite person @ Hack Club!!!
          </Heading>
          <Text as="p" sx={{ mt: 2, color: 'muted', fontStyle: 'italic', fontSize: [0, 1], width: '100%' }}>
            Every signature is unique and carries the personal touch of the Hack Club community.
          </Text>
        </Box>

        <Box sx={{ mb: 6, textAlign: 'left' }}>
          <Heading as="h2" sx={{ variant: 'title', color: 'primary', mb: 4, fontSize: [3, 4] }}>So... Why HandWritten?</Heading>
          <Text as="p" sx={{ fontSize: [2, 3], mb: 2, width: '100%' }}>
            Most projects are online and contact happens on Slack.
            <br />
            <Text as="span" sx={{ color: 'primary', fontWeight: 'bold' }}>This one is on your desk!</Text>
          </Text>
          <Text as="p" sx={{ color: 'muted', fontSize: [1, 2] }}>
            HandWritten lets you slow down and see your journey with Hack Club.
          </Text>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Heading as="h2" sx={{ variant: 'title', color: 'primary', mb: 4, fontSize: [3, 4] }}>How it works</Heading>
          <Flex sx={{ flexDirection: 'column', gap: 4, textAlign: 'left' }}>
            {[
              { title: 'Write', text: 'You write your letter' },
              { title: 'Ship', text: 'You ship it to us DIGITALLY.' },
              { title: 'Reward', text: 'We Check Your Letter And Rate It And U Get Your Reward By The Ratings (Will Be Send On The Announcements Channel In the Slack Community)' },
              { title: 'Ship (From Us)', text: 'We ship it to you (YOUR REWARD!)' },
            ].map((step, i) => (
              <Box key={i} sx={{ py: 2 }}>
                <Heading as="h3" sx={{ mb: 1, fontSize: [2, 3], color: 'primary' }}>{step.title}</Heading>
                <Text as="p" sx={{ color: 'muted', fontSize: [1, 2], width: '100%' }}>{step.text}</Text>
              </Box>
            ))}
          </Flex>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Link
              href="https://forms.fillout.com/t/8t6uHeb2Bvus"
              target="_blank"
              sx={{
                display: 'inline-block',
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
          </Box>
        </Box>

        {/* Footer */}
        <Box as="footer" sx={{ textAlign: 'left', pt: 4, pb: 5, borderTop: '1px solid', borderColor: 'muted' }}>
          <Heading as="h2" sx={{ mb: 2, color: 'primary', fontSize: [3, 4] }}>HandWritten</Heading>
          <Text sx={{ color: 'muted', fontWeight: 'bold', fontSize: [1, 2], display: 'block', mb: 1 }}>
            A <Link href="https://hackclub.com" target="_blank" sx={{ color: 'muted', textDecoration: 'underline', '&:hover': { color: 'accent' } }}>Hack Club</Link> YSWS.
          </Text>
          <Text sx={{ color: 'muted', fontSize: [0, 1], display: 'block', mb: 1 }}>
            Site built by <Link href="https://nok.is-a.dev/" target="_blank" sx={{ color: 'muted', textDecoration: 'underline', '&:hover': { color: 'accent' } }}>Alex Lam</Link>
          </Text>
          <Text sx={{ color: 'muted', fontSize: [0, 1] }}>
            Envelope interaction adapted from <Link href="https://github.com/Hasnain-Mahmood009/Envelope-Letter-HTML-CSS" target="_blank" sx={{ color: 'muted', textDecoration: 'underline', '&:hover': { color: 'accent' } }}>Hasnain Mahmood</Link>
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
