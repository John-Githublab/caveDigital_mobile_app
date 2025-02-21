import LocalStorage from "@/utils/LocalStorage";
import { toast } from "./Toast";
export interface ApiResponse {
  code: number;
  data?: { responseCode: number; result: any };
  message?: string;
  [key: string]: any; // To handle additional properties in the API response
}

interface RequestConfig extends RequestInit {
  headers: Record<string, string>;
}

const APIRequest = {
  request: async function (
    method: string,
    url: string,
    body: string | object = ""
  ): Promise<ApiResponse | null> {
    let config: RequestConfig = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    if (await LocalStorage.getData("token")) {
      config.headers.authToken = (await LocalStorage.getData("token")) || "";
    }

    if (body !== "") {
      config = {
        ...config,
        body: typeof body === "string" ? body : JSON.stringify(body),
      };
    }

    try {
      const response = await fetch(url, config);

      response.headers.forEach((val: any, key: any) => {
        if (key === "reconnection" && val === "true") {
          const userToken = response.headers.get("user-token");
          if (userToken) {
            sessionStorage.setItem("payhub.session", userToken);
          }
        }
      });

      const data = await response.json();

      return this.returnResponse(data);
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  returnResponse(data: ApiResponse): ApiResponse | null {
    if (data?.code === 600) {
      toast(data?.message || "");
      return null;
    }
    // Optionally transform the response here if needed
    if (data.data?.responseCode === 108) {
      return null;
    }
    return data;
  },
};

export default APIRequest;
