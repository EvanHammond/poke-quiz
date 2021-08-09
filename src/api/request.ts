export type TaskResult<Error, Success> =
  | {
      status: 'success';
      code: number;
      value: Success;
    }
  | {
      status: 'error';
      code: number;
      value: Error;
    };

export type Task<Error, Success> = Promise<TaskResult<Error, Success>>;
export type Api$ApplicationError = {
  type: string;
  message: string;
};
export type Api$Task<Success> = Task<Api$ApplicationError, Success>;

function rawRequest(input: RequestInfo, init?: RequestInit | undefined): Promise<Response> {
  const controller = new AbortController();
  const requestTimer = setTimeout(() => controller.abort(), 120000);

  return fetch(input, {
    ...init,
    signal: controller.signal,
  }).finally(() => {
    clearTimeout(requestTimer);
  });
}

function httpRequest<ResponseData>(options: {
  method: 'GET';
  url: string;
  headers?: Record<string, unknown>;
}): Api$Task<ResponseData> {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return rawRequest(options.url, {
    method: options.method,
    headers,
  })
    .then((response: Response) => requestSuccess<ResponseData>(response))
    .catch((error: Error) => requestError<ResponseData>(error));
}

export function requestSuccess<ResponseData>(response: Response) {
  return response.json().then((json) => {
    return response.ok
      ? ({
          status: 'success',
          code: response.status,
          value: json,
        } as TaskResult<Api$ApplicationError, ResponseData>)
      : ({
          status: 'error',
          code: response.status,
          value: {
            type: 'Exception',
            message: 'Something went wrong.',
          },
        } as TaskResult<Api$ApplicationError, ResponseData>);
  });
}

export function requestError<ResponseData>(error: Error) {
  return {
    status: 'error',
    code: 500,
    value: {
      type: 'Exception',
      message: error.message ?? 'Something went wrong.',
    },
  } as TaskResult<Api$ApplicationError, ResponseData>;
}

export function get<Response>(url: string): Api$Task<Response> {
  return httpRequest({
    method: 'GET',
    url,
  });
}
