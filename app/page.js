import Link from "next/link";
import styles from "./styles.module.css";
import CounterButton from "./componentes/CounterButton";

const fetchPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export default async function Home() {
  const pokemons = await fetchPokemons();

  return (
    <>
      <h1 className={styles.home}>Pokemons Page</h1>
      <CounterButton />
      <ol>
        {pokemons.map((i) => {
          console.log(i.name);
          return (
            <li key={i.url}>
              <Link href={`/${i.name}?name=${i.name}`}>{i.name}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
