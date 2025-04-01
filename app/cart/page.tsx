'use client';

import { Container, Typography, Card, CardContent, Grid, Button, Box, CardMedia, useTheme, useMediaQuery } from '@mui/material';
import useCartStore from '@/store/cartStore';
import Navigation from '@/components/Navigation';

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <main>
      <Navigation />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Корзина
        </Typography>
        
        {items.length === 0 ? (
          <Typography>Корзина пуста</Typography>
        ) : (
          <>
            <Grid container spacing={3}>
              {items.map((item) => (
                <Grid item key={item.id} xs={12}>
                  <Card>
                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={2}>
                          <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.title}
                            sx={{ height: 100, objectFit: 'contain' }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                          <Typography variant="h6">{item.title}</Typography>
                          <Typography color="text.secondary">
                            {item.price} ₽
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1,
                            flexDirection: isMobile ? 'row' : 'column',
                            justifyContent: isMobile ? 'space-between' : 'flex-end'
                          }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Button
                                variant="outlined"
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                size="small"
                              >
                                -
                              </Button>
                              <Typography>{item.quantity}</Typography>
                              <Button
                                variant="outlined"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                size="small"
                              >
                                +
                              </Button>
                            </Box>
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => removeItem(item.id)}
                              size="small"
                            >
                              Удалить
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ 
              mt: 4, 
              textAlign: 'right',
              position: 'sticky',
              bottom: 0,
              bgcolor: 'background.paper',
              p: 2,
              boxShadow: 3,
              borderRadius: 1
            }}>
              <Typography variant="h5">
                Итого: {getTotal()} ₽
              </Typography>
            </Box>
          </>
        )}
      </Container>
    </main>
  );
} 