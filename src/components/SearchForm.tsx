import { FormEvent } from "react";

interface SearchFormProps {
  username: string;
  setUsername: (value: string) => void;
  onSearch: (e: FormEvent) => void;
}

function SearchForm({ username, setUsername, onSearch }: SearchFormProps) {
  return (
    <form
      onSubmit={onSearch}
      className="flex w-full max-w-lg rounded-lg bg-white"
    >
      <input
        className="flex-grow rounded-lg p-3 text-xl placeholder-black focus:outline-none"
        type="text"
        placeholder="Digite um usuário do Github"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center justify-center rounded-md bg-blue-600 p-4 hover:bg-blue-700"
      >
        <img src="/src/assets/search.svg" alt="Search" className="h-6 w-6" />
      </button>
    </form>
  );
}

export default SearchForm;
