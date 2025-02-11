import { group } from "console";

type CodeModifier = "0" | "1";

type CodeGroup = `${CodeModifier}${CodeModifier}${CodeModifier}`;

export type Code = `${CodeGroup}-${CodeGroup}-${CodeGroup}`;

export function codeToDecimal(code: Code) {
  const convertedToDecimal = code.split("-").map((group) => parseInt(group, 2)).join("");


  return convertedToDecimal
}

codeToDecimal('111-111-011');
