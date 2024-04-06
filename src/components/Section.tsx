import React from "react";
interface Props {
  children: React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}
export const Section = ({ children, title, description }: Props) => {
  return (
    <section className="pt-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-3">
          {title}
        </h2>
        {description && <p className="text-[#7b838a] italic">{description}</p>}
      </div>
      {children}
    </section>
  );
};
