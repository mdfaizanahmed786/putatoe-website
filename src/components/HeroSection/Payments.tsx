import { rechargeMethods } from "../../utils/rechargeMethods";
import React from "react";

interface IconProps {
  Icon: React.ElementType;
  title: string;
}

const Payments = (): JSX.Element => {
  return (
    <div className="bg-white px-4 py-8 rounded-lg shadow-md">
      <div className="grid grid-cols-4 place-items-center gap-4">

      {rechargeMethods.map((method) => (
        <Icons key={method.id} Icon={method.icon} title={method.name} />
      ))}

      </div>
    </div>
  );
};

const Icons = ({ Icon, title }: IconProps): JSX.Element => {
  return (
    <div className="space-y-2 flex flex-col items-center cursor-pointer">
      <Icon className="text-primary w-10 h-10"/>
      <div className="text-primary text-center text-xs md:text-base">{title}</div>
    </div>
  );
};

export default Payments;
