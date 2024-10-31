import HauntedMap from "@/components/hauntedMap";


export default function Home() {
  return (
    <main className="size-full flex-col items-center bg-gradient-to-t from-slate-900 via-orange-900 to-slate-900 justify-center py-4 px-10 text-orange-300">
      <h1 className="text-center text-4xl mb-4">Haunted Legends Map</h1>
      <HauntedMap />
    </main>
  );
}
