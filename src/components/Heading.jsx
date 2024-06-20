export default function Heading({ heading }) {
  return (
    <div className="fixed z-10 top-3 left-3 text-3xl md:text-4xl md:top-5 md:left-8 font-semibold text-black">
      {heading}
    </div>
  );
}
