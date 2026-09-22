import { Box, Container, Stack, Typography, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.default', borderTop: '1px solid #1C2740', py: 3 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1.5}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <IconButton size="small" href={`https://${profile.github}`} sx={{ color: 'text.secondary' }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" href={`https://${profile.linkedin}`} sx={{ color: 'text.secondary' }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" href={`mailto:${profile.email}`} sx={{ color: 'text.secondary' }}>
              <EmailIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
