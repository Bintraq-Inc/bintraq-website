export const ENV = {
  API_URL: import.meta.env.VITE_API_URL as string | undefined,
  ANALYTICS_ID: import.meta.env.VITE_ANALYTICS_ID as string | undefined,
  CONTACT_EMAIL: (import.meta.env.VITE_CONTACT_EMAIL as string) || 'info@bintraq.com',
};