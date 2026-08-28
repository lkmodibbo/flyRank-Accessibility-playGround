import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
} from "react";

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({
  open,
  title,
  children,
  onClose,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  // Keep a stable ref to onClose so the keydown listener never stales.
  // Without this, an inline () => ... passed from the parent creates a new
  // function every render, which tears down and re-registers the listener
  // while the modal is open.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  const stableClose = useCallback(() => {
    onCloseRef.current();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    triggerRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    const focusableElements =
      getFocusableElements(dialog);

    focusableElements[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        stableClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const elements =
        getFocusableElements(dialog);

      if (elements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = elements[0];
      const lastElement =
        elements[elements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open, stableClose]);

  useEffect(() => {
    if (!open && triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="modal__overlay">
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal__header">
          <h2 id={titleId}>{title}</h2>

          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="modal__body">
          {children}
        </div>

        <div className="modal__footer">
          <button
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function getFocusableElements(
  container: HTMLElement,
): HTMLElement[] {
  const selector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
  ].join(",");

  return Array.from(
    container.querySelectorAll<HTMLElement>(
      selector,
    ),
  );
}