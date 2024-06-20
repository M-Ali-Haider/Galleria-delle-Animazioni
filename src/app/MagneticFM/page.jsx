import Heading from "@/components/Heading";
import MagneticFM from "@/components/magnetic-fm";

export default function MagneticFMPage() {
  return (
    <>
      <Heading heading={"Magnetic (Framer Motion)"} />
      <div className="w-screen h-screen flex items-center justify-center">
        <MagneticFM>
          <button className=" h-full w-full bg-black text-white pointer-events-none">
            Button
          </button>
        </MagneticFM>
      </div>
    </>
  );
}
