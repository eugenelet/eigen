import { Checkbox } from "lib/Components/Bidding/Components/Checkbox"
import { useEnvironment } from "lib/store/GlobalStore"
import { Flex, Text, Touchable } from "palette"
import React from "react"
import { Linking } from "react-native"

interface TermsOfServiceCheckboxProps {
  checked: boolean
  setChecked: (checked: boolean) => void
  error: boolean
}

export const TermsOfServiceCheckbox: React.FC<TermsOfServiceCheckboxProps> = ({ setChecked, checked, error }) => {
  const webURL = useEnvironment().webURL

  return (
    <Touchable haptic onPress={() => setChecked(!checked)}>
      <Flex flexDirection="row" alignItems="flex-start">
        <Checkbox error={error} checked={checked} onPress={() => setChecked(!checked)} mt={0.3} />
        <Text variant="small">
          By checking this box, you consent to our{" "}
          <Text
            onPress={() => {
              Linking.openURL(`${webURL}/terms`)
            }}
            style={{ textDecorationLine: "underline" }}
          >
            Terms of Use
          </Text>
          ,{" "}
          <Text
            onPress={() => {
              Linking.openURL(`${webURL}/privacy`)
            }}
            style={{ textDecorationLine: "underline" }}
          >
            Privacy Policy
          </Text>
          , and{" "}
          <Text
            onPress={() => {
              Linking.openURL(`${webURL}/conditions-of-sale`)
            }}
            style={{ textDecorationLine: "underline" }}
          >
            Conditions of Sale
          </Text>
          .
        </Text>
      </Flex>
    </Touchable>
  )
}