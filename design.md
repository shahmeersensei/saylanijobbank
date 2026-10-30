# Saylani Job Bank — Comprehensive Design System & Screen Specifications (`design.md`)

> **Strict Scope Notice:**
> This document specifies **ONLY** the 6 final screens located in the **"Saylani Job Bank"** section (Figma Node ID: `50:5418`, File: `WHJgN4FhblgSQ9LAQElCRU`). 
> All legacy/draft screens from the "Rework" section (`1:908`) have been strictly excluded.

---

## 1. Verified Screen Inventory (Node `50:5418`)

| # | Screen Name in Figma | Figma Node ID | Dimensions (Desktop) | Section Count | Core Purpose & Route |
|:---|:---|:---|:---|:---|:---|
| **1** | **Landing Page** | `107:2703` | 1440 × 5902 px | 9 Sections | Main homepage (`/`): value proposition, search bar, 4-step process, featured job cards, testimonials, FAQ, pre-footer CTA. |
| **2** | **About Us** | `107:3644` | 1440 × 5228 px | 11 Sections | Mission & Welfare Story (`/about`): Saylani Welfare background, metrics counter, core values, leadership team, vocational center footage. |
| **3** | **jobs** | `96:10769` | 1440 × 2793 px | 5 Sections | Job Explorer (`/jobs`): Search header, faceted sidebar filters (role type, city, salary, experience), paginated job listing cards feed. |
| **4** | **Contact us** | `50:5875` | 1440 × 4387 px | 6 Sections | Inquiry & Support (`/contact`): Inquiry form, Saylani head office details, regional branch desk contacts, FAQs, map representation. |
| **5** | **Privacy policy** | `53:9100` | 1440 × 6311 px | 3 Sections | Legal & Privacy (`/privacy-policy`): 10 numbered privacy clauses, data protection, verification handling, user data rights. |
| **6** | **Terms and conditions** | `53:9334` | 1440 × 7282 px | 2 Sections | Legal Terms (`/terms`): 10 numbered service clauses, zero-fee pledge, candidate interview terms, ethical hiring standards. |

---

## 2. Global Design Tokens

### 2.1. Color Palette

```css
:root {
  /* Brand Core */
  --primary: #8CC641;             /* Saylani Vibrant Lime Green */
  --primary-hover: #7CB337;       /* Darker Lime Green for interactive states */
  --primary-active: #6DA02E;      /* Pressed Lime Green */
  --primary-light: #F0F7E8;       /* 10% Lime tint for tags and badges */
  --primary-gradient: linear-gradient(135deg, #8CC641 0%, #10B47B 100%);

  --accent: #0072BB;              /* Saylani Royal Blue */
  --accent-hover: #005FA0;        /* Deep Blue for link hovers */
  --accent-light: #EFF3F4;        /* Soft Blue background tint */

  /* Neutral & Surfaces */
  --bg-page: #F9F9F9;             /* Default Off-White canvas */
  --bg-surface: #FFFFFF;          /* Pure White cards and sheets */
  --bg-alt: #F2F2F2;              /* Input fills and pill backgrounds */
  --bg-dark: #10261A;             /* Deep Emerald/Black for dark chips and footer */

  /* Typography / Text */
  --text-primary: #000000;        /* 100% Black high-emphasis text */
  --text-dark: #10261A;           /* Deep dark green-black for primary titles */
  --text-muted: #54614F;          /* Neutral olive-gray for secondary text */
  --text-secondary: #6B7866;      /* Medium gray for placeholder and meta */
  --text-faint: rgba(0, 0, 0, 0.4); /* Faint labels and disabled text */
  --text-inverse: #FFFFFF;        /* Text on dark/lime buttons */

  /* Borders & Dividers */
  --border-light: #E5E7EB;        /* Subtle gray card/table borders */
  --border-card: rgba(0, 0, 0, 0.12); /* Subtle card perimeter */
  --border-focus: #8CC641;        /* Focus outline indicator */

  /* Status Colors */
  --status-success: #10B47B;      /* Verified badges, active tags */
  --status-warning: #BC7400;      /* Pending verification badges */
  --status-danger: #C20909;       /* Required field errors, rejection */
  --status-info: #003CFF;         /* Informational links */
}
```

### 2.2. Typography Hierarchy

| Style Token | Font Family | Weight | Size | Line Height | Usage in Figma Screens |
|:---|:---|:---|:---|:---|:---|
| **Display Hero** | `Serotiva` | 600 / 700 | 54px – 58px | 1.15 | Main Hero titles on Landing Page, About Us, Jobs, Contact Us |
| **Section H2** | `Serotiva` | 600 | 32px – 40px | 1.25 | Major section titles ("How the Job Bank takes you...", "Latest openings", "Common questions") |
| **Card / Subtitle H3** | `Serotiva` | 500 / 600 | 20px – 24px | 1.35 | Step card headers, Job card titles, Testimonial candidate names |
| **Body Large** | `Serotiva` | 500 | 18px – 20px | 1.50 | Subtitles under main hero titles, mission statement leads |
| **Body Regular** | `Serotiva` | 400 / 500 | 16px | 1.50 | Navigation links, Search inputs, standard paragraph descriptions |
| **Meta / Small** | `Serotiva` | 500 | 13px – 14px | 1.40 | Job metadata tags (Karachi, Full-time, Experience, Salary unit) |
| **Micro Badge** | `Serotiva` | 600 | 12px | 1.20 | Category badges, company tags (Microsoft, Google) |
| **Testimonial Names** | `Plus Jakarta Sans` | 600 | 33.7px | 1.20 | Candidate names on testimonial photo overlays |
| **FAQ Question** | `Manrope` | 500 / 600 | 18px | 1.40 | Accordion question headers |
| **FAQ Body** | `Inter` | 400 | 16px | 1.60 | Accordion expanded answer text |
| **Giant Watermark** | `Serotiva` | 800 | 150px | 1.00 | Giant decorative background watermark "SAYLANI JOB BANK" in footer |

### 2.3. Layout, Spacing & Container System

- **Desktop Canvas Width**: `1440px` (Design viewport).
- **Max Content Width**: `1200px` to `1240px` (`max-w-7xl mx-auto px-6 lg:px-8`).
- **Section Vertical Padding**:
  - Hero sections: `py-16 lg:py-24` (64px – 96px).
  - Content sections: `py-16 lg:py-20` (64px – 80px).
- **Grid Systems**:
  - Job Cards: 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
  - 4-Step Process: 2-column or 4-column flow with form mockup right-hand pane.
  - Testimonials: 2-column large cards (`grid-cols-1 md:grid-cols-2 gap-8`).
  - Metrics Counter: 4-column stats row (`grid-cols-2 lg:grid-cols-4 gap-6`).
- **Border Radii**:
  - Buttons / Pills / Search Bar: `rounded-full` (9999px).
  - Feature Cards / Modals: `rounded-2xl` (16px to 24px).
  - Input Fields: `rounded-full` for search bar; `rounded-xl` (12px) for forms.
  - Image Cards: `rounded-3xl` (24px to 32px) with overflow-hidden.

---

## 3. Global Master Components

### 3.1. Master Navbar (`navbar`, Height: 68px, Id: `107:2703` Child 1)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ [Saylani Logo]    Home   About Us   Jobs   Contact Us      (Find a Job) [Hire talent] │
└──────────────────────────────────────────────────────────────────────────────────┘
```

- **Container**: `w-full h-[68px] bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-50`.
- **Left Logo**: Saylani Job Bank official mark (`logo.png`, ~160px width, 44px height).
- **Center Navigation Links**:
  - `Home` (`16px Serotiva w500 #000000`, active green dot or underline indicator).
  - `About Us` (`16px Serotiva w400 #000000`, hover: `#8CC641`).
  - `Jobs` (`16px Serotiva w400 #000000`, hover: `#8CC641`).
  - `Contact Us` (`16px Serotiva w400 #000000`, hover: `#8CC641`).
- **Right Action Buttons (Dual CTA)**:
  - **Find a Job**: Pill button (`rounded-full bg-[#8CC641] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#7CB337] transition-all shadow-sm`).
  - **Hire talent**: Pill button (`rounded-full bg-white border border-black text-black px-6 py-2.5 text-sm font-medium hover:bg-black hover:text-white transition-all`).

### 3.2. Master Pre-Footer CTA Banner (`Frame 2147241744`, Height: 418px)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────────────────────────┐  │
│  │ Find your next job or great hire               [ Smiling Graduate Photo ]   │  │
│  │ at the job bank.                                (326 × 466 px cutout)       │  │
│  │ Join thousands of job seekers and companies...                              │  │
│  │                                                                            │  │
│  │   ( Find a Job )    [ Hire talent ]                                        │  │
│  └────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

- **Container**: Outer `py-16 px-6 lg:px-8 max-w-7xl mx-auto`.
- **Inner Card Background**: Vibrant Saylani Lime Green gradient (`bg-gradient-to-r from-[#8CC641] via-[#85C03B] to-[#70AA2D] rounded-3xl p-10 lg:p-14 relative overflow-hidden flex flex-col lg:flex-row justify-between items-center`).
- **Typography**:
  - Heading: `40px Serotiva w600 text-white max-w-xl leading-tight`.
  - Subtitle: `18px Serotiva w400 text-white/90 mt-3 max-w-lg`.
- **Buttons**:
  - `Find a Job`: `rounded-full bg-white text-black px-8 py-3.5 text-base font-semibold hover:bg-gray-100 shadow-md`.
  - `Hire talent`: `rounded-full bg-black text-white px-8 py-3.5 text-base font-semibold hover:bg-neutral-800 shadow-md`.
- **Cutout Image Asset**: `326 × 466 px` cutout portrait of a smiling young graduate in formal attire, positioned flush right.

### 3.3. Master Footer (`footer`, Height: 509px)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ [Saylani Logo]              Explore        For You         Contact               │
│ A free employment service   Home           Job Seekers     +1 (929) 922-6467     │
│ of Saylani Welfare Trust    About Us       Employers       info@saylanibank.com  │
│ [Support Saylani (Button)]  Contact Us     Latest Openings A-25, off Bahadur...  │
│                             Contact                                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│ © 2026 Saylani Job Bank. All Rights Reserved.          Privacy Policy | Terms    │
│                           S A Y L A N I   J O B   B A N K                        │
└──────────────────────────────────────────────────────────────────────────────────┘
```

- **Background**: `#FFFFFF` with top border `border-t border-gray-100`.
- **Branding Column**:
  - Saylani Logo mark.
  - Descriptive mission paragraph: `16px Serotiva w400 text-gray-600 max-w-xs mt-4`.
  - Button `Support Saylani`: `rounded-full bg-[#8CC641] text-white px-6 py-2.5 text-sm font-medium mt-6`.
- **Navigation Columns (3 Columns)**:
  - Column 1 (`Explore`): `Home`, `About Us`, `Contact Us`, `Contact`.
  - Column 2 (`For You`): `Job Seekers`, `Employers`, `Latest Openings`.
  - Column 3 (`Contact`): Phone `+1 (929) 922-6467`, Email `info@saylanibank.com`, Address `A-25, off Bahadur Shah Zafar Road, Karachi, Pakistan`.
- **Bottom Bar**:
  - Copyright statement: `14px Serotiva w400 text-gray-500`.
  - Legal links: `Privacy Policy` (`/privacy-policy`) and `Terms & Conditions` (`/terms`).
- **Watermark Text**: Giant background outline typography `SAYLANI JOB BANK` (150px, weight 800, color: `#00000008` / light gray opacity, centered at the bottom).

---

## 4. Deep Screen-by-Screen Specifications

---

### Screen 1: Landing Page (`107:2703`, 1440 × 5902 px)

#### Section 1.1: Navbar (`INSTANCE`, 68px)
- Master sticky navbar described in §3.1.

#### Section 1.2: Hero Section (`Frame 2147236552`, 631px)
- **Headline**: "Connecting skilled people with the jobs that need them." (`54px Serotiva w600 text-[#000000] leading-[1.15]`).
- **Sub-headline**: "Register, get your skills assessed, and be matched with employers who are hiring. Always free for job seekers and employers." (`16px Serotiva w500 text-[#000000]`).
- **Unified Search Bar**:
  - Capsule container: `rounded-full bg-white shadow-xl border border-gray-100 p-2 flex items-center gap-3 max-w-2xl`.
  - Input 1: Search icon + input placeholder "Job title or skill" (`16px text-[#6B7866]`).
  - Divider: Vertical 1px line `#E5E7EB`.
  - Input 2: MapPin icon + dropdown select "All cities" (`16px text-[#10261A]`).
  - Button: "Search jobs" (`rounded-full bg-[#8CC641] text-white px-7 py-3 text-base font-semibold hover:bg-[#7CB337]`).
- **Floating Job Badges**:
  - Badge A: "Product Designer" | "Microsoft" | "$12000 Yearly" (rounded card with drop shadow).
  - Badge B: "Motion Designer" | "Google" | "$12000 Yearly" (rounded card with drop shadow).
- **Hero Image Asset**: `image 32` (501 × 476 px) — smiling young graduate with portfolio folder, backed by a soft lime green abstract graphic blob.
- **Partner Brands Bar**: "Our partners — The companies we've helped succeed" (`24px Serotiva w400`) followed by partner logo vectors (`195 × 61 px`, `82 × 82 px`).

#### Section 1.3: Value Proposition Banner (`Frame 2147236551`, 290px)
- **Top Badge Pill**: "About" (`16px Serotiva w400 text-[#8CC641] uppercase tracking-wider`).
- **Lead Text**: "A free employment service by Saylani Welfare. We match skilled people with employers who need them." (`48px Serotiva w400 text-[#000000] leading-tight max-w-4xl`).

#### Section 1.4: 4-Step Process Section (`Frame 2147236547`, 717px)
- **Badge**: "Process" (`16px Serotiva w400 text-[#8CC641]`).
- **Title**: "How the Job Bank takes you from registration to a job" (`32px Serotiva w600 text-[#000000]`).
- **Subtitle**: "Four simple steps for job seekers and for employers. Every candidate is assessed and verified." (`16px Serotiva w500`).
- **Left Column — 4 Interactive Process Steps**:
  1. **Step 1**: "Create your free account" (`20px Serotiva w500`) — "Register quickly with your phone or email. Secure and free." (`14px Serotiva w400`).
  2. **Step 2**: "Fill your Personal Data" (`20px Serotiva w500`) — "Complete your registration and prepare your profile for companies." (`14px Serotiva w400`).
  3. **Step 3**: "Upload your Resume & Credentials" (`20px Serotiva w500`) — "Upload your CV or let us extract your skills and certifications." (`14px Serotiva w400`).
  4. **Step 4**: "Get Matched & Secure Rizq" (`20px Serotiva w500`) — "Find job matches, get interview calls, and begin your career with respect." (`14px Serotiva w400`).
- **Right Column — Form Mockup Card**:
  - Realistic UI card showing applicant form entry (`Email: muneeb@gmail.com`, `Password: ************`, `Continue` button) with green progress checkmarks.

#### Section 1.5: Latest Openings Grid (`Section (Saylani Job Bank)`, 936px)
- **Heading**: "Latest openings" (`32px Serotiva w600`).
- **Subtitle**: "Roles posted by employers across different industries and skill levels." (`16px Serotiva w500`).
- **Search & Category Tabs**:
  - Filter Pills: `All roles` (Active: `#8CC641` bg, white text), `Office and admin`, `Technical trades`, `IT`, `Sales and support` (Inactive: white bg, `#54614F` text, border `#E5E7EB`).
- **Job Cards Grid (6 cards shown in Figma)**:
  - Card 1: `Accounts Assistant` | `Karachi` | `Full time` | `1–2 years` | `PKR 50000–100000 per month`
  - Card 2: `Customer Support Executive` | `Karachi` | `Full time` | `0–1 years` | `PKR 45000–75000 per month`
  - Card 3: `Electrician / Maintenance Tech` | `Karachi` | `Full time` | `2–3 years` | `PKR 60000–90000 per month`
  - Card 4: `Flutter Developer` | `Karachi` | `Full time` | `1–2 years` | `PKR 70000–120000 per month`
  - Card 5: `Graphic Designer` | `Karachi` | `Full time` | `1–2 years` | `PKR 55000–95000 per month`
  - Card 6: `Solar Technician` | `Karachi` | `Full time` | `1–3 years` | `PKR 65000–110000 per month`
  - **Card Structure**: White card `rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all`. Top row: company icon + role title + bookmark button. Middle row: metadata pills (`Karachi`, `Full time`, `Experience`). Bottom row: Salary band in bold green (`#10261A`) + "Apply Now" button.

#### Section 1.6: Success Stories (`Frame 2147236538`, 649px)
- **Badge**: "Stories" (`16px text-[#8CC641]`).
- **Heading**: "Real people, real jobs, and the employers who hired them" (`32px Serotiva w600`).
- **Cards Grid (2 Large Visual Story Cards, 648 × 349 px each)**:
  - Card A: Full photo overlay of candidate in workplace. Overlay text: "Zubair ali" (`33.7px Plus Jakarta Sans w600 text-white`), "Appointee. Systems LTD." (`13.9px w600 text-white/90`).
  - Card B: Full photo overlay of candidate in workplace. Overlay text: "Abu Zar" (`33.7px Plus Jakarta Sans w600 text-white`), "Appointee. Saylani Schools" (`13.9px w600 text-white/90`).

#### Section 1.7: FAQ Accordion (`FAQ`, 844px)
- **Badge**: "Faq" (`16px text-[#8CC641]`).
- **Heading**: "Common questions from job seekers and employers" (`40px Serotiva w400`).
- **Subtitle**: "Find quick answers about registration, matching and fees, or contact our team if you need more help." (`22px Serotiva w400`).
- **5 Accordion Items**:
  1. `Is the Job Bank really free?` (Expanded state: shows full explanation of Saylani Welfare zero-fee policy).
  2. `How does matching work?` (Explains verification, skill assessment, and matching algorithm).
  3. `How long does it take to get placed?`
  4. `Who can register as a job seeker?`
  5. `How do employers post jobs?`

#### Section 1.8: Master Pre-Footer CTA (`Frame 2147241744`, 418px)
- Described in §3.2.

#### Section 1.9: Master Footer (`footer`, 509px)
- Described in §3.3.

---

### Screen 2: About Us (`107:3644`, 1440 × 5228 px)

#### Section 2.1: Navbar (`INSTANCE`, 68px)
- Master sticky navbar.

#### Section 2.2: Hero Section (`Frame 2147241731`, 729px)
- **Headline**: "Every skill deserves rizq." (`54px Serotiva w600 text-[#000000]`).
- **Sub-headline**: "Saylani Job Bank connects trained individuals with employers across Pakistan. Built on Saylani Welfare's 25-year legacy of empowerment and service." (`18px Serotiva w500`).
- **Hero Classroom Imagery**: Large wide photography showing Saylani students actively engaged in technical / vocational computer and electrical labs.
- **Dual Buttons**: "Register as Job Seeker" (Lime pill) + "Hire Talent" (Black pill).

#### Section 2.3: Impact Metrics Counter (`Frame 2147241739`, 147px)
- 4-Column Statistic Bar with dividers:
  - Metric 1: `15,000+` Candidates Placed (`36px Serotiva w700 text-[#8CC641]`) / "Verified placements across Pakistan" (`14px text-gray-500`).
  - Metric 2: `1,200+` Partner Employers (`36px Serotiva w700 text-[#0072BB]`) / "Active registered hiring companies".
  - Metric 3: `94%` Retention Rate (`36px Serotiva w700 text-[#10261A]`) / "Candidates employed past 6 months".
  - Metric 4: `100%` Free Service (`36px Serotiva w700 text-[#8CC641]`) / "Zero commission, zero charges".

#### Section 2.4: Mission Statement Banner (`Frame 2147236551`, 260px)
- Central bold quote: "A welfare mission turned into Pakistan's most disciplined, free employment engine." (`48px Serotiva w400 text-center max-w-4xl mx-auto`).

#### Section 2.5: Our Story & Foundation (`Frame 2147241742`, 536px)
- 2-Column Split:
  - Left: "Building dignified livelihoods since 1999." Narrative on Hazrat Maulana Bashir Farooq Qadri's vision of transitioning charity into financial self-sufficiency.
  - Right: High-resolution historical photograph of Saylani vocational training classes.

#### Section 2.6: Core Values Grid (`Frame 2147241741`, 381px)
- **Heading**: "Principles that guide our matchmaking" (`32px Serotiva w600`).
- **4 Values Cards**:
  1. **Izzat (Dignity)**: Every applicant is treated with honor and respect regardless of role level.
  2. **Strict Merit**: Verified certifications and skill tests dictate recommendations.
  3. **Zero Exploitation**: Minimum wage enforcement and fair contract terms for all placements.
  4. **Lifelong Upskilling**: Ongoing Saylani vocational course recommendations.

#### Section 2.7: Leadership & Mentors (`Frame 2147241737`, 439px)
- **Heading**: "Led by dedicated humanitarians and industry leaders" (`32px Serotiva w600`).
- **8 Avatar Portrait Cards**: Circular or rounded rectangular photography of Saylani trustees and job bank program directors.

#### Section 2.8: Employer Brands Ticker (`Frame 2147236509`, 82px)
- Horizontal grayscale partner logo band featuring prominent Pakistani corporations and software houses.

#### Section 2.9: Vocational Center Video Showcase (`Frame 2147241743`, 619px)
- Video player frame with play button overlay displaying real lab environments (IT labs, solar installations, automotive workshops).

#### Section 2.10: Master Pre-Footer CTA (`Frame 2147241744`, 418px)
- Described in §3.2.

#### Section 2.11: Master Footer (`footer`, 509px)
- Described in §3.3.

---

### Screen 3: jobs (`96:10769`, 1440 × 2793 px)

#### Section 3.1: Navbar (`INSTANCE`, 68px)
- Master sticky navbar.

#### Section 3.2: Search & Filter Header (`Frame 2147241731`, 398px)
- **Page Heading**: "Search latest job posts on Saylani Job Bank" (`58px Serotiva w700 text-[#000000]`).
- **Search Capsule**:
  - Keyword input ("Job title, skills, or company name").
  - City dropdown filter ("All cities", "Karachi", "Lahore", "Islamabad", "Faisalabad").
  - Search trigger button.
- **Active Filter Chips**: "Full-time ✕", "Karachi ✕", "Clear all".

#### Section 3.3: Two-Column Jobs Explorer (`Frame 2147241776`, 1200px)
- **Layout**: 300px Fixed Filter Sidebar on left + Fluid Job Feed on right.
- **Left Sidebar Filters**:
  - Filter Block 1: **Job Category** (Checkboxes: IT & Software, Trades & Technical, Office & Admin, Healthcare, Sales & Marketing).
  - Filter Block 2: **Work Mode** (Radio: On-site, Remote, Hybrid).
  - Filter Block 3: **Experience Level** (Checkboxes: Fresh Graduate / 0-1 yr, 1-2 yrs, 3-5 yrs, 5+ yrs).
  - Filter Block 4: **Salary Range (PKR)** (Range slider: PKR 35,000 – PKR 250,000+).
  - Filter Block 5: **Branch Proximity** (Radius slider: 5km, 10km, 25km).
- **Right Job Listings Feed**:
  - Top sort bar: "Showing 124 verified jobs" + Sort dropdown ("Most Recent", "Salary: High to Low", "Proximity").
  - List of Job Cards:
    - Company Logo, Role Title, Verified Company Badge.
    - City / Branch name with MapPin icon.
    - Salary Band in bold (`PKR 65,000 – 90,000 / mo`).
    - Key tags: `Saylani Alum Preferred`, `Full-time`, `Immediate Joining`.
    - Action: "Apply Now" button and "Save Job" bookmark icon.
  - **Pagination Controls**: `Previous`, `1`, `2`, `3`, `...`, `12`, `Next`.

#### Section 3.4: Master Pre-Footer CTA (`Frame 2147241744`, 418px)
- Described in §3.2.

#### Section 3.5: Master Footer (`footer`, 509px)
- Described in §3.3.

---

### Screen 4: Contact us (`50:5875`, 1440 × 4387 px)

#### Section 4.1: Navbar (`INSTANCE`, 68px)
- Master sticky navbar.

#### Section 4.2: Hero Section (`Frame 2147241731`, 833px)
- **Title**: "We're Here to Help." (`58px Serotiva w700 text-[#000000]`).
- **Subtitle**: "Have questions about hiring Saylani graduates or registering as a job seeker? Reach out to our dedicated team." (`20px Serotiva w500`).
- **Support imagery**: Dedicated Saylani Job Bank help desk coordinator at work.

#### Section 4.3: Interactive Form & Head Office Details (`Frame 2147241750`, 934px)
- **Left Column — Direct Inquiry Form**:
  - Input: Full Name (`rounded-xl border border-gray-200 p-4`).
  - Input: Email Address.
  - Input: Phone / WhatsApp Number (`03XX-XXXXXXX`).
  - Dropdown: "I am a..." (`Job Seeker`, `Employer / Company`, `Saylani Graduate`, `Other`).
  - Textarea: Message / Inquiry details.
  - Button: "Send Message" (`rounded-full bg-[#8CC641] text-white py-4 font-semibold`).
- **Right Column — Head Office Contact Cards**:
  - Physical Address: `Saylani Head Office, A-25, Bahadurabad, Karachi, Pakistan`.
  - Direct Helpline: `+92 (21) 111-729-526` / `+1 (929) 922-6467`.
  - Email: `jobbank@saylaniwelfare.com`.
  - Working Hours: `Monday – Saturday: 9:00 AM – 6:00 PM (PKT)`.

#### Section 4.4: Regional Branch Desks (`Frame 1618874324`, 332px)
- **4 Branch Cards**:
  - Karachi Central (Gulshan-e-Iqbal Campus).
  - Karachi South (Bahadurabad Main).
  - Lahore Branch (Johar Town Desk).
  - Islamabad / Rawalpindi Desk.

#### Section 4.5: FAQ Section (`FAQ`, 821px)
- Contact & placement-specific accordion questions.

#### Section 4.6: Master Pre-Footer CTA & Footer
- Described in §3.2 and §3.3.

---

### Screen 5: Privacy policy (`53:9100`, 1440 × 6311 px)

#### Section 5.1: Navbar (`INSTANCE`, 68px)
- Master sticky navbar.

#### Section 5.2: Privacy Legal Document Body (`Frame 2147241754`, 5494px)
- **Document Header**:
  - Title: "Privacy Policy" (`54px Serotiva w600 text-[#000000]`).
  - Effective Date: "Last updated: October 2026".
- **Structured Legal Clauses (Exact Figma Content)**:
  1. **Introduction**: Saylani Job Bank ("we", "our", "us") commitment to transparency and confidentiality under Pakistani data protection norms.
  2. **Information We Collect**:
     - *Applicants*: CNIC / ID details, full name, phone number, address, educational degrees, vocational certificates, resume files.
     - *Employers*: Company registration/NTN, company officer name, office address, hiring requisitions.
  3. **How We Use Your Information**: Matchmaking algorithms, verification of vocational degrees, employer vetting, SMS notifications.
  4. **How Information Is Shared**: Shared strictly with verified prospective employers upon candidate application; zero monetization or resale of data.
  5. **Employer Verification & Background Checks**: Protocols for protecting candidates against fraudulent postings.
  6. **Cookies and Website Technologies**: Session cookies, security tokens, analytics without personally identifiable tracking.
  7. **Data Security & Encryption**: Encryption at rest and in transit (SSL/TLS), strict database role isolation (`app_rw`).
  8. **Data Retention**: Retention schedule for active candidates and deletion policy for inactive profiles.
  9. **User Rights**: Right to inspect, edit, correct, or request deletion of personal resumes.
  10. **Grievance Redressal**: Contact details of the Saylani Data Privacy & Trust Officer.

#### Section 5.3: Master Footer (`footer`, 509px)
- Described in §3.3.

---

### Screen 6: Terms and conditions (`53:9334`, 1440 × 7282 px)

#### Section 6.1: Navbar (`INSTANCE`, 68px)
- Master sticky navbar.

#### Section 6.2: Terms Legal Document Body (`Frame 2147241754`, 7074px)
- **Document Header**:
  - Title: "Terms & Conditions" (`54px Serotiva w600 text-[#000000]`).
  - Effective Date: "Last updated: October 2026".
- **Structured Legal Clauses (Exact Figma Content)**:
  1. **Introduction & Agreement**: Binding nature of terms for all platform users.
  2. **Eligibility Requirements**: Minimum legal working age in Pakistan (18+), valid CNIC/Form-B.
  3. **User Account Responsibilities**: Accuracy of personal credentials, safeguarding OTPs and login sessions.
  4. **Employer Registration & Verification**: Obligation of employers to provide genuine NTN, legitimate physical offices, and legal salary compensation.
  5. **Job Postings & Requirements**: Prohibition of discriminatory postings, misleading salary representations, or recruitment fees.
  6. **Saylani's Facilitator Status**: Clarification that Saylani Job Bank acts as a free charitable matchmaking facilitator and is not the employer of record.
  7. **Zero-Fee Guarantee**: Hard commitment that Saylani Job Bank never charges candidates or employers any placement fees.
  8. **Prohibited Activities**: Misuse of contact information, spamming, forged degrees, fraudulent postings.
  9. **Limitation of Liability & Indemnification**: Standard protective disclaimers regarding workplace disputes.
  10. **Governing Law & Dispute Resolution**: Jurisdiction of Pakistani courts (Sindh High Court / Karachi jurisdiction).

#### Section 6.3: Master Footer (`footer`, 509px)
- Described in §3.3.

---

## 5. Icons Inventory & Mapping

All icons are mapped to **Lucide React** (standardized for Next.js 15):

| Icon Function / Name in Figma | Screen Location | Lucide React Icon Component | Size & Color |
|:---|:---|:---|:---|
| **Search / Lens** | Navbar, Hero search, Jobs search | `<Search />` | 20px, `#6B7866` / `#8CC641` |
| **Location / Pin** | Search bar, Job cards, Contact cards | `<MapPin />` | 16px – 20px, `#8CC641` |
| **Arrow Right / Next** | Buttons, Step cards, Pagination | `<ArrowRight />` / `<ChevronRight />` | 18px, `#FFFFFF` / `#000000` |
| **Check / Verification** | Step cards, Verified employer badge | `<CheckCircle2 />` / `<ShieldCheck />` | 16px – 24px, `#8CC641` |
| **Briefcase / Bag** | Job category badges, stats | `<Briefcase />` | 20px, `#0072BB` |
| **Graduation Cap** | Graduate badges, education tags | `<GraduationCap />` | 20px, `#8CC641` |
| **Clock / Time** | Job card duration ("Full-time") | `<Clock />` | 16px, `#54614F` |
| **Currency / PKR** | Job card salary band | `<Banknote />` | 16px, `#10261A` |
| **Phone / Helpline** | Navbar, Contact page, Footer | `<Phone />` | 18px, `#8CC641` |
| **Mail / Envelope** | Form input, Contact page, Footer | `<Mail />` | 18px, `#8CC641` |
| **Bookmark / Save** | Job card save action | `<Bookmark />` | 20px, `#000000` / `#8CC641` |
| **Accordion Chevron** | FAQ expand / collapse trigger | `<ChevronDown />` | 24px, `#000000` |
| **Play Video** | About Us vocational footage | `<Play />` | 32px (inside 72px lime circle) |

---

## 6. Image Assets & Media Specifications

| Asset Reference in Figma | Screen & Section | Dimensions | Subject & Visual Description | Implementation Note |
|:---|:---|:---|:---|:---|
| `image 32` | Landing Page (Hero) | 501 × 476 px | Smiling young Pakistani male graduate in blue formal shirt holding portfolio. | Stored in `apps/web/public/assets/hero-graduate.png` (transparent background PNG). |
| `Frame 1618874193 (A)` | Landing Page (Story 1) | 648 × 349 px | Zubair Ali at Systems LTD development workstation. | High-res WebP with dark vignette gradient overlay. |
| `Frame 1618874193 (B)` | Landing Page (Story 2) | 648 × 349 px | Abu Zar in Saylani Schools administrative desk. | High-res WebP with dark vignette gradient overlay. |
| `image 43` | Pre-Footer CTA Banner | 326 × 466 px | Cutout portrait of professional candidate smiling. | Stored in `apps/web/public/assets/cta-candidate.png` (transparent PNG). |
| `Frame 2147241731 (Hero)` | About Us (Hero) | 600 × 450 px | Saylani computer science / vocational laboratory with students. | Rounded 24px photographic card with subtle green tint. |
| `Frame 2147241737 (Team)` | About Us (Leadership) | 120 × 120 px (×8) | Circular portrait headshots of Saylani trustees and mentors. | Rounded full avatars with `#8CC641` border accent. |
| `image (Video)` | About Us (Showcase) | 1200 × 500 px | Video frame thumbnail of Saylani industrial workshop. | HTML5 video poster thumbnail with play button overlay. |
| `image (Helpdesk)` | Contact Us (Hero) | 480 × 400 px | Saylani Job Bank help desk representative on support call. | Rounded 24px photographic card. |

---

## 7. Interactive Behaviors & Component State Specifications

### 7.1. Unified Search Bar (Landing & Jobs)
- **Default State**: White rounded capsule with `#E5E7EB` border.
- **Focus State**: Soft green glow (`ring-2 ring-[#8CC641]/30 border-[#8CC641]`).
- **City Selector**: Interactive dropdown menu opening on click with search filter and checkmark for selected city.
- **Submit Action**: Navigates to `/jobs?query=...&city=...` with instant URL state synchronization.

### 7.2. Job Card Interactions
- **Hover State**: Elevates by `-4px` (`transform -translate-y-1 shadow-xl border-[#8CC641]/30 transition-all duration-200`).
- **Bookmark Button**: Toggles between empty outline (`<Bookmark />`) and filled green (`<Bookmark fill="#8CC641" />`).
- **Apply Action**: Opens applicant submission drawer/modal if signed in, or redirects to `/register?redirect=...`.

### 7.3. FAQ Accordion States
- **Collapsed**: Single row showing question text in Manrope 18px and a down-pointing chevron (`<ChevronDown />`).
- **Expanded**: Smooth CSS grid expansion (`grid-template-rows: 1fr`), chevron rotates `180deg`, subtext appears in Inter 16px `#54614F`.

### 7.4. Legal Pages (Privacy & Terms)
- **Sticky Table of Contents**: Left sidebar floating index of numbered clauses (1 through 10) that highlights the active section on scroll using IntersectionObserver.
- **Copy Clause Link**: Hovering over clause headings reveals a subtle anchor icon to copy direct section URL (`#clause-3`).

---

## 8. Alignment with Universal Architecture (`architecture.md`)

- **Presentation Layer**: Components are split strictly into Atomic Design hierarchy under `apps/web/src/components/`:
  - `atoms/`: Buttons, Badges, SearchInputs, Avatars.
  - `molecules/`: SearchBar, FormField, JobCardMeta, AccordionItem.
  - `organisms/`: Navbar, Footer, CTABanner, JobCardGrid, FAQSection, ProcessSection.
  - `templates/`: LandingTemplate, AboutTemplate, JobsTemplate, ContactTemplate, LegalTemplate.
- **Design Tokens**: Centralized in `apps/web/src/design-system/tokens.ts` and `apps/web/src/design-system/theme.css`.
- **Zero Raw Styling**: All components must consume these documented CSS variables and tokens — no arbitrary hardcoded magic hex codes in JSX files.

