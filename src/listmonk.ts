import { LISTMONK_PASSWORD, LISTMONK_URL, LISTMONK_USERNAME } from './config';

export class ListmonkClient {
    private static PER_PAGE = 100;
    constructor(
        private _baseUrl: string,
        private _username: string,
        private _password: string,
    ) {}

    public async getMedia(
        page = 1,
    ): Promise<ListmonkResponse<ListmonkPaginationResponse<Media>>> {
        const urlParams = new URLSearchParams();
        urlParams.set('per_page', ListmonkClient.PER_PAGE.toString());
        urlParams.set('page', page.toString());

        return this._send('GET', `/api/media?${urlParams.toString()}`);
    }

    public async getAllMedia(): Promise<Media[]> {
        let hasMore = true;
        let page = 1;
        const media: Media[] = [];

        while (hasMore) {
            const res = await this.getMedia(page);
            media.push(...res.data.results);
            hasMore = media.length < res.data.total;
            page += 1;
        }

        return media;
    }

    public async uploadMedia(fileData: Buffer, fileName: string) {
        const formData = new FormData();
        formData.append('file', new Blob([fileData]), fileName);
        return this._send('POST', '/api/media', formData);
    }

    private async _send(method: string, path: string, body?: BodyInit) {
        return await fetch(`${this._baseUrl}${path}`, {
            method: method,
            headers: {
                Authorization: `Basic ${btoa(`${this._username}:${this._password}`)}`,
            },
            body,
        }).then((res) => res.json());
    }
}

export interface ListmonkResponse<TData> {
    data: TData;
}

export interface ListmonkPaginationResponse<TItem> {
    results: TItem[];
    query: string;
    total: number;
    per_page: number;
    page: number;
}

export interface Media {
    id: number;
    uuid: string;
    filename: string;
    content_type: string;
    created_at: Date;
    thumb_url: string;
    provider: string;
    meta: {
        height: number;
        width: number;
    };
    url: string;
}

export const listmonkClient = new ListmonkClient(
    LISTMONK_URL,
    LISTMONK_USERNAME,
    LISTMONK_PASSWORD,
);
