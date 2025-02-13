import { useMemo, useRef } from "react";
import { useRefState } from "./ref-state";

export const useProcess = <Args extends Array<any>, Result extends any>(f: (...args: Args) => Promise<Result>) => {
  const [ing, set, ref] = useRefState(false);
  const fref = useRef(f);
  fref.current = f;
  const func = useMemo(() => {
    const func = async (...args: Args) => {
      if (ref.current) return;
      try {
        set(true);
        return await fref.current(...args);
      } catch (e) {
        throw e;
      } finally {
        set(false);
      }
    };
    func.isProcessing = ing;
    func.isPorcessingRef = ref;
    return func;
  }, []);
  func.isProcessing = ing;
  return func;
};
