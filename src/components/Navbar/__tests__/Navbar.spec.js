import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Navbar from "../index";

describe("Navbar", () => {
  it("renders a focusable button that activates the mobile menu on click and focuses the first menu item", () => {
    const navbarItems = [
      {
        text: "Kitten",
        url: "/kitten",
      },
      {
        text: "Puppy",
        url: "/puppy",
      },
      {
        text: "Hamster",
        url: "/hamster",
      }
    ];
    render(<Navbar items={navbarItems} />);
    const menuActivator = screen.getByTestId('navbar-menu-activator');
    const menuWrapper = screen.getByTestId('navbar-menu-items-wrapper');
    const firstAnchor = menuWrapper.querySelector('a:first-of-type');

    menuActivator.focus();
    expect(menuActivator).toHaveFocus();

    userEvent.click(menuActivator);
    expect(menuActivator).toHaveAttribute("aria-expanded", "true");
    expect(firstAnchor).toHaveFocus();
  });
});
