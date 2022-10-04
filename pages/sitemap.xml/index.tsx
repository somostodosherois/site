import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import fs from "fs";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allPosts = await fetch('https://sth.org.br/missions.php').then(res => res.json());

  const heros = allPosts.map(({ slug }) => ({
    loc: `https://sth.org.br/missao/${slug}`,
    lastmod: new Date().toISOString(),
  }))

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "[uid].js",
        "missao",
        "_document.js",
        "_error.js",
        "sitemap.xml",
        "slice-simulator.jsx",
        "api"
      ].includes(staticPage);
    })
    .map((staticPagePath) => ({
      loc: `https://sth.org.br/${staticPagePath}`,
      lastmod: new Date().toISOString(),
    }));

  const fields = staticPages.concat(heros)
  return getServerSideSitemap(ctx, fields)
}

export default () => { }