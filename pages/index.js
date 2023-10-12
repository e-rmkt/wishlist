import ItemList from "@/components/ItemList/ItemList";
import CreateItem from "@/components/CreateItem";
import { Header } from "@/components/Layout/Header/Header.styled";

export default function HomePage() {
  return (
    <>
      <Header>
        <h1>My Bulletin</h1> <CreateItem />
      </Header>
      <main>
        <ItemList />
      </main>
    </>
  );
}
