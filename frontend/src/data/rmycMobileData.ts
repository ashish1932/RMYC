export interface MobileAppRelease {
  version: string;
  buildNumber: string;
  releaseDate: string;
  apkSize: string;
  apkDownloadUrl: string;
  githubReleaseUrl: string;
  playStoreUrl: string;
  appStoreUrl: string;
  minimumAndroidVersion: string;
  minimumIosVersion: string;
}

export interface MemberPassData {
  memberId: string;
  memberName: string;
  membershipTier: string;
  skipperRating: string;
  berthAccess: string;
  yaiCertification: string;
  validUntil: string;
  qrCodeValue: string;
}

export interface MarineTelemetryData {
  locationName: string;
  windSpeedKnots: number;
  windDirection: string;
  swellHeightMeters: number;
  highTideTime: string;
  lowTideTime: string;
  seaTemperatureCelsius: number;
  sailingSafetyIndex: 'Optimal' | 'Moderate' | 'Caution' | 'Prohibited';
  lastUpdated: string;
}

export interface VesselSlotData {
  id: string;
  title: string;
  sub: string;
  price: string;
  capacity: string;
  availableSlots: string[];
}

export const RMYC_MOBILE_RELEASE: MobileAppRelease = {
  version: '1.0.4',
  buildNumber: '104',
  releaseDate: 'August 2026',
  apkSize: '24.8 MB',
  apkDownloadUrl: '/downloads/RMYC-Mobile-App.apk',
  githubReleaseUrl: 'https://github.com/ashish1932/RMYC/actions',
  playStoreUrl: 'https://play.google.com/store',
  appStoreUrl: 'https://apps.apple.com',
  minimumAndroidVersion: 'Android 8.0 (API 26) or higher',
  minimumIosVersion: 'iOS 15.0 or higher',
};

export const DEFAULT_MEMBER_PASS: MemberPassData = {
  memberId: 'RMYC-1911-0842',
  memberName: 'Captain Ashish Kumar',
  membershipTier: 'Life Member',
  skipperRating: 'J80 Keelboat Master',
  berthAccess: 'Harbour Dock A-12',
  yaiCertification: 'Level 3 Master Helmsman',
  validUntil: 'December 2026',
  qrCodeValue: 'RMYC:PASS:0842:VERIFIED:2026',
};

export const LIVE_MARINE_TELEMETRY: MarineTelemetryData = {
  locationName: 'Chennai Harbour & Offshore Patrol Sector 1',
  windSpeedKnots: 14,
  windDirection: 'ENE (East-North-East)',
  swellHeightMeters: 1.2,
  highTideTime: '14:30 IST (1.2m)',
  lowTideTime: '08:15 IST (0.3m)',
  seaTemperatureCelsius: 31,
  sailingSafetyIndex: 'Optimal',
  lastUpdated: 'Live Telemetry (Updated 5 mins ago)',
};

export const VESSEL_SLOTS: VesselSlotData[] = [
  {
    id: 'v-j80',
    title: 'J/80 Class Racing Keelboat',
    sub: 'International One-Design · Offshore Ready',
    price: 'Included with Life Membership',
    capacity: '5 Crew',
    availableSlots: ['06:30 - 09:30', '14:00 - 17:00', '17:00 - 19:00'],
  },
  {
    id: 'v-seabird',
    title: 'Seabird Class Vintage Sailboat',
    sub: 'Classic Heritage Wooden Craft',
    price: 'Free Slot Reservation',
    capacity: '3 Crew',
    availableSlots: ['07:00 - 10:00', '15:30 - 18:30'],
  },
  {
    id: 'v-enterprise',
    title: 'Enterprise Tactical Dinghy',
    sub: 'Agile Double-Handed Racer',
    price: 'Available Today',
    capacity: '2 Crew',
    availableSlots: ['06:00 - 08:00', '16:00 - 18:00'],
  },
];
