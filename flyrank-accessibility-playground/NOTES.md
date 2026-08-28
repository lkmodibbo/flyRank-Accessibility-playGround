# Accessibility Playground Notes

## Components Built

I built three interactive components from scratch using React and TypeScript,
with no component library:

- **Modal** — a dialog that traps focus, handles Escape, and returns focus on close.
- **Tabs** — a tablist with roving tabindex and full arrow key navigation.
- **Disclosure** — a show/hide toggle with aria-expanded and aria-controls.

---

## Accessibility Implemented

### Disclosure

- Uses a real `<button>` so Enter and Space work without any extra event handling.
- `aria-expanded` reflects the open/closed boolean state.
- `aria-controls` points to the content panel's `id` (generated with `useId`).
- The content is conditionally rendered; when absent it is fully removed from the
  accessibility tree rather than hidden with CSS.

### Tabs

- `role="tablist"` wraps the tab buttons.
- Each button has `role="tab"`, `aria-selected`, and `aria-controls` pointing to
  its panel.
- Each panel has `role="tabpanel"` and `aria-labelledby` pointing to its tab.
- Roving tabindex: the active tab has `tabIndex={0}`, inactive tabs have
  `tabIndex={-1}`. This means Tab moves into/out of the tab group as a single
  stop; arrow keys move between tabs.
- ArrowRight/ArrowLeft wrap around. Home/End jump to first/last. Focus moves with
  `tabRef.current[index]?.focus()` so both selection and DOM focus update together.

### Modal

- `role="dialog"` and `aria-modal="true"` tell screen readers this is a modal context.
- `aria-labelledby` points to the `<h2>` title, giving the dialog an accessible name.
- On open, `document.activeElement` is saved to `triggerRef` before focus moves.
- Focus moves to the first focusable element inside the dialog.
- A `keydown` listener on `document` intercepts Tab and Shift+Tab to wrap focus
  within the dialog.
- Escape triggers `onClose`.
- On close, focus returns to the saved `triggerRef` element.
- A stable `onCloseRef` pattern prevents the keydown listener from being
  torn down and re-added on every render caused by inline `onClose` callbacks.

---

## What shadcn/ui Handled That I Missed

shadcn's Dialog component wraps Radix UI's `@radix-ui/react-dialog` primitive.
Reading that source reveals two concrete gaps:

### 1. `aria-hidden` on the rest of the page

Radix UI's Dialog sets `aria-hidden="true"` on `document.body`'s sibling trees
(everything outside the portal) when the dialog is open. This prevents screen
readers from navigating to background content with virtual cursor keys even when
they are not using Tab. My implementation only traps keyboard focus via Tab/Shift+Tab.
A screen reader user on a browser that respects `aria-hidden` at the body level will
not be blocked by my modal — they can still read background content using arrow keys
or the virtual buffer.

### 2. Scroll lock on the body

Radix UI applies `overflow: hidden` to `document.body` while the dialog is open,
preventing background scroll both by mouse and by keyboard (e.g. Space/arrow keys
inside a scrollable background container). My implementation does not do this. A
user who opens the modal and presses arrow keys inside a background scroll container
could inadvertently scroll the page behind the overlay, which is disorienting.

---

## What I Learned

Building these components manually made the cost of "just use a button and toggle a
class" very visible. Each component carries a small surface of accessibility
obligations — stable IDs, ARIA relationships, focus management, keyboard contracts —
that are invisible in the visual design but break the experience for keyboard and
screen reader users when missing.

The gap between what a component looks like and what it does for assistive technology
is wider than I expected. A modal that visually traps focus still leaks if you do not
also silence the background for virtual cursor navigation. Mature primitives like
Radix UI exist precisely because these edge cases accumulate: scroll lock, portal
isolation, `aria-hidden` on background content, focus restoration across async
state changes, and disabled-state propagation each represent a bug that someone
reported after release. Building from scratch once is the best way to understand
why those primitives contain so much more logic than their rendered output suggests.
