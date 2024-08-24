import * as fs from 'fs/promises';
import * as path from 'path';
import { listmonkClient, Media } from '@/listmonk';

const LOCAL_MEDIA_DIR = path.join('src', 'emails', 'static');

export async function uploadMissingMedia(existingMedia: Media[]) {
    const localMedia = await fs.readdir(LOCAL_MEDIA_DIR);
    const existingFileNames = existingMedia.map((m) => m.filename);
    const mediaToUpload = localMedia.filter(
        (fileName) => !existingFileNames.includes(fileName),
    );

    console.log(`found ${mediaToUpload.length} missing media files`);

    for (const fileName of mediaToUpload) {
        console.log(`uploading ${fileName}`);
        const data = await fs.readFile(path.join(LOCAL_MEDIA_DIR, fileName));
        await listmonkClient.uploadMedia(data, fileName);
        console.log(`${fileName} uploaded`);
    }
}
