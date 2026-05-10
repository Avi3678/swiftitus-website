# Swift Technologies Website

Static corporate website for **Swift Technologies** (swiftitus.com) — built with pure HTML, CSS, and vanilla JavaScript. No build tools or npm required.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, services overview, why choose us, stats, CTA |
| `services.html` | IT services detail — Cloud, AI/ML, Oracle, Cybersecurity, Consulting, Digital |
| `about.html` | Company story, values, leadership team |
| `contact.html` | Contact info, office locations |

## Local Development

No build step needed. Open any `.html` file directly in a browser, or use a simple local server:

```bash
# Python 3
cd swiftitus-website
python3 -m http.server 8080
# Then open http://localhost:8080
```

## GitHub Pages Deployment

The site is deployed at: **https://Avi3678.github.io/swiftitus-website**

To redeploy after changes:

```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Pages will automatically rebuild within ~60 seconds.

---

## Pointing swiftitus.com (GoDaddy) to GitHub Pages

### Step 1 — Add A Records in GoDaddy

1. Log in to [GoDaddy](https://www.godaddy.com) → **My Products** → DNS for `swiftitus.com`
2. Delete any existing **A records** pointing to GoDaddy's default IP
3. Add these four **A records**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

### Step 2 — Add CNAME Record for www

Add one **CNAME record**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | Avi3678.github.io | 600 |

### Step 3 — Configure GitHub Pages Custom Domain

1. Go to the repo → **Settings** → **Pages**
2. Under **Custom domain**, enter `swiftitus.com` and click **Save**
3. Check **Enforce HTTPS** (available after DNS propagates, usually 10–30 min)

### Step 4 — Verify

DNS propagation takes 10 minutes to a few hours. Once live:
- `http://swiftitus.com` → redirects to `https://swiftitus.com`
- `http://www.swiftitus.com` → redirects to `https://swiftitus.com`

You can check propagation status at [dnschecker.org](https://dnschecker.org).

---

## File Structure

```
swiftitus-website/
├── index.html
├── services.html
├── about.html
├── contact.html
├── CNAME
├── README.md
├── css/
│   └── style.css
└── js/
    └── main.js
```
