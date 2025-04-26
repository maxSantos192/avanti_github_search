import { useState, FormEvent } from "react";
import axios from "axios";

export interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

export function useGithubProfile() {
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
    } catch {
      setProfile(null);
      setError(
        "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente",
      );
    }
  };

  return {
    username,
    setUsername,
    profile,
    error,
    handleSearch,
  };
}
