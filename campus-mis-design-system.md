# Campus MIS — Design System

A single reference for building every screen consistently. Derived from the dashboard wireframes and mockup screenshots:
- [Login Page](mockup/Screenshot%20(239).png)
- [Student Dashboard](mockup/Screenshot%20(240).png)
- [Faculty Dashboard](mockup/Screenshot%20(241).png)
- [Admin Dashboard](mockup/Screenshot%20(242).png)

---

## 1. Brand

| Element | Spec |
|---|---|
| Product name | Campus MIS |
| Logo mark | Circle badge, navy fill, white/light icon centered (bank/building icon used on login) |
| Voice | Clean, professional, no exaggeration, no emojis in UI copy |

---

## 2. Color palette

### Primary
| Token | Hex | Usage |
|---|---|---|
| `--brand-navy` | `#1e3a7a` | Logo badge, primary buttons, active sidebar item, headers on hero cards |
| `--brand-navy-hover` | `#16305e` | Hover/active state for navy buttons |

### Neutrals
| Token | Hex | Usage |
|---|---|---|
| `--page-bg` | `#f8fafc` | App canvas / page background |
| `--surface-card` | `#ffffff` | Cards, top bar, modals |
| `--placeholder` | `#dbe3f5` | Skeleton loaders, inactive icons, disabled fills |
| `--border` | `#e5e9f2` | Hairline borders on cards/inputs |
| `--text-primary` | `#1a1f2b` | Headings, primary text |
| `--text-secondary` | `#6b7280` | Labels, subtitles, muted text |
| `--text-muted` | `#9ca3af` | Placeholder text, captions |

### Accent
| Token | Hex | Usage |
|---|---|---|
| `--accent-gold` | `#c9a35f` | Active-user avatar, featured-card left border, promo banner accents |

### Semantic (for status across app: attendance, fees, results, etc.)
| Token | Hex | Usage |
|---|---|---|
| `--success` | `#3b8a5a` | Paid, present, approved |
| `--warning` | `#c98a1f` | Due soon, pending |
| `--danger` | `#c94f4f` | Overdue, absent, rejected |
| `--info` | `#378ade` | Informational banners, links |

**Rule:** every screen uses navy as the single primary accent. Gold is reserved for "featured/current" highlights only — never use it for more than one element per view.

---

## 3. Typography

| Style | Size | Weight | Usage |
|---|---|---|---|
| H1 | 22px | 500 | Page titles |
| H2 | 18px | 500 | Section headers |
| H3 | 16px | 500 | Card titles |
| Body | 14px | 400 | Default text |
| Label | 13px | 400 | Form labels, table headers |
| Caption | 12px | 400 | Hints, timestamps, helper text |

- Sentence case everywhere (never Title Case or ALL CAPS).
- Two weights only: 400 regular, 500 medium. No bold 600/700.
- No terminal punctuation on labels/headings; helper text does end with a period.

---

## 4. Layout primitives

| Element | Spec |
|---|---|
| Corner radius (cards) | 12px |
| Corner radius (buttons, inputs) | 8px |
| Card padding | 1.25rem–1.5rem |
| Border | 0.5–1px solid `--border` |
| Shadow | none by default; subtle `0 1px 2px rgba(0,0,0,0.04)` only on modals/popovers |
| Grid gutters | 16–24px |
| Max content width | 1200px, centered |

---

## 5. Core components

### 5.1 Top navigation bar
- Left: circular logo badge (navy)
- Center/left: search pill, full rounded, light gray fill, icon inside
- Right: 2 neutral avatar placeholders + 1 accent (gold) avatar = current logged-in user

### 5.2 Sidebar
- Top: hero/profile card — navy fill, rounded 12px, decorative circle motif, white text
- Nav list below, two groups separated by a divider
- Active item: navy filled pill, white text/icon
- Inactive items: transparent bg, gray icon + label, checkbox/icon on the left

### 5.3 Page header
- Title (H1) + subtitle (caption, muted) stacked left
- Action buttons right-aligned: one secondary (outline, white bg) + one primary (navy filled)

### 5.4 Promo / announcement banner
- Full-width card, soft cream/neutral gradient background
- Icon block on the left, text lines center, navy CTA button right
- Use for time-sensitive items (fee due, exam registration open, notice)

### 5.5 Card grid (dashboard modules)
- 3-column grid, `minmax(0,1fr)`, gap 16–24px
- Each card: icon box (top-left), title (H3), subtitle (caption/secondary)
- Featured/current card gets a **left border accent** in gold, 3–4px, square corners (no radius on single-sided borders)

### 5.6 Forms (login, registration, data entry)
- Label above field, 13px secondary text
- Input: 36–40px height, 8px radius, light border, focus ring in navy
- Primary action: full-width navy button, white text, 500 weight
- Secondary action: outline button, same height, transparent bg
- Divider pattern: hairline + muted caption text ("or continue with") for alternate auth methods
- Checkbox + link row for "remember me" / "forgot password"
- Footer helper text in caption size, muted, with an accent-colored link

### 5.7 Buttons
| Variant | Style |
|---|---|
| Primary | Navy fill, white text, no border |
| Secondary | Transparent/white fill, `--border` outline, `--text-primary` text |
| Ghost | No border, no fill, text-only, used inline |
| Destructive | `--danger` fill or outline, reserved for delete/reject actions |

Only **one primary button per view**. Everything else is secondary or ghost.

### 5.8 Status badges (for results, fees, attendance)
Pale tint background + darker text in the same hue:
- Success: light green bg, dark green text
- Warning: light amber bg, dark amber text
- Danger: light red bg, dark red text

---

## 6. Iconography

- Outline-style icons only (consistent stroke weight across the app)
- Size: 16–20px inline, up to 24px for decorative/standalone use
- Icons inherit text color of their context — never a separate hardcoded color unless status-based

---

## 7. Spacing scale

`4 · 8 · 12 · 16 · 24 · 32 · 48` (px) — use these increments for all margins/padding/gaps. Avoid arbitrary values outside this scale.

---

## 8. Screen inventory (for consistency as the app grows)

| Screen | Key components used |
|---|---|
| Login | Card, form, primary/secondary button, divider |
| Dashboard (home) | Top nav, sidebar, page header, promo banner, card grid |
| Attendance | Page header, table/list, status badges |
| Fees | Page header, promo banner (if due), status badges, primary button (pay now) |
| Results | Page header, card grid or table, status badges |
| Profile / Settings | Data record card, form components |

---

## 9. Do / Don't

| Do | Don't |
|---|---|
| One navy primary button per screen | Multiple primary (filled navy) buttons competing |
| Gold accent on exactly one featured element | Gold used decoratively across many elements |
| Sentence case labels and buttons | Title Case or ALL CAPS |
| Pale tint + dark text for status badges | Bright saturated fills with white text for status |
| 12px radius for cards, 8px for controls | Mixed/inconsistent radii across similar components |

---

*This document should be treated as the single source of truth. Any new screen or component should be checked against Sections 2–7 before shipping.*
