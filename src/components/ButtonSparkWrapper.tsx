import ClickSpark from "./ClickSpark";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ButtonSparkWrapper({
  children
}: Props) {

  return (

<ClickSpark
sparkColor="#fff"
sparkSize={18}
sparkRadius={22}
sparkCount={5}
duration={250}
>

{children}

</ClickSpark>

  );
}