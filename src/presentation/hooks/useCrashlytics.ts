import crashlytics from '@react-native-firebase/crashlytics';
import { getVersion, getDeviceId } from 'react-native-device-info';

interface EventCrashType {
  scope: 'API' | 'SDK';
  fileName: string;
  service?: string;
  sdk?: 'GOOGLE' | 'FACEBOOK' | 'Zendesk' | '';
  error?: any;
  extraData?: { [name: string]: string };
}

export const logCrashlytics = async ({
  scope,
  fileName,
  service = '',
  error,
  sdk = '',
  extraData,
}: EventCrashType) => {
  const attributes = {
    scope,
    fileName,
    error: JSON.stringify(error),
    appVersion: getVersion(),
    deviceId: getDeviceId(),
    ...extraData,
  };
  crashlytics().log(scope);
  await crashlytics().setAttributes(
    scope === 'API' ? { ...attributes, service } : { ...attributes, sdk },
  );
  crashlytics().recordError(new Error(error));
};
