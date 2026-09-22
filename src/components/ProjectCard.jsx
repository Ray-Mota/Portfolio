import { Link as RouterLink } from 'react-router-dom'
import { Paper, Box, Stack, Typography, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function ProjectCard({ project }) {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid #E4E7EF',
        bgcolor: '#FFFFFF',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          aspectRatio: '16 / 10',
          bgcolor: '#0A0F1E',
          backgroundImage: 'linear-gradient(135deg, #121A2E 0%, #1B2743 100%)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Typography sx={{ color: '#3E6BFF', fontFamily: "'JetBrains Mono', monospace", fontSize: 14 }}>
          {'</>'} {project.title}
        </Typography>
      </Box>

      <Stack spacing={1.2} sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700} color="#111729">
          {project.title}
        </Typography>
        <Typography variant="body2" color="#5B6478" sx={{ flexGrow: 1 }}>
          {project.summary}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
          {project.stack.map((s) => (
            <Chip
              key={s}
              label={s}
              size="small"
              sx={{ bgcolor: 'rgba(62,107,255,0.08)', color: '#3E6BFF', fontWeight: 600 }}
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          component={RouterLink}
          to={`/projeto/${project.id}`}
          sx={{ pt: 1, color: '#3E6BFF', fontWeight: 600 }}
        >
          <Typography variant="body2" fontWeight={700} color="inherit">
            Ver projeto
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Stack>
      </Stack>
    </Paper>
  )
}
