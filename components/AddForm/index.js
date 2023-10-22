import Link from "next/link";
import { StyledForm, StyledLabel } from "./AddForm.styled";

export default function AddForm() {
  return (
    <StyledForm>
      <StyledLabel>
        Name
        <input name="name" placeholder="Item Name" minLength={3} required />
      </StyledLabel>
      <StyledLabel>
        Price
        <input name="price" placeholder="Item Price" minLength={3} required />
      </StyledLabel>
      <StyledLabel>
        Product ID
        <input name="product-id" placeholder="Item Product ID" minLength={3} />
      </StyledLabel>
      <StyledLabel>
        Link
        <input type="url" name="url" placeholder="Page Link" minLength={3} />
      </StyledLabel>
      <StyledLabel>
        Collections
        <select name="collections">
          <option selected hidden disabled>
            Select a collection
          </option>
        </select>
      </StyledLabel>
      <StyledLabel>
        Image
        <input type="file" name="image" placeholder="Item Image" />
      </StyledLabel>
      <button type="submit">Add Item</button>
      <Link href={"/"}>Cancel</Link>
    </StyledForm>
  );
}
