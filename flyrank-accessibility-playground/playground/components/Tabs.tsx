import {
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
} from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
};

export function Tabs({
  tabs,
  defaultTab,
}: TabsProps) {
  const generatedId = useId();

  const [activeTab, setActiveTab] = useState(
    defaultTab ?? tabs[0]?.id ?? "",
  );

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  if (tabs.length === 0) {
    return null;
  }

  const focusTab = (index: number) => {
    const nextIndex =
      (index + tabs.length) % tabs.length;

    const nextTab = tabs[nextIndex];

    if (!nextTab) {
      return;
    }

    setActiveTab(nextTab.id);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(index + 1);
        break;

      case "ArrowLeft":
        event.preventDefault();
        focusTab(index - 1);
        break;

      case "Home":
        event.preventDefault();
        focusTab(0);
        break;

      case "End":
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;

      default:
        break;
    }
  };

  const activePanel = tabs.find(
    (tab) => tab.id === activeTab,
  );

  return (
    <div className="tabs">
      <div
        className="tabs__list"
        role="tablist"
        aria-label="Project information"
      >
        {tabs.map((tab, index) => {
          const tabId = `${generatedId}-tab-${tab.id}`;
          const panelId = `${generatedId}-panel-${tab.id}`;
          const isSelected = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) =>
                handleKeyDown(event, index)
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activePanel && (
        <div
          id={`${generatedId}-panel-${activePanel.id}`}
          role="tabpanel"
          aria-labelledby={`${generatedId}-tab-${activePanel.id}`}
          tabIndex={0}
          className="tabs__panel"
        >
          {activePanel.content}
        </div>
      )}
    </div>
  );
}