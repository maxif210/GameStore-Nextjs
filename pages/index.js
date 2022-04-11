import Banner from "../components/Banner";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Moba from "../components/Moba";
import NewRelease from "../components/NewRelease";
import ReleaseDate from "../components/ReleaseDate";
import SalesAndDeals from "../components/SalesAndDeals";




export default function Home({ gamesRelevance, gamesPopularity,gamesReleaseDate, gamesSalesAndDeals,gamesMoba  }) {
  
  return (
    <>
      <Layout title="Inicio">
        <Header  gamesRelevance={gamesRelevance}/>

        <NewRelease gamesPopularity={gamesPopularity} />
        <Banner background={"/psnowadd.webp"} />
        <ReleaseDate gamesReleaseDate= {gamesReleaseDate}/>
        <SalesAndDeals gamesSalesAndDeals={gamesSalesAndDeals}/>
        <Banner background={"/banner.webp"} />
        <Moba gamesMoba= {gamesMoba} />
        
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlRelevance = `https://www.freetogame.com/api/games?category=horror`;
  const resRelevance = await fetch(urlRelevance);
  const gamesRelevance = await resRelevance.json();
  
  const urlPopularity = `https://www.freetogame.com/api/games?sort-by=popularity`;
  const resPopularity = await fetch(urlPopularity);
  const gamesPopularity = await resPopularity.json();

  const urlReleaseDate = `https://www.freetogame.com/api/games?sort-by=release-date`;
  const resReleaseDate = await fetch(urlReleaseDate);
  const gamesReleaseDate = await resReleaseDate.json();

  const urlSalesAndDeals = `https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc`;
  const resSalesAndDeals = await fetch(urlSalesAndDeals);
  const gamesSalesAndDeals = await resSalesAndDeals.json();
  
  const urlMoba = `https://www.freetogame.com/api/games?category=moba`;
  const resMoba = await fetch(urlMoba);
  const gamesMoba = await resMoba.json();

  return {
    props: {
      gamesRelevance,
      gamesPopularity,
      gamesReleaseDate,
      gamesSalesAndDeals,
      gamesMoba
    },
  };
}
