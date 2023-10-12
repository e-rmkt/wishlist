export default function AddForm() {
  return (
    <form>
      <label>
        Name
        <input name="name" placeholder="Item Name" minLength={3} required />
      </label>
      <label>
        Price
        <input name="price" placeholder="Item Price" minLength={3} required />
      </label>
      <label>
        Product ID
        <input name="product-id" placeholder="Item Product ID" minLength={3} />
      </label>
      <label>
        Link
        <input type="url" name="url" placeholder="Page Link" minLength={3} />
      </label>
      <label>
        Collections
        <select name="collections">
          <option selected hidden disabled>
            Select a collection
          </option>
        </select>
      </label>
      <label>
        Image
        <input type="file" name="image" placeholder="Item Image" />
      </label>
    </form>
  );
}
