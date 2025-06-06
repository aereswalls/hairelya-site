'use client'

import Image from 'next/image'
import { Box, Container, Typography, Grid, Button, useTheme } from '@mui/material'

export default function HomePage() {
  const theme = useTheme()

  return (
    <Box sx={{ background: theme.palette.background.default, minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Image
            src="/images/hairelya.png"
            alt="Hairelya logo"
            width={120}
            height={32}
            style={{ marginBottom: 16 }}
          />
          <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
            Hairelya – Your hair care ritual
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            L’app che trasforma la tua hair routine in un rituale semplice e motivante.
          </Typography>
        </Box>

        <Typography variant="h5" component="h2" fontWeight={500} gutterBottom textAlign="center">
          ✨ Funzionalità principali
        </Typography>

        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Profilazione capelli</Typography>
            <Typography variant="body1" color="text.secondary">
              Scopri la tua tipologia di capello e personalizza la tua routine.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Routine smart</Typography>
            <Typography variant="body1" color="text.secondary">
              Promemoria, pianificazione, consigli e progressi visibili.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Diario e prodotti</Typography>
            <Typography variant="body1" color="text.secondary">
              Annotazioni sui trattamenti e valutazioni dei prodotti nel tempo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Grafici e motivazione</Typography>
            <Typography variant="body1" color="text.secondary">
              Rendi visibile il tuo progresso con grafici e badge.
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={8}>
          <Typography variant="h6" gutterBottom>
            📲 Uno sguardo all'app
          </Typography>
          <Box sx={{ overflowX: 'auto', display: 'flex', gap: 2, py: 2 }}>
            {[1, 2, 3, 4, 5].map((num) => (
              <Image
                key={num}
                src={`/images/app-mockup-${num}.png`}
                alt={`Mockup ${num}`}
                width={200}
                height={420}
                style={{ borderRadius: 16 }}
              />
            ))}
          </Box>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              href="https://apps.apple.com/it/app/"
              target="_blank"
            >
              Scarica su App Store
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
