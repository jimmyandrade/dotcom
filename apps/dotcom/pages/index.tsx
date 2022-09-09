import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import styled from "styled-components";

const StyledPage = styled.article``;

export const Index: NextPage = () => <StyledPage>
  {/* <h1>Página inicial</h1>*/}
  <div>
    <ul style={{ display: "grid", lineHeight: 0, rowGap: 0 }}>
      <li style={{ gridColumn: 1 }}>
        <Link href={"/mais-uma-voz"} passHref={true}>
          <a>
            <Image
              alt={"Pabllo Vittar, drag queen de cabelos longos e unhas azuis, e Jimmy Andrade, usando uma roupa larana e azul, ambas com as mãos no queixo, estão em um fundo amarelo"}
              height={1920}
              src={"/media/songs/mais-uma-voz/mais-uma-voz.png"}
              width={1920}
            />
          </a>
        </Link>
      </li>
      <li style={{ gridColumn: 2 }}>
        <Link href={"/o-que-me-faz-maior"} passHref={true}>
          <a>
            <Image
              alt={'Jimmy Andrade, com cabelo rosa e barba, olha para frente. À sua esquerda, está escrito "O Que Me Faz Maior" em uma fonte azul'}
              height={3000}
              src={"/media/songs/o-que-me-faz-maior/encarte-promocional.png"}
              width={3000}
            />
          </a>
        </Link>
      </li>
      <li style={{ gridColumn: 1 }}>
        <Link href={"/duvida"} passHref={true}>
          <a>
            <Image height={1080} src={"/media/songs/duvida/fullhd-banner.png"} width={1920} />
          </a>
        </Link>
      </li>
      <li style={{ gridColumn: 2 }}>
        <Link href={"/um-plano"} passHref={true}>
          <a>
            <Image height={1080} src={"/media/songs/um-plano/full-hd-banner.png"} width={1920} />
          </a>
        </Link>
      </li>
    </ul>
  </div>
</StyledPage>;

export default Index;
