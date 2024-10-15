import en from "./src/translations/en.json";

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: any;
  export default content;
}

type Messages = typeof en;
// Use type safe message keys with `next-intl`
interface IntlMessages extends Messages {}
