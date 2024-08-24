import { LISTMONK_PASSWORD, LISTMONK_URL, LISTMONK_USERNAME } from '@/config';

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

        return await this._send('GET', `/api/media?${urlParams.toString()}`);
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
        return await this._send('POST', '/api/media', formData);
    }

    public async getCampaigns({
        page = 1,
        query,
    }: {
        page?: number;
        query?: string;
    }): Promise<ListmonkResponse<ListmonkPaginationResponse<Campaign>>> {
        const urlParams = new URLSearchParams();
        urlParams.set('per_page', ListmonkClient.PER_PAGE.toString());
        urlParams.set('page', page.toString());

        if (query) {
            urlParams.set('query', query);
        }

        return await this._send(
            'GET',
            `/api/campaigns?${urlParams.toString()}`,
        );
    }

    public async createCampaign(
        args: CreateUpdateCampaign,
    ): Promise<ListmonkResponse<Campaign>> {
        return await this._send('POST', '/api/campaigns', args);
    }

    public async updateCampaign(
        id: number | string,
        args: CreateUpdateCampaign,
    ): Promise<ListmonkResponse<Campaign>> {
        return await this._send('PUT', `/api/campaigns/${id}`, args);
    }

    private async _send(
        method: string,
        path: string,
        body?: Record<string, unknown> | FormData,
    ) {
        const headers = {
            Authorization: `Basic ${btoa(`${this._username}:${this._password}`)}`,
        };

        let serializedBody: BodyInit;

        if (body instanceof FormData) {
            serializedBody = body;
        } else {
            headers['Content-Type'] = 'application/json';
            serializedBody = JSON.stringify(body);
        }

        return await fetch(`${this._baseUrl}${path}`, {
            method: method,
            headers,
            body: serializedBody,
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

export type CreateUpdateCampaign = {
    name: string;
    subject: string;
    lists: number[];
    type: string;
    content_type: CampaignContentType;
    body: string;
};

export interface Campaign {
    id: number;
    created_at: string;
    updated_at: string;
    views: number;
    clicks: number;
    bounces: number;
    lists: { id: number; name: string }[];
    started_at: string | null;
    to_send: number;
    sent: number;
    uuid: string;
    type: string;
    name: string;
    subject: string;
    from_email: string;
    body: string;
    altbody: string | null;
    send_at: string | null;
    status: CampaignStatus;
    content_type: CampaignContentType;
    tags: string[];
    template_id: number;
    messenger: string;
}

export enum CampaignContentType {
    richText = 'richtext',
    html = 'html',
    markdown = 'markdown',
    plain = 'plain',
}

export enum CampaignType {
    regular = 'regular',
    optIn = 'optin',
}

export enum CampaignStatus {
    scheduled = 'scheduled',
    draft = 'draft',
    paused = 'paused',
    running = 'running',
    cancelled = 'cancelled',
    finished = '',
}

export const listmonkClient = new ListmonkClient(
    LISTMONK_URL,
    LISTMONK_USERNAME,
    LISTMONK_PASSWORD,
);
