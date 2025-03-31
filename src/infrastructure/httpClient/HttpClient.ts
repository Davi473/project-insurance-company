export default interface HttpClient {
    post (url: string, data: any, headers?: any): Promise<any>;
    put (url: string, data: any, headers?: any): Promise<any>;
}

export class HttpClientFetch implements HttpClient{
    constructor (readonly site: string) {}

    public async post(url: string, data: any, headers?: any): Promise<any> {
        return this.request("POST", url, data, headers);
    }

    public async put(url: string, data: any, headers?: any): Promise<any> {
        return this.request("PUT", url, data, headers);
    }

    private async request(method: string, url: string, data: any, header?: any): Promise<any> {
        const headers = {
            ...(header || null),
            "content-type": "application/json",
        };
        const response = await fetch(this.site + url, {
            method,
            headers,
            body: JSON.stringify(data)
        });
        return await response.json();
    } 
}