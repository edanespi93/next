import {NextPage} from "next";
import Head from "next/head";
import React, {FC} from "react";
import {Navbar} from "../ui";

type props = {
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

//export const Layout: FC<{ title: string }> = ({ children, title })
export const Layout: FC<props> = ({children, title}) => {
  //console.log({origin});
  return (
    <>
      <Head>
        <title> {title || "Pokemon App"}</title>
        <meta name='author' content='Andrés Escobar' />
        <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title} pokemon pokedex `} />

        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta property='og:description' content={`Esta es la página sobre ${title}`} />
        <meta property='og:image' content={`${origin}/banner.png`} />
      </Head>

      <Navbar />
      <main style={{margin: "0 20px"}}>{children}</main>
    </>
  );
};
