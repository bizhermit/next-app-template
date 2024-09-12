/* eslint-disable no-console */
"use client";

import { Button } from "@/react/elements/button";
import { Form } from "@/react/elements/form";
import { FormButton } from "@/react/elements/form/form-button";
import { NumberBox } from "@/react/elements/form/items/number-box";
import { TextBox } from "@/react/elements/form/items/text-box";
import { ToggleSwitch } from "@/react/elements/form/items/toggle-switch";
import { useFetch } from "@/react/hooks/fetch";
import useRouter from "@/react/hooks/router";
import $fetch from "@/utilities/fetch";

type Req = TypeofAppApi["/api"]["GET"]["req"];
type Res = TypeofAppApi["/api"]["GET"]["res"];

// type $Req = Api.Request<"/api", "get">;
// type $Res = Api.Response<"/api", "get">;

const Page = () => {
  const api = useFetch();
  const router = useRouter();

  return (
    <div>
      <Button
        onClick={async ({ unlock }) => {
          const res = await $fetch.get("/sandbox/fetch/api");
          console.log(res);
          unlock();
        }}
      >
        fetch
      </Button>
      <Button
        onClick={async ({ unlock }) => {
          try {
            const data = await api.get("/api", {
              hoge: "string",
              fuga: 3,
              piyo: true,
            }, {
              done: (res) => {
                return {
                  message: {
                    body: `piyo: ${res.data.req.piyo}`,
                  },
                };
              }
            });
            console.log(data);
          } catch (e) {
            console.log(e);
          }
          unlock();
        }}
      >
        fetch(hook) done
      </Button>
      <Button
        onClick={async ({ unlock }) => {
          try {
            const data = await api.get("/api", {}, {
              failed: (res) => {
                console.log(res);
                return {
                  message: {
                    // body: "hogehoge",
                    // title: null,
                  },
                  messageClosed: async () => {
                    console.log("msg closed");
                  },
                };
              }
            });
            console.log(data);
          } catch (e) {
            console.log(e);
          }
          unlock();
        }}
      >
        fetch(hook) failed
      </Button>
      <Button
        onClick={async ({ unlock }) => {
          try {
            const ret = await api.get("/home/api");
            console.log(ret.data.datetime);
          } catch (e) {
            console.log(e);
          }
          unlock();
        }}
      >
        fetch (auth)
      </Button>
      <Button
        onClick={async ({ unlock }) => {
          try {
            api.get("/api", {}, {
              failed: (res) => {
                console.log(res);
                return {
                  message: {
                    // body: "hogehoge",
                    // title: null,
                  },
                  messageClosed: async () => {
                    console.log("msg closed");
                  },
                };
              }
            }).then((data) => {
              console.log(data);
            });
            router.push("/sandbox");
          } catch (e) {
            console.log(e);
          }
          unlock();
        }}
      >
        fetch (transition)
      </Button>
      <Form
        onSubmit={async ({ getBindData }) => {
          await api.get("/api", getBindData());
        }}
      >
        <TextBox
          name="hoge"
        />
        <NumberBox
          name="fuga"
        />
        <ToggleSwitch
          name="piyo"
        />
        <FormButton type="submit">
          submit
        </FormButton>
        <FormButton type="reset">
          reset
        </FormButton>
      </Form>
    </div>
  );
};

export default Page;