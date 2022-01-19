import { USER_ID_KEY, USER_ROLES } from "../constants";
import { writeLogErr, writeLogWarn } from "../logger";
import { MissingCredentialsError, NotAuthorizedError, VerifyingUserPermissionsError } from "./errors";

const hasRole = (roles: string[], role: string) => {
  return (roles || []).findIndex(r => r === role) >= 0;
};

function validate(roles: string[], req: any, res: any, next: any): void {
  try {
    if(!req[USER_ID_KEY] || !req[USER_ID_KEY].roles || req[USER_ID_KEY].roles.length <= 0) {
      const error = new MissingCredentialsError();
      writeLogErr(req, error);
      res.status(401).send({ error });
      return;
    }
    const userRoles = req[USER_ID_KEY].roles;

    let authorized: boolean = false;

    roles.forEach((role: string) => {
      if (hasRole(userRoles, role)) {
        authorized = true;
        return;
      }
    });

    if (authorized) {
      return next();
    }
    const error = new NotAuthorizedError();
    writeLogWarn(req, error);
    res.status(401).send({ error });
    return;
  } catch(reason: any) {
    const error = new VerifyingUserPermissionsError();
    writeLogErr(req, error, reason);
    res.status(400).send({ error });
  }
}

export function isSuperAdmin(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN
  ];
  return validate(roles, req, res, next);
}

export function isAdmin(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN
  ];
  return validate(roles, req, res, next);
}

export function isWebMaster(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function isAuthor(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.AUTHOR
  ];
  return validate(roles, req, res, next);
}

export function isEditor(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.EDITOR
  ];
  return validate(roles, req, res, next);
}

export function isReviewer(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.REVIEWER
  ];
  return validate(roles, req, res, next);
}

export function isCollaborator(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.COLLABORATOR
  ];
  return validate(roles, req, res, next);
}

export function isMediaAuthor(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.MEDIA_AUTHOR
  ];
  return validate(roles, req, res, next);
}

export function isAnalyst(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.ANALYST
  ];
  return validate(roles, req, res, next);
}

export function canAdminAnalyticalReports(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.ANALYST
  ];
  return validate(roles, req, res, next);
}

export function isAdminOrWebMaster(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminClassifieds(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminInvoices(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminOrders(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminPayments(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminContent(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.AUTHOR,
    USER_ROLES.EDITOR
  ];
  return validate(roles, req, res, next);
}

export function canViewBuckets(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.ANALYST,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminDataSources(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.ANALYST,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminEmailTemplates(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canViewMultimedia(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.AUTHOR,
    USER_ROLES.MEDIA_AUTHOR,
    USER_ROLES.EDITOR,
    USER_ROLES.REVIEWER,
    USER_ROLES.COLLABORATOR
  ];
  return validate(roles, req, res, next);
}

export function canAdminMultimedia(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.AUTHOR,
    USER_ROLES.MEDIA_AUTHOR
  ];
  return validate(roles, req, res, next);
}

export function canDeleteContactMessages(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminContactMessages(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canDeleteContentComments(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminContentComments(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canDeleteContentRates(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}

export function canAdminContentRates(req: any, res: any, next: any): void {
  const roles: string[] = [
    USER_ROLES.SUPER_ADMIN,
    USER_ROLES.ADMIN,
    USER_ROLES.WEB_MASTER
  ];
  return validate(roles, req, res, next);
}
