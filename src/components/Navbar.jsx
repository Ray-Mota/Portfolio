import { useState } from 'react'
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CodeIcon from '@mui/icons-material/Code'
import DownloadIcon from '@mui/icons-material/Download'
import { profile } from '../data/content.js'

const navLinks = [
  { label: 'Início', hash: '#inicio' },
  { label: 'Sobre', hash: '#sobre' },
  { label: 'Projetos', hash: '#projetos' },
  { label: 'Tecnologias', hash: '#tecnologias' },
  { label: 'Contato', hash: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = (hash) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(10, 15, 30, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #1C2740',
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', py: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1 }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '10px',
              bgcolor: 'primary.main',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <CodeIcon sx={{ fontSize: 18, color: '#fff' }} />
          </Box>
          <Typography fontWeight={700}>{profile.name.split(' ')[0]} {profile.name.split(' ')[1]}</Typography>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <Button key={link.hash} onClick={() => goToSection(link.hash)} color="inherit">
              {link.label}
            </Button>
          ))}
        </Stack>

        <Button
          variant="outlined"
          color="inherit"
          startIcon={<DownloadIcon />}
          href={profile.cvUrl}
          sx={{ ml: 2, display: { xs: 'none', md: 'inline-flex' }, borderColor: '#2A3752' }}
        >
          Baixar CV
        </Button>

        <IconButton
          color="inherit"
          sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, bgcolor: 'background.default', height: '100%', pt: 2 }}>
          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.hash} onClick={() => goToSection(link.hash)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
            <ListItemButton component="a" href={profile.cvUrl}>
              <ListItemText primary="Baixar CV" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
