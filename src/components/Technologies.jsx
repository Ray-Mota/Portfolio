import { Box, Container, Stack, Typography, Paper } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import DataObjectIcon from '@mui/icons-material/DataObject'
import PaletteIcon from '@mui/icons-material/Palette'
import GitHubIcon from '@mui/icons-material/GitHub'
import { stack } from '../data/content.js'

const icons = {
  React: CodeIcon,
  TypeScript: DataObjectIcon,
  'Material UI': PaletteIcon,
  Git: GitHubIcon,
}

export default function Technologies() {
  return (
    <Box id="tecnologias" sx={{ bgcolor: 'background.default', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
          Tecnologias
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 5, fontSize: { xs: '1.9rem', md: '2.2rem' } }}>
          Ferramentas que uso no dia a dia
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {stack.map((item) => {
            const Icon = icons[item.name] ?? CodeIcon
            return (
              <Paper
                key={item.name}
                elevation={0}
                sx={{
                  px: 3,
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  border: '1px solid #22304A',
                  borderRadius: 3,
                  minWidth: 150,
                }}
              >
                <Icon sx={{ color: 'primary.main' }} />
                <Typography fontWeight={600}>{item.name}</Typography>
              </Paper>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}
