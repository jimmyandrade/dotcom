import { FC, HTMLAttributes } from "react";
import { HeaderRoot } from "./Header.styles";
import Link from "next/link";
import { Wordmark } from "../Wordmark";

export type HeaderProps = HTMLAttributes<HTMLElement>;

export const Header: FC<HeaderProps> = (
  {
    className,
    id = "masthead",
    role = "banner"
  }
) => (
    <HeaderRoot id={id} className={className} role={role}>
      <h1>
        <Link href={"/"} passHref={true}>
          <a tabIndex={0}>
            <Wordmark />
          </a>
        </Link>
      </h1>
    </HeaderRoot>
  )
