# Products Catalog

Каталог товаров, созданный с использованием:
- Next.js
- Material UI
- Zustand

## Запуск локально

```bash
npm install
npm run dev
```

## Деплой
```
https://productscatalog-msksmsusr-als-projects-114fa6b1.vercel.app/
```

## Функциональность

- Просмотр списка товаров
- Поиск товаров по названию
- Фильтрация товаров по категориям
- Добавление товаров в корзину
- Управление количеством товаров в корзине
- Расчет общей стоимости заказа

## Технологии

- Next.js 14
- TypeScript
- Material UI
- Zustand
- Tailwind CSS

## Структура проекта

```
products_catalog/
├── app/
│   ├── page.tsx          # Главная страница с каталогом
│   └── cart/
│       └── page.tsx      # Страница корзины
├── components/
│   └── Navigation.tsx    # Компонент навигации
├── store/
│   └── cartStore.ts      # Хранилище Zustand для корзины
└── theme.ts             # Настройки темы Material UI
```
