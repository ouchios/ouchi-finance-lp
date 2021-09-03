/* eslint-disable @typescript-eslint/indent */
export type Action<P> = Readonly<{
  type: string;
  payload: Readonly<P>;
}>;

export type ActionResponse<P> = Action<
  Readonly<{
    response: Readonly<{
      status: number;
      data: P;
    }>;
  }>
>;

export type ActionFail<E> = Action<
  Readonly<{
    response: Readonly<{
      status: number;
    }>;
    message: E;
  }>
>;

export type Status = 'initial' | 'pending' | 'success' | 'failure';
