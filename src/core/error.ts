export class GeneralError extends Error {
  constructor(public message: string, public e?: any) {
    super();
  }

  getMessage(): string {
    this.beforeGetMessage();
    return this.message;
  }

  beforeGetMessage(): void {
    /*
     * TODO: implement Translate later
     *
     * Fỉre event
     */
  }

  toString() {
    return this.getMessage();
  }
}
