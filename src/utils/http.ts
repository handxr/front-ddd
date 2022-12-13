export class HttpService {
  static async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }

  static async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  }
}
