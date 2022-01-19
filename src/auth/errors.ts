import { ApiErrorImpl } from "../errors";

export class MissingAccessTokenError extends ApiErrorImpl {

  static code = "MISSING_ACCESS_TOKEN_ERROR";
  static message = "Missing access token";

  constructor() {
    super(MissingAccessTokenError.code, MissingAccessTokenError.message);
  }

}

export class InvalidSchemeAuthorizationError extends ApiErrorImpl {
  static code = "INVALID_SCHEME_AUTHORIZATION_ERROR";
  static message = "Invalid scheme authorization header";
  
  constructor() {
    super(InvalidSchemeAuthorizationError.code, InvalidSchemeAuthorizationError.message);
  }

}

export class InvalidAccessTokenFormatError extends ApiErrorImpl {
  static code = "INVALID_ACCESS_TOKEN_FORMAT_ERROR";
  static message = "Invalid access token format";

  constructor() {
    super(InvalidAccessTokenFormatError.code, InvalidAccessTokenFormatError.message);
  }
}

export class AuthorizationHeaderNotSupportedError extends ApiErrorImpl {
  static code = "AUTHORIZATION_HEADER_NOT_SUPPORTED_ERROR";
  static message = "Authorization header not supported";

  constructor() {
    super(AuthorizationHeaderNotSupportedError.code, AuthorizationHeaderNotSupportedError.message);
  }

}

export class VerifyingAccessTokenError extends ApiErrorImpl {
  static code = "VERIFYING_ACCESS_TOKEN_ERROR";
  static message = "Could not verify the access token";

  constructor() {
    super(VerifyingAccessTokenError.code, VerifyingAccessTokenError.message);
  }

}

export class MissingCredentialsError extends ApiErrorImpl {
  static code = "MISSING_CREDENTIALS_ERROR";
  static message = "Missing user credentials";

  constructor() {
    super(MissingCredentialsError.code, MissingCredentialsError.message);
  }

}

export class NotAuthorizedError extends ApiErrorImpl {
  static code = "NOT_AUTHORIZED_ERROR";
  static message = "User not authorized";

  constructor() {
    super(NotAuthorizedError.code, NotAuthorizedError.message);
  }

}

export class VerifyingUserPermissionsError extends ApiErrorImpl {
  static code = "VERIFYING_USER_PERMISSIONS_ERROR";
  static message = "Could not verify the user permissions";

  constructor() {
    super(VerifyingUserPermissionsError.code, VerifyingUserPermissionsError.message);
  }

}





