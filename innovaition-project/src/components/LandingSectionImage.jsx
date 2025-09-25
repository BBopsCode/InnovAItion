export default function LandingSectionImage({ image }) {
  return (
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={image}
        alt="Landing Section"
        className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl"
      />
    </div>
  );
}
