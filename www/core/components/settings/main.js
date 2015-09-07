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

angular.module('mm.core.settings', [])

.config(function($stateProvider) {

    $stateProvider

    //site.mm_oaucdl

    .state('site.mm_oaucdl', {
        url: '/mm_oaucdl',
        views: {
            'site': {
                templateUrl: 'core/components/settings/templates/oaucdllist.html'
            }
        }
    })

    .state('site.mm_oaucdl-home', {
            url: '/mm_oaucdl-home',
            views: {
                'site': {
                    templateUrl: 'core/components/settings/templates/home.html'
                    controller: 'mmLoginHomeCtrl'
                }
            }
        })

    .state('site.mm_oaucdl-degree', {
            url: '/mm_oaucdl-degree',
            views: {
                'site': {
                    templateUrl: 'core/components/settings/templates/degree.html'
                    //controller: 'mmLoginHomeCtrl'
                }
            }
        })

    .state('site.mm_oaucdl-predegree', {
            url: '/mm_oaucdl-predegree',
            views: {
                'site': {
                    templateUrl: 'core/components/settings/templates/degree.html'
                    //controller: 'mmLoginHomeCtrl'
                }
            }
        })

    .state('site.mm_oaucdl-master', {
            url: '/mm_oaucdl-master',
            views: {
                'site': {
                    templateUrl: 'core/components/settings/templates/master.html'
                    //controller: 'mmLoginHomeCtrl'
                }
            }
        })


   

//site.mm_settings
   .state('site.mm_settings', {
        url: '/mm_settings',
        views: {
            'site': {
                templateUrl: 'core/components/settings/templates/list.html'
            }
        }
    })
    
    
   // .state('site.mm_settings-home', {
   //      url: '/mm_settings-home',
   //      views: {
   //          'site': {
   //              templateUrl: 'core/components/settings/templates/home.html'
   //          }
   //      }
   //  })


    .state('site.mm_settings-about', {
        url: '/mm_settings-about',
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
