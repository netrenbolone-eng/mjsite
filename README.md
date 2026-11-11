# М/Ж — сайт-презентация сообщества

Next.js (App Router), без внешних библиотек. Шрифты Forum и Onest подключаются через `next/font`.

## Запуск локально

```bash
npm install
npm run dev
```

Открой http://localhost:3000

## Что заменить

- `app/config.js` — ссылка-приглашение на твой Discord-сервер (`DISCORD_URL`).
- `public/logo-moon.png` — логотип на первом экране (можно заменить файл на более чёткий, пропорции 1:1).
- `app/icon.png` — иконка сайта во вкладке браузера.
- Тексты — в `app/page.js`, цвета — в начале `app/globals.css`.

## Деплой через GitHub + Vercel

1. Создай пустой репозиторий на GitHub.
2. В папке проекта:
   ```bash
   git init
   git add .
   git commit -m "M/J site"
   git branch -M main
   git remote add origin https://github.com/<твой-ник>/<репозиторий>.git
   git push -u origin main
   ```
3. На vercel.com: **Add New → Project**, выбери репозиторий. Настройки менять не нужно: Vercel сам определит Next.js. Нажми **Deploy**.
