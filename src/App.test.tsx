import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import App from "./App";

// App mounts its own BrowserRouter, so each test starts from a real URL.
const renderAt = (path: string) => {
  window.history.pushState({}, "", path);
  return render(<App />);
};

const pages = [
  { path: "/about", heading: "About Us" },
  { path: "/programs", heading: "Our Programs" },
  { path: "/roadmap", heading: "Our Vision Roadmap" },
  { path: "/donate", heading: "Donate" },
  { path: "/contact", heading: "Contact Us" },
];

beforeAll(() => {
  window.scrollTo = () => {};
});

afterEach(() => {
  window.history.pushState({}, "", "/");
});

describe("routing", () => {
  it("renders the home page with a single main heading", () => {
    renderAt("/");
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it.each(pages)("renders $path with the '$heading' heading", ({ path, heading }) => {
    renderAt(path);
    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });

  it("shows the 404 page for unknown routes", () => {
    renderAt("/no-such-page");
    expect(screen.getByRole("heading", { level: 1, name: "404" })).toBeInTheDocument();
  });
});

describe("navigation", () => {
  it("links to every main page and to Donate", () => {
    renderAt("/");
    const nav = screen.getAllByRole("navigation")[0];
    for (const label of ["Home", "About Us", "Programs", "Our Vision", "Contact"]) {
      expect(within(nav).getAllByRole("link", { name: label })[0]).toBeInTheDocument();
    }
    expect(within(nav).getAllByRole("link", { name: /donate/i })[0]).toHaveAttribute("href", "/donate");
  });

  it("navigates client-side when a nav link is clicked", async () => {
    renderAt("/");
    const nav = screen.getAllByRole("navigation")[0];
    await userEvent.click(within(nav).getAllByRole("link", { name: "Programs" })[0]);
    expect(screen.getByRole("heading", { level: 1, name: "Our Programs" })).toBeInTheDocument();
    expect(window.location.pathname).toBe("/programs");
  });
});
