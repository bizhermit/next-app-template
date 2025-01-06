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

export const PlusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="2" x2="18" y1="10" y2="10" />
    <line y1="2" y2="18" x1="10" x2="10" />
  </svg>
);

export const PlusCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="5" x2="15" y1="10" y2="10" />
    <line y1="5" y2="15" x1="10" x2="10" />
    <circle cx="10" cy="10" r="9" fill="none" />
  </svg>
);

export const MinusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="2" x2="18" y1="10" y2="10" />
  </svg>
);

export const MinusCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="5" x2="15" y1="10" y2="10" />
    <circle cx="10" cy="10" r="9" fill="none" />
  </svg>
);

export const CrossIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="2.5" x2="17" y1="2.5" y2="17" />
    <line x1="2.5" x2="17" y2="2.5" y1="17" />
  </svg>
);

export const CrossCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="6" x2="14" y1="6" y2="14" />
    <line x1="6" x2="14" y2="6" y1="14" />
    <circle cx="10" cy="10" r="9" fill="none" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="2" x2="18" y1="5" y2="5" />
    <line x1="2" x2="18" y1="10" y2="10" />
    <line x1="2" x2="18" y1="15" y2="15" />
  </svg>
);

export const MenuLeftIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="2" x2="18" y1="5" y2="5" />
    <line x1="5" x2="18" y1="10" y2="10" />
    <line x1="2" x2="18" y1="15" y2="15" />
    <path d="M6,6 L2,10 6,14" fill="none" />
  </svg>
);

export const MenuRightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="2" x2="18" y1="5" y2="5" />
    <line x1="2" x2="15" y1="10" y2="10" />
    <line x1="2" x2="18" y1="15" y2="15" />
    <path d="M14,6 L18,10 14,14" fill="none" />
  </svg>
);

export const MenuLeftRightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="2" x2="18" y1="5" y2="5" />
    <line x1="5" x2="15" y1="10" y2="10" />
    <line x1="2" x2="18" y1="15" y2="15" />
    <path d="M6,6 L2,10 6,14" fill="none" />
    <path d="M14,6 L18,10 14,14" fill="none" />
  </svg>
);

export const KebabMenuIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="3" r="1.5" />
    <circle cx="10" cy="10" r="1.5" />
    <circle cx="10" cy="17" r="1.5" />
  </svg>
);

export const MeatballsMenuIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cy="10" cx="3" r="1.5" />
    <circle cy="10" cx="10" r="1.5" />
    <circle cy="10" cx="17" r="1.5" />
  </svg>
);

export const ChocolateMenuIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <rect width="4" height="4" x="1" y="1" fill="none" />
    <rect width="4" height="4" x="8" y="1" fill="none" />
    <rect width="4" height="4" x="15" y="1" fill="none" />
    <rect width="4" height="4" x="1" y="8" fill="none" />
    <rect width="4" height="4" x="8" y="8" fill="none" />
    <rect width="4" height="4" x="15" y="8" fill="none" />
    <rect width="4" height="4" x="1" y="15" fill="none" />
    <rect width="4" height="4" x="8" y="15" fill="none" />
    <rect width="4" height="4" x="15" y="15" fill="none" />
  </svg>
);

export const LeftIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M14,2 L5,10 14,18" fill="none" />
  </svg>
);

export const DoubleLeftIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path x="-2.5" d="M11.5,2 L2.5,10 11.5,18" fill="none" />
    <path x="2.5" d="M16.5,2 L7.5,10 16.5,18" fill="none" />
  </svg>
);

export const RightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,2 L15,10 6,18" fill="none" />
  </svg>
);

export const DoubleRightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M3.5,2 L12.5,10 3.5,18" fill="none" />
    <path d="M8.5,2 L17.5,10 8.5,18" fill="none" />
  </svg>
);

export const UpIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,14 L10,5 18,14" fill="none" />
  </svg>
);

export const UpFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,14 L10,5 18,14 2,14" />
  </svg>
);

export const DoubleUpIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,11.5 L10,2.5 18,11.5" fill="none" />
    <path d="M2,16.5 L10,7.5 18,16.5" fill="none" />
  </svg>
);

export const DownIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,6 L10,15 18,6" fill="none" />
  </svg>
);

export const DownFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,6 L10,15 18,6 2,6" />
  </svg>
);

export const DoubleDownIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3.5 L10,12.5 18,3.5" fill="none" />
    <path d="M2,8.5 L10,17.5 18,8.5" fill="none" />
  </svg>
);

export const LeftRightIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M7,5 L2,10 7,15 M13,5 L18,10 13,15" fill="none" />
  </svg>
);

export const UpDownIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M5,7 L10,2 15,7 M5,13 L10,18 15,13" fill="none" />
  </svg>
);

export const CalendarIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V18H2Z M5,2V5Z M15,2V5Z M2,7H18Z" fill="none" />
  </svg>
);

export const TodayIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V18H2Z M5,2V5Z M15,2V5Z M2,7H18Z" fill="none" />
    <rect x="11" y="11" width="2" height="2" strokeLinejoin="miter" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="10" r="9" fill="none" />
    <path d="M10,4 L10,11 15,11" fill="none" />
  </svg>
);

export const ListIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18 M2,8H18 M2,12H18 M2,16H18" fill="none" />
  </svg>
);

export const OrderListIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,4H18 M6,8H18 M6,12H18 M6,16H18" fill="none" />
    <circle cx="2.5" cy="4" r=".5" />
    <circle cx="2.5" cy="8" r=".5" />
    <circle cx="2.5" cy="12" r=".5" />
    <circle cx="2.5" cy="16" r=".5" />
  </svg>
);

export const SaveIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,2H15L18,5 18,18 2,18Z M5,2v4h8v-4z M5,18l0,-7 10,0 0,7" fill="none" />
  </svg>
);

export const UndoIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M4,3l0,5 5,0M4,8l2,-2a4 4.5 45 1 1 9.3,5l-6,6" fill="none" />
  </svg>
);

export const RedoIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M16,3l0,5 -5,0M16,8l-2,-2a4 4.5 315 1 0 -9.3,5l6,6" fill="none" />
  </svg>
);

export const ClearAllIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4h16Z M2,8h16Z M2,12h9z M2,16h9z M14,12l4,4Z M14,16l4,-4" />
  </svg>
);

export const CloudIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6.5,16a4.1 4.1 0 1 1 0 -8a3.9 3.9 -180 0 1 8,0v1a3 3.5 -90 0 1 0,7.1z" fill="none" />
  </svg>
);

export const CloudDownloadIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6.5,16a4.1 4.1 0 1 1 0 -8a3.9 3.9 -180 0 1 8,0v1a3 3.5 -90 0 1 0,7.1M10 8v8M7 13l3,3 3,-3" fill="none" />
  </svg>
);

export const CloudUploadIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6.5,16a4.1 4.1 0 1 1 0 -8a3.9 3.9 -180 0 1 8,0v1a3 3.5 -90 0 1 0,7.1M10 11v6M7 12.5l3,-3 3,3" fill="none" />
  </svg>
);

export const CircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="10" r="8" fill="none" />
  </svg>
);

export const CircleFillIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="10" r="8" fill="fill" />
  </svg>
);

export const ReloadIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M17.5,2l0,5 -5,0M16.5,14a7.5 7.5 30 1 1 0,-8" fill="none" />
  </svg>
);

export const UnloadIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2.5,2l0,5 5,0M3.5,6a7.5 7.5 -150 1 1 0,8" fill="none" />
  </svg>
);

export const SyncIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M17,1.5l0,5 -5,0M2.5,9a7.5 7.5 -180 0 1 14,-3M3,18l0,-5 5,0M17.5,9.5a7.5 7.5 0 0 1 -14,4" fill="none" />
  </svg>
);

export const HomeIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,2 L19,10 16,10 16,18 12,18 12,13 8,13 8,18 4,18 4,10 1,10 10,2" fill="none" />
  </svg>
);

export const ElementIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,6 L2,10 6,14" fill="none" />
    <path d="M14,6 L18,10 14,14" fill="none" />
    <line x1="12" x2="8" y1="5" y2="15" />
  </svg>
);

export const SmileIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="10" r="8.5" fill="none" />
    <circle cx="6.5" cy="8" r=".8" />
    <circle cx="13.5" cy="8" r=".8" />
    <path d="M14.2,13a5 5 30 0 1 -8,0" fill="none" />
  </svg>
);

export const ButtonIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,5H18V13H2Z" fill="none" />
    <path d="M12,10L17,15 13.8,15 15,18.2 14.5,18.4 13.5,15 11,17Z" />
  </svg>
);

export const ExLinkIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M8,3H3V17H17V12 M12,2H18V8" fill="none" />
    <line x1="18" x2="8" y1="2" y2="12" />
  </svg>
);

export const ContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z M5,5H15V8H5Z M5,10H12V12H5Z M5,14H15V15H5Z" fill="none" />
  </svg>
);

export const NavContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z M2,7H18 M8,7V17" fill="none" />
  </svg>
);

export const PopupIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1,2H19V18H1Z" opacity=".6" fill="none" />
    <path d="M3.5,4.5H16.5V15.5H3.5Z" fill="none" />
  </svg>
);

export const FormIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,3H3V17H17V10 M16,2L8,10 8,12 10,12 18,4Z" fill="none" />
  </svg>
);

export const FormItemIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,8H2V16H18V10 M16,2L8,10 8,12 10,12 18,4Z" fill="none" />
  </svg>
);

export const MagnifyingGlassIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="8" cy="8" r="7" fill="none" />
    <line x1="13" x2="18" y1="13" y2="18" />
  </svg>
);

export const MagnifyingGlassPlusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="8" cy="8" r="7" fill="none" />
    <line x1="13" x2="18" y1="13" y2="18" />
    <line x1="4.5" x2="12" y1="8" y2="8" />
    <line y1="4" y2="12" x1="8.2" x2="8.2" />
  </svg>
);

export const MagnifyingGlassMinusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="8" cy="8" r="7" fill="none" />
    <line x1="13" x2="18" y1="13" y2="18" />
    <line x1="4.5" x2="12" y1="8" y2="8" />
  </svg>
);

export const TextBoxIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M7,7H2V13H7 M13,7H18V13H13 M10,5L10,15 M9,4H6M11,4H14 M9,16H6M11,16H14" fill="none" />
  </svg>
);

export const TabContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z M2,7H18 M10,3V7" fill="none" />
  </svg>
);

export const SlideContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M4,4H16V16H4Z M1,4V16 M19,4V16" fill="none" />
  </svg>
);

export const SplitContainerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z M10,3V17" fill="none" />
  </svg>
);

export const LoadingIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="10" x2="10" y1="1" y2="5" />
    <line x1="1" x2="5" y1="10" y2="10" opacity="0.9" />
    <line x1="3.3" x2="6.4" y1="3.3" y2="6.4" opacity="0.8" />
    <line x1="3.3" x2="6.4" y1="16.7" y2="13.6" opacity="0.7" />
    <line x1="10" x2="10" y1="19" y2="15" opacity="0.6" />
    <line x1="16.7" x2="13.6" y1="16.7" y2="13.6" opacity="0.5" />
    <line x1="19" x2="15" y1="10" y2="10" opacity="0.4" />
    <line x1="16.7" x2="13.6" y1="3.3" y2="6.4" opacity="0.3" />
  </svg>
);

export const LabelIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,5H14L18,10 14,15H2Z" fill="none" />
  </svg>
);

export const StepperIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1,7H7.5L9.5,10 7.5,13H1L3,10Z" />
    <path d="M10.5,7H17L19,10 17,13H10.5L13,10Z" fill="none" />
  </svg>
);

export const VerticalDividerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="10" x2="10" y1="3" y2="17" />
  </svg>
);

export const HorizontalDividerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="3" x2="17" y1="10" y2="10" />
  </svg>
);

export const TooltipIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,3H18V17H2Z" opacity=".6" fill="none" />
    <path d="M4,7H16V12L12,12L10,14L8,12H4Z" fill="none" />
  </svg>
);

export const BadgeIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M10,2H2V18H18V10" opacity=".6" fill="none" />
    <circle cx="14" cy="6" r="5" fill="none" />
  </svg>
);

export const CardIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V16H2Z M2,8H18" fill="none" />
  </svg>
);

export const SignInIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M6,6.5V2H17V18H6V13.5 M2,10H12 M10,6 14,10 10,14" fill="none" />
  </svg>
);

export const SignOutIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M11,6.5V2H2V18H11V13.5 M18,10H8 M15,6 19,10 15,14" fill="none" />
  </svg>
);

export const FolderIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1.5,3.5 7,3.5 9,5.5H18.5V17.5H1.5Z" fill="none" />
  </svg>
);

export const FolderAddIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1.5,3.5 7,3.5 9,5.5H18.5V17.5H1.5Z" fill="none" />
    <line x1="7" x2="13" y1="11.5" y2="11.5" />
    <line y1="8.5" y2="14.5" x1="10" x2="10" />
  </svg>
);

export const FileIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M3,1.5 11.5,1.5 17,7V18.5H3Z M11,1.5V7H17" fill="none" />
  </svg>
);

export const FileAddIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M3,1.5 11.5,1.5 17,7V18.5H3Z M11,1.5V7H17" fill="none" />
    <line x1="7" x2="13" y1="11.5" y2="11.5" />
    <line y1="8.5" y2="14.5" x1="10" x2="10" />
  </svg>
);

export const ExclamationIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.5,3 10.5,3 10.2,12.5 9.8,12.5Z" />
    <circle cx="10" cy="17" r=".8" fill="none" />
  </svg>
);

export const ExclamationCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.5,5.5 10.5,5.5 10.2,11.5 9.8,11.5Z" />
    <circle cx="10" cy="14.5" r=".5" fill="none" />
    <circle cx="10" cy="10" r="9" fill="none" />
  </svg>
);

export const ExclamationTriangleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.5,5.5 10.5,5.5 10.2,11.5 9.8,11.5Z" />
    <circle cx="10" cy="14.5" r=".5" fill="none" />
    <path d="M10,0 19.5,18 0.5,18Z" fill="none" />
  </svg>
);

export const ExclamationDiamondIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.5,5.5 10.5,5.5 10.2,11.5 9.8,11.5Z" />
    <circle cx="10" cy="14.5" r=".5" fill="none" />
    <path d="M10,.5 19.5,10 10,19.5 .5,10Z" fill="none" />
  </svg>
);

export const QuestionIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M 6,7 a 4 4 -180 1 1 4,4 M10,12V13" fill="none" />
    <circle cx="10" cy="17" r=".8" fill="none" />
  </svg>
);

export const QuestionCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M 7,7 a 3.2 3.2 -180 1 1 3,3 M10,10V11" fill="none" />
    <circle cx="10" cy="14.5" r=".5" fill="none" />
    <circle cx="10" cy="10" r="9" fill="none" />
  </svg>
);

export const UserIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="6" r="4.5" fill="none" />
    <path d="M 2,19 a 8 8 -180 0 1 16,0" fill="none" />
  </svg>
);

export const UserAddIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="6" r="4.5" fill="none" />
    <path d="M 2,19 a 8 8 -180 0 1 11,-7" fill="none" />
    <line x1="12" x2="18" y1="16" y2="16" />
    <line y1="13" y2="19" x1="15" x2="15" />
  </svg>
);

export const UserMinusIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="10" cy="6" r="4.5" fill="none" />
    <path d="M 2,19 a 8 8 -180 0 1 11,-7" fill="none" />
    <line x1="12" x2="18" y1="16.5" y2="16.5" />
  </svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="7.5" cy="8" r="4" fill="none" />
    <path d="M 1,19 a 6.5 6.5 -180 0 1 13,0" fill="none" />
    <path d="M 13,10 a 6.5 6.5 -90 0 1 6,7 M 10,2 a 4 4 -135 1 1 3,7" fill="none" />
  </svg>
);

export const PowerIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M 13,4 a 7.5 7.5 -65 1 1 -6,0 M10,1.5V9" fill="none" />
  </svg>
);

export const TrashCanIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V5H2Z M8,4V2H12V4 M3.5,5 4,19 16,19 16.5,5 M8,8V15 M12,8V15" fill="none" />
  </svg>
);

export const DeleteIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M2,4H18V5H2Z M8,4V2H12V4 M3.5,5 4,19 16,19 16.5,5" fill="none" />
    <line x1="7" x2="13" y1="9" y2="15" />
    <line x1="7" x2="13" y2="9" y1="15" />
  </svg>
);

export const DeleteBackIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <line x1="7.5" x2="15.5" y1="6" y2="14" />
    <line x1="7.5" x2="15.5" y2="6" y1="14" />
    <path d="M1,10 5,3H19V17H5Z" fill="none" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M3,10 9,16 18.5,4" fill="none" />
  </svg>
);

export const CheckCircleIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M4.5,10 8.5,14.5 16,6" fill="none" />
    <circle cx="10" cy="10" r="9" fill="none" />
  </svg>
);

export const ShareIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <circle cx="17" cy="4" r="2.5" fill="none" />
    <circle cx="3" cy="10" r="2.5" fill="none" />
    <circle cx="17" cy="16" r="2.5" fill="none" />
    <path d="M6,8.5 14,5 M6,11.5 14,15" fill="none" />
  </svg>
);

export const BookmarkIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M5,1 15,1 15,19 10,14 5,19Z" fill="none" />
  </svg>
);

export const GearIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M9.4279 0.866984C8.89841 0.866984 8.43969 1.23346 8.32263 1.74975L7.9962 3.14996C7.49987 3.29692 7.0178 3.49817 6.56581 3.74683L5.35114 3.0478C4.90331 2.69884 4.3197 2.76416 3.94524 3.13863L3.13725 3.94661C2.76279 4.32107 2.69748 4.90469 3.04643 5.35252L3.7456 6.56639C3.49742 7.01868 3.29636 7.5002 3.14874 7.99308L1.74945 8.32383C1.23318 8.44089 0.866699 8.8996 0.866699 9.42909V10.572C0.866699 11.1015 1.23318 11.5602 1.74945 11.6773L3.14971 12.0038C3.29661 12.4976 3.49757 12.9795 3.74638 13.4315L3.0472 14.6455C2.69825 15.0934 2.76357 15.677 3.13803 16.0515L3.94599 16.8595C4.32046 17.2339 4.90407 17.2992 5.3519 16.9503L6.56667 16.2511C7.01839 16.499 7.50021 16.7 7.9962 16.8479L8.32263 18.2482C8.43969 18.7644 8.89841 19.1309 9.4279 19.1309H10.572C11.1015 19.1309 11.5602 18.7644 11.6773 18.2482L12.0038 16.8477C12.4988 16.6998 12.9809 16.4986 13.4328 16.2492L14.6475 16.9483C15.0953 17.2973 15.6789 17.232 16.0534 16.8575L16.8613 16.0495C17.2358 15.675 17.3011 15.0914 16.9521 14.6435L16.2529 13.4295C16.5011 12.9772 16.7021 12.4957 16.8497 12.0029L18.2492 11.6721C18.7654 11.555 19.1319 11.0963 19.1319 10.5668V9.42395C19.1319 8.89446 18.7654 8.43575 18.2492 8.31869L16.8489 7.99219C16.7019 7.49834 16.501 7.01643 16.2523 6.56458L16.9515 5.35059C17.3005 4.90275 17.2352 4.31914 16.8607 3.94467L16.0527 3.13668C15.6783 2.76222 15.0947 2.69691 14.6468 3.04586L13.4321 3.74503C12.9801 3.49613 12.4981 3.29508 12.0029 3.14747L11.6764 1.74798C11.5594 1.2317 11.1007 0.866984 10.5712 0.866984H9.4279Z" fill="none" />
    <circle cx="10" cy="10" r="2.5" fill="none" />
  </svg>
);

export const GridIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <rect width="7" height="7" x="1.5" y="1.5" fill="none" />
    <rect width="7" height="7" x="11.5" y="1.5" fill="none" />
    <rect width="7" height="7" x="1.5" y="11.5" fill="none" />
    <rect width="7" height="7" x="11.5" y="11.5" fill="none" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M5,0 15,0 13,2 13,6 18,12 18,13 2,13 2,12 7,6 7,2Z M10,13V20" fill="none" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...attrs(p)}>
    <path d="M1,3.5H19V16.5H1Z M1,3.5 10,10 19,3.5" fill="none" />
  </svg>
);
