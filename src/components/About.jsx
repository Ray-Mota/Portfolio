import { Box, Container, Stack, Typography, Button, Paper } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GroupsIcon from '@mui/icons-material/Groups'
import VerifiedIcon from '@mui/icons-material/Verified'
import { profile } from '../data/content.js'

const icons = [AccessTimeIcon, GroupsIcon, VerifiedIcon]

export default function About() {
  return (
    <Box id="sobre" sx={{ bgcolor: '#F7F8FB', color: '#111729', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
              Sobre mim
            </Typography>
            <Typography variant="h3" sx={{ mt: 1, fontSize: { xs: '1.9rem', md: '2.2rem' } }}>
              {profile.aboutTitle}
            </Typography>
            <Typography sx={{ mt: 2, color: '#5B6478', lineHeight: 1.8 }}>
              {profile.aboutText}
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {profile.highlights.map((h, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <Stack key={h.label} direction="row" spacing={1.5} alignItems="center">
                    <Icon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography color="#111729">{h.label}</Typography>
                  </Stack>
                )
              })}
            </Stack>

            <Button variant="outlined" sx={{ mt: 4 }} href="#projetos">
              Saiba mais sobre mim
            </Button>
          </Box>

          <Paper
            elevation={0}
            sx={{
              flex: 1,
              width: '100%',
              borderRadius: 4,
              overflow: 'hidden',
              bgcolor: '#0A0F1E',
              border: '1px solid #E4E7EF',
              aspectRatio: '4 / 3',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: 4,
            }}
          >
            <Stack spacing={0.6} sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>
              <Typography sx={{ color: '#93A1BD', fontFamily: 'inherit' }}>
                const <Box component="span" sx={{ color: '#3E6BFF' }}>dev</Box> = {'{'}
              </Typography>
              <Typography sx={{ color: '#93A1BD', fontFamily: 'inherit', pl: 2 }}>
                nome: <Box component="span" sx={{ color: '#7DD3FC' }}>'{profile.name}'</Box>,
              </Typography>
              <Typography sx={{ color: '#93A1BD', fontFamily: 'inherit', pl: 2 }}>
                stack: [<Box component="span" sx={{ color: '#7DD3FC' }}>'React'</Box>, <Box component="span" sx={{ color: '#7DD3FC' }}>'MUI'</Box>],
              </Typography>
              <Typography sx={{ color: '#93A1BD', fontFamily: 'inherit', pl: 2 }}>
                foco: <Box component="span" sx={{ color: '#7DD3FC' }}>'qualidade'</Box>,
              </Typography>
              <Typography sx={{ color: '#93A1BD', fontFamily: 'inherit' }}>{'}'}</Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
