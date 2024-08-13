function ServiceCard({ name, path, desc }) {
  return (
    <div class="max-w-[20rem] overflow-hidden shadow-lg bg-slate-200 rounded-xl mx-[1em] py-[1em]">
      <img class="w-[50px] mx-auto" src={path} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <div className="">{desc}</div>
      </div>
    </div>
  );
}

export default ServiceCard;
