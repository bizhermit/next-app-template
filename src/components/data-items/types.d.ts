declare namespace DataItem {

  type CrossProps<U> = Pick<U, keyof U>;

  type UnionToIntersection<A> = (A extends any ? (_: A) => void : never) extends ((_: infer B) => void) ? B : never;

  type Prop<D extends $object> = D extends $object ? (
    D["required"] extends true ? { [P in D["name"]]: ValueType<D> } : { [P in D["name"]]?: ValueType<D> }
  ) : never;

  type Props<A extends Readonlyable<Array<$object>>> = CrossProps<UnionToIntersection<Prop<A[number]>>>;

  type NullValue = null | undefined;

  type PartialRequired<V, R extends $object["required"]> = R extends true ? V : V | NullValue;

  type ValueType<D extends $object> =
    D extends { name: string; type: infer T; } ? (
      PartialRequired<
        D extends { source: infer S } ? SourceValueType<D> :
        D extends { trueValue: infer True; falseValue: infer False; } ? True | False :
        T extends "str" ? string :
        T extends "num" ? number :
        T extends "bool" ? boolean :
        T extends "date" ? string :
        T extends "month" ? string :
        T extends "time" ? number :
        T extends "datetime" ? import("../objects/datetime").DateTime :
        T extends "file" ? File :
        T extends "array" ? Array<D["item"] extends Array<$object> ? Props<D["item"]> : ValueType<D["item"]>> :
        T extends "struct" ? D["item"] extends Array<$object> ? Props<D["item"]> : never :
        any, D["required"]>
    ) : any;

  type Source<T> = Array<{ value?: T | NullValue; label?: string; } & { [v: string]: any }>;

  type SourceValueType<D extends $object> = D extends { source: infer S } ? (S extends Array<infer V> ? V["value"] : any) : any;

  type ValidationResult = {
    type: "e" | "w" | "i";
    code: string;
    msg: string;
    fullName: string;
  };

  type Env = {
    tzOffset: number;
    lang: LangAccessor;
  };

  type OmitableProps = "name";

  type ArgObject<D extends $object> = PickPartial<D, OmitableProps>;

  type ValidationGeneratorProps<D extends $object> = {
    dataItem: ArgObject<D>;
    env: Env;
  };

  type ValidationProps<D extends $object, V = ValueType<D>> = {
    value: V | null | undefined;
    data: { [v: string | number]: any } | null | undefined;
    siblings: Readonlyable<Array<ArgObject<$object>>> | null | undefined;
    dataItem: ArgObject<D>;
    fullName: string;
    env: Env;
  };

  type Validation<D extends $object, V = ValueType<D>> = (props: ValidationProps<D, V>) => (ValidationResult | null | undefined);

  type ParseProps<D> = {
    value: any;
    dataItem: ArgObject<D>;
    fullName: string;
    data: { [v: string | number]: any };
    env: Env;
  };

  type ParseResult<V> = [parsedValue: V | NullValue, result?: ValidationResult];

  type $ = {
    name: string;
    label?: LangKey;
    labelAsIs?: string;
    required?: boolean | ((params: DataItem.ValidationProps<any>) => boolean);
    refs?: Array<string>;
    textAlign?: "left" | "center" | "right";
  };

  type $any<V extends any = any> = $ & {
    type: "any";
    source?: Source<V>;
    validations?: Array<Validation<$any<V>>>;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<V> & { mode: "input" | "select" | "set"; }) => string;
      };
    } & { [section: string]: { [key: string]: (params: MessageBaseParams & { [v: string]: any }) => string } };
  };

  type MessageBaseParams<V extends any> = {
    lang: LangAccessor;
    subject: string | null | undefined;
    value: V | null | undefined;
  };

  type CharType =
    | "int"
    | "h-num"
    | "f-num"
    | "num"
    | "h-alpha"
    | "f-alpha"
    | "alpha"
    | "h-alpha-num"
    | "h-alpha-num-syn"
    | "h-katakana"
    | "f-katakana"
    | "katakana"
    | "hiragana"
    | "half"
    | "full"
    | "email"
    | "tel"
    | "url"
    ;

  type $str<V extends string = string> = $ & {
    type: "str";
    source?: Source<V>;
    validations?: Array<Validation<$str<V>>>;
    length?: number;
    minLength?: number;
    maxLength?: number;
    charType?: CharType;
    inputMode?: React.HTMLAttributes<React.HTMLInputElement>["inputMode"];
    inputType?: Extract<React.HTMLInputTypeAttribute, "text" | "email" | "url" | "tel">;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<V> & { mode: "input" | "select" | "set"; }) => string;
        length?: (params: MessageBaseParams<V> & { length: number; currentLength: number; }) => string;
        range?: (params: MessageBaseParams<V> & { minLength: number; maxLength: number; currentLength: number; }) => string;
        minLength?: (params: MessageBaseParams<V> & { minLength: number; currentLength: number; }) => string;
        maxLength?: (params: MessageBaseParams<V> & { maxLength: number; currentLength: number; }) => string;
        charType?: (params: MessageBaseParams<V> & { charType: CharType; }) => string;
        source?: (params: MessageBaseParams<V> & { source: Source<V>; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        contain?: (params: MessageBaseParams<V> & { source: Source<V>; }) => string;
      };
    };
  };

  type $num<V extends number = number> = $ & {
    type: "num";
    source?: Source<V>;
    validations?: Array<Validation<$num<V>>>;
    min?: number;
    max?: number;
    maxLength?: number;
    float?: number;
    requiredIsNotZero?: boolean;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<V> & { mode: "input" | "select" | "set"; }) => string;
        range?: (params: MessageBaseParams<V> & { min: number; max: number; }) => string;
        min?: (params: MessageBaseParams<V> & { min: number; }) => string;
        max?: (params: MessageBaseParams<V> & { max: number; }) => string;
        float?: (params: MessageBaseParams<V> & { float: number; currentFloat: number; }) => string;
        source?: (params: MessageBaseParams<V> & { source: Source<V>; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
        contain?: (params: MessageBaseParams<V> & { source: Source<V>; }) => string;
      };
    };
  };

  type $bool<True extends boolean = true, False extends boolean = false> = $ & {
    type: "bool";
    trueValue: True;
    falseValue: False;
    source?: Source<True | False>;
    validations?: Array<Validation<$bool<True, False>>>;
    requiredIsTrue?: boolean;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<True | False> & { mode: "input" | "select" | "set"; }) => string;
        contain?: (params: MessageBaseParams<True | False> & { trueValue: True; falseValue: False; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $boolNum<True extends number = 1, False extends number = 0> = $ & {
    type: "b-num";
    trueValue: True;
    falseValue: False;
    source?: Source<True | False>;
    validations?: Array<Validation<$boolNum<True, False>>>;
    requiredIsTrue?: boolean;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<True | False> & { mode: "input" | "select" | "set"; }) => string;
        contain?: (params: MessageBaseParams<True | False> & { trueValue: True; falseValue: False; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $boolStr<True extends string = "1", False extends string = "0"> = $ & {
    type: "b-str";
    trueValue: True;
    falseValue: False;
    source?: Source<True | False>;
    validations?: Array<Validation<$boolStr<True, False>>>;
    requiredIsTrue?: boolean;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<True | False> & { mode: "input" | "select" | "set"; }) => string;
        contain?: (params: MessageBaseParams<True | False> & { trueValue: True; falseValue: False; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $boolAny<True extends any = any, False extends any = any> =
    True extends boolean ? $bool<True, False> :
    True extends number ? $boolNum<True, False> :
    True extends string ? $boolStr<True, False> :
    $bool<True, False>;

  type $date = $ & {
    type: "date";
    validations?: Array<Validation<$date, Date>>;
    min?: string | number | Date | import("../objects/datetime").DateTime | (() => (Date | import("../objects/datetime").DateTime));
    max?: string | number | Date | import("../objects/datetime").DateTime | (() => (Date | import("../objects/datetime").DateTime));
    pair?: {
      name: string;
      position: "before" | "after";
      same?: boolean;
    };
    splitDataNames?: [string, string, string];
    formatPattern?: string;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<Date>) => string;
        range?: (params: MessageBaseParams<Date> & { min: Date; max: Date; }) => string;
        min?: (params: MessageBaseParams<Date> & { min: Date; }) => string;
        max?: (params: MessageBaseParams<Date> & { max: Date; }) => string;
        pairBefore?: (params: MessageBaseParams<Date> & { pairDate: Date; }) => string;
        pairAfter?: (params: MessageBaseParams<Date> & { pairDate: Date; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $month = $ & {
    type: "month";
    validations?: Array<Validation<$month, Date>>;
    min?: string | number | Date | import("../objects/datetime").DateTime;
    max?: string | number | Date | import("../objects/datetime").DateTime;
    pair?: {
      name: string;
      position: "before" | "after";
      same?: boolean;
    };
    splitDataNames?: [string, string];
    formatPattern?: string;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<Date>) => string;
        range?: (params: MessageBaseParams<Date> & { min: Date; max: Date; }) => string;
        min?: (params: MessageBaseParams<Date> & { min: Date; }) => string;
        max?: (params: MessageBaseParams<Date> & { max: Date; }) => string;
        pairBefore?: (params: MessageBaseParams<Date> & { pairDate: Date; }) => string;
        pairAfter?: (params: MessageBaseParams<Date> & { pairDate: Date; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $time = $ & {
    type: "time";
    mode?: "hms" | "hm" | "ms";
    validations?: Array<Validation<$time>>;
    min?: number | Date | string | import("../objects/datetime").DateTime;
    max?: number | Date | string | import("../objects/datetime").DateTime;
    pair?: {
      name: string;
      position: "before" | "after";
      same?: boolean;
    };
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    formatPattern?: string;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<number>) => string;
        range?: (params: MessageBaseParams<number> & { min: number; max: number; }) => string;
        min?: (params: MessageBaseParams<number> & { min: number; }) => string;
        max?: (params: MessageBaseParams<number> & { max: number; }) => string;
        pairBefore?: (params: MessageBaseParams<number> & { pairTime: number; }) => string;
        pairAfter?: (params: MessageBaseParams<number> & { pairTime: number; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $datetime = $ & {
    type: "datetime";
    validations?: Array<Validation<$datetime>>;
    date: $date;
    time: $time;
    tz?: import("../objects/datetime").TimeZone | number;
    formatPattern?: string;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<import("../objects/datetime").DateTime>) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $file = $ & {
    type: "file";
    validations?: Array<Validation<$file>>;
    accept?: string;
    fileSize?: number;
    fileName?: string;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<File>) => string;
        accept?: (params: MessageBaseParams<File> & { accept: string; }) => string;
        size?: (params: MessageBaseParams<File> & { size: number; sizeText: string; }) => string;
      };
      parse?: {
        single?: (params: MessageBaseParams<Array<any>>) => string;
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    }
  };

  type $array<T extends $atoms | $array<any> | Array<$object>> = $ & {
    type: "array";
    item: Readly<T>;
    validations?: Array<Validation<$array<T>>>;
    length?: number;
    minLength?: number;
    maxLength?: number;
    source?: Source<ValueType<T>>;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<Array<$array<T>>>) => string;
        length?: (params: MessageBaseParams<Array<$array<T>>> & { length: number; currentLength: number; }) => string;
        range?: (params: MessageBaseParams<Array<$array<T>>> & { minLength: number; maxLength: number; currentLength: number; }) => string;
        minLength?: (params: MessageBaseParams<Array<$array<T>>> & { minLength: number; currentLength: number; }) => string;
        maxLength?: (params: MessageBaseParams<Array<$array<T>>> & { maxLength: number; currentLength: number; }) => string;
        contain?: (params: MessageBaseParams<Array<$array<T>>> & { source: Source<ValueType<T>> }) => string;
      };
      parse?: {
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $struct<T extends Array<$object>> = $ & {
    type: "struct";
    item: Readonly<T>;
    validations?: Array<Validation<$struct<T>>>;
    message?: {
      validation?: {
        required?: (params: MessageBaseParams<Array<$struct<T>>>) => string;
      };
      parse?: {
        typeof?: (params: MessageBaseParams<any>) => string;
      };
    };
  };

  type $atoms =
    | $any
    | $str
    | $num
    | $boolAny
    | $date
    | $month
    | $time
    | $datetime
    | $file
    ;

  type $object = $atoms | $array<$atoms | $array<any> | Array<$object>> | $struct<Array<$object>>;

}
