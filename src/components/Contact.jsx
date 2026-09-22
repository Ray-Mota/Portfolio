import { useState } from 'react'
import { Box, Container, Stack, Typography, TextField, Button, Paper } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { profile } from '../data/content.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Troque por uma integração real (ex: EmailJS, Formspree, endpoint próprio).
    window.location.href = `mailto:${profile.email}?subject=Contato pelo portfólio&body=${encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    )}`
  }

  return (
    <Box id="contato" sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 8 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
              Entre em contato
            </Typography>
            <Typography variant="h3" sx={{ mt: 1, fontSize: { xs: '1.9rem', md: '2.2rem' } }}>
              Vamos conversar?
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary', maxWidth: 420 }}>
              Se você tem uma ideia, um projeto ou apenas quer bater um papo sobre tecnologia,
              fique à vontade para me enviar uma mensagem.
            </Typography>

            <Stack spacing={2} sx={{ mt: 4 }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: 'primary.main' }} />
                <Typography>{profile.email}</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LinkedInIcon sx={{ color: 'primary.main' }} />
                <Typography>{profile.linkedin}</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <GitHubIcon sx={{ color: 'primary.main' }} />
                <Typography>{profile.github}</Typography>
              </Stack>
            </Stack>
          </Box>

          <Paper
            component="form"
            onSubmit={handleSubmit}
            elevation={0}
            sx={{ flex: 1, p: { xs: 3, md: 4 }, borderRadius: 4, border: '1px solid #22304A' }}
          >
            <Stack spacing={2.5}>
              <TextField
                label="Nome"
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange('name')}
                fullWidth
                required
              />
              <TextField
                label="Email"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange('email')}
                fullWidth
                required
              />
              <TextField
                label="Mensagem"
                placeholder="Digite sua mensagem..."
                value={form.message}
                onChange={handleChange('message')}
                fullWidth
                required
                multiline
                minRows={4}
              />
              <Button type="submit" variant="contained" size="large">
                Enviar mensagem
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
