import { IExtraContext } from '../extra';
import { askLocationExtra, locationExtra, sendLocationExtra } from '../extra/location';

export const handleLocation = ({ request, translation }): string => {
    if ('LOCATION-ASK' === request) {
        return translation.t('askLocationOptions');
    } if ('LOCATION-SEND' === request) {
        return translation.t('sendLocationOptions');
    }

    return translation.t('locationOptions');
};

export const handleLocationExtra = ({ request, translation }: IExtraContext) => {
    if ('LOCATION-ASK' === request) {
        return askLocationExtra(translation);
    } if ('LOCATION-SEND' === request) {
        return sendLocationExtra(translation);
    }

    return locationExtra(translation);
};