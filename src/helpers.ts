export enum ErrorTypes {
  Rolling = "RollingError",
  Unknown = "UnknownError"
}

export function createError(
  msg = "The sky is falling",
  type = ErrorTypes.Unknown
): Error {
  const error = new Error(msg);
  error.name = type;

  return error;
}
