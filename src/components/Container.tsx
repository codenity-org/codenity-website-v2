import React from "react";

interface Props {
  children: React.ReactNode;
}
export const Container = ({ children }: Props) => {
  return <div className="container md:max-w-[1140px] m-auto">{children}</div>;
};
