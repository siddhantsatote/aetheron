export const ADMIN_USERNAME = "admin";
export const ADMIN_PASSWORD = "aetheron2005";
export const ADMIN_COOKIE_NAME = "aetheron_admin_session";
export const ADMIN_COOKIE_VALUE = "authenticated";

export function isValidAdminCredentials(username, password) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}
