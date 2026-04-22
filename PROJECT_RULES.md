# PROJECT_RULES.md

## Project Name
Cezar

## Project Stack
- Frontend: React + Tailwind CSS
- Backend: Django + Django REST Framework
- Admin panel: Django Admin
- Content management: dynamic categories, dishes, galleries, corporate services, and contact requests

---

## Main Product Goal
Build a premium, modern, emotionally warm, fully responsive website for the family food brand **Cezar**.

The website must combine:
- a professional landing page
- dynamic food categories
- editable dish galleries
- corporate event presentation
- contact/order functionality
- Django Admin content management

Owners must be able to manage the content through Django Admin without editing code.

---

## Brand Positioning
Cezar is a family-owned food business from Uzhhorod.

Family roles:
- Father cooks grilled and fire-made dishes
- Mother prepares soups, salads, homemade dishes, side dishes, banosh, pilaf, and set lunches
- Daughter serves customers and creates a warm welcoming atmosphere

The website must feel:
- premium
- authentic
- appetizing
- elegant
- family-oriented
- warm
- trustworthy
- modern

This must **not** look like a generic restaurant template.

---

## Language
Primary website language: **Ukrainian**

---

## Core UX / UI Rules

### Header
The header must include:
- custom logo for **Cezar** (temporary logo may be designed by the generator if no final logo exists yet)
- navigation links
- login button for admin access
- if the admin is authenticated, the login button must change to **logout**
- if the admin is authenticated, a separate **Адмін-панель** button must appear near the logout button
- the header must be sticky
- the header must be responsive
- on mobile there must be a burger menu

### Header navigation behavior
- clicking header links must smoothly scroll to the required section on the page
- navigation must work cleanly on desktop and mobile
- anchor scrolling must feel smooth and polished

### Admin panel behavior
- there must be a visible **Вхід** button when not authenticated
- after login, the **Вхід** button must become **Вихід**
- after login, show a nearby **Адмін-панель** button
- when entering Django Admin, the **View site** button must lead to the main homepage of the website
- Django admin `site_url` should point to `/`

### Hero / Main first screen
The first main screen must include:
- a premium hero section
- a professional food image, specifically something like **pizza on a tray / serving board**
- strong premium headline in Ukrainian
- supporting text
- CTA buttons
- warm appetizing visual hierarchy

The hero section should immediately communicate:
- delicious food
- family warmth
- premium presentation
- trust
- quality

### Footer
The website must have a complete responsive footer with:
- logo or brand name
- short tagline
- navigation links
- contact details
- social icons
- copyright

---

## Required Sections
The website should include:

1. Sticky header  
2. Hero section with premium image of pizza on a tray  
3. Family story section  
4. Dynamic menu categories section  
5. Dish gallery / dishes by category  
6. Benefits / why choose us  
7. Corporate events section (**Ми організовуємо корпоративи**)  
8. Food gallery / atmosphere  
9. Ordering process  
10. Reviews  
11. Contact section  
12. Footer  

---

## Corporate Events Section
The site must contain a dedicated premium section:

**Ми організовуємо корпоративи**

This section should communicate that the business offers:
- corporate catering
- family celebrations
- festive orders
- group meals
- custom food service

Include:
- descriptive text
- premium visuals
- CTA button
- optional contact form / quick inquiry block

---

## Dynamic Content Management
Content must not be hardcoded where dynamic behavior is expected.

Owners must be able to manage through Django Admin:
- categories
- dishes
- dish images
- corporate services / corporate event content
- contact requests

### Category examples
Owners can create categories like:
- Солодощі
- М’ясні блюда
- Супи
- Салати
- Мангал
- Комплексні обіди

They must also be able to create any additional categories later.

### Visitor behavior
Visitors must be able to:
- browse categories
- click a category
- see dishes in that category
- open images
- read title, description, optional price

---

## Suggested Backend Models

### Category
- name
- slug
- image
- description
- order

### Dish
- title
- category
- description
- price
- main_image
- is_popular
- is_available

### DishImage
- dish
- image

### CorporateService
- title
- description
- image
- is_active

### ContactRequest
- name
- phone
- message
- created_at

---

## Frontend Structure
Use reusable React components such as:
- Header
- Hero
- FamilyStory
- CategorySection
- DishGallery
- Benefits
- CorporateEvents
- FoodGallery
- Reviews
- ContactSection
- Footer

Code must be:
- clean
- reusable
- readable
- easy to maintain
- responsive
- production-minded

---

## Responsive Design Rules
The entire website must be fully responsive and adapted for:
- mobile phones
- tablets
- laptops
- desktops
- large screens

Responsive requirements:
- mobile-first approach
- responsive typography
- responsive spacing
- adaptive grid layouts
- burger menu on mobile
- touch-friendly buttons
- no layout breaking on small screens
- images must scale properly
- cards must stack correctly on mobile
- footer must remain readable on mobile
- header actions must remain usable on mobile

The mobile version must feel complete and professional, not like a reduced desktop layout.

---

## Contact Information
Use this exact address:

**88000, вулиця Мукачівська, 8-10, Ужгород, Закарпатська область**

---

## Git Workflow Rules
After each successful completed code change:
1. verify the code is valid and does not break the project
2. create a meaningful git commit
3. push changes to the repository

Repository:
`https://github.com/VikTornado/Cezar.git`

Commit messages must be meaningful, for example:
- feat: add responsive sticky header
- feat: add admin auth buttons in header
- feat: create hero section with premium food image
- feat: add smooth scroll navigation
- feat: add responsive footer
- feat: add corporate events section
- fix: improve mobile header layout

Do not use vague commit messages.

---

## Security Rules

### Secrets
- never hardcode API keys
- never hardcode tokens
- never hardcode passwords
- never hardcode Django secret key
- never expose private credentials in frontend code
- never commit secrets to the repository

### Environment variables
All sensitive values must be stored in `.env`

Examples:
- SECRET_KEY
- database credentials
- email settings
- cloud storage keys
- third-party API keys
- admin-related secrets if needed

### Git safety
- `.env` must be in `.gitignore`
- local secrets must never be committed
- do not expose production credentials
- do not commit private config dumps

### Django security
- configure settings from environment variables
- avoid unsafe production configuration
- keep admin secure
- validate uploads when appropriate
- set `site_url` properly so View site goes to homepage

### React security
- never store private secrets in React
- use only safe public env vars on client side when absolutely necessary

---

## Visual Quality Rules
The site should visually communicate:
- premium food quality
- warmth
- emotional trust
- appetite
- modern family hospitality

Use:
- warm earthy colors
- elegant typography
- soft shadows
- rounded cards
- smooth hover states
- premium CTA styling
- clean spacing
- professional food presentation

---

## Additional Technical Requirements

### 1. Monorepo Structure
- The project must use a monorepo structure with two folders: `frontend` (React + Vite) and `backend` (Django).

### 2. Frontend Admin Authentication
- Use Session Authentication or JWT with proper CORS settings.
- Implement an endpoint (e.g., `/api/auth/check/`) in Django so the React frontend can determine if a superuser is logged in and conditionally render admin header buttons.

### 3. Media Files Storage
- Set up local `MEDIA_ROOT` and `MEDIA_URL` for development.
- Configure cloud storage (e.g., Cloudinary) to ensure image persistence in production.

### 4. Notifications
- Implement a signal or service in Django for `ContactRequest` creation that dispatches an immediate notification to the owners via a Telegram bot or Email.

### 5. SEO optimization
- Integrate `react-helmet-async` in the React frontend to dynamically update `<title>` and `<meta description>` tags.

### 6. Custom Tailwind Palette
- Configure custom warm, appetizing, and premium colors (like terracotta, deep olive, warm creams) in `tailwind.config.js` instead of relying entirely on standard utility colors.

---

## Final Project Rule
Every generated feature, section, component, model, and interaction must remain consistent with the **Cezar** brand identity: a premium, family-owned, warm, authentic, responsive food website with editable content, smooth navigation, strong mobile adaptation, secure configuration, and clean Git workflow.