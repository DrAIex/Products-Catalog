import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import useCartStore from '@/store/cartStore';

export default function Navigation() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Каталог товаров
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Главная
        </Button>
        <Button color="inherit" component={Link} href="/cart">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
} 