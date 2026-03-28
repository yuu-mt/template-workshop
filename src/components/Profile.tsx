import Image from "next/image";
import { profile } from "../../data/portfolio";

export const Profile = () => {
  return (
    <section className="flex flex-col items-center gap-6 sm:flex-row p-6 rounded-lg">
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-gray-200">
        <Image
          src={profile.avatarUrl}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="mt-1 text-lg text-gray-600">{profile.role}</p>
        <div className="mt-3 leading-relaxed text-gray-700 space-y-2">
            {profile.bio.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
        </div>
      </div>
    </section>
  );
};
