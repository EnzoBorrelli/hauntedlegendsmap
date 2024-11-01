import Image from "next/image";
import React from "react";

interface PinProps {
  onClick: () => void;
  icon: string;
}

export default function CustomPin({ onClick, icon }: PinProps) {
  return (
    <button onClick={onClick}>
      <Image src={icon} alt="pinIcon" width={35} height={35} />
    </button>
  );
}
