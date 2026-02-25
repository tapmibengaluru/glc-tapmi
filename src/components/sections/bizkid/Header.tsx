"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 container relative z-[99999]">
      {/* <Image
          src={"/images/logo-mob.svg"}
          className=" lg:hidden"
          alt="logo"
          width={162}
          height={51}
        /> */}
      <img
        src={"/images/logo.svg"}
        className="w-32 h-full lg:w-56 object-contain"
        alt="logo"
        width={239}
        height={63}
      />
      <img
        src={"/bizkid/mahe-logo.svg"}
        alt="logo"
        width={320}
        height={48}
        className=" object-contain w-32 h-full lg:w-56"
      />
    </header>
  );
}
