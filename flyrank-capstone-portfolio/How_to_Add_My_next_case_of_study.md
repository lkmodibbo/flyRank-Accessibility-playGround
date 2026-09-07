# How to Add My Next Case Study
**Lukman Modibbo Said — Frontend Developer**

---

## Why This Next Project

I considered three candidates: SAFRECORD Student Score Pagination, Course Configuration, and Bulk Course Configuration.

**SAFRECORD Student Score Pagination is the strongest choice.** Here is why:

- It solves a concrete, relatable performance problem — handling large data sets — which every hiring reviewer understands immediately.
- It touches multiple real engineering decisions: pagination state management, page size/offset logic, API integration, and rendering large lists efficiently in React/TypeScript.
- It is self-contained enough to explain in three beats without needing extensive background context.
- It demonstrates the kind of production-scale thinking that separates professional work from tutorial projects.

Course and bulk course configuration are valid future cases but are better suited as a second or third addition once the pagination case is live.

---

## Where the Case Study Goes

It goes directly into my portfolio's main case studies section, as a new entry following the same three-beat structure as the existing cases.

If my portfolio is a GitHub README or a site built from this repo, it goes under the **Case Studies** heading in `flyrank-capstone-portfolio/README.md`, as a new `###` section.

---

## How to Add the Next Case Study

Six steps. About twenty minutes once the work is done.

1. Open `flyrank-capstone-portfolio/README.md`.
2. Copy the three-beat block from the existing Accessibility Playground case.
3. Paste it as a new `###` section under **Case Studies**.
4. Fill in the three beats using the structure below — no invented metrics, only what actually happened.
5. Update the **Up Next** section to the following planned case.
6. Commit: `git commit -m "portfolio: add [project name] case study"`

**Shortcut:** Open the existing Claude Project → paste rough notes from the project → ask:
*"Shape this into my three-beat case study format, matching my existing voice."*
One short conversation. No rebuilding context from scratch.

---

## The Next Case Study — Draft

### SAFRECORD Student Score Pagination — React + TypeScript

**The problem**
The SAFRECORD application needed to display student score records for schools with
large student populations. Loading all records at once was not sustainable — the
UI slowed down and the data became difficult to navigate. The application needed
proper pagination so teachers and administrators could work through score data
in manageable pages without degrading performance.

**What I did**
I built the pagination feature on the frontend using React and TypeScript, integrating
with the existing API to handle page size and offset parameters. This involved:

- Managing pagination state (current page, page size, total count) in the component layer
- Wiring up RTK Query to pass the correct offset and limit values to the API on each page change
- Rendering the paginated score data correctly as the user navigated between pages
- Handling edge cases such as the last page having fewer records than the page size

> **Fill in here:** Any specific numbers you can share — number of records handled,
> page size chosen, performance improvement observed, or team feedback received.
> Do not invent these. If you have them, they make the case stronger.

**What came of it**
The application could now handle large student populations without the UI degrading.
Teachers and administrators could navigate score records page by page reliably.

> **Fill in here:** Any concrete outcome — e.g. "Schools with [X] students could now
> load score data without timeout errors" or "The feature shipped in [sprint/date]
> and is used by [X] schools." Only add what is true.

---

## Reminder — Set ✓

```
Title:   "Add SAFRECORD Pagination case study to portfolio"
Date:    Sunday, 21 September 2026
Time:    6:00 PM
Method:  Google Calendar (or your preferred calendar app)
Repeat:  Does not repeat — one-time task reminder
```

**How to set it right now:**
- Google Calendar: open calendar.google.com → click the date Sept 21 → create event with the title above → set time to 6:00 PM → save.
- Phone: open your default calendar app → new event → same title, date, time.

**Evidence to provide:**
Take a screenshot of the saved calendar event showing the title, date, and time clearly visible. That screenshot is your submission evidence.

---

## Build Context — Preserved ✓

The Claude Project used throughout the FlyRank program already holds:

- Your voice and tone across all deliverables
- Your stack: React, TypeScript, RTK Query, Tailwind CSS, Vite, Styled Components
- Your identity as a frontend developer at FlexiSAF EduSoft / Safrecord
- The full context of the accessibility playground case study

When you are ready to write the SAFRECORD case study, open that same Claude Project
and paste your rough notes. Ask it to shape them into the three-beat format matching
your existing voice. You will have a first draft in one conversation.

Do not start a new Claude Project. The value is in the accumulated context.

---

## Submission Checklist

- [x] Concrete "how to add the next case" note written — not a vague intention
- [x] Specific next project named: SAFRECORD Student Score Pagination
- [x] Why it was chosen over other candidates — explained above
- [x] Three-beat draft written (Problem / What I Did / What Came Of It)
- [x] Exact location in portfolio specified (`README.md` → Case Studies section)
- [x] Reminder date and time set: Sunday 21 September 2026 at 6:00 PM
- [x] Instructions for setting the reminder provided
- [ ] Screenshot of the calendar reminder — **take this and attach to your submission**
- [x] Existing Claude Project preserved and instructions for reuse provided
- [x] No invented metrics — placeholders clearly marked for you to fill in
