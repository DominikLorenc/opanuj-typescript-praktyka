import { type User, regularUser } from './user-model.ts';

interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

type Role = 'admin' | 'user' | 'guest';

interface Settings {
  notifications: boolean;
  theme: 'light' | 'dark';
  language: string;
};



const formatName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

const formatAddress = (address: Address): string => {
  return `${address.street}, ${address.city}, ${address.country} ${address.postalCode}`;
};

const isCandidateForDeletion = (role: Role, isActive: boolean): boolean => {
  return role === 'guest' && !isActive;
};

const getUserLocale = (settings: Settings): string => {
  return settings.language || 'en';
};

const validateAge = (dateOfBirth: Date, minAge: number): boolean => {
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    return age - 1 >= minAge;
  }

  return age >= minAge;
};

const hasPhone = (phoneNumbers: string[]): boolean => {
  return phoneNumbers.length > 0;
};

const canSendEmailNotification = (email: string, settings: Settings): boolean => {
  return Boolean(email) && settings.notifications;
};

formatName(regularUser.firstName, regularUser.lastName);
formatAddress(regularUser.address);
isCandidateForDeletion(regularUser.role, regularUser.isActive);
getUserLocale(regularUser.settings);
validateAge(regularUser.dateOfBirth, 18);
hasPhone(regularUser.phoneNumbers);
canSendEmailNotification(regularUser.email, regularUser.settings);
