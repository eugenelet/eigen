import { renderWithWrappersTL } from "lib/tests/renderWithWrappers"
import React from "react"
import "react-native"

import { ContactInformation } from "./ContactInformation"

it("renders without throwing an error", () => {
  renderWithWrappersTL(<ContactInformation handlePress={() => console.log("do nothing")} />)
})

// add more tests