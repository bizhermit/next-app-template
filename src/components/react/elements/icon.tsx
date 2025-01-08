import { type HTMLAttributes } from "react";
import "../../styles/elements/icon.scss";
import { joinClassNames } from "./utilities";

type IconOptions = {};

type IconProps = OverwriteAttrs<Omit<HTMLAttributes<SVGSVGElement>, "children">, IconOptions>;

const attrs = (p: IconProps) => {
  return {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w2.5.org/2000/svg",
    ...p,
    className: joinClassNames("icon", p.className),
  };
};

export const HogeIcon = (p: IconProps) => (
  <svg {...attrs(p)} viewBox="-10 -10 120 120">

    <mask id="myMask">
      <rect x="0" y="0" width="100" height="100" fill="white" />
      <path
        d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
        fill="black" />
    </mask>
    <polygon points="-10,110 110,110 110,-10" fill="orange" />
    <circle cx="50" cy="50" r="50" fill="purple" mask="url(#myMask)" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.25,2.25a0.75 0.75 0 0 1 1.5,0v7h7a0.75 0.75 0 0 1 0,1.5h-7v7a0.75 0.75 0 0 1 -1.5,0v-7h-7a0.75 0.75 0 0 1 0,-1.5h7Z" />
  </svg>
);

export const PlusCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M0.25,10a9.75 9.75 0 0 0 19.5,0a9.75 9.75 0 0 0 -19.5,0l1.25,0a7.75 7.75 0 0 1 17,0a7.75 7.75 0 0 1 -17,0Z" />
    <path d="M9.25,4.25a0.75 0.75 0 0 1 1.5,0v5h5a0.75 0.75 0 0 1 0,1.5h-5v5a0.75 0.75 0 0 1 -1.5,0v-5h-5a0.75 0.75 0 0 1 0,-1.5h5Z" />
  </svg>
);

export const PlusCircleFillIcon = (p: IconProps) => (
  <svg {...attrs(p)} data-fill="true">
    <path d="M0.25,10a9.75 9.75 0 0 0 19.5,0a9.75 9.75 0 0 0 -19.5,0Z M9.25,4.25a0.75 0.75 0 0 1 1.5,0v5h5a0.75 0.75 0 0 1 0,1.5h-5v5a0.75 0.75 0 0 1 -1.5,0v-5h-5a0.75 0.75 0 0 1 0,-1.5h5Z" />
  </svg>
);

export const MinusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2.25,9.25h15.5a0.75 0.75 0 0 1 0,1.5h-15.5a0.75 0.75 0 0 1 0,-1.5Z" />
  </svg>
);

export const MinusCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M0.25,10a9.75 9.75 0 0 0 19.5,0a9.75 9.75 0 0 0 -19.5,0l1.25,0a7.75 7.75 0 0 1 17,0a7.75 7.75 0 0 1 -17,0Z" />
    <path d="M4.25,9.25h11.5a0.75 0.75 0 0 1 0,1.5h-11.5a0.75 0.75 0 0 1 0,-1.5Z" />
  </svg>
);

export const MinusCircleFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M0.25,10a9.75 9.75 0 0 0 19.5,0a9.75 9.75 0 0 0 -19.5,0Z M4.25,9.25h11.5a0.75 0.75 0 0 1 0,1.5h-11.5a0.75 0.75 0 0 1 0,-1.5Z" />
  </svg>
);

export const CrossIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M9.25,1.25a0.75 0.75 0 0 1 1.5,0v8h8a0.75 0.75 0 0 1 0,1.5h-8v8a0.75 0.75 0 0 1 -1.5,0v-8h-8a0.75 0.75 0 0 1 0,-1.5h8Z"
      transform="rotate(45,10,10)"
    />
  </svg>
);

export const CrossCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M0.25,10a9.75 9.75 0 0 0 19.5,0a9.75 9.75 0 0 0 -19.5,0l1.25,0a7.75 7.75 0 0 1 17,0a7.75 7.75 0 0 1 -17,0Z" />
    <path
      d="M9.25,4.25a0.75 0.75 0 0 1 1.5,0v5h5a0.75 0.75 0 0 1 0,1.5h-5v5a0.75 0.75 0 0 1 -1.5,0v-5h-5a0.75 0.75 0 0 1 0,-1.5h5Z"
      transform="rotate(45,10,10)"
    />
  </svg>
);

export const CrossCircleFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M0.25,10a9.75 9.75 0 0 0 19.5,0a9.75 9.75 0 0 0 -19.5,0Z M9.25,4.25a0.75 0.75 0 0 1 1.5,0v5h5a0.75 0.75 0 0 1 0,1.5h-5v5a0.75 0.75 0 0 1 -1.5,0v-5h-5a0.75 0.75 0 0 1 0,-1.5h5Z"
      transform="rotate(45,10,10)"
    />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="
      M2,4.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z
      M2,9.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z
      M2,14.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z
    " />
  </svg>
);

export const MenuLeftIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z M3,9.25h15a0.75 0.75 0 0 1 0,1.5h-15a0.75 0.75 0 0 1 0,-1.5Z M2,14.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z" />
    <path
      d="M3,5.25v4h4a0.75 0.75 0 0 1 0,1.5h-5.5v-5.5a0.75 0.75 0 0 1 1.5,0Z"
      transform="rotate(45,2.25,10)"
    />
  </svg>
);

export const MenuRightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z M2,9.25h15a0.75 0.75 0 0 1 0,1.5h-15a0.75 0.75 0 0 1 0,-1.5Z M2,14.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z" />
    <path
      d="M17,5.25v4h-4a0.75 0.75 0 0 0 0,1.5h5.5v-5.5a0.75 0.75 0 0 0 -1.5,0Z"
      transform="rotate(-45,17.75,10)"
    />
  </svg>
);

export const MenuLeftRightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z M3,9.25h14a0.75 0.75 0 0 1 0,1.5h-14a0.75 0.75 0 0 1 0,-1.5Z M2,14.25h16a0.75 0.75 0 0 1 0,1.5h-16a0.75 0.75 0 0 1 0,-1.5Z" />
    <path
      d="M3,5.25v4h4a0.75 0.75 0 0 1 0,1.5h-5.5v-5.5a0.75 0.75 0 0 1 1.5,0Z"
      transform="rotate(45,2.25,10)"
    />
    <path
      d="M17,5.25v4h-4a0.75 0.75 0 0 0 0,1.5h5.5v-5.5a0.75 0.75 0 0 0 -1.5,0Z"
      transform="rotate(-45,17.75,10)"
    />
  </svg>
);

export const KebabMenuIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M8.5,4a1.5 1.5 0 0 0 3,0a1.5 1.5 0 0 0 -3,0Z M8.5,10a1.5 1.5 0 0 0 3,0a1.5 1.5 0 0 0 -3,0Z M8.5,16a1.5 1.5 0 0 0 3,0a1.5 1.5 0 0 0 -3,0Z" />
  </svg>
);

export const MeatballsMenuIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M4,8.5a1.5 1.5 0 0 0 0,3a1.5 1.5 0 0 0 0,-3ZM10,8.5a1.5 1.5 0 0 0 0,3a1.5 1.5 0 0 0 0,-3ZM16,8.5a1.5 1.5 0 0 0 0,3a1.5 1.5 0 0 0 0,-3Z" />
  </svg>
);

export const ChocolateMenuIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="
      M1.75,0.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
      M8.25,0.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
      M14.75,0.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
      M1.75,7.25h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
      M8.25,7.25h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
      M14.75,7.25h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
      M1.75,13.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
      M8.25,13.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
      M14.75,13.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z m0.75,1.25a0.5 0.5 0 0 0 -0.5,0.5v2a0.5 0.5 0 0 0 0.5 0.5h2a0.5 0.5 0 0 0 0.5,-0.5v-2a0.5 0.5 0 0 0 -0.5,-0.5Z
    " />
  </svg>
);

export const ChocolateMenuFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="
      M1.75,0.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
      M8.25,0.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
      M14.75,0.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
      M1.75,7.25h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
      M8.25,7.25h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
      M14.75,7.25h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
      M1.75,13.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
      M8.25,13.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
      M14.75,13.75h3.5a1 1 0 0 1 1,1v3.5a1 1 0 0 1 -1,1h-3.5a1 1 0 0 1 -1,-1v-3.5a1 1 0 0 1 1,-1Z
    " />
  </svg>
);

export const LeftIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M6,2a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z"
      transform="rotate(45,10,10)"
    />
  </svg>
);

export const LeftFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M6,2v12h12a0.5 0.5 0 0 0 0.5,-.75l-11.75,-11.75a0.5 0.5 0 0 0 -0.75,0.5Z"
      transform="rotate(45,10,10)"
    />
  </svg>
);

export const DoubleLeftIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M4,4a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z M8,0a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z"
      transform="rotate(45,10,10)"
    />
  </svg>
);

export const DoubleLeftFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M4,4a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z M8,0v12h12a0.5 0.5 0 0 0 0.5,-.75l-11.75,-11.75a0.5 0.5 0 0 0 -0.75,0.5Z"
      transform="rotate(45,10,10)"
    />
  </svg>
);

export const RightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M6,2a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z"
      transform="rotate(-135,10,10)"
    />
  </svg>
);

export const RightFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M6,2v12h12a0.5 0.5 0 0 0 0.5,-.75l-11.75,-11.75a0.5 0.5 0 0 0 -0.75,0.5Z"
      transform="rotate(-135,10,10)"
    />
  </svg>
);

export const DoubleRightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M4,4a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z M8,0a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z"
      transform="rotate(-135,10,10)"
    />
  </svg>
);

export const DoubleRightFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M4,4a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z M8,0v12h12a0.5 0.5 0 0 0 0.5,-.75l-11.75,-11.75a0.5 0.5 0 0 0 -0.75,0.5Z"
      transform="rotate(-135,10,10)"
    />
  </svg>
);

export const UpIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M6,2a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z"
      transform="rotate(135,10,10)"
    />
  </svg>
);

export const UpFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M6,2v12h12a0.5 0.5 0 0 0 0.5,-.75l-11.75,-11.75a0.5 0.5 0 0 0 -0.75,0.5Z"
      transform="rotate(135,10,10)"
    />
  </svg>
);

export const DoubleUpIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M4,4a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z M8,0a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z"
      transform="rotate(135,10,10)"
    />
  </svg>
);

export const DoubleUpFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M4,4a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z M8,0v12h12a0.5 0.5 0 0 0 0.5,-.75l-11.75,-11.75a0.5 0.5 0 0 0 -0.75,0.5Z"
      transform="rotate(135,10,10)"
    />
  </svg>
);

export const DownIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M6,2a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z"
      transform="rotate(-45,10,10)"
    />
  </svg>
);

export const DownFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M6,2v12h12a0.5 0.5 0 0 0 0.5,-.75l-11.75,-11.75a0.5 0.5 0 0 0 -0.75,0.5Z"
      transform="rotate(-45,10,10)"
    />
  </svg>
);

export const DoubleDownIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M4,4a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z M8,0a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z"
      transform="rotate(-45,10,10)"
    />
  </svg>
);

export const DoubleDownFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path
      d="M4,4a0.75 0.75 0 0 1 1.5,0v10.5h10.5a0.75 0.75 0 0 1 0,1.5h-12Z M8,0v12h12a0.5 0.5 0 0 0 0.5,-.75l-11.75,-11.75a0.5 0.5 0 0 0 -0.75,0.5Z"
      transform="rotate(-45,10,10)"
    />
  </svg>
);

export const LeftRightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M7,5 L2,10 7,15 M13,5 L18,10 13,15" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UpDownIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M5,7 L10,2 15,7 M5,13 L10,18 15,13" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CalendarIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V18H2Z M5,2V5Z M15,2V5Z M2,7H18Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TodayIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V18H2Z M5,2V5Z M15,2V5Z M2,7H18Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="11" y="11" width="2" height="2" strokeLinejoin="miter" strokeWidth="0.15rem" strokeLinecap="round" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="10" r="9" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10,4 L10,11 15,11" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ListIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18 M2,8H18 M2,12H18 M2,16H18" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const OrderListIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,4H18 M6,8H18 M6,12H18 M6,16H18" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="2.5" cy="4" r=".5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="2.5" cy="8" r=".5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="2.5" cy="12" r=".5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="2.5" cy="16" r=".5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SaveIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,2H15L18,5 18,18 2,18Z M5,2v4h8v-4z M5,18l0,-7 10,0 0,7" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UndoIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M4,3l0,5 5,0M4,8l2.5,-2.5a5 5 225 0 1 8 6l-6.5,6.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RedoIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M16,3l0,5 -5,0M16,8l-2.5,-2.5a5 5 315 1 0 -8 6l6.5,6.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClearAllIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4h16Z M2,8h16Z M2,12h9z M2,16h9z M14,12l4,4Z M14,16l4,-4" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CloudIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6.5,16a4.1 4.1 0 1 1 0 -8a3.9 3.9 -180 0 1 8,0v1a3 3.5 -90 0 1 0,7.1z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CloudDownloadIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6.5,16a4.1 4.1 0 1 1 0 -8a3.9 3.9 -180 0 1 8,0v1a3 3.5 -90 0 1 0,7.1M10 8v8M7 13l3,3 3,-3" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CloudUploadIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6.5,16a4.1 4.1 0 1 1 0 -8a3.9 3.9 -180 0 1 8,0v1a3 3.5 -90 0 1 0,7.1M10 11v6M7 12.5l3,-3 3,3" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="10" r="8" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CircleFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="10" r="8" fill="fill" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ReloadIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M17.5,2l0,5 -5,0M16.5,14a7.5 7.5 30 1 1 0,-8" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UnloadIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2.5,2l0,5 5,0M3.5,6a7.5 7.5 -150 1 1 0,8" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SyncIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M17,1.5l0,5 -5,0M2.5,9a7.5 7.5 -180 0 1 14,-3M3,18l0,-5 5,0M17.5,9.5a7.5 7.5 0 0 1 -14,4" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HomeIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,2 L19,10 16,10 16,18 12,18 12,13 8,13 8,18 4,18 4,10 1,10 10,2" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HomeFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,2 L19,10 16,10 16,18 12,18 12,13 8,13 8,18 4,18 4,10 1,10 10,2" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ElementIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,6 L2,10 6,14" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14,6 L18,10 14,14" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" x2="8" y1="5" y2="15" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SmileIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="10" r="8.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6.5" cy="8" r=".8" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="13.5" cy="8" r=".8" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.2,13a5 5 30 0 1 -8,0" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ButtonIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,5H18V13H2Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12,10L17,15 13.8,15 15,18.2 14.5,18.4 13.5,15 11,17Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExLinkIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M8,3H3V17H17V12 M12,2H18V8" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="18" x2="8" y1="2" y2="12" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z M5,5H15V8H5Z M5,10H12V12H5Z M5,14H15V15H5Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const NavContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z M2,7H18 M8,7V17" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PopupIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1,2H19V18H1Z" opacity=".6" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5,4.5H16.5V15.5H3.5Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FormIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,3H3V17H17V10 M16,2L8,10 8,12 10,12 18,4Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FormItemIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,8H2V16H18V10 M16,2L8,10 8,12 10,12 18,4Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MagnifyingGlassIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="8" cy="8" r="7" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="13" x2="18" y1="13" y2="18" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MagnifyingGlassPlusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="8" cy="8" r="7" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="13" x2="18" y1="13" y2="18" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="4" x2="12" y1="8" y2="8" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line y1="4" y2="12" x1="8" x2="8" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MagnifyingGlassMinusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="8" cy="8" r="7" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="13" x2="18" y1="13" y2="18" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="4" x2="12" y1="8" y2="8" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TextBoxIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M7,7H2V13H7 M13,7H18V13H13 M10,5L10,15 M9,4H6M11,4H14 M9,16H6M11,16H14" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TabContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z M2,7H18 M10,3V7" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SlideContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M4,4H16V16H4Z M1,4V16 M19,4V16" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SplitContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z M10,3V17" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LoadingIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="10" x2="10" y1="1" y2="5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="1" x2="5" y1="10" y2="10" opacity="0.9" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="3.3" x2="6.4" y1="3.3" y2="6.4" opacity="0.8" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="3.3" x2="6.4" y1="16.7" y2="13.6" opacity="0.7" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="10" x2="10" y1="19" y2="15" opacity="0.6" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16.7" x2="13.6" y1="16.7" y2="13.6" opacity="0.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="19" x2="15" y1="10" y2="10" opacity="0.4" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16.7" x2="13.6" y1="3.3" y2="6.4" opacity="0.3" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LabelIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,5H14L18,10 14,15H2Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LabelFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,5H14L18,10 14,15H2Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StepperIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1,7H7.5L9.5,10 7.5,13H1L3,10Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5,7H17L19,10 17,13H10.5L13,10Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VerticalDividerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="10" x2="10" y1="3" y2="17" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HorizontalDividerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="3" x2="17" y1="10" y2="10" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TooltipIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z" opacity=".6" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4,7H16V12L12,12L10,14L8,12H4Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BadgeIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,2H2V18H18V10" opacity=".6" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="6" r="5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CardIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V16H2Z M2,8H18" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SignInIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,6.5V2H17V18H6V13.5 M2,10H12 M10,6 14,10 10,14" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SignOutIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M11,6.5V2H2V18H11V13.5 M18,10H8 M15,6 19,10 15,14" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FolderIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1.5,3.5 7,3.5 9,5.5H18.5V17.5H1.5Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FolderAddIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1.5,3.5 7,3.5 9,5.5H18.5V17.5H1.5Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" x2="13" y1="11.5" y2="11.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line y1="8.5" y2="14.5" x1="10" x2="10" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FileIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M3,1.5 11.5,1.5 17,7V18.5H3Z M11,1.5V7H17" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FileFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M3,1.5 11.5,1.5 17,7V18.5H3Z M11,1.5V7H17" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FileAddIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M3,1.5 11.5,1.5 17,7V18.5H3Z M11,1.5V7H17" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" x2="13" y1="11.5" y2="11.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line y1="8.5" y2="14.5" x1="10" x2="10" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExclamationIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.5,3 10.5,3 10.2,12.5 9.8,12.5Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="17" r=".8" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExclamationCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.5,5.5 10.5,5.5 10.2,11.5 9.8,11.5Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="14.5" r=".5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="9" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExclamationCircleFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1,10a4.5 4.5 0 0 0 18,0a4.5 4.5 0 0 0 -18,0Z M8.5,3.5 11.5,3.5 11.2,13 8.8,13Z M8.5,15a1.5 1.5 0 0 1 3,0a1.5 1.5 0 0 1 -3,0Z" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExclamationTriangleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.5,6.5 10.5,6.5 10.2,12 9.8,12Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="15" r=".5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10,1 19,18 1,18Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExclamationTriangleFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,1 1,18 19,18Z M8.5,5 11.5,5 11.2,14 8.8,14Z M8.5,16a1.5 1.5 0 0 1 3,0a1.5 1.5 0 0 1 -3,0Z" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExclamationDiamondIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.5,5.5 10.5,5.5 10.2,11.5 9.8,11.5Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="14.5" r=".5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10,1 19,10 10,19 1,10Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExclamationDiamondFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,1 1,10 10,19 19,10Z M8.5,4 11.5,4 11.2,13 8.8,13Z M8.5,15a1.5 1.5 0 0 1 3,0a1.5 1.5 0 0 1 -3,0Z" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const QuestionIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M 6,7 a 4 4 -180 1 1 4,4 M10,11V13" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="17" r=".8" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const QuestionCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M 7,7 a 3.2 3.2 -180 1 1 3,3 M10,10V11" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="14.5" r=".5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="9" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UserIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="6" r="4.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 2,19 a 8 8 -180 0 1 16,0" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UserFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="6" r="4.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 2,19 a 8 8 -180 0 1 16,0Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UserAddIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="6" r="4.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 2,19 a 8 8 -180 0 1 11,-7" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" x2="18" y1="16" y2="16" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line y1="13" y2="19" x1="15" x2="15" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UserMinusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="6" r="4.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 2,19 a 8 8 -180 0 1 11,-7" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="12" x2="18" y1="16.5" y2="16.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="7.5" cy="8" r="4" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 1,19 a 6.5 6.5 -180 0 1 13,0" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 13,10 a 6.5 6.5 -90 0 1 6,7 M 10,2 a 4 4 -135 1 1 3,7" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PowerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M 13,4 a 7.5 7.5 -65 1 1 -6,0 M10,1.5V9" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TrashCanIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V5H2Z M8,4V2H12V4 M3.5,5 4,19 16,19 16.5,5 M8,8V15 M12,8V15" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DeleteIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V5H2Z M8,4V2H12V4 M3.5,5 4,19 16,19 16.5,5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" x2="13" y1="9" y2="15" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7" x2="13" y2="9" y1="15" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DeleteBackIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="7.5" x2="15.5" y1="6" y2="14" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="7.5" x2="15.5" y2="6" y1="14" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1,10 5,3H19V17H5Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M3,10 9,16 18.5,4" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M4.5,10 8.5,14.5 16,6" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="9" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckCircleFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1,10A9 9 0 0 0 19,10A9 9 0 0 0 1,10Z M3.5,11 7.5,15.5Q8.5,16.5,9.5,15.5L17,7a1 1 0 0 0 -2,-2 L8.5,12.3 5.5,9a1 1 0 0 0 -2,2Z" fillRule="evenodd" strokeLinejoin="miter" strokeWidth="0.15rem" strokeLinecap="round" />
  </svg>
);

export const ShareIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="16" cy="4" r="2.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4" cy="10" r="2.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="2.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5,8.5 13,5 M6.5,11.5 13,15" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BookmarkIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M5,1 15,1 15,19 10,14 5,19Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BookmarkFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M5,1 15,1 15,19 10,14 5,19Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GearIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.4279 0.866984C8.89841 0.866984 8.43969 1.23346 8.32263 1.74975L7.9962 3.14996C7.49987 3.29692 7.0178 3.49817 6.56581 3.74683L5.35114 3.0478C4.90331 2.69884 4.3197 2.76416 3.94524 3.13863L3.13725 3.94661C2.76279 4.32107 2.69748 4.90469 3.04643 5.35252L3.7456 6.56639C3.49742 7.01868 3.29636 7.5002 3.14874 7.99308L1.74945 8.32383C1.23318 8.44089 0.866699 8.8996 0.866699 9.42909V10.572C0.866699 11.1015 1.23318 11.5602 1.74945 11.6773L3.14971 12.0038C3.29661 12.4976 3.49757 12.9795 3.74638 13.4315L3.0472 14.6455C2.69825 15.0934 2.76357 15.677 3.13803 16.0515L3.94599 16.8595C4.32046 17.2339 4.90407 17.2992 5.3519 16.9503L6.56667 16.2511C7.01839 16.499 7.50021 16.7 7.9962 16.8479L8.32263 18.2482C8.43969 18.7644 8.89841 19.1309 9.4279 19.1309H10.572C11.1015 19.1309 11.5602 18.7644 11.6773 18.2482L12.0038 16.8477C12.4988 16.6998 12.9809 16.4986 13.4328 16.2492L14.6475 16.9483C15.0953 17.2973 15.6789 17.232 16.0534 16.8575L16.8613 16.0495C17.2358 15.675 17.3011 15.0914 16.9521 14.6435L16.2529 13.4295C16.5011 12.9772 16.7021 12.4957 16.8497 12.0029L18.2492 11.6721C18.7654 11.555 19.1319 11.0963 19.1319 10.5668V9.42395C19.1319 8.89446 18.7654 8.43575 18.2492 8.31869L16.8489 7.99219C16.7019 7.49834 16.501 7.01643 16.2523 6.56458L16.9515 5.35059C17.3005 4.90275 17.2352 4.31914 16.8607 3.94467L16.0527 3.13668C15.6783 2.76222 15.0947 2.69691 14.6468 3.04586L13.4321 3.74503C12.9801 3.49613 12.4981 3.29508 12.0029 3.14747L11.6764 1.74798C11.5594 1.2317 11.1007 0.866984 10.5712 0.866984H9.4279Z M7.5,10a2.5 2.5 0 0 1 5,0a2.5 2.5 0 0 1 -5,0Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GearFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.4279 0.866984C8.89841 0.866984 8.43969 1.23346 8.32263 1.74975L7.9962 3.14996C7.49987 3.29692 7.0178 3.49817 6.56581 3.74683L5.35114 3.0478C4.90331 2.69884 4.3197 2.76416 3.94524 3.13863L3.13725 3.94661C2.76279 4.32107 2.69748 4.90469 3.04643 5.35252L3.7456 6.56639C3.49742 7.01868 3.29636 7.5002 3.14874 7.99308L1.74945 8.32383C1.23318 8.44089 0.866699 8.8996 0.866699 9.42909V10.572C0.866699 11.1015 1.23318 11.5602 1.74945 11.6773L3.14971 12.0038C3.29661 12.4976 3.49757 12.9795 3.74638 13.4315L3.0472 14.6455C2.69825 15.0934 2.76357 15.677 3.13803 16.0515L3.94599 16.8595C4.32046 17.2339 4.90407 17.2992 5.3519 16.9503L6.56667 16.2511C7.01839 16.499 7.50021 16.7 7.9962 16.8479L8.32263 18.2482C8.43969 18.7644 8.89841 19.1309 9.4279 19.1309H10.572C11.1015 19.1309 11.5602 18.7644 11.6773 18.2482L12.0038 16.8477C12.4988 16.6998 12.9809 16.4986 13.4328 16.2492L14.6475 16.9483C15.0953 17.2973 15.6789 17.232 16.0534 16.8575L16.8613 16.0495C17.2358 15.675 17.3011 15.0914 16.9521 14.6435L16.2529 13.4295C16.5011 12.9772 16.7021 12.4957 16.8497 12.0029L18.2492 11.6721C18.7654 11.555 19.1319 11.0963 19.1319 10.5668V9.42395C19.1319 8.89446 18.7654 8.43575 18.2492 8.31869L16.8489 7.99219C16.7019 7.49834 16.501 7.01643 16.2523 6.56458L16.9515 5.35059C17.3005 4.90275 17.2352 4.31914 16.8607 3.94467L16.0527 3.13668C15.6783 2.76222 15.0947 2.69691 14.6468 3.04586L13.4321 3.74503C12.9801 3.49613 12.4981 3.29508 12.0029 3.14747L11.6764 1.74798C11.5594 1.2317 11.1007 0.866984 10.5712 0.866984H9.4279Z M7.5,10a2.5 2.5 0 0 1 5,0a2.5 2.5 0 0 1 -5,0Z" strokeWidth="0" strokeLinejoin="miter" strokeLinecap="round" />
  </svg>
);

export const GridIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <rect width="7" height="7" x="1.5" y="1.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <rect width="7" height="7" x="11.5" y="1.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <rect width="7" height="7" x="1.5" y="11.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <rect width="7" height="7" x="11.5" y="11.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GridFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <rect width="7" height="7" x="1.5" y="1.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <rect width="7" height="7" x="11.5" y="1.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <rect width="7" height="7" x="1.5" y="11.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <rect width="7" height="7" x="11.5" y="11.5" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M5,1 15,1 13,2 13,6 18,12 18,13 2,13 2,12 7,6 7,2Z M10,13V20" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1,3.5H19V16.5H1Z M1,3.5 10,10 19,3.5" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,1 12.36,7.23 19,7.64 14,12.03 15.56,18.64 10,15 4.44,18.64 6,12.03 1,7.64 7.64,7.23Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StarFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,1 12.36,7.23 19,7.64 14,12.03 15.56,18.64 10,15 4.44,18.64 6,12.03 1,7.64 7.64,7.23Z" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const StarHalfFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,15 4.44,18.64 6,12.03 1,7.64 7.64,7.23 10,1" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10,1 12.36,7.23 19,7.64 14,12.03 15.56,18.64 10,15" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FilterIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,1 18,1 12,10 12,19 8,17 8,10Z" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ListFilterIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,5H18 M5,10H15 M8,15H12" fill="none" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10 4.6 L9 3.6 C7.314 1.947 4.412 1.947 2.622 3.736 0.832 5.526 0.832 8.428 2.622 10.217 L10 17.6 17.6 10 C19.191 8.428 19.191 5.526 17.401 3.736 15.611 1.947 12.709 1.947 10.919 3.736Z" fill="none" strokeLinejoin="miter" strokeWidth="0.15rem" strokeLinecap="round" />
  </svg>
);

export const HeartFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10 4.6 L9 3.6 C7.314 1.947 4.412 1.947 2.622 3.736 0.832 5.526 0.832 8.428 2.622 10.217 L10 17.6 17.6 10 C19.191 8.428 19.191 5.526 17.401 3.736 15.611 1.947 12.709 1.947 10.919 3.736Z" strokeLinejoin="miter" strokeWidth="0.15rem" strokeLinecap="round" />
  </svg>
);

export const HeartHalfFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10 4.6 L9 3.6 C7.314 1.947 4.412 1.947 2.622 3.736 0.832 5.526 0.832 8.428 2.622 10.217 L10 17.6 17.6 10 C19.191 8.428 19.191 5.526 17.401 3.736 15.611 1.947 12.709 1.947 10.919 3.736Z" fill="none" strokeLinejoin="miter" strokeWidth="0.15rem" strokeLinecap="round" />
    <path d="M10 4.6 L9 3.6 C7.314 1.947 4.412 1.947 2.622 3.736 0.832 5.526 0.832 8.428 2.622 10.217 L10 17.6" strokeWidth="0.15rem" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
