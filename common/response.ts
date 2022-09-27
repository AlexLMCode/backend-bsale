class Response {
  statusCode: number;
  message: string | undefined;
  data: any;
  error: any;

  constructor(
    statusCode = 200,
    customMessage = undefined,
    data = undefined,
    error = undefined
  ) {
    this.statusCode = statusCode;
    this.message = customMessage;
    this.data = data;
    this.error = error;
  }
}

export default Response;
