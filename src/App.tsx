import SearchForm from "./components/SearchForm";
import ProfileCard from "./components/ProfileCard";
import ErrorMessage from "./components/ErrorMessage";
import { useGithubProfile } from "./hooks/useGithubProfile";

function App() {
  const { username, setUsername, profile, error, handleSearch } =
    useGithubProfile();

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
