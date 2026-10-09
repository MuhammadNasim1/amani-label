import { useState } from "react";

const products = [
  {
    _id: "abaya-1",
    name: "Classic Black Abaya",
    category: "Abayas",
    price: 2499,
    image: "/images/Classic-BlackAbaya.png",
  },
  {
    _id: "abaya-2",
    name: "Everyday Beige Abaya",
    category: "Abayas",
    price: 2799,
    image: "/images/Beige-Abaya.png",
  },
  {
    _id: "hijab-1",
    name: "Soft Chiffon Hijab",
    category: "Hijabs",
    price: 499,
    image: "/images/Chiffon-shall.png",
  },
  {
    _id: "set-1",
    name: "Modest Co-ord Set",
    category: "Co-ord Sets",
    price: 3299,
    image: "/images/Modest-cordset.png",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Shop({ onAddToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [notice, setNotice] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return 0;
    });

  function handleAdd(product) {
    onAddToCart(product);
    setNotice(`${product.name} added to your cart.`);
  }

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#342b24]">
      <section className="border-b border-[#e5dacd] px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em]">Amani Label</p>
        <h1 className="mt-4 font-serif text-4xl md:text-6xl">
          Everyday elegance
        </h1>
        <p className="mt-4 text-[#75685b]">
          Discover modestwear made for your everyday moments.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <label className="md:w-80">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search our collection..."
              className="w-full rounded-lg border border-[#d9ccbd] bg-white px-4 py-3"
            />
          </label>

          <label>
            <span className="sr-only">Sort products</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="w-full rounded-lg border border-[#d9ccbd] bg-white px-4 py-3"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
            </select>
          </label>
        </div>

        <div className="my-6 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-2 text-sm ${
                category === item
                  ? "border-[#493c30] bg-[#493c30] text-white"
                  : "border-[#d9ccbd] bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p role="status" className="mb-4 min-h-6 text-sm text-green-800">
          {notice}
        </p>

        {filteredProducts.length === 0 ? (
          <p className="py-16 text-center">
            No products found. Try another search or category.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product._id}
                className="overflow-hidden rounded-xl border border-[#e5dacd] bg-white"
              >
                <div className="aspect-[3/4] bg-[#eae1d6]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-[#75685b]">
                    {product.category}
                  </p>
                  <h2 className="mt-2 font-serif text-xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 font-medium">
                    {formatPrice(product.price)}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleAdd(product)}
                    className="mt-5 w-full rounded-lg bg-[#493c30] px-4 py-3 text-white hover:bg-[#30271f]"
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}