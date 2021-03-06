// @flow

export * from './Colors'
export * from './Fonts'
export * from './Theme'
export * from './IconConstants'
export * from './OtpConstants'
export * from './ToLocalizeConstants'

/* export const LEFT_TO_RIGHT = 'leftToRight'
export const RIGHT_TO_LEFT = 'rightToLeft'
export const NONE ='none'
export const FROM ='from'
export const TO ='to' */
export const ALWAYS = 'always'

export const WORKFLOW_FIRST_LOAD = 'firstLoadWF'
export const WORKFLOW_INIT = 'initalizeWF'
export const WORKFLOW_CREATE = 'createWF'
export const WORKFLOW_PASSWORD = 'passwordWF'
export const WORKFLOW_PASSWORD_FORCED = 'passwordWFForced'
export const WORKFLOW_PIN = 'pinWF'

export const WORKFLOW_RECOVERY = 'recoveryWF'
export const WORKFLOW_RECOVERY_LOGIN = 'recoveryLoginWF'
export const WORKFLOW_FINGERPRINT = 'fingerprintWF'
export const WORKFLOW_OTP = 'otpWF'

export const WORKFLOW_START = 'workflowStart'
export const WORKFLOW_SKIP = 'workflowSkip'
export const WORKFLOW_LAUNCH_MODAL = 'workflowLaunchModal'
export const WORKFLOW_CANCEL_MODAL = 'workflowCancelSkip'
export const WORKFLOW_BACK = 'workflowBack'
export const WORKFLOW_CANCEL = 'workflowCancel'
export const WORKFLOW_NEXT = 'workflowNext'

// create actions
export const CREATE_UPDATE_USERNAME = 'createUpdateUsername'
export const CREATE_UPDATE_PIN = 'createUpdatePin'
export const LOG_IN_PIN = 'LOG_IN_PIN'
export const LOGIN_SUCCEESS = 'USERNAME_PASSWORD'
export const LOGIN_RECOVERY_SUCCEESS = 'loginRecoverySuccess'
export const LOGIN_USERNAME_PASSWORD_FAIL = 'USERNAME_PASSWORD_FAIL'
export const LOGIN_PIN_FAIL = 'LOGIN_PIN_FAIL'
export const OTP_LOGIN_BACKUPKEY_FAIL = 'otpLoginBackupKeyFail'
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
export const CREATE_ACCOUNT_FAIL = 'CREATE_ACCOUNT_FAIL'
export const ACCEPT_TERMS_CONDITIONS = 'acceptTermsAndConditions'
export const SET_PREVIOUS_USERS = 'SET_PREVIOUS_USERS'

// Login Actions
export const AUTH_UPDATE_USERNAME = 'authUpdateUsername'
export const AUTH_UPDATE_PASSWORD = 'authUpdatePassword'
export const AUTH_UPDATE_LOGIN_PASSWORD = 'authUpdateLoginPassword'
export const AUTH_UPDATE_CONFIRM_PASSWORD = 'authUpdatePasswordConfirm'
export const AUTH_UPDATE_PIN = 'authUpdatePin'
export const AUTH_LOGGING_IN_WITH_PIN = 'authLoggingInWithPin'
export const AUTH_UPDATE_OTP_BACKUP_KEY = 'authSetOtpBackupKey'
export const DELETE_USER_FROM_DEVICE = 'deleteUserFromDevice'
export const UPDATE_WAIT_TIMER = 'updatWaitTimer'
// Change Password Pin Actions =
export const LAUNCH_NOTIFICATION_MODAL = 'launchNotificationmodal'
export const CLOSE_NOTIFICATION_MODAL = 'closeNotificationmodal'

export const OTP_ERROR = 'otpError'
export const OTP_RESET_REQUEST = 'otpResetRequest'
export const START_EDGE_LOGIN_REQUEST = 'onEdgeLoginRequest'
export const CANCEL_EDGE_LOGIN_REQUEST = 'cancelEdgeLoginRequest'

export const PASSWORD_RECOVERY_INITIALIZED = 'passwordRecoveryInitialized'
export const ON_RECOVERY_KEY = 'onRecoveryKey'
export const ON_RECOVERY_LOGIN_IS_ENABLED = 'onRecoveryLoginIsEnabled'
export const ON_RECOVERY_LOGIN_NOT_ENABLED = 'onRecoveryLoginNOTEnabled'
export const ON_RECOVERY_LOGIN_ERROR = 'onRecoveryLoginError'
export const ON_DISABLE_RECOVERY = 'onDisableRecovery'
export const DISMISS_REOVERY_ERROR = 'dismissRecoveryError'
export const DISMISS_EMAIL_MODAL = 'dismissRecoveryError'
export const RESET_APP = 'resetApplication'

export const SET_RECOVERY_KEY = 'resetRecoveryKey'
export const CANCEL_RECOVERY_KEY = 'cancelRecoveryKey'
export const START_RECOVERY_LOGIN = 'startRecoveryKeyLogin'
