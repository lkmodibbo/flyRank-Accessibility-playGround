import { type ReactNode, useId, useState } from "react";

type DisclosureProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function Disclosure({
  title,
  children,
  defaultOpen = false,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="disclosure">
      <button
        type="button"
        className="disclosure__button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{title}</span>

        <span aria-hidden="true">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <div
          id={contentId}
          className="disclosure__content"
        >
          {children}
        </div>
      )}
    </div>
  );
}