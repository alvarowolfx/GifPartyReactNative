/**
 * Created by alvaroviebrantz on 07/04/16.
 * @flow
 */

export type ImageSizes =
      'fixed_height'
    | 'fixed_height_still'
    | 'fixed_height_downsampled'
    | 'fixed_width'
    | 'fixed_width_still'
    | 'fixed_width_downsampled'
    | 'fixed_height_small'
    | 'fixed_height_small_still'
    | 'downsized'
    | 'downsized_still'
    | 'downsized_large'
    | 'original'
    | 'original_still';

export type ImageTypes = { [key: ImageSizes]: GiphyImage };

export type GiphyEntry = {
    id: string;
    images: ImageTypes;
}

export type GiphyImage = {
    url: string;
    width: string;
    height: string;
    size?: string;
}
