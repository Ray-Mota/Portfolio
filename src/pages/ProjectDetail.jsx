import { useParams, Link as RouterLink } from 'react-router-dom'
import { Box, Container, Stack, Typography, Chip, Button, Paper } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import GitHubIcon from '@mui/icons-material/GitHub'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { projects } from '../data/content.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h5">Projeto não encontrado.</Typography>
        <Button component={RouterLink} to="/#projetos" sx={{ mt: 2 }}>
          Voltar para projetos
        </Button>
      </Container>
    )
  }

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 }, minHeight: '70vh' }}>
      <Container maxWidth="lg">
        <Button
          component={RouterLink}
          to="/#projetos"
          startIcon={<ArrowBackIcon />}
          color="inherit"
          sx={{ mb: 4, color: 'text.secondary' }}
        >
          Voltar para projetos
        </Button>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={5}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
              {project.title}
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.secondary', lineHeight: 1.8 }}>
              {project.description}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 3 }}>
              {project.stack.map((s) => (
                <Chip
                  key={s}
                  label={s}
                  size="small"
                  sx={{ bgcolor: 'rgba(62,107,255,0.12)', color: 'primary.main', fontWeight: 600 }}
                />
              ))}
            </Stack>

            <Typography variant="h6" sx={{ mt: 5, mb: 2 }}>
              Principais funcionalidades
            </Typography>
            <Stack spacing={1.2}>
              {project.features.map((f) => (
                <Stack key={f} direction="row" spacing={1.2} alignItems="center">
                  <CheckCircleIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                  <Typography color="text.secondary">{f}</Typography>
                </Stack>
              ))}
            </Stack>

            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href={project.repoUrl}
              sx={{ mt: 4 }}
            >
              Ver código no GitHub
            </Button>
          </Box>

          <Paper
            elevation={0}
            sx={{
              flex: 1,
              borderRadius: 4,
              border: '1px solid #22304A',
              bgcolor: 'background.paper',
              aspectRatio: '4 / 3',
              display: 'grid',
              placeItems: 'center',
              alignSelf: 'flex-start',
            }}
          >
            <Typography sx={{ color: 'primary.main', fontFamily: "'JetBrains Mono', monospace" }}>
              {'</>'} preview do projeto
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
