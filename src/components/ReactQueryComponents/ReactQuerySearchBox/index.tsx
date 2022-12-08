import { usePokemon } from "../../../stores/reactQueryStore";

export default function ReactQuerySearchBox() {
  const { search, setSearch } = usePokemon();
  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Pesquise um Pokemon"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}