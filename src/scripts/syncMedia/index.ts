import { listmonkClient } from '../../listmonk';
import { uploadMissingMedia } from './uploadMissingMedia';

async function syncMedia() {
    console.log('fetching existing media from listmonk');
    const existingMedia = await listmonkClient.getAllMedia();
    await uploadMissingMedia(existingMedia);
    console.log('media successfully synced to listmonk');
}

void syncMedia();
