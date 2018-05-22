export class GeneralError extends Error {
  constructor(public message: string, public e?: any) {
    super();
  }

  toString() {
    return this.getMessage();
  }

  protected getMessage(): string {
    this.beforeGetMessage();
    return this.message;
  }

  protected beforeGetMessage(): void {
    /*
     * TODO: implement Translate later
     *
     * Fỉre event
     */
  }

}
