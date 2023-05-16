export enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

export interface Options {
    method: METHODS;
    data?: any;
    headers?: Record<string, string>;
}

export class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';
    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
    }

    public get<Response>(path = '/', data?: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: METHODS.GET,
            data: data,
        });
    }

    public put<Response = void>(path: string, data: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: METHODS.PUT,
            data: data,
        })
    }

    public post<Response = void>(path: string, data?: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: METHODS.POST,
            data: data,
        })
    }

    public patch<Response = void>(path: string, data: unknown): Promise<Response> {
        return this.request<Response>(this.endpoint + path, {
            method: METHODS.PATCH,
            data: data,
        })
    }
 
    public delete<Response>(path: string, data?: unknown): Promise<Response> {
        return this.request(this.endpoint + path, {
            method: METHODS.DELETE,
            data: data
        });
    }

    private request<Response>(url: string, options: Options = {method: METHODS.GET}): Promise<Response> {
        const {method, data, headers} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            if (method) {
                xhr.open(method, url);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response)
                    } else {
                        reject(xhr.response)
                    }
                }
            }

            xhr.onabort = () => reject({reason: 'abort'});
            xhr.onerror = () => reject({reason: 'network error'});
            xhr.ontimeout = () => reject({reason: 'timeout'});


            if (headers) {
                for (const [key, value] of Object.entries(headers)) {
                    if (typeof value === 'string') {
                        xhr.setRequestHeader(key, value);
                    }
                }
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                if (data instanceof FormData) {
                    xhr.send(data);
                } else {
                    const formData = new FormData();
                    formData.append('image', data);
                    xhr.send(formData);
                }
            }
        });
    }
}

