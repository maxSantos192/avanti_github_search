interface ProfileCardProps {
  profile: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
  };
}

function ProfileCard({ profile }: ProfileCardProps) {
  return (
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
  );
}

export default ProfileCard;
