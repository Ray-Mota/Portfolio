import { Box, Container, Stack, Typography, Button, Paper } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ReactIcon from '@mui/icons-material/Adjust'
import CodeIcon from '@mui/icons-material/Code'
import DataObjectIcon from '@mui/icons-material/DataObject'
import PaletteIcon from '@mui/icons-material/Palette'
import profilePhoto from '../assets/profile.jpg'
import { profile, stack } from '../data/content.js'

const stackIcons = {
  React: ReactIcon,
  TypeScript: CodeIcon,
  'Material UI': PaletteIcon,
  Git: DataObjectIcon,
}

export default function Hero() {
  return (
    <Box id="inicio" sx={{ bgcolor: 'background.default', pt: { xs: 8, md: 10 }, pb: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 6, md: 4 }}
          alignItems="center"
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.08em' }}
            >
              Olá, eu sou
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.6rem', md: '3.4rem' }, mt: 1 }}>
              {profile.name.split(' ')[0]}{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                {profile.name.split(' ').slice(1).join(' ')}
              </Box>
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, color: 'text.secondary', fontWeight: 600 }}>
              {profile.role}
            </Typography>
            <Typography sx={{ mt: 3, color: 'text.secondary', maxWidth: 480, lineHeight: 1.7 }}>
              {profile.heroText}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 4 }} flexWrap="wrap" useFlexGap>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="#projetos"
              >
                Ver meus projetos
              </Button>
              <Button variant="outlined" size="large" color="inherit" href="#contato" sx={{ borderColor: '#2A3752' }}>
                Entrar em contato
              </Button>
            </Stack>
          </Box>

          <Box sx={{ position: 'relative', flexShrink: 0 }}>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                transform: 'translate(18px, 18px)',
                borderRadius: 4,
                border: '2px solid',
                borderColor: 'primary.main',
                opacity: 0.5,
              }}
            />
            <Paper
              elevation={0}
              sx={{
                width: { xs: 240, sm: 300, md: 320 },
                height: { xs: 240, sm: 300, md: 320 },
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid #22304A',
              }}
            >
              <Box
                component="img"
                src={profilePhoto}
                alt={profile.name}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Paper>

            <Stack
              spacing={1.5}
              sx={{
                position: 'absolute',
                top: 12,
                right: { xs: -12, md: -140 },
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {stack.map((item) => {
                const Icon = stackIcons[item.name] ?? CodeIcon
                return (
                  <Paper
                    key={item.name}
                    elevation={0}
                    sx={{
                      px: 2,
                      py: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      bgcolor: 'background.paper',
                      border: '1px solid #22304A',
                      borderRadius: 2,
                    }}
                  >
                    <Icon sx={{ fontSize: 18, color: 'primary.main' }} />
                    <Typography variant="body2" fontWeight={600}>
                      {item.name}
                    </Typography>
                  </Paper>
                )
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
