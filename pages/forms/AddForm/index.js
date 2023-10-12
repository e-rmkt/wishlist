import { Header } from "@/components/Layout/Header/Header.styled";
import ReturnButton from "@/components/ReturnButton";
import AddForm from "@/components/AddForm";

export default function AddItemForm() {
  return (
    <>
      <Header>
        <h1>My Bulletin</h1>
      </Header>
      <main>
        <ReturnButton />
        <AddForm />
      </main>
    </>
  );
}
