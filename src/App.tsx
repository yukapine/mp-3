import CharacterList from "./components/CharacterList.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Character } from "./interfaces/Characters.ts";

const ParentDiv = styled.div`
    width: 90vw;
    margin: auto;
`;

export default function App() {
  const [data, setData] = useState<Character[]>([]);
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch(`api/characters`);
      const results: Character[] = await rawData.json();
      setData(results.filter((c) => c.img && c.psiPowers && c.psiPowers.length > 0));
    }
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <CharacterList data={data} />
    </ParentDiv>
  );
}
