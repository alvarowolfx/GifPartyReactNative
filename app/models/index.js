/**
 * Created by alvaroviebrantz on 07/04/16.
 * @flow
 */
 
export type ImageTypes = { [key: string]: GiphyImage };

export type GiphyEntry = {
    id: string;
    images: ImageTypes;
}

export type GiphyImage = {
    url: string;
    width: string;
    height: string;
    size: ?string;
}