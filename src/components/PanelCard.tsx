"use client";

export default function PanelCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full h-[25rem] xl:h-96 panel-card p-4 xl:p-8 relative max-w-80">
      <h3 className="text-xl lg:text-2xl text-white font-helvetica font-bold">
        {title}
      </h3>
      <p className="text-xl lg:text-2xl text-white font-helvetica italic absolute top-[18rem] right-10 left-10">
        {description}
      </p>
    </div>
  );
}
