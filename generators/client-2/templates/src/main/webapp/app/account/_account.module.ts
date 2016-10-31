import * as angular from 'angular';

import { upgradeAdapter } from '../upgrade_adapter';

import {
    Register,
    Activate,
    Password,
    PasswordResetInit,
    PasswordResetFinish,
    <%_ if (authenticationType === 'session') { _%>
    SessionsService,
    SessionsComponent,
    <%_ } _%>
    PasswordStrengthBarComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    <%_ if (enableSocialSignIn) { _%>
    <%_ if (authenticationType == 'jwt') { _%>
    SocialAuthComponent,
    <%_ } _%>
    SocialRegisterComponent,
    <%_ } _%>
    SettingsComponent
} from './';

angular
    .module('<%=angularAppName%>.account', [
        <%_ if (enableTranslation) { _%>
        'tmh.dynamicLocale',
        <%_ } _%>
        'ngResource',
        'ui.bootstrap',
        'ui.router'
    ])
    <%_ if (enableSocialSignIn) { _%>
    <%_ if (authenticationType == 'jwt') { _%>
    .directive('socialAuthComponent', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(SocialAuthComponent))
    <%_ } _%>
    .directive('socialRegisterComponent', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(SocialRegisterComponent))
    <%_ } _%>
    .directive('passwordStrengthBar', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PasswordStrengthBarComponent))
    .directive('jhiRegister', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(RegisterComponent))
    .directive('activate', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(ActivateComponent))
    .directive('password', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PasswordComponent))
    .directive('passwordResetInit', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PasswordResetInitComponent))
    .directive('passwordResetFinish', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PasswordResetFinishComponent))
    <%_ if (authenticationType === 'session') { _%>
    .directive('sessions', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(SessionsComponent))
    <%_ } _%>
    .directive('settings', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(SettingsComponent));
