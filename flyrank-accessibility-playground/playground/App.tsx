import { useState } from "react";
import { Disclosure } from "./components/Disclosure";
import { Modal } from "./components/Modal";
import { Tabs } from "./components/Tabs";
import "./styles.css";

export default function PlaygroundApp() {
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  return (
    <main className="playground">
      <header>
        <h1>FlyRank Accessibility Playground</h1>

        <p>
          React + TypeScript accessibility components
          built from scratch.
        </p>
      </header>

      <section>
        <h2>Disclosure</h2>

        <Disclosure title="About this project">
          <p>
            This playground demonstrates accessible
            disclosure behavior using React and
            TypeScript.
          </p>
        </Disclosure>
      </section>

      <section>
        <h2>Tabs</h2>

        <Tabs
          tabs={[
            {
              id: "overview",
              label: "Overview",
              content: (
                <p>
                  This is an overview of the project.
                </p>
              ),
            },
            {
              id: "features",
              label: "Features",
              content: (
                <p>
                  These are the main project features.
                </p>
              ),
            },
            {
              id: "technologies",
              label: "Technologies",
              content: (
                <p>
                  React, TypeScript and Vite are used
                  in this project.
                </p>
              ),
            },
          ]}
        />
      </section>

      <section>
        <h2>Modal</h2>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Open modal
        </button>

        <Modal
          open={isModalOpen}
          title="Edit project"
          onClose={() => setIsModalOpen(false)}
        >
          <label>
            Project name
            <input
              type="text"
              defaultValue="Accessibility Playground"
            />
          </label>
        </Modal>
      </section>
    </main>
  );
}