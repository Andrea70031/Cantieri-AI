CantiereAI — release FINAL 1.0

File da caricare nella root del repository GitHub Pages:
- index.html
- manifest.json
- sw.js
- app-icon-192.png
- app-icon-512.png
- app-icon-1024.png
- apple-touch-icon.png

Backend Supabase già predisposto:
- autenticazione
- cantieri e ruoli per singola commessa
- attività e problemi
- commenti
- foto e documenti in Storage
- report giornalieri
- AI Command backend

Nota AI:
l'Edge Function usa automaticamente OpenAI quando nel progetto Supabase è configurato
il secret OPENAI_API_KEY. In assenza del secret resta attiva una modalità di analisi
deterministica dei dati del cantiere.
