import { BadgeIcon, ButtonIcon, CalendarIcon, CardIcon, CircleFillIcon, CircleIcon, ClearAllIcon, ClockIcon, CloudDownloadIcon, CloudIcon, CloudUploadIcon, ContainerIcon, CrossCircleIcon, CrossIcon, DoubleDownIcon, DoubleLeftIcon, DoubleRightIcon, DoubleUpIcon, DownFillIcon, DownIcon, ElementIcon, ExclamationCircleIcon, ExclamationDiamondIcon, ExclamationIcon, ExclamationTriangleIcon, ExLinkIcon, FileAddIcon, FileIcon, FolderAddIcon, FolderIcon, FormIcon, FormItemIcon, HomeIcon, HorizontalDividerIcon, LabelIcon, LeftIcon, LeftRightIcon, ListIcon, LoadingIcon, MagnifyingGlassIcon, MagnifyingGlassPlusIcon, MenuIcon, MenuLeftIcon, MenuLeftRightIcon, MenuRightIcon, MinusCircleIcon, MinusIcon, NavContainerIcon, OrderListIcon, PlusCircleIcon, PlusIcon, PopupIcon, PowerIcon, QuestionCircleIcon, QuestionIcon, RedoIcon, ReloadIcon, RightIcon, SaveIcon, SignInIcon, SignOutIcon, SlideContainerIcon, SmileIcon, SplitContainerIcon, StepperIcon, SyncIcon, TabContainerIcon, TextBoxIcon, TodayIcon, TooltipIcon, UndoIcon, UnloadIcon, UpDownIcon, UpFillIcon, UpIcon, UserAddIcon, UserIcon, UserMinusIcon, UsersIcon, VerticalDividerIcon } from "@/react/elements/icon";
import css from "./page.module.scss";

const icons = [
  PlusIcon,
  PlusCircleIcon,
  MinusIcon,
  MinusCircleIcon,
  CrossIcon,
  CrossCircleIcon,
  MenuIcon,
  MenuLeftIcon,
  MenuRightIcon,
  MenuLeftRightIcon,
  LeftIcon,
  DoubleLeftIcon,
  RightIcon,
  DoubleRightIcon,
  UpIcon,
  UpFillIcon,
  DoubleUpIcon,
  DownIcon,
  DownFillIcon,
  DoubleDownIcon,
  LeftRightIcon,
  UpDownIcon,
  CalendarIcon,
  TodayIcon,
  ClockIcon,
  ListIcon,
  OrderListIcon,
  SaveIcon,
  UndoIcon,
  RedoIcon,
  ClearAllIcon,
  CloudIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  CircleIcon,
  CircleFillIcon,
  ReloadIcon,
  UnloadIcon,
  SyncIcon,
  HomeIcon,
  ElementIcon,
  SmileIcon,
  ButtonIcon,
  ExLinkIcon,
  ContainerIcon,
  NavContainerIcon,
  PopupIcon,
  FormIcon,
  FormItemIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassPlusIcon,
  TextBoxIcon,
  TabContainerIcon,
  SlideContainerIcon,
  SplitContainerIcon,
  LoadingIcon,
  LabelIcon,
  StepperIcon,
  VerticalDividerIcon,
  HorizontalDividerIcon,
  TooltipIcon,
  BadgeIcon,
  CardIcon,
  SignInIcon,
  SignOutIcon,
  FolderIcon,
  FolderAddIcon,
  FileIcon,
  FileAddIcon,
  ExclamationIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  ExclamationDiamondIcon,
  QuestionIcon,
  QuestionCircleIcon,
  UserIcon,
  UserAddIcon,
  UserMinusIcon,
  UsersIcon,
  PowerIcon,
];

const Page = () => {
  return (
    <div className={css.main}>
      <div className={css.table}>
        {icons.map((Icon, i) => {
          const name = Icon.name.match(/(.*)Icon/)?.[1] || Icon.name;
          return (
            <div
              key={name}
              className={css.item}
              title={name}
            >
              <div className={css.index}>
                {i + 1}
              </div>
              <div className={css.label}>
                {name}
              </div>
              <div className={css.icon}>
                <Icon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
