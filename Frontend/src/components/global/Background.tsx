import Matrix from "./Matrix";

export default function Background( { link, opacity }: { link: string, opacity: number } ) {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={link} type="video/mp4" />
      </video>
      {/* <Matrix/> */}
      <div className={`absolute top-0 left-0 w-full h-full bg-black/${opacity}`} />
    </div>
  );
};
