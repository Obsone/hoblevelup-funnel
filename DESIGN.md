---
name: Kinetic Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d8d9e6'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#ecedfa'
  surface-container-high: '#e6e7f4'
  surface-container-highest: '#e1e2ee'
  on-surface: '#191b24'
  on-surface-variant: '#424656'
  inverse-surface: '#2e303a'
  inverse-on-surface: '#eff0fd'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#a33200'
  on-tertiary: '#ffffff'
  tertiary-container: '#cc4204'
  on-tertiary-container: '#fff6f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#faf8ff'
  on-background: '#191b24'
  surface-variant: '#e1e2ee'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  code:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for a premium automation specialist service, blending the technical rigor of developer tools with the high-end editorial clarity of modern SaaS leaders. The brand personality is efficient, sophisticated, and forward-leaning, aimed at professionals who value speed and clarity.

The visual style is a synthesis of **Minimalism** and **Glassmorphism**. It utilizes expansive white space to denote premium quality, paired with high-performance UI elements that feel tactile and responsive. The aesthetic avoids unnecessary decoration, relying instead on perfect alignment, subtle depth, and intentional motion to communicate "automation" as a seamless, high-value experience.

## Colors

This design system utilizes a high-clarity light mode palette. The **Primary Electric Blue** is reserved exclusively for interactive triggers and brand accents, ensuring high signal-to-noise ratio. 

Surface colors use a tiered approach: pure white for the primary canvas and a subtle off-white (`#FAFAFA`) for secondary containers or layout sections to create structural separation without the need for heavy borders. The typography palette moves from a deep Slate for high-contrast headings to a softer gray for long-form body text, reducing visual fatigue while maintaining legibility.

## Typography

The typography relies on **Inter** for its systematic, neutral, and highly legible characteristics. The hierarchy is characterized by significant contrast between "Display" and "Body" styles. 

Headings use tight letter-spacing and heavy weights to create a "locked-in" professional feel, while body copy utilizes generous line-heights to ensure readability in information-dense automation workflows. For technical details or automation logs, **JetBrains Mono** is introduced to provide a clear distinction between prose and data.

## Layout & Spacing

The design system employs a **12-column fluid grid** for internal dashboards and a **fixed-center grid** for marketing and editorial content. The spacing rhythm is strictly based on an 8px base unit.

- **Desktop:** 12 columns, 24px gutters, 48px side margins.
- **Tablet:** 8 columns, 16px gutters, 32px side margins.
- **Mobile:** 4 columns, 16px gutters, 20px side margins.

Generous vertical padding (80px–120px) should be used between major sections to maintain the premium, "un-crowded" feel found in top-tier SaaS landing pages.

## Elevation & Depth

Depth is articulated through **Ambient Shadows** and **Glassmorphism**, rather than heavy lines. 

1.  **Low Elevation (Cards):** Use multi-layered, soft shadows (e.g., `0 1px 3px rgba(0,0,0,0.02), 0 10px 20px rgba(0,0,0,0.04)`).
2.  **High Elevation (Modals/Dropdowns):** Use a more pronounced blur and a thin 1px border using a 10% opacity version of the primary color.
3.  **Glassmorphism:** Navigation bars and sticky headers must use a `backdrop-filter: blur(12px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.8)`). This maintains context of the scroll position while ensuring text legibility.

## Shapes

The shape language is predominantly **Pill-shaped (Level 3)** for interactive elements and **Softly Rounded (Level 2)** for structural containers. 

Buttons, tags, and search bars should always use the full-radius pill shape. This softens the technical nature of "automation" and makes the interface feel more approachable. Cards and larger containers use a 1rem (16px) radius to maintain a modern, "App-like" aesthetic.

## Components

### Buttons & Inputs
- **Primary Button:** Pill-shaped, Electric Blue background, white text. No border. On hover, apply a subtle scale-down effect (0.98) and a slight brighten.
- **Input Fields:** 16px corner radius, `#FAFAFA` background, and a 1px border that turns Electric Blue only on focus.

### Cards & Surfaces
- **Feature Cards:** White background, 16px corner radius, and the "Low Elevation" shadow. Use a subtle gradient overlay (5% opacity) in a corner to add depth.
- **Glass Headers:** Sticky position, 0px border-bottom (use a shadow instead), and blur background.

### UI Indicators
- **Chips/Badges:** Pill-shaped with a low-opacity version of the status color (e.g., 10% blue for "Active").
- **Lists:** Clean rows with 1px light gray dividers that do not span the full width of the container, creating a "floating" list effect.
- **Icons:** Use 24px minimalist line icons with a consistent 1.5px stroke weight. Avoid solid fills.