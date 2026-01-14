# konbording 개발 스펙

> Korea First 24H Survival Kit - 외국인 관광객을 위한 한국 도착 첫 24시간 생존 가이드

## 1. 프로젝트 개요

### 목표
- 외국인 관광객이 한국 도착 전/후 겪는 불안감 해소
- 핵심 로지스틱 정보(연결성, 교통, 결제)만 제공
- 일반 관광 정보 배제, 필수 정보에만 집중

### 타겟 유저
- 서양/비아시아권 관광객
- 한국 앱 생태계(카카오, 네이버)에 익숙하지 않은 사용자
- 한국어를 모르는 사용자

### 기술 스택
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Image Generation:** html2canvas
- **Hosting:** Vercel (권장)
- **Analytics:** GA4 (전체 인게이지먼트 트래킹)

---

## 2. MVP 스코프

### 지원 범위
- **지역:** 인천공항 → 서울 시내만 (향후 확장 가능한 구조로 설계)
- **언어:** 영어 단일 (i18n 구조는 미리 준비)

### 제외 항목 (MVP)
- PWA 지원
- 다국어 지원
- 다른 공항/도시 지원
- 국적별 비자 로직

---

## 3. 사용자 플로우

### Landing Page
```
[konbording 로고/타이틀]

┌─────────────────────┐  ┌─────────────────────┐
│  🛫 Preparing to    │  │  🛬 Just Arrived    │
│     Leave           │  │     in Korea        │
│                     │  │                     │
│  [Phase A로 이동]    │  │  [Phase B로 이동]    │
└─────────────────────┘  └─────────────────────┘
```

- Phase 선택 후 전환 기능 불필요 (한 번 선택하면 해당 Phase만 사용)
- 상태 저장 불필요 (매번 새로 시작해도 무방)

---

## 4. Phase A: Before Departure (출발 전)

### A-1. Connectivity Guide (연결성 가이드)

**UI 구조:**
```
Does your phone support eSIM?
[Yes] [No]  [How to check →]
```

**로직:**
- **Yes 선택 시:** eSIM 일반 안내 제공
  - 특정 업체 직접 언급 대신, 선택 기준(가격, 데이터량, 환불정책) 안내
  - 또는 외국인 친화적인 대표 사이트 몇 개 링크 (Holafly, Trip.com 등 - 제휴 관계 없음)
- **No 선택 시:** Pocket WiFi / 물리 SIM 구매 안내
- **How to check:** eSIM 지원 확인 방법 외부 링크 제공

### A-2. Essential Apps (필수 앱)

**필수 앱 (단순 목록):**
| 앱 | 용도 | 링크 방식 |
|---|---|---|
| Naver Map | 지도/네비게이션 | 스토어 직행 |
| Papago | 번역 | 스토어 직행 |

**앱 링크 처리:**
- 모바일: User Agent로 OS 감지 → 해당 스토어로 자동 이동
- PC: App Store / Play Store 버튼 두 개 병렬 표시

**택시 앱 비교 (카드 UI):**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│  Kakao T    │ │    Uber     │ │      Taba       │
│             │ │             │ │ ★ Best for      │
│ Korea's     │ │ Familiar    │ │   Tourists      │
│ Standard    │ │ Backup      │ │                 │
│             │ │             │ │ • No Korean #   │
│ • Local     │ │ • Known UI  │ │ • Global Card   │
│   standard  │ │ • Variable  │ │ • English OK    │
│ • Korean #  │ │   supply    │ │                 │
│   may help  │ │             │ │                 │
└─────────────┘ └─────────────┘ └─────────────────┘
```

**비교 톤:**
- **중립적 비교** - 각 앱의 장단점을 객관적으로 나열
- Taba는 "Best for Tourists" 배지로만 강조
- 경쟁사 단점을 과도하게 부각하지 않음 (신뢰도 유지)

**Taba 포지셔닝:**
- Taba는 관련 회사이나, 광고처럼 보이지 않게 자연스러운 추천 형태로
- 향후 제휴 관계로 발전 가능성 있음

### A-3. Entry Documentation (입국 서류)

| 항목 | 내용 |
|---|---|
| Q-Code | 공식 사이트 링크 (e-arrivalcard.go.kr) + "Save 30 mins at airport" 팁 |
| Visa/K-ETA | 일반적 안내만 + 공식 사이트 링크 (visa.go.kr, K-ETA) |

- 국적별 분기 로직 없음 - 공식 사이트에서 직접 확인 유도

### A-4. Save Survival Card (생존 카드 저장)

**기능:**
- html2canvas로 PNG 이미지 생성
- 모바일 배경화면용 9:16 비율

**카드 포함 내용:**
- 설치할 앱 아이콘 목록
- 응급 연락처 (확장 포함):
  - 112 (경찰)
  - 119 (소방/응급)
  - 1330 (관광 헬프라인)
  - 대사관 연락처
  - 의료 지원 연락처
- Taba 앱 QR코드 (App Store/Play Store 직행)
- 체크리스트 상태 요약

**디자인:**
- 미니멀 디자인
- 별도 브랜드 가이드라인 없음

---

## 5. Phase B: Just Arrived (도착 후)

### B-1. Immediate Connectivity (즉시 연결)

**내용:**
- 공항 무료 WiFi 연결 방법
- SIM/로밍 센터 위치 (터미널별)

### B-2. Transport Guide (교통 가이드)

**UI 구조:**
```
Which terminal are you at?
[Terminal 1]  [Terminal 2]

─────────────────────────────

How do you want to get to Seoul?

┌─────────┐ ┌─────────┐ ┌─────────┐
│  🚕     │ │  🚃     │ │  🚌     │
│  Taxi   │ │ Subway  │ │  Bus    │
│         │ │ (AREX)  │ │         │
└─────────┘ └─────────┘ └─────────┘
```

**접근 방식:**
- 인원수/짐 양 입력받지 않음
- 사용자가 직접 교통수단 선택
- 각 교통수단별 승강장 위치와 이용 방법만 안내

**각 교통수단별 가이드 내용:**

| 교통수단 | 안내 내용 |
|---|---|
| **Taxi** | Taba 앱 사용법, 택시 승강장 위치 (터미널별), Taba 앱 설치 CTA |
| **Subway (AREX)** | AREX 역 위치, 티켓 구매 방법, T-Money 구매 위치, 서울역까지 노선 안내 |
| **Bus (Limousine)** | 매표소 위치, 탑승장 위치, 주요 노선 안내 |

**향후 확장:**
- 다른 도시(제주, 부산 등)로 이동하는 케이스는 향후 업데이트에서 추가
- 목적지 선택 기능은 확장 시 추가

### B-3. Money & Payment (결제 수단)

**카드 비교 - 용도별 추천:**

| 용도 | 추천 카드 | 설명 |
|---|---|---|
| 지하철/버스만 | T-Money | 가장 기본적, 편의점에서 구매 |
| 지하철 + 쇼핑 | WOWPASS | 교통카드 + 선불카드 기능 |
| 다양한 사용 | NAMANE | 커스터마이징 가능 |

- 택시 앱처럼 카드 비교 UI가 아닌, 용도별 추천 형태로 안내

---

## 6. UI/UX 가이드라인 (Apple Design Style)

### 디자인 철학
Apple Human Interface Guidelines를 참고하여 깔끔하고 직관적인 디자인 구현

### Typography (SF Pro 스타일)
```css
/* Tailwind 설정으로 구현 */
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text',
             'Helvetica Neue', Arial, sans-serif;
```

| 용도 | 크기 | Weight | Line Height |
|---|---|---|---|
| Large Title | 34px | Bold (700) | 1.2 |
| Title 1 | 28px | Bold (700) | 1.2 |
| Title 2 | 22px | Bold (700) | 1.3 |
| Title 3 | 20px | Semibold (600) | 1.3 |
| Headline | 17px | Semibold (600) | 1.4 |
| Body | 17px | Regular (400) | 1.5 |
| Callout | 16px | Regular (400) | 1.5 |
| Subhead | 15px | Regular (400) | 1.5 |
| Footnote | 13px | Regular (400) | 1.4 |
| Caption | 12px | Regular (400) | 1.3 |

### Color System
```
/* Primary */
--apple-blue: #007AFF
--apple-blue-dark: #0A84FF (다크모드용, 향후)

/* Semantic Colors */
--success: #34C759
--warning: #FF9500
--error: #FF3B30

/* Grayscale */
--gray-1: #8E8E93
--gray-2: #AEAEB2
--gray-3: #C7C7CC
--gray-4: #D1D1D6
--gray-5: #E5E5EA
--gray-6: #F2F2F7

/* Background */
--bg-primary: #FFFFFF
--bg-secondary: #F2F2F7
--bg-tertiary: #FFFFFF

/* Text */
--text-primary: #000000
--text-secondary: #3C3C43 (60% opacity)
--text-tertiary: #3C3C43 (30% opacity)
```

### Spacing System (8pt Grid)
```
4px  - xs (미세 조정)
8px  - sm
16px - md (기본)
24px - lg
32px - xl
48px - 2xl
64px - 3xl
```

### Border Radius
```
--radius-sm: 8px   (작은 요소, 버튼)
--radius-md: 12px  (카드, 입력필드)
--radius-lg: 16px  (큰 카드)
--radius-xl: 20px  (모달, 시트)
--radius-full: 9999px (pill 버튼)
```

### Shadow (Apple Style)
```css
/* Subtle */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Card */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Elevated */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

/* Modal */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
```

### 버튼 스타일
```
/* Primary Button */
- Background: #007AFF
- Text: #FFFFFF
- Height: 50px
- Border Radius: 12px
- Font: 17px Semibold

/* Secondary Button */
- Background: #F2F2F7
- Text: #007AFF
- Height: 50px
- Border Radius: 12px

/* Text Button */
- Text: #007AFF
- Font: 17px Regular
```

### 카드 스타일
```
- Background: #FFFFFF
- Border Radius: 16px
- Padding: 16px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
- Border: none (또는 1px solid #E5E5EA)
```

### 모바일 퍼스트
- 메인 타겟 디바이스: 모바일 (한 손에 짐 들고 사용)
- 버튼 최소 높이: 50px (Apple HIG 권장)
- Touch Target: 최소 44x44px
- Safe Area 고려

### 데스크톱
- 모바일 레이아웃 그대로 유지 (중앙 정렬)
- 최대 너비: 430px (iPhone Pro Max 기준)
- 양쪽 여백으로 중앙 정렬

### 애니메이션
```css
/* 기본 트랜지션 */
transition: all 0.2s ease-out;

/* 버튼 호버/탭 */
transform: scale(0.98);
transition: transform 0.1s ease-out;

/* 페이지 전환 */
transition: opacity 0.3s ease-out;
```

### 디자인 톤
- 미니멀하고 깔끔한
- 충분한 여백 (Breathing Room)
- 명확한 시각적 계층 구조
- 직관적인 인터랙션

---

## 7. 기술 구현 가이드

### 데이터 관리
- 콘텐츠 하드코딩 금지
- 별도 `data` 폴더에 JSON으로 관리:
  - `apps.json` - 앱 정보, 스토어 링크
  - `transport.json` - 교통 정보
  - `emergency.json` - 응급 연락처
  - `cards.json` - 결제카드 정보

### i18n 준비
- 텍스트를 코드에 직접 쓰지 않고 분리
- 향후 다국어 추가 시 구조 변경 최소화

### 확장성 고려
- 공항/도시 정보를 데이터로 분리
- 향후 김해, 김포, 제주 등 추가 시 데이터만 추가하면 되는 구조

### SEO
- 메타 태그 최적화 필요
- 구조화된 데이터 적용
- 타겟 키워드: "Korea travel tips", "Incheon airport guide", "Korea tourist guide"

### 컴포넌트 구조 (권장)
```
components/
├── common/
│   ├── AppCard.tsx        # 앱 카드 UI
│   ├── ActionButton.tsx   # CTA 버튼
│   └── InfoCard.tsx       # 정보 카드
├── phase-a/
│   ├── ConnectivityGuide.tsx
│   ├── EssentialApps.tsx
│   ├── TaxiComparison.tsx
│   ├── EntryDocs.tsx
│   └── SurvivalCard.tsx
├── phase-b/
│   ├── TerminalSelector.tsx
│   ├── TransportGuide.tsx
│   ├── TransportDetail.tsx
│   └── PaymentGuide.tsx
└── layout/
    └── MobileLayout.tsx
```

---

## 8. 분석 & 트래킹

### 트래킹 항목
- 페이지뷰
- 체류 시간
- Phase 선택 비율 (A vs B)
- 각 섹션 도달률
- 앱 설치 링크 클릭 (특히 Taba)
- Save as Image 사용률
- 터미널 선택 비율 (T1 vs T2)
- 교통수단 선택 비율

---

## 9. 우선순위 및 개발 순서

### Phase 1 (MVP Core)
1. Landing Page (Phase 선택)
2. Phase A - Essential Apps (택시 비교 포함)
3. Phase B - Transport Guide (터미널 선택, 교통수단별 가이드)
4. 기본 SEO 설정

### Phase 2 (MVP Complete)
5. Phase A - Connectivity Guide
6. Phase A - Entry Documentation
7. Phase B - Payment Guide
8. Save Survival Card 기능

### Phase 3 (Post-MVP)
- 다국어 지원
- 다른 공항/도시 추가
- 더 상세한 교통 정보
- 실시간 정보 연동 (선택적)

---

## 10. 미결정 사항 (향후 논의 필요)

1. **eSIM 업체 직접 언급 vs 일반 가이드**
   - 현재: 외국인 친화적 사이트 몇 개 링크 제공
   - 대안: 선택 기준만 안내하고 검색 유도

2. **서비스명 최종 확정**
   - 현재 후보: konbording
   - 대안: KoLand, K-First24, ArriveKR

3. **향후 Taba 제휴 시 UI 변경 필요 여부**
   - 현재: 자연스러운 추천 형태
   - 제휴 시: 법적 요건에 따른 표시 필요할 수 있음

---

## 변경 이력

| 날짜 | 내용 |
|---|---|
| 2024-01-14 | 초기 스펙 작성 |
