import { Box, Container, Stack, Typography, Grid } from '@mui/material'
import { projects } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <Box id="projetos" sx={{ bgcolor: '#F7F8FB', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
          spacing={2}
          sx={{ mb: 5 }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
              Meus projetos
            </Typography>
            <Typography variant="h3" sx={{ mt: 1, fontSize: { xs: '1.9rem', md: '2.2rem' }, color: '#111729' }}>
              Alguns dos meus trabalhos
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
