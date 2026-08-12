# The Index — Setup Guide

Dark-themed website directory + anonymous community wall. Static site (GitHub Pages) + Supabase backend.

## 1. Supabase project banao (free)

1. https://supabase.com par jaake sign up karo, **New Project** banao.
2. Project ready hote hi **SQL Editor** kholo → `schema.sql` ka poora content paste karo → **Run**.
   Ye do tables banayega: `websites` aur `whispers`, saath mein security rules (RLS) bhi.
3. **Project Settings → API** mein jaake **Project URL** aur **anon public key** copy karo.

## 2. Config file update karo

`assets/supabase-config.js` kholo aur ye do lines apne values se replace karo:

```js
const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
const SUPABASE_ANON_KEY = "YOUR-ANON-PUBLIC-KEY";
```

## 3. Apna Archivist (admin) account banao

1. Supabase Dashboard → **Authentication → Users → Add user**.
2. Apna email + password daalo, "Auto Confirm User" ON rakho.
3. Ye wahi email/password hoga jo `admin.html` par login karne ke liye use hoga.
4. `admin.html` ka link kisi ko public share mat karo — chaho toh URL bhool-bhulaiya jaisa rename kar sakte ho (e.g. `archivist-desk.html`) taaki koi guess na kare.

## 4. GitHub Pages par deploy karo

1. Ek naya GitHub repo banao, is poore folder (`index.html`, `submit.html`, `community.html`, `admin.html`, `assets/`) ko push karo.
   (`schema.sql` aur ye README push karna optional hai — kaam ke liye zaroori nahi.)
2. Repo → **Settings → Pages** → Source: `main` branch, `/ (root)` → Save.
3. Kuch minute mein `https://<username>.github.io/<repo-name>/` par live ho jaayega.

## Kaise kaam karta hai

- **Directory (index.html)** — sirf `approved` status wali entries dikhti hain, category filter + search ke saath.
- **Submit (submit.html)** — koi bhi visitor entry request kar sakta hai, woh `pending` mein jaati hai.
- **Whispers (community.html)** — bina login ke koi bhi note post kar sakta hai. Har browser ka apna ek random ID (`localStorage` mein) ban jaata hai — ussi se "Patron #XXXX" naam generate hota hai. Login/signup kuch nahi.
- **Admin (admin.html)** — sirf tum (Archivist) login karke pending requests approve/reject kar sakte ho, aur whispers delete kar sakte ho (moderation).

## Notes

- IP address se account banana browser mein technically possible nahi hai (privacy/security ke reasons se browsers block karte hain) — isliye har browser ka apna random ID hai jo tab tak wahi rehta hai jab tak koi localStorage clear na kare.
- Free Supabase tier is scale ke liye kaafi hai.
