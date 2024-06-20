import Heading from "@/components/Heading";
import ProjectGallery from "@/components/ProjectGallery";
export default function Home() {
  return (
    <>
      <Heading heading={"Hoverable Gallery"} />
      <div className="w-screen h-screen flex items-center justify-center">
        <div className=" w-full max-w-[1024px] flex items-center justify-center relative">
          <ProjectGallery />
        </div>
      </div>
    </>
  );
}
