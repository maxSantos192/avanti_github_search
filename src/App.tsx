import { useState, FormEvent } from "react";
import axios from "axios";

interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!username) return;
    try {
      const response = await axios.get<GithubProfile>(
        `https://api.github.com/users/${username}`,
      );
      setProfile(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setProfile(null);
      setError(
        "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente",
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/src/assets/background.png')] bg-cover bg-center">
      <div className="mx-5 flex h-[537px] w-full max-w-[1156px] flex-col items-center bg-black p-6">
        <img
          className="mx-5 mb-6 max-w-[584px] object-cover"
          src="/src/assets/logo.svg"
          alt="Github"
        />

        <form
          onSubmit={handleSearch}
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
            <img
              src="/src/assets/search.svg"
              alt="Search"
              className="h-6 w-6"
            />
          </button>
        </form>

        {profile && (
          <div className="mt-9 flex w-full max-w-[804px] items-center gap-6 rounded-lg bg-gray-200 p-6">
            <img
              src={profile.avatar_url}
              alt={profile.name}
              className="h-56 w-56 rounded-full border-[3px] border-blue-500 object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-blue-600">
                {profile.name || profile.login}
              </h2>
              <p className="text-gray-700">
                {profile.bio || "Este usuário não possui uma bio."}
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-9 w-full max-w-[710px] rounded-lg bg-gray-200 p-6">
            <p className="text-center text-red-600">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
