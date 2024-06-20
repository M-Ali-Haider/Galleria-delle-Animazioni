import Heading from "@/components/Heading";
import MagneticGSAP from "@/components/magnetic-gsap";
export default function MagneticGSAPPage() {
  return (
    <>
      <Heading heading={"Magnetic (GSAP)"} />
      <div className="w-screen h-screen flex items-center justify-center">
        <MagneticGSAP>
          <button className=" h-56 w-56 rounded-full bg-black text-white">
            Button
          </button>
        </MagneticGSAP>
      </div>
    </>
  );
}
