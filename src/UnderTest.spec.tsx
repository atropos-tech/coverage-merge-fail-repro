import { describe, expect, it } from "vitest";
import React from "react";
import UnderTest from "./UnderTest";
import { render } from "@testing-library/react";

describe("UnderTest component", () => {
  it("renders", () => {
    render(<UnderTest value={["some value"]} />);
  });
});
