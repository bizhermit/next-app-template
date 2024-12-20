type PageWithLayout<P = {}, IP = P> = import("next").NextPage<P, IP> & {
  layout?: (page: React.ReactElement, props: P) => React.ReactNode;
};

type NextPageParams = { [key: string]: string | string[] | undefined; };

type ServerPage<P extends {
  params?: NextPageParams;
  searchParams?: NextPageParams;
} = {}> = (props: {
  params: Promise<NullEscape<P["params"], NextPageParams>>;
  searchParams: Promise<NullEscape<P["searchParams"], NextPageParams>>;
}) => (React.ReactNode | Promise<React.ReactNode>);

type ServerLayout<P extends {
  params?: NextPageParams;
  searchParams?: NextPageParams;
  parallel?: string;
} = {}> = (props: {
  params: Promise<NullEscape<P["params"], NextPageParams>>;
  searchParams: Promise<NullEscape<P["searchParams"], NextPageParams>>;
  children: React.ReactNode;
} & Record<P["parallel"], React.ReactNode>) => (React.ReactNode | Promise<React.ReactNode>);

type ClientLayout<P extends {
  parallel?: string;
} = {}> = (props: {
  children: React.ReactNode;
} & Record<P["parallel"], React.ReactNode>) => React.ReactNode;
