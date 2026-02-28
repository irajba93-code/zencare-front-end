

# ZenCare Chiropractic — Single-Page Website

## Design Foundation
- **Color system**: Soft light green base, subtle gold accents, soft violet/purple aurora-like gradient glows
- **Typography**: Geist Sans (imported from Google Fonts) with strong hierarchy
- **UI tokens**: Soft cards, subtle shadows, rounded corners, generous white space
- **Animations**: Fade-in on scroll (intersection observer), smooth scrolling between sections

## Layout & Navigation
- **Sticky header** with ZenCare logo/wordmark + nav links (Hero, About, Services, Consultation, FAQ)
- **Single CTA in header**: "Book Your Free Consultation"
- **Mobile**: Hamburger menu with slide-out nav, same single CTA
- Smooth scroll to anchored sections

## Sections (top to bottom)

### 1. Hero
- Strong headline on spinal alignment & long-term structural health
- Subtitle (one line, calm tone)
- Single CTA button: "Book Your Free Consultation"
- Soft aurora gradient background glow

### 2. About the Practitioner
- Dr. Michael Carter, DC — photo placeholder, credentials, 11+ years experience
- Specializations listed in a clean grid/list
- Philosophy quote: "Address structural imbalances at their source."
- Note: "Personalized care plans are developed after initial evaluation."

### 3. Services Overview
- Two groups in soft cards: **Conditions Addressed** and **Treatment Methods**
- Icon + label for each item (lucide-react icons)
- Clean grid layout, no long explanations

### 4. Free Spine & Posture Consultation (Core CTA section)
- What the consultation includes (4 clear points)
- What the patient leaves with (3 points)
- "Who it's for" list
- Process steps (4 steps, visually numbered)
- Clarification line: "This is a professional evaluation, not a sales presentation."
- CTA button repeated

### 5. FAQ (Accordion)
- 5 questions with expand/collapse answers
- Using shadcn Accordion component

### 6. Final CTA Section
- Short closing line + CTA button
- Soft gradient background

### 7. Footer
- Address, phone, email, business hours
- Minimal social icons (placeholder links)
- Clean structured layout

## Booking Modal
- Centered dialog (shadcn Dialog component)
- Fields: Name, Email, Phone, Message (optional)
- Submit button (front-end only, shows toast confirmation)
- Opens from every "Book Your Free Consultation" button

## Responsive Behavior
- Mobile-first CSS approach
- Desktop: multi-column layouts, spacious
- Tablet: adjusted grid columns
- Mobile: single column, hamburger nav, compact spacing

## Technical Notes
- All in one page (`Index.tsx`) with extracted section components
- Intersection Observer for fade-in animations
- Smooth scroll via CSS `scroll-behavior: smooth`
- Geist font loaded via CSS import
- No backend, no database, no integrations

