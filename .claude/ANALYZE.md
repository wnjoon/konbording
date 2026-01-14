# Project Specification: Korea First 24H Survival Kit

## 1. Project Overview
- **Goal:** Build a "First 24 Hours Survival Guide" web service for foreign tourists visiting Korea. It focuses on the critical moments from "Before Departure" to "Arrival at Accommodation".
- **Core Value:** Remove anxiety by providing only essential logistics information (Connectivity, Transport, Payment) without the noise of general tourism info.
- **Target Audience:** Western/Non-Asian tourists who are unfamiliar with the Korean app ecosystem (Kakao, Naver) and language.
- **Tech Stack:** Next.js (App Router), Tailwind CSS, Lucide React (Icons), `html2canvas` (for feature: Save as Image).

---

## 2. User Flow & Architecture
The service has a simple structure divided by the user's current status.

### A. The Landing Page (The Gate)
- **Concept:** A simple decision gate.
- **Action:** Two large buttons (Cards) to select user status:
  1.  **🛫 Preparing to Leave** (Go to Phase A)
  2.  **🛬 Just Arrived in Korea** (Go to Phase B)
- **State Management:** Store the selected status globally to adjust the UI/UX context.

---

## 3. Detailed Features: Phase A (Before Departure)
*Focus: Checklist & Preparation.*

### Feature A-1. Connectivity Guide (Logic-Based)
- **UI:** Ask "Does your phone support eSIM?" (Yes/No Toggle).
- **Logic:**
  - **IF Yes:** Recommend eSIM providers (Link to partners like Holafly, Trip.com).
  - **IF No:** Recommend Pocket WiFi reservation or Physical SIM purchase.

### Feature A-2. Essential Apps (Strategic Comparison)
- **Goal:** Install essential apps before arrival.
- **Components:**
  - **Map/Trans:** Naver Map, Papago (Essential).
  - **Taxi App Comparison (Card UI):** Display 3 options side-by-side.
    1.  **Kakao T:** Label as "Korea's Standard". Note: "Verification required / Complex setup".
    2.  **Uber (UT):** Label as "Familiar Backup". Note: "Supply varies".
    3.  **Taba (Primary Recommendation):**
        - **Highlight:** Badge "Best for Tourists".
        - **Key Selling Points:** "No Korean Number Needed", "Global Card Optimized", "English Support".
        - **Design:** Make this card visually distinct (e.g., border highlight, 'Recommended' tag).

### Feature A-3. Entry Documentation
- **Q-Code:** Link to official site (`e-arrivalcard.go.kr`) with the tip: "Save 30 mins at the airport".
- **Visa Check:** Link to `visa.go.kr` or K-ETA site.

### Feature A-4. "Save Survival Card" (Killer Feature)
- **Action:** A button at the bottom: [Save as Image].
- **Function:** Use `html2canvas` to generate a PNG image of the user's checklist.
- **Content in Image:** App icons to install, Emergency numbers, Taba download QR code, Brief checklist status.
- **UX:** Format for mobile wallpaper (9:16 ratio).

---

## 4. Detailed Features: Phase B (Just Arrived)
*Focus: Speed & Problem Solving.*

### Feature B-1. Immediate Connectivity
- Guide for connecting to Airport Free WiFi.
- Locations for SIM/Roaming centers (Terminal 1 vs 2).

### Feature B-2. Transport Decision Helper (Interactive)
- **Input:** Destination (Area), Number of People, Luggage Count.
- **Logic:**
  - **Case 1 (Solo/Light luggage):** Recommend AREX (Train) or Limousine Bus. *Sub-suggest Taba for comfort.*
  - **Case 2 (Group/Heavy luggage):** **Strongly Recommend Taba.**
    - Show "Estimated Price" vs "Public Transport Total Price" (Value Proposition).
    - CTA: "Book Now" (Deep link to app or install page).

### Feature B-3. Money & Payment
- Guide to buying/charging T-Money cards (Convenience stores).
- Introduction to WOWPASS/NAMANE cards.

---

## 5. Development Guidelines for Claude
1.  **Mobile First Design:** Assume users are on mobile with luggage in one hand. Use large buttons (min-height 48px) and readable fonts.
2.  **Data-Driven:** Do not hardcode content. Store app links, descriptions, and recommendation logic weights in a separate `data` folder (e.g., `apps.json`, `transport_logic.json`).
3.  **Component Strategy:** Create reusable components for `AppCard`, `ChecklistStep`, and `ActionLink`.
4.  **Taba Integration Strategy:** The goal is to position 'Taba' as the most rational choice for tourists through objective comparison, not just an advertisement.