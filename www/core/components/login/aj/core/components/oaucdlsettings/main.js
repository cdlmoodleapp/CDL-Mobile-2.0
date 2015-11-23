// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.core.oaucdlsettings', [])

.config(function($stateProvider) {

    $stateProvider

//site.mm_settings
   .state('site.mm_oaucdlsettings', {
        url: '/mm_oaucdlsettings',
        views: {
            'site': {
                templateUrl: 'core/components/oaucdlsettings/templates/list.html'
            }
        }
    })
    
    .state('site.mm_oaucdlsettings-about', {
        url: '/mm_oaucdlsettings-about',
        views: {
            'site': {
                templateUrl: 'core/components/settings/templates/about.html',
                controller: 'mmSettingsAboutCtrl'
            }
        }
    })

    .state('site.mm_settings-general', {
        url: '/mm_settings-general',
        views: {
            'site': {
                templateUrl: 'core/components/settings/templates/general.html',
                controller: 'mmSettingsGeneralCtrl'
            }
        }
    })

    .state('site.mm_settings-spaceusage', {
        url: '/mm_settings-spaceusage',
        views: {
            'site': {
                templateUrl: 'core/components/settings/templates/space-usage.html',
                controller: 'mmSettingsSpaceUsageCtrl'
            }
        }
    })

    .state('site.mm_settings-synchronization', {
        url: '/mm_settings-synchronization',
        views: {
            'site': {
                templateUrl: 'core/components/settings/templates/synchronization.html',
                controller: 'mmSettingsSynchronizationCtrl'
            }
        }
    });
});
