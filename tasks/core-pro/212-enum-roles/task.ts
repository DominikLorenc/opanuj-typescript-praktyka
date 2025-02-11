export const enum UserPermission {
  VIEW = 'view',
  READ = 'read',
  WRITE = 'write',
  DELETE = 'delete',
}

export const enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  VIEWER = 'viewer',
}

export interface User {
  role: UserRole;
  permissions: string[]
}

export function hasAccess(user: User, requiredPermission: string): boolean {
  if (user.role === UserRole.ADMIN) return true;
  return user.permissions.includes(requiredPermission);
}
