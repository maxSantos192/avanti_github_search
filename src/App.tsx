import { useState, FormEvent } from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import ProfileCard from "./components/ProfileCard";
import ErrorMessage from "./components/ErrorMessage";

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

        <SearchForm
          username={username}
          setUsername={setUsername}
          onSearch={handleSearch}
        />
        {profile && <ProfileCard profile={profile} />}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

export default App;
