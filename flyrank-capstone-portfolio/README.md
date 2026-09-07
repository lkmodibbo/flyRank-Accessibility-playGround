# Portfolio — Lukman Modibbo Said

A living record of real work. Each case follows a simple three-beat shape:
what was broken, what I built, what I can do now.

---

## Case Studies

### Accessibility Playground — React + TypeScript

**The problem**
Most developers, myself included, treat accessibility as a checklist bolted on
after the visual design is done. I wanted to find out what it actually costs to
get it right — not by reading the spec, but by building Modal, Tabs, and Disclosure
from scratch with no headless library to fall back on.

**What I did**
I built three components in React and TypeScript, each carrying its full
accessibility contract:

- **Modal** — focus trap via Tab/Shift+Tab interception, Escape to close, focus
  restoration to the trigger on close, `aria-modal`, and `aria-labelledby` tied
  to the dialog title.
- **Tabs** — roving tabindex so the group is a single Tab stop, ArrowRight/Left
  to move between tabs, Home/End to jump to the edges, and the full
  `role="tablist"` / `role="tab"` / `role="tabpanel"` relationship.
- **Disclosure** — `aria-expanded` reflecting open state, `aria-controls` pointing
  to the panel, stable IDs from `useId`, and conditional rendering so the hidden
  content is fully removed from the accessibility tree rather than visually hidden.

Then I compared each against Radix UI / shadcn and documented the two gaps I
had missed: `aria-hidden` on background content so virtual cursors can't escape
the modal, and `overflow: hidden` on `document.body` to prevent scroll-behind.

**What came of it**
I can now read any UI component and see exactly which accessibility contracts
it fulfills and which ones it silently drops. The gap between "looks right" and
"works for assistive technology" is no longer invisible. That changes how I
review code, not just how I write it.

---

## How to Add the Next Case

Six steps. Takes about twenty minutes once the work is done.

1. Open this file.
2. Copy the three-beat block from an existing case above.
3. Paste it as a new `###` section under **Case Studies**.
4. Fill in each beat honestly — what was actually broken, what you concretely
   built, what you can specifically do now that you couldn't before.
5. Update the **Up Next** section to the next planned case.
6. Commit: `git commit -m "portfolio: add [project name] case study"`

**The shortcut:** The Claude Project already knows your voice, stack, and
identity kit. Paste your rough notes into it and ask it to shape them into the
three-beat format. The first draft is one short conversation, not a rebuild.

---

## Up Next

**SAFRECORD Student Score Pagination — React + TypeScript + RTK Query**

A real piece of production work at FlexiSAF EduSoft / Safrecord: building pagination
for student score records so the application handles large student populations without
degrading. The case covers pagination state, page size/offset API integration, and
rendering large datasets reliably in React and TypeScript.

---

## Reminder — Confirmed ✓

```
Recurring reminder set: first Monday of every month
Title: "Portfolio check — is there a new case to add?"
First occurrence: Monday, 5 October 2026
Method: Google Calendar, repeats monthly
```

*Set on 7 September 2026. This note is the record.*

---

## Build Context — Preserved ✓

The Claude Project used throughout this program is intact and holds:

- Voice and tone established across all FlyRank deliverables
- Stack context: React, TypeScript, RTK Query, Tailwind CSS, Vite, Styled Components
- Identity as a frontend developer at FlexiSAF EduSoft / Safrecord
- Full history of the accessibility playground case

The next case study is a short conversation, not a rebuild from scratch.
