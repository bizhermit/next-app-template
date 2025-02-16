"use client";

import { useLang } from "@/i18n/react-hook";
import { isEmpty } from "@/objects/string";
import { Button } from "@/react/elements/button";
import { Dialog, useDialogRef } from "@/react/elements/dialog";
import { useFormItemRef } from "@/react/elements/form/item-ref";
import { RadioButtons } from "@/react/elements/form/items/radio-buttons";
import { TextBox } from "@/react/elements/form/items/text-box";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, BadgeIcon, BookmarkFillIcon, BookmarkIcon, ButtonIcon, CalendarFillIcon, CalendarIcon, CameraFillIcon, CameraIcon, CardIcon, CheckCircleFillIcon, CheckCircleIcon, CheckIcon, ChocolateMenuFillIcon, ChocolateMenuIcon, CircleFillIcon, CircleIcon, ClearAllIcon, ClockFillIcon, ClockIcon, CloudDownloadIcon, CloudFillIcon, CloudIcon, CloudUploadIcon, ContainerIcon, CrossCircleFillIcon, CrossCircleIcon, CrossIcon, DeleteBackFillIcon, DeleteBackIcon, DeleteFillIcon, DeleteIcon, DoubleDownFillIcon, DoubleDownIcon, DoubleLeftFillIcon, DoubleLeftIcon, DoubleRightFillIcon, DoubleRightIcon, DoubleUpFillIcon, DoubleUpIcon, DownFillIcon, DownIcon, DownloadIcon, ElementIcon, ExclamationCircleFillIcon, ExclamationCircleIcon, ExclamationDiamondFillIcon, ExclamationDiamondIcon, ExclamationIcon, ExclamationTriangleFillIcon, ExclamationTriangleIcon, ExLinkIcon, FileAddFillIcon, FileAddIcon, FileDeleteFillIcon, FileDeleteIcon, FileFillIcon, FileIcon, FilterFillIcon, FilterIcon, FolderAddFillIcon, FolderAddIcon, FolderDeleteFillIcon, FolderDeleteIcon, FolderFillIcon, FolderIcon, FormIcon, FormItemIcon, GearFillIcon, GearIcon, GridFillIcon, GridIcon, HeartFillIcon, HeartHalfFillIcon, HeartIcon, HomeFillIcon, HomeIcon, HorizontalDividerIcon, KebabMenuIcon, LabelFillIcon, LabelIcon, LeftFillIcon, LeftIcon, LeftRightIcon, LinkIcon, ListFilterIcon, ListIcon, LoadingIcon, LocationFillIcon, LocationIcon, MagnifyingGlassIcon, MagnifyingGlassMinusFillIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusFillIcon, MagnifyingGlassPlusIcon, MailFillIcon, MailIcon, MeatballsMenuIcon, MenuIcon, MenuLeftIcon, MenuLeftRightIcon, MenuRightIcon, MinusCircleFillIcon, MinusCircleIcon, MinusIcon, NavContainerIcon, OrderListIcon, PinFillIcon, PinIcon, PlusCircleFillIcon, PlusCircleIcon, PlusIcon, PopupIcon, PowerIcon, QuestionCircleFillIcon, QuestionCircleIcon, QuestionIcon, RedoIcon, ReloadIcon, RightFillIcon, RightIcon, SaveFillIcon, SaveIcon, ShareFillIcon, ShareIcon, SignInIcon, SignOutIcon, SlideContainerIcon, SmileFillIcon, SmileIcon, SplitContainerIcon, StarFillIcon, StarHalfFillIcon, StarIcon, StepperIcon, SyncIcon, TabContainerIcon, TextBoxIcon, TodayFillIcon, TodayIcon, TooltipIcon, TrashCanFillIcon, TrashCanIcon, UndoIcon, UnloadIcon, UpDownIcon, UpFillIcon, UpIcon, UploadIcon, UserAddIcon, UserFillIcon, UserIcon, UserMinusIcon, UsersFillIcon, UsersIcon, VerticalDividerIcon } from "@/react/elements/icon";
import { useMemo, useState } from "react";
import css from "./page.module.scss";

const icons = [
  PlusIcon,
  PlusCircleIcon,
  PlusCircleFillIcon,
  MinusIcon,
  MinusCircleIcon,
  MinusCircleFillIcon,
  CrossIcon,
  CrossCircleIcon,
  CrossCircleFillIcon,
  MenuIcon,
  MenuLeftIcon,
  MenuRightIcon,
  MenuLeftRightIcon,
  KebabMenuIcon,
  MeatballsMenuIcon,
  ChocolateMenuIcon,
  ChocolateMenuFillIcon,
  LeftIcon,
  LeftFillIcon,
  DoubleLeftIcon,
  DoubleLeftFillIcon,
  RightIcon,
  RightFillIcon,
  DoubleRightIcon,
  DoubleRightFillIcon,
  UpIcon,
  UpFillIcon,
  DoubleUpIcon,
  DoubleUpFillIcon,
  DownIcon,
  DownFillIcon,
  DoubleDownIcon,
  DoubleDownFillIcon,
  LeftRightIcon,
  UpDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CalendarIcon,
  CalendarFillIcon,
  TodayIcon,
  TodayFillIcon,
  ClockIcon,
  ClockFillIcon,
  ListIcon,
  OrderListIcon,
  ListFilterIcon,
  ClearAllIcon,
  GridIcon,
  GridFillIcon,
  SaveIcon,
  SaveFillIcon,
  UndoIcon,
  RedoIcon,
  CloudIcon,
  CloudFillIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  DownloadIcon,
  UploadIcon,
  CircleIcon,
  CircleFillIcon,
  ReloadIcon,
  UnloadIcon,
  SyncIcon,
  HomeIcon,
  HomeFillIcon,
  ElementIcon,
  SmileIcon,
  SmileFillIcon,
  ButtonIcon,
  LinkIcon,
  ExLinkIcon,
  ContainerIcon,
  NavContainerIcon,
  PopupIcon,
  FormIcon,
  FormItemIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassPlusFillIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassMinusFillIcon,
  TextBoxIcon,
  TabContainerIcon,
  SlideContainerIcon,
  SplitContainerIcon,
  LoadingIcon,
  LabelIcon,
  LabelFillIcon,
  StepperIcon,
  VerticalDividerIcon,
  HorizontalDividerIcon,
  TooltipIcon,
  BadgeIcon,
  CardIcon,
  SignInIcon,
  SignOutIcon,
  FolderIcon,
  FolderFillIcon,
  FolderAddIcon,
  FolderAddFillIcon,
  FolderDeleteIcon,
  FolderDeleteFillIcon,
  FileIcon,
  FileFillIcon,
  FileAddIcon,
  FileAddFillIcon,
  FileDeleteIcon,
  FileDeleteFillIcon,
  ExclamationIcon,
  ExclamationCircleIcon,
  ExclamationCircleFillIcon,
  ExclamationTriangleIcon,
  ExclamationTriangleFillIcon,
  ExclamationDiamondIcon,
  ExclamationDiamondFillIcon,
  QuestionIcon,
  QuestionCircleIcon,
  QuestionCircleFillIcon,
  UserIcon,
  UserFillIcon,
  UserAddIcon,
  UserMinusIcon,
  UsersIcon,
  UsersFillIcon,
  PowerIcon,
  TrashCanIcon,
  TrashCanFillIcon,
  DeleteIcon,
  DeleteFillIcon,
  DeleteBackIcon,
  DeleteBackFillIcon,
  CheckIcon,
  CheckCircleIcon,
  CheckCircleFillIcon,
  ShareIcon,
  ShareFillIcon,
  BookmarkIcon,
  BookmarkFillIcon,
  GearIcon,
  GearFillIcon,
  PinIcon,
  PinFillIcon,
  MailIcon,
  MailFillIcon,
  StarIcon,
  StarFillIcon,
  StarHalfFillIcon,
  HeartIcon,
  HeartFillIcon,
  HeartHalfFillIcon,
  FilterIcon,
  FilterFillIcon,
  LocationIcon,
  LocationFillIcon,
  CameraIcon,
  CameraFillIcon,
];

const parseNameWithoutIcon = (name: string) => {
  return name.match(/(.*)Icon/)?.[1] || name;
};

const Page = () => {
  const lang = useLang();

  const filterText = useFormItemRef<string>();
  const color = useFormItemRef<string, { value: string; label: string; }>();
  const [SelectedIcon, setSelectedIcon] = useState<React.JSX.Element | null>(null);
  const dialog = useDialogRef();

  const nodes = useMemo(() => {
    const ft = filterText.value?.toLowerCase();
    const filteredIcons = isEmpty(ft) ? icons : icons.filter((Icon) => {
      const name = parseNameWithoutIcon(Icon.name).toLowerCase();
      if (name.indexOf(ft) < 0) return false;
      return true;
    });
    return filteredIcons.map((Icon, i) => {
      const name = parseNameWithoutIcon(Icon.name);
      return (
        <div
          key={name}
          className={css.item}
          title={name}
          onClick={() => {
            setSelectedIcon(
              <div className={css.dialog}>
                <div className={css.wrap}>
                  <Icon className={css.big} />
                </div>
                <div className={css.label}>
                  {name}
                </div>
              </div>
            );
            dialog.open();
          }}
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
          <div className={css.buttons}>
            <div className={css.buttonrow}>
              <Button>
                <Icon />
              </Button>
              <Button round>
                <Icon />
              </Button>
            </div>
            <Button style={{ width: "100%" }}>
              <Icon />
              <span>{lang("sandbox.buttonText")}</span>
              <Icon />
            </Button>
          </div>
        </div>
      );
    });
  }, [filterText.value]);

  return (
    <div className={css.main}>
      <div className={css.header}>
        <TextBox
          ref={filterText}
        />
        <div className={css.total}>
          : {nodes.length}
        </div>
        <RadioButtons
          ref={color}
          defaultValue="default"
          source={() => {
            return [
              "default",
              "primary",
              "secondary",
              "danger",
              "subdued",
            ].map(item => {
              return { value: item, label: item };
            });
          }}
        />
      </div>
      <div
        className={css.table}
        style={{
          color: `var(--c-${color.value?.value}, inherit)`,
        }}
      >
        {nodes}
      </div>
      <Dialog
        ref={dialog}
        data-color={color.value?.value}
        style={{
          color: `var(--c-${color.value?.value}, inherit)`,
        }}
      >
        {SelectedIcon && SelectedIcon}
      </Dialog>
    </div>
  );
};

export default Page;
