import { Link } from "react-router-dom";

function ProfileCard({ name, linkedin, email, img, position }) {
  return (
    <div class="w-[250px] h-full rounded overflow-hidden shadow-lg">
      <img class="w-full h-[250px] object-cover" src={img} alt={img} />
      <div class="px-6 py-4 bg-white">
        <div class="font-bold text-xl mb-2">{name}</div>
        <div class="font-bold text-l mb-2">{position}</div>
        <Link to={linkedin}>
          <div class="underline text-blue-500">LinkedIn</div>
        </Link>
        <div> </div>
        <Link to={email}>
          <div class="underline text-blue-500">Email</div>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
