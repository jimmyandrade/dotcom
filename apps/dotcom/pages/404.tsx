import { FormHTMLAttributes, InputHTMLAttributes, useState } from "react";
import Link from "next/link";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {

  type SearchFormProps = FormHTMLAttributes<HTMLFormElement>;
  type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

  const [searchInputValue, setSearchInputValue] = useState<SearchInputProps["value"]>("");

  const handleSearchInputValueChange: SearchInputProps["onChange"] = ({ target: { value } }) => {
    setSearchInputValue(value.toString());
  };

  const handleSearchFormSubmit: SearchFormProps["onSubmit"] = (event) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const action = formElement.getAttribute("action");
    const formTarget = formElement.getAttribute("target");
    const url = `${action}?q=${searchInputValue} site:jimmyandrade.com`;

    window.open(url, formTarget, "noopener,noreferrer");
  }

  return (
    <article>
      <h1>Página não encontrada</h1>
      <blockquote>
        <p>Só eu sei o quanto eu sofri pra chegar até aqui <ins>e não encontrar nada interessante</ins>.</p>
      </blockquote>
      <p>A página que você está procurando não existe. Aliás, como você chegou aqui?</p>
      <blockquote>
        <p>
          Não sei seu nome<br />
          De onde é que vem<br />
          O que faz aqui<br />
          Se tá tudo bem&hellip;<br />
          Mas eu só sei que quando eu te vi, tive certeza que era <ins>o erro 404</ins>
        </p>
      </blockquote>
      <h2>Eu me perdi, vamos tentar&hellip;</h2>
      <ul>
        <li>
          Voltar para a <Link href={"/"}>página inicial</Link> provavelmente vai te ajudar;
        </li>
        <li>
          <form action={"https://www.google.com/search"} method={"GET"} onSubmit={handleSearchFormSubmit} target={"search"}>
            Ou&hellip; <label htmlFor={"q"}>pesquisar aqui no site</label>:<br />
            <input id={"q"} name={"q"} onChange={handleSearchInputValueChange} type={"search"} value={searchInputValue} />
            <button type={"submit"}>Buscar</button>
          </form>
        </li>
      </ul>
    </article>
  );

};

export default NotFoundPage;
