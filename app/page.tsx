'use client';

import { useState, useEffect, Suspense } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  SelectChangeEvent
} from '@mui/material';
import useCartStore from '@/store/cartStore';
import Navigation from '@/components/Navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const displayNameCategories = [
  { name: 'Мужская одежда', value: 'men\'s clothing' },
  { name: 'Женская одежда', value: 'women\'s clothing' },
  { name: 'Ювелирные изделия', value: 'jewelery' },
  { name: 'Электроника', value: 'electronics' },
]

function ProductCard({ product, addItem }: { product: Product; addItem: (product: Product) => void }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {product.title}
        </Typography>
        <Typography sx={{ mb: 2 }}>
          {product.price} ₽
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addItem(product)}
          sx={{ mt: "auto" }}
        >
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при загрузке товаров:', error);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <Navigation />
      <Container sx={{ py: 4 }}>
        <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            fullWidth
            label="Поиск"
            variant="outlined"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
          <FormControl sx={{ minWidth: { xs: '100%', sm: 200 } }}>
            <InputLabel>Категория</InputLabel>
            <Select
              value={selectedCategory}
              label="Категория"
              onChange={(e: SelectChangeEvent<string>) => setSelectedCategory(e.target.value)}
            >
              <MenuItem value="">Все</MenuItem>
              {displayNameCategories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Suspense fallback={<CircularProgress />}>
                  <ProductCard product={product} addItem={addItem} />
                </Suspense>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </main>
  );
} 