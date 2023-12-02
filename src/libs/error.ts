export class HttpError extends Error {
  public status;
  constructor(message: string, status: number) {
    super(message)
    this.name = "HttpError"
    this.status = status
  }
}
