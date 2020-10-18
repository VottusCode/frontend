import { QueryHookOptions, TypedDocumentNode, useQuery } from "@apollo/client";

export const suspend = (promise: Promise<any>) => {
  let status = "pending" as "success" | "error" | "pending";
  let response: any;

  const suspender = promise
    .then((res) => {
      status = "success";
      response = res;
    })
    .catch((err) => {
      status = "error";
      response = err;
    });

  const result = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      case "success":
      default:
        return response;
    }
  };

  return { result };
};

export const useSuspendQuery = (
  query: TypedDocumentNode,
  options?: QueryHookOptions
) => {
  const result = useQuery(query, options);
  if (result.loading) {
    suspend(new Promise((resolve) => !result.loading && resolve())).result();
  }

  return result;
};
