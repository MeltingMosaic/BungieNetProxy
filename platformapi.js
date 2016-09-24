var bungieNetPlatform = bungieNetPlatform || {}, Globals, Cookies;
(function() {
    var n = bungieNetPlatform;
    n.jsonpService = {
        dataStore: [],
        jsonpData: {
            getCacheItem: function(t) {
                return n.jsonpService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.jsonpService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.jsonpService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.jsonpService.dataStore["Set_" + t.id] = t
            }
        },
        GetCurrentUser: function(t, i, r, u) {
            var f = "", e;
            return f = n.addParam(f, "callback", t),
            e = n.buildUrl("/JSONP/GetBungieNetUser/", f, u),
            n.pushGa("JSONP", "GetCurrentUser", e),
            n.serviceLibrary.get(e, i, r)
        }
    }
})(jQuery),
function() {
    var n = bungieNetPlatform;
    n.applicationService = {
        dataStore: [],
        applicationData: {
            getCacheItem: function(t) {
                return n.applicationService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.applicationService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.applicationService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.applicationService.dataStore["Set_" + t.id] = t
            }
        },
        GetAccessTokensFromCode: function(t, i, r, u) {
            var f = n.buildUrl("/App/GetAccessTokensFromCode/", "", u);
            return n.pushGa("App", "GetAccessTokensFromCode", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        GetAccessTokensFromRefreshToken: function(t, i, r, u) {
            var f = n.buildUrl("/App/GetAccessTokensFromRefreshToken/", "", u);
            return n.pushGa("App", "GetAccessTokensFromRefreshToken", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        CreateApplication: function(t, i, r, u) {
            var f = n.buildUrl("/App/CreateApplication/", "", u);
            return n.pushGa("App", "CreateApplication", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        GetApplication: function(t, i, r, u) {
            var f = n.buildUrl("/App/Application/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("App", "GetApplication", f),
            n.serviceLibrary.get(f, i, r)
        },
        EditApplication: function(t, i, r, u, f) {
            var e = n.buildUrl("/App/EditApplication/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("App", "EditApplication", e),
            n.serviceLibrary.post(e, t, r, u)
        },
        GetApplicationApiKeys: function(t, i, r, u) {
            var f = n.buildUrl("/App/ApplicationApiKeys/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("App", "GetApplicationApiKeys", f),
            n.serviceLibrary.get(f, i, r)
        },
        ChangeApiKeyStatus: function(t, i, r, u, f) {
            var e = n.buildUrl("/App/ChangeApiKeyState/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("App", "ChangeApiKeyStatus", e),
            n.serviceLibrary.post(e, null , r, u)
        },
        CreateApiKey: function(t, i, r, u) {
            var f = n.buildUrl("/App/CreateApiKey/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("App", "CreateApiKey", f),
            n.serviceLibrary.post(f, null , i, r)
        },
        GetAuthorizations: function(t, i, r, u, f) {
            var e = "", o;
            return e = n.addParam(e, "currentPage", i),
            o = n.buildUrl("/App/Authorizations/" + encodeURIComponent(t) + "/", e, f),
            n.pushGa("App", "GetAuthorizations", o),
            n.serviceLibrary.get(o, r, u)
        },
        RevokeAuthorization: function(t, i, r, u, f) {
            var e = n.buildUrl("/App/RevokeAuthorization/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("App", "RevokeAuthorization", e),
            n.serviceLibrary.post(e, null , r, u)
        },
        ApplicationSearch: function(t, i, r, u) {
            var f = n.buildUrl("/App/Search/", "", u);
            return n.pushGa("App", "ApplicationSearch", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        PrivateApplicationSearch: function(t, i, r, u) {
            var f = n.buildUrl("/App/PrivateSearch/", "", u);
            return n.pushGa("App", "PrivateApplicationSearch", f),
            n.serviceLibrary.post(f, t, i, r)
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.userService = {
        dataStore: [],
        userData: {
            getCacheItem: function(n) {
                return t.userService.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.userService.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.userService.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.userService.dataStore["Set_" + n.id] = n
            }
        },
        CreateUser: function(n, i, r, u) {
            var f = t.buildUrl("/User/CreateUser/", "", u);
            return t.pushGa("User", "CreateUser", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        UpdateUser: function(n, i, r, u) {
            var f = t.buildUrl("/User/UpdateUser/", "", u);
            return t.pushGa("User", "UpdateUser", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        UpdateDestinyEmblemAvatar: function(n, i, r, u) {
            var f = t.buildUrl("/User/UpdateDestinyEmblemAvatar/", "", u);
            return t.pushGa("User", "UpdateDestinyEmblemAvatar", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        UpdateUserAdmin: function(n, i, r, u, f) {
            var e = t.buildUrl("/User/UpdateUserAdmin/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("User", "UpdateUserAdmin", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        UpdateNotificationSetting: function(n, i, r, u) {
            var f = t.buildUrl("/User/Notification/Update/", "", u);
            return t.pushGa("User", "UpdateNotificationSetting", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        EditSuccessMessageFlags: function(n, i, r, u) {
            var f = t.buildUrl("/User/MessageFlags/Success/Update/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("User", "EditSuccessMessageFlags", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        GetCurrentUser: function(n, i, r) {
            var u = t.buildUrl("/User/GetBungieNetUser/", "", r);
            return t.pushGa("User", "GetCurrentUser", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetCountsForCurrentUser: function(n, i, r) {
            var u = t.buildUrl("/User/GetCounts/", "", r);
            return t.pushGa("User", "GetCountsForCurrentUser", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetCurrentBungieNetUser: function(n, i, r) {
            var u = t.buildUrl("/User/GetCurrentBungieNetUser/", "", r);
            return t.pushGa("User", "GetCurrentBungieNetUser", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetBungieNetUserById: function(n, i, r, u) {
            var f = t.buildUrl("/User/GetBungieNetUserById/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("User", "GetBungieNetUserById", f),
            t.serviceLibrary.get(f, i, r)
        },
        GetUserAliases: function(i, r, u, f) {
            var e = t.buildUrl("/User/GetUserAliases/" + encodeURIComponent(i) + "/", "", f)
              , o = t.userService.userData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("User", "GetUserAliases", e),
            t.serviceLibrary.get(e, function(n) {
                t.userService.userData.setCacheItem(n);
                r(n)
            }, u))
        },
        SearchUsers: function(i, r, u, f) {
            var s = "", e, o;
            return (s = t.addParam(s, "q", i),
            e = t.buildUrl("/User/SearchUsers/", s, f),
            o = t.userService.userData.getCacheItem(e),
            o) ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("User", "SearchUsers", e),
            t.serviceLibrary.get(e, function(n) {
                t.userService.userData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetBungieAccount: function(n, i, r, u, f) {
            var e = t.buildUrl("/User/GetBungieAccount/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("User", "GetBungieAccount", e),
            t.serviceLibrary.get(e, r, u)
        },
        GetCurrentBungieAccount: function(n, i, r) {
            var u = t.buildUrl("/User/GetCurrentBungieAccount/", "", r);
            return t.pushGa("User", "GetCurrentBungieAccount", u),
            t.serviceLibrary.get(u, n, i)
        },
        SearchUsersPaged: function(i, r, u, f, e) {
            var o = t.buildUrl("/User/SearchUsersPaged/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e)
              , s = t.userService.userData.getCacheItem(o);
            return s ? n.Deferred(function(n) {
                u(s);
                n.resolve(s)
            }).promise() : (t.pushGa("User", "SearchUsersPaged", o),
            t.serviceLibrary.get(o, function(n) {
                t.userService.userData.setCacheItem(n);
                u(n)
            }, f))
        },
        SearchUsersPagedV2: function(i, r, u, f, e, o) {
            var s = t.buildUrl("/User/SearchUsersPaged/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o)
              , h = t.userService.userData.getCacheItem(s);
            return h ? n.Deferred(function(n) {
                f(h);
                n.resolve(h)
            }).promise() : (t.pushGa("User", "SearchUsersPagedV2", s),
            t.serviceLibrary.get(s, function(n) {
                t.userService.userData.setCacheItem(n);
                f(n)
            }, e))
        },
        GetNotificationSettings: function(n, i, r) {
            var u = t.buildUrl("/User/GetNotificationSettings/", "", r);
            return t.pushGa("User", "GetNotificationSettings", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetCredentialTypesForAccount: function(n, i, r) {
            var u = t.buildUrl("/User/GetCredentialTypesForAccount/", "", r);
            return t.pushGa("User", "GetCredentialTypesForAccount", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetAvailableAvatars: function(i, r, u) {
            var f = t.buildUrl("/User/GetAvailableAvatars/", "", u)
              , e = t.userService.userData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("User", "GetAvailableAvatars", f),
            t.serviceLibrary.get(f, function(n) {
                t.userService.userData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetAvailableAvatarsAdmin: function(i, r, u, f) {
            var e = t.buildUrl("/User/GetAvailableAvatarsAdmin/" + encodeURIComponent(i) + "/", "", f)
              , o = t.userService.userData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("User", "GetAvailableAvatarsAdmin", e),
            t.serviceLibrary.get(e, function(n) {
                t.userService.userData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetAvailableThemes: function(i, r, u) {
            var f = t.buildUrl("/User/GetAvailableThemes/", "", u)
              , e = t.userService.userData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("User", "GetAvailableThemes", f),
            t.serviceLibrary.get(f, function(n) {
                t.userService.userData.setCacheItem(n);
                i(n)
            }, r))
        },
        RegisterMobileAppPair: function(n, i, r) {
            var u = t.buildUrl("/User/RegisterMobileAppPair/", "", r);
            return t.pushGa("User", "RegisterMobileAppPair", u),
            t.serviceLibrary.post(u, null , n, i)
        },
        UnregisterMobileAppPair: function(n, i, r, u, f) {
            var e = t.buildUrl("/User/UnregisterMobileAppPair/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("User", "UnregisterMobileAppPair", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        UpdateStateInfoForMobileAppPair: function(n, i, r, u) {
            var f = t.buildUrl("/User/UpdateStateInfoForMobileAppPair/", "", u);
            return t.pushGa("User", "UpdateStateInfoForMobileAppPair", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        GetMobileAppPairings: function(i, r, u) {
            var f = t.buildUrl("/User/GetMobileAppPairings/", "", u)
              , e = t.userService.userData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("User", "GetMobileAppPairings", f),
            t.serviceLibrary.get(f, function(n) {
                t.userService.userData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetMobileAppPairingsUncached: function(n, i, r) {
            var u = t.buildUrl("/User/GetMobileAppPairingsUncached/", "", r);
            return t.pushGa("User", "GetMobileAppPairingsUncached", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetSignOutUrl: function(n, i, r) {
            var u = t.buildUrl("/User/GetSignOutUrl/", "", r);
            return t.pushGa("User", "GetSignOutUrl", u),
            t.serviceLibrary.get(u, n, i)
        },
        LinkOverride: function(n, i, r, u) {
            var f = t.buildUrl("/User/LinkOverride/", "", u);
            return t.pushGa("User", "LinkOverride", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        GetUserMembershipIds: function(n, i, r, u) {
            var f = "", e;
            return f = t.addParam(f, "excludebungienet", n),
            e = t.buildUrl("/User/GetMembershipIds/", f, u),
            t.pushGa("User", "GetUserMembershipIds", e),
            t.serviceLibrary.get(e, i, r)
        },
        SetAcknowledged: function(n, i, r, u) {
            var f = t.buildUrl("/User/Acknowledged/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("User", "SetAcknowledged", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        GetPlatformApiKeysForUser: function(n, i, r) {
            var u = t.buildUrl("/User/GetPlatformApiKeysForUser/", "", r);
            return t.pushGa("User", "GetPlatformApiKeysForUser", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetPartnerships: function(n, i, r, u) {
            var f = t.buildUrl("/User/" + encodeURIComponent(n) + "/Partnerships/", "", u);
            return t.pushGa("User", "GetPartnerships", f),
            t.serviceLibrary.get(f, i, r)
        },
        RemovePartnership: function(n, i, r, u) {
            var f = t.buildUrl("/User/Partnerships/" + encodeURIComponent(n) + "/Remove/", "", u);
            return t.pushGa("User", "RemovePartnership", f),
            t.serviceLibrary.post(f, null , i, r)
        }
    }
}(jQuery),
function() {
    var n = bungieNetPlatform;
    n.messageService = {
        dataStore: [],
        messageData: {
            getCacheItem: function(t) {
                return n.messageService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.messageService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.messageService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.messageService.dataStore["Set_" + t.id] = t
            }
        },
        GetConversationByIdV2: function(t, i, r, u, f) {
            var e = "", o;
            return e = n.addParam(e, "format", i),
            o = n.buildUrl("/Message/GetConversationByIdV2/" + encodeURIComponent(t) + "/", e, f),
            n.pushGa("Message", "GetConversationByIdV2", o),
            n.serviceLibrary.get(o, r, u)
        },
        GetConversationWithMemberIdV2: function(t, i, r, u, f) {
            var e = "", o;
            return e = n.addParam(e, "format", i),
            o = n.buildUrl("/Message/GetConversationWithMemberV2/" + encodeURIComponent(t) + "/", e, f),
            n.pushGa("Message", "GetConversationWithMemberIdV2", o),
            n.serviceLibrary.get(o, r, u)
        },
        GetConversationThreadV3: function(t, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = n.addParam(h, "format", r),
            h = n.addParam(h, "before", u),
            h = n.addParam(h, "after", f),
            c = n.buildUrl("/Message/GetConversationThreadV3/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", h, s),
            n.pushGa("Message", "GetConversationThreadV3", c),
            n.serviceLibrary.get(c, e, o)
        },
        SaveMessageV3: function(t, i, r, u) {
            var f = n.buildUrl("/Message/SaveMessageV3/", "", u);
            return n.pushGa("Message", "SaveMessageV3", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        SaveMessageV4: function(t, i, r, u) {
            var f = n.buildUrl("/Message/SaveMessageV4/", "", u);
            return n.pushGa("Message", "SaveMessageV4", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        UserIsTyping: function(t, i, r, u) {
            var f = n.buildUrl("/Message/UserIsTyping/", "", u);
            return n.pushGa("Message", "UserIsTyping", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        CreateConversation: function(t, i, r, u) {
            var f = n.buildUrl("/Message/CreateConversation/", "", u);
            return n.pushGa("Message", "CreateConversation", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        CreateConversationV2: function(t, i, r, u) {
            var f = n.buildUrl("/Message/CreateConversationV2/", "", u);
            return n.pushGa("Message", "CreateConversationV2", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        GetConversationsV5: function(t, i, r, u, f) {
            var e = "", o;
            return e = n.addParam(e, "format", i),
            o = n.buildUrl("/Message/GetConversationsV5/" + encodeURIComponent(t) + "/", e, f),
            n.pushGa("Message", "GetConversationsV5", o),
            n.serviceLibrary.get(o, r, u)
        },
        GetGroupConversations: function(t, i, r, u, f) {
            var e = "", o;
            return e = n.addParam(e, "format", i),
            o = n.buildUrl("/Message/GetGroupConversations/" + encodeURIComponent(t) + "/", e, f),
            n.pushGa("Message", "GetGroupConversations", o),
            n.serviceLibrary.get(o, r, u)
        },
        GetTotalConversationCount: function(t, i, r) {
            var u = n.buildUrl("/Message/GetTotalConversationCount/", "", r);
            return n.pushGa("Message", "GetTotalConversationCount", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetUnreadConversationCountV4: function(t, i, r) {
            var u = n.buildUrl("/Message/GetUnreadConversationCountV4/", "", r);
            return n.pushGa("Message", "GetUnreadConversationCountV4", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetUnreadGroupConversationCount: function(t, i, r) {
            var u = n.buildUrl("/Message/GetUnreadGroupConversationCount/", "", r);
            return n.pushGa("Message", "GetUnreadGroupConversationCount", u),
            n.serviceLibrary.get(u, t, i)
        },
        LeaveConversation: function(t, i, r, u) {
            var f = n.buildUrl("/Message/LeaveConversation/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Message", "LeaveConversation", f),
            n.serviceLibrary.get(f, i, r)
        },
        ReviewInvitations: function(t, i, r, u, f) {
            var e = n.buildUrl("/Message/Invitations/ReviewListDirect/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Message", "ReviewInvitations", e),
            n.serviceLibrary.post(e, t, r, u)
        },
        ReviewAllInvitations: function(t, i, r, u, f) {
            var e = n.buildUrl("/Message/Invitations/ReviewAllDirect/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Message", "ReviewAllInvitations", e),
            n.serviceLibrary.post(e, null , r, u)
        },
        ReviewInvitationDirect: function(t, i, r, u, f) {
            var e = n.buildUrl("/Message/Invitations/ReviewDirect/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Message", "ReviewInvitationDirect", e),
            n.serviceLibrary.post(e, null , r, u)
        },
        ReviewInvitation: function(t, i, r, u, f, e) {
            var o = n.buildUrl("/Message/Invitations/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return n.pushGa("Message", "ReviewInvitation", o),
            n.serviceLibrary.post(o, null , u, f)
        },
        GetAllianceJoinInvitations: function(t, i, r, u, f) {
            var e = n.buildUrl("/Message/AllianceInvitations/RequestsToJoinYourGroup/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Message", "GetAllianceJoinInvitations", e),
            n.serviceLibrary.get(e, r, u)
        },
        GetAllianceInvitedToJoinInvitations: function(t, i, r, u, f) {
            var e = n.buildUrl("/Message/AllianceInvitations/InvitationsToJoinAnotherGroup/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Message", "GetAllianceInvitedToJoinInvitations", e),
            n.serviceLibrary.get(e, r, u)
        },
        GetInvitationDetails: function(t, i, r, u) {
            var f = n.buildUrl("/Message/Invitations/" + encodeURIComponent(t) + "/Details/", "", u);
            return n.pushGa("Message", "GetInvitationDetails", f),
            n.serviceLibrary.get(f, i, r)
        },
        UpdateConversationLastViewedTimestamp: function(t, i, r) {
            var u = n.buildUrl("/Message/Conversations/UpdateLastViewedTimestamp/", "", r);
            return n.pushGa("Message", "UpdateConversationLastViewedTimestamp", u),
            n.serviceLibrary.post(u, null , t, i)
        },
        ModerateGroupWall: function(t, i, r, u, f) {
            var e = n.buildUrl("/Message/ModerateGroupWall/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Message", "ModerateGroupWall", e),
            n.serviceLibrary.post(e, null , r, u)
        },
        GetConversationsV4: function(t, i, r, u, f) {
            var e = "", o;
            return e = n.addParam(e, "format", i),
            o = n.buildUrl("/Message/GetConversationsV4/" + encodeURIComponent(t) + "/", e, f),
            n.pushGa("Message", "GetConversationsV4", o),
            n.serviceLibrary.get(o, r, u)
        },
        GetUnreadConversationCountV3: function(t, i, r) {
            var u = n.buildUrl("/Message/GetUnreadConversationCountV3/", "", r);
            return n.pushGa("Message", "GetUnreadConversationCountV3", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetUnreadConversationCountV2: function(t, i, r) {
            var u = n.buildUrl("/Message/GetUnreadPrivateConversationCount/", "", r);
            return n.pushGa("Message", "GetUnreadConversationCountV2", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetConversationById: function(t, i, r, u) {
            var f = n.buildUrl("/Message/GetConversationById/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Message", "GetConversationById", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetConversationWithMemberId: function(t, i, r, u) {
            var f = n.buildUrl("/Message/GetConversationWithMember/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Message", "GetConversationWithMemberId", f),
            n.serviceLibrary.get(f, i, r)
        },
        SaveMessageV2: function(t, i, r, u) {
            var f = n.buildUrl("/Message/SaveMessageV2/", "", u);
            return n.pushGa("Message", "SaveMessageV2", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        GetConversationsV2: function(t, i, r, u, f) {
            var e = n.buildUrl("/Message/GetConversationsV2/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Message", "GetConversationsV2", e),
            n.serviceLibrary.get(e, r, u)
        },
        GetConversationsV3: function(t, i, r, u, f) {
            var e = n.buildUrl("/Message/GetConversationsV3/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Message", "GetConversationsV3", e),
            n.serviceLibrary.get(e, r, u)
        },
        GetConversationThreadV2: function(t, i, r, u, f, e) {
            var o = n.buildUrl("/Message/GetConversationThreadV2/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return n.pushGa("Message", "GetConversationThreadV2", o),
            n.serviceLibrary.get(o, u, f)
        }
    }
}(jQuery),
function() {
    var n = bungieNetPlatform;
    n.notificationService = {
        dataStore: [],
        notificationData: {
            getCacheItem: function(t) {
                return n.notificationService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.notificationService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.notificationService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.notificationService.dataStore["Set_" + t.id] = t
            }
        },
        GetRecentNotifications: function(t, i, r, u) {
            var f = "", e;
            return f = n.addParam(f, "format", t),
            e = n.buildUrl("/Notification/GetRecent/", f, u),
            n.pushGa("Notification", "GetRecentNotifications", e),
            n.serviceLibrary.get(e, i, r)
        },
        GetRecentNotificationCount: function(t, i, r) {
            var u = n.buildUrl("/Notification/GetCount/", "", r);
            return n.pushGa("Notification", "GetRecentNotificationCount", u),
            n.serviceLibrary.get(u, t, i)
        },
        ResetNotification: function(t, i, r) {
            var u = n.buildUrl("/Notification/Reset/", "", r);
            return n.pushGa("Notification", "ResetNotification", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetRealTimeEvents: function(t, i, r, u, f, e) {
            var o = "", s;
            return o = n.addParam(o, "timeout", r),
            s = n.buildUrl("/Notification/Events/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", o, e),
            n.pushGa("Notification", "GetRealTimeEvents", s),
            n.serviceLibrary.get(s, u, f)
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.contentService = {
        dataStore: [],
        contentData: {
            getCacheItem: function(n) {
                return t.contentService.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.contentService.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.contentService.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.contentService.dataStore["Set_" + n.id] = n
            }
        },
        GetContentType: function(i, r, u, f) {
            var e = t.buildUrl("/Content/GetContentType/" + encodeURIComponent(i) + "/", "", f)
              , o = t.contentService.contentData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Content", "GetContentType", e),
            t.serviceLibrary.get(e, function(n) {
                t.contentService.contentData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetContentById: function(i, r, u, f, e, o) {
            var c = "", s, h;
            return (c = t.addParam(c, "head", u),
            s = t.buildUrl("/Content/GetContentById/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", c, o),
            h = t.contentService.contentData.getCacheItem(s),
            h) ? n.Deferred(function(n) {
                f(h);
                n.resolve(h)
            }).promise() : (t.pushGa("Content", "GetContentById", s),
            t.serviceLibrary.get(s, function(n) {
                t.contentService.contentData.setCacheItem(n);
                f(n)
            }, e))
        },
        GetContentByTagAndType: function(i, r, u, f, e, o, s) {
            var l = "", h, c;
            return (l = t.addParam(l, "head", f),
            h = t.buildUrl("/Content/GetContentByTagAndType/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", l, s),
            c = t.contentService.contentData.getCacheItem(h),
            c) ? n.Deferred(function(n) {
                e(c);
                n.resolve(c)
            }).promise() : (t.pushGa("Content", "GetContentByTagAndType", h),
            t.serviceLibrary.get(h, function(n) {
                t.contentService.contentData.setCacheItem(n);
                e(n)
            }, o))
        },
        SearchContentEx: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "head", r),
            s = t.buildUrl("/Content/SearchEx/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Content", "SearchContentEx", s),
            t.serviceLibrary.post(s, n, u, f)
        },
        SearchContentWithText: function(i, r, u, f, e, o, s, h, c) {
            var l = "", a, v;
            return (l = t.addParam(l, "head", r),
            l = t.addParam(l, "ctype", u),
            l = t.addParam(l, "tag", f),
            l = t.addParam(l, "currentpage", e),
            l = t.addParam(l, "searchtext", o),
            a = t.buildUrl("/Content/Search/" + encodeURIComponent(i) + "/", l, c),
            v = t.contentService.contentData.getCacheItem(a),
            v) ? n.Deferred(function(n) {
                s(v);
                n.resolve(v)
            }).promise() : (t.pushGa("Content", "SearchContentWithText", a),
            t.serviceLibrary.get(a, function(n) {
                t.contentService.contentData.setCacheItem(n);
                s(n)
            }, h))
        },
        SearchContentByTagAndType: function(i, r, u, f, e, o, s, h, c) {
            var l = "", a, v;
            return (l = t.addParam(l, "head", f),
            l = t.addParam(l, "currentpage", e),
            l = t.addParam(l, "itemsperpage", o),
            a = t.buildUrl("/Content/SearchContentByTagAndType/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", l, c),
            v = t.contentService.contentData.getCacheItem(a),
            v) ? n.Deferred(function(n) {
                s(v);
                n.resolve(v)
            }).promise() : (t.pushGa("Content", "SearchContentByTagAndType", a),
            t.serviceLibrary.get(a, function(n) {
                t.contentService.contentData.setCacheItem(n);
                s(n)
            }, h))
        },
        GetHomepageContent: function(i, r, u, f) {
            var e = t.buildUrl("/Content/Site/Homepage/" + encodeURIComponent(i) + "/", "", f)
              , o = t.contentService.contentData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Content", "GetHomepageContent", e),
            t.serviceLibrary.get(e, function(n) {
                t.contentService.contentData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetHomepageContentV2: function(i, r, u) {
            var f = t.buildUrl("/Content/Site/Homepage/V2/", "", u)
              , e = t.contentService.contentData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Content", "GetHomepageContentV2", f),
            t.serviceLibrary.get(f, function(n) {
                t.contentService.contentData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetJobs: function(i, r, u, f) {
            var e = t.buildUrl("/Content/Site/Jobs/" + encodeURIComponent(i) + "/", "", f)
              , o = t.contentService.contentData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Content", "GetJobs", e),
            t.serviceLibrary.get(e, function(n) {
                t.contentService.contentData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetPublications: function(i, r, u, f) {
            var e = t.buildUrl("/Content/Site/Publications/" + encodeURIComponent(i) + "/", "", f)
              , o = t.contentService.contentData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Content", "GetPublications", e),
            t.serviceLibrary.get(e, function(n) {
                t.contentService.contentData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetNews: function(i, r, u, f, e, o, s) {
            var h = "", c, l;
            return (h = t.addParam(h, "itemsperpage", u),
            h = t.addParam(h, "currentpage", f),
            c = t.buildUrl("/Content/Site/News/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", h, s),
            l = t.contentService.contentData.getCacheItem(c),
            l) ? n.Deferred(function(n) {
                e(l);
                n.resolve(l)
            }).promise() : (t.pushGa("Content", "GetNews", c),
            t.serviceLibrary.get(c, function(n) {
                t.contentService.contentData.setCacheItem(n);
                e(n)
            }, o))
        },
        GetDestinyContent: function(i, r, u, f) {
            var e = t.buildUrl("/Content/Site/Destiny/" + encodeURIComponent(i) + "/", "", f)
              , o = t.contentService.contentData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Content", "GetDestinyContent", e),
            t.serviceLibrary.get(e, function(n) {
                t.contentService.contentData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetDestinyContentV2: function(i, r, u, f) {
            var e = t.buildUrl("/Content/Site/Destiny/V2/" + encodeURIComponent(i) + "/", "", f)
              , o = t.contentService.contentData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Content", "GetDestinyContentV2", e),
            t.serviceLibrary.get(e, function(n) {
                t.contentService.contentData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetPromoWidget: function(n, i, r) {
            var u = t.buildUrl("/Content/Site/Destiny/Promo/", "", r);
            return t.pushGa("Content", "GetPromoWidget", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetFeaturedArticle: function(n, i, r) {
            var u = t.buildUrl("/Content/Site/Featured/", "", r);
            return t.pushGa("Content", "GetFeaturedArticle", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetCareers: function(i, r, u) {
            var f = t.buildUrl("/Content/Careers/", "", u)
              , e = t.contentService.contentData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Content", "GetCareers", f),
            t.serviceLibrary.get(f, function(n) {
                t.contentService.contentData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetCareer: function(i, r, u, f) {
            var e = t.buildUrl("/Content/Careers/" + encodeURIComponent(i) + "/", "", f)
              , o = t.contentService.contentData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Content", "GetCareer", e),
            t.serviceLibrary.get(e, function(n) {
                t.contentService.contentData.setCacheItem(n);
                r(n)
            }, u))
        },
        SearchCareers: function(i, r, u, f) {
            var s = "", e, o;
            return (s = t.addParam(s, "searchtext", i),
            e = t.buildUrl("/Content/Careers/Search/", s, f),
            o = t.contentService.contentData.getCacheItem(e),
            o) ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Content", "SearchCareers", e),
            t.serviceLibrary.get(e, function(n) {
                t.contentService.contentData.setCacheItem(n);
                r(n)
            }, u))
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.externalSocialService = {
        dataStore: [],
        externalSocialData: {
            getCacheItem: function(n) {
                return t.externalSocialService.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.externalSocialService.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.externalSocialService.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.externalSocialService.dataStore["Set_" + n.id] = n
            }
        },
        GetAggregatedSocialFeed: function(i, r, u, f, e) {
            var h = "", o, s;
            return (h = t.addParam(h, "types", r),
            o = t.buildUrl("/ExternalSocial/GetAggregatedSocialFeed/" + encodeURIComponent(i) + "/", h, e),
            s = t.externalSocialService.externalSocialData.getCacheItem(o),
            s) ? n.Deferred(function(n) {
                u(s);
                n.resolve(s)
            }).promise() : (t.pushGa("ExternalSocial", "GetAggregatedSocialFeed", o),
            t.serviceLibrary.get(o, function(n) {
                t.externalSocialService.externalSocialData.setCacheItem(n);
                u(n)
            }, f))
        }
    }
}(jQuery),
function() {
    var n = bungieNetPlatform;
    n.surveyService = {
        dataStore: [],
        surveyData: {
            getCacheItem: function(t) {
                return n.surveyService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.surveyService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.surveyService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.surveyService.dataStore["Set_" + t.id] = t
            }
        },
        GetSurvey: function(t, i, r) {
            var u = n.buildUrl("/Survey/GetSurvey/", "", r);
            return n.pushGa("Survey", "GetSurvey", u),
            n.serviceLibrary.get(u, t, i)
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.forumService = {
        dataStore: [],
        forumData: {
            getCacheItem: function(n) {
                return t.forumService.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.forumService.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.forumService.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.forumService.dataStore["Set_" + n.id] = n
            }
        },
        CreatePost: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/CreatePost/", "", u);
            return t.pushGa("Forum", "CreatePost", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        CreateContentComment: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/CreateContentComment/", "", u);
            return t.pushGa("Forum", "CreateContentComment", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        EditPost: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/EditPost/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Forum", "EditPost", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        DeletePost: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/DeletePost/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("Forum", "DeletePost", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        RatePost: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/RatePost/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Forum", "RatePost", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        ModeratePost: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/Post/" + encodeURIComponent(i) + "/Moderate/", "", f);
            return t.pushGa("Forum", "ModeratePost", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        ModerateTag: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/Tags/" + encodeURIComponent(i) + "/Moderate/", "", f);
            return t.pushGa("Forum", "ModerateTag", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        ModerateGroupPost: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/Post/" + encodeURIComponent(i) + "/GroupModerate/", "", f);
            return t.pushGa("Forum", "ModerateGroupPost", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        GetTopicsPaged: function(n, i, r, u, f, e, o, s, h, c) {
            var l = "", a;
            return l = t.addParam(l, "tagstring", o),
            a = t.buildUrl("/Forum/GetTopicsPaged/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/", l, c),
            t.pushGa("Forum", "GetTopicsPaged", a),
            t.serviceLibrary.get(a, s, h)
        },
        GetCoreTopicsPaged: function(n, i, r, u, f, e, o) {
            var s = t.buildUrl("/Forum/GetCoreTopicsPaged/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o);
            return t.pushGa("Forum", "GetCoreTopicsPaged", s),
            t.serviceLibrary.get(s, f, e)
        },
        GetPostsThreadedPaged: function(n, i, r, u, f, e, o, s, h, c, l) {
            var a = "", v;
            return a = t.addParam(a, "showbanned", s),
            v = t.buildUrl("/Forum/GetPostsThreadedPaged/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(o) + "/", a, l),
            t.pushGa("Forum", "GetPostsThreadedPaged", v),
            t.serviceLibrary.get(v, h, c)
        },
        GetPostsThreadedPagedFromChild: function(n, i, r, u, f, e, o, s, h, c) {
            var l = "", a;
            return l = t.addParam(l, "showbanned", o),
            a = t.buildUrl("/Forum/GetPostsThreadedPagedFromChild/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/", l, c),
            t.pushGa("Forum", "GetPostsThreadedPagedFromChild", a),
            t.serviceLibrary.get(a, s, h)
        },
        GetPostAndParent: function(i, r, u, f, e) {
            var h = "", o, s;
            return (h = t.addParam(h, "showbanned", r),
            o = t.buildUrl("/Forum/GetPostAndParent/" + encodeURIComponent(i) + "/", h, e),
            s = t.forumService.forumData.getCacheItem(o),
            s) ? n.Deferred(function(n) {
                u(s);
                n.resolve(s)
            }).promise() : (t.pushGa("Forum", "GetPostAndParent", o),
            t.serviceLibrary.get(o, function(n) {
                t.forumService.forumData.setCacheItem(n);
                u(n)
            }, f))
        },
        GetPostAndParentAwaitingApproval: function(i, r, u, f, e) {
            var h = "", o, s;
            return (h = t.addParam(h, "showbanned", r),
            o = t.buildUrl("/Forum/GetPostAndParentAwaitingApproval/" + encodeURIComponent(i) + "/", h, e),
            s = t.forumService.forumData.getCacheItem(o),
            s) ? n.Deferred(function(n) {
                u(s);
                n.resolve(s)
            }).promise() : (t.pushGa("Forum", "GetPostAndParentAwaitingApproval", o),
            t.serviceLibrary.get(o, function(n) {
                t.forumService.forumData.setCacheItem(n);
                u(n)
            }, f))
        },
        GetPopularTags: function(i, r, u, f, e) {
            var o = "", s, h;
            return (o = t.addParam(o, "quantity", i),
            o = t.addParam(o, "tagsSinceDate", r),
            s = t.buildUrl("/Forum/GetPopularTags/", o, e),
            h = t.forumService.forumData.getCacheItem(s),
            h) ? n.Deferred(function(n) {
                u(h);
                n.resolve(h)
            }).promise() : (t.pushGa("Forum", "GetPopularTags", s),
            t.serviceLibrary.get(s, function(n) {
                t.forumService.forumData.setCacheItem(n);
                u(n)
            }, f))
        },
        GetForumTagCountEstimate: function(i, r, u, f) {
            var e = t.buildUrl("/Forum/GetForumTagCountEstimate/" + encodeURIComponent(i) + "/", "", f)
              , o = t.forumService.forumData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Forum", "GetForumTagCountEstimate", e),
            t.serviceLibrary.get(e, function(n) {
                t.forumService.forumData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetTopicForContent: function(i, r, u, f) {
            var e = t.buildUrl("/Forum/GetTopicForContent/" + encodeURIComponent(i) + "/", "", f)
              , o = t.forumService.forumData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Forum", "GetTopicForContent", e),
            t.serviceLibrary.get(e, function(n) {
                t.forumService.forumData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetForumTagSuggestions: function(i, r, u, f) {
            var s = "", e, o;
            return (s = t.addParam(s, "partialtag", i),
            e = t.buildUrl("/Forum/GetForumTagSuggestions/", s, f),
            o = t.forumService.forumData.getCacheItem(e),
            o) ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Forum", "GetForumTagSuggestions", e),
            t.serviceLibrary.get(e, function(n) {
                t.forumService.forumData.setCacheItem(n);
                r(n)
            }, u))
        },
        MarkReplyAsAnswer: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/MarkReplyAsAnswer/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Forum", "MarkReplyAsAnswer", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        UnmarkReplyAsAnswer: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/UnmarkReplyAsAnswer/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("Forum", "UnmarkReplyAsAnswer", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        PollVote: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/Poll/Vote/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Forum", "PollVote", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        GetPoll: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/Poll/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("Forum", "GetPoll", f),
            t.serviceLibrary.get(f, i, r)
        },
        ChangePinState: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/ChangePinState/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Forum", "ChangePinState", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        ChangeLockState: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/ChangeLockState/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Forum", "ChangeLockState", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        JoinFireteamThread: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/Recruit/Join/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("Forum", "JoinFireteamThread", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        LeaveFireteamThread: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/Recruit/Leave/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("Forum", "LeaveFireteamThread", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        KickBanFireteamApplicant: function(n, i, r, u, f) {
            var e = t.buildUrl("/Forum/Recruit/KickBan/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Forum", "KickBanFireteamApplicant", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        ApproveFireteamThread: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/Recruit/Approve/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("Forum", "ApproveFireteamThread", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        GetRecruitmentThreadSummaries: function(n, i, r, u) {
            var f = t.buildUrl("/Forum/Recruit/Summaries/", "", u);
            return t.pushGa("Forum", "GetRecruitmentThreadSummaries", f),
            t.serviceLibrary.post(f, n, i, r)
        }
    }
}(jQuery),
function() {
    var n = bungieNetPlatform;
    n.activityService = {
        dataStore: [],
        activityData: {
            getCacheItem: function(t) {
                return n.activityService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.activityService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.activityService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.activityService.dataStore["Set_" + t.id] = t
            }
        },
        GetEntitiesFollowedByCurrentUser: function(t, i, r) {
            var u = n.buildUrl("/Activity/Following/", "", r);
            return n.pushGa("Activity", "GetEntitiesFollowedByCurrentUser", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetGroupsFollowedByCurrentUser: function(t, i, r) {
            var u = n.buildUrl("/Activity/Following/Groups/", "", r);
            return n.pushGa("Activity", "GetGroupsFollowedByCurrentUser", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetGroupsFollowedByUser: function(t, i, r, u) {
            var f = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Following/Groups/", "", u);
            return n.pushGa("Activity", "GetGroupsFollowedByUser", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetEntitiesFollowedByUser: function(t, i, r, u) {
            var f = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Following/", "", u);
            return n.pushGa("Activity", "GetEntitiesFollowedByUser", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetEntitiesFollowedByCurrentUserV2: function(t, i, r, u, f) {
            var e = n.buildUrl("/Activity/Following/V2/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Activity", "GetEntitiesFollowedByCurrentUserV2", e),
            n.serviceLibrary.get(e, r, u)
        },
        GetEntitiesFollowedByUserV2: function(t, i, r, u, f, e) {
            var o = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Following/V2/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return n.pushGa("Activity", "GetEntitiesFollowedByUserV2", o),
            n.serviceLibrary.get(o, u, f)
        },
        GetGroupsFollowedPagedByCurrentUser: function(t, i, r, u) {
            var f = n.buildUrl("/Activity/Following/Groups/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Activity", "GetGroupsFollowedPagedByCurrentUser", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetGroupsFollowedPagedByUser: function(t, i, r, u, f) {
            var e = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Following/Groups/Paged/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Activity", "GetGroupsFollowedPagedByUser", e),
            n.serviceLibrary.get(e, r, u)
        },
        GetUsersFollowedByCurrentUser: function(t, i, r) {
            var u = n.buildUrl("/Activity/Following/Users/", "", r);
            return n.pushGa("Activity", "GetUsersFollowedByCurrentUser", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetFollowersOfUser: function(t, i, r, u, f, e) {
            var o = "", s;
            return o = n.addParam(o, "itemsperpage", i),
            o = n.addParam(o, "currentpage", r),
            s = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Followers/", o, e),
            n.pushGa("Activity", "GetFollowersOfUser", s),
            n.serviceLibrary.get(s, u, f)
        },
        FollowUser: function(t, i, r, u) {
            var f = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Follow/", "", u);
            return n.pushGa("Activity", "FollowUser", f),
            n.serviceLibrary.post(f, null , i, r)
        },
        UnfollowUser: function(t, i, r, u) {
            var f = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Unfollow/", "", u);
            return n.pushGa("Activity", "UnfollowUser", f),
            n.serviceLibrary.post(f, null , i, r)
        },
        GetLikeAndShareActivityForUser: function(t, i, r, u, f, e, o) {
            var s = "", h;
            return s = n.addParam(s, "itemsperpage", i),
            s = n.addParam(s, "currentpage", r),
            s = n.addParam(s, "format", u),
            h = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/LikesAndShares/", s, o),
            n.pushGa("Activity", "GetLikeAndShareActivityForUser", h),
            n.serviceLibrary.get(h, f, e)
        },
        GetLikeAndShareActivityForUserV2: function(t, i, r, u, f, e) {
            var o = "", s;
            return o = n.addParam(o, "currentpage", i),
            o = n.addParam(o, "format", r),
            s = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/LikesAndSharesV2/", o, e),
            n.pushGa("Activity", "GetLikeAndShareActivityForUserV2", s),
            n.serviceLibrary.get(s, u, f)
        },
        GetForumActivityForUser: function(t, i, r, u, f, e, o) {
            var s = "", h;
            return s = n.addParam(s, "itemsperpage", i),
            s = n.addParam(s, "currentpage", r),
            s = n.addParam(s, "format", u),
            h = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/Forums/", s, o),
            n.pushGa("Activity", "GetForumActivityForUser", h),
            n.serviceLibrary.get(h, f, e)
        },
        GetForumActivityForUserV2: function(t, i, r, u, f, e) {
            var o = "", s;
            return o = n.addParam(o, "currentpage", i),
            o = n.addParam(o, "format", r),
            s = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/ForumsV2/", o, e),
            n.pushGa("Activity", "GetForumActivityForUserV2", s),
            n.serviceLibrary.get(s, u, f)
        },
        GetLikeShareAndForumActivityForUser: function(t, i, r, u, f, e) {
            var o = "", s;
            return o = n.addParam(o, "currentpage", i),
            o = n.addParam(o, "format", r),
            s = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/LikeShareAndForum/", o, e),
            n.pushGa("Activity", "GetLikeShareAndForumActivityForUser", s),
            n.serviceLibrary.get(s, u, f)
        },
        GetApplicationActivityForUser: function(t, i, r, u, f, e, o) {
            var s = "", h;
            return s = n.addParam(s, "currentpage", r),
            s = n.addParam(s, "format", u),
            h = n.buildUrl("/Activity/User/" + encodeURIComponent(t) + "/Activities/Application/" + encodeURIComponent(i) + "/", s, o),
            n.pushGa("Activity", "GetApplicationActivityForUser", h),
            n.serviceLibrary.get(h, f, e)
        },
        GetFollowersOfTag: function(t, i, r, u, f, e) {
            var o = "", s;
            return o = n.addParam(o, "tag", t),
            o = n.addParam(o, "itemsperpage", i),
            o = n.addParam(o, "currentpage", r),
            s = n.buildUrl("/Activity/Tag/Followers/", o, e),
            n.pushGa("Activity", "GetFollowersOfTag", s),
            n.serviceLibrary.get(s, u, f)
        },
        FollowTag: function(t, i, r, u) {
            var f = "", e;
            return f = n.addParam(f, "tag", t),
            e = n.buildUrl("/Activity/Tag/Follow/", f, u),
            n.pushGa("Activity", "FollowTag", e),
            n.serviceLibrary.post(e, null , i, r)
        },
        UnfollowTag: function(t, i, r, u) {
            var f = "", e;
            return f = n.addParam(f, "tag", t),
            e = n.buildUrl("/Activity/Tag/Unfollow/", f, u),
            n.pushGa("Activity", "UnfollowTag", e),
            n.serviceLibrary.post(e, null , i, r)
        },
        GetFriends: function(t, i, r) {
            var u = n.buildUrl("/Activity/Friends/", "", r);
            return n.pushGa("Activity", "GetFriends", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetFriendsAllNoPresence: function(t, i, r, u) {
            var f = n.buildUrl("/Activity/Friends/AllNoPresence/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Activity", "GetFriendsAllNoPresence", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetFriendsPaged: function(t, i, r, u, f) {
            var e = n.buildUrl("/Activity/Friends/Paged/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Activity", "GetFriendsPaged", e),
            n.serviceLibrary.get(e, r, u)
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.groupService = {
        dataStore: [],
        groupData: {
            getCacheItem: function(n) {
                return t.groupService.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.groupService.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.groupService.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.groupService.dataStore["Set_" + n.id] = n
            }
        },
        GetAvailableAvatars: function(i, r, u) {
            var f = t.buildUrl("/Group/GetAvailableAvatars/", "", u)
              , e = t.groupService.groupData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Group", "GetAvailableAvatars", f),
            t.serviceLibrary.get(f, function(n) {
                t.groupService.groupData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetAvailableThemes: function(i, r, u) {
            var f = t.buildUrl("/Group/GetAvailableThemes/", "", u)
              , e = t.groupService.groupData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Group", "GetAvailableThemes", f),
            t.serviceLibrary.get(f, function(n) {
                t.groupService.groupData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetGroupsFollowingGroup: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/FollowedBy/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Group", "GetGroupsFollowingGroup", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetGroupsFollowedByGroup: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Following/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Group", "GetGroupsFollowedByGroup", s),
            t.serviceLibrary.get(s, u, f)
        },
        FollowGroupWithGroup: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Follow/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Group", "FollowGroupWithGroup", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        UnfollowGroupWithGroup: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Unfollow/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Group", "UnfollowGroupWithGroup", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        FollowGroupsWithGroup: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/FollowList/", "", f);
            return t.pushGa("Group", "FollowGroupsWithGroup", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        UnfollowGroupsWithGroup: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/UnfollowList/", "", f);
            return t.pushGa("Group", "UnfollowGroupsWithGroup", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        UnfollowAllGroupsWithGroup: function(n, i, r, u) {
            var f = t.buildUrl("/Group/" + encodeURIComponent(n) + "/UnfollowAll/", "", u);
            return t.pushGa("Group", "UnfollowAllGroupsWithGroup", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        InviteToJoinAlliance: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Allies/Invite/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("Group", "InviteToJoinAlliance", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        InviteManyToJoinAlliance: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Allies/InviteMany/", "", f);
            return t.pushGa("Group", "InviteManyToJoinAlliance", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        RequestToJoinAlliance: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Allies/RequestToJoin/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("Group", "RequestToJoinAlliance", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        BreakAlliance: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Relationship/" + encodeURIComponent(i) + "/BreakAlliance/", "", f);
            return t.pushGa("Group", "BreakAlliance", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        BreakAlliances: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/BreakAlliances/", "", f);
            return t.pushGa("Group", "BreakAlliances", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        DisbandAlliance: function(n, i, r, u) {
            var f = t.buildUrl("/Group/" + encodeURIComponent(n) + "/BreakAllAlliances/", "", u);
            return t.pushGa("Group", "DisbandAlliance", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        SetGroupAsAlliance: function(n, i, r, u) {
            var f = t.buildUrl("/Group/" + encodeURIComponent(n) + "/SetAsAlliance/", "", u);
            return t.pushGa("Group", "SetGroupAsAlliance", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        GetAlliedGroups: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "currentpage", i),
            o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Allies/", o, e),
            t.pushGa("Group", "GetAlliedGroups", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetRecommendedGroups: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/Recommended/", e, f),
            t.pushGa("Group", "GetRecommendedGroups", o),
            t.serviceLibrary.post(o, n, r, u)
        },
        GroupSearch: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/Search/", e, f),
            t.pushGa("Group", "GroupSearch", o),
            t.serviceLibrary.post(o, n, r, u)
        },
        GetDeletedGroupsForCurrentMember: function(n, i, r) {
            var u = t.buildUrl("/Group/MyGroups/Deleted/", "", r);
            return t.pushGa("Group", "GetDeletedGroupsForCurrentMember", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetGroup: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/" + encodeURIComponent(n) + "/", e, f),
            t.pushGa("Group", "GetGroup", o),
            t.serviceLibrary.get(o, r, u)
        },
        GetGroupByName: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/Name/" + encodeURIComponent(n) + "/", e, f),
            t.pushGa("Group", "GetGroupByName", o),
            t.serviceLibrary.get(o, r, u)
        },
        GetGroupTagSuggestions: function(n, i, r, u) {
            var f = "", e;
            return f = t.addParam(f, "partialtag", n),
            e = t.buildUrl("/Group/GetGroupTagSuggestions/", f, u),
            t.pushGa("Group", "GetGroupTagSuggestions", e),
            t.serviceLibrary.get(e, i, r)
        },
        CreateGroup: function(n, i, r, u) {
            var f = t.buildUrl("/Group/Create/", "", u);
            return t.pushGa("Group", "CreateGroup", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        CreateGroupV2: function(n, i, r, u) {
            var f = t.buildUrl("/Group/Create/V2/", "", u);
            return t.pushGa("Group", "CreateGroupV2", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        CreateMinimalGroup: function(n, i, r, u) {
            var f = t.buildUrl("/Group/Create/Minimal/", "", u);
            return t.pushGa("Group", "CreateMinimalGroup", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        EditGroupV2: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/EditV2/", "", f);
            return t.pushGa("Group", "EditGroupV2", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        SetPrivacy: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Privacy/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Group", "SetPrivacy", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        UndeleteGroup: function(n, i, r, u) {
            var f = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Undelete/", "", u);
            return t.pushGa("Group", "UndeleteGroup", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        InviteGroupMember: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Invite/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("Group", "InviteGroupMember", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        InviteClanMember: function(n, i, r, u, f, e, o) {
            var s = t.buildUrl("/Group/" + encodeURIComponent(i) + "/InviteToClan/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o);
            return t.pushGa("Group", "InviteClanMember", s),
            t.serviceLibrary.post(s, n, f, e)
        },
        GetPendingMembershipsV2: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "currentPage", i),
            o = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/PendingV2/", e, f),
            t.pushGa("Group", "GetPendingMembershipsV2", o),
            t.serviceLibrary.get(o, r, u)
        },
        GetPendingClanMemberships: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Clan/" + encodeURIComponent(i) + "/Pending/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("Group", "GetPendingClanMemberships", o),
            t.serviceLibrary.get(o, u, f)
        },
        RequestGroupMembershipV2: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/ApplyV2/", o, e),
            t.pushGa("Group", "RequestGroupMembershipV2", s),
            t.serviceLibrary.post(s, n, u, f)
        },
        RescindGroupMembership: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/Rescind/", e, f),
            t.pushGa("Group", "RescindGroupMembership", o),
            t.serviceLibrary.post(o, null , r, u)
        },
        ApproveGroupMembershipV2: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/" + encodeURIComponent(r) + "/ApproveV2/", "", e);
            return t.pushGa("Group", "ApproveGroupMembershipV2", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        DenyGroupMembershipV2: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/" + encodeURIComponent(r) + "/DenyV2/", "", e);
            return t.pushGa("Group", "DenyGroupMembershipV2", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        ApproveAllPending: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/ApproveAll/", "", f);
            return t.pushGa("Group", "ApproveAllPending", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        DenyAllPending: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/DenyAll/", "", f);
            return t.pushGa("Group", "DenyAllPending", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        ApprovePendingForList: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/ApproveList/", "", f);
            return t.pushGa("Group", "ApprovePendingForList", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        DenyPendingForList: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/DenyList/", "", f);
            return t.pushGa("Group", "DenyPendingForList", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        GetFoundedGroupsForMember: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "clanonly", r),
            s = t.addParam(s, "populatefriends", u),
            h = t.buildUrl("/Group/User/" + encodeURIComponent(n) + "/Founded/" + encodeURIComponent(i) + "/", s, o),
            t.pushGa("Group", "GetFoundedGroupsForMember", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetAllFoundedGroupsForMember: function(n, i, r, u) {
            var f = t.buildUrl("/Group/User/" + encodeURIComponent(n) + "/Founded/All/", "", u);
            return t.pushGa("Group", "GetAllFoundedGroupsForMember", f),
            t.serviceLibrary.get(f, i, r)
        },
        GetJoinedGroupsForMemberV3: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/User/" + encodeURIComponent(n) + "/JoinedV3/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Group", "GetJoinedGroupsForMemberV3", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetPendingGroupsForMemberV2: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/User/" + encodeURIComponent(n) + "/PendingV2/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Group", "GetPendingGroupsForMemberV2", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetClanAttributeDefinitions: function(i, r, u) {
            var f = t.buildUrl("/Group/GetClanAttributeDefinitions/", "", u)
              , e = t.groupService.groupData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Group", "GetClanAttributeDefinitions", f),
            t.serviceLibrary.get(f, function(n) {
                t.groupService.groupData.setCacheItem(n);
                i(n)
            }, r))
        },
        EnableClanForGroup: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "clanName", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Clans/Enable/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Group", "EnableClanForGroup", s),
            t.serviceLibrary.post(s, null , u, f)
        },
        JoinClanForGroup: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Clans/Join/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("Group", "JoinClanForGroup", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        LeaveClanForGroup: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Clans/Leave/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Group", "LeaveClanForGroup", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        DisableClanForGroup: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Clans/Disable/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Group", "DisableClanForGroup", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        RefreshClanSettingsInDestiny: function(n, i, r, u) {
            var f = t.buildUrl("/Group/MyClans/Refresh/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("Group", "RefreshClanSettingsInDestiny", f),
            t.serviceLibrary.post(f, null , i, r)
        },
        GetMembersOfClan: function(n, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = t.addParam(h, "currentPage", i),
            h = t.addParam(h, "memberType", r),
            h = t.addParam(h, "sort", u),
            h = t.addParam(h, "platformType", f),
            c = t.buildUrl("/Group/" + encodeURIComponent(n) + "/ClanMembers/", h, s),
            t.pushGa("Group", "GetMembersOfClan", c),
            t.serviceLibrary.get(c, e, o)
        },
        GetMyClanMemberships: function(n, i, r) {
            var u = t.buildUrl("/Group/MyClans/", "", r);
            return t.pushGa("Group", "GetMyClanMemberships", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetMembersOfGroupV3: function(n, i, r, u, f, e, o, s, h, c) {
            var l = "", a;
            return l = t.addParam(l, "itemsPerPage", i),
            l = t.addParam(l, "currentPage", r),
            l = t.addParam(l, "memberType", u),
            l = t.addParam(l, "platformType", f),
            l = t.addParam(l, "sort", e),
            l = t.addParam(l, "nameSearch", o),
            a = t.buildUrl("/Group/" + encodeURIComponent(n) + "/MembersV3/", l, c),
            t.pushGa("Group", "GetMembersOfGroupV3", a),
            t.serviceLibrary.get(a, s, h)
        },
        GetAdminsOfGroupV2: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "itemsPerPage", i),
            o = t.addParam(o, "currentPage", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/AdminsV2/", o, e),
            t.pushGa("Group", "GetAdminsOfGroupV2", s),
            t.serviceLibrary.get(s, u, f)
        },
        EditGroupMembership: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "clanPlatformType", u),
            h = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/" + encodeURIComponent(i) + "/SetMembershipType/" + encodeURIComponent(r) + "/", s, o),
            t.pushGa("Group", "EditGroupMembership", h),
            t.serviceLibrary.post(h, null , f, e)
        },
        KickMember: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "clanPlatformType", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/" + encodeURIComponent(i) + "/Kick/", o, e),
            t.pushGa("Group", "KickMember", s),
            t.serviceLibrary.post(s, null , u, f)
        },
        BanMember: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Members/" + encodeURIComponent(r) + "/Ban/", "", e);
            return t.pushGa("Group", "BanMember", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        UnbanMember: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/" + encodeURIComponent(i) + "/Unban/", "", f);
            return t.pushGa("Group", "UnbanMember", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        GetBannedMembersOfGroup: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "itemsPerPage", i),
            o = t.addParam(o, "currentPage", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Banned/", o, e),
            t.pushGa("Group", "GetBannedMembersOfGroup", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetBannedMembersOfGroupV2: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "itemsPerPage", i),
            o = t.addParam(o, "currentPage", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/BannedV2/", o, e),
            t.pushGa("Group", "GetBannedMembersOfGroupV2", s),
            t.serviceLibrary.get(s, u, f)
        },
        OverrideFounderAdmin: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Admin/FounderOverride/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Group", "OverrideFounderAdmin", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        Migrate: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Migrate/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("Group", "Migrate", o),
            t.serviceLibrary.post(o, null , u, f)
        },
        GetAdminsOfGroup: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "itemsPerPage", i),
            o = t.addParam(o, "currentPage", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Admins/", o, e),
            t.pushGa("Group", "GetAdminsOfGroup", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetMembersOfGroup: function(n, i, r, u, f, e, o, s, h) {
            var c = "", l;
            return c = t.addParam(c, "itemsPerPage", i),
            c = t.addParam(c, "currentPage", r),
            c = t.addParam(c, "memberType", u),
            c = t.addParam(c, "platformType", f),
            c = t.addParam(c, "sort", e),
            l = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/", c, h),
            t.pushGa("Group", "GetMembersOfGroup", l),
            t.serviceLibrary.get(l, o, s)
        },
        GetMembersOfGroupV2: function(n, i, r, u, f, e, o, s, h) {
            var c = "", l;
            return c = t.addParam(c, "itemsPerPage", i),
            c = t.addParam(c, "currentPage", r),
            c = t.addParam(c, "memberType", u),
            c = t.addParam(c, "platformType", f),
            c = t.addParam(c, "sort", e),
            l = t.buildUrl("/Group/" + encodeURIComponent(n) + "/MembersV2/", c, h),
            t.pushGa("Group", "GetMembersOfGroupV2", l),
            t.serviceLibrary.get(l, o, s)
        },
        GetPendingGroupsForMember: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/User/" + encodeURIComponent(n) + "/Pending/", e, f),
            t.pushGa("Group", "GetPendingGroupsForMember", o),
            t.serviceLibrary.get(o, r, u)
        },
        EditGroup: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(i) + "/Edit/", "", f);
            return t.pushGa("Group", "EditGroup", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        GetPendingMemberships: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "itemsPerPage", i),
            o = t.addParam(o, "currentPage", r),
            s = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/Pending/", o, e),
            t.pushGa("Group", "GetPendingMemberships", s),
            t.serviceLibrary.get(s, u, f)
        },
        RequestGroupMembership: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/Apply/", e, f),
            t.pushGa("Group", "RequestGroupMembership", o),
            t.serviceLibrary.post(o, null , r, u)
        },
        ApproveGroupMembership: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/" + encodeURIComponent(i) + "/Approve/", "", f);
            return t.pushGa("Group", "ApproveGroupMembership", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        DenyGroupMembership: function(n, i, r, u, f) {
            var e = t.buildUrl("/Group/" + encodeURIComponent(n) + "/Members/" + encodeURIComponent(i) + "/Deny/", "", f);
            return t.pushGa("Group", "DenyGroupMembership", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        GetJoinedGroupsForCurrentMember: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "clanonly", n),
            e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/MyGroups/", e, f),
            t.pushGa("Group", "GetJoinedGroupsForCurrentMember", o),
            t.serviceLibrary.get(o, r, u)
        },
        GetPendingGroupsForCurrentMember: function(n, i, r, u) {
            var f = "", e;
            return f = t.addParam(f, "populatefriends", n),
            e = t.buildUrl("/Group/MyPendingGroups/", f, u),
            t.pushGa("Group", "GetPendingGroupsForCurrentMember", e),
            t.serviceLibrary.get(e, i, r)
        },
        GetJoinedGroupsForMember: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "clanonly", i),
            o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/User/" + encodeURIComponent(n) + "/", o, e),
            t.pushGa("Group", "GetJoinedGroupsForMember", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetJoinedGroupsForCurrentMemberV2: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "clanonly", i),
            o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/MyGroups/V2/" + encodeURIComponent(n) + "/", o, e),
            t.pushGa("Group", "GetJoinedGroupsForCurrentMemberV2", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetPendingGroupsForCurrentMemberV2: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/MyPendingGroups/V2/" + encodeURIComponent(n) + "/", e, f),
            t.pushGa("Group", "GetPendingGroupsForCurrentMemberV2", o),
            t.serviceLibrary.get(o, r, u)
        },
        GetAllGroupsForCurrentMember: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "clanonly", n),
            e = t.addParam(e, "populatefriends", i),
            o = t.buildUrl("/Group/MyGroups/All/", e, f),
            t.pushGa("Group", "GetAllGroupsForCurrentMember", o),
            t.serviceLibrary.get(o, r, u)
        },
        GetJoinedGroupsForMemberV2: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "clanonly", r),
            s = t.addParam(s, "populatefriends", u),
            h = t.buildUrl("/Group/User/" + encodeURIComponent(n) + "/Joined/" + encodeURIComponent(i) + "/", s, o),
            t.pushGa("Group", "GetJoinedGroupsForMemberV2", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetAllGroupsForMember: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "clanonly", i),
            o = t.addParam(o, "populatefriends", r),
            s = t.buildUrl("/Group/User/" + encodeURIComponent(n) + "/All/", o, e),
            t.pushGa("Group", "GetAllGroupsForMember", s),
            t.serviceLibrary.get(s, u, f)
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.groupV2Service = {
        dataStore: [],
        groupV2Data: {
            getCacheItem: function(n) {
                return t.groupV2Service.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.groupV2Service.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.groupV2Service.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.groupV2Service.dataStore["Set_" + n.id] = n
            }
        },
        GetAvailableAvatars: function(i, r, u) {
            var f = t.buildUrl("/GroupV2/GetAvailableAvatars/", "", u)
              , e = t.groupV2Service.groupV2Data.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("GroupV2", "GetAvailableAvatars", f),
            t.serviceLibrary.get(f, function(n) {
                t.groupV2Service.groupV2Data.setCacheItem(n);
                i(n)
            }, r))
        },
        GetAvailableThemes: function(i, r, u) {
            var f = t.buildUrl("/GroupV2/GetAvailableThemes/", "", u)
              , e = t.groupV2Service.groupV2Data.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("GroupV2", "GetAvailableThemes", f),
            t.serviceLibrary.get(f, function(n) {
                t.groupV2Service.groupV2Data.setCacheItem(n);
                i(n)
            }, r))
        },
        GetRecommendedGroups: function(n, i, r, u) {
            var f = t.buildUrl("/GroupV2/Recommended/", "", u);
            return t.pushGa("GroupV2", "GetRecommendedGroups", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        GroupSearch: function(n, i, r, u) {
            var f = t.buildUrl("/GroupV2/Search/", "", u);
            return t.pushGa("GroupV2", "GroupSearch", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        GetGroup: function(n, i, r, u) {
            var f = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("GroupV2", "GetGroup", f),
            t.serviceLibrary.get(f, i, r)
        },
        GetGroupByName: function(n, i, r, u, f) {
            var e = t.buildUrl("/GroupV2/Name/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("GroupV2", "GetGroupByName", e),
            t.serviceLibrary.get(e, r, u)
        },
        CreateGroup: function(n, i, r, u) {
            var f = t.buildUrl("/GroupV2/Create/", "", u);
            return t.pushGa("GroupV2", "CreateGroup", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        EditGroup: function(n, i, r, u, f) {
            var e = t.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Edit/", "", f);
            return t.pushGa("GroupV2", "EditGroup", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        GetMembersOfGroup: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "currentPage", i),
            s = t.addParam(s, "memberType", r),
            s = t.addParam(s, "nameSearch", u),
            h = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/Members/", s, o),
            t.pushGa("GroupV2", "GetMembersOfGroup", h),
            t.serviceLibrary.get(h, f, e)
        },
        EditGroupMembership: function(n, i, r, u, f, e, o) {
            var s = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/Members/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/SetMembershipType/" + encodeURIComponent(u) + "/", "", o);
            return t.pushGa("GroupV2", "EditGroupMembership", s),
            t.serviceLibrary.post(s, null , f, e)
        },
        KickMember: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/Members/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/Kick/", "", e);
            return t.pushGa("GroupV2", "KickMember", o),
            t.serviceLibrary.post(o, null , u, f)
        },
        BanMember: function(n, i, r, u, f, e, o) {
            var s = t.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/Ban/", "", o);
            return t.pushGa("GroupV2", "BanMember", s),
            t.serviceLibrary.post(s, n, f, e)
        },
        UnbanMember: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/Members/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/Unban/", "", e);
            return t.pushGa("GroupV2", "UnbanMember", o),
            t.serviceLibrary.post(o, null , u, f)
        },
        GetBannedMembersOfGroup: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "currentPage", i),
            o = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/Banned/", e, f),
            t.pushGa("GroupV2", "GetBannedMembersOfGroup", o),
            t.serviceLibrary.get(o, r, u)
        },
        OverrideFounderAdmin: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/Admin/FounderOverride/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("GroupV2", "OverrideFounderAdmin", o),
            t.serviceLibrary.post(o, null , u, f)
        },
        RequestGroupMembership: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/Apply/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("GroupV2", "RequestGroupMembership", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        GetPendingMemberships: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "currentPage", i),
            o = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/Members/Pending/", e, f),
            t.pushGa("GroupV2", "GetPendingMemberships", o),
            t.serviceLibrary.get(o, r, u)
        },
        RescindGroupMembership: function(n, i, r, u, f) {
            var e = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/Members/Rescind/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("GroupV2", "RescindGroupMembership", e),
            t.serviceLibrary.post(e, null , r, u)
        },
        ApproveAllPending: function(n, i, r, u, f) {
            var e = t.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/ApproveAll/", "", f);
            return t.pushGa("GroupV2", "ApproveAllPending", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        DenyAllPending: function(n, i, r, u, f) {
            var e = t.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/DenyAll/", "", f);
            return t.pushGa("GroupV2", "DenyAllPending", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        ApprovePendingForList: function(n, i, r, u, f) {
            var e = t.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/ApproveList/", "", f);
            return t.pushGa("GroupV2", "ApprovePendingForList", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        DenyPendingForList: function(n, i, r, u, f) {
            var e = t.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/Members/DenyList/", "", f);
            return t.pushGa("GroupV2", "DenyPendingForList", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        GetGroupsForMember: function(n, i, r, u, f, e, o) {
            var s = t.buildUrl("/GroupV2/User/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o);
            return t.pushGa("GroupV2", "GetGroupsForMember", s),
            t.serviceLibrary.get(s, f, e)
        },
        GetMembersOfClanBridge: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "currentPage", i),
            s = t.addParam(s, "memberType", r),
            s = t.addParam(s, "nameSearch", u),
            h = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/ClanMembersBridge/", s, o),
            t.pushGa("GroupV2", "GetMembersOfClanBridge", h),
            t.serviceLibrary.get(h, f, e)
        },
        JoinClanForGroupBridge: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/GroupV2/" + encodeURIComponent(i) + "/ClansJoinBridge/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("GroupV2", "JoinClanForGroupBridge", o),
            t.serviceLibrary.post(o, n, u, f)
        },
        LeaveClanForGroupBridge: function(n, i, r, u, f) {
            var e = t.buildUrl("/GroupV2/" + encodeURIComponent(n) + "/ClansLeaveBridge/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("GroupV2", "LeaveClanForGroupBridge", e),
            t.serviceLibrary.post(e, null , r, u)
        }
    }
}(jQuery),
function() {
    var n = bungieNetPlatform;
    n.ignoreService = {
        dataStore: [],
        ignoreData: {
            getCacheItem: function(t) {
                return n.ignoreService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.ignoreService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.ignoreService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.ignoreService.dataStore["Set_" + t.id] = t
            }
        },
        GetIgnoreStatusForPost: function(t, i, r, u) {
            var f = n.buildUrl("/Ignore/MyIgnores/Posts/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Ignore", "GetIgnoreStatusForPost", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetIgnoreStatusForUser: function(t, i, r, u) {
            var f = n.buildUrl("/Ignore/MyIgnores/Users/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Ignore", "GetIgnoreStatusForUser", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetIgnoresForUser: function(t, i, r, u) {
            var f = n.buildUrl("/Ignore/MyIgnores/", "", u);
            return n.pushGa("Ignore", "GetIgnoresForUser", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        IgnoreItem: function(t, i, r, u) {
            var f = n.buildUrl("/Ignore/Ignore/", "", u);
            return n.pushGa("Ignore", "IgnoreItem", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        UnignoreItem: function(t, i, r, u) {
            var f = n.buildUrl("/Ignore/Unignore/", "", u);
            return n.pushGa("Ignore", "UnignoreItem", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        MyLastReport: function(t, i, r) {
            var u = n.buildUrl("/Ignore/MyLastReport/", "", r);
            return n.pushGa("Ignore", "MyLastReport", u),
            n.serviceLibrary.get(u, t, i)
        },
        FlagItem: function(t, i, r, u) {
            var f = n.buildUrl("/Ignore/Flag/", "", u);
            return n.pushGa("Ignore", "FlagItem", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        GetReportContext: function(t, i, r, u) {
            var f = n.buildUrl("/Ignore/ReportContext/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Ignore", "GetReportContext", f),
            n.serviceLibrary.get(f, i, r)
        }
    }
}(jQuery),
function() {
    var n = bungieNetPlatform;
    n.gameService = {
        dataStore: [],
        gameData: {
            getCacheItem: function(t) {
                return n.gameService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.gameService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.gameService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.gameService.dataStore["Set_" + t.id] = t
            }
        },
        GetPlayerGamesById: function(t, i, r, u) {
            var f = n.buildUrl("/Game/GetPlayerGamesById/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Game", "GetPlayerGamesById", f),
            n.serviceLibrary.get(f, i, r)
        },
        ReachModelSneakerNet: function(t, i, r, u) {
            var f = n.buildUrl("/Game/ReachModelSneakerNet/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Game", "ReachModelSneakerNet", f),
            n.serviceLibrary.post(f, null , i, r)
        }
    }
}(jQuery),
function() {
    var n = bungieNetPlatform;
    n.adminService = {
        dataStore: [],
        adminData: {
            getCacheItem: function(t) {
                return n.adminService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.adminService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.adminService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.adminService.dataStore["Set_" + t.id] = t
            }
        },
        GetAssignedReports: function(t, i, r) {
            var u = n.buildUrl("/Admin/Assigned/", "", r);
            return n.pushGa("Admin", "GetAssignedReports", u),
            n.serviceLibrary.post(u, null , t, i)
        },
        ResolveReport: function(t, i, r, u) {
            var f = n.buildUrl("/Admin/Assigned/Resolve/", "", u);
            return n.pushGa("Admin", "ResolveReport", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        OverturnReport: function(t, i, r, u) {
            var f = n.buildUrl("/Admin/Reports/Overturn/", "", u);
            return n.pushGa("Admin", "OverturnReport", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        GetDisciplinedReportsForMember: function(t, i, r, u, f) {
            var e = n.buildUrl("/Admin/Member/" + encodeURIComponent(i) + "/Reports/", "", f);
            return n.pushGa("Admin", "GetDisciplinedReportsForMember", e),
            n.serviceLibrary.post(e, t, r, u)
        },
        GetRecentDisciplineAndFlagHistoryForMember: function(t, i, r, u, f) {
            var e = n.buildUrl("/Admin/Member/" + encodeURIComponent(t) + "/RecentIncludingFlags/" + encodeURIComponent(i) + "", "", f);
            return n.pushGa("Admin", "GetRecentDisciplineAndFlagHistoryForMember", e),
            n.serviceLibrary.get(e, r, u)
        },
        GetResolvedReports: function(t, i, r, u) {
            var f = n.buildUrl("/Admin/Reports/", "", u);
            return n.pushGa("Admin", "GetResolvedReports", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        GloballyIgnoreItem: function(t, i, r, u) {
            var f = n.buildUrl("/Admin/Ignores/GloballyIgnore/", "", u);
            return n.pushGa("Admin", "GloballyIgnoreItem", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        OverrideBanOnUser: function(t, i, r, u, f) {
            var e = n.buildUrl("/Admin/Member/" + encodeURIComponent(i) + "/SetBan/", "", f);
            return n.pushGa("Admin", "OverrideBanOnUser", e),
            n.serviceLibrary.post(e, t, r, u)
        },
        OverrideMsgBanOnUser: function(t, i, r, u, f) {
            var e = n.buildUrl("/Admin/Member/" + encodeURIComponent(i) + "/SetMsgBan/", "", f);
            return n.pushGa("Admin", "OverrideMsgBanOnUser", e),
            n.serviceLibrary.post(e, t, r, u)
        },
        OverrideGroupWallBanOnUser: function(t, i, r, u, f) {
            var e = n.buildUrl("/Admin/Member/" + encodeURIComponent(i) + "/SetGroupWallBan/", "", f);
            return n.pushGa("Admin", "OverrideGroupWallBanOnUser", e),
            n.serviceLibrary.post(e, t, r, u)
        },
        OverrideGlobalIgnore: function(t, i, r, u) {
            var f = n.buildUrl("/Admin/Ignores/OverrideGlobalIgnore/", "", u);
            return n.pushGa("Admin", "OverrideGlobalIgnore", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        AdminUserSearch: function(t, i, r, u) {
            var f = "", e;
            return f = n.addParam(f, "q", t),
            e = n.buildUrl("/Admin/Member/Search/", f, u),
            n.pushGa("Admin", "AdminUserSearch", e),
            n.serviceLibrary.get(e, i, r)
        },
        GetUserBanState: function(t, i, r, u) {
            var f = n.buildUrl("/Admin/Member/" + encodeURIComponent(t) + "/GetBanState/", "", u);
            return n.pushGa("Admin", "GetUserBanState", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetUserWebClientIpHistory: function(t, i, r, u) {
            var f = n.buildUrl("/Admin/Member/" + encodeURIComponent(t) + "/GetWebClientIpHistory/", "", u);
            return n.pushGa("Admin", "GetUserWebClientIpHistory", f),
            n.serviceLibrary.get(f, i, r)
        },
        GetUserPostHistory: function(t, i, r, u, f) {
            var e = n.buildUrl("/Admin/Member/" + encodeURIComponent(t) + "/PostHistory/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Admin", "GetUserPostHistory", e),
            n.serviceLibrary.get(e, r, u)
        },
        GetAdminHistory: function(t, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = n.addParam(h, "membershipFilter", r),
            h = n.addParam(h, "startdate", u),
            h = n.addParam(h, "enddate", f),
            c = n.buildUrl("/Admin/GlobalHistory/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", h, s),
            n.pushGa("Admin", "GetAdminHistory", c),
            n.serviceLibrary.get(c, e, o)
        },
        BulkEditPost: function(t, i, r, u) {
            var f = n.buildUrl("/Admin/BulkEditPost/", "", u);
            return n.pushGa("Admin", "BulkEditPost", f),
            n.serviceLibrary.post(f, t, i, r)
        }
    }
}(jQuery),
function() {
    var n = bungieNetPlatform;
    n.tokensService = {
        dataStore: [],
        tokensData: {
            getCacheItem: function(t) {
                return n.tokensService.dataStore[t + ""]
            },
            setCacheItem: function(t) {
                n.tokensService.dataStore[t.id + ""] = t
            },
            getCacheSet: function(t) {
                return n.tokensService.dataStore["Set_" + t]
            },
            setCacheSet: function(t) {
                n.tokensService.dataStore["Set_" + t.id] = t
            }
        },
        ClaimAndApplyOnToken: function(t, i, r, u, f) {
            var e = n.buildUrl("/Tokens/ClaimAndApplyToken/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Tokens", "ClaimAndApplyOnToken", e),
            n.serviceLibrary.post(e, t, r, u)
        },
        GetCurrentUserOfferHistory: function(t, i, r) {
            var u = n.buildUrl("/Tokens/OfferHistory/", "", r);
            return n.pushGa("Tokens", "GetCurrentUserOfferHistory", u),
            n.serviceLibrary.get(u, t, i)
        },
        GetCurrentUserThrottleState: function(t, i, r) {
            var u = n.buildUrl("/Tokens/ThrottleState/", "", r);
            return n.pushGa("Tokens", "GetCurrentUserThrottleState", u),
            n.serviceLibrary.get(u, t, i)
        },
        ApplyOfferToCurrentDestinyMembership: function(t, i, r, u, f) {
            var e = n.buildUrl("/Tokens/ApplyOfferToCurrentDestinyMembership/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/", "", f);
            return n.pushGa("Tokens", "ApplyOfferToCurrentDestinyMembership", e),
            n.serviceLibrary.post(e, null , r, u)
        },
        VerifyAge: function(t, i, r) {
            var u = n.buildUrl("/Tokens/VerifyAge/", "", r);
            return n.pushGa("Tokens", "VerifyAge", u),
            n.serviceLibrary.post(u, null , t, i)
        },
        ClaimToken: function(t, i, r, u) {
            var f = n.buildUrl("/Tokens/Claim/", "", u);
            return n.pushGa("Tokens", "ClaimToken", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        ConsumeMarketplacePlatformCodeOffer: function(t, i, r, u, f, e) {
            var o = n.buildUrl("/Tokens/ConsumeMarketplacePlatformCodeOffer/" + encodeURIComponent(t) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return n.pushGa("Tokens", "ConsumeMarketplacePlatformCodeOffer", o),
            n.serviceLibrary.post(o, null , u, f)
        },
        MarketplacePlatformCodeOfferHistory: function(t, i, r) {
            var u = n.buildUrl("/Tokens/MarketplacePlatformCodeOfferHistory/", "", r);
            return n.pushGa("Tokens", "MarketplacePlatformCodeOfferHistory", u),
            n.serviceLibrary.get(u, t, i)
        },
        RAFGenerateReferralCode: function(t, i, r, u) {
            var f = n.buildUrl("/Tokens/RAF/GenerateReferralCode/" + encodeURIComponent(t) + "/", "", u);
            return n.pushGa("Tokens", "RAFGenerateReferralCode", f),
            n.serviceLibrary.post(f, null , i, r)
        },
        RAFClaim: function(t, i, r, u) {
            var f = n.buildUrl("/Tokens/RAF/Claim/", "", u);
            return n.pushGa("Tokens", "RAFClaim", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        RAFGetVeteranBondDetails: function(t, i, r) {
            var u = n.buildUrl("/Tokens/RAF/GetVeteranBondDetails/", "", r);
            return n.pushGa("Tokens", "RAFGetVeteranBondDetails", u),
            n.serviceLibrary.get(u, t, i)
        },
        RAFGetNewPlayerBondDetails: function(t, i, r) {
            var u = n.buildUrl("/Tokens/RAF/GetNewPlayerBondDetails/", "", r);
            return n.pushGa("Tokens", "RAFGetNewPlayerBondDetails", u),
            n.serviceLibrary.get(u, t, i)
        },
        BreakBond: function(t, i, r, u) {
            var f = n.buildUrl("/Tokens/RAF/BreakBond/", "", u);
            return n.pushGa("Tokens", "BreakBond", f),
            n.serviceLibrary.post(f, t, i, r)
        },
        GetRAFEligibility: function(t, i, r) {
            var u = n.buildUrl("/Tokens/RAF/GetEligibility/", "", r);
            return n.pushGa("Tokens", "GetRAFEligibility", u),
            n.serviceLibrary.get(u, t, i)
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.destinyService = {
        dataStore: [],
        destinyData: {
            getCacheItem: function(n) {
                return t.destinyService.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.destinyService.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.destinyService.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.destinyService.dataStore["Set_" + n.id] = n
            }
        },
        GetPublicAdvisorsV2: function(i, r, u, f) {
            var s = "", e, o;
            return (s = t.addParam(s, "definitions", i),
            e = t.buildUrl("/Destiny/Advisors/V2/", s, f),
            o = t.destinyService.destinyData.getCacheItem(e),
            o) ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Destiny", "GetPublicAdvisorsV2", e),
            t.serviceLibrary.get(e, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetAdvisorsForAccount: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Advisors/", o, e),
            t.pushGa("Destiny", "GetAdvisorsForAccount", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetAdvisorsForCharacterV2: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Advisors/V2/", s, o),
            t.pushGa("Destiny", "GetAdvisorsForCharacterV2", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetDestinyManifest: function(i, r, u) {
            var f = t.buildUrl("/Destiny/Manifest/", "", u)
              , e = t.destinyService.destinyData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Destiny", "GetDestinyManifest", f),
            t.serviceLibrary.get(f, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetDestinySingleDefinition: function(i, r, u, f, e, o, s) {
            var h = "", c, l;
            return (h = t.addParam(h, "definitions", u),
            h = t.addParam(h, "version", f),
            c = t.buildUrl("/Destiny/Manifest/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", h, s),
            l = t.destinyService.destinyData.getCacheItem(c),
            l) ? n.Deferred(function(n) {
                e(l);
                n.resolve(l)
            }).promise() : (t.pushGa("Destiny", "GetDestinySingleDefinition", c),
            t.serviceLibrary.get(c, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                e(n)
            }, o))
        },
        SearchDestinyPlayer: function(n, i, r, u, f) {
            var e = t.buildUrl("/Destiny/SearchDestinyPlayer/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("Destiny", "SearchDestinyPlayer", e),
            t.serviceLibrary.get(e, r, u)
        },
        GetItemReferenceDetail: function(n, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = t.addParam(h, "definitions", f),
            c = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/ItemReference/" + encodeURIComponent(u) + "/", h, s),
            t.pushGa("Destiny", "GetItemReferenceDetail", c),
            t.serviceLibrary.get(c, e, o)
        },
        GetAllItemsSummary: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Items/", o, e),
            t.pushGa("Destiny", "GetAllItemsSummary", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetAccount: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Destiny", "GetAccount", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetAccountSummary: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Summary/", o, e),
            t.pushGa("Destiny", "GetAccountSummary", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetVault: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", i),
            o = t.addParam(o, "accountId", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Vault/", o, e),
            t.pushGa("Destiny", "GetVault", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetVaultSummary: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", i),
            o = t.addParam(o, "accountId", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Vault/Summary/", o, e),
            t.pushGa("Destiny", "GetVaultSummary", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetCharacterSummary: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/", s, o),
            t.pushGa("Destiny", "GetCharacterSummary", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetCharacter: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Complete/", s, o),
            t.pushGa("Destiny", "GetCharacter", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetCharacterInventory: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Inventory/", s, o),
            t.pushGa("Destiny", "GetCharacterInventory", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetCharacterInventorySummary: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Inventory/Summary/", s, o),
            t.pushGa("Destiny", "GetCharacterInventorySummary", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetItemDetail: function(n, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = t.addParam(h, "definitions", f),
            c = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Inventory/" + encodeURIComponent(u) + "/", h, s),
            t.pushGa("Destiny", "GetItemDetail", c),
            t.serviceLibrary.get(c, e, o)
        },
        GetCharacterActivities: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Activities/", s, o),
            t.pushGa("Destiny", "GetCharacterActivities", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetCharacterProgression: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Progression/", s, o),
            t.pushGa("Destiny", "GetCharacterProgression", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetTriumphs: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Triumphs/", o, e),
            t.pushGa("Destiny", "GetTriumphs", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetRecordBookCompletionStatus: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/RecordBooks/" + encodeURIComponent(i) + "/Completion/", o, e),
            t.pushGa("Destiny", "GetRecordBookCompletionStatus", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetAllVendorsForCurrentCharacter: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Character/" + encodeURIComponent(i) + "/Vendors/", o, e),
            t.pushGa("Destiny", "GetAllVendorsForCurrentCharacter", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetVendorSummariesForCurrentCharacter: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Character/" + encodeURIComponent(i) + "/Vendors/Summaries/", o, e),
            t.pushGa("Destiny", "GetVendorSummariesForCurrentCharacter", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetVendorForCurrentCharacter: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Character/" + encodeURIComponent(i) + "/Vendor/" + encodeURIComponent(r) + "/", s, o),
            t.pushGa("Destiny", "GetVendorForCurrentCharacter", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetVendorItemDetailForCurrentCharacter: function(n, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = t.addParam(h, "definitions", f),
            c = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Character/" + encodeURIComponent(i) + "/Vendor/" + encodeURIComponent(r) + "/Item/" + encodeURIComponent(u) + "/", h, s),
            t.pushGa("Destiny", "GetVendorItemDetailForCurrentCharacter", c),
            t.serviceLibrary.get(c, e, o)
        },
        GetPublicAdvisors: function(i, r, u, f) {
            var s = "", e, o;
            return (s = t.addParam(s, "definitions", i),
            e = t.buildUrl("/Destiny/Advisors/", s, f),
            o = t.destinyService.destinyData.getCacheItem(e),
            o) ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Destiny", "GetPublicAdvisors", e),
            t.serviceLibrary.get(e, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetPublicXurVendor: function(i, r, u, f) {
            var s = "", e, o;
            return (s = t.addParam(s, "definitions", i),
            e = t.buildUrl("/Destiny/Advisors/Xur/", s, f),
            o = t.destinyService.destinyData.getCacheItem(e),
            o) ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Destiny", "GetPublicXurVendor", e),
            t.serviceLibrary.get(e, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetPublicVendor: function(i, r, u, f, e) {
            var h = "", o, s;
            return (h = t.addParam(h, "definitions", r),
            o = t.buildUrl("/Destiny/Vendors/" + encodeURIComponent(i) + "/", h, e),
            s = t.destinyService.destinyData.getCacheItem(o),
            s) ? n.Deferred(function(n) {
                u(s);
                n.resolve(s)
            }).promise() : (t.pushGa("Destiny", "GetPublicVendor", o),
            t.serviceLibrary.get(o, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                u(n)
            }, f))
        },
        GetAdvisorsForCurrentCharacter: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Character/" + encodeURIComponent(i) + "/Advisors/", o, e),
            t.pushGa("Destiny", "GetAdvisorsForCurrentCharacter", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetAdvisorsForCharacter: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Account/" + encodeURIComponent(i) + "/Character/" + encodeURIComponent(r) + "/Advisors/", s, o),
            t.pushGa("Destiny", "GetAdvisorsForCharacter", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetSpecialEventAdvisors: function(i, r, u, f) {
            var s = "", e, o;
            return (s = t.addParam(s, "definitions", i),
            e = t.buildUrl("/Destiny/Events/", s, f),
            o = t.destinyService.destinyData.getCacheItem(e),
            o) ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("Destiny", "GetSpecialEventAdvisors", e),
            t.serviceLibrary.get(e, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetDestinyLiveTileContentItems: function(i, r, u) {
            var f = t.buildUrl("/Destiny/LiveTiles/", "", u)
              , e = t.destinyService.destinyData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Destiny", "GetDestinyLiveTileContentItems", f),
            t.serviceLibrary.get(f, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetBondAdvisors: function(i, r, u, f, e) {
            var h = "", o, s;
            return (h = t.addParam(h, "definitions", r),
            o = t.buildUrl("/Destiny/" + encodeURIComponent(i) + "/MyAccount/Advisors/Bonds/", h, e),
            s = t.destinyService.destinyData.getCacheItem(o),
            s) ? n.Deferred(function(n) {
                u(s);
                n.resolve(s)
            }).promise() : (t.pushGa("Destiny", "GetBondAdvisors", o),
            t.serviceLibrary.get(o, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                u(n)
            }, f))
        },
        GetPublicVendorWithMetadata: function(i, r, u, f, e) {
            var h = "", o, s;
            return (h = t.addParam(h, "definitions", r),
            o = t.buildUrl("/Destiny/Vendors/" + encodeURIComponent(i) + "/Metadata/", h, e),
            s = t.destinyService.destinyData.getCacheItem(o),
            s) ? n.Deferred(function(n) {
                u(s);
                n.resolve(s)
            }).promise() : (t.pushGa("Destiny", "GetPublicVendorWithMetadata", o),
            t.serviceLibrary.get(o, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                u(n)
            }, f))
        },
        GetVendorForCurrentCharacterWithMetadata: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", u),
            h = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Character/" + encodeURIComponent(i) + "/Vendor/" + encodeURIComponent(r) + "/Metadata/", s, o),
            t.pushGa("Destiny", "GetVendorForCurrentCharacterWithMetadata", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetVendorItemDetailForCurrentCharacterWithMetadata: function(n, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = t.addParam(h, "definitions", f),
            c = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/MyAccount/Character/" + encodeURIComponent(i) + "/Vendor/" + encodeURIComponent(r) + "/Item/" + encodeURIComponent(u) + "/Metadata/", h, s),
            t.pushGa("Destiny", "GetVendorItemDetailForCurrentCharacterWithMetadata", c),
            t.serviceLibrary.get(c, e, o)
        },
        TransferItem: function(n, i, r, u) {
            var f = t.buildUrl("/Destiny/TransferItem/", "", u);
            return t.pushGa("Destiny", "TransferItem", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        EquipItem: function(n, i, r, u) {
            var f = t.buildUrl("/Destiny/EquipItem/", "", u);
            return t.pushGa("Destiny", "EquipItem", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        EquipItems: function(n, i, r, u) {
            var f = t.buildUrl("/Destiny/EquipItems/", "", u);
            return t.pushGa("Destiny", "EquipItems", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        SetItemLockState: function(n, i, r, u) {
            var f = t.buildUrl("/Destiny/SetLockState/", "", u);
            return t.pushGa("Destiny", "SetItemLockState", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        BuyItem: function(n, i, r, u) {
            var f = t.buildUrl("/Destiny/BuyItem/", "", u);
            return t.pushGa("Destiny", "BuyItem", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        RefundItem: function(n, i, r, u, f) {
            var e = t.buildUrl("/Destiny/" + encodeURIComponent(i) + "/RefundItem/", "", f);
            return t.pushGa("Destiny", "RefundItem", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        SetQuestTrackedState: function(n, i, r, u) {
            var f = t.buildUrl("/Destiny/SetQuestTrackedState/", "", u);
            return t.pushGa("Destiny", "SetQuestTrackedState", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        GetHistoricalStatsDefinition: function(i, r, u) {
            var f = t.buildUrl("/Destiny/Stats/Definition/", "", u)
              , e = t.destinyService.destinyData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Destiny", "GetHistoricalStatsDefinition", f),
            t.serviceLibrary.get(f, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetHistoricalStats: function(n, i, r, u, f, e, o, s, h, c, l, a, v) {
            var y = "", p;
            return y = t.addParam(y, "periodType", u),
            y = t.addParam(y, "modes", f),
            y = t.addParam(y, "groups", e),
            y = t.addParam(y, "monthstart", o),
            y = t.addParam(y, "monthend", s),
            y = t.addParam(y, "daystart", h),
            y = t.addParam(y, "dayend", c),
            p = t.buildUrl("/Destiny/Stats/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", y, v),
            t.pushGa("Destiny", "GetHistoricalStats", p),
            t.serviceLibrary.get(p, l, a)
        },
        GetHistoricalStatsForAccount: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "groups", r),
            s = t.buildUrl("/Destiny/Stats/Account/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Destiny", "GetHistoricalStatsForAccount", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetActivityHistory: function(n, i, r, u, f, e, o, s, h, c) {
            var l = "", a;
            return l = t.addParam(l, "mode", u),
            l = t.addParam(l, "count", f),
            l = t.addParam(l, "page", e),
            l = t.addParam(l, "definitions", o),
            a = t.buildUrl("/Destiny/Stats/ActivityHistory/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", l, c),
            t.pushGa("Destiny", "GetActivityHistory", a),
            t.serviceLibrary.get(a, s, h)
        },
        GetUniqueWeaponHistory: function(i, r, u, f, e, o, s) {
            var l = "", h, c;
            return (l = t.addParam(l, "definitions", f),
            h = t.buildUrl("/Destiny/Stats/UniqueWeapons/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", l, s),
            c = t.destinyService.destinyData.getCacheItem(h),
            c) ? n.Deferred(function(n) {
                e(c);
                n.resolve(c)
            }).promise() : (t.pushGa("Destiny", "GetUniqueWeaponHistory", h),
            t.serviceLibrary.get(h, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                e(n)
            }, o))
        },
        GetLeaderboards: function(n, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = t.addParam(h, "modes", r),
            h = t.addParam(h, "statid", u),
            h = t.addParam(h, "maxtop", f),
            c = t.buildUrl("/Destiny/Stats/Leaderboards/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", h, s),
            t.pushGa("Destiny", "GetLeaderboards", c),
            t.serviceLibrary.get(c, e, o)
        },
        GetClanLeaderboards: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "modes", i),
            s = t.addParam(s, "statid", r),
            s = t.addParam(s, "maxtop", u),
            h = t.buildUrl("/Destiny/Stats/ClanLeaderboards/" + encodeURIComponent(n) + "/", s, o),
            t.pushGa("Destiny", "GetClanLeaderboards", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetLeaderboardsForPsn: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "modes", n),
            e = t.addParam(e, "code", i),
            o = t.buildUrl("/Destiny/Stats/LeaderboardsForPsn/", e, f),
            t.pushGa("Destiny", "GetLeaderboardsForPsn", o),
            t.serviceLibrary.get(o, r, u)
        },
        GetLeaderboardsForCharacter: function(n, i, r, u, f, e, o, s, h) {
            var c = "", l;
            return c = t.addParam(c, "modes", u),
            c = t.addParam(c, "statid", f),
            c = t.addParam(c, "maxtop", e),
            l = t.buildUrl("/Destiny/Stats/Leaderboards/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", c, h),
            t.pushGa("Destiny", "GetLeaderboardsForCharacter", l),
            t.serviceLibrary.get(l, o, s)
        },
        GetPostGameCarnageReport: function(n, i, r, u, f) {
            var e = "", o;
            return e = t.addParam(e, "definitions", i),
            o = t.buildUrl("/Destiny/Stats/PostGameCarnageReport/" + encodeURIComponent(n) + "/", e, f),
            t.pushGa("Destiny", "GetPostGameCarnageReport", o),
            t.serviceLibrary.get(o, r, u)
        },
        GetActivityBlob: function(n, i, r, u) {
            var f = t.buildUrl("/Destiny/Stats/ActivityBlob/" + encodeURIComponent(n) + "/", "", u);
            return t.pushGa("Destiny", "GetActivityBlob", f),
            t.serviceLibrary.get(f, i, r)
        },
        GetDestinyAggregateActivityStats: function(i, r, u, f, e, o, s) {
            var l = "", h, c;
            return (l = t.addParam(l, "definitions", f),
            h = t.buildUrl("/Destiny/Stats/AggregateActivityStats/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", l, s),
            c = t.destinyService.destinyData.getCacheItem(h),
            c) ? n.Deferred(function(n) {
                e(c);
                n.resolve(c)
            }).promise() : (t.pushGa("Destiny", "GetDestinyAggregateActivityStats", h),
            t.serviceLibrary.get(h, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                e(n)
            }, o))
        },
        GetMembershipIdByDisplayName: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "ignorecase", r),
            s = t.buildUrl("/Destiny/" + encodeURIComponent(n) + "/Stats/GetMembershipIdByDisplayName/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Destiny", "GetMembershipIdByDisplayName", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetExcellenceBadges: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "definitions", r),
            s = t.buildUrl("/Destiny/Stats/GetExcellenceBadges/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("Destiny", "GetExcellenceBadges", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetMyGrimoire: function(n, i, r, u, f, e, o) {
            var s = "", h;
            return s = t.addParam(s, "definitions", i),
            s = t.addParam(s, "flavour", r),
            s = t.addParam(s, "single", u),
            h = t.buildUrl("/Destiny/Vanguard/Grimoire/" + encodeURIComponent(n) + "/", s, o),
            t.pushGa("Destiny", "GetMyGrimoire", h),
            t.serviceLibrary.get(h, f, e)
        },
        GetGrimoireByMembership: function(n, i, r, u, f, e, o, s) {
            var h = "", c;
            return h = t.addParam(h, "definitions", r),
            h = t.addParam(h, "flavour", u),
            h = t.addParam(h, "single", f),
            c = t.buildUrl("/Destiny/Vanguard/Grimoire/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", h, s),
            t.pushGa("Destiny", "GetGrimoireByMembership", c),
            t.serviceLibrary.get(c, e, o)
        },
        GetGrimoireDefinition: function(i, r, u) {
            var f = t.buildUrl("/Destiny/Vanguard/Grimoire/Definition/", "", u)
              , e = t.destinyService.destinyData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("Destiny", "GetGrimoireDefinition", f),
            t.serviceLibrary.get(f, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetDestinyExplorerItems: function(i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt) {
            var it = "", rt, ut;
            return (it = t.addParam(it, "page", i),
            it = t.addParam(it, "count", r),
            it = t.addParam(it, "name", u),
            it = t.addParam(it, "order", f),
            it = t.addParam(it, "orderstathash", e),
            it = t.addParam(it, "direction", o),
            it = t.addParam(it, "rarity", s),
            it = t.addParam(it, "step", h),
            it = t.addParam(it, "categories", c),
            it = t.addParam(it, "weaponPerformance", l),
            it = t.addParam(it, "impactEffects", a),
            it = t.addParam(it, "guardianAttributes", v),
            it = t.addParam(it, "lightAbilities", y),
            it = t.addParam(it, "damageTypes", p),
            it = t.addParam(it, "matchrandomsteps", w),
            it = t.addParam(it, "definitions", b),
            it = t.addParam(it, "sourcecat", k),
            it = t.addParam(it, "sourcehash", d),
            rt = t.buildUrl("/Destiny/Explorer/Items/", it, tt),
            ut = t.destinyService.destinyData.getCacheItem(rt),
            ut) ? n.Deferred(function(n) {
                g(ut);
                n.resolve(ut)
            }).promise() : (t.pushGa("Destiny", "GetDestinyExplorerItems", rt),
            t.serviceLibrary.get(rt, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                g(n)
            }, nt))
        },
        GetDestinyExplorerTalentNodeSteps: function(i, r, u, f, e, o, s, h, c, l, a, v, y) {
            var p = "", w, b;
            return (p = t.addParam(p, "page", i),
            p = t.addParam(p, "count", r),
            p = t.addParam(p, "name", u),
            p = t.addParam(p, "direction", f),
            p = t.addParam(p, "weaponPerformance", e),
            p = t.addParam(p, "impactEffects", o),
            p = t.addParam(p, "guardianAttributes", s),
            p = t.addParam(p, "lightAbilities", h),
            p = t.addParam(p, "damageTypes", c),
            p = t.addParam(p, "definitions", l),
            w = t.buildUrl("/Destiny/Explorer/TalentNodeSteps/", p, y),
            b = t.destinyService.destinyData.getCacheItem(w),
            b) ? n.Deferred(function(n) {
                a(b);
                n.resolve(b)
            }).promise() : (t.pushGa("Destiny", "GetDestinyExplorerTalentNodeSteps", w),
            t.serviceLibrary.get(w, function(n) {
                t.destinyService.destinyData.setCacheItem(n);
                a(n)
            }, v))
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.communitycontentService = {
        dataStore: [],
        communitycontentData: {
            getCacheItem: function(n) {
                return t.communitycontentService.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.communitycontentService.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.communitycontentService.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.communitycontentService.dataStore["Set_" + n.id] = n
            }
        },
        GetCommunityContent: function(i, r, u, f, e, o) {
            var s = t.buildUrl("/CommunityContent/Get/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o)
              , h = t.communitycontentService.communitycontentData.getCacheItem(s);
            return h ? n.Deferred(function(n) {
                f(h);
                n.resolve(h)
            }).promise() : (t.pushGa("CommunityContent", "GetCommunityContent", s),
            t.serviceLibrary.get(s, function(n) {
                t.communitycontentService.communitycontentData.setCacheItem(n);
                f(n)
            }, e))
        },
        GetApprovalQueue: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/CommunityContent/Queue/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("CommunityContent", "GetApprovalQueue", o),
            t.serviceLibrary.get(o, u, f)
        },
        SubmitContent: function(n, i, r, u) {
            var f = t.buildUrl("/CommunityContent/Submit/", "", u);
            return t.pushGa("CommunityContent", "SubmitContent", f),
            t.serviceLibrary.post(f, n, i, r)
        },
        EditContent: function(n, i, r, u, f) {
            var e = t.buildUrl("/CommunityContent/Edit/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("CommunityContent", "EditContent", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        AlterApprovalState: function(n, i, r, u, f) {
            var e = t.buildUrl("/CommunityContent/AlterApprovalState/" + encodeURIComponent(i) + "/", "", f);
            return t.pushGa("CommunityContent", "AlterApprovalState", e),
            t.serviceLibrary.post(e, n, r, u)
        },
        GetCommunityLiveStatuses: function(i, r, u, f, e, o, s) {
            var l = "", h, c;
            return (l = t.addParam(l, "modeHash", f),
            h = t.buildUrl("/CommunityContent/Live/All/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", l, s),
            c = t.communitycontentService.communitycontentData.getCacheItem(h),
            c) ? n.Deferred(function(n) {
                e(c);
                n.resolve(c)
            }).promise() : (t.pushGa("CommunityContent", "GetCommunityLiveStatuses", h),
            t.serviceLibrary.get(h, function(n) {
                t.communitycontentService.communitycontentData.setCacheItem(n);
                e(n)
            }, o))
        },
        GetCommunityLiveStatusesForClanmates: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/CommunityContent/Live/Clan/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("CommunityContent", "GetCommunityLiveStatusesForClanmates", o),
            t.serviceLibrary.get(o, u, f)
        },
        GetCommunityLiveStatusesForFriends: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/CommunityContent/Live/Friends/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("CommunityContent", "GetCommunityLiveStatusesForFriends", o),
            t.serviceLibrary.get(o, u, f)
        },
        GetAdminCommunityLiveStatuses: function(n, i, r, u, f, e) {
            var o = "", s;
            return o = t.addParam(o, "name", r),
            s = t.buildUrl("/CommunityContent/Live/Admin/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/", o, e),
            t.pushGa("CommunityContent", "GetAdminCommunityLiveStatuses", s),
            t.serviceLibrary.get(s, u, f)
        },
        GetFeaturedCommunityLiveStatuses: function(i, r, u, f, e, o) {
            var s = t.buildUrl("/CommunityContent/Live/Featured/" + encodeURIComponent(i) + "/" + encodeURIComponent(r) + "/" + encodeURIComponent(u) + "/", "", o)
              , h = t.communitycontentService.communitycontentData.getCacheItem(s);
            return h ? n.Deferred(function(n) {
                f(h);
                n.resolve(h)
            }).promise() : (t.pushGa("CommunityContent", "GetFeaturedCommunityLiveStatuses", s),
            t.serviceLibrary.get(s, function(n) {
                t.communitycontentService.communitycontentData.setCacheItem(n);
                f(n)
            }, e))
        },
        AdminSetCommunityLiveMemberBanStatus: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/CommunityContent/Live/Partnerships/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/Ban/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("CommunityContent", "AdminSetCommunityLiveMemberBanStatus", o),
            t.serviceLibrary.post(o, null , u, f)
        },
        AdminSetCommunityLiveMemberFeatureStatus: function(n, i, r, u, f, e) {
            var o = t.buildUrl("/CommunityContent/Live/Partnerships/" + encodeURIComponent(n) + "/" + encodeURIComponent(i) + "/Feature/" + encodeURIComponent(r) + "/", "", e);
            return t.pushGa("CommunityContent", "AdminSetCommunityLiveMemberFeatureStatus", o),
            t.serviceLibrary.post(o, null , u, f)
        }
    }
}(jQuery),
function(n) {
    var t = bungieNetPlatform;
    t.coreService = {
        dataStore: [],
        coreData: {
            getCacheItem: function(n) {
                return t.coreService.dataStore[n + ""]
            },
            setCacheItem: function(n) {
                t.coreService.dataStore[n.id + ""] = n
            },
            getCacheSet: function(n) {
                return t.coreService.dataStore["Set_" + n]
            },
            setCacheSet: function(n) {
                t.coreService.dataStore["Set_" + n.id] = n
            }
        },
        HelloWorld: function(n, i, r) {
            var u = t.buildUrl("//HelloWorld/", "", r);
            return t.pushGa("", "HelloWorld", u),
            t.serviceLibrary.get(u, n, i)
        },
        GetAvailableLocales: function(i, r, u) {
            var f = t.buildUrl("//GetAvailableLocales/", "", u)
              , e = t.coreService.coreData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("", "GetAvailableLocales", f),
            t.serviceLibrary.get(f, function(n) {
                t.coreService.coreData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetCommonSettings: function(i, r, u) {
            var f = t.buildUrl("//Settings/", "", u)
              , e = t.coreService.coreData.getCacheItem(f);
            return e ? n.Deferred(function(n) {
                i(e);
                n.resolve(e)
            }).promise() : (t.pushGa("", "GetCommonSettings", f),
            t.serviceLibrary.get(f, function(n) {
                t.coreService.coreData.setCacheItem(n);
                i(n)
            }, r))
        },
        GetSystemStatus: function(i, r, u, f) {
            var e = t.buildUrl("//Status/" + encodeURIComponent(i) + "/", "", f)
              , o = t.coreService.coreData.getCacheItem(e);
            return o ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("", "GetSystemStatus", e),
            t.serviceLibrary.get(e, function(n) {
                t.coreService.coreData.setCacheItem(n);
                r(n)
            }, u))
        },
        GetGlobalAlerts: function(i, r, u, f) {
            var s = "", e, o;
            return (s = t.addParam(s, "includestreaming", i),
            e = t.buildUrl("//GlobalAlerts/", s, f),
            o = t.coreService.coreData.getCacheItem(e),
            o) ? n.Deferred(function(n) {
                r(o);
                n.resolve(o)
            }).promise() : (t.pushGa("", "GetGlobalAlerts", e),
            t.serviceLibrary.get(e, function(n) {
                t.coreService.coreData.setCacheItem(n);
                r(n)
            }, u))
        }
    }
}(jQuery);
var RequestWithCode = function(n, t) {
    this.code = t
}
  , RequestWithRefreshToken = function(n, t) {
    this.refreshToken = t
}
  , CreateApplicationAction = function(n, t, i, r, u, f, e) {
    this.name = t;
    this.redirectUrl = i;
    this.link = r;
    this.scope = u;
    this.origin = f;
    this.agreedToCurrentEula = e
}
  , EditApplicationAction = function(n, t, i, r, u, f, e) {
    this.name = t;
    this.redirectUrl = i;
    this.link = r;
    this.scope = u;
    this.origin = f;
    this.status = e
}
  , ApplicationQuery = function(n, t, i, r, u) {
    this.name = t;
    this.ownerMembershipId = i;
    this.itemsPerPage = r;
    this.currentPage = u
}
  , CreateBungieProfileRequest = function(n, t, i, r, u, f, e, o) {
    this.displayName = t;
    this.email = i;
    this.emailUsage = r;
    this.credentialPublic = u;
    this.termsAccepted = f;
    this.authProviderType = e;
    this.locale = o
}
  , UserEditRequest = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt) {
    this.membershipId = t;
    this.displayName = i;
    this.uniqueName = r;
    this.profilePicture = u;
    this.userTitle = f;
    this.about = e;
    this.emailUsage = o;
    this.emailAddress = s;
    this.showActivity = h;
    this.profileTheme = c;
    this.locale = l;
    this.localeInheritDefault = a;
    this.showGroupMessaging = v;
    this.hideDestinyData = y;
    this.statusText = p;
    this.privacyFlags = w;
    this.pmToastsEnabled = b;
    this.showGamertagPublic = k;
    this.showFacebookPublic = d;
    this.showPsnPublic = g;
    this.adultMode = nt;
    this.isThemeLight = tt
}
  , DestinyEmblemSourceRequest = function(n, t, i, r) {
    this.MembershipType = t;
    this.DestinyMembershipId = i;
    this.DestinyCharacterId = r
}
  , NotificationUpdateRequest = function(n, t) {
    this.settings = t
}
  , NotificationUpdateSetting = function(n, t, i, r, u) {
    this.notificationType = t;
    this.notifyEmail = i;
    this.notifyMobile = r;
    this.notifyWeb = u
}
  , MobileAppPairing = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.ApnLocale = t;
    this.ApnToken = i;
    this.AppInstallationId = r;
    this.AppType = u;
    this.C2dmRegistrationId = f;
    this.DeviceName = e;
    this.DeviceType = o;
    this.MembershipId = s;
    this.MembershipType = h;
    this.PairId = c;
    this.PairingDate = l
}
  , LinkOverrideInput = function(n, t, i, r) {
    this.crType = t;
    this.Credential = i;
    this.DisplayName = r
}
  , SaveMessageForConversationRequest = function(n, t, i, r) {
    this.conversationId = t;
    this.subject = i;
    this.body = r
}
  , UserIsTypingRequest = function(n, t) {
    this.conversationId = t
}
  , CreateConversationRequest = function(n, t, i, r) {
    this.membersToId = t;
    this.subject = i;
    this.body = r
}
  , EntityList = function(n, t) {
    this.entityIds = t
}
  , LegacySaveMessageRequestV2 = function(n, t, i, r, u, f) {
    this.membersToId = t;
    this.conversationId = i;
    this.subject = r;
    this.body = u;
    this.invitationId = f
}
  , ContentQueryPublic = function(n, t, i, r, u, f, e, o, s, h) {
    this.contentTypes = t;
    this.tag = i;
    this.notTag = r;
    this.sortBy = u;
    this.creationDate = f;
    this.modifiedDate = e;
    this.locSettings = o;
    this.itemsPerPage = s;
    this.currentPage = h
}
  , CreatePostRequest = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) {
    this.parentPostId = t;
    this.subTopicOverride = i;
    this.subject = r;
    this.body = u;
    this.tagInput = f;
    this.tagCategory = e;
    this.category = o;
    this.groupId = s;
    this.isGroupPrivate = h;
    this.urlLinkOrImage = c;
    this.metadata = l;
    this.playerSupportFlags = a;
    this.playerSupportMetadata = v;
    this.recruitMicrophoneRequired = y;
    this.recruitIntensity = p;
    this.recruitTone = w;
    this.recruitSlots = b
}
  , CreateContentCommentRequest = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
    this.contentId = t;
    this.parentPostId = i;
    this.subTopicOverride = r;
    this.subject = u;
    this.body = f;
    this.tagInput = e;
    this.tagCategory = o;
    this.category = s;
    this.groupId = h;
    this.isGroupPrivate = c;
    this.urlLinkOrImage = l;
    this.metadata = a;
    this.playerSupportFlags = v;
    this.playerSupportMetadata = y;
    this.recruitMicrophoneRequired = p;
    this.recruitIntensity = w;
    this.recruitTone = b;
    this.recruitSlots = k
}
  , EditPostRequest = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.subject = t;
    this.body = i;
    this.tagInput = r;
    this.tagCategory = u;
    this.urlLinkOrImage = f;
    this.metadata = e;
    this.category = o;
    this.disableBits = s;
    this.isGroupPostPrivate = h;
    this.playerSupportFlags = c;
    this.playerSupportMetadata = l
}
  , ModerationRequest = function(n, t, i, r, u, f, e) {
    this.moderatedItemId = t;
    this.moderatedItemType = i;
    this.comments = r;
    this.reason = u;
    this.requestedPunishment = f;
    this.requestedBlastBan = e
}
  , MessageContent = function(n, t, i) {
    this.title = t;
    this.message = i
}
  , MultiMessageContent = function(n, t, i) {
    this.messageContent = t;
    this.targetIds = i
}
  , GroupQuery = function(n, t, i, r, u, f, e, o, s, h, c, l) {
    this.contents = t;
    this.creationDate = i;
    this.sortBy = r;
    this.membershipType = u;
    this.groupRelatableSearchType = f;
    this.groupMemberCountFilter = e;
    this.localeFilter = o;
    this.tagText = s;
    this.tagTextList = h;
    this.itemsPerPage = c;
    this.currentPage = l
}
  , TextParameter = function(n, t, i) {
    this.searchValue = t;
    this.searchType = i
}
  , GroupCreateAction = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g) {
    this.clanMembershipTypes = t;
    this.name = i;
    this.about = r;
    this.motto = u;
    this.theme = f;
    this.avatarImageIndex = e;
    this.tags = o;
    this.isPublic = s;
    this.membershipOption = h;
    this.isPublicTopicAdminOnly = c;
    this.isDefaultPostPublic = l;
    this.attributes = a;
    this.allowChat = v;
    this.isDefaultPostAlliance = y;
    this.chatSecurity = p;
    this.clanCallsign = w;
    this.locale = b;
    this.homepage = k;
    this.clanReviewType = d;
    this.clanName = g
}
  , GroupAttribute = function(n, t, i, r) {
    this.attributeId = t;
    this.minValue = i;
    this.maxValue = r
}
  , GroupCreateMinimal = function(n, t, i) {
    this.groupName = t;
    this.groupAbout = i
}
  , GroupEditActionV2 = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt) {
    this.groupId = t;
    this.name = i;
    this.about = r;
    this.motto = u;
    this.theme = f;
    this.avatarImageIndex = e;
    this.tags = o;
    this.isPublic = s;
    this.membershipOption = h;
    this.isPublicTopicAdminOnly = c;
    this.attributes = l;
    this.allowChat = a;
    this.chatSecurity = v;
    this.clanCallsign = y;
    this.defaultPublicity = p;
    this.locale = w;
    this.homepage = b;
    this.clanReviewType = k;
    this.enableInvitationMessagingForAdmins = d;
    this.clanName = g;
    this.clanNameMembershipType = nt
}
  , GroupApplicationRequest = function(n, t) {
    this.message = t
}
  , GroupApplicationListRequest = function(n, t, i) {
    this.membershipIds = t;
    this.message = i
}
  , GroupBanRequest = function(n, t, i) {
    this.comment = t;
    this.length = i
}
  , GroupEditAction = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g) {
    this.groupId = t;
    this.name = i;
    this.about = r;
    this.motto = u;
    this.theme = f;
    this.avatarImageIndex = e;
    this.tags = o;
    this.isPublic = s;
    this.membershipOption = h;
    this.isPublicTopicAdminOnly = c;
    this.isDefaultPostPublic = l;
    this.attributes = a;
    this.allowChat = v;
    this.isDefaultPostAlliance = y;
    this.chatSecurity = p;
    this.clanCallsign = w;
    this.locale = b;
    this.homepage = k;
    this.clanReviewType = d;
    this.clanName = g
}
  , GroupAction = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
    this.groupType = t;
    this.name = i;
    this.about = r;
    this.motto = u;
    this.theme = f;
    this.avatarImageIndex = e;
    this.tags = o;
    this.isPublic = s;
    this.membershipOption = h;
    this.isPublicTopicAdminOnly = c;
    this.isDefaultPostPublic = l;
    this.allowChat = a;
    this.isDefaultPostAlliance = v;
    this.chatSecurity = y;
    this.callsign = p;
    this.locale = w;
    this.homepage = b;
    this.platformMembershipType = k
}
  , UserMembership = function(n, t, i, r) {
    this.membershipType = t;
    this.membershipId = i;
    this.displayName = r
}
  , IgnoreQuery = function(n, t, i, r) {
    this.itemType = t;
    this.itemsPerPage = i;
    this.currentPage = r
}
  , IgnoreItemRequest = function(n, t, i, r, u, f, e, o, s) {
    this.ignoredItemId = t;
    this.ignoredItemType = i;
    this.comment = r;
    this.reason = u;
    this.itemContextId = f;
    this.itemContextType = e;
    this.requestedPunishment = o;
    this.requestedBlastBan = s
}
  , UnignoreItemRequest = function(n, t, i) {
    this.ignoredItemId = t;
    this.ignoredItemType = i
}
  , ReportResolution = function(n, t, i, r, u, f) {
    this.reportId = t;
    this.reason = i;
    this.result = r;
    this.comments = u;
    this.banLength = f
}
  , PagedQuery = function(n, t, i) {
    this.itemsPerPage = t;
    this.currentPage = i
}
  , UserBanRequest = function(n, t, i, r) {
    this.comment = t;
    this.banExpireDate = i;
    this.profileBanExpireDate = r
}
  , IgnoreItemOverrideRequest = function(n, t, i, r, u) {
    this.globalIgnoreEndDate = t;
    this.ignoredItemId = i;
    this.ignoredItemType = r;
    this.comment = u
}
  , BulkEditPostRequest = function(n, t) {
    this.PostsToEdit = t
}
  , DestinyItemTransferRequest = function(n, t, i, r, u, f, e) {
    this.itemReferenceHash = t;
    this.stackSize = i;
    this.transferToVault = r;
    this.itemId = u;
    this.characterId = f;
    this.membershipType = e
}
  , DestinyItemActionRequest = function(n, t, i, r) {
    this.itemId = t;
    this.characterId = i;
    this.membershipType = r
}
  , DestinyItemSetActionRequest = function(n, t, i, r) {
    this.itemIds = t;
    this.characterId = i;
    this.membershipType = r
}
  , DestinyItemFlagRequest = function(n, t, i, r, u) {
    this.state = t;
    this.itemId = i;
    this.characterId = r;
    this.membershipType = u
}
  , DestinyBuyItemRequest = function(n, t, i, r, u, f) {
    this.itemReferenceHash = t;
    this.vendorHash = i;
    this.vendorItemIndex = r;
    this.characterId = u;
    this.membershipType = f
}
  , DestinyVendorReceipt = function(n, t, i, r, u, f, e, o, s) {
    this.currencyPaid = t;
    this.itemReceived = i;
    this.licenseUnlockHash = r;
    this.purchasedByCharacterId = u;
    this.refundPolicy = f;
    this.sequenceNumber = e;
    this.timeToExpiration = o;
    this.expiresOn = s
}
  , DestinyItemQuantity = function(n, t, i, r) {
    this.itemHash = t;
    this.itemInstanceId = i;
    this.value = r
}
  , CommunityContentSubmission = function(n, t, i, r) {
    this.sourceUrl = t;
    this.title = i;
    this.description = r
}
  , GeneralUser = {
    membershipId: 0,
    uniqueName: [],
    normalizedName: [],
    displayName: [],
    profilePicture: 0,
    profileTheme: 0,
    userTitle: 0,
    successMessageFlags: 0,
    isDeleted: !1,
    about: [],
    firstAccess: null ,
    lastUpdate: null ,
    legacyPortalUID: 0,
    context: {
        isFollowing: !1,
        ignoreStatus: {
            isIgnored: !1,
            ignoreFlags: 0
        },
        globalIgnoreEndDate: null
    },
    psnDisplayName: [],
    xboxDisplayName: [],
    fbDisplayName: [],
    showActivity: !1,
    locale: [],
    localeInheritDefault: !1,
    lastBanReportId: 0,
    showGroupMessaging: !1,
    profilePicturePath: [],
    profilePictureWidePath: [],
    profileThemeName: [],
    userTitleDisplay: [],
    statusText: [],
    statusDate: null ,
    liveStatuses: [],
    profileBanExpire: null
}
  , UserToUserContext = {
    isFollowing: !1,
    ignoreStatus: {
        isIgnored: !1,
        ignoreFlags: 0
    },
    globalIgnoreEndDate: null
}
  , IgnoreResponse = {
    isIgnored: !1,
    ignoreFlags: 0
}
  , CommunityLiveStatus = {
    bnetMembershipId: 0,
    dateStatusUpdated: null ,
    url: [],
    partnershipIdentifier: [],
    partnershipType: 0,
    thumbnail: [],
    destinyAccountId: 0,
    destinyCharacterId: 0,
    destinyMembershipType: 0,
    currentActivityHash: {},
    activityMode: 0,
    dateLastPlayed: null ,
    emblemHash: {},
    dateStreamStarted: null ,
    locale: [],
    currentViewers: 0,
    followers: 0,
    overallViewers: 0,
    isFeatured: !1,
    title: [],
    activityModeHash: {},
    dateFeatured: null
}
  , ApplicationCredentials = {
    accessToken: {
        value: [],
        readyin: 0,
        expires: 0
    },
    refreshToken: {
        value: [],
        readyin: 0,
        expires: 0
    },
    scope: 0
}
  , Token = {
    value: [],
    readyin: 0,
    expires: 0
}
  , Application = {
    applicationId: 0,
    name: [],
    redirectUrl: [],
    link: [],
    scope: 0,
    origin: [],
    status: 0,
    creationDate: null ,
    statusChanged: null ,
    firstPublished: null ,
    team: []
}
  , ApplicationDeveloper = {
    role: 0,
    apiEulaVersion: 0,
    user: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    }
}
  , UserInfoCard = {
    supplementalDisplayName: [],
    iconPath: [],
    membershipType: 0,
    membershipId: 0,
    displayName: []
}
  , ApplicationApiKey = {
    apiKeyId: 0,
    apiKey: [],
    authorizationUrl: [],
    creationDate: null ,
    status: 0
}
  , SearchResultOfAuthorization = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , Authorization = {
    applicationId: 0,
    name: [],
    redirectUrl: [],
    link: [],
    scope: 0,
    origin: [],
    applicationStatus: 0,
    membershipId: 0,
    authorizationStatus: 0,
    authExpirationDate: null ,
    authorizationDate: null ,
    sessionId: 0
}
  , SearchResultOfApplication = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , UserDetail = {
    user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    email: [],
    emailStatus: 0,
    emailUsage: 0,
    realName: [],
    gamerTag: [],
    psnId: [],
    facebookName: [],
    userAcls: [],
    showGamertagPublic: !1,
    showFacebookPublic: !1,
    showPsnPublic: !1,
    publicCredentialTypes: [],
    isThemeLight: !1,
    adultMode: !1,
    userResearchStatusFlags: 0,
    lastViewedConversations: null ,
    privacy: 0,
    hideDestinyData: !1,
    destinyEmblemMembershipType: 0,
    destinyEmblemMembershipId: 0,
    destinyEmblemCharacterId: 0,
    pmToastsEnabled: !1
}
  , UserCounts = {
    onlineFriendCount: 0,
    notificationCount: 0,
    messageCount: 0,
    groupMessageCounts: [],
    providersNeedingReauth: [],
    lastUpdated: null ,
    acks: {
        triumphs: {
            needsAck: !1,
            ackId: []
        },
        gearManager: {
            needsAck: !1,
            ackId: []
        }
    }
}
  , Acknowlegements = {
    triumphs: {
        needsAck: !1,
        ackId: []
    },
    gearManager: {
        needsAck: !1,
        ackId: []
    }
}
  , AckState = {
    needsAck: !1,
    ackId: []
}
  , GroupItemCount = {
    groupId: 0,
    count: 0,
    conversationId: 0
}
  , UserAlias = {
    userAliasId: 0,
    membershipId: 0,
    akaDisplayName: [],
    akaUniqueName: [],
    changedDate: null
}
  , BungieAccount = {
    destinyAccounts: [],
    bungieNetUser: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    clans: [],
    relatedGroups: [],
    destinyAccountErrors: []
}
  , DestinyAccountBrief = {
    userInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    grimoireScore: 0,
    clanName: [],
    clanTag: [],
    characters: [],
    lastPlayed: null ,
    versions: 0
}
  , DestinyCharacterBrief = {
    characterId: 0,
    raceHash: {},
    genderHash: {},
    classHash: {},
    emblemHash: {},
    race: {
        raceHash: {},
        raceType: 0,
        raceName: [],
        raceNameMale: [],
        raceNameFemale: [],
        raceDescription: [],
        hash: {}
    },
    gender: {
        genderHash: {},
        genderType: 0,
        genderName: [],
        genderDescription: [],
        hash: {}
    },
    characterClass: {
        classHash: {},
        classType: 0,
        className: [],
        classNameMale: [],
        classNameFemale: [],
        classIdentifier: [],
        mentorVendorIdentifier: [],
        hash: {}
    },
    emblemPath: [],
    backgroundPath: [],
    level: 0,
    powerLevel: 0,
    dateLastPlayed: null ,
    membershipId: 0,
    membershipType: 0,
    levelProgression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    },
    isPrestigeLevel: !1,
    genderType: 0,
    classType: 0,
    percentToNextLevel: {},
    currentActivityHash: {}
}
  , DestinyRaceDefinition = {
    raceHash: {},
    raceType: 0,
    raceName: [],
    raceNameMale: [],
    raceNameFemale: [],
    raceDescription: [],
    hash: {}
}
  , DestinyGenderDefinition = {
    genderHash: {},
    genderType: 0,
    genderName: [],
    genderDescription: [],
    hash: {}
}
  , DestinyClassDefinition = {
    classHash: {},
    classType: 0,
    className: [],
    classNameMale: [],
    classNameFemale: [],
    classIdentifier: [],
    mentorVendorIdentifier: [],
    hash: {}
}
  , DestinyProgression = {
    dailyProgress: 0,
    weeklyProgress: 0,
    currentProgress: 0,
    level: 0,
    step: 0,
    progressToNextLevel: 0,
    nextLevelAt: 0,
    progressionHash: {}
}
  , ClanPlatform = {
    groupId: 0,
    platformType: 0
}
  , DestinyMembershipErrorInfo = {
    errorCode: 0,
    message: [],
    helpLink: [],
    membershipType: 0,
    membershipId: 0,
    displayName: []
}
  , Group = {
    groupId: 0,
    name: [],
    membershipIdCreated: 0,
    creationDate: null ,
    modificationDate: null ,
    groupType: 0,
    about: [],
    isDeleted: !1,
    deletionDate: null ,
    deletedByMembershipId: 0,
    tags: [],
    rating: 0,
    ratingCount: 0,
    memberCount: 0,
    pendingMemberCount: 0,
    isPublic: !1,
    isMembershipClosed: !1,
    isMembershipReviewed: !1,
    isPublicTopicAdminOnly: !1,
    primaryAlliedGroupId: 0,
    motto: [],
    clanCallsign: [],
    allowChat: !1,
    isDefaultPostPublic: !1,
    isDefaultPostAlliance: !1,
    chatSecurity: 0,
    locale: [],
    avatarImageIndex: 0,
    founderMembershipId: 0,
    homepage: 0,
    membershipOption: 0,
    defaultPublicity: 0,
    theme: [],
    bannerPath: [],
    avatarPath: [],
    isAllianceOwner: !1,
    conversationId: 0,
    clanReviewType: 0,
    enableInvitationMessagingForAdmins: !1,
    banExpireDate: null
}
  , SearchResultOfGeneralUser = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , NotificationSetting = {
    notificationSettingId: 0,
    membershipId: 0,
    optInFlags: 0,
    scheduleFlags: 0,
    notificationMethod: 0,
    notificationType: 0,
    displayName: [],
    settingDescription: [],
    possibleMethods: 0
}
  , GetCredentialTypesForAccountResponse = {
    credentialType: 0,
    credentialDisplayName: [],
    isPublic: !1
}
  , UserTheme = {
    userThemeId: 0,
    userThemeName: [],
    userThemeDescription: []
}
  , PlatformApiKey = {
    apiKey: [],
    ownerMembershipId: 0,
    creationDate: null ,
    expirationDate: null ,
    apiEulaVersion: 0
}
  , PublicPartnershipDetail = {
    partnerType: 0,
    identifier: [],
    name: [],
    icon: []
}
  , MessageConversationResponse = {
    users: [],
    invitationDetail: {
        invitationId: 0,
        membershipId: 0,
        resolutionStatus: 0,
        expireDate: null ,
        invitationType: 0,
        requestingObjectId: 0,
        targetObjectId: 0,
        targetState: 0,
        requestMessage: [],
        responseMessage: [],
        responseCode: [],
        hasExpired: !1,
        message: [],
        membershipIdCreated: 0,
        canRespond: !1
    },
    group: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        groupType: 0,
        about: [],
        isDeleted: !1,
        deletionDate: null ,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        clanReviewType: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null
    },
    detail: {
        conversationId: 0,
        memberFromId: 0,
        dateStarted: null ,
        totalMessageCount: 0,
        lastMessageSent: null ,
        lastMessageId: 0,
        isGlobal: !1,
        isLocked: !1,
        invitationId: 0,
        starter: 0,
        lastRead: null ,
        status: 0,
        subject: [],
        body: [],
        isAutoResponse: !1,
        isRead: !1,
        ownerEntityId: 0,
        ownerEntityType: 0,
        targetMembershipId: 0
    },
    participants: []
}
  , InvitationResponseCodeDetail = {
    invitationId: 0,
    membershipId: 0,
    resolutionStatus: 0,
    expireDate: null ,
    invitationType: 0,
    requestingObjectId: 0,
    targetObjectId: 0,
    targetState: 0,
    requestMessage: [],
    responseMessage: [],
    responseCode: [],
    hasExpired: !1,
    message: [],
    membershipIdCreated: 0,
    canRespond: !1
}
  , MessageConversation = {
    conversationId: 0,
    memberFromId: 0,
    dateStarted: null ,
    totalMessageCount: 0,
    lastMessageSent: null ,
    lastMessageId: 0,
    isGlobal: !1,
    isLocked: !1,
    invitationId: 0,
    starter: 0,
    lastRead: null ,
    status: 0,
    subject: [],
    body: [],
    isAutoResponse: !1,
    isRead: !1,
    ownerEntityId: 0,
    ownerEntityType: 0,
    targetMembershipId: 0
}
  , MessageConversationMember = {
    membershipId: 0,
    isDeleted: !1
}
  , MessageSearchResult = {
    users: [],
    invitationDetails: [],
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , Message = {
    messageId: 0,
    conversationId: 0,
    dateSent: null ,
    subject: [],
    body: [],
    folderId: 0,
    systemId: 0,
    isAutoResponse: !1,
    memberFromId: 0,
    isDeleted: !1,
    invitationId: 0
}
  , SaveMessageResult = {
    conversationId: 0,
    messageId: 0
}
  , MessageConversationSearchResult = {
    users: [],
    invitationDetails: [],
    groups: [],
    unreadCount: 0,
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , MessageConversationDetail = {
    detail: {
        conversationId: 0,
        memberFromId: 0,
        dateStarted: null ,
        totalMessageCount: 0,
        lastMessageSent: null ,
        lastMessageId: 0,
        isGlobal: !1,
        isLocked: !1,
        invitationId: 0,
        starter: 0,
        lastRead: null ,
        status: 0,
        subject: [],
        body: [],
        isAutoResponse: !1,
        isRead: !1,
        ownerEntityId: 0,
        ownerEntityType: 0,
        targetMembershipId: 0
    },
    participants: []
}
  , EntityActionResult = {
    entityId: 0,
    result: 0
}
  , Invitation = {
    invitationId: 0,
    invitationType: 0,
    dateCreated: null ,
    dateResolved: null ,
    expireDate: null ,
    membershipIdCreated: 0,
    membershipIdResolved: 0,
    requestingObjectId: 0,
    resolutionStatus: 0,
    targetObjectId: 0,
    targetState: 0,
    requestMessage: [],
    responseMessage: [],
    isExpired: !1
}
  , GroupInvitationSearchResponse = {
    groups: [],
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupResponse = {
    detail: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        groupType: 0,
        about: [],
        isDeleted: !1,
        deletionDate: null ,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        clanReviewType: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null
    },
    founderMembershipId: 0,
    founder: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    followerCount: 0,
    currentUserStatus: {
        isFollowing: !1,
        membershipStatus: {
            Response: {
                clanMembershipTypes: [],
                clanMemberTypes: [],
                user: {
                    membershipId: 0,
                    uniqueName: [],
                    normalizedName: [],
                    displayName: [],
                    profilePicture: 0,
                    profileTheme: 0,
                    userTitle: 0,
                    successMessageFlags: 0,
                    isDeleted: !1,
                    about: [],
                    firstAccess: null ,
                    lastUpdate: null ,
                    legacyPortalUID: 0,
                    context: {
                        isFollowing: !1,
                        ignoreStatus: {
                            isIgnored: !1,
                            ignoreFlags: 0
                        },
                        globalIgnoreEndDate: null
                    },
                    psnDisplayName: [],
                    xboxDisplayName: [],
                    fbDisplayName: [],
                    showActivity: !1,
                    locale: [],
                    localeInheritDefault: !1,
                    lastBanReportId: 0,
                    showGroupMessaging: !1,
                    profilePicturePath: [],
                    profilePictureWidePath: [],
                    profileThemeName: [],
                    userTitleDisplay: [],
                    statusText: [],
                    statusDate: null ,
                    liveStatuses: [],
                    profileBanExpire: null
                },
                hasPendingApplication: !1,
                hasRated: !1,
                approvalDate: null ,
                approvedByMembershipId: 0,
                deactivationDate: null ,
                deactivatedByMembershipId: 0,
                rating: 0,
                groupId: 0,
                membershipType: 0,
                membershipId: 0,
                isMember: !1,
                memberType: 0,
                isOriginalFounder: !1
            },
            ErrorCode: 0,
            ThrottleSeconds: 0,
            ErrorStatus: [],
            Message: [],
            MessageData: []
        }
    },
    alliedIds: [],
    attributes: [],
    membershipIds: [],
    clanMembershipTypes: [],
    parentGroup: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        groupType: 0,
        about: [],
        isDeleted: !1,
        deletionDate: null ,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        clanReviewType: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null
    },
    allianceStatus: 0,
    friends: [],
    groupJoinRequestCount: 0,
    groupJoinInviteCount: 0,
    clanJoinRequestCount: 0,
    clanJoinInviteCount: 0
}
  , GroupUserStatus = {
    isFollowing: !1,
    membershipStatus: {
        Response: {
            clanMembershipTypes: [],
            clanMemberTypes: [],
            user: {
                membershipId: 0,
                uniqueName: [],
                normalizedName: [],
                displayName: [],
                profilePicture: 0,
                profileTheme: 0,
                userTitle: 0,
                successMessageFlags: 0,
                isDeleted: !1,
                about: [],
                firstAccess: null ,
                lastUpdate: null ,
                legacyPortalUID: 0,
                context: {
                    isFollowing: !1,
                    ignoreStatus: {
                        isIgnored: !1,
                        ignoreFlags: 0
                    },
                    globalIgnoreEndDate: null
                },
                psnDisplayName: [],
                xboxDisplayName: [],
                fbDisplayName: [],
                showActivity: !1,
                locale: [],
                localeInheritDefault: !1,
                lastBanReportId: 0,
                showGroupMessaging: !1,
                profilePicturePath: [],
                profilePictureWidePath: [],
                profileThemeName: [],
                userTitleDisplay: [],
                statusText: [],
                statusDate: null ,
                liveStatuses: [],
                profileBanExpire: null
            },
            hasPendingApplication: !1,
            hasRated: !1,
            approvalDate: null ,
            approvedByMembershipId: 0,
            deactivationDate: null ,
            deactivatedByMembershipId: 0,
            rating: 0,
            groupId: 0,
            membershipType: 0,
            membershipId: 0,
            isMember: !1,
            memberType: 0,
            isOriginalFounder: !1
        },
        ErrorCode: 0,
        ThrottleSeconds: 0,
        ErrorStatus: [],
        Message: [],
        MessageData: []
    }
}
  , CurrentGroupMemberDetail = {
    clanMembershipTypes: [],
    clanMemberTypes: [],
    user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    hasPendingApplication: !1,
    hasRated: !1,
    approvalDate: null ,
    approvedByMembershipId: 0,
    deactivationDate: null ,
    deactivatedByMembershipId: 0,
    rating: 0,
    groupId: 0,
    membershipType: 0,
    membershipId: 0,
    isMember: !1,
    memberType: 0,
    isOriginalFounder: !1
}
  , GroupClanPlatform = {
    membershipType: 0,
    memberCount: 0,
    isProbation: !1,
    isWorld: !1,
    needsFounder: !1,
    clanName: []
}
  , Friend = {
    friendType: 0,
    platformUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    bungieNetUserInfo: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    onlineStatus: 0,
    presenceString: [],
    gameStatus: []
}
  , LegacyConversationV2 = {
    conversationId: 0,
    memberFromId: 0,
    dateStarted: null ,
    totalMessageCount: 0,
    lastMessageSent: null ,
    lastMessageId: 0,
    isGlobal: !1,
    isLocked: !1,
    memberToId: 0,
    invitationId: 0,
    ownerEntityType: 0,
    ownerEntityId: 0,
    starter: 0,
    lastRead: null ,
    status: 0,
    subject: [],
    body: [],
    isAutoResponse: !1,
    membersToId: [],
    usersTo: [],
    invitationDetail: {
        invitationId: 0,
        membershipId: 0,
        resolutionStatus: 0,
        expireDate: null ,
        invitationType: 0,
        requestingObjectId: 0,
        targetObjectId: 0,
        targetState: 0,
        requestMessage: [],
        responseMessage: [],
        responseCode: [],
        hasExpired: !1,
        message: [],
        membershipIdCreated: 0,
        canRespond: !1
    },
    isRead: !1
}
  , LegacyConversationResponse = {
    conversations: [],
    unreadCount: 0
}
  , LegacyConversationMessageV2 = {
    invitationDetail: {
        invitationId: 0,
        membershipId: 0,
        resolutionStatus: 0,
        expireDate: null ,
        invitationType: 0,
        requestingObjectId: 0,
        targetObjectId: 0,
        targetState: 0,
        requestMessage: [],
        responseMessage: [],
        responseCode: [],
        hasExpired: !1,
        message: [],
        membershipIdCreated: 0,
        canRespond: !1
    },
    messageId: 0,
    conversationId: 0,
    dateSent: null ,
    subject: [],
    body: [],
    folderId: 0,
    systemId: 0,
    isAutoResponse: !1,
    memberFromId: 0,
    isDeleted: !1,
    invitationId: 0,
    userFrom: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    }
}
  , NotificationResponse = {
    notifications: [],
    invitations: [],
    tagActivityCount: 0,
    groupActivityCount: 0
}
  , EventChannelResponse = {
    seq: 0,
    tab: 0,
    replaced: !1,
    events: []
}
  , RealTimeEventData = {
    eventType: 0,
    conversationId: 0,
    messageId: 0,
    whoIsTyping: [],
    senderMembershipId: 0,
    conversationType: 0,
    preview: [],
    notificationCount: 0,
    privateMessageCount: 0,
    externalMessageCount: 0,
    friendCounts: [],
    needsReauth: [],
    announcements: [],
    targetMembershipId: 0,
    isRemoved: !1,
    topicId: 0
}
  , ContentTypeDescription = {
    cType: [],
    name: [],
    contentDescription: [],
    previewImage: [],
    priority: 0,
    reminder: [],
    properties: [],
    tagMetadata: [],
    tagMetadataItems: [],
    usageExamples: [],
    showInContentEditor: !1,
    typeOf: [],
    bindIdentifierToProperty: [],
    boundRegex: [],
    forceIdentifierBinding: !1,
    allowComments: !1,
    autoEnglishPropertyFallback: !1,
    bulkUploadable: !1,
    previews: [],
    suppressCmsPath: !1,
    propertySections: []
}
  , ContentTypeProperty = {
    name: [],
    readableName: [],
    value: [],
    propertyDescription: [],
    localizable: !1,
    fallback: !1,
    enabled: !1,
    order: 0,
    visible: !1,
    required: !1,
    maxLength: 0,
    maxFileSize: 0,
    regexp: [],
    validateAs: [],
    rssAttribute: [],
    visibleDependency: [],
    visibleOn: [],
    datatype: 0,
    attributes: [],
    childProperties: [],
    contentTypeAllowed: [],
    bindToProperty: [],
    boundRegex: [],
    representationSelection: [],
    defaultValues: [],
    isExternalAllowed: !1,
    propertySection: [],
    weight: 0,
    entitytype: [],
    isCombo: !1,
    suppressProperty: !1,
    representationValidationString: []
}
  , ContentTypeDefaultValue = {
    whenClause: [],
    whenValue: [],
    defaultValue: []
}
  , TagMetadataDefinition = {
    description: [],
    order: 0,
    items: [],
    datatype: [],
    name: [],
    isRequired: !1
}
  , TagMetadataItem = {
    description: [],
    tagText: [],
    groups: [],
    isDefault: !1,
    name: []
}
  , ContentPreview = {
    name: [],
    path: [],
    itemInSet: !1,
    setTag: [],
    setNesting: 0,
    useSetId: 0
}
  , ContentTypePropertySection = {
    name: [],
    readableName: [],
    visibleDependency: [],
    visibleOn: []
}
  , ContentItemPublicContract = {
    contentId: 0,
    cType: [],
    cmsPath: [],
    creationDate: null ,
    modifyDate: null ,
    allowComments: !1,
    hasAgeGate: !1,
    minimumAge: 0,
    ratingImagePath: [],
    author: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    autoEnglishPropertyFallback: !1,
    properties: [],
    representations: [],
    tags: [],
    commentSummary: {
        topicId: 0,
        commentCount: 0
    }
}
  , CommentSummary = {
    topicId: 0,
    commentCount: 0
}
  , ContentRepresentation = {
    name: [],
    path: [],
    validationString: []
}
  , SearchResultOfContentItemPublicContract = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , FrontPageContentResponse = {
    rotator: {
        Response: {
            contentId: 0,
            cType: [],
            cmsPath: [],
            creationDate: null ,
            modifyDate: null ,
            allowComments: !1,
            hasAgeGate: !1,
            minimumAge: 0,
            ratingImagePath: [],
            author: {
                membershipId: 0,
                uniqueName: [],
                normalizedName: [],
                displayName: [],
                profilePicture: 0,
                profileTheme: 0,
                userTitle: 0,
                successMessageFlags: 0,
                isDeleted: !1,
                about: [],
                firstAccess: null ,
                lastUpdate: null ,
                legacyPortalUID: 0,
                context: {
                    isFollowing: !1,
                    ignoreStatus: {
                        isIgnored: !1,
                        ignoreFlags: 0
                    },
                    globalIgnoreEndDate: null
                },
                psnDisplayName: [],
                xboxDisplayName: [],
                fbDisplayName: [],
                showActivity: !1,
                locale: [],
                localeInheritDefault: !1,
                lastBanReportId: 0,
                showGroupMessaging: !1,
                profilePicturePath: [],
                profilePictureWidePath: [],
                profileThemeName: [],
                userTitleDisplay: [],
                statusText: [],
                statusDate: null ,
                liveStatuses: [],
                profileBanExpire: null
            },
            autoEnglishPropertyFallback: !1,
            properties: [],
            representations: [],
            tags: [],
            commentSummary: {
                topicId: 0,
                commentCount: 0
            }
        },
        ErrorCode: 0,
        ThrottleSeconds: 0,
        ErrorStatus: [],
        Message: [],
        MessageData: []
    },
    blog: {
        Response: [],
        ErrorCode: 0,
        ThrottleSeconds: 0,
        ErrorStatus: [],
        Message: [],
        MessageData: []
    },
    calloutSet: {
        Response: {
            contentId: 0,
            cType: [],
            cmsPath: [],
            creationDate: null ,
            modifyDate: null ,
            allowComments: !1,
            hasAgeGate: !1,
            minimumAge: 0,
            ratingImagePath: [],
            author: {
                membershipId: 0,
                uniqueName: [],
                normalizedName: [],
                displayName: [],
                profilePicture: 0,
                profileTheme: 0,
                userTitle: 0,
                successMessageFlags: 0,
                isDeleted: !1,
                about: [],
                firstAccess: null ,
                lastUpdate: null ,
                legacyPortalUID: 0,
                context: {
                    isFollowing: !1,
                    ignoreStatus: {
                        isIgnored: !1,
                        ignoreFlags: 0
                    },
                    globalIgnoreEndDate: null
                },
                psnDisplayName: [],
                xboxDisplayName: [],
                fbDisplayName: [],
                showActivity: !1,
                locale: [],
                localeInheritDefault: !1,
                lastBanReportId: 0,
                showGroupMessaging: !1,
                profilePicturePath: [],
                profilePictureWidePath: [],
                profileThemeName: [],
                userTitleDisplay: [],
                statusText: [],
                statusDate: null ,
                liveStatuses: [],
                profileBanExpire: null
            },
            autoEnglishPropertyFallback: !1,
            properties: [],
            representations: [],
            tags: [],
            commentSummary: {
                topicId: 0,
                commentCount: 0
            }
        },
        ErrorCode: 0,
        ThrottleSeconds: 0,
        ErrorStatus: [],
        Message: [],
        MessageData: []
    }
}
  , FrontPageContentResponseV2 = {
    featuredArticle: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    eventCalendar: [],
    recentPatchNotes: [],
    playerSpotlight: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    advisor: {
        nightfallActivityHash: {},
        heroicStrikeHashes: [],
        dailyChapterHashes: [],
        nightfallResetDate: null ,
        heroicStrikeResetDate: null ,
        dailyChapterResetDate: null ,
        dailyCrucibleHash: {},
        dailyCrucibleResetDate: null ,
        nightfallRewardIndexes: [],
        dailyCrucibleRewardIndexes: [],
        heroicStrikeRewardIndexes: [],
        dailyChapterRewardIndexes: [],
        arena: [],
        events: {
            events: []
        },
        nightfall: {
            activityBundleHash: {},
            specificActivityHash: {},
            expirationDate: null ,
            tiers: [],
            iconPath: []
        },
        heroicStrike: {
            activityBundleHash: {},
            expirationDate: null ,
            tiers: [],
            iconPath: [],
            image: []
        },
        dailyChapter: {
            activityBundleHash: {},
            expirationDate: null ,
            isCompleted: !1,
            isLocked: !1,
            tierActivityHashes: [],
            activeRewardIndexes: [],
            iconPath: []
        },
        dailyCrucible: {
            activityBundleHash: {},
            expirationDate: null ,
            isCompleted: !1,
            activeRewardIndexes: [],
            iconPath: [],
            image: []
        },
        armsDay: {
            active: !1,
            startDate: null ,
            endDate: null ,
            nextStartDate: null ,
            expirationKnown: !1,
            canPlaceOrder: !1,
            orders: [],
            testWeapons: [],
            redemptions: [],
            vendorHash: {},
            purchasedOrders: []
        },
        weeklyCrucible: [],
        availableBounties: []
    },
    recentNews: [],
    releaseWidgets: [],
    countdownTimer: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    }
}
  , DestinyAdvisorPublicData = {
    nightfallActivityHash: {},
    heroicStrikeHashes: [],
    dailyChapterHashes: [],
    nightfallResetDate: null ,
    heroicStrikeResetDate: null ,
    dailyChapterResetDate: null ,
    dailyCrucibleHash: {},
    dailyCrucibleResetDate: null ,
    nightfallRewardIndexes: [],
    dailyCrucibleRewardIndexes: [],
    heroicStrikeRewardIndexes: [],
    dailyChapterRewardIndexes: [],
    arena: [],
    events: {
        events: []
    },
    nightfall: {
        activityBundleHash: {},
        specificActivityHash: {},
        expirationDate: null ,
        tiers: [],
        iconPath: []
    },
    heroicStrike: {
        activityBundleHash: {},
        expirationDate: null ,
        tiers: [],
        iconPath: [],
        image: []
    },
    dailyChapter: {
        activityBundleHash: {},
        expirationDate: null ,
        isCompleted: !1,
        isLocked: !1,
        tierActivityHashes: [],
        activeRewardIndexes: [],
        iconPath: []
    },
    dailyCrucible: {
        activityBundleHash: {},
        expirationDate: null ,
        isCompleted: !1,
        activeRewardIndexes: [],
        iconPath: [],
        image: []
    },
    armsDay: {
        active: !1,
        startDate: null ,
        endDate: null ,
        nextStartDate: null ,
        expirationKnown: !1,
        canPlaceOrder: !1,
        orders: [],
        testWeapons: [],
        redemptions: [],
        vendorHash: {},
        purchasedOrders: []
    },
    weeklyCrucible: [],
    availableBounties: []
}
  , DestinyAdvisorSpecialEvents = {
    events: []
}
  , DestinyAdvisorSpecialEvent = {
    eventHash: {},
    friendlyIdentifier: [],
    eventIdentifier: [],
    expirationDate: null ,
    startDate: null ,
    expirationKnown: !1,
    vendor: {
        vendorHash: {},
        ackState: {
            needsAck: !1,
            ackId: []
        },
        nextRefreshDate: null ,
        enabled: !1,
        saleItemCategories: [],
        inventoryBuckets: [],
        progression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        canPurchase: !1,
        currencies: []
    },
    progression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    },
    bounties: [],
    quests: [],
    showNagMessage: !1,
    active: !1
}
  , DestinyCharacterVendor = {
    vendorHash: {},
    ackState: {
        needsAck: !1,
        ackId: []
    },
    nextRefreshDate: null ,
    enabled: !1,
    saleItemCategories: [],
    inventoryBuckets: [],
    progression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    },
    canPurchase: !1,
    currencies: []
}
  , DestinyVendorCategorySaleItems = {
    categoryIndex: 0,
    categoryTitle: [],
    saleItems: []
}
  , DestinyVendorSaleItem = {
    item: {
        itemHash: {},
        bindStatus: 0,
        isEquipped: !1,
        itemInstanceId: 0,
        itemLevel: 0,
        stackSize: 0,
        qualityLevel: 0,
        stats: [],
        primaryStat: {
            statHash: {},
            value: 0,
            maximumValue: 0
        },
        canEquip: !1,
        equipRequiredLevel: 0,
        unlockFlagHashRequiredToEquip: {},
        cannotEquipReason: 0,
        damageType: 0,
        damageTypeHash: {},
        damageTypeNodeIndex: 0,
        damageTypeStepIndex: 0,
        progression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        talentGridHash: {},
        nodes: [],
        useCustomDyes: !1,
        artRegions: [],
        isEquipment: !1,
        isGridComplete: !1,
        perks: [],
        location: 0,
        transferStatus: 0,
        locked: !1,
        lockable: !1,
        objectives: [],
        state: 0
    },
    vendorItemIndex: 0,
    itemStatus: 0,
    costs: [],
    requiredUnlockFlags: [],
    unlockStatuses: [],
    failureIndexes: []
}
  , DestinyInventoryItem = {
    itemHash: {},
    bindStatus: 0,
    isEquipped: !1,
    itemInstanceId: 0,
    itemLevel: 0,
    stackSize: 0,
    qualityLevel: 0,
    stats: [],
    primaryStat: {
        statHash: {},
        value: 0,
        maximumValue: 0
    },
    canEquip: !1,
    equipRequiredLevel: 0,
    unlockFlagHashRequiredToEquip: {},
    cannotEquipReason: 0,
    damageType: 0,
    damageTypeHash: {},
    damageTypeNodeIndex: 0,
    damageTypeStepIndex: 0,
    progression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    },
    talentGridHash: {},
    nodes: [],
    useCustomDyes: !1,
    artRegions: [],
    isEquipment: !1,
    isGridComplete: !1,
    perks: [],
    location: 0,
    transferStatus: 0,
    locked: !1,
    lockable: !1,
    objectives: [],
    state: 0
}
  , DestinyStat = {
    statHash: {},
    value: 0,
    maximumValue: 0
}
  , DestinyTalentNodeSummary = {
    isActivated: !1,
    stepIndex: 0,
    state: 0,
    hidden: !1
}
  , DestinyTalentPerk = {
    iconPath: [],
    perkHash: {},
    isActive: !1
}
  , DestinyObjectiveProgress = {
    objectiveHash: {},
    destinationHash: {},
    activityHash: {},
    progress: 0,
    hasProgress: !1,
    isComplete: !1,
    displayValue: []
}
  , DestinyUnlockFlagStatus = {
    unlockFlagHash: {},
    isSet: !1
}
  , DestinyInventoryBucket = {
    items: [],
    bucketHash: {}
}
  , DestinyQuestStatus = {
    questHash: {},
    stepHash: {},
    stepObjectives: [],
    tracked: !1,
    itemInstanceId: 0,
    completed: !1,
    started: !1,
    vendorHash: {}
}
  , DestinyAdvisorNightfall = {
    activityBundleHash: {},
    specificActivityHash: {},
    expirationDate: null ,
    tiers: [],
    iconPath: []
}
  , DestinyAdvisorNightfallTier = {
    activityHash: {},
    specificActivityHash: {},
    isCompleted: !1,
    isSuccessful: !1,
    activeRewardIndexes: [],
    skullIndexes: []
}
  , DestinyAdvisorHeroicStrike = {
    activityBundleHash: {},
    expirationDate: null ,
    tiers: [],
    iconPath: [],
    image: []
}
  , DestinyAdvisorHeroicStrikeTier = {
    activityHash: {},
    isCompleted: !1,
    activeRewardIndexes: [],
    skullIndexes: []
}
  , DestinyAdvisorDailyChapter = {
    activityBundleHash: {},
    expirationDate: null ,
    isCompleted: !1,
    isLocked: !1,
    tierActivityHashes: [],
    activeRewardIndexes: [],
    iconPath: []
}
  , DestinyAdvisorDailyCrucible = {
    activityBundleHash: {},
    expirationDate: null ,
    isCompleted: !1,
    activeRewardIndexes: [],
    iconPath: [],
    image: []
}
  , DestinyAdvisorArmsDay = {
    active: !1,
    startDate: null ,
    endDate: null ,
    nextStartDate: null ,
    expirationKnown: !1,
    canPlaceOrder: !1,
    orders: [],
    testWeapons: [],
    redemptions: [],
    vendorHash: {},
    purchasedOrders: []
}
  , DestinyAdvisorArena = {
    activityHash: {},
    iconPath: [],
    rounds: [],
    bossFight: !1,
    bossSkulls: [],
    activeRewardIndexes: [],
    isCompleted: !1
}
  , DestinyAdvisorArenaRound = {
    enemyRaceHash: {},
    skulls: [],
    bossCombatantHash: {},
    bossLightLevel: 0
}
  , DestinyAdvisorWeeklyCrucible = {
    activityBundleHash: {},
    expirationDate: null ,
    isCompleted: !1,
    activeRewardIndexes: [],
    iconPath: [],
    image: [],
    completionCount: 0,
    maxCompletions: 0
}
  , DestinyAdvisorVendorSales = {
    saleItems: []
}
  , DestinyContentResponse = {
    aboutContent: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    mediaBuckets: []
}
  , ContentBucket = {
    ContentId: 0,
    Title: [],
    Items: []
}
  , DestinyContentResponseV2 = {
    TopSet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    StorySet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    GuardianSet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    FrontierSet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    EnemySet: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    MediaBuckets: {
        contentId: 0,
        cType: [],
        cmsPath: [],
        creationDate: null ,
        modifyDate: null ,
        allowComments: !1,
        hasAgeGate: !1,
        minimumAge: 0,
        ratingImagePath: [],
        author: {
            membershipId: 0,
            uniqueName: [],
            normalizedName: [],
            displayName: [],
            profilePicture: 0,
            profileTheme: 0,
            userTitle: 0,
            successMessageFlags: 0,
            isDeleted: !1,
            about: [],
            firstAccess: null ,
            lastUpdate: null ,
            legacyPortalUID: 0,
            context: {
                isFollowing: !1,
                ignoreStatus: {
                    isIgnored: !1,
                    ignoreFlags: 0
                },
                globalIgnoreEndDate: null
            },
            psnDisplayName: [],
            xboxDisplayName: [],
            fbDisplayName: [],
            showActivity: !1,
            locale: [],
            localeInheritDefault: !1,
            lastBanReportId: 0,
            showGroupMessaging: !1,
            profilePicturePath: [],
            profilePictureWidePath: [],
            profileThemeName: [],
            userTitleDisplay: [],
            statusText: [],
            statusDate: null ,
            liveStatuses: [],
            profileBanExpire: null
        },
        autoEnglishPropertyFallback: !1,
        properties: [],
        representations: [],
        tags: [],
        commentSummary: {
            topicId: 0,
            commentCount: 0
        }
    },
    PressReleases: {
        results: [],
        totalResults: 0,
        hasMore: !1,
        query: {
            itemsPerPage: 0,
            currentPage: 0
        },
        useTotalResults: !1
    }
}
  , CareerSetResponse = {
    categories: []
}
  , CareerCategory = {
    categoryName: [],
    tag: [],
    careers: []
}
  , CareerSummary = {
    careerId: [],
    title: [],
    categoryTag: []
}
  , CareerResponse = {
    careerId: [],
    title: [],
    category: [],
    categoryTag: [],
    tags: [],
    detail: [],
    actionLink: []
}
  , ExternalMessage = {
    dateCreated: null ,
    message: [],
    service: 0,
    extendedData: []
}
  , PostResponse = {
    lastReplyTimestamp: null ,
    IsPinned: !1,
    urlMediaType: 0,
    popularity: 0,
    isActive: !1,
    isAnnouncement: !1,
    userRating: 0,
    userHasRated: !1,
    userHasMutedPost: !1,
    latestReplyPostId: 0,
    latestReplyAuthorId: 0,
    ignoreStatus: {
        isIgnored: !1,
        ignoreFlags: 0
    },
    postId: {},
    parentPostId: {},
    topicId: {},
    lastReplyId: {},
    threadDepth: 0,
    category: 0,
    authorMembershipId: 0,
    editorMembershipId: 0,
    subject: [],
    body: [],
    urlLinkOrImage: [],
    metadata: {},
    creationDate: null ,
    lastModified: null ,
    lastReplyDate: null ,
    editCount: 0,
    replyCount: 0,
    topicReplyCount: 0,
    ratingCount: 0,
    rating: 0,
    upvotes: 0,
    downvotes: 0,
    ratingScore: 0,
    groupOwnerId: 0,
    isGroupPrivate: !1,
    parentGroupId: 0,
    parentTopicId: 0,
    flags: 0,
    lockedForReplies: !1,
    parentAuthorId: 0,
    topicAuthorId: 0,
    tags: [],
    isTopicBanned: !1,
    actualParentPostId: 0,
    playerSupportFlags: 0,
    playerSupportMetadata: [],
    pinned: 0,
    awaitingApproval: !1,
    forumId: 0,
    archivedLastReplyDate: null
}
  , PostSearchResponse = {
    relatedPosts: [],
    authors: [],
    groups: [],
    searchedTags: [],
    polls: [],
    recruitmentDetails: [],
    availablePages: 0,
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , TagResponse = {
    tagText: [],
    ignoreStatus: {
        isIgnored: !1,
        ignoreFlags: 0
    }
}
  , PollResponse = {
    topicId: 0,
    results: [],
    totalVotes: 0
}
  , PollResult = {
    answerText: [],
    answerSlot: 0,
    lastVoteDate: null ,
    votes: 0,
    requestingUserVoted: !1
}
  , ForumRecruitmentDetail = {
    topicId: 0,
    microphoneRequired: !1,
    intensity: 0,
    tone: 0,
    approved: !1,
    conversationId: 0,
    playerSlotsTotal: 0,
    playerSlotsRemaining: 0,
    Fireteam: [],
    kickedPlayerIds: []
}
  , SearchResultOfLegacyFollowingResponse = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , LegacyFollowingResponse = {
    detail: {
        displayName: [],
        avatarImage: [],
        sourceMissing: !1,
        memberType: 0,
        allianceStatus: 0
    },
    following: {
        entityId: 0,
        identifier: [],
        entityType: [],
        activityCount: 0
    }
}
  , FollowingDecorations = {
    displayName: [],
    avatarImage: [],
    sourceMissing: !1,
    memberType: 0,
    allianceStatus: 0
}
  , LegacyFollowing = {
    entityId: 0,
    identifier: [],
    entityType: [],
    activityCount: 0
}
  , GroupSearchResponse = {
    founders: [],
    relatedGroups: [],
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , SearchResultOfFollowerResponse = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , FollowerResponse = {
    user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    dateFollowed: null
}
  , ActivityMessageSearchResponse = {
    users: [],
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , ActivityMessage = {
    activity: {
        activityId: 0,
        activityType: 0,
        affectedItemId: 0,
        affectedItemType: 0,
        affectedItemDescription: [],
        creationDate: null ,
        relatedItemId: 0,
        relatedMembershipId: 0,
        applicationId: 0
    },
    message: []
}
  , Activity = {
    activityId: 0,
    activityType: 0,
    affectedItemId: 0,
    affectedItemType: 0,
    affectedItemDescription: [],
    creationDate: null ,
    relatedItemId: 0,
    relatedMembershipId: 0,
    applicationId: 0
}
  , LegacyFriendSearchResponse = {
    users: [],
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , LegacyFriend = {
    credentialType: 0,
    platform: [],
    platformDisplayName: [],
    bungieNetMembershipId: 0,
    statusCode: 0,
    status: [],
    imagePath: [],
    destinyMembershipId: 0
}
  , SearchResultOfFriend = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupTheme = {
    name: [],
    folder: [],
    description: []
}
  , GroupCreationResponse = {
    groupId: 0,
    clanEnabledStatus: 0
}
  , SearchResultOfGroupMemberApplication = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupMemberApplication = {
    groupId: 0,
    membershipId: 0,
    creationDate: null ,
    resolveState: 0,
    resolveDate: null ,
    resolvedByMembershipId: 0,
    requestMessage: [],
    resolveMessage: [],
    user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    }
}
  , InvitationSearchResultOfInvitation = {
    users: [],
    groups: [],
    memberships: [],
    invitations: {
        results: [],
        totalResults: 0,
        hasMore: !1,
        query: {
            itemsPerPage: 0,
            currentPage: 0
        },
        useTotalResults: !1
    }
}
  , SearchResultOfInvitation = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupMemberBriefSet = {
    groupId: 0,
    members: []
}
  , GroupMemberBrief = {
    groupId: 0,
    membershipType: 0,
    membershipId: 0,
    isMember: !1,
    memberType: 0,
    isOriginalFounder: !1
}
  , GroupAttributeCategoryDefinition = {
    categoryId: 0,
    key: [],
    displayName: [],
    attributes: []
}
  , GroupAttributeDefinition = {
    attributeId: 0,
    key: [],
    displayName: [],
    defaultMinimum: 0,
    defaultMaximum: 0,
    attributeType: 0,
    minimumLabel: [],
    maximumLabel: [],
    tooltips: [],
    minimum: 0,
    maximum: 0,
    stepIncrement: 0,
    stepCount: 0
}
  , SearchResultOfClanMemberDetail = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , ClanMemberDetail = {
    destinyUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    bungieNetUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    hasPendingApplication: !1,
    hasRated: !1,
    approvalDate: null ,
    approvedByMembershipId: 0,
    deactivationDate: null ,
    deactivatedByMembershipId: 0,
    rating: 0,
    groupId: 0,
    membershipType: 0,
    membershipId: 0,
    isMember: !1,
    memberType: 0,
    isOriginalFounder: !1
}
  , GroupClanMembershipDetail = {
    groupId: 0,
    membershipType: 0,
    membershipId: 0
}
  , SearchResultOfGroupMemberDetail = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupMemberDetail = {
    user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    hasPendingApplication: !1,
    hasRated: !1,
    approvalDate: null ,
    approvedByMembershipId: 0,
    deactivationDate: null ,
    deactivatedByMembershipId: 0,
    rating: 0,
    groupId: 0,
    membershipType: 0,
    membershipId: 0,
    isMember: !1,
    memberType: 0,
    isOriginalFounder: !1
}
  , SearchResultOfGroupBanResponse = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupBanResponse = {
    groupId: 0,
    lastModifiedMembershipId: 0,
    lastModifiedDisplayName: [],
    createdMembershipId: 0,
    createdDisplayName: [],
    dateBanned: null ,
    dateExpires: null ,
    comment: [],
    flags: 0,
    user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    }
}
  , GroupSearchResponse = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupV2 = {
    groupId: 0,
    name: [],
    groupType: 0,
    membershipIdCreated: 0,
    creationDate: null ,
    modificationDate: null ,
    about: [],
    tags: [],
    memberCount: 0,
    isPublic: !1,
    isMembershipClosed: !1,
    isMembershipReviewed: !1,
    isPublicTopicAdminOnly: !1,
    primaryAlliedGroupId: 0,
    motto: [],
    callsign: [],
    allowChat: !1,
    isDefaultPostPublic: !1,
    isDefaultPostAlliance: !1,
    chatSecurity: 0,
    locale: [],
    avatarImageIndex: 0,
    homepage: 0,
    membershipOption: 0,
    defaultPublicity: 0,
    theme: [],
    bannerPath: [],
    avatarPath: [],
    isAllianceOwner: !1,
    conversationId: 0,
    enableInvitationMessagingForAdmins: !1,
    banExpireDate: null ,
    features: {
        maximumMembers: 0,
        maximumMembershipsOfGroupType: 0,
        capabilities: 0,
        membershipTypes: []
    }
}
  , GroupFeatures = {
    maximumMembers: 0,
    maximumMembershipsOfGroupType: 0,
    capabilities: 0,
    membershipTypes: []
}
  , GroupResponse = {
    detail: {
        groupId: 0,
        name: [],
        groupType: 0,
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        about: [],
        tags: [],
        memberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        callsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null ,
        features: {
            maximumMembers: 0,
            maximumMembershipsOfGroupType: 0,
            capabilities: 0,
            membershipTypes: []
        }
    },
    founder: {
        groupId: 0,
        memberType: 0,
        destinyUserInfo: {
            supplementalDisplayName: [],
            iconPath: [],
            membershipType: 0,
            membershipId: 0,
            displayName: []
        },
        bungieNetUserInfo: {
            supplementalDisplayName: [],
            iconPath: [],
            membershipType: 0,
            membershipId: 0,
            displayName: []
        },
        joinDate: null
    },
    alliedIds: [],
    parentGroup: {
        groupId: 0,
        name: [],
        groupType: 0,
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        about: [],
        tags: [],
        memberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        callsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null ,
        features: {
            maximumMembers: 0,
            maximumMembershipsOfGroupType: 0,
            capabilities: 0,
            membershipTypes: []
        }
    },
    allianceStatus: 0,
    groupJoinInviteCount: 0,
    currentUserMemberType: 0
}
  , GroupMember = {
    groupId: 0,
    memberType: 0,
    destinyUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    bungieNetUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    joinDate: null
}
  , GroupCreationResponse = {
    groupId: 0
}
  , SearchResultOfGroupMember = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupMemberLeaveResult = {
    group: {
        groupId: 0,
        name: [],
        groupType: 0,
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        about: [],
        tags: [],
        memberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        callsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null ,
        features: {
            maximumMembers: 0,
            maximumMembershipsOfGroupType: 0,
            capabilities: 0,
            membershipTypes: []
        }
    },
    groupDeleted: !1
}
  , SearchResultOfGroupBan = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupBan = {
    groupId: 0,
    lastModifiedBy: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    createdBy: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    dateBanned: null ,
    dateExpires: null ,
    comment: [],
    user: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    }
}
  , GroupApplicationResponse = {
    resolution: 0
}
  , SearchResultOfGroupMemberApplication = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupMemberApplication = {
    groupId: 0,
    creationDate: null ,
    resolveState: 0,
    resolveDate: null ,
    resolvedByMembershipId: 0,
    requestMessage: [],
    resolveMessage: [],
    user: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    }
}
  , GroupMembershipSearchResponse = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , GroupMembership = {
    member: {
        groupId: 0,
        memberType: 0,
        destinyUserInfo: {
            supplementalDisplayName: [],
            iconPath: [],
            membershipType: 0,
            membershipId: 0,
            displayName: []
        },
        bungieNetUserInfo: {
            supplementalDisplayName: [],
            iconPath: [],
            membershipType: 0,
            membershipId: 0,
            displayName: []
        },
        joinDate: null
    },
    group: {
        groupId: 0,
        name: [],
        groupType: 0,
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        about: [],
        tags: [],
        memberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        callsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null ,
        features: {
            maximumMembers: 0,
            maximumMembershipsOfGroupType: 0,
            capabilities: 0,
            membershipTypes: []
        }
    }
}
  , IgnoreSearchResult = {
    tags: [],
    groups: [],
    posts: [],
    users: [],
    totalResults: 0,
    hasMore: !1,
    availablePages: 0,
    currentPage: 0,
    itemsPerPage: 0
}
  , IgnoreDetailResponseTag = {
    tagText: [],
    displayName: [],
    dateCreated: null ,
    dateExpires: null ,
    dateModified: null ,
    comment: [],
    flags: 0,
    reason: 0
}
  , IgnoreDetailResponseGroup = {
    group: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        groupType: 0,
        about: [],
        isDeleted: !1,
        deletionDate: null ,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        clanReviewType: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null
    },
    displayName: [],
    dateCreated: null ,
    dateExpires: null ,
    dateModified: null ,
    comment: [],
    flags: 0,
    reason: 0
}
  , IgnoreDetailResponsePost = {
    post: {
        downvotes: 0,
        ratingScore: 0,
        isAnnouncement: !1,
        postId: {},
        parentPostId: {},
        topicId: {},
        lastReplyId: {},
        threadDepth: 0,
        category: 0,
        authorMembershipId: 0,
        editorMembershipId: 0,
        subject: [],
        body: [],
        urlLinkOrImage: [],
        metadata: {},
        flags: 0,
        creationDate: null ,
        lastModified: null ,
        lastReplyDate: null ,
        editCount: 0,
        replyCount: 0,
        topicReplyCount: 0,
        ratingCount: 0,
        rating: 0,
        upvotes: 0,
        pinned: 0,
        forumId: 0,
        groupOwnerId: 0,
        isGroupPrivate: !1,
        parentGroupId: 0,
        parentTopicId: 0,
        lockedForReplies: !1,
        tags: [],
        isTopicBanned: !1,
        actualParentPostId: 0,
        playerSupportFlags: 0,
        playerSupportMetadata: [],
        awaitingApproval: !1,
        archivedLastReplyDate: null
    },
    displayName: [],
    dateCreated: null ,
    dateExpires: null ,
    dateModified: null ,
    comment: [],
    flags: 0,
    reason: 0
}
  , Post = {
    downvotes: 0,
    ratingScore: 0,
    isAnnouncement: !1,
    postId: {},
    parentPostId: {},
    topicId: {},
    lastReplyId: {},
    threadDepth: 0,
    category: 0,
    authorMembershipId: 0,
    editorMembershipId: 0,
    subject: [],
    body: [],
    urlLinkOrImage: [],
    metadata: {},
    flags: 0,
    creationDate: null ,
    lastModified: null ,
    lastReplyDate: null ,
    editCount: 0,
    replyCount: 0,
    topicReplyCount: 0,
    ratingCount: 0,
    rating: 0,
    upvotes: 0,
    pinned: 0,
    forumId: 0,
    groupOwnerId: 0,
    isGroupPrivate: !1,
    parentGroupId: 0,
    parentTopicId: 0,
    lockedForReplies: !1,
    tags: [],
    isTopicBanned: !1,
    actualParentPostId: 0,
    playerSupportFlags: 0,
    playerSupportMetadata: [],
    awaitingApproval: !1,
    archivedLastReplyDate: null
}
  , IgnoreDetailResponseUser = {
    user: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    displayName: [],
    dateCreated: null ,
    dateExpires: null ,
    dateModified: null ,
    comment: [],
    flags: 0,
    reason: 0
}
  , IgnoreDetailResponse = {
    displayName: [],
    dateCreated: null ,
    dateExpires: null ,
    dateModified: null ,
    comment: [],
    flags: 0,
    reason: 0
}
  , LastReportedItemResponse = {
    membershipId: 0,
    reportId: 0,
    banSourceId: [],
    banSourceType: 0,
    banReason: 0
}
  , ReportContextResponse = {
    reportId: 0,
    contextItemId: 0,
    contextItemType: 0,
    subject: [],
    body: [],
    urlLinkOrImage: [],
    tags: [],
    author: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    }
}
  , LegacyGamePlayer = {
    HaloReach: {
        Gamertag: [],
        GamesPlayed: {},
        ServiceTag: [],
        EmblemUrl: [],
        PlayerModelUrl: [],
        PlayerModelAvatarUrl: [],
        Status: 0
    },
    Halo3Odst: {
        Gamertag: [],
        GamesPlayed: {},
        ServiceTag: [],
        EmblemUrl: [],
        PlayerModelUrl: [],
        PlayerModelAvatarUrl: [],
        Status: 0
    },
    Halo3: {
        Gamertag: [],
        GamesPlayed: {},
        ServiceTag: [],
        EmblemUrl: [],
        PlayerModelUrl: [],
        PlayerModelAvatarUrl: [],
        Status: 0
    },
    Halo2: {
        Gamertag: [],
        GamesPlayed: {},
        ServiceTag: [],
        EmblemUrl: [],
        PlayerModelUrl: [],
        PlayerModelAvatarUrl: [],
        Status: 0
    }
}
  , PlayerGameDetails = {
    Gamertag: [],
    GamesPlayed: {},
    ServiceTag: [],
    EmblemUrl: [],
    PlayerModelUrl: [],
    PlayerModelAvatarUrl: [],
    Status: 0
}
  , ReportedItemResponse = {
    moderatedMemberDisplayName: [],
    RelatedStrings: [],
    AutoTriggerHelpText: [],
    reportId: 0,
    reportedItem: [],
    reportedItemType: 0,
    dateCreated: null ,
    dateResolved: null ,
    comment: [],
    result: 0,
    reason: 0,
    moderatorMembershipId: 0,
    dateAssigned: null ,
    overturnComment: [],
    resultOverturned: 0,
    dateOverturned: null ,
    overturnedMembershipId: 0,
    entity: {},
    reportCount: 0,
    banDurationInDays: 0,
    autoTriggerId: 0,
    reportedItemGroupContextId: 0
}
  , SearchResultOfReportedItemResponse = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , UserBanState = {
    membershipId: 0,
    bnetProfileBanExpireDate: null ,
    isProfileBanned: !1,
    isForumBanned: !1,
    bnetBanExpireDate: null ,
    psnBanExpireDate: null ,
    xblBanExpireDate: null ,
    demonBanExpireDate: null ,
    isMsgBanned: !1,
    bnetMessageBanExpireDate: null ,
    psnMessageBanExpireDate: null ,
    xblMessageBanExpireDate: null ,
    demonMessageBanExpireDate: null ,
    isGroupWallBanned: !1,
    bnetGroupWallBanExpireDate: null ,
    psnGroupWallBanExpireDate: null ,
    xblGroupWallBanExpireDate: null ,
    demonGroupWallBanExpireDate: null
}
  , StringDatePackage = {
    Data: [],
    Date: null
}
  , AdminHistoryEntry = {
    historyDate: null ,
    historyType: 0,
    historyItemId: 0,
    historyItemFlags: 0,
    historyItemText: [],
    adminMembershipId: 0,
    adminMembershipFlags: 0,
    targetMembershipId: 0,
    targetGroupId: 0,
    foundAdminUser: !1,
    adminUser: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    foundTargetUser: !1,
    targetUser: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    foundTargetGroup: !1,
    targetGroup: {
        groupId: 0,
        name: [],
        membershipIdCreated: 0,
        creationDate: null ,
        modificationDate: null ,
        groupType: 0,
        about: [],
        isDeleted: !1,
        deletionDate: null ,
        deletedByMembershipId: 0,
        tags: [],
        rating: 0,
        ratingCount: 0,
        memberCount: 0,
        pendingMemberCount: 0,
        isPublic: !1,
        isMembershipClosed: !1,
        isMembershipReviewed: !1,
        isPublicTopicAdminOnly: !1,
        primaryAlliedGroupId: 0,
        motto: [],
        clanCallsign: [],
        allowChat: !1,
        isDefaultPostPublic: !1,
        isDefaultPostAlliance: !1,
        chatSecurity: 0,
        locale: [],
        avatarImageIndex: 0,
        founderMembershipId: 0,
        homepage: 0,
        membershipOption: 0,
        defaultPublicity: 0,
        theme: [],
        bannerPath: [],
        avatarPath: [],
        isAllianceOwner: !1,
        conversationId: 0,
        clanReviewType: 0,
        enableInvitationMessagingForAdmins: !1,
        banExpireDate: null
    }
}
  , OfferHistoryResponse = {
    OfferKey: [],
    OfferDisplayName: [],
    OfferDisplayDetail: [],
    OfferImagePath: [],
    OfferPurchaseDate: null ,
    OfferQuantity: 0,
    ConsumableQuantity: 0,
    RedeemType: 0
}
  , TokenThrottleStateResponse = {
    IsThrottled: !1,
    ThrottleExpires: null ,
    NumberOfFailedAttemptsToday: 0,
    MaximumFailedAttemptsPerDay: 0,
    AgeVerificationState: !1
}
  , ClaimResponse = {
    tokenId: 0,
    membershipId: 0,
    membershipType: 0,
    OfferName: [],
    OfferClaimText: []
}
  , PlatformMarketplaceCodeResponse = {
    offerKey: [],
    deviceType: 0,
    platformCodeRegion: 0,
    OfferDistributionDate: null ,
    platformCode: [],
    OfferDisplayName: [],
    OfferDisplayDetail: []
}
  , RAFBondDetailResponse = {
    requestingUser: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    requestingMembershipId: 0,
    requestingMembershipType: 0,
    requestingUserIsVeteran: !1,
    bonds: []
}
  , RAFBondDetails = {
    bondedPlayer: {
        membershipId: 0,
        uniqueName: [],
        normalizedName: [],
        displayName: [],
        profilePicture: 0,
        profileTheme: 0,
        userTitle: 0,
        successMessageFlags: 0,
        isDeleted: !1,
        about: [],
        firstAccess: null ,
        lastUpdate: null ,
        legacyPortalUID: 0,
        context: {
            isFollowing: !1,
            ignoreStatus: {
                isIgnored: !1,
                ignoreFlags: 0
            },
            globalIgnoreEndDate: null
        },
        psnDisplayName: [],
        xboxDisplayName: [],
        fbDisplayName: [],
        showActivity: !1,
        locale: [],
        localeInheritDefault: !1,
        lastBanReportId: 0,
        showGroupMessaging: !1,
        profilePicturePath: [],
        profilePictureWidePath: [],
        profileThemeName: [],
        userTitleDisplay: [],
        statusText: [],
        statusDate: null ,
        liveStatuses: [],
        profileBanExpire: null
    },
    rafId: 0,
    targetDeviceType: 0,
    bondedPlayerMembershipId: 0,
    bondedPlayerMembershipType: 0,
    isVeteran: !1,
    dateCreated: null ,
    bondStatus: 0
}
  , RAFEligibilityResponse = {
    MembershipId: 0,
    MembershipType: 0,
    DisplayName: [],
    EligibilityStatus: 0
}
  , ServiceResultDestinyPublicAdvisorDataV2 = {
    data: {
        activities: [],
        activityCategories: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        enemyRaces: [],
        flags: []
    }
}
  , DestinyPublicAdvisorDataV2 = {
    activities: [],
    activityCategories: []
}
  , DestinyAdvisorActivity = {
    identifier: [],
    status: {
        expirationDate: null ,
        startDate: null ,
        expirationKnown: !1,
        active: !1
    },
    display: {
        categoryHash: {},
        icon: [],
        image: [],
        flavor: [],
        advisorTypeCategory: [],
        activityHash: {},
        eventHash: {},
        playlistHash: {},
        destinationHash: {},
        factionHash: {},
        placeHash: {},
        about: [],
        status: [],
        tips: [],
        itemCategories: [],
        recruitmentIds: []
    },
    completion: {
        complete: !1,
        success: !1,
        completionCount: 0,
        maxCompletions: 0
    },
    vendorHash: {},
    progressionHash: {},
    bountyHashes: [],
    questHashes: [],
    activityTiers: [],
    extended: {
        scoreCard: {
            ticketItem: {
                itemHash: {},
                bindStatus: 0,
                isEquipped: !1,
                itemInstanceId: 0,
                itemLevel: 0,
                stackSize: 0,
                qualityLevel: 0,
                stats: [],
                primaryStat: {
                    statHash: {},
                    value: 0,
                    maximumValue: 0
                },
                canEquip: !1,
                equipRequiredLevel: 0,
                unlockFlagHashRequiredToEquip: {},
                cannotEquipReason: 0,
                damageType: 0,
                damageTypeHash: {},
                damageTypeNodeIndex: 0,
                damageTypeStepIndex: 0,
                progression: {
                    dailyProgress: 0,
                    weeklyProgress: 0,
                    currentProgress: 0,
                    level: 0,
                    step: 0,
                    progressToNextLevel: 0,
                    nextLevelAt: 0,
                    progressionHash: {}
                },
                talentGridHash: {},
                nodes: [],
                useCustomDyes: !1,
                artRegions: [],
                isEquipment: !1,
                isGridComplete: !1,
                perks: [],
                location: 0,
                transferStatus: 0,
                locked: !1,
                lockable: !1,
                objectives: [],
                state: 0
            },
            hasTicket: !1,
            maxWins: 0,
            maxLosses: 0,
            wins: 0,
            losses: 0
        },
        winRewardDetails: [],
        highestWinRank: 0,
        orders: [],
        purchasedOrders: [],
        redemptions: [],
        skullCategories: [],
        objectives: []
    }
}
  , DestinyAdvisorStatus = {
    expirationDate: null ,
    startDate: null ,
    expirationKnown: !1,
    active: !1
}
  , DestinyAdvisorDisplayData = {
    categoryHash: {},
    icon: [],
    image: [],
    flavor: [],
    advisorTypeCategory: [],
    activityHash: {},
    eventHash: {},
    playlistHash: {},
    destinationHash: {},
    factionHash: {},
    placeHash: {},
    about: [],
    status: [],
    tips: [],
    itemCategories: [],
    recruitmentIds: []
}
  , DestinyAdvisorItemCategory = {
    title: [],
    itemHashes: []
}
  , DestinyAdvisorActivityCompletionStatus = {
    complete: !1,
    success: !1,
    completionCount: 0,
    maxCompletions: 0
}
  , DestinyAdvisorActivityExtendedContent = {
    scoreCard: {
        ticketItem: {
            itemHash: {},
            bindStatus: 0,
            isEquipped: !1,
            itemInstanceId: 0,
            itemLevel: 0,
            stackSize: 0,
            qualityLevel: 0,
            stats: [],
            primaryStat: {
                statHash: {},
                value: 0,
                maximumValue: 0
            },
            canEquip: !1,
            equipRequiredLevel: 0,
            unlockFlagHashRequiredToEquip: {},
            cannotEquipReason: 0,
            damageType: 0,
            damageTypeHash: {},
            damageTypeNodeIndex: 0,
            damageTypeStepIndex: 0,
            progression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            talentGridHash: {},
            nodes: [],
            useCustomDyes: !1,
            artRegions: [],
            isEquipment: !1,
            isGridComplete: !1,
            perks: [],
            location: 0,
            transferStatus: 0,
            locked: !1,
            lockable: !1,
            objectives: [],
            state: 0
        },
        hasTicket: !1,
        maxWins: 0,
        maxLosses: 0,
        wins: 0,
        losses: 0
    },
    winRewardDetails: [],
    highestWinRank: 0,
    orders: [],
    purchasedOrders: [],
    redemptions: [],
    skullCategories: [],
    objectives: []
}
  , DestinyAdvisorTrialTicket = {
    ticketItem: {
        itemHash: {},
        bindStatus: 0,
        isEquipped: !1,
        itemInstanceId: 0,
        itemLevel: 0,
        stackSize: 0,
        qualityLevel: 0,
        stats: [],
        primaryStat: {
            statHash: {},
            value: 0,
            maximumValue: 0
        },
        canEquip: !1,
        equipRequiredLevel: 0,
        unlockFlagHashRequiredToEquip: {},
        cannotEquipReason: 0,
        damageType: 0,
        damageTypeHash: {},
        damageTypeNodeIndex: 0,
        damageTypeStepIndex: 0,
        progression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        talentGridHash: {},
        nodes: [],
        useCustomDyes: !1,
        artRegions: [],
        isEquipment: !1,
        isGridComplete: !1,
        perks: [],
        location: 0,
        transferStatus: 0,
        locked: !1,
        lockable: !1,
        objectives: [],
        state: 0
    },
    hasTicket: !1,
    maxWins: 0,
    maxLosses: 0,
    wins: 0,
    losses: 0
}
  , DestinyAdvisorTrialWinDetail = {
    hasReward: !1,
    hasSecretReward: !1,
    winCount: 0,
    redeemed: !1,
    unredeemedRewards: [],
    isRewardRank: !1,
    rewardRank: 0,
    rewardItemHashes: []
}
  , DestinySkullCategory = {
    title: [],
    skulls: []
}
  , DestinySkullDefinition = {
    displayName: [],
    description: [],
    icon: []
}
  , DestinyAdvisorActivityTier = {
    activityHash: {},
    tierDisplayName: [],
    completion: {
        complete: !1,
        success: !1,
        completionCount: 0,
        maxCompletions: 0
    },
    steps: [],
    skullCategories: [],
    rewards: [],
    activityData: {
        activityHash: {},
        isNew: !1,
        canLead: !1,
        canJoin: !1,
        isCompleted: !1,
        isVisible: !1,
        displayLevel: 0,
        recommendedLight: 0,
        difficultyTier: 0
    },
    extended: {
        rounds: []
    }
}
  , DestinyActivity = {
    activityHash: {},
    isNew: !1,
    canLead: !1,
    canJoin: !1,
    isCompleted: !1,
    isVisible: !1,
    displayLevel: 0,
    recommendedLight: 0,
    difficultyTier: 0
}
  , DestinyAdvisorActivityTierExtendedContent = {
    rounds: []
}
  , DestinyActivityAdvisorRound = {
    enemyRaceHash: {},
    skullCategories: [],
    bossCombatantHash: {},
    bossLightLevel: 0
}
  , DestinyAdvisorActivityTierStep = {
    complete: !1
}
  , DestinyActivityRewardDefinition = {
    rewardText: [],
    rewardItems: []
}
  , DestinyActivityCategory = {
    categoryHash: {},
    startDate: null ,
    endDate: null
}
  , DefinitionSetDestinyPublicAdvisorDataV2 = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    enemyRaces: [],
    flags: []
}
  , DestinyInventoryItemDefinition = {
    itemHash: {},
    itemName: [],
    itemDescription: [],
    icon: [],
    hasIcon: !1,
    secondaryIcon: [],
    displaySource: [],
    actionName: [],
    actionDescription: [],
    hasAction: !1,
    deleteOnAction: !1,
    tierTypeName: [],
    tierType: 0,
    itemTypeName: [],
    bucketTypeHash: {},
    primaryBaseStatHash: {},
    stats: [],
    maxLightStats: [],
    perkHashes: [],
    itemIdentifier: [],
    specialItemType: 0,
    talentGridHash: {},
    equippingBlock: {
        weaponSandboxPatternIndex: 0,
        gearArtArrangementIndex: 0,
        defaultDyes: [],
        lockedDyes: [],
        customDyes: [],
        customDyeExpression: {},
        weaponPatternHash: {},
        arrangements: []
    },
    hasGeometry: !1,
    statGroupHash: {},
    itemLevels: [],
    qualityLevel: 0,
    equippable: !1,
    instanced: !1,
    values: [],
    itemType: 0,
    itemSubType: 0,
    classType: 0,
    sources: [],
    itemCategoryHashes: [],
    sourceHashes: [],
    nonTransferrable: !1,
    exclusive: 0,
    maxStackSize: 0,
    setItemHashes: [],
    narrative: [],
    tooltipStyle: [],
    questlineItemHash: {},
    needsFullCompletion: !1,
    objectiveVerb: [],
    objectiveHashes: [],
    animations: [],
    derivedItemCategories: [],
    allowActions: !1,
    recordBookHash: {},
    uniquenessHash: {},
    derivedItemVendorHash: {},
    showActiveNodesInTooltip: !1,
    damageTypes: [],
    links: [],
    hash: {}
}
  , DestinyEquippingBlockDefinition = {
    weaponSandboxPatternIndex: 0,
    gearArtArrangementIndex: 0,
    defaultDyes: [],
    lockedDyes: [],
    customDyes: [],
    customDyeExpression: {},
    weaponPatternHash: {},
    arrangements: []
}
  , DyeReference = {
    channelHash: {},
    dyeHash: {}
}
  , DestinyGearArtArrangementReference = {
    classHash: {},
    gearArtArrangementIndex: 0
}
  , RewardItemReferenceSet = {}
  , RewardSourceData = {}
  , RewardItemSheetReference = {}
  , RewardItemMappedReference = {
    sourceData: {}
}
  , RewardItemActivityReference = {
    sourceData: {}
}
  , RewardItemIncidentReference = {
    sourceData: {}
}
  , RewardItemActionReference = {
    sourceData: {}
}
  , RewardTalentNodeActivationReference = {
    sourceData: {}
}
  , RewardItemVendorReference = {
    sourceData: {}
}
  , ItemSpawnAttribute = {
    statSetIndex: 0,
    levelRequired: 0
}
  , ItemSpawnStatSet = {
    itemLevel: 0,
    quality: 0,
    stats: [],
    minQuality: 0,
    maxQuality: 0,
    minItemLevel: 0,
    maxItemLevel: 0
}
  , DestinyInventoryItemStatDefinition = {
    statHash: {},
    value: 0,
    minimum: 0,
    maximum: 0
}
  , RewardItemAggregateReference = {
    sourceHash: {}
}
  , RewardQuestVendorItemReference = {
    objectiveHash: {},
    interactionIndex: 0,
    rewardVendorReferenceIndex: 0
}
  , RewardItemSiteReference = {
    sourceData: {}
}
  , DestinyItemSourceDefinition = {
    expansionIndex: 0,
    level: 0,
    minQuality: 0,
    maxQuality: 0,
    minLevelRequired: 0,
    maxLevelRequired: 0,
    exclusivity: 0,
    computedStats: [],
    sourceHashes: [],
    spawnIndexes: []
}
  , DestinyAnimationReference = {
    animName: [],
    animIdentifier: [],
    path: []
}
  , DestinyDerivedItemCategoryDefinition = {
    categoryDescription: [],
    items: []
}
  , DestinyDerivedItemDefinition = {
    itemHash: {},
    itemName: [],
    itemDetail: [],
    itemDescription: [],
    iconPath: [],
    vendorItemIndex: 0
}
  , HyperlinkReference = {
    title: [],
    url: []
}
  , DestinyInventoryBucketDefinition = {
    bucketHash: {},
    bucketName: [],
    bucketDescription: [],
    scope: 0,
    category: 0,
    bucketOrder: 0,
    bucketIdentifier: [],
    itemCount: 0,
    location: 0,
    hasTransferDestination: !1,
    enabled: !1,
    hash: {}
}
  , DestinyStatDefinition = {
    statHash: {},
    statName: [],
    statDescription: [],
    icon: [],
    statIdentifier: [],
    hash: {}
}
  , InterpolationPoint = {
    value: 0,
    weight: 0
}
  , DestinySlotAllocationDefinition = {
    roundUp: !1,
    slotHash: {},
    weight: 0
}
  , DestinySandboxPerkDefinition = {
    perkHash: {},
    displayName: [],
    displayDescription: [],
    displayIcon: [],
    perkIdentifier: [],
    isDisplayable: !1,
    perkGroups: {
        weaponPerformance: 0,
        impactEffects: 0,
        guardianAttributes: 0,
        lightAbilities: 0,
        damageTypes: 0
    },
    hash: {}
}
  , DestinyTalentNodeStepGroups = {
    weaponPerformance: 0,
    impactEffects: 0,
    guardianAttributes: 0,
    lightAbilities: 0,
    damageTypes: 0
}
  , DestinyTalentGridDefinition = {
    gridHash: {},
    maxGridLevel: 0,
    gridLevelPerColumn: 0,
    progressionHash: {},
    nodes: [],
    exclusiveSets: [],
    independentNodeIndexes: [],
    hash: {}
}
  , DestinyTalentNodeDefinition = {
    nodeIndex: 0,
    nodeHash: {},
    row: 0,
    column: 0,
    prerequisiteNodeIndexes: [],
    binaryPairNodeIndex: 0,
    autoUnlocks: !1,
    lastStepRepeats: !1,
    isRandom: !1,
    randomActivationRequirement: {
        gridLevel: 0,
        materialRequirementHashes: []
    },
    isRandomRepurchasable: !1,
    steps: [],
    exlusiveWithNodes: [],
    randomStartProgressionBarAtProgression: 0
}
  , DestinyNodeActivationRequirement = {
    gridLevel: 0,
    materialRequirementHashes: []
}
  , DestinyNodeStepDefinition = {
    stepIndex: 0,
    nodeStepHash: {},
    nodeStepName: [],
    nodeStepDescription: [],
    interactionDescription: [],
    icon: [],
    damageType: 0,
    damageTypeHash: {},
    activationRequirement: {
        gridLevel: 0,
        materialRequirementHashes: []
    },
    canActivateNextStep: !1,
    nextStepIndex: 0,
    isNextStepRandom: !1,
    perkHashes: [],
    startProgressionBarAtProgress: 0,
    statHashes: [],
    affectsQuality: !1,
    stepGroups: {
        weaponPerformance: 0,
        impactEffects: 0,
        guardianAttributes: 0,
        lightAbilities: 0,
        damageTypes: 0
    },
    affectsLevel: !1
}
  , DestinyNodeVisibilityDefinition = {
    minLevel: 0,
    maxLevel: 0,
    transient: !1
}
  , DestinyTalentNodeExclusiveSetDefinition = {
    nodeIndexes: []
}
  , DestinyStatGroupDefinition = {
    statGroupHash: {},
    maximumValue: 0,
    uiPosition: 0,
    scaledStats: [],
    overrides: [],
    hash: {}
}
  , DestinyStatDisplayDefinition = {
    statHash: {},
    maximumValue: 0,
    displayAsNumeric: !1,
    displayInterpolation: []
}
  , DestinyStatOverrideDefinition = {
    statHash: {},
    displayName: [],
    displayDescription: [],
    displayIcon: []
}
  , DestinyProgressionMappingDefinition = {
    mappingHash: {},
    displayName: [],
    description: [],
    displayUnits: [],
    hash: {}
}
  , DestinyItemCategoryDefinition = {
    itemCategoryHash: {},
    identifier: [],
    visible: !1,
    title: [],
    shortTitle: [],
    description: [],
    hash: {}
}
  , DestinyRewardSourceDefinition = {
    sourceHash: {},
    category: 0,
    identifier: [],
    sourceName: [],
    description: [],
    icon: [],
    hash: {}
}
  , DestinyRewardSourceMappingEntry = {}
  , DestinyObjectiveDefinition = {
    objectiveHash: {},
    completionValue: 0,
    vendorHash: {},
    vendorCategoryHash: {},
    displayDescription: [],
    locationHash: {},
    allowNegativeValue: !1,
    allowValueChangeWhenCompleted: !1,
    isCountingDownward: !1,
    valueStyle: 0,
    hash: {}
}
  , DestinyProgressionDefinition = {
    progressionHash: {},
    name: [],
    scope: 0,
    repeatLastStep: !1,
    icon: [],
    identifier: [],
    description: [],
    source: [],
    steps: [],
    visible: !1,
    hash: {}
}
  , DestinyProgressionStepDefinition = {
    stepName: [],
    progressTotal: 0,
    rewardItems: []
}
  , DestinyDamageTypeDefinition = {
    damageTypeHash: {},
    identifier: [],
    damageTypeName: [],
    iconPath: [],
    transparentIconPath: [],
    showIcon: !1,
    enumValue: 0,
    hash: {}
}
  , DestinyMaterialRequirement = {
    itemHash: {},
    deleteOnAction: !1,
    count: 0,
    omitFromRequirements: !1
}
  , DestinyUnlockValueDefinition = {
    unlockValueHash: {},
    hash: {}
}
  , DestinyVendorDefinition = {
    summary: {
        vendorHash: {},
        vendorName: [],
        vendorDescription: [],
        vendorIcon: [],
        vendorOrder: 0,
        factionName: [],
        factionIcon: [],
        factionHash: {},
        factionDescription: [],
        resetIntervalMinutes: 0,
        resetOffsetMinutes: 0,
        vendorIdentifier: [],
        positionX: 0,
        positionY: 0,
        transitionNodeIdentifier: [],
        visible: !1,
        progressionHash: {},
        sellString: [],
        buyString: [],
        vendorPortrait: [],
        vendorBanner: [],
        unlockFlagHashes: [],
        enabledUnlockFlagHashes: [],
        mapSectionIdentifier: [],
        mapSectionName: [],
        mapSectionOrder: 0,
        showOnMap: !1,
        eventHash: {},
        vendorCategoryHash: {},
        vendorCategoryHashes: [],
        vendorSubcategoryHash: {},
        inhibitBuying: !1
    },
    acceptedItems: [],
    categories: [],
    failureStrings: [],
    sales: [],
    hash: {}
}
  , DestinyVendorSummaryDefinition = {
    vendorHash: {},
    vendorName: [],
    vendorDescription: [],
    vendorIcon: [],
    vendorOrder: 0,
    factionName: [],
    factionIcon: [],
    factionHash: {},
    factionDescription: [],
    resetIntervalMinutes: 0,
    resetOffsetMinutes: 0,
    vendorIdentifier: [],
    positionX: 0,
    positionY: 0,
    transitionNodeIdentifier: [],
    visible: !1,
    progressionHash: {},
    sellString: [],
    buyString: [],
    vendorPortrait: [],
    vendorBanner: [],
    unlockFlagHashes: [],
    enabledUnlockFlagHashes: [],
    mapSectionIdentifier: [],
    mapSectionName: [],
    mapSectionOrder: 0,
    showOnMap: !1,
    eventHash: {},
    vendorCategoryHash: {},
    vendorCategoryHashes: [],
    vendorSubcategoryHash: {},
    inhibitBuying: !1
}
  , DestinyVendorAcceptedItemDefinition = {
    acceptedBucket: {},
    destinationBucket: {}
}
  , DestinySaleCategoryDefinition = {
    categoryHash: {},
    displayTitle: [],
    overlayCurrencyItemHash: {},
    quantityAvailable: 0,
    showUnavailableItems: !1,
    hideIfNoCurrency: !1,
    buyStringOverride: [],
    disabledDescription: [],
    overlayTitle: [],
    overlayDescription: [],
    overlayChoice: [],
    overlayIcon: [],
    hasOverlay: !1,
    hideFromRegularPurchase: !1
}
  , DestinyVendorItemSummaryDefinition = {
    itemHash: {},
    bucketHash: {},
    categoryIndex: 0,
    quantityPurchased: 0,
    currencies: [],
    failureIndexes: [],
    refundPolicy: 0,
    refundLimit: 0
}
  , DestinyVendorItemCurrencyDefinition = {
    itemHash: {},
    quantity: 0
}
  , DateRange = {
    start: null ,
    end: null
}
  , DestinyLocationDefinition = {
    locationHash: {},
    locationReleases: [],
    hash: {}
}
  , DestinyLocationReleaseDefinition = {
    destinationHash: {},
    activityHash: {},
    directorBookHash: {},
    activityGraphHash: {},
    activityGraphNodeHash: {}
}
  , DestinyFactionDefinition = {
    factionHash: {},
    factionName: [],
    factionDescription: [],
    factionIcon: [],
    progressionHash: {},
    hash: {}
}
  , DestinySpecialEventDefinition = {
    eventHash: {},
    eventIdentifier: [],
    backgroundImageWeb: [],
    title: [],
    subtitle: [],
    description: [],
    link: [],
    icon: [],
    showNagMessage: !1,
    returnInActivityAdvisor: !1,
    progressionHash: {},
    vendorHash: {},
    factionHash: {},
    backgroundImageMobile: [],
    bountyHashes: [],
    questHashes: [],
    friendlyIdentifier: [],
    recruitmentIds: [],
    playlistActivityHash: {},
    hash: {}
}
  , DestinyVendorCategoryDefinition = {
    categoryHash: {},
    order: 0,
    categoryName: [],
    mobileBannerPath: [],
    identifier: [],
    hash: {}
}
  , DestinyDestinationDefinition = {
    destinationHash: {},
    destinationName: [],
    destinationDescription: [],
    icon: [],
    placeHash: {},
    destinationIdentifier: [],
    locationIdentifier: [],
    location: [],
    hash: {}
}
  , DestinyActivityDefinition = {
    activityHash: {},
    activityName: [],
    activityDescription: [],
    icon: [],
    releaseIcon: [],
    releaseTime: 0,
    activityLevel: 0,
    completionFlagHash: {},
    activityPower: 0,
    minParty: 0,
    maxParty: 0,
    maxPlayers: 0,
    destinationHash: {},
    placeHash: {},
    activityTypeHash: {},
    tier: 0,
    pgcrImage: [],
    rewards: [],
    skulls: [],
    isPlaylist: !1,
    isMatchmade: !1,
    hash: {}
}
  , DestinyActivityOptionSet = {
    unlockExpression: {},
    entityArrayProperties: [],
    entityValueProperties: [],
    booleanProperties: [],
    unknownProperties: []
}
  , DestinyActivityOptionEntityMappingArray = {
    optionRawValues: [],
    entityType: [],
    entityHashes: [],
    optionName: [],
    optionHash: {},
    optionType: []
}
  , DestinyActivityOptionEntityMappingValue = {
    optionRawValue: 0,
    entityType: [],
    entityHashes: [],
    optionName: [],
    optionHash: {},
    optionType: []
}
  , DestinyActivityBooleanOption = {
    optionRawValue: !1,
    optionName: [],
    optionHash: {},
    optionType: []
}
  , DestinyActivityOption = {
    optionName: [],
    optionHash: {},
    optionType: []
}
  , DestinyActivityPlaylistItemDefinition = {}
  , DestinyDirectorBookDefinition = {
    bookHash: {},
    bookName: [],
    bookDescription: [],
    bookNumber: [],
    nodes: [],
    connections: [],
    bookIdentifier: [],
    visible: !1,
    isOverview: !1,
    transitionNodes: [],
    notificationNodes: [],
    urlFriendlyName: [],
    imagePaths: [],
    isDefaultExpression: {},
    isVisibleExpression: {},
    destinationHash: {},
    tileMap: {
        tileImages: [],
        numColumns: 0,
        numRows: 0,
        tileWidth: 0,
        tileHeight: 0
    },
    mapImage: [],
    hash: {}
}
  , TileMap = {
    tileImages: [],
    numColumns: 0,
    numRows: 0,
    tileWidth: 0,
    tileHeight: 0
}
  , DestinyDirectorNodeDefinition = {
    nodeDefinitionHash: {},
    styleHash: {},
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    displayLabel: [],
    overrideDisplayDescription: [],
    overrideDisplayIcon: [],
    overrideDisplayName: [],
    activityBundleHashes: [],
    states: [],
    uiModifier: 0
}
  , DestinyDirectorNodeStateDefinition = {
    state: 0
}
  , DestinyDirectorConnectionDefinition = {
    sourceNodeIndex: 0,
    destinationNodeIndex: 0
}
  , DestinyDirectorTransitionNodeDefinition = {
    identifier: [],
    positionX: 0,
    positionY: 0,
    transitionBookHash: {},
    transitionType: 0,
    width: 0,
    height: 0,
    parallaxIndex: 0,
    imagePath: [],
    alphaImagePath: [],
    destinationBackgroundImagePath: [],
    destinationDetailImagePath: [],
    destinationContextImagePath: [],
    label: [],
    tileMap: {
        tileImages: [],
        numColumns: 0,
        numRows: 0,
        tileWidth: 0,
        tileHeight: 0
    },
    mapImage: []
}
  , DestinyDirectorNotificationNodeDefinition = {
    identifier: [],
    transitionNodeIdentifier: [],
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
    backgroundImagePath: [],
    showCount: !1,
    activityBundleHashes: [],
    vendorHashes: []
}
  , DestinyPlaceDefinition = {
    placeHash: {},
    placeName: [],
    placeDescription: [],
    icon: [],
    hash: {}
}
  , DestinyActivityTypeDefinition = {
    activityTypeHash: {},
    identifier: [],
    activityTypeName: [],
    activityTypeDescription: [],
    icon: [],
    activeBackgroundVirtualPath: [],
    completedBackgroundVirtualPath: [],
    hiddenOverrideVirtualPath: [],
    tooltipBackgroundVirtualPath: [],
    enlargedActiveBackgroundVirtualPath: [],
    enlargedCompletedBackgroundVirtualPath: [],
    enlargedHiddenOverrideVirtualPath: [],
    enlargedTooltipBackgroundVirtualPath: [],
    order: 0,
    statGroup: [],
    friendlyUrlId: [],
    hash: {}
}
  , DestinyActivityBundleDefinition = {
    bundleHash: {},
    activityName: [],
    activityDescription: [],
    icon: [],
    releaseIcon: [],
    releaseTime: 0,
    destinationHash: {},
    placeHash: {},
    activityTypeHash: {},
    activityHashes: [],
    hash: {}
}
  , DestinyEnemyRaceDefinition = {
    raceHash: {},
    identifier: [],
    raceName: [],
    description: [],
    iconPath: [],
    hash: {}
}
  , DestinyUnlockFlagDefinition = {
    flagHash: {},
    displayName: [],
    displayDescription: [],
    hash: {}
}
  , DestinyCalendarEventDefinition = {
    eventDate: null ,
    unlockState: 0
}
  , ServiceResultDestinyAccountAdvisorData = {
    data: {
        nextWeeklyReset: null ,
        nextDailyReset: null ,
        previousWeeklyReset: null ,
        previousDailyReset: null ,
        recordBooks: []
    },
    definitions: {
        recordBooks: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        records: []
    }
}
  , DestinyAccountAdvisorData = {
    nextWeeklyReset: null ,
    nextDailyReset: null ,
    previousWeeklyReset: null ,
    previousDailyReset: null ,
    recordBooks: []
}
  , DestinyRecordBook = {
    bookHash: {},
    records: [],
    progression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    },
    completedCount: 0,
    redeemedCount: 0,
    spotlights: [],
    startDate: null ,
    expirationDate: null
}
  , DestinyRecordSpotlight = {
    rewardItemHash: {},
    rewardedAtLevel: 0,
    quantity: 0,
    status: 0
}
  , DestinyRecordStatus = {
    recordHash: {},
    objectives: [],
    status: 0,
    scramble: !1
}
  , DefinitionSetDestinyAccountAdvisorData = {
    recordBooks: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    records: []
}
  , DestinyRecordBookDefinition = {
    pages: [],
    displayName: [],
    displayDescription: [],
    icon: [],
    unavailableReason: [],
    progressionHash: {},
    recordCount: 0,
    bannerImage: [],
    itemHash: {},
    rewardImage: [],
    promoEndDate: null ,
    hash: {}
}
  , DestinyRecordBookPageDefinition = {
    displayName: [],
    displayDescription: [],
    icon: [],
    displayStyle: 0,
    records: [],
    rewards: []
}
  , DestinyRecordBookPageRecordReference = {
    recordHash: {},
    spotlight: !1,
    scrambled: !1
}
  , DestinyRecordBookPageRewardReference = {
    visible: !1,
    itemHash: {},
    requirementProgressionLevel: 0,
    canReclaim: !1,
    quantity: 0
}
  , DestinyRecordDefinition = {
    displayName: [],
    description: [],
    recordValueUIStyle: [],
    icon: [],
    recruitmentTag: [],
    style: 0,
    rewards: [],
    objectives: [],
    hash: {}
}
  , DestinyRecordRewardDefinition = {
    uiItemHash: {},
    uiItemQuantity: 0,
    levelRewarded: 0
}
  , DestinyRecordActualRewardDefinition = {}
  , DestinyRecordObjectiveDefinition = {
    objectiveHash: {}
}
  , ServiceResultDestinyAdvisorDataV2 = {
    data: {
        activities: [],
        activityCategories: [],
        bounties: [],
        quests: [],
        progressions: [],
        recordBooks: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        enemyRaces: [],
        flags: [],
        recordBooks: [],
        records: []
    }
}
  , DestinyAdvisorDataV2 = {
    activities: [],
    activityCategories: [],
    bounties: [],
    quests: [],
    progressions: [],
    recordBooks: []
}
  , DefinitionSetDestinyAdvisorDataV2 = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    enemyRaces: [],
    flags: [],
    recordBooks: [],
    records: []
}
  , DestinyManifest = {
    version: [],
    mobileAssetContentPath: [],
    mobileGearAssetDataBases: [],
    mobileWorldContentPaths: [],
    mobileGearCDN: []
}
  , GearAssetDataBaseDefinition = {
    version: 0,
    path: []
}
  , ServiceResultDestinySingleDefinitionResponse = {
    data: {
        requestedId: {},
        activity: {
            activityHash: {},
            activityName: [],
            activityDescription: [],
            icon: [],
            releaseIcon: [],
            releaseTime: 0,
            activityLevel: 0,
            completionFlagHash: {},
            activityPower: 0,
            minParty: 0,
            maxParty: 0,
            maxPlayers: 0,
            destinationHash: {},
            placeHash: {},
            activityTypeHash: {},
            tier: 0,
            pgcrImage: [],
            rewards: [],
            skulls: [],
            isPlaylist: !1,
            isMatchmade: !1,
            hash: {}
        },
        activityType: {
            activityTypeHash: {},
            identifier: [],
            activityTypeName: [],
            activityTypeDescription: [],
            icon: [],
            activeBackgroundVirtualPath: [],
            completedBackgroundVirtualPath: [],
            hiddenOverrideVirtualPath: [],
            tooltipBackgroundVirtualPath: [],
            enlargedActiveBackgroundVirtualPath: [],
            enlargedCompletedBackgroundVirtualPath: [],
            enlargedHiddenOverrideVirtualPath: [],
            enlargedTooltipBackgroundVirtualPath: [],
            order: 0,
            statGroup: [],
            friendlyUrlId: [],
            hash: {}
        },
        classDefinition: {
            classHash: {},
            classType: 0,
            className: [],
            classNameMale: [],
            classNameFemale: [],
            classIdentifier: [],
            mentorVendorIdentifier: [],
            hash: {}
        },
        gender: {
            genderHash: {},
            genderType: 0,
            genderName: [],
            genderDescription: [],
            hash: {}
        },
        inventoryBucket: {
            bucketHash: {},
            bucketName: [],
            bucketDescription: [],
            scope: 0,
            category: 0,
            bucketOrder: 0,
            bucketIdentifier: [],
            itemCount: 0,
            location: 0,
            hasTransferDestination: !1,
            enabled: !1,
            hash: {}
        },
        inventoryItem: {
            itemHash: {},
            itemName: [],
            itemDescription: [],
            icon: [],
            hasIcon: !1,
            secondaryIcon: [],
            displaySource: [],
            actionName: [],
            actionDescription: [],
            hasAction: !1,
            deleteOnAction: !1,
            tierTypeName: [],
            tierType: 0,
            itemTypeName: [],
            bucketTypeHash: {},
            primaryBaseStatHash: {},
            stats: [],
            maxLightStats: [],
            perkHashes: [],
            itemIdentifier: [],
            specialItemType: 0,
            talentGridHash: {},
            equippingBlock: {
                weaponSandboxPatternIndex: 0,
                gearArtArrangementIndex: 0,
                defaultDyes: [],
                lockedDyes: [],
                customDyes: [],
                customDyeExpression: {},
                weaponPatternHash: {},
                arrangements: []
            },
            hasGeometry: !1,
            statGroupHash: {},
            itemLevels: [],
            qualityLevel: 0,
            equippable: !1,
            instanced: !1,
            values: [],
            itemType: 0,
            itemSubType: 0,
            classType: 0,
            sources: [],
            itemCategoryHashes: [],
            sourceHashes: [],
            nonTransferrable: !1,
            exclusive: 0,
            maxStackSize: 0,
            setItemHashes: [],
            narrative: [],
            tooltipStyle: [],
            questlineItemHash: {},
            needsFullCompletion: !1,
            objectiveVerb: [],
            objectiveHashes: [],
            animations: [],
            derivedItemCategories: [],
            allowActions: !1,
            recordBookHash: {},
            uniquenessHash: {},
            derivedItemVendorHash: {},
            showActiveNodesInTooltip: !1,
            damageTypes: [],
            links: [],
            hash: {}
        },
        progression: {
            progressionHash: {},
            name: [],
            scope: 0,
            repeatLastStep: !1,
            icon: [],
            identifier: [],
            description: [],
            source: [],
            steps: [],
            visible: !1,
            hash: {}
        },
        race: {
            raceHash: {},
            raceType: 0,
            raceName: [],
            raceNameMale: [],
            raceNameFemale: [],
            raceDescription: [],
            hash: {}
        },
        stat: {
            statHash: {},
            statName: [],
            statDescription: [],
            icon: [],
            statIdentifier: [],
            hash: {}
        },
        talentGrid: {
            gridHash: {},
            maxGridLevel: 0,
            gridLevelPerColumn: 0,
            progressionHash: {},
            nodes: [],
            exclusiveSets: [],
            independentNodeIndexes: [],
            hash: {}
        },
        statGroup: {
            statGroupHash: {},
            maximumValue: 0,
            uiPosition: 0,
            scaledStats: [],
            overrides: [],
            hash: {}
        },
        unlockFlag: {
            flagHash: {},
            displayName: [],
            displayDescription: [],
            hash: {}
        },
        vendor: {
            summary: {
                vendorHash: {},
                vendorName: [],
                vendorDescription: [],
                vendorIcon: [],
                vendorOrder: 0,
                factionName: [],
                factionIcon: [],
                factionHash: {},
                factionDescription: [],
                resetIntervalMinutes: 0,
                resetOffsetMinutes: 0,
                vendorIdentifier: [],
                positionX: 0,
                positionY: 0,
                transitionNodeIdentifier: [],
                visible: !1,
                progressionHash: {},
                sellString: [],
                buyString: [],
                vendorPortrait: [],
                vendorBanner: [],
                unlockFlagHashes: [],
                enabledUnlockFlagHashes: [],
                mapSectionIdentifier: [],
                mapSectionName: [],
                mapSectionOrder: 0,
                showOnMap: !1,
                eventHash: {},
                vendorCategoryHash: {},
                vendorCategoryHashes: [],
                vendorSubcategoryHash: {},
                inhibitBuying: !1
            },
            acceptedItems: [],
            categories: [],
            failureStrings: [],
            sales: [],
            hash: {}
        },
        destination: {
            destinationHash: {},
            destinationName: [],
            destinationDescription: [],
            icon: [],
            placeHash: {},
            destinationIdentifier: [],
            locationIdentifier: [],
            location: [],
            hash: {}
        },
        place: {
            placeHash: {},
            placeName: [],
            placeDescription: [],
            icon: [],
            hash: {}
        },
        directorBook: {
            bookHash: {},
            bookName: [],
            bookDescription: [],
            bookNumber: [],
            nodes: [],
            connections: [],
            bookIdentifier: [],
            visible: !1,
            isOverview: !1,
            transitionNodes: [],
            notificationNodes: [],
            urlFriendlyName: [],
            imagePaths: [],
            isDefaultExpression: {},
            isVisibleExpression: {},
            destinationHash: {},
            tileMap: {
                tileImages: [],
                numColumns: 0,
                numRows: 0,
                tileWidth: 0,
                tileHeight: 0
            },
            mapImage: [],
            hash: {}
        },
        materialRequirementSet: {
            setHash: {},
            materials: [],
            hash: {}
        },
        sandboxPerk: {
            perkHash: {},
            displayName: [],
            displayDescription: [],
            displayIcon: [],
            perkIdentifier: [],
            isDisplayable: !1,
            perkGroups: {
                weaponPerformance: 0,
                impactEffects: 0,
                guardianAttributes: 0,
                lightAbilities: 0,
                damageTypes: 0
            },
            hash: {}
        },
        artDye: {
            artDyeHash: {},
            artDyeName: [],
            index: 0,
            dyeManifestHash: {},
            dyeManifestName: [],
            hash: {}
        },
        artDyeChannel: {
            channelHash: {},
            index: 0,
            hash: {}
        },
        activityBundle: {
            bundleHash: {},
            activityName: [],
            activityDescription: [],
            icon: [],
            releaseIcon: [],
            releaseTime: 0,
            destinationHash: {},
            placeHash: {},
            activityTypeHash: {},
            activityHashes: [],
            hash: {}
        },
        gearAsset: {
            GearAssets: [],
            content: []
        },
        grimoireCard: {
            cardId: 0,
            cardName: [],
            cardIntro: [],
            cardIntroAttribution: [],
            cardDescription: [],
            bonusName: [],
            bonusDescription: [],
            bonusRank: {
                statId: 0,
                rank: 0
            },
            unlockHowToText: [],
            cardLabel: [],
            rarity: 0,
            points: 0,
            normalResolution: {
                image: {
                    rect: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    },
                    sheetPath: [],
                    sheetSize: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    }
                },
                smallImage: {
                    rect: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    },
                    sheetPath: [],
                    sheetSize: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    }
                }
            },
            highResolution: {
                image: {
                    rect: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    },
                    sheetPath: [],
                    sheetSize: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    }
                },
                smallImage: {
                    rect: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    },
                    sheetPath: [],
                    sheetSize: {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    }
                }
            },
            statisticCollection: []
        }
    },
    definitions: {
        destinations: [],
        places: [],
        activityTypes: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        activities: [],
        books: [],
        activityBundles: []
    }
}
  , DestinySingleDefinitionResponse = {
    requestedId: {},
    activity: {
        activityHash: {},
        activityName: [],
        activityDescription: [],
        icon: [],
        releaseIcon: [],
        releaseTime: 0,
        activityLevel: 0,
        completionFlagHash: {},
        activityPower: 0,
        minParty: 0,
        maxParty: 0,
        maxPlayers: 0,
        destinationHash: {},
        placeHash: {},
        activityTypeHash: {},
        tier: 0,
        pgcrImage: [],
        rewards: [],
        skulls: [],
        isPlaylist: !1,
        isMatchmade: !1,
        hash: {}
    },
    activityType: {
        activityTypeHash: {},
        identifier: [],
        activityTypeName: [],
        activityTypeDescription: [],
        icon: [],
        activeBackgroundVirtualPath: [],
        completedBackgroundVirtualPath: [],
        hiddenOverrideVirtualPath: [],
        tooltipBackgroundVirtualPath: [],
        enlargedActiveBackgroundVirtualPath: [],
        enlargedCompletedBackgroundVirtualPath: [],
        enlargedHiddenOverrideVirtualPath: [],
        enlargedTooltipBackgroundVirtualPath: [],
        order: 0,
        statGroup: [],
        friendlyUrlId: [],
        hash: {}
    },
    classDefinition: {
        classHash: {},
        classType: 0,
        className: [],
        classNameMale: [],
        classNameFemale: [],
        classIdentifier: [],
        mentorVendorIdentifier: [],
        hash: {}
    },
    gender: {
        genderHash: {},
        genderType: 0,
        genderName: [],
        genderDescription: [],
        hash: {}
    },
    inventoryBucket: {
        bucketHash: {},
        bucketName: [],
        bucketDescription: [],
        scope: 0,
        category: 0,
        bucketOrder: 0,
        bucketIdentifier: [],
        itemCount: 0,
        location: 0,
        hasTransferDestination: !1,
        enabled: !1,
        hash: {}
    },
    inventoryItem: {
        itemHash: {},
        itemName: [],
        itemDescription: [],
        icon: [],
        hasIcon: !1,
        secondaryIcon: [],
        displaySource: [],
        actionName: [],
        actionDescription: [],
        hasAction: !1,
        deleteOnAction: !1,
        tierTypeName: [],
        tierType: 0,
        itemTypeName: [],
        bucketTypeHash: {},
        primaryBaseStatHash: {},
        stats: [],
        maxLightStats: [],
        perkHashes: [],
        itemIdentifier: [],
        specialItemType: 0,
        talentGridHash: {},
        equippingBlock: {
            weaponSandboxPatternIndex: 0,
            gearArtArrangementIndex: 0,
            defaultDyes: [],
            lockedDyes: [],
            customDyes: [],
            customDyeExpression: {},
            weaponPatternHash: {},
            arrangements: []
        },
        hasGeometry: !1,
        statGroupHash: {},
        itemLevels: [],
        qualityLevel: 0,
        equippable: !1,
        instanced: !1,
        values: [],
        itemType: 0,
        itemSubType: 0,
        classType: 0,
        sources: [],
        itemCategoryHashes: [],
        sourceHashes: [],
        nonTransferrable: !1,
        exclusive: 0,
        maxStackSize: 0,
        setItemHashes: [],
        narrative: [],
        tooltipStyle: [],
        questlineItemHash: {},
        needsFullCompletion: !1,
        objectiveVerb: [],
        objectiveHashes: [],
        animations: [],
        derivedItemCategories: [],
        allowActions: !1,
        recordBookHash: {},
        uniquenessHash: {},
        derivedItemVendorHash: {},
        showActiveNodesInTooltip: !1,
        damageTypes: [],
        links: [],
        hash: {}
    },
    progression: {
        progressionHash: {},
        name: [],
        scope: 0,
        repeatLastStep: !1,
        icon: [],
        identifier: [],
        description: [],
        source: [],
        steps: [],
        visible: !1,
        hash: {}
    },
    race: {
        raceHash: {},
        raceType: 0,
        raceName: [],
        raceNameMale: [],
        raceNameFemale: [],
        raceDescription: [],
        hash: {}
    },
    stat: {
        statHash: {},
        statName: [],
        statDescription: [],
        icon: [],
        statIdentifier: [],
        hash: {}
    },
    talentGrid: {
        gridHash: {},
        maxGridLevel: 0,
        gridLevelPerColumn: 0,
        progressionHash: {},
        nodes: [],
        exclusiveSets: [],
        independentNodeIndexes: [],
        hash: {}
    },
    statGroup: {
        statGroupHash: {},
        maximumValue: 0,
        uiPosition: 0,
        scaledStats: [],
        overrides: [],
        hash: {}
    },
    unlockFlag: {
        flagHash: {},
        displayName: [],
        displayDescription: [],
        hash: {}
    },
    vendor: {
        summary: {
            vendorHash: {},
            vendorName: [],
            vendorDescription: [],
            vendorIcon: [],
            vendorOrder: 0,
            factionName: [],
            factionIcon: [],
            factionHash: {},
            factionDescription: [],
            resetIntervalMinutes: 0,
            resetOffsetMinutes: 0,
            vendorIdentifier: [],
            positionX: 0,
            positionY: 0,
            transitionNodeIdentifier: [],
            visible: !1,
            progressionHash: {},
            sellString: [],
            buyString: [],
            vendorPortrait: [],
            vendorBanner: [],
            unlockFlagHashes: [],
            enabledUnlockFlagHashes: [],
            mapSectionIdentifier: [],
            mapSectionName: [],
            mapSectionOrder: 0,
            showOnMap: !1,
            eventHash: {},
            vendorCategoryHash: {},
            vendorCategoryHashes: [],
            vendorSubcategoryHash: {},
            inhibitBuying: !1
        },
        acceptedItems: [],
        categories: [],
        failureStrings: [],
        sales: [],
        hash: {}
    },
    destination: {
        destinationHash: {},
        destinationName: [],
        destinationDescription: [],
        icon: [],
        placeHash: {},
        destinationIdentifier: [],
        locationIdentifier: [],
        location: [],
        hash: {}
    },
    place: {
        placeHash: {},
        placeName: [],
        placeDescription: [],
        icon: [],
        hash: {}
    },
    directorBook: {
        bookHash: {},
        bookName: [],
        bookDescription: [],
        bookNumber: [],
        nodes: [],
        connections: [],
        bookIdentifier: [],
        visible: !1,
        isOverview: !1,
        transitionNodes: [],
        notificationNodes: [],
        urlFriendlyName: [],
        imagePaths: [],
        isDefaultExpression: {},
        isVisibleExpression: {},
        destinationHash: {},
        tileMap: {
            tileImages: [],
            numColumns: 0,
            numRows: 0,
            tileWidth: 0,
            tileHeight: 0
        },
        mapImage: [],
        hash: {}
    },
    materialRequirementSet: {
        setHash: {},
        materials: [],
        hash: {}
    },
    sandboxPerk: {
        perkHash: {},
        displayName: [],
        displayDescription: [],
        displayIcon: [],
        perkIdentifier: [],
        isDisplayable: !1,
        perkGroups: {
            weaponPerformance: 0,
            impactEffects: 0,
            guardianAttributes: 0,
            lightAbilities: 0,
            damageTypes: 0
        },
        hash: {}
    },
    artDye: {
        artDyeHash: {},
        artDyeName: [],
        index: 0,
        dyeManifestHash: {},
        dyeManifestName: [],
        hash: {}
    },
    artDyeChannel: {
        channelHash: {},
        index: 0,
        hash: {}
    },
    activityBundle: {
        bundleHash: {},
        activityName: [],
        activityDescription: [],
        icon: [],
        releaseIcon: [],
        releaseTime: 0,
        destinationHash: {},
        placeHash: {},
        activityTypeHash: {},
        activityHashes: [],
        hash: {}
    },
    gearAsset: {
        GearAssets: [],
        content: []
    },
    grimoireCard: {
        cardId: 0,
        cardName: [],
        cardIntro: [],
        cardIntroAttribution: [],
        cardDescription: [],
        bonusName: [],
        bonusDescription: [],
        bonusRank: {
            statId: 0,
            rank: 0
        },
        unlockHowToText: [],
        cardLabel: [],
        rarity: 0,
        points: 0,
        normalResolution: {
            image: {
                rect: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                },
                sheetPath: [],
                sheetSize: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                }
            },
            smallImage: {
                rect: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                },
                sheetPath: [],
                sheetSize: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                }
            }
        },
        highResolution: {
            image: {
                rect: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                },
                sheetPath: [],
                sheetSize: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                }
            },
            smallImage: {
                rect: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                },
                sheetPath: [],
                sheetSize: {
                    x: 0,
                    y: 0,
                    height: 0,
                    width: 0
                }
            }
        },
        statisticCollection: []
    }
}
  , DestinyMaterialRequirementSetDefinition = {
    setHash: {},
    materials: [],
    hash: {}
}
  , DestinyArtDyeReferenceDefinition = {
    artDyeHash: {},
    artDyeName: [],
    index: 0,
    dyeManifestHash: {},
    dyeManifestName: [],
    hash: {}
}
  , DestinyArtDyeChannelDefinition = {
    channelHash: {},
    index: 0,
    hash: {}
}
  , DestinyGearAssetsDefinition = {
    GearAssets: [],
    content: []
}
  , DestinyGearPlatformContent = {
    platform: [],
    GeometryAssets: [],
    TextureAssets: [],
    Shaders: [],
    PlateRegions: [],
    MaleIndexSet: {
        textures: [],
        geometry: [],
        plate_regions: [],
        shaders: []
    },
    DyeIndexSet: {
        textures: [],
        geometry: [],
        plate_regions: [],
        shaders: []
    },
    FemaleIndexSet: {
        textures: [],
        geometry: [],
        plate_regions: [],
        shaders: []
    },
    RegionIndexSets: []
}
  , DestinyGearAssetsIndexSet = {
    textures: [],
    geometry: [],
    plate_regions: [],
    shaders: []
}
  , DestinyGrimoireCardDefinition = {
    cardId: 0,
    cardName: [],
    cardIntro: [],
    cardIntroAttribution: [],
    cardDescription: [],
    bonusName: [],
    bonusDescription: [],
    bonusRank: {
        statId: 0,
        rank: 0
    },
    unlockHowToText: [],
    cardLabel: [],
    rarity: 0,
    points: 0,
    normalResolution: {
        image: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        },
        smallImage: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        }
    },
    highResolution: {
        image: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        },
        smallImage: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        }
    },
    statisticCollection: []
}
  , DestinyGrimoireBonusUnlock = {
    statId: 0,
    rank: 0
}
  , DestinyGrimoireImageDefinition = {
    image: {
        rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
        },
        sheetPath: [],
        sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
        }
    },
    smallImage: {
        rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
        },
        sheetPath: [],
        sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
        }
    }
}
  , SpriteDefinition = {
    rect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
    },
    sheetPath: [],
    sheetSize: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
    }
}
  , Rectangle = {
    x: 0,
    y: 0,
    height: 0,
    width: 0
}
  , DestinyGrimoireExclusive = {
    exclusiveToPlatform: 0,
    exclusiveUntil: null
}
  , DestinyGrimoireCardNotes = {
    rewardNumber: 0,
    coolDownSeconds: 0,
    imageState: []
}
  , DestinyGrimoireStatisticDefinition = {
    statNumber: 0,
    cardId: 0,
    statDescription: [],
    statName: [],
    rankCollection: []
}
  , DestinyGrimoireStatisticRankDefinition = {
    rank: 0,
    threshold: 0,
    points: 0
}
  , DefinitionSetDestinySingleDefinitionResponse = {
    destinations: [],
    places: [],
    activityTypes: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    activities: [],
    books: [],
    activityBundles: []
}
  , ServiceResultDestinyItemReferenceDetail = {
    data: {
        itemHash: {},
        potentialItems: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        flags: []
    }
}
  , DestinyItemReferenceDetail = {
    itemHash: {},
    potentialItems: []
}
  , DefinitionSetDestinyItemReferenceDetail = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    flags: []
}
  , ServiceResultDestinyAllItemsSummary = {
    data: {
        items: [],
        characters: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        races: [],
        genders: [],
        classes: []
    }
}
  , DestinyAllItemsSummary = {
    items: [],
    characters: []
}
  , DestinyInventoryItemSummary = {
    itemHash: {},
    itemId: 0,
    quantity: 0,
    damageType: 0,
    damageTypeHash: {},
    primaryStat: {
        statHash: {},
        value: 0,
        maximumValue: 0
    },
    isGridComplete: !1,
    transferStatus: 0,
    state: 0,
    characterIndex: 0,
    bucketHash: {}
}
  , DestinyCharacterSummary = {
    characterBase: {
        membershipId: 0,
        membershipType: 0,
        characterId: 0,
        dateLastPlayed: null ,
        minutesPlayedThisSession: 0,
        minutesPlayedTotal: 0,
        powerLevel: 0,
        raceHash: {},
        genderHash: {},
        classHash: {},
        currentActivityHash: {},
        lastCompletedStoryHash: {},
        stats: [],
        customization: {
            personality: {},
            face: {},
            skinColor: {},
            lipColor: {},
            eyeColor: {},
            hairColor: {},
            featureColor: {},
            decalColor: {},
            wearHelmet: !1,
            hairIndex: 0,
            featureIndex: 0,
            decalIndex: 0
        },
        grimoireScore: {},
        peerView: {
            equipment: []
        },
        genderType: 0,
        classType: 0,
        buildStatGroupHash: {}
    },
    levelProgression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    },
    emblemPath: [],
    backgroundPath: [],
    emblemHash: {},
    characterLevel: 0,
    baseCharacterLevel: 0,
    isPrestigeLevel: !1,
    percentToNextLevel: {}
}
  , DestinyCharacterBase = {
    membershipId: 0,
    membershipType: 0,
    characterId: 0,
    dateLastPlayed: null ,
    minutesPlayedThisSession: 0,
    minutesPlayedTotal: 0,
    powerLevel: 0,
    raceHash: {},
    genderHash: {},
    classHash: {},
    currentActivityHash: {},
    lastCompletedStoryHash: {},
    stats: [],
    customization: {
        personality: {},
        face: {},
        skinColor: {},
        lipColor: {},
        eyeColor: {},
        hairColor: {},
        featureColor: {},
        decalColor: {},
        wearHelmet: !1,
        hairIndex: 0,
        featureIndex: 0,
        decalIndex: 0
    },
    grimoireScore: {},
    peerView: {
        equipment: []
    },
    genderType: 0,
    classType: 0,
    buildStatGroupHash: {}
}
  , DestinyCharacterCustomization = {
    personality: {},
    face: {},
    skinColor: {},
    lipColor: {},
    eyeColor: {},
    hairColor: {},
    featureColor: {},
    decalColor: {},
    wearHelmet: !1,
    hairIndex: 0,
    featureIndex: 0,
    decalIndex: 0
}
  , DestinyCharacterPeerView = {
    equipment: []
}
  , DestinyItemPeerView = {
    itemHash: {},
    dyes: []
}
  , DefinitionSetDestinyAllItemsSummary = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    races: [],
    genders: [],
    classes: []
}
  , ServiceResultDestinyAccount = {
    data: {
        membershipId: 0,
        membershipType: 0,
        characters: [],
        clanName: [],
        clanTag: [],
        inventory: {
            buckets: [],
            currencies: []
        },
        grimoireScore: 0,
        vendorReceipts: [],
        versions: 0
    },
    definitions: {
        races: [],
        genders: [],
        classes: [],
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        books: [],
        activityBundles: [],
        flags: []
    }
}
  , DestinyAccount = {
    membershipId: 0,
    membershipType: 0,
    characters: [],
    clanName: [],
    clanTag: [],
    inventory: {
        buckets: [],
        currencies: []
    },
    grimoireScore: 0,
    vendorReceipts: [],
    versions: 0
}
  , DestinyInventory = {
    buckets: [],
    currencies: []
}
  , DefinitionSetDestinyAccount = {
    races: [],
    genders: [],
    classes: [],
    activities: [],
    destinations: [],
    places: [],
    activityTypes: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    books: [],
    activityBundles: [],
    flags: []
}
  , ServiceResultDestinyAccountSummary = {
    data: {
        membershipId: 0,
        membershipType: 0,
        characters: [],
        clanName: [],
        clanTag: [],
        inventory: {
            items: [],
            currencies: []
        },
        grimoireScore: 0,
        versions: 0
    },
    definitions: {
        races: [],
        genders: [],
        classes: [],
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        books: [],
        activityBundles: []
    }
}
  , DestinyAccountSummary = {
    membershipId: 0,
    membershipType: 0,
    characters: [],
    clanName: [],
    clanTag: [],
    inventory: {
        items: [],
        currencies: []
    },
    grimoireScore: 0,
    versions: 0
}
  , DestinyInventorySummary = {
    items: [],
    currencies: []
}
  , DefinitionSetDestinyAccountSummary = {
    races: [],
    genders: [],
    classes: [],
    activities: [],
    destinations: [],
    places: [],
    activityTypes: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    books: [],
    activityBundles: []
}
  , ServiceResultDestinyInventoryBuckets = {
    data: {
        buckets: []
    },
    definitions: {
        buckets: [],
        items: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        flags: []
    }
}
  , DestinyInventoryBuckets = {
    buckets: []
}
  , DefinitionSetDestinyInventoryBuckets = {
    buckets: [],
    items: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    flags: []
}
  , ServiceResultDestinyVaultSummary = {
    data: {
        items: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DestinyVaultSummary = {
    items: []
}
  , DefinitionSetDestinyVaultSummary = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , ServiceResultDestinyCharacterSummary = {
    data: {
        characterBase: {
            membershipId: 0,
            membershipType: 0,
            characterId: 0,
            dateLastPlayed: null ,
            minutesPlayedThisSession: 0,
            minutesPlayedTotal: 0,
            powerLevel: 0,
            raceHash: {},
            genderHash: {},
            classHash: {},
            currentActivityHash: {},
            lastCompletedStoryHash: {},
            stats: [],
            customization: {
                personality: {},
                face: {},
                skinColor: {},
                lipColor: {},
                eyeColor: {},
                hairColor: {},
                featureColor: {},
                decalColor: {},
                wearHelmet: !1,
                hairIndex: 0,
                featureIndex: 0,
                decalIndex: 0
            },
            grimoireScore: {},
            peerView: {
                equipment: []
            },
            genderType: 0,
            classType: 0,
            buildStatGroupHash: {}
        },
        levelProgression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        emblemPath: [],
        backgroundPath: [],
        emblemHash: {},
        characterLevel: 0,
        baseCharacterLevel: 0,
        isPrestigeLevel: !1,
        percentToNextLevel: {}
    },
    definitions: {
        races: [],
        genders: [],
        classes: [],
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        books: [],
        activityBundles: []
    }
}
  , DefinitionSetDestinyCharacterSummary = {
    races: [],
    genders: [],
    classes: [],
    activities: [],
    destinations: [],
    places: [],
    activityTypes: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    books: [],
    activityBundles: []
}
  , ServiceResultDestinyCharacter = {
    data: {
        characterBase: {
            membershipId: 0,
            membershipType: 0,
            characterId: 0,
            dateLastPlayed: null ,
            minutesPlayedThisSession: 0,
            minutesPlayedTotal: 0,
            powerLevel: 0,
            raceHash: {},
            genderHash: {},
            classHash: {},
            currentActivityHash: {},
            lastCompletedStoryHash: {},
            stats: [],
            customization: {
                personality: {},
                face: {},
                skinColor: {},
                lipColor: {},
                eyeColor: {},
                hairColor: {},
                featureColor: {},
                decalColor: {},
                wearHelmet: !1,
                hairIndex: 0,
                featureIndex: 0,
                decalIndex: 0
            },
            grimoireScore: {},
            peerView: {
                equipment: []
            },
            genderType: 0,
            classType: 0,
            buildStatGroupHash: {}
        },
        activities: {
            dateActivityStarted: null ,
            available: []
        },
        directorNodeStates: [],
        visibleBookHashes: [],
        defaultBookHash: {},
        inventory: {
            buckets: [],
            currencies: []
        },
        progressions: {
            progressions: [],
            levelProgression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            baseCharacterLevel: 0,
            isPrestigeLevel: !1,
            factionProgressionHash: {},
            percentToNextLevel: {}
        },
        quests: {
            quests: [],
            enabled: !1
        },
        customDyes: [],
        characterLevel: 0
    },
    definitions: {
        books: [],
        destinations: [],
        activityBundles: [],
        places: [],
        activityTypes: [],
        races: [],
        genders: [],
        classes: [],
        activities: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        flags: []
    }
}
  , DestinyCharacter = {
    characterBase: {
        membershipId: 0,
        membershipType: 0,
        characterId: 0,
        dateLastPlayed: null ,
        minutesPlayedThisSession: 0,
        minutesPlayedTotal: 0,
        powerLevel: 0,
        raceHash: {},
        genderHash: {},
        classHash: {},
        currentActivityHash: {},
        lastCompletedStoryHash: {},
        stats: [],
        customization: {
            personality: {},
            face: {},
            skinColor: {},
            lipColor: {},
            eyeColor: {},
            hairColor: {},
            featureColor: {},
            decalColor: {},
            wearHelmet: !1,
            hairIndex: 0,
            featureIndex: 0,
            decalIndex: 0
        },
        grimoireScore: {},
        peerView: {
            equipment: []
        },
        genderType: 0,
        classType: 0,
        buildStatGroupHash: {}
    },
    activities: {
        dateActivityStarted: null ,
        available: []
    },
    directorNodeStates: [],
    visibleBookHashes: [],
    defaultBookHash: {},
    inventory: {
        buckets: [],
        currencies: []
    },
    progressions: {
        progressions: [],
        levelProgression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        baseCharacterLevel: 0,
        isPrestigeLevel: !1,
        factionProgressionHash: {},
        percentToNextLevel: {}
    },
    quests: {
        quests: [],
        enabled: !1
    },
    customDyes: [],
    characterLevel: 0
}
  , DestinyCharacterActivities = {
    dateActivityStarted: null ,
    available: []
}
  , DestinyCharacterProgressions = {
    progressions: [],
    levelProgression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    },
    baseCharacterLevel: 0,
    isPrestigeLevel: !1,
    factionProgressionHash: {},
    percentToNextLevel: {}
}
  , DestinyQuestStatuses = {
    quests: [],
    enabled: !1
}
  , DefinitionSetDestinyCharacter = {
    books: [],
    destinations: [],
    activityBundles: [],
    places: [],
    activityTypes: [],
    races: [],
    genders: [],
    classes: [],
    activities: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    flags: []
}
  , ServiceResultDestinyInventory = {
    data: {
        buckets: [],
        currencies: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        flags: []
    }
}
  , DefinitionSetDestinyInventory = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    flags: []
}
  , ServiceResultDestinyInventorySummary = {
    data: {
        items: [],
        currencies: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DefinitionSetDestinyInventorySummary = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , ServiceResultDestinyInventoryItemDetail = {
    data: {
        item: {
            itemHash: {},
            bindStatus: 0,
            isEquipped: !1,
            itemInstanceId: 0,
            itemLevel: 0,
            stackSize: 0,
            qualityLevel: 0,
            stats: [],
            primaryStat: {
                statHash: {},
                value: 0,
                maximumValue: 0
            },
            canEquip: !1,
            equipRequiredLevel: 0,
            unlockFlagHashRequiredToEquip: {},
            cannotEquipReason: 0,
            damageType: 0,
            damageTypeHash: {},
            damageTypeNodeIndex: 0,
            damageTypeStepIndex: 0,
            progression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            talentGridHash: {},
            nodes: [],
            useCustomDyes: !1,
            artRegions: [],
            isEquipment: !1,
            isGridComplete: !1,
            perks: [],
            location: 0,
            transferStatus: 0,
            locked: !1,
            lockable: !1,
            objectives: [],
            state: 0
        },
        talentNodes: [],
        statsOnNodes: [],
        characterStatsToDisplay: [],
        materialItemHashes: [],
        materialQuantities: [],
        potentialItems: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        flags: []
    }
}
  , DestinyInventoryItemDetail = {
    item: {
        itemHash: {},
        bindStatus: 0,
        isEquipped: !1,
        itemInstanceId: 0,
        itemLevel: 0,
        stackSize: 0,
        qualityLevel: 0,
        stats: [],
        primaryStat: {
            statHash: {},
            value: 0,
            maximumValue: 0
        },
        canEquip: !1,
        equipRequiredLevel: 0,
        unlockFlagHashRequiredToEquip: {},
        cannotEquipReason: 0,
        damageType: 0,
        damageTypeHash: {},
        damageTypeNodeIndex: 0,
        damageTypeStepIndex: 0,
        progression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        talentGridHash: {},
        nodes: [],
        useCustomDyes: !1,
        artRegions: [],
        isEquipment: !1,
        isGridComplete: !1,
        perks: [],
        location: 0,
        transferStatus: 0,
        locked: !1,
        lockable: !1,
        objectives: [],
        state: 0
    },
    talentNodes: [],
    statsOnNodes: [],
    characterStatsToDisplay: [],
    materialItemHashes: [],
    materialQuantities: [],
    potentialItems: []
}
  , DestinyTalentNode = {
    nodeIndex: 0,
    nodeHash: {},
    state: 0,
    stateId: [],
    isActivated: !1,
    stepIndex: 0,
    materialsToUpgrade: [],
    activationGridLevel: 0,
    progressPercent: {},
    hidden: !1
}
  , DestinyTalentNodeStat = {
    currentNodeStats: [],
    nextNodeStats: []
}
  , DefinitionSetDestinyInventoryItemDetail = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    flags: []
}
  , ServiceResultDestinyCharacterActivities = {
    data: {
        dateActivityStarted: null ,
        available: []
    },
    definitions: {
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        books: [],
        activityBundles: []
    }
}
  , DefinitionSetDestinyCharacterActivities = {
    activities: [],
    destinations: [],
    places: [],
    activityTypes: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    books: [],
    activityBundles: []
}
  , ServiceResultDestinyCharacterProgressions = {
    data: {
        progressions: [],
        levelProgression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        baseCharacterLevel: 0,
        isPrestigeLevel: !1,
        factionProgressionHash: {},
        percentToNextLevel: {}
    },
    definitions: {
        progressions: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DefinitionSetDestinyCharacterProgressions = {
    progressions: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , ServiceResultDestinyTriumphSets = {
    data: {
        triumphSets: []
    },
    definitions: {
        triumphs: []
    }
}
  , DestinyTriumphSets = {
    triumphSets: []
}
  , DestinyTriumphSet = {
    triumphSetHash: {},
    triumphs: []
}
  , DestinyTriumph = {
    complete: !1,
    progress: 0,
    actual: 0,
    showProgress: !1
}
  , DefinitionSetDestinyTriumphSets = {
    triumphs: []
}
  , DestinyTriumphSetDefinition = {
    triumphSetHash: {},
    identifier: [],
    order: 0,
    title: [],
    iconPath: [],
    incompleteSubtitle: [],
    incompleteDetails: [],
    completedSubtitle: [],
    completedDetails: [],
    lockedSubtitle: [],
    lockedDetails: [],
    lockdownDate: null ,
    triumphs: [],
    isRecordBook: !1,
    recordBookHash: {},
    hash: {}
}
  , DestinyTriumphDefinition = {
    identifier: [],
    title: [],
    subtitle: [],
    iconPath: [],
    hasProgress: !1,
    minimumProgress: 0,
    maximumProgress: 0
}
  , DestinyTriumphProgressDefinition = {}
  , DestinyTriumphStateDefinition = {}
  , ServiceResultDestinyRecordBookStatus = {
    data: {
        recordBookHash: {},
        discountReward: {
            discountCode: [],
            dateClaimed: null ,
            isUsed: !1,
            url: []
        },
        isDiscountExpired: !1,
        discountExpirationDate: null ,
        isComplete: !1
    },
    definitions: {
        recordBooks: []
    }
}
  , DestinyRecordBookStatus = {
    recordBookHash: {},
    discountReward: {
        discountCode: [],
        dateClaimed: null ,
        isUsed: !1,
        url: []
    },
    isDiscountExpired: !1,
    discountExpirationDate: null ,
    isComplete: !1
}
  , DiscountCodeEntry = {
    discountCode: [],
    dateClaimed: null ,
    isUsed: !1,
    url: []
}
  , DefinitionSetDestinyRecordBookStatus = {
    recordBooks: []
}
  , ServiceResultDestinyCharacterVendors = {
    data: {
        vendors: []
    },
    definitions: {
        vendorDetails: [],
        buckets: [],
        factions: [],
        progressions: [],
        events: [],
        vendorCategories: [],
        items: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        locations: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        vendorSummaries: [],
        flags: []
    }
}
  , DestinyCharacterVendors = {
    vendors: []
}
  , DefinitionSetDestinyCharacterVendors = {
    vendorDetails: [],
    buckets: [],
    factions: [],
    progressions: [],
    events: [],
    vendorCategories: [],
    items: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    locations: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    vendorSummaries: [],
    flags: []
}
  , ServiceResultDestinyCharacterVendorSummaries = {
    data: {
        vendors: []
    },
    definitions: {
        vendorDetails: [],
        buckets: [],
        factions: [],
        progressions: [],
        events: [],
        vendorCategories: [],
        items: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        locations: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        vendorSummaries: []
    }
}
  , DestinyCharacterVendorSummaries = {
    vendors: []
}
  , DestinyCharacterVendorSummary = {
    vendorHash: {},
    ackState: {
        needsAck: !1,
        ackId: []
    },
    nextRefreshDate: null ,
    enabled: !1,
    canPurchase: !1
}
  , DefinitionSetDestinyCharacterVendorSummaries = {
    vendorDetails: [],
    buckets: [],
    factions: [],
    progressions: [],
    events: [],
    vendorCategories: [],
    items: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    locations: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    vendorSummaries: []
}
  , ServiceResultDestinyCharacterVendor = {
    data: {
        vendorHash: {},
        ackState: {
            needsAck: !1,
            ackId: []
        },
        nextRefreshDate: null ,
        enabled: !1,
        saleItemCategories: [],
        inventoryBuckets: [],
        progression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        canPurchase: !1,
        currencies: []
    },
    definitions: {
        vendorDetails: [],
        buckets: [],
        factions: [],
        progressions: [],
        events: [],
        vendorCategories: [],
        items: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        locations: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        vendorSummaries: [],
        flags: []
    }
}
  , DefinitionSetDestinyCharacterVendor = {
    vendorDetails: [],
    buckets: [],
    factions: [],
    progressions: [],
    events: [],
    vendorCategories: [],
    items: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    locations: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    vendorSummaries: [],
    flags: []
}
  , ServiceResultDestinyVendorItemDetail = {
    data: {
        itemDetail: {
            item: {
                itemHash: {},
                bindStatus: 0,
                isEquipped: !1,
                itemInstanceId: 0,
                itemLevel: 0,
                stackSize: 0,
                qualityLevel: 0,
                stats: [],
                primaryStat: {
                    statHash: {},
                    value: 0,
                    maximumValue: 0
                },
                canEquip: !1,
                equipRequiredLevel: 0,
                unlockFlagHashRequiredToEquip: {},
                cannotEquipReason: 0,
                damageType: 0,
                damageTypeHash: {},
                damageTypeNodeIndex: 0,
                damageTypeStepIndex: 0,
                progression: {
                    dailyProgress: 0,
                    weeklyProgress: 0,
                    currentProgress: 0,
                    level: 0,
                    step: 0,
                    progressToNextLevel: 0,
                    nextLevelAt: 0,
                    progressionHash: {}
                },
                talentGridHash: {},
                nodes: [],
                useCustomDyes: !1,
                artRegions: [],
                isEquipment: !1,
                isGridComplete: !1,
                perks: [],
                location: 0,
                transferStatus: 0,
                locked: !1,
                lockable: !1,
                objectives: [],
                state: 0
            },
            talentNodes: [],
            statsOnNodes: [],
            characterStatsToDisplay: [],
            materialItemHashes: [],
            materialQuantities: [],
            potentialItems: []
        },
        currencies: [],
        vendorItemIndex: 0,
        itemStatus: 0,
        costs: [],
        requiredUnlockFlags: [],
        unlockStatuses: [],
        failureIndexes: []
    },
    definitions: {
        flags: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DestinyVendorItemDetail = {
    itemDetail: {
        item: {
            itemHash: {},
            bindStatus: 0,
            isEquipped: !1,
            itemInstanceId: 0,
            itemLevel: 0,
            stackSize: 0,
            qualityLevel: 0,
            stats: [],
            primaryStat: {
                statHash: {},
                value: 0,
                maximumValue: 0
            },
            canEquip: !1,
            equipRequiredLevel: 0,
            unlockFlagHashRequiredToEquip: {},
            cannotEquipReason: 0,
            damageType: 0,
            damageTypeHash: {},
            damageTypeNodeIndex: 0,
            damageTypeStepIndex: 0,
            progression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            talentGridHash: {},
            nodes: [],
            useCustomDyes: !1,
            artRegions: [],
            isEquipment: !1,
            isGridComplete: !1,
            perks: [],
            location: 0,
            transferStatus: 0,
            locked: !1,
            lockable: !1,
            objectives: [],
            state: 0
        },
        talentNodes: [],
        statsOnNodes: [],
        characterStatsToDisplay: [],
        materialItemHashes: [],
        materialQuantities: [],
        potentialItems: []
    },
    currencies: [],
    vendorItemIndex: 0,
    itemStatus: 0,
    costs: [],
    requiredUnlockFlags: [],
    unlockStatuses: [],
    failureIndexes: []
}
  , DefinitionSetDestinyVendorItemDetail = {
    flags: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , ServiceResultDestinyAdvisorPublicData = {
    data: {
        nightfallActivityHash: {},
        heroicStrikeHashes: [],
        dailyChapterHashes: [],
        nightfallResetDate: null ,
        heroicStrikeResetDate: null ,
        dailyChapterResetDate: null ,
        dailyCrucibleHash: {},
        dailyCrucibleResetDate: null ,
        nightfallRewardIndexes: [],
        dailyCrucibleRewardIndexes: [],
        heroicStrikeRewardIndexes: [],
        dailyChapterRewardIndexes: [],
        arena: [],
        events: {
            events: []
        },
        nightfall: {
            activityBundleHash: {},
            specificActivityHash: {},
            expirationDate: null ,
            tiers: [],
            iconPath: []
        },
        heroicStrike: {
            activityBundleHash: {},
            expirationDate: null ,
            tiers: [],
            iconPath: [],
            image: []
        },
        dailyChapter: {
            activityBundleHash: {},
            expirationDate: null ,
            isCompleted: !1,
            isLocked: !1,
            tierActivityHashes: [],
            activeRewardIndexes: [],
            iconPath: []
        },
        dailyCrucible: {
            activityBundleHash: {},
            expirationDate: null ,
            isCompleted: !1,
            activeRewardIndexes: [],
            iconPath: [],
            image: []
        },
        armsDay: {
            active: !1,
            startDate: null ,
            endDate: null ,
            nextStartDate: null ,
            expirationKnown: !1,
            canPlaceOrder: !1,
            orders: [],
            testWeapons: [],
            redemptions: [],
            vendorHash: {},
            purchasedOrders: []
        },
        weeklyCrucible: [],
        availableBounties: []
    },
    definitions: {
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        books: [],
        activityBundles: [],
        scriptedSkulls: [],
        enemyRaces: [],
        flags: []
    }
}
  , DefinitionSetDestinyAdvisorPublicData = {
    activities: [],
    destinations: [],
    places: [],
    activityTypes: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    books: [],
    activityBundles: [],
    scriptedSkulls: [],
    enemyRaces: [],
    flags: []
}
  , DestinyScriptedSkullDefinition = {
    skullHash: {},
    identifier: [],
    skullName: [],
    description: [],
    iconPath: [],
    hash: {}
}
  , ServiceResultDestinyAdvisorData = {
    data: {
        nextWeeklyReset: null ,
        nextDailyReset: null ,
        previousWeeklyReset: null ,
        previousDailyReset: null ,
        vendorAdvisors: [],
        activityAdvisors: [],
        itemQuantities: [],
        areOffersAvailable: !1,
        events: [],
        bonuses: [],
        earnedCurrency: [],
        factions: [],
        arena: [],
        elderChallenge: {
            playlistActivityHash: {},
            activityHash: {},
            iconPath: [],
            rounds: [],
            objectives: [],
            hasTicket: !1,
            ticketItem: {
                itemHash: {},
                bindStatus: 0,
                isEquipped: !1,
                itemInstanceId: 0,
                itemLevel: 0,
                stackSize: 0,
                qualityLevel: 0,
                stats: [],
                primaryStat: {
                    statHash: {},
                    value: 0,
                    maximumValue: 0
                },
                canEquip: !1,
                equipRequiredLevel: 0,
                unlockFlagHashRequiredToEquip: {},
                cannotEquipReason: 0,
                damageType: 0,
                damageTypeHash: {},
                damageTypeNodeIndex: 0,
                damageTypeStepIndex: 0,
                progression: {
                    dailyProgress: 0,
                    weeklyProgress: 0,
                    currentProgress: 0,
                    level: 0,
                    step: 0,
                    progressToNextLevel: 0,
                    nextLevelAt: 0,
                    progressionHash: {}
                },
                talentGridHash: {},
                nodes: [],
                useCustomDyes: !1,
                artRegions: [],
                isEquipment: !1,
                isGridComplete: !1,
                perks: [],
                location: 0,
                transferStatus: 0,
                locked: !1,
                lockable: !1,
                objectives: [],
                state: 0
            },
            bounties: [],
            playlistSkullIndexes: [],
            playlistBonusSkullIndexes: []
        },
        trials: {
            highestWinRank: 0,
            active: !1,
            scheduled: !1,
            startDate: null ,
            expirationDate: null ,
            ticket: {
                ticketItem: {
                    itemHash: {},
                    bindStatus: 0,
                    isEquipped: !1,
                    itemInstanceId: 0,
                    itemLevel: 0,
                    stackSize: 0,
                    qualityLevel: 0,
                    stats: [],
                    primaryStat: {
                        statHash: {},
                        value: 0,
                        maximumValue: 0
                    },
                    canEquip: !1,
                    equipRequiredLevel: 0,
                    unlockFlagHashRequiredToEquip: {},
                    cannotEquipReason: 0,
                    damageType: 0,
                    damageTypeHash: {},
                    damageTypeNodeIndex: 0,
                    damageTypeStepIndex: 0,
                    progression: {
                        dailyProgress: 0,
                        weeklyProgress: 0,
                        currentProgress: 0,
                        level: 0,
                        step: 0,
                        progressToNextLevel: 0,
                        nextLevelAt: 0,
                        progressionHash: {}
                    },
                    talentGridHash: {},
                    nodes: [],
                    useCustomDyes: !1,
                    artRegions: [],
                    isEquipment: !1,
                    isGridComplete: !1,
                    perks: [],
                    location: 0,
                    transferStatus: 0,
                    locked: !1,
                    lockable: !1,
                    objectives: [],
                    state: 0
                },
                hasTicket: !1,
                maxWins: 0,
                maxLosses: 0,
                wins: 0,
                losses: 0
            },
            winDetails: [],
            buffs: [],
            currency: {
                itemHash: {},
                itemInstanceId: 0,
                value: 0
            },
            vendorHash: {},
            playlistHash: {},
            activityHashes: []
        },
        quests: {
            quests: [],
            enabled: !1
        },
        armsDay: {
            active: !1,
            startDate: null ,
            endDate: null ,
            nextStartDate: null ,
            expirationKnown: !1,
            canPlaceOrder: !1,
            orders: [],
            testWeapons: [],
            redemptions: [],
            vendorHash: {},
            purchasedOrders: []
        },
        weeklyCrucible: [],
        recordBooks: [],
        bounties: [],
        checklists: []
    },
    definitions: {
        vendorDetails: [],
        buckets: [],
        factions: [],
        progressions: [],
        events: [],
        vendorCategories: [],
        items: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        locations: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        vendorSummaries: [],
        flags: [],
        scriptedSkulls: [],
        enemyRaces: [],
        recordBooks: [],
        records: []
    }
}
  , DestinyAdvisorData = {
    nextWeeklyReset: null ,
    nextDailyReset: null ,
    previousWeeklyReset: null ,
    previousDailyReset: null ,
    vendorAdvisors: [],
    activityAdvisors: [],
    itemQuantities: [],
    areOffersAvailable: !1,
    events: [],
    bonuses: [],
    earnedCurrency: [],
    factions: [],
    arena: [],
    elderChallenge: {
        playlistActivityHash: {},
        activityHash: {},
        iconPath: [],
        rounds: [],
        objectives: [],
        hasTicket: !1,
        ticketItem: {
            itemHash: {},
            bindStatus: 0,
            isEquipped: !1,
            itemInstanceId: 0,
            itemLevel: 0,
            stackSize: 0,
            qualityLevel: 0,
            stats: [],
            primaryStat: {
                statHash: {},
                value: 0,
                maximumValue: 0
            },
            canEquip: !1,
            equipRequiredLevel: 0,
            unlockFlagHashRequiredToEquip: {},
            cannotEquipReason: 0,
            damageType: 0,
            damageTypeHash: {},
            damageTypeNodeIndex: 0,
            damageTypeStepIndex: 0,
            progression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            talentGridHash: {},
            nodes: [],
            useCustomDyes: !1,
            artRegions: [],
            isEquipment: !1,
            isGridComplete: !1,
            perks: [],
            location: 0,
            transferStatus: 0,
            locked: !1,
            lockable: !1,
            objectives: [],
            state: 0
        },
        bounties: [],
        playlistSkullIndexes: [],
        playlistBonusSkullIndexes: []
    },
    trials: {
        highestWinRank: 0,
        active: !1,
        scheduled: !1,
        startDate: null ,
        expirationDate: null ,
        ticket: {
            ticketItem: {
                itemHash: {},
                bindStatus: 0,
                isEquipped: !1,
                itemInstanceId: 0,
                itemLevel: 0,
                stackSize: 0,
                qualityLevel: 0,
                stats: [],
                primaryStat: {
                    statHash: {},
                    value: 0,
                    maximumValue: 0
                },
                canEquip: !1,
                equipRequiredLevel: 0,
                unlockFlagHashRequiredToEquip: {},
                cannotEquipReason: 0,
                damageType: 0,
                damageTypeHash: {},
                damageTypeNodeIndex: 0,
                damageTypeStepIndex: 0,
                progression: {
                    dailyProgress: 0,
                    weeklyProgress: 0,
                    currentProgress: 0,
                    level: 0,
                    step: 0,
                    progressToNextLevel: 0,
                    nextLevelAt: 0,
                    progressionHash: {}
                },
                talentGridHash: {},
                nodes: [],
                useCustomDyes: !1,
                artRegions: [],
                isEquipment: !1,
                isGridComplete: !1,
                perks: [],
                location: 0,
                transferStatus: 0,
                locked: !1,
                lockable: !1,
                objectives: [],
                state: 0
            },
            hasTicket: !1,
            maxWins: 0,
            maxLosses: 0,
            wins: 0,
            losses: 0
        },
        winDetails: [],
        buffs: [],
        currency: {
            itemHash: {},
            itemInstanceId: 0,
            value: 0
        },
        vendorHash: {},
        playlistHash: {},
        activityHashes: []
    },
    quests: {
        quests: [],
        enabled: !1
    },
    armsDay: {
        active: !1,
        startDate: null ,
        endDate: null ,
        nextStartDate: null ,
        expirationKnown: !1,
        canPlaceOrder: !1,
        orders: [],
        testWeapons: [],
        redemptions: [],
        vendorHash: {},
        purchasedOrders: []
    },
    weeklyCrucible: [],
    recordBooks: [],
    bounties: [],
    checklists: []
}
  , DestinyAdvisorElderChallenge = {
    playlistActivityHash: {},
    activityHash: {},
    iconPath: [],
    rounds: [],
    objectives: [],
    hasTicket: !1,
    ticketItem: {
        itemHash: {},
        bindStatus: 0,
        isEquipped: !1,
        itemInstanceId: 0,
        itemLevel: 0,
        stackSize: 0,
        qualityLevel: 0,
        stats: [],
        primaryStat: {
            statHash: {},
            value: 0,
            maximumValue: 0
        },
        canEquip: !1,
        equipRequiredLevel: 0,
        unlockFlagHashRequiredToEquip: {},
        cannotEquipReason: 0,
        damageType: 0,
        damageTypeHash: {},
        damageTypeNodeIndex: 0,
        damageTypeStepIndex: 0,
        progression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        talentGridHash: {},
        nodes: [],
        useCustomDyes: !1,
        artRegions: [],
        isEquipment: !1,
        isGridComplete: !1,
        perks: [],
        location: 0,
        transferStatus: 0,
        locked: !1,
        lockable: !1,
        objectives: [],
        state: 0
    },
    bounties: [],
    playlistSkullIndexes: [],
    playlistBonusSkullIndexes: []
}
  , DestinyAdvisorTrials = {
    highestWinRank: 0,
    active: !1,
    scheduled: !1,
    startDate: null ,
    expirationDate: null ,
    ticket: {
        ticketItem: {
            itemHash: {},
            bindStatus: 0,
            isEquipped: !1,
            itemInstanceId: 0,
            itemLevel: 0,
            stackSize: 0,
            qualityLevel: 0,
            stats: [],
            primaryStat: {
                statHash: {},
                value: 0,
                maximumValue: 0
            },
            canEquip: !1,
            equipRequiredLevel: 0,
            unlockFlagHashRequiredToEquip: {},
            cannotEquipReason: 0,
            damageType: 0,
            damageTypeHash: {},
            damageTypeNodeIndex: 0,
            damageTypeStepIndex: 0,
            progression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            talentGridHash: {},
            nodes: [],
            useCustomDyes: !1,
            artRegions: [],
            isEquipment: !1,
            isGridComplete: !1,
            perks: [],
            location: 0,
            transferStatus: 0,
            locked: !1,
            lockable: !1,
            objectives: [],
            state: 0
        },
        hasTicket: !1,
        maxWins: 0,
        maxLosses: 0,
        wins: 0,
        losses: 0
    },
    winDetails: [],
    buffs: [],
    currency: {
        itemHash: {},
        itemInstanceId: 0,
        value: 0
    },
    vendorHash: {},
    playlistHash: {},
    activityHashes: []
}
  , DestinyAdvisorTrialBuff = {
    itemHash: {},
    saleItem: {
        item: {
            itemHash: {},
            bindStatus: 0,
            isEquipped: !1,
            itemInstanceId: 0,
            itemLevel: 0,
            stackSize: 0,
            qualityLevel: 0,
            stats: [],
            primaryStat: {
                statHash: {},
                value: 0,
                maximumValue: 0
            },
            canEquip: !1,
            equipRequiredLevel: 0,
            unlockFlagHashRequiredToEquip: {},
            cannotEquipReason: 0,
            damageType: 0,
            damageTypeHash: {},
            damageTypeNodeIndex: 0,
            damageTypeStepIndex: 0,
            progression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            talentGridHash: {},
            nodes: [],
            useCustomDyes: !1,
            artRegions: [],
            isEquipment: !1,
            isGridComplete: !1,
            perks: [],
            location: 0,
            transferStatus: 0,
            locked: !1,
            lockable: !1,
            objectives: [],
            state: 0
        },
        vendorItemIndex: 0,
        itemStatus: 0,
        costs: [],
        requiredUnlockFlags: [],
        unlockStatuses: [],
        failureIndexes: []
    },
    isUsed: !1,
    isActive: !1
}
  , DestinyGrimoireBonusAdvisorData = {
    cardId: 0,
    cardName: [],
    statName: [],
    bonusName: [],
    bonusDescription: [],
    bonusRank: {
        statId: 0,
        rank: 0
    },
    value: 0,
    threshold: 0,
    smallImage: {
        rect: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
        },
        sheetPath: [],
        sheetSize: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
        }
    }
}
  , DestinyAdvisorChecklist = {
    identifier: [],
    checklistName: [],
    checklistDescription: [],
    entryType: 0,
    entries: []
}
  , DestinyAdvisorChecklistEntry = {
    entityId: {},
    state: !1
}
  , DestinyVendorAdvisorData = {
    specialCurrencySales: [],
    rotationAckId: [],
    needsAck: !1,
    nextRefreshDate: null ,
    pendingBounties: {
        saleItems: []
    },
    rewardClaimSales: [],
    progression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    },
    inventoryBuckets: []
}
  , DestinyAdvisorVendorSalesByCurrency = {
    currencyItemHash: {},
    saleItems: []
}
  , DestinyActivityAdvisorData = {
    activityBundleHash: {},
    materialUpgrades: {
        activityBundleHash: {},
        materialItemHash: {},
        itemSoidsUpgradable: []
    },
    raidActivities: {
        activityBundleHash: {},
        raidIdentifier: [],
        friendlyIdentifier: [],
        expirationDate: null ,
        tiers: [],
        iconPath: []
    },
    nightfall: {
        activityBundleHash: {},
        specificActivityHash: {},
        expirationDate: null ,
        tiers: [],
        iconPath: []
    },
    heroicStrike: {
        activityBundleHash: {},
        expirationDate: null ,
        tiers: [],
        iconPath: [],
        image: []
    },
    dailyChapterActivities: {
        activityBundleHash: {},
        expirationDate: null ,
        isCompleted: !1,
        isLocked: !1,
        tierActivityHashes: [],
        activeRewardIndexes: [],
        iconPath: []
    },
    dailyCrucible: {
        activityBundleHash: {},
        expirationDate: null ,
        isCompleted: !1,
        activeRewardIndexes: [],
        iconPath: [],
        image: []
    }
}
  , DestinyAdvisorItemUpgradeMaterial = {
    activityBundleHash: {},
    materialItemHash: {},
    itemSoidsUpgradable: []
}
  , DestinyAdvisorRaid = {
    activityBundleHash: {},
    raidIdentifier: [],
    friendlyIdentifier: [],
    expirationDate: null ,
    tiers: [],
    iconPath: []
}
  , DestinyAdvisorRaidTier = {
    activityHash: {},
    stepsComplete: 0,
    stepsTotal: 0,
    steps: [],
    difficultyIdentifier: [],
    activeRewardIndexes: [],
    skullIndexes: []
}
  , DestinyAdvisorRaidTierStep = {
    isComplete: !1
}
  , DestinyFaction = {
    factionHash: {},
    progression: {
        dailyProgress: 0,
        weeklyProgress: 0,
        currentProgress: 0,
        level: 0,
        step: 0,
        progressToNextLevel: 0,
        nextLevelAt: 0,
        progressionHash: {}
    }
}
  , DefinitionSetDestinyAdvisorData = {
    vendorDetails: [],
    buckets: [],
    factions: [],
    progressions: [],
    events: [],
    vendorCategories: [],
    items: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    locations: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    vendorSummaries: [],
    flags: [],
    scriptedSkulls: [],
    enemyRaces: [],
    recordBooks: [],
    records: []
}
  , ServiceResultDestinyAdvisorSpecialEvents = {
    data: {
        events: []
    },
    definitions: {
        events: [],
        progressions: [],
        vendorSummaries: [],
        factions: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        vendorCategories: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        flags: []
    }
}
  , DefinitionSetDestinyAdvisorSpecialEvents = {
    events: [],
    progressions: [],
    vendorSummaries: [],
    factions: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    vendorCategories: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    flags: []
}
  , ServiceResultDestinyBondAdvisors = {
    data: {
        accountBonds: [],
        requestorBondQuests: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DestinyBondAdvisors = {
    accountBonds: [],
    requestorBondQuests: []
}
  , DestinyAccountBondAdvisor = {
    destinyAccountId: 0,
    quests: {
        characterQuests: []
    }
}
  , DestinyAccountQuestStatuses = {
    characterQuests: []
}
  , DestinyCharacterQuestStatus = {
    characterId: 0,
    quests: []
}
  , DefinitionSetDestinyBondAdvisors = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , ServiceResultDestinyVendorResult = {
    data: {
        vendor: {
            vendorHash: {},
            ackState: {
                needsAck: !1,
                ackId: []
            },
            nextRefreshDate: null ,
            enabled: !1,
            saleItemCategories: [],
            inventoryBuckets: [],
            progression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            canPurchase: !1,
            currencies: []
        },
        featuredSaleIndexes: [],
        itemMetadata: [],
        relatedItemSections: [],
        defaultBackgroundPath: [],
        defaultThumbnailPath: []
    },
    definitions: {
        vendorDetails: [],
        buckets: [],
        factions: [],
        progressions: [],
        events: [],
        vendorCategories: [],
        items: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        locations: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: [],
        vendorSummaries: [],
        flags: []
    }
}
  , DestinyVendorResult = {
    vendor: {
        vendorHash: {},
        ackState: {
            needsAck: !1,
            ackId: []
        },
        nextRefreshDate: null ,
        enabled: !1,
        saleItemCategories: [],
        inventoryBuckets: [],
        progression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        canPurchase: !1,
        currencies: []
    },
    featuredSaleIndexes: [],
    itemMetadata: [],
    relatedItemSections: [],
    defaultBackgroundPath: [],
    defaultThumbnailPath: []
}
  , DestinyItemMetadata = {
    itemHash: {},
    thumb: [],
    bg: [],
    images: [],
    videos: [],
    overrideDescription: [],
    enable3DPreview: !1,
    disableVideoAutoplay: !1,
    enableVideoSound: !1,
    sourceItemHash: {}
}
  , DefinitionSetDestinyVendorResult = {
    vendorDetails: [],
    buckets: [],
    factions: [],
    progressions: [],
    events: [],
    vendorCategories: [],
    items: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    locations: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: [],
    vendorSummaries: [],
    flags: []
}
  , ServiceResultDestinyVendorItemResult = {
    data: {
        saleItem: {
            itemDetail: {
                item: {
                    itemHash: {},
                    bindStatus: 0,
                    isEquipped: !1,
                    itemInstanceId: 0,
                    itemLevel: 0,
                    stackSize: 0,
                    qualityLevel: 0,
                    stats: [],
                    primaryStat: {
                        statHash: {},
                        value: 0,
                        maximumValue: 0
                    },
                    canEquip: !1,
                    equipRequiredLevel: 0,
                    unlockFlagHashRequiredToEquip: {},
                    cannotEquipReason: 0,
                    damageType: 0,
                    damageTypeHash: {},
                    damageTypeNodeIndex: 0,
                    damageTypeStepIndex: 0,
                    progression: {
                        dailyProgress: 0,
                        weeklyProgress: 0,
                        currentProgress: 0,
                        level: 0,
                        step: 0,
                        progressToNextLevel: 0,
                        nextLevelAt: 0,
                        progressionHash: {}
                    },
                    talentGridHash: {},
                    nodes: [],
                    useCustomDyes: !1,
                    artRegions: [],
                    isEquipment: !1,
                    isGridComplete: !1,
                    perks: [],
                    location: 0,
                    transferStatus: 0,
                    locked: !1,
                    lockable: !1,
                    objectives: [],
                    state: 0
                },
                talentNodes: [],
                statsOnNodes: [],
                characterStatsToDisplay: [],
                materialItemHashes: [],
                materialQuantities: [],
                potentialItems: []
            },
            currencies: [],
            vendorItemIndex: 0,
            itemStatus: 0,
            costs: [],
            requiredUnlockFlags: [],
            unlockStatuses: [],
            failureIndexes: []
        },
        itemMetadata: [],
        otherActiveSales: []
    },
    definitions: {
        flags: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DestinyVendorItemResult = {
    saleItem: {
        itemDetail: {
            item: {
                itemHash: {},
                bindStatus: 0,
                isEquipped: !1,
                itemInstanceId: 0,
                itemLevel: 0,
                stackSize: 0,
                qualityLevel: 0,
                stats: [],
                primaryStat: {
                    statHash: {},
                    value: 0,
                    maximumValue: 0
                },
                canEquip: !1,
                equipRequiredLevel: 0,
                unlockFlagHashRequiredToEquip: {},
                cannotEquipReason: 0,
                damageType: 0,
                damageTypeHash: {},
                damageTypeNodeIndex: 0,
                damageTypeStepIndex: 0,
                progression: {
                    dailyProgress: 0,
                    weeklyProgress: 0,
                    currentProgress: 0,
                    level: 0,
                    step: 0,
                    progressToNextLevel: 0,
                    nextLevelAt: 0,
                    progressionHash: {}
                },
                talentGridHash: {},
                nodes: [],
                useCustomDyes: !1,
                artRegions: [],
                isEquipment: !1,
                isGridComplete: !1,
                perks: [],
                location: 0,
                transferStatus: 0,
                locked: !1,
                lockable: !1,
                objectives: [],
                state: 0
            },
            talentNodes: [],
            statsOnNodes: [],
            characterStatsToDisplay: [],
            materialItemHashes: [],
            materialQuantities: [],
            potentialItems: []
        },
        currencies: [],
        vendorItemIndex: 0,
        itemStatus: 0,
        costs: [],
        requiredUnlockFlags: [],
        unlockStatuses: [],
        failureIndexes: []
    },
    itemMetadata: [],
    otherActiveSales: []
}
  , DefinitionSetDestinyVendorItemResult = {
    flags: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , DestinyEquipItemResults = {
    equipResults: [],
    character: {
        characterBase: {
            membershipId: 0,
            membershipType: 0,
            characterId: 0,
            dateLastPlayed: null ,
            minutesPlayedThisSession: 0,
            minutesPlayedTotal: 0,
            powerLevel: 0,
            raceHash: {},
            genderHash: {},
            classHash: {},
            currentActivityHash: {},
            lastCompletedStoryHash: {},
            stats: [],
            customization: {
                personality: {},
                face: {},
                skinColor: {},
                lipColor: {},
                eyeColor: {},
                hairColor: {},
                featureColor: {},
                decalColor: {},
                wearHelmet: !1,
                hairIndex: 0,
                featureIndex: 0,
                decalIndex: 0
            },
            grimoireScore: {},
            peerView: {
                equipment: []
            },
            genderType: 0,
            classType: 0,
            buildStatGroupHash: {}
        },
        activities: {
            dateActivityStarted: null ,
            available: []
        },
        directorNodeStates: [],
        visibleBookHashes: [],
        defaultBookHash: {},
        inventory: {
            buckets: [],
            currencies: []
        },
        progressions: {
            progressions: [],
            levelProgression: {
                dailyProgress: 0,
                weeklyProgress: 0,
                currentProgress: 0,
                level: 0,
                step: 0,
                progressToNextLevel: 0,
                nextLevelAt: 0,
                progressionHash: {}
            },
            baseCharacterLevel: 0,
            isPrestigeLevel: !1,
            factionProgressionHash: {},
            percentToNextLevel: {}
        },
        quests: {
            quests: [],
            enabled: !1
        },
        customDyes: [],
        characterLevel: 0
    },
    summary: {
        characterBase: {
            membershipId: 0,
            membershipType: 0,
            characterId: 0,
            dateLastPlayed: null ,
            minutesPlayedThisSession: 0,
            minutesPlayedTotal: 0,
            powerLevel: 0,
            raceHash: {},
            genderHash: {},
            classHash: {},
            currentActivityHash: {},
            lastCompletedStoryHash: {},
            stats: [],
            customization: {
                personality: {},
                face: {},
                skinColor: {},
                lipColor: {},
                eyeColor: {},
                hairColor: {},
                featureColor: {},
                decalColor: {},
                wearHelmet: !1,
                hairIndex: 0,
                featureIndex: 0,
                decalIndex: 0
            },
            grimoireScore: {},
            peerView: {
                equipment: []
            },
            genderType: 0,
            classType: 0,
            buildStatGroupHash: {}
        },
        levelProgression: {
            dailyProgress: 0,
            weeklyProgress: 0,
            currentProgress: 0,
            level: 0,
            step: 0,
            progressToNextLevel: 0,
            nextLevelAt: 0,
            progressionHash: {}
        },
        emblemPath: [],
        backgroundPath: [],
        emblemHash: {},
        characterLevel: 0,
        baseCharacterLevel: 0,
        isPrestigeLevel: !1,
        percentToNextLevel: {}
    }
}
  , DestinyEquipItemResult = {
    itemInstanceId: 0,
    equipStatus: 0
}
  , DestinyBuyItemResult = {
    status: 0
}
  , DestinyHistoricalStatsDefinition = {
    statId: [],
    group: 0,
    periodTypes: [],
    modes: [],
    category: 0,
    statName: [],
    statDescription: [],
    unitType: 0,
    iconImage: [],
    mergeMethod: 0,
    unitLabel: [],
    weight: 0
}
  , DestinyHistoricalStatsByPeriod = {
    allTime: [],
    allTimeTier1: [],
    allTimeTier2: [],
    allTimeTier3: [],
    daily: [],
    monthly: []
}
  , DestinyHistoricalStatsPeriodGroup = {
    period: null ,
    activityDetails: {
        referenceId: {},
        instanceId: 0,
        mode: 0,
        activityTypeHashOverride: {},
        isPrivate: !1
    },
    values: []
}
  , DestinyHistoricalStatsActivity = {
    referenceId: {},
    instanceId: 0,
    mode: 0,
    activityTypeHashOverride: {},
    isPrivate: !1
}
  , DestinyHistoricalStatsValue = {
    statId: [],
    basic: {
        value: 0,
        displayValue: []
    },
    pga: {
        value: 0,
        displayValue: []
    },
    weighted: {
        value: 0,
        displayValue: []
    }
}
  , DestinyHistoricalStatsAccountResult = {
    mergedDeletedCharacters: {
        results: [],
        merged: {
            allTime: [],
            allTimeTier1: [],
            allTimeTier2: [],
            allTimeTier3: [],
            daily: [],
            monthly: []
        }
    },
    mergedAllCharacters: {
        results: [],
        merged: {
            allTime: [],
            allTimeTier1: [],
            allTimeTier2: [],
            allTimeTier3: [],
            daily: [],
            monthly: []
        }
    },
    characters: []
}
  , DestinyHistoricalStatsWithMerged = {
    results: [],
    merged: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
    }
}
  , DestinyHistoricalStatsPerCharacter = {
    characterId: 0,
    deleted: !1,
    results: [],
    merged: {
        allTime: [],
        allTimeTier1: [],
        allTimeTier2: [],
        allTimeTier3: [],
        daily: [],
        monthly: []
    }
}
  , ServiceResultDestinyActivityHistoryResults = {
    data: {
        activities: []
    },
    definitions: {
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        books: [],
        activityBundles: []
    }
}
  , DestinyActivityHistoryResults = {
    activities: []
}
  , DefinitionSetDestinyActivityHistoryResults = {
    activities: [],
    destinations: [],
    places: [],
    activityTypes: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    books: [],
    activityBundles: []
}
  , ServiceResultDestinyHistoricalWeaponStatsData = {
    data: {
        weapons: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DestinyHistoricalWeaponStatsData = {
    weapons: []
}
  , DestinyHistoricalWeaponStats = {
    referenceId: {},
    values: []
}
  , DefinitionSetDestinyHistoricalWeaponStatsData = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , DestinyLeaderboard = {
    statId: [],
    entries: []
}
  , DestinyLeaderboardEntry = {
    rank: 0,
    player: {
        destinyUserInfo: {
            supplementalDisplayName: [],
            iconPath: [],
            membershipType: 0,
            membershipId: 0,
            displayName: []
        },
        characterClass: [],
        characterLevel: 0,
        lightLevel: 0,
        bungieNetUserInfo: {
            supplementalDisplayName: [],
            iconPath: [],
            membershipType: 0,
            membershipId: 0,
            displayName: []
        },
        clanName: [],
        clanTag: []
    },
    characterId: 0,
    value: {
        statId: [],
        basic: {
            value: 0,
            displayValue: []
        },
        pga: {
            value: 0,
            displayValue: []
        },
        weighted: {
            value: 0,
            displayValue: []
        }
    }
}
  , DestinyPlayer = {
    destinyUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    characterClass: [],
    characterLevel: 0,
    lightLevel: 0,
    bungieNetUserInfo: {
        supplementalDisplayName: [],
        iconPath: [],
        membershipType: 0,
        membershipId: 0,
        displayName: []
    },
    clanName: [],
    clanTag: []
}
  , ServiceResultDestinyPostGameCarnageReportData = {
    data: {
        period: null ,
        activityDetails: {
            referenceId: {},
            instanceId: 0,
            mode: 0,
            activityTypeHashOverride: {},
            isPrivate: !1
        },
        entries: [],
        teams: []
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DestinyPostGameCarnageReportData = {
    period: null ,
    activityDetails: {
        referenceId: {},
        instanceId: 0,
        mode: 0,
        activityTypeHashOverride: {},
        isPrivate: !1
    },
    entries: [],
    teams: []
}
  , DestinyPostGameCarnageReportEntry = {
    standing: 0,
    score: {
        statId: [],
        basic: {
            value: 0,
            displayValue: []
        },
        pga: {
            value: 0,
            displayValue: []
        },
        weighted: {
            value: 0,
            displayValue: []
        }
    },
    player: {
        destinyUserInfo: {
            supplementalDisplayName: [],
            iconPath: [],
            membershipType: 0,
            membershipId: 0,
            displayName: []
        },
        characterClass: [],
        characterLevel: 0,
        lightLevel: 0,
        bungieNetUserInfo: {
            supplementalDisplayName: [],
            iconPath: [],
            membershipType: 0,
            membershipId: 0,
            displayName: []
        },
        clanName: [],
        clanTag: []
    },
    characterId: 0,
    values: [],
    extended: {
        weapons: [],
        values: []
    }
}
  , DestinyPostGameCarnageReportExtendedData = {
    weapons: [],
    values: []
}
  , DestinyPostGameCarnageReportTeamEntry = {
    teamId: 0,
    standing: {
        statId: [],
        basic: {
            value: 0,
            displayValue: []
        },
        pga: {
            value: 0,
            displayValue: []
        },
        weighted: {
            value: 0,
            displayValue: []
        }
    },
    score: {
        statId: [],
        basic: {
            value: 0,
            displayValue: []
        },
        pga: {
            value: 0,
            displayValue: []
        },
        weighted: {
            value: 0,
            displayValue: []
        }
    },
    teamName: []
}
  , DefinitionSetDestinyPostGameCarnageReportData = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , ServiceResultDestinyAggregateActivityResults = {
    data: {
        activities: []
    },
    definitions: {
        activities: [],
        destinations: [],
        places: [],
        activityTypes: [],
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        books: [],
        activityBundles: []
    }
}
  , DestinyAggregateActivityResults = {
    activities: []
}
  , DestinyAggregateActivityStats = {
    activityHash: {},
    values: []
}
  , DefinitionSetDestinyAggregateActivityResults = {
    activities: [],
    destinations: [],
    places: [],
    activityTypes: [],
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    books: [],
    activityBundles: []
}
  , ServiceResultDestinyExcellenceBadges = {
    data: {
        badges: []
    },
    definitions: {
        badges: []
    }
}
  , DestinyExcellenceBadges = {
    badges: []
}
  , DestinyExcellenceBadge = {
    badgeHashId: {},
    ackState: {
        needsAck: !1,
        ackId: []
    }
}
  , DefinitionSetDestinyExcellenceBadges = {
    badges: []
}
  , DestinyExcellenceBadgeDefinition = {
    badgeHashId: {},
    badgeName: [],
    badgeDescription: [],
    tier: 0,
    largeImageUrl: [],
    smallImageUrl: [],
    hash: {}
}
  , DestinyExcellenceBadgeInternalDefinition = {
    requiredUnlockFlagStringIds: [],
    requiredUnlockFlagHashIds: []
}
  , GrimoirePlayerDataResult = {
    data: {
        ackState: {
            needsAck: !1,
            ackId: []
        },
        score: 0,
        cardCollection: [],
        cardsToHide: [],
        bonuses: []
    },
    cardDefinitions: []
}
  , GrimoirePlayerData = {
    ackState: {
        needsAck: !1,
        ackId: []
    },
    score: 0,
    cardCollection: [],
    cardsToHide: [],
    bonuses: []
}
  , GrimoireUnlockedCard = {
    cardId: 0,
    score: 0,
    points: 0,
    statisticCollection: [],
    ackState: {
        needsAck: !1,
        ackId: []
    }
}
  , GrimoireUnlockedStatistic = {
    statNumber: 0,
    value: 0,
    displayValue: [],
    rankCollection: []
}
  , GrimoireUnlockedRank = {
    rank: 0,
    points: 0,
    ackState: {
        needsAck: !1,
        ackId: []
    }
}
  , DestinyGrimoireDefinition = {
    themeCollection: []
}
  , DestinyGrimoireThemeDefinition = {
    themeId: [],
    themeName: [],
    themeIntro: [],
    themeDescription: [],
    normalResolution: {
        image: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        },
        smallImage: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        }
    },
    highResolution: {
        image: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        },
        smallImage: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        }
    },
    pageCollection: []
}
  , DestinyGrimoirePageDefinition = {
    pageId: [],
    pageName: [],
    pageIntro: [],
    pageDescription: [],
    normalResolution: {
        image: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        },
        smallImage: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        }
    },
    highResolution: {
        image: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        },
        smallImage: {
            rect: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            },
            sheetPath: [],
            sheetSize: {
                x: 0,
                y: 0,
                height: 0,
                width: 0
            }
        }
    },
    cardCollection: [],
    cardBriefs: []
}
  , DestinyGrimoireCardBrief = {
    cardId: 0,
    points: 0,
    totalPoints: 0
}
  , ServiceResultDestinyExplorerItems = {
    data: {
        itemHashes: [],
        totalResults: 0,
        hasMore: !1,
        query: {
            itemsPerPage: 0,
            currentPage: 0
        },
        useTotalResults: !1
    },
    definitions: {
        items: [],
        buckets: [],
        stats: [],
        perks: [],
        talentGrids: [],
        statGroups: [],
        progressionMappings: [],
        itemCategories: [],
        sources: [],
        objectives: [],
        progressions: [],
        damageTypes: [],
        materialRequirements: [],
        unlockValues: [],
        vendorDetails: [],
        locations: [],
        factions: [],
        events: [],
        vendorCategories: [],
        vendorSummaries: [],
        destinations: [],
        activities: [],
        books: [],
        places: [],
        activityTypes: [],
        activityBundles: []
    }
}
  , DestinyExplorerItems = {
    itemHashes: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , DefinitionSetDestinyExplorerItems = {
    items: [],
    buckets: [],
    stats: [],
    perks: [],
    talentGrids: [],
    statGroups: [],
    progressionMappings: [],
    itemCategories: [],
    sources: [],
    objectives: [],
    progressions: [],
    damageTypes: [],
    materialRequirements: [],
    unlockValues: [],
    vendorDetails: [],
    locations: [],
    factions: [],
    events: [],
    vendorCategories: [],
    vendorSummaries: [],
    destinations: [],
    activities: [],
    books: [],
    places: [],
    activityTypes: [],
    activityBundles: []
}
  , ServiceResultDestinyExplorerNodeSteps = {
    data: {
        stepHashes: [],
        totalResults: 0,
        hasMore: !1,
        query: {
            itemsPerPage: 0,
            currentPage: 0
        },
        useTotalResults: !1
    },
    definitions: {
        nodeSteps: [],
        perks: [],
        stats: []
    }
}
  , DestinyExplorerNodeSteps = {
    stepHashes: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , DefinitionSetDestinyExplorerNodeSteps = {
    nodeSteps: [],
    perks: [],
    stats: []
}
  , DestinyNodeStepSummaryDefinition = {
    nodeStepHash: {},
    nodeStepName: [],
    nodeStepDescription: [],
    icon: [],
    perkHashes: [],
    statHashes: [],
    affectsQuality: !1,
    stepGroups: {
        weaponPerformance: 0,
        impactEffects: 0,
        guardianAttributes: 0,
        lightAbilities: 0,
        damageTypes: 0
    },
    hash: {}
}
  , SearchResultOfCommunityLiveStatus = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , SearchResultOfAdminCommunityLiveStatus = {
    results: [],
    totalResults: 0,
    hasMore: !1,
    query: {
        itemsPerPage: 0,
        currentPage: 0
    },
    useTotalResults: !1
}
  , AdminCommunityLiveStatus = {
    dateBanned: null ,
    bannedByMembershipId: 0,
    isBanned: !1,
    featuredByMembershipId: 0,
    bnetMembershipId: 0,
    dateStatusUpdated: null ,
    url: [],
    partnershipIdentifier: [],
    partnershipType: 0,
    thumbnail: [],
    destinyAccountId: 0,
    destinyCharacterId: 0,
    destinyMembershipType: 0,
    currentActivityHash: {},
    activityMode: 0,
    dateLastPlayed: null ,
    emblemHash: {},
    dateStreamStarted: null ,
    locale: [],
    currentViewers: 0,
    followers: 0,
    overallViewers: 0,
    isFeatured: !1,
    title: [],
    activityModeHash: {},
    dateFeatured: null
}
  , CoreSettingsConfiguration = {
    ignoreReasons: [],
    forumCategories: [],
    groupAvatars: [],
    destinyMembershipTypes: [],
    systems: [],
    recruitmentPlatformTags: [],
    recruitmentMiscTags: [],
    recruitmentActivities: []
}
  , CoreSetting = {
    identifier: [],
    isDefault: !1,
    displayName: [],
    summary: [],
    imagePath: [],
    childSettings: []
}
  , CoreSystem = {
    enabled: !1,
    parameters: []
}
  , GlobalAlert = {
    AlertKey: [],
    AlertHtml: [],
    AlertTimestamp: null ,
    AlertLink: [],
    AlertLevel: 0,
    AlertType: 0,
    StreamInfo: {
        ChannelName: []
    }
}
  , bungieNetPlatform = bungieNetPlatform || {}
  , currentRequests = [];
(function(n) {
    var t = bungieNetPlatform;
    t.platformSettings = {
        initialize: function(i) {
            t.platformSettings = n.extend(t.platformSettings, n.extend({
                platformUrl: "/Platform",
                renderContentEditLinks: !1
            }, i))
        }
    }
})(jQuery),
function(n) {
    function i(t, i, r, u, f) {
        if (t.ErrorCode == 1)
            i(t.Response),
            u.resolve(t.Response);
        else {
            t.ErrorCode == 99 && n(document).trigger("userLogOut");
            var e = {
                errorCode: t.ErrorCode,
                errorStatus: t.ErrorStatus,
                errorMessage: t.Message,
                messageData: t.MessageData,
                debug: t.Debug
            };
            r(e, t.Response, f);
            u.reject(e)
        }
        currentRequest = currentRequests.splice(n.inArray(f, currentRequests), 1)
    }
    function r(t, i, r, u, f) {
        var e = {
            errorCode: 2,
            errorStatus: "TransportException",
            errorMessage: Localizer.Messages.transportexception,
            messageData: []
        };
        u(e, null , t);
        f.reject(e);
        currentRequest = currentRequests.splice(n.inArray(t, currentRequests), 1)
    }
    var t = bungieNetPlatform;
    t.getCSRFHeader = function() {
        var n = Cookies.Get(ServerVars.SessionContextCookieName);
        return n ? {
            "x-csrf": n
        } : {}
    }
    ;
    t.getHeaders = function() {
        var n = t.getCSRFHeader();
        return n["X-API-Key"] = "10E792629C2A47E19356B8A79EEFA640",
        n
    }
    ;
    t.buildUrl = function(n, i, r) {
        var f = t.platformSettings.platformUrl + n
          , u = "?lc=" + t.platformSettings.currentLocale + "&fmt=true&lcin=" + t.platformSettings.locInherit;
        return typeof i != "undefined" && i !== "" && (u += "&" + i),
        typeof r != "undefined" && (u += r),
        f + u
    }
    ;
    t.addParam = function(n, t, i) {
        return typeof i != "undefined" && i !== null && (n.length > 0 && (n += "&"),
        n += t + "=" + encodeURIComponent(i)),
        n
    }
    ;
    t.pushGa = function(n, t) {
        var i = "-"
          , r = Cookies.Get(ServerVars.WebMembershipCookieName);
        r != null && (i = "SignedIn");
        window.ga && ga("send", "event", {
            hitType: "event",
            eventCategory: "Platform",
            eventAction: n + "_" + t,
            eventLabel: i
        })
    }
    ;
    t.serviceLibrary = {
        post: function(u, f, e, o) {
            var s = n.Deferred()
              , h = n.ajax({
                type: "POST",
                url: u,
                data: JSON.stringify(f),
                dataType: "json",
                contentType: "application/json; charset=utf-8;",
                processData: !1,
                headers: t.getHeaders(),
                success: function(n, t, r) {
                    i(n, e, o, s, r)
                },
                error: function(n, t, i) {
                    r(n, t, i, o, s)
                }
            });
            return currentRequests.push(h),
            s.promise()
        },
        get: function(u, f, e) {
            var o = n.Deferred()
              , s = n.ajax({
                type: "GET",
                url: u,
                dataType: "json",
                headers: t.getHeaders(),
                success: function(n, t, r) {
                    i(n, f, e, o, r)
                },
                error: function(n, t, i) {
                    r(n, t, i, e, o)
                }
            });
            return currentRequests.push(s),
            o.promise()
        },
        postForm: function(u, f, e, o, s) {
            var h = n.Deferred()
              , c = n.ajax({
                type: "POST",
                url: u,
                data: f,
                headers: t.getHeaders(),
                cache: !1,
                dataType: e ? "json" : null ,
                contentType: !1,
                processData: !1,
                success: function(n, t, r) {
                    if (e)
                        i(n, o, s, h, r);
                    else {
                        var u = JSON.parse(n);
                        o(u);
                        h.resolve(u)
                    }
                },
                error: function(n, t, i) {
                    r(n, t, i, s, h)
                }
            });
            return currentRequests.push(c),
            h.promise()
        }
    }
}(jQuery),
function(n) {
    var t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai, vi, yi, pi, wi, bi, ki, di, gi, nr, tr, ir, rr, ur, fr, er, or, sr, hr, cr, lr, ar, vr, yr, pr, wr, br, kr, dr, gr, nu, tu, iu, ru, uu, fu, eu, ou, su, hu, cu, lu, au, vu, yu, pu, wu, bu, ku, du, gu, nf, tf, rf, uf, ff, ef, of, sf, hf, cf, lf, af, vf, yf, pf, wf, bf, kf, df, gf, ne, te;
    (function(n) {
        n[n.Triumphs = 0] = "Triumphs";
        n[n.GearManager = 1] = "GearManager";
        n[n.Nux = 2] = "Nux";
        n[n.TwitchLink = 3] = "TwitchLink"
    })(n.GlobalAcknowledgementItem || (n.GlobalAcknowledgementItem = {}));
    t = n.GlobalAcknowledgementItem,
    function(n) {
        n[n.NotIgnored = 0] = "NotIgnored";
        n[n.IgnoredUser = 1] = "IgnoredUser";
        n[n.IgnoredGroup = 2] = "IgnoredGroup";
        n[n.IgnoredByGroup = 4] = "IgnoredByGroup";
        n[n.IgnoredPost = 8] = "IgnoredPost";
        n[n.IgnoredTag = 16] = "IgnoredTag";
        n[n.IgnoredGlobal = 32] = "IgnoredGlobal"
    }(n.IgnoreStatus || (n.IgnoreStatus = {}));
    i = n.IgnoreStatus,
    function(n) {
        n[n.All = 0] = "All";
        n[n.Post = 1] = "Post";
        n[n.Group = 2] = "Group";
        n[n.User = 3] = "User";
        n[n.Tag = 4] = "Tag";
        n[n.GroupProfile = 5] = "GroupProfile";
        n[n.UserProfile = 6] = "UserProfile";
        n[n.UserPrivateMessage = 7] = "UserPrivateMessage";
        n[n.GroupWallPost = 8] = "GroupWallPost";
        n[n.PrivateMessage = 9] = "PrivateMessage"
    }(n.IgnoredItemType || (n.IgnoredItemType = {}));
    r = n.IgnoredItemType,
    function(n) {
        n[n.Unknown = 0] = "Unknown";
        n[n.Warning = 1] = "Warning";
        n[n.SevenDayBan = 2] = "SevenDayBan";
        n[n.ThirtyDayBan = 3] = "ThirtyDayBan";
        n[n.PermanentBan = 255] = "PermanentBan"
    }(n.ModeratorRequestedPunishment || (n.ModeratorRequestedPunishment = {}));
    u = n.ModeratorRequestedPunishment,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Week = 1] = "Week";
        n[n.TwoWeeks = 2] = "TwoWeeks";
        n[n.ThreeWeeks = 3] = "ThreeWeeks";
        n[n.Month = 4] = "Month";
        n[n.ThreeMonths = 5] = "ThreeMonths";
        n[n.SixMonths = 6] = "SixMonths";
        n[n.Year = 7] = "Year";
        n[n.Forever = 8] = "Forever";
        n[n.ThreeMinutes = 9] = "ThreeMinutes";
        n[n.Hour = 10] = "Hour";
        n[n.ThirtyDays = 11] = "ThirtyDays"
    }(n.IgnoreLength || (n.IgnoreLength = {}));
    f = n.IgnoreLength,
    function(n) {
        n[n.Unresolved = 0] = "Unresolved";
        n[n.Innocent = 1] = "Innocent";
        n[n.GuiltyBan = 2] = "GuiltyBan";
        n[n.GuiltyBlastBan = 3] = "GuiltyBlastBan";
        n[n.GuiltyWarn = 4] = "GuiltyWarn";
        n[n.GuiltyAlias = 5] = "GuiltyAlias";
        n[n.ResolveNoAction = 6] = "ResolveNoAction"
    }(n.ReportResolutionStatus || (n.ReportResolutionStatus = {}));
    e = n.ReportResolutionStatus,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Twitch = 1] = "Twitch"
    }(n.PartnershipType || (n.PartnershipType = {}));
    o = n.PartnershipType,
    function(n) {
        n[n.Viewers = 0] = "Viewers";
        n[n.Trending = 1] = "Trending";
        n[n.OverallViewers = 2] = "OverallViewers";
        n[n.Followers = 3] = "Followers"
    }(n.CommunityStatusSort || (n.CommunityStatusSort = {}));
    s = n.CommunityStatusSort,
    function(n) {
        n[n.None = 0] = "None";
        n[n.TigerXbox = 1] = "TigerXbox";
        n[n.TigerPsn = 2] = "TigerPsn";
        n[n.TigerDemon = 10] = "TigerDemon";
        n[n.BungieNext = 254] = "BungieNext";
        n[n.All = -1] = "All"
    }(n.BungieMembershipType || (n.BungieMembershipType = {}));
    h = n.BungieMembershipType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Xuid = 1] = "Xuid";
        n[n.Psnid = 2] = "Psnid";
        n[n.Wlid = 3] = "Wlid";
        n[n.Fake = 4] = "Fake";
        n[n.Facebook = 5] = "Facebook";
        n[n.Google = 8] = "Google";
        n[n.Windows = 9] = "Windows";
        n[n.DemonId = 10] = "DemonId"
    }(n.BungieCredentialType || (n.BungieCredentialType = {}));
    c = n.BungieCredentialType,
    function(n) {
        n[n.Unknown = 0] = "Unknown";
        n[n.Xbox360 = 1] = "Xbox360";
        n[n.Playstation3 = 2] = "Playstation3";
        n[n.AndroidPhone = 3] = "AndroidPhone";
        n[n.AndroidTablet = 4] = "AndroidTablet";
        n[n.ApplePhone = 5] = "ApplePhone";
        n[n.AppleTablet = 6] = "AppleTablet";
        n[n.WebBrowser = 7] = "WebBrowser";
        n[n.NativeWindows = 8] = "NativeWindows";
        n[n.NativeMac = 9] = "NativeMac";
        n[n.WindowsPhone = 10] = "WindowsPhone";
        n[n.WindowsTablet = 11] = "WindowsTablet";
        n[n.XboxOne = 12] = "XboxOne";
        n[n.Playstation4 = 13] = "Playstation4";
        n[n.Fake = 255] = "Fake"
    }(n.ClientDeviceType || (n.ClientDeviceType = {}));
    l = n.ClientDeviceType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Twitter = 1] = "Twitter";
        n[n.Facebook = 2] = "Facebook";
        n[n.TwitterHelp = 4] = "TwitterHelp"
    }(n.ExternalService || (n.ExternalService = {}));
    a = n.ExternalService,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Bungie = 1] = "Bungie";
        n[n.PlayerSupport = 2] = "PlayerSupport";
        n[n.Mentor = 4] = "Mentor";
        n[n.Ninja = 8] = "Ninja";
        n[n.GroupAdmin = 16] = "GroupAdmin";
        n[n.GroupFounder = 32] = "GroupFounder";
        n[n.FounderInAllGroups = 64] = "FounderInAllGroups"
    }(n.AdminHistoryMembershipFlags || (n.AdminHistoryMembershipFlags = {}));
    v = n.AdminHistoryMembershipFlags,
    function(n) {
        n[n.None = 0] = "None";
        n[n.ForumPostBan = 1] = "ForumPostBan";
        n[n.UserBan = 2] = "UserBan";
        n[n.UserWarning = 3] = "UserWarning";
        n[n.ForumTopicPost = 4] = "ForumTopicPost";
        n[n.ForumReply = 5] = "ForumReply";
        n[n.MarkAsAnswer = 6] = "MarkAsAnswer";
        n[n.UserProfileEdit = 7] = "UserProfileEdit";
        n[n.UnmarkAsAnswer = 8] = "UnmarkAsAnswer";
        n[n.CommunityContentApproved = 9] = "CommunityContentApproved";
        n[n.CommunityContentRejected = 10] = "CommunityContentRejected";
        n[n.GroupPostBan = 11] = "GroupPostBan";
        n[n.ForumPostUnban = 12] = "ForumPostUnban";
        n[n.TagAlias = 13] = "TagAlias";
        n[n.TagUnalias = 14] = "TagUnalias";
        n[n.GroupProfileBan = 15] = "GroupProfileBan";
        n[n.ForumPostEdit = 16] = "ForumPostEdit";
        n[n.EditedPlayerSupportFlags = 17] = "EditedPlayerSupportFlags";
        n[n.EditedPlayerSupportText = 18] = "EditedPlayerSupportText";
        n[n.GroupSettingsEdit = 19] = "GroupSettingsEdit";
        n[n.GroupFounderChange = 20] = "GroupFounderChange";
        n[n.GroupMemberPromotionToAdmin = 21] = "GroupMemberPromotionToAdmin";
        n[n.GroupAdminDemotionToMember = 22] = "GroupAdminDemotionToMember";
        n[n.GroupKickBan = 23] = "GroupKickBan";
        n[n.GroupKick = 24] = "GroupKick";
        n[n.GroupUnban = 25] = "GroupUnban";
        n[n.ForumDeleteTopic = 26] = "ForumDeleteTopic";
        n[n.UserProfileBan = 27] = "UserProfileBan";
        n[n.UserMessageBan = 28] = "UserMessageBan";
        n[n.GroupWallModerate = 29] = "GroupWallModerate";
        n[n.GroupWallBan = 30] = "GroupWallBan"
    }(n.AdminHistoryType || (n.AdminHistoryType = {}));
    y = n.AdminHistoryType,
    function(n) {
        n[n.None = 0] = "None"
    }(n.AdminHistoryItemFlags || (n.AdminHistoryItemFlags = {}));
    p = n.AdminHistoryItemFlags,
    function(n) {
        n[n.Global = 0] = "Global";
        n[n.USA = 1] = "USA";
        n[n.Europe = 2] = "Europe";
        n[n.Japan = 3] = "Japan"
    }(n.MarketplaceCodeRegion || (n.MarketplaceCodeRegion = {}));
    w = n.MarketplaceCodeRegion,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Story = 2] = "Story";
        n[n.Strike = 3] = "Strike";
        n[n.Raid = 4] = "Raid";
        n[n.AllPvP = 5] = "AllPvP";
        n[n.Patrol = 6] = "Patrol";
        n[n.AllPvE = 7] = "AllPvE";
        n[n.PvPIntroduction = 8] = "PvPIntroduction";
        n[n.ThreeVsThree = 9] = "ThreeVsThree";
        n[n.Control = 10] = "Control";
        n[n.Lockdown = 11] = "Lockdown";
        n[n.Team = 12] = "Team";
        n[n.FreeForAll = 13] = "FreeForAll";
        n[n.TrialsOfOsiris = 14] = "TrialsOfOsiris";
        n[n.Doubles = 15] = "Doubles";
        n[n.Nightfall = 16] = "Nightfall";
        n[n.Heroic = 17] = "Heroic";
        n[n.AllStrikes = 18] = "AllStrikes";
        n[n.IronBanner = 19] = "IronBanner";
        n[n.AllArena = 20] = "AllArena";
        n[n.Arena = 21] = "Arena";
        n[n.ArenaChallenge = 22] = "ArenaChallenge";
        n[n.Elimination = 23] = "Elimination";
        n[n.Rift = 24] = "Rift";
        n[n.AllMayhem = 25] = "AllMayhem";
        n[n.MayhemClash = 26] = "MayhemClash";
        n[n.MayhemRumble = 27] = "MayhemRumble";
        n[n.ZoneControl = 28] = "ZoneControl";
        n[n.Racing = 29] = "Racing";
        n[n.ArenaElderChallenge = 30] = "ArenaElderChallenge";
        n[n.Supremacy = 31] = "Supremacy";
        n[n.PrivateMatchesAll = 32] = "PrivateMatchesAll"
    }(n.DestinyActivityModeType || (n.DestinyActivityModeType = {}));
    b = n.DestinyActivityModeType,
    function(n) {
        n[n.Computed = 0] = "Computed";
        n[n.Point = 1] = "Point";
        n[n.Range = 2] = "Range"
    }(n.GroupAttributeType || (n.GroupAttributeType = {}));
    k = n.GroupAttributeType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.RateOfFire = 1] = "RateOfFire";
        n[n.Damage = 2] = "Damage";
        n[n.Accuracy = 4] = "Accuracy";
        n[n.Range = 8] = "Range";
        n[n.Zoom = 16] = "Zoom";
        n[n.Recoil = 32] = "Recoil";
        n[n.Ready = 64] = "Ready";
        n[n.Reload = 128] = "Reload";
        n[n.HairTrigger = 256] = "HairTrigger";
        n[n.AmmoAndMagazine = 512] = "AmmoAndMagazine";
        n[n.TrackingAndDetonation = 1024] = "TrackingAndDetonation";
        n[n.ShotgunSpread = 2048] = "ShotgunSpread";
        n[n.ChargeTime = 4096] = "ChargeTime";
        n[n.All = 8191] = "All"
    }(n.DestinyTalentNodeStepWeaponPerformances || (n.DestinyTalentNodeStepWeaponPerformances = {}));
    d = n.DestinyTalentNodeStepWeaponPerformances,
    function(n) {
        n[n.None = 0] = "None";
        n[n.ArmorPiercing = 1] = "ArmorPiercing";
        n[n.Ricochet = 2] = "Ricochet";
        n[n.Flinch = 4] = "Flinch";
        n[n.CollateralDamage = 8] = "CollateralDamage";
        n[n.Disorient = 16] = "Disorient";
        n[n.HighlightTarget = 32] = "HighlightTarget";
        n[n.All = 63] = "All"
    }(n.DestinyTalentNodeStepImpactEffects || (n.DestinyTalentNodeStepImpactEffects = {}));
    g = n.DestinyTalentNodeStepImpactEffects,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Stats = 1] = "Stats";
        n[n.Shields = 2] = "Shields";
        n[n.Health = 4] = "Health";
        n[n.Revive = 8] = "Revive";
        n[n.AimUnderFire = 16] = "AimUnderFire";
        n[n.Radar = 32] = "Radar";
        n[n.Invisibility = 64] = "Invisibility";
        n[n.Reputations = 128] = "Reputations";
        n[n.All = 255] = "All"
    }(n.DestinyTalentNodeStepGuardianAttributes || (n.DestinyTalentNodeStepGuardianAttributes = {}));
    nt = n.DestinyTalentNodeStepGuardianAttributes,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Grenades = 1] = "Grenades";
        n[n.Melee = 2] = "Melee";
        n[n.MovementModes = 4] = "MovementModes";
        n[n.Orbs = 8] = "Orbs";
        n[n.SuperEnergy = 16] = "SuperEnergy";
        n[n.SuperMods = 32] = "SuperMods";
        n[n.All = 63] = "All"
    }(n.DestinyTalentNodeStepLightAbilities || (n.DestinyTalentNodeStepLightAbilities = {}));
    tt = n.DestinyTalentNodeStepLightAbilities,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Kinetic = 1] = "Kinetic";
        n[n.Arc = 2] = "Arc";
        n[n.Solar = 4] = "Solar";
        n[n.Void = 8] = "Void";
        n[n.All = 15] = "All"
    }(n.DestinyTalentNodeStepDamageTypes || (n.DestinyTalentNodeStepDamageTypes = {}));
    it = n.DestinyTalentNodeStepDamageTypes,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Activity = 1] = "Activity";
        n[n.Vendor = 2] = "Vendor";
        n[n.Aggregate = 3] = "Aggregate"
    }(n.DestinyRewardSourceCategory || (n.DestinyRewardSourceCategory = {}));
    rt = n.DestinyRewardSourceCategory,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Activity = 1] = "Activity";
        n[n.ActivityType = 2] = "ActivityType";
        n[n.Class = 3] = "Class";
        n[n.Gender = 4] = "Gender";
        n[n.InventoryBucket = 5] = "InventoryBucket";
        n[n.InventoryItem = 6] = "InventoryItem";
        n[n.Progression = 7] = "Progression";
        n[n.Race = 8] = "Race";
        n[n.Stat = 9] = "Stat";
        n[n.TalentGrid = 10] = "TalentGrid";
        n[n.StatGroup = 11] = "StatGroup";
        n[n.UnlockFlag = 12] = "UnlockFlag";
        n[n.Vendor = 13] = "Vendor";
        n[n.Destination = 14] = "Destination";
        n[n.Place = 15] = "Place";
        n[n.DirectorBook = 16] = "DirectorBook";
        n[n.MaterialRequirement = 17] = "MaterialRequirement";
        n[n.SandboxPerk = 18] = "SandboxPerk";
        n[n.ArtDye = 19] = "ArtDye";
        n[n.ArtDyeChannel = 20] = "ArtDyeChannel";
        n[n.ActivityBundle = 21] = "ActivityBundle";
        n[n.GearAsset = 22] = "GearAsset";
        n[n.GrimoireCard = 23] = "GrimoireCard"
    }(n.DestinyDefinitionType || (n.DestinyDefinitionType = {}));
    ut = n.DestinyDefinitionType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Common = 1] = "Common";
        n[n.Superior = 2] = "Superior";
        n[n.Exotic = 3] = "Exotic"
    }(n.DestinyCardRarity || (n.DestinyCardRarity = {}));
    ft = n.DestinyCardRarity,
    function(n) {
        n[n.None = 0] = "None";
        n[n.General = 1] = "General";
        n[n.Weapons = 2] = "Weapons";
        n[n.Medals = 3] = "Medals";
        n[n.Enemies = 4] = "Enemies";
        n[n.ReservedGroups = 100] = "ReservedGroups";
        n[n.Leaderboard = 101] = "Leaderboard";
        n[n.Activity = 102] = "Activity";
        n[n.UniqueWeapon = 103] = "UniqueWeapon";
        n[n.Internal = 104] = "Internal"
    }(n.DestinyStatsGroupType || (n.DestinyStatsGroupType = {}));
    et = n.DestinyStatsGroupType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Daily = 1] = "Daily";
        n[n.Monthly = 2] = "Monthly";
        n[n.AllTime = 3] = "AllTime";
        n[n.Activity = 4] = "Activity"
    }(n.PeriodType || (n.PeriodType = {}));
    ot = n.PeriodType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Kills = 1] = "Kills";
        n[n.Assists = 2] = "Assists";
        n[n.Deaths = 3] = "Deaths";
        n[n.Criticals = 4] = "Criticals";
        n[n.KDa = 5] = "KDa";
        n[n.KD = 6] = "KD";
        n[n.Score = 7] = "Score";
        n[n.Entered = 8] = "Entered";
        n[n.TimePlayed = 9] = "TimePlayed";
        n[n.MedalWins = 10] = "MedalWins";
        n[n.MedalGame = 11] = "MedalGame";
        n[n.MedalSpecialKills = 12] = "MedalSpecialKills";
        n[n.MedalSprees = 13] = "MedalSprees";
        n[n.MedalMultiKills = 14] = "MedalMultiKills";
        n[n.MedalAbilities = 15] = "MedalAbilities"
    }(n.DestinyStatsCategoryType || (n.DestinyStatsCategoryType = {}));
    st = n.DestinyStatsCategoryType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Count = 1] = "Count";
        n[n.PerGame = 2] = "PerGame";
        n[n.Seconds = 3] = "Seconds";
        n[n.Points = 4] = "Points";
        n[n.Team = 5] = "Team";
        n[n.Distance = 6] = "Distance";
        n[n.Percent = 7] = "Percent";
        n[n.Ratio = 8] = "Ratio";
        n[n.Boolean = 9] = "Boolean";
        n[n.WeaponType = 10] = "WeaponType";
        n[n.Standing = 11] = "Standing";
        n[n.Milliseconds = 12] = "Milliseconds"
    }(n.UnitType || (n.UnitType = {}));
    ht = n.UnitType,
    function(n) {
        n[n.Add = 0] = "Add";
        n[n.Min = 1] = "Min";
        n[n.Max = 2] = "Max"
    }(n.DestinyStatsMergeMethod || (n.DestinyStatsMergeMethod = {}));
    ct = n.DestinyStatsMergeMethod,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Bronze = 1] = "Bronze";
        n[n.Silver = 2] = "Silver";
        n[n.Gold = 3] = "Gold"
    }(n.DestinyExcellenceBadgeTier || (n.DestinyExcellenceBadgeTier = {}));
    lt = n.DestinyExcellenceBadgeTier,
    function(n) {
        n[n.ReadBasicUserProfile = 1] = "ReadBasicUserProfile";
        n[n.ReadGroups = 2] = "ReadGroups";
        n[n.WriteGroups = 4] = "WriteGroups";
        n[n.AdminGroups = 8] = "AdminGroups";
        n[n.BnetWrite = 16] = "BnetWrite";
        n[n.MoveEquipDestinyItems = 32] = "MoveEquipDestinyItems";
        n[n.ReadPrivateDestinyData = 64] = "ReadPrivateDestinyData";
        n[n.ReadUserData = 128] = "ReadUserData";
        n[n.EditUserData = 256] = "EditUserData"
    }(n.ApplicationScopes || (n.ApplicationScopes = {}));
    at = n.ApplicationScopes,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Private = 1] = "Private";
        n[n.Public = 2] = "Public";
        n[n.Disabled = 3] = "Disabled";
        n[n.Blocked = 4] = "Blocked"
    }(n.ApplicationStatus || (n.ApplicationStatus = {}));
    vt = n.ApplicationStatus,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Owner = 1] = "Owner";
        n[n.TeamMember = 2] = "TeamMember"
    }(n.DeveloperRole || (n.DeveloperRole = {}));
    yt = n.DeveloperRole,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Active = 1] = "Active";
        n[n.Disabled = 2] = "Disabled";
        n[n.Deleted = 3] = "Deleted"
    }(n.ApiKeyStatus || (n.ApiKeyStatus = {}));
    pt = n.ApiKeyStatus,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Active = 1] = "Active";
        n[n.Revoked = 2] = "Revoked"
    }(n.AuthorizationStatus || (n.AuthorizationStatus = {}));
    wt = n.AuthorizationStatus,
    function(n) {
        n[n.None = 0] = "None";
        n[n.BNextForumNinja = 1] = "BNextForumNinja";
        n[n.BNextUnlimitedGroups = 2] = "BNextUnlimitedGroups";
        n[n.BNextFounderInAllGroups = 3] = "BNextFounderInAllGroups";
        n[n.BNextBungieGold = 4] = "BNextBungieGold";
        n[n.BNextNinjaColors = 5] = "BNextNinjaColors";
        n[n.BNextMakeOfficialTopics = 6] = "BNextMakeOfficialTopics";
        n[n.BNextMakeNinjaTopics = 7] = "BNextMakeNinjaTopics";
        n[n.BNextDeleteForumTopics = 8] = "BNextDeleteForumTopics";
        n[n.BNextOverturnReports = 9] = "BNextOverturnReports";
        n[n.BNextBrowseReports = 10] = "BNextBrowseReports";
        n[n.BNextGlobalIgnore = 11] = "BNextGlobalIgnore";
        n[n.BNextEditAnyPublicPost = 12] = "BNextEditAnyPublicPost";
        n[n.BNextEditUsers = 13] = "BNextEditUsers";
        n[n.BNextUltraBan = 14] = "BNextUltraBan";
        n[n.BNextForumMentor = 15] = "BNextForumMentor";
        n[n.TigerBan = 16] = "TigerBan";
        n[n.BNextForumCurator = 17] = "BNextForumCurator";
        n[n.BNextBigLikes = 18] = "BNextBigLikes";
        n[n.BNextPlayerSupport = 19] = "BNextPlayerSupport";
        n[n.BNextPinTopics = 20] = "BNextPinTopics";
        n[n.BNextLockTopics = 21] = "BNextLockTopics";
        n[n.BNextCommunityContentCurator = 22] = "BNextCommunityContentCurator";
        n[n.BNextAdminHistory = 23] = "BNextAdminHistory";
        n[n.BNextPrivateUserDataReader = 24] = "BNextPrivateUserDataReader";
        n[n.BNextDiagnosticsDataReader = 25] = "BNextDiagnosticsDataReader";
        n[n.BNextOverrideLinkPrivacy = 26] = "BNextOverrideLinkPrivacy";
        n[n.BNextDiscountSupport = 27] = "BNextDiscountSupport"
    }(n.AclEnum || (n.AclEnum = {}));
    bt = n.AclEnum,
    function(n) {
        n[n.Default = 0] = "Default";
        n[n.ShowDestinyInventory = 1] = "ShowDestinyInventory";
        n[n.HideDestinyActivityHistoryFeed = 2] = "HideDestinyActivityHistoryFeed";
        n[n.HideDestinyAdvisors = 4] = "HideDestinyAdvisors"
    }(n.BNetAccountPrivacy || (n.BNetAccountPrivacy = {}));
    kt = n.BNetAccountPrivacy,
    function(n) {
        n[n.None = 0] = "None";
        n[n.EMAIL = 1] = "EMAIL";
        n[n.MOBILE_PUSH = 2] = "MOBILE_PUSH";
        n[n.WEB_ONLY = 4] = "WEB_ONLY"
    }(n.NotificationMethods || (n.NotificationMethods = {}));
    dt = n.NotificationMethods,
    function(n) {
        n[n.None = 0] = "None";
        n[n.ConversationChanged = 1] = "ConversationChanged";
        n[n.Typing = 2] = "Typing";
        n[n.NotificationsChanged = 3] = "NotificationsChanged";
        n[n.MessageCounts = 4] = "MessageCounts";
        n[n.FriendCounts = 5] = "FriendCounts";
        n[n.Announcements = 6] = "Announcements";
        n[n.RecruitThreadUpdate = 7] = "RecruitThreadUpdate"
    }(n.RealTimeEventType || (n.RealTimeEventType = {}));
    gt = n.RealTimeEventType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Private = 1] = "Private";
        n[n.Group = 2] = "Group"
    }(n.EventConversationType || (n.EventConversationType = {}));
    ni = n.EventConversationType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.MESSAGE = 1] = "MESSAGE";
        n[n.FORUM_REPLY = 2] = "FORUM_REPLY";
        n[n.NEW_ACTIVITY_ROLLUP = 3] = "NEW_ACTIVITY_ROLLUP";
        n[n.SETTINGS_CHANGE = 4] = "SETTINGS_CHANGE";
        n[n.GROUP_ACCEPTANCE = 5] = "GROUP_ACCEPTANCE";
        n[n.GROUP_JOIN_REQUEST = 6] = "GROUP_JOIN_REQUEST";
        n[n.FOLLOW_USER_ACTIVITY = 7] = "FOLLOW_USER_ACTIVITY";
        n[n.FRIEND_USER_ACTIVITY = 8] = "FRIEND_USER_ACTIVITY";
        n[n.FORUM_LIKE = 9] = "FORUM_LIKE";
        n[n.FOLLOWED = 10] = "FOLLOWED";
        n[n.GROUP_BANNED = 11] = "GROUP_BANNED";
        n[n.BANNED = 12] = "BANNED";
        n[n.UNBANNED = 13] = "UNBANNED";
        n[n.GROUP_OPEN_JOIN = 14] = "GROUP_OPEN_JOIN";
        n[n.GROUP_ALLIANCE_JOIN_REQUESTED = 15] = "GROUP_ALLIANCE_JOIN_REQUESTED";
        n[n.GROUP_ALLIANCE_JOIN_REJECTED = 16] = "GROUP_ALLIANCE_JOIN_REJECTED";
        n[n.GROUP_ALLIANCE_JOIN_APPROVED = 17] = "GROUP_ALLIANCE_JOIN_APPROVED";
        n[n.GROUP_ALLIANCE_BROKEN = 18] = "GROUP_ALLIANCE_BROKEN";
        n[n.GROUP_DENIAL = 19] = "GROUP_DENIAL";
        n[n.WARNED = 20] = "WARNED";
        n[n.CLAN_DISABLED = 21] = "CLAN_DISABLED";
        n[n.GROUP_ALLIANCE_INVITE_REQUESTED = 22] = "GROUP_ALLIANCE_INVITE_REQUESTED";
        n[n.GROUP_ALLIANCE_INVITE_REJECTED = 23] = "GROUP_ALLIANCE_INVITE_REJECTED";
        n[n.GROUP_ALLIANCE_INVITE_APPROVED = 24] = "GROUP_ALLIANCE_INVITE_APPROVED";
        n[n.GROUP_FOLLOWED_BY_GROUP = 25] = "GROUP_FOLLOWED_BY_GROUP";
        n[n.GRIMOIRE_UNOBSERVED_CARDS = 26] = "GRIMOIRE_UNOBSERVED_CARDS";
        n[n.COMMUNITY_CONTENT_LIKE = 27] = "COMMUNITY_CONTENT_LIKE";
        n[n.COMMUNITY_CONTENT_APPROVED = 28] = "COMMUNITY_CONTENT_APPROVED";
        n[n.USER_PROFILE_BANNED = 29] = "USER_PROFILE_BANNED";
        n[n.USER_MESSAGE_BANNED = 30] = "USER_MESSAGE_BANNED";
        n[n.SUPPORT_FORM_RECEIVED = 31] = "SUPPORT_FORM_RECEIVED";
        n[n.RAF_NEWBIE_NEEDS_TO_PLAY_TTK = 32] = "RAF_NEWBIE_NEEDS_TO_PLAY_TTK";
        n[n.RAF_TTK_QUEST_READY = 33] = "RAF_TTK_QUEST_READY";
        n[n.RECRUIT_THREAD_READY = 34] = "RECRUIT_THREAD_READY";
        n[n.RECRUIT_THREAD_KICKED = 35] = "RECRUIT_THREAD_KICKED";
        n[n.RECRUIT_THREAD_CANCELED = 36] = "RECRUIT_THREAD_CANCELED";
        n[n.GROUP_WALL_BANNED = 37] = "GROUP_WALL_BANNED";
        n[n.BANNED_PERMANENT = 38] = "BANNED_PERMANENT";
        n[n.USER_PROFILE_BANNED_PERMANENT = 39] = "USER_PROFILE_BANNED_PERMANENT";
        n[n.USER_MESSAGE_BANNED_PERMANENT = 40] = "USER_MESSAGE_BANNED_PERMANENT";
        n[n.GROUP_WALL_BANNED_PERMANENT = 41] = "GROUP_WALL_BANNED_PERMANENT"
    }(n.NotificationType || (n.NotificationType = {}));
    ti = n.NotificationType,
    function(n) {
        n[n.BNet = 0] = "BNet";
        n[n.Plain = 1] = "Plain"
    }(n.ActivityOutputFormat || (n.ActivityOutputFormat = {}));
    ii = n.ActivityOutputFormat,
    function(n) {
        n[n.Good = 0] = "Good";
        n[n.TooHigh = 1] = "TooHigh";
        n[n.TooLow = 2] = "TooLow";
        n[n.WrongName = 4] = "WrongName"
    }(n.StatFeedbackState || (n.StatFeedbackState = {}));
    ri = n.StatFeedbackState,
    function(n) {
        n[n.Human = 0] = "Human";
        n[n.Awoken = 1] = "Awoken";
        n[n.Exo = 2] = "Exo";
        n[n.Unknown = 3] = "Unknown"
    }(n.DestinyRace || (n.DestinyRace = {}));
    ui = n.DestinyRace,
    function(n) {
        n[n.Male = 0] = "Male";
        n[n.Female = 1] = "Female";
        n[n.Unknown = 2] = "Unknown"
    }(n.DestinyGender || (n.DestinyGender = {}));
    fi = n.DestinyGender,
    function(n) {
        n[n.Titan = 0] = "Titan";
        n[n.Hunter = 1] = "Hunter";
        n[n.Warlock = 2] = "Warlock";
        n[n.Unknown = 3] = "Unknown"
    }(n.DestinyClass || (n.DestinyClass = {}));
    ei = n.DestinyClass,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Destiny1 = 1] = "Destiny1";
        n[n.TheDarkBelow = 2] = "TheDarkBelow";
        n[n.HouseOfWolves = 4] = "HouseOfWolves";
        n[n.Comet = 8] = "Comet";
        n[n.RiseOfIron = 16] = "RiseOfIron"
    }(n.DestinyGameVersions || (n.DestinyGameVersions = {}));
    oi = n.DestinyGameVersions,
    function(n) {
        n[n.NotBound = 0] = "NotBound";
        n[n.BoundToCharacter = 1] = "BoundToCharacter";
        n[n.BoundToAccount = 2] = "BoundToAccount";
        n[n.BoundToGuild = 3] = "BoundToGuild"
    }(n.ItemBindStatus || (n.ItemBindStatus = {}));
    si = n.ItemBindStatus,
    function(n) {
        n[n.None = 0] = "None";
        n[n.ItemUnequippable = 1] = "ItemUnequippable";
        n[n.ItemUniqueEquipRestricted = 2] = "ItemUniqueEquipRestricted";
        n[n.ItemFailedUnlockCheck = 4] = "ItemFailedUnlockCheck";
        n[n.ItemFailedLevelCheck = 8] = "ItemFailedLevelCheck";
        n[n.ItemNotOnCharacter = 16] = "ItemNotOnCharacter"
    }(n.EquipFailureReason || (n.EquipFailureReason = {}));
    hi = n.EquipFailureReason,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Kinetic = 1] = "Kinetic";
        n[n.Arc = 2] = "Arc";
        n[n.Thermal = 3] = "Thermal";
        n[n.Void = 4] = "Void";
        n[n.Raid = 5] = "Raid"
    }(n.DamageType || (n.DamageType = {}));
    ci = n.DamageType,
    function(n) {
        n[n.Invalid = 0] = "Invalid";
        n[n.CanUpgrade = 1] = "CanUpgrade";
        n[n.NoPoints = 2] = "NoPoints";
        n[n.NoPrerequisites = 3] = "NoPrerequisites";
        n[n.NoSteps = 4] = "NoSteps";
        n[n.NoUnlock = 5] = "NoUnlock";
        n[n.NoMaterial = 6] = "NoMaterial";
        n[n.NoGridLevel = 7] = "NoGridLevel";
        n[n.SwappingLocked = 8] = "SwappingLocked";
        n[n.MustSwap = 9] = "MustSwap";
        n[n.Complete = 10] = "Complete";
        n[n.Unknown = 11] = "Unknown";
        n[n.CreationOnly = 12] = "CreationOnly";
        n[n.Hidden = 13] = "Hidden"
    }(n.DestinyTalentNodeState || (n.DestinyTalentNodeState = {}));
    li = n.DestinyTalentNodeState,
    function(n) {
        n[n.Unknown = 0] = "Unknown";
        n[n.Inventory = 1] = "Inventory";
        n[n.Vault = 2] = "Vault";
        n[n.Vendor = 3] = "Vendor";
        n[n.Postmaster = 4] = "Postmaster"
    }(n.ItemLocation || (n.ItemLocation = {}));
    ai = n.ItemLocation,
    function(n) {
        n[n.CanTransfer = 0] = "CanTransfer";
        n[n.ItemIsEquipped = 1] = "ItemIsEquipped";
        n[n.NotTransferrable = 2] = "NotTransferrable";
        n[n.NoRoomInDestination = 4] = "NoRoomInDestination"
    }(n.TransferStatuses || (n.TransferStatuses = {}));
    vi = n.TransferStatuses,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Locked = 1] = "Locked";
        n[n.Tracked = 2] = "Tracked"
    }(n.ItemState || (n.ItemState = {}));
    yi = n.ItemState,
    function(n) {
        n[n.Success = 0] = "Success";
        n[n.NoInventorySpace = 1] = "NoInventorySpace";
        n[n.NoFunds = 2] = "NoFunds";
        n[n.NoProgression = 4] = "NoProgression";
        n[n.NoUnlock = 8] = "NoUnlock";
        n[n.NoQuantity = 16] = "NoQuantity";
        n[n.OutsidePurchaseWindow = 32] = "OutsidePurchaseWindow";
        n[n.NotAvailable = 64] = "NotAvailable";
        n[n.UniquenessViolation = 128] = "UniquenessViolation";
        n[n.UnknownError = 256] = "UnknownError";
        n[n.AlreadySelling = 512] = "AlreadySelling";
        n[n.Unsellable = 1024] = "Unsellable";
        n[n.SellingInhibited = 2048] = "SellingInhibited";
        n[n.AlreadyOwned = 4096] = "AlreadyOwned"
    }(n.VendorItemStatus || (n.VendorItemStatus = {}));
    pi = n.VendorItemStatus,
    function(n) {
        n[n.Trivial = 0] = "Trivial";
        n[n.Easy = 1] = "Easy";
        n[n.Normal = 2] = "Normal";
        n[n.Challenging = 3] = "Challenging";
        n[n.Hard = 4] = "Hard";
        n[n.Brave = 5] = "Brave";
        n[n.AlmostImpossible = 6] = "AlmostImpossible";
        n[n.Impossible = 7] = "Impossible"
    }(n.DestinyActivityDifficultyTier || (n.DestinyActivityDifficultyTier = {}));
    wi = n.DestinyActivityDifficultyTier,
    function(n) {
        n[n.Unknown = 0] = "Unknown";
        n[n.Currency = 1] = "Currency";
        n[n.Basic = 2] = "Basic";
        n[n.Common = 3] = "Common";
        n[n.Rare = 4] = "Rare";
        n[n.Superior = 5] = "Superior";
        n[n.Exotic = 6] = "Exotic"
    }(n.TierType || (n.TierType = {}));
    bi = n.TierType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.SpecialCurrency = 1] = "SpecialCurrency";
        n[n.CompletedBounty = 2] = "CompletedBounty";
        n[n.CrucibleBounty = 3] = "CrucibleBounty";
        n[n.VanguardBounty = 4] = "VanguardBounty";
        n[n.IronBannerBounty = 5] = "IronBannerBounty";
        n[n.QueenBounty = 6] = "QueenBounty";
        n[n.ExoticBounty = 7] = "ExoticBounty";
        n[n.Armor = 8] = "Armor";
        n[n.Weapon = 9] = "Weapon";
        n[n.Engram = 23] = "Engram";
        n[n.Consumable = 24] = "Consumable";
        n[n.ExchangeMaterial = 25] = "ExchangeMaterial";
        n[n.PvpTicket = 26] = "PvpTicket";
        n[n.MissionReward = 27] = "MissionReward";
        n[n.BountyReward = 28] = "BountyReward";
        n[n.Currency = 29] = "Currency"
    }(n.SpecialItemType || (n.SpecialItemType = {}));
    ki = n.SpecialItemType,
    function(n) {
        n[n.Invalid = 0] = "Invalid";
        n[n.Flag = 1] = "Flag";
        n[n.Not = 2] = "Not";
        n[n.Or = 3] = "Or";
        n[n.And = 4] = "And";
        n[n.Nor = 5] = "Nor";
        n[n.Xor = 6] = "Xor";
        n[n.Nand = 7] = "Nand";
        n[n.Equal = 8] = "Equal";
        n[n.NotEqual = 9] = "NotEqual";
        n[n.UnlockValue = 10] = "UnlockValue";
        n[n.Constant = 11] = "Constant";
        n[n.GreaterThan = 12] = "GreaterThan";
        n[n.GreaterThanOrEqual = 13] = "GreaterThanOrEqual";
        n[n.LessThan = 14] = "LessThan";
        n[n.LessThanOrEqual = 15] = "LessThanOrEqual";
        n[n.Add = 16] = "Add";
        n[n.Subtract = 17] = "Subtract";
        n[n.Multiply = 18] = "Multiply";
        n[n.Divide = 19] = "Divide";
        n[n.Modulus = 20] = "Modulus";
        n[n.Negate = 21] = "Negate"
    }(n.DestinyUnlockFlagOperator || (n.DestinyUnlockFlagOperator = {}));
    di = n.DestinyUnlockFlagOperator,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Currency = 1] = "Currency";
        n[n.Armor = 2] = "Armor";
        n[n.Weapon = 3] = "Weapon";
        n[n.Bounty = 4] = "Bounty";
        n[n.CompletedBounty = 5] = "CompletedBounty";
        n[n.BountyReward = 6] = "BountyReward";
        n[n.Message = 7] = "Message";
        n[n.Engram = 8] = "Engram";
        n[n.Consumable = 9] = "Consumable";
        n[n.ExchangeMaterial = 10] = "ExchangeMaterial";
        n[n.MissionReward = 11] = "MissionReward";
        n[n.QuestStep = 12] = "QuestStep";
        n[n.QuestStepComplete = 13] = "QuestStepComplete";
        n[n.Emblem = 14] = "Emblem";
        n[n.Quest = 15] = "Quest"
    }(n.DestinyItemType || (n.DestinyItemType = {}));
    gi = n.DestinyItemType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Crucible = 1] = "Crucible";
        n[n.Vanguard = 2] = "Vanguard";
        n[n.IronBanner = 3] = "IronBanner";
        n[n.Queen = 4] = "Queen";
        n[n.Exotic = 5] = "Exotic";
        n[n.AutoRifle = 6] = "AutoRifle";
        n[n.Shotgun = 7] = "Shotgun";
        n[n.Machinegun = 8] = "Machinegun";
        n[n.HandCannon = 9] = "HandCannon";
        n[n.RocketLauncher = 10] = "RocketLauncher";
        n[n.FusionRifle = 11] = "FusionRifle";
        n[n.SniperRifle = 12] = "SniperRifle";
        n[n.PulseRifle = 13] = "PulseRifle";
        n[n.ScoutRifle = 14] = "ScoutRifle";
        n[n.Camera = 15] = "Camera";
        n[n.Crm = 16] = "Crm";
        n[n.Sidearm = 17] = "Sidearm";
        n[n.Sword = 18] = "Sword";
        n[n.Mask = 19] = "Mask"
    }(n.DestinyItemSubType || (n.DestinyItemSubType = {}));
    nr = n.DestinyItemSubType,
    function(n) {
        n[n.Character = 0] = "Character";
        n[n.Account = 1] = "Account"
    }(n.BucketScope || (n.BucketScope = {}));
    tr = n.BucketScope,
    function(n) {
        n[n.Invisible = 0] = "Invisible";
        n[n.Item = 1] = "Item";
        n[n.Currency = 2] = "Currency";
        n[n.Equippable = 3] = "Equippable";
        n[n.Ignored = 4] = "Ignored"
    }(n.BucketCategory || (n.BucketCategory = {}));
    ir = n.BucketCategory,
    function(n) {
        n[n.Automatic = 0] = "Automatic";
        n[n.Fraction = 1] = "Fraction";
        n[n.Checkbox = 2] = "Checkbox";
        n[n.Percentage = 3] = "Percentage"
    }(n.DestinyUnlockValueUIStyle || (n.DestinyUnlockValueUIStyle = {}));
    rr = n.DestinyUnlockValueUIStyle,
    function(n) {
        n[n.NotRefundable = 0] = "NotRefundable";
        n[n.DeletesItem = 1] = "DeletesItem";
        n[n.RevokesLicense = 2] = "RevokesLicense"
    }(n.DestinyVendorItemRefundPolicy || (n.DestinyVendorItemRefundPolicy = {}));
    ur = n.DestinyVendorItemRefundPolicy,
    function(n) {
        n[n.Hidden = 0] = "Hidden";
        n[n.Visible = 1] = "Visible";
        n[n.Teaser = 2] = "Teaser";
        n[n.Incomplete = 3] = "Incomplete";
        n[n.Completed = 4] = "Completed"
    }(n.DirectorNodeState || (n.DirectorNodeState = {}));
    fr = n.DirectorNodeState,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Enlarge = 1] = "Enlarge";
        n[n.Tower = 2] = "Tower";
        n[n.Unexpected = 3] = "Unexpected"
    }(n.DirectorNodeUIModifier || (n.DirectorNodeUIModifier = {}));
    er = n.DirectorNodeUIModifier,
    function(n) {
        n[n.TransitionBook = 0] = "TransitionBook";
        n[n.TransitionSocial = 1] = "TransitionSocial"
    }(n.DirectorTransitionType || (n.DirectorTransitionType = {}));
    or = n.DirectorTransitionType,
    function(n) {
        n[n.Incomplete = 0] = "Incomplete";
        n[n.Complete = 1] = "Complete";
        n[n.Redeemed = 2] = "Redeemed"
    }(n.DestinyRecordCompletionStatus || (n.DestinyRecordCompletionStatus = {}));
    sr = n.DestinyRecordCompletionStatus,
    function(n) {
        n[n.RecordPage = 0] = "RecordPage";
        n[n.SummaryPage = 1] = "SummaryPage"
    }(n.DestinyRecordBookPageDisplayStyle || (n.DestinyRecordBookPageDisplayStyle = {}));
    hr = n.DestinyRecordBookPageDisplayStyle,
    function(n) {
        n[n.Integer = 0] = "Integer";
        n[n.Percentage = 1] = "Percentage";
        n[n.TimeInMilliseconds = 2] = "TimeInMilliseconds";
        n[n.Boolean = 3] = "Boolean";
        n[n.NumberWithTwoDecimalPlaces = 4] = "NumberWithTwoDecimalPlaces"
    }(n.DestinyRecordUIStyle || (n.DestinyRecordUIStyle = {}));
    cr = n.DestinyRecordUIStyle,
    function(n) {
        n[n.General = 0] = "General"
    }(n.GroupType || (n.GroupType = {}));
    lr = n.GroupType,
    function(n) {
        n[n.Group = 0] = "Group";
        n[n.Admins = 1] = "Admins"
    }(n.ChatSecuritySetting || (n.ChatSecuritySetting = {}));
    ar = n.ChatSecuritySetting,
    function(n) {
        n[n.Wall = 0] = "Wall";
        n[n.Forum = 1] = "Forum";
        n[n.AllianceForum = 2] = "AllianceForum"
    }(n.GroupHomepage || (n.GroupHomepage = {}));
    vr = n.GroupHomepage,
    function(n) {
        n[n.Reviewed = 0] = "Reviewed";
        n[n.Open = 1] = "Open";
        n[n.Closed = 2] = "Closed"
    }(n.MembershipOption || (n.MembershipOption = {}));
    yr = n.MembershipOption,
    function(n) {
        n[n.Public = 0] = "Public";
        n[n.Alliance = 1] = "Alliance";
        n[n.Private = 2] = "Private"
    }(n.GroupPostPublicity || (n.GroupPostPublicity = {}));
    pr = n.GroupPostPublicity,
    function(n) {
        n[n.Member = 0] = "Member";
        n[n.Admin = 1] = "Admin";
        n[n.Founder = 2] = "Founder";
        n[n.None = -1] = "None"
    }(n.GroupMemberType || (n.GroupMemberType = {}));
    wr = n.GroupMemberType,
    function(n) {
        n[n.Unallied = 0] = "Unallied";
        n[n.Parent = 1] = "Parent";
        n[n.Child = 2] = "Child"
    }(n.GroupAllianceStatus || (n.GroupAllianceStatus = {}));
    br = n.GroupAllianceStatus,
    function(n) {
        n[n.All = 0] = "All";
        n[n.PastDay = 1] = "PastDay";
        n[n.PastWeek = 2] = "PastWeek";
        n[n.PastMonth = 3] = "PastMonth";
        n[n.PastYear = 4] = "PastYear"
    }(n.GroupDateRange || (n.GroupDateRange = {}));
    kr = n.GroupDateRange,
    function(n) {
        n[n.Name = 0] = "Name";
        n[n.Date = 1] = "Date";
        n[n.Popularity = 2] = "Popularity";
        n[n.Id = 3] = "Id"
    }(n.GroupSortBy || (n.GroupSortBy = {}));
    dr = n.GroupSortBy,
    function(n) {
        n[n.Approved = 0] = "Approved";
        n[n.Created = 1] = "Created";
        n[n.Failed = 2] = "Failed"
    }(n.GroupRelationshipResult || (n.GroupRelationshipResult = {}));
    gr = n.GroupRelationshipResult,
    function(n) {
        n[n.All = 0] = "All";
        n[n.OneToTen = 1] = "OneToTen";
        n[n.ElevenToOneHundred = 2] = "ElevenToOneHundred";
        n[n.GreaterThanOneHundred = 3] = "GreaterThanOneHundred"
    }(n.GroupMemberCountFilter || (n.GroupMemberCountFilter = {}));
    nu = n.GroupMemberCountFilter,
    function(n) {
        n[n.NotApplicable = 0] = "NotApplicable";
        n[n.ClanEnabledSuccess = 1] = "ClanEnabledSuccess";
        n[n.ClanEnabledFailure = 2] = "ClanEnabledFailure"
    }(n.GroupClanEnableStatus || (n.GroupClanEnableStatus = {}));
    tu = n.GroupClanEnableStatus,
    function(n) {
        n[n.TypeAndDuration = 0] = "TypeAndDuration";
        n[n.Duration = 1] = "Duration";
        n[n.Name = 2] = "Name";
        n[n.Activity = 3] = "Activity"
    }(n.GroupMemberSortBy || (n.GroupMemberSortBy = {}));
    iu = n.GroupMemberSortBy,
    function(n) {
        n[n.ConvertToClan = 0] = "ConvertToClan";
        n[n.SplitClan = 1] = "SplitClan"
    }(n.MigrationMode || (n.MigrationMode = {}));
    ru = n.MigrationMode,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Success = 1] = "Success";
        n[n.TransportException = 2] = "TransportException";
        n[n.UnhandledException = 3] = "UnhandledException";
        n[n.NotImplemented = 4] = "NotImplemented";
        n[n.SystemDisabled = 5] = "SystemDisabled";
        n[n.FailedToLoadAvailableLocalesConfiguration = 6] = "FailedToLoadAvailableLocalesConfiguration";
        n[n.ParameterParseFailure = 7] = "ParameterParseFailure";
        n[n.ParameterInvalidRange = 8] = "ParameterInvalidRange";
        n[n.BadRequest = 9] = "BadRequest";
        n[n.AuthenticationInvalid = 10] = "AuthenticationInvalid";
        n[n.DataNotFound = 11] = "DataNotFound";
        n[n.InsufficientPrivileges = 12] = "InsufficientPrivileges";
        n[n.Duplicate = 13] = "Duplicate";
        n[n.UnknownSqlResult = 14] = "UnknownSqlResult";
        n[n.ValidationError = 15] = "ValidationError";
        n[n.ValidationMissingFieldError = 16] = "ValidationMissingFieldError";
        n[n.ValidationInvalidInputError = 17] = "ValidationInvalidInputError";
        n[n.InvalidParameters = 18] = "InvalidParameters";
        n[n.ParameterNotFound = 19] = "ParameterNotFound";
        n[n.UnhandledHttpException = 20] = "UnhandledHttpException";
        n[n.NotFound = 21] = "NotFound";
        n[n.WebAuthModuleAsyncFailed = 22] = "WebAuthModuleAsyncFailed";
        n[n.InvalidReturnValue = 23] = "InvalidReturnValue";
        n[n.UserBanned = 24] = "UserBanned";
        n[n.InvalidPostBody = 25] = "InvalidPostBody";
        n[n.MissingPostBody = 26] = "MissingPostBody";
        n[n.ExternalServiceTimeout = 27] = "ExternalServiceTimeout";
        n[n.ValidationLengthError = 28] = "ValidationLengthError";
        n[n.ValidationRangeError = 29] = "ValidationRangeError";
        n[n.JsonDeserializationError = 30] = "JsonDeserializationError";
        n[n.ThrottleLimitExceeded = 31] = "ThrottleLimitExceeded";
        n[n.ValidationTagError = 32] = "ValidationTagError";
        n[n.ValidationProfanityError = 33] = "ValidationProfanityError";
        n[n.ValidationUrlFormatError = 34] = "ValidationUrlFormatError";
        n[n.ThrottleLimitExceededMinutes = 35] = "ThrottleLimitExceededMinutes";
        n[n.ThrottleLimitExceededMomentarily = 36] = "ThrottleLimitExceededMomentarily";
        n[n.ThrottleLimitExceededSeconds = 37] = "ThrottleLimitExceededSeconds";
        n[n.ExternalServiceUnknown = 38] = "ExternalServiceUnknown";
        n[n.ValidationWordLengthError = 39] = "ValidationWordLengthError";
        n[n.ValidationInvisibleUnicode = 40] = "ValidationInvisibleUnicode";
        n[n.ValidationBadNames = 41] = "ValidationBadNames";
        n[n.ExternalServiceFailed = 42] = "ExternalServiceFailed";
        n[n.ServiceRetired = 43] = "ServiceRetired";
        n[n.UnknownSqlException = 44] = "UnknownSqlException";
        n[n.UnsupportedLocale = 45] = "UnsupportedLocale";
        n[n.InvalidPageNumber = 46] = "InvalidPageNumber";
        n[n.MaximumPageSizeExceeded = 47] = "MaximumPageSizeExceeded";
        n[n.ServiceUnsupported = 48] = "ServiceUnsupported";
        n[n.ValidationMaximumUnicodeCombiningCharacters = 49] = "ValidationMaximumUnicodeCombiningCharacters";
        n[n.ValidationMaximumSequentialCarriageReturns = 50] = "ValidationMaximumSequentialCarriageReturns";
        n[n.PerEndpointRequestThrottleExceeded = 51] = "PerEndpointRequestThrottleExceeded";
        n[n.AuthContextCacheAssertion = 52] = "AuthContextCacheAssertion";
        n[n.ObsoleteCredentialType = 89] = "ObsoleteCredentialType";
        n[n.UnableToUnPairMobileApp = 90] = "UnableToUnPairMobileApp";
        n[n.UnableToPairMobileApp = 91] = "UnableToPairMobileApp";
        n[n.CannotUseMobileAuthWithNonMobileProvider = 92] = "CannotUseMobileAuthWithNonMobileProvider";
        n[n.MissingDeviceCookie = 93] = "MissingDeviceCookie";
        n[n.FacebookTokenExpired = 94] = "FacebookTokenExpired";
        n[n.AuthTicketRequired = 95] = "AuthTicketRequired";
        n[n.CookieContextRequired = 96] = "CookieContextRequired";
        n[n.UnknownAuthenticationError = 97] = "UnknownAuthenticationError";
        n[n.BungieNetAccountCreationRequired = 98] = "BungieNetAccountCreationRequired";
        n[n.WebAuthRequired = 99] = "WebAuthRequired";
        n[n.ContentUnknownSqlResult = 100] = "ContentUnknownSqlResult";
        n[n.ContentNeedUniquePath = 101] = "ContentNeedUniquePath";
        n[n.ContentSqlException = 102] = "ContentSqlException";
        n[n.ContentNotFound = 103] = "ContentNotFound";
        n[n.ContentSuccessWithTagAddFail = 104] = "ContentSuccessWithTagAddFail";
        n[n.ContentSearchMissingParameters = 105] = "ContentSearchMissingParameters";
        n[n.ContentInvalidId = 106] = "ContentInvalidId";
        n[n.ContentPhysicalFileDeletionError = 107] = "ContentPhysicalFileDeletionError";
        n[n.ContentPhysicalFileCreationError = 108] = "ContentPhysicalFileCreationError";
        n[n.ContentPerforceSubmissionError = 109] = "ContentPerforceSubmissionError";
        n[n.ContentPerforceInitializationError = 110] = "ContentPerforceInitializationError";
        n[n.ContentDeploymentPackageNotReadyError = 111] = "ContentDeploymentPackageNotReadyError";
        n[n.ContentUploadFailed = 112] = "ContentUploadFailed";
        n[n.ContentTooManyResults = 113] = "ContentTooManyResults";
        n[n.ContentInvalidState = 115] = "ContentInvalidState";
        n[n.ContentNavigationParentNotFound = 116] = "ContentNavigationParentNotFound";
        n[n.ContentNavigationParentUpdateError = 117] = "ContentNavigationParentUpdateError";
        n[n.DeploymentPackageNotEditable = 118] = "DeploymentPackageNotEditable";
        n[n.ContentValidationError = 119] = "ContentValidationError";
        n[n.ContentPropertiesValidationError = 120] = "ContentPropertiesValidationError";
        n[n.ContentTypeNotFound = 121] = "ContentTypeNotFound";
        n[n.DeploymentPackageNotFound = 122] = "DeploymentPackageNotFound";
        n[n.ContentSearchInvalidParameters = 123] = "ContentSearchInvalidParameters";
        n[n.ContentItemPropertyAggregationError = 124] = "ContentItemPropertyAggregationError";
        n[n.DeploymentPackageFileNotFound = 125] = "DeploymentPackageFileNotFound";
        n[n.ContentPerforceFileHistoryNotFound = 126] = "ContentPerforceFileHistoryNotFound";
        n[n.ContentAssetZipCreationFailure = 127] = "ContentAssetZipCreationFailure";
        n[n.ContentAssetZipCreationBusy = 128] = "ContentAssetZipCreationBusy";
        n[n.ContentProjectNotFound = 129] = "ContentProjectNotFound";
        n[n.ContentFolderNotFound = 130] = "ContentFolderNotFound";
        n[n.ContentPackagesInconsistent = 131] = "ContentPackagesInconsistent";
        n[n.ContentPackagesInvalidState = 132] = "ContentPackagesInvalidState";
        n[n.ContentPackagesInconsistentType = 133] = "ContentPackagesInconsistentType";
        n[n.ContentCannotDeletePackage = 134] = "ContentCannotDeletePackage";
        n[n.ContentLockedForChanges = 135] = "ContentLockedForChanges";
        n[n.ContentFileUploadFailed = 136] = "ContentFileUploadFailed";
        n[n.ContentNotReviewed = 137] = "ContentNotReviewed";
        n[n.ContentPermissionDenied = 138] = "ContentPermissionDenied";
        n[n.ContentInvalidExternalUrl = 139] = "ContentInvalidExternalUrl";
        n[n.ContentExternalFileCannotBeImportedLocally = 140] = "ContentExternalFileCannotBeImportedLocally";
        n[n.ContentTagSaveFailure = 141] = "ContentTagSaveFailure";
        n[n.ContentPerforceUnmatchedFileError = 142] = "ContentPerforceUnmatchedFileError";
        n[n.ContentPerforceChangelistResultNotFound = 143] = "ContentPerforceChangelistResultNotFound";
        n[n.ContentPerforceChangelistFileItemsNotFound = 144] = "ContentPerforceChangelistFileItemsNotFound";
        n[n.ContentPerforceInvalidRevisionError = 145] = "ContentPerforceInvalidRevisionError";
        n[n.ContentUnloadedSaveResult = 146] = "ContentUnloadedSaveResult";
        n[n.ContentPropertyInvalidNumber = 147] = "ContentPropertyInvalidNumber";
        n[n.ContentPropertyInvalidUrl = 148] = "ContentPropertyInvalidUrl";
        n[n.ContentPropertyInvalidDate = 149] = "ContentPropertyInvalidDate";
        n[n.ContentPropertyInvalidSet = 150] = "ContentPropertyInvalidSet";
        n[n.ContentPropertyCannotDeserialize = 151] = "ContentPropertyCannotDeserialize";
        n[n.ContentRegexValidationFailOnProperty = 152] = "ContentRegexValidationFailOnProperty";
        n[n.ContentMaxLengthFailOnProperty = 153] = "ContentMaxLengthFailOnProperty";
        n[n.ContentPropertyUnexpectedDeserializationError = 154] = "ContentPropertyUnexpectedDeserializationError";
        n[n.ContentPropertyRequired = 155] = "ContentPropertyRequired";
        n[n.ContentCannotCreateFile = 156] = "ContentCannotCreateFile";
        n[n.ContentInvalidMigrationFile = 157] = "ContentInvalidMigrationFile";
        n[n.ContentMigrationAlteringProcessedItem = 158] = "ContentMigrationAlteringProcessedItem";
        n[n.ContentPropertyDefinitionNotFound = 159] = "ContentPropertyDefinitionNotFound";
        n[n.ContentReviewDataChanged = 160] = "ContentReviewDataChanged";
        n[n.ContentRollbackRevisionNotInPackage = 161] = "ContentRollbackRevisionNotInPackage";
        n[n.ContentItemNotBasedOnLatestRevision = 162] = "ContentItemNotBasedOnLatestRevision";
        n[n.ContentUnauthorized = 163] = "ContentUnauthorized";
        n[n.ContentCannotCreateDeploymentPackage = 164] = "ContentCannotCreateDeploymentPackage";
        n[n.ContentUserNotFound = 165] = "ContentUserNotFound";
        n[n.ContentLocalePermissionDenied = 166] = "ContentLocalePermissionDenied";
        n[n.ContentInvalidLinkToInternalEnvironment = 167] = "ContentInvalidLinkToInternalEnvironment";
        n[n.ContentInvalidBlacklistedContent = 168] = "ContentInvalidBlacklistedContent";
        n[n.ContentMacroMalformedNoContentId = 169] = "ContentMacroMalformedNoContentId";
        n[n.ContentMacroMalformedNoTemplateType = 170] = "ContentMacroMalformedNoTemplateType";
        n[n.ContentIllegalBNetMembershipId = 171] = "ContentIllegalBNetMembershipId";
        n[n.ContentLocaleDidNotMatchExpected = 172] = "ContentLocaleDidNotMatchExpected";
        n[n.ContentBabelCallFailed = 173] = "ContentBabelCallFailed";
        n[n.ContentEnglishPostLiveForbidden = 174] = "ContentEnglishPostLiveForbidden";
        n[n.UserNonUniqueName = 200] = "UserNonUniqueName";
        n[n.UserManualLinkingStepRequired = 201] = "UserManualLinkingStepRequired";
        n[n.UserCreateUnknownSqlResult = 202] = "UserCreateUnknownSqlResult";
        n[n.UserCreateUnknownSqlException = 203] = "UserCreateUnknownSqlException";
        n[n.UserMalformedMembershipId = 204] = "UserMalformedMembershipId";
        n[n.UserCannotFindRequestedUser = 205] = "UserCannotFindRequestedUser";
        n[n.UserCannotLoadAccountCredentialLinkInfo = 206] = "UserCannotLoadAccountCredentialLinkInfo";
        n[n.UserInvalidMobileAppType = 207] = "UserInvalidMobileAppType";
        n[n.UserMissingMobilePairingInfo = 208] = "UserMissingMobilePairingInfo";
        n[n.UserCannotGenerateMobileKeyWhileUsingMobileCredential = 209] = "UserCannotGenerateMobileKeyWhileUsingMobileCredential";
        n[n.UserGenerateMobileKeyExistingSlotCollision = 210] = "UserGenerateMobileKeyExistingSlotCollision";
        n[n.UserDisplayNameMissingOrInvalid = 211] = "UserDisplayNameMissingOrInvalid";
        n[n.UserCannotLoadAccountProfileData = 212] = "UserCannotLoadAccountProfileData";
        n[n.UserCannotSaveUserProfileData = 213] = "UserCannotSaveUserProfileData";
        n[n.UserEmailMissingOrInvalid = 214] = "UserEmailMissingOrInvalid";
        n[n.UserTermsOfUseRequired = 215] = "UserTermsOfUseRequired";
        n[n.UserCannotCreateNewAccountWhileLoggedIn = 216] = "UserCannotCreateNewAccountWhileLoggedIn";
        n[n.UserCannotResolveCentralAccount = 217] = "UserCannotResolveCentralAccount";
        n[n.UserInvalidAvatar = 218] = "UserInvalidAvatar";
        n[n.UserMissingCreatedUserResult = 219] = "UserMissingCreatedUserResult";
        n[n.UserCannotChangeUniqueNameYet = 220] = "UserCannotChangeUniqueNameYet";
        n[n.UserCannotChangeDisplayNameYet = 221] = "UserCannotChangeDisplayNameYet";
        n[n.UserCannotChangeEmail = 222] = "UserCannotChangeEmail";
        n[n.UserUniqueNameMustStartWithLetter = 223] = "UserUniqueNameMustStartWithLetter";
        n[n.UserNoLinkedAccountsSupportFriendListings = 224] = "UserNoLinkedAccountsSupportFriendListings";
        n[n.UserAcknowledgmentTableFull = 225] = "UserAcknowledgmentTableFull";
        n[n.UserCreationDestinyMembershipRequired = 226] = "UserCreationDestinyMembershipRequired";
        n[n.UserFriendsTokenNeedsRefresh = 227] = "UserFriendsTokenNeedsRefresh";
        n[n.MessagingUnknownError = 300] = "MessagingUnknownError";
        n[n.MessagingSelfError = 301] = "MessagingSelfError";
        n[n.MessagingSendThrottle = 302] = "MessagingSendThrottle";
        n[n.MessagingNoBody = 303] = "MessagingNoBody";
        n[n.MessagingTooManyUsers = 304] = "MessagingTooManyUsers";
        n[n.MessagingCanNotLeaveConversation = 305] = "MessagingCanNotLeaveConversation";
        n[n.MessagingUnableToSend = 306] = "MessagingUnableToSend";
        n[n.MessagingDeletedUserForbidden = 307] = "MessagingDeletedUserForbidden";
        n[n.MessagingCannotDeleteExternalConversation = 308] = "MessagingCannotDeleteExternalConversation";
        n[n.MessagingGroupChatDisabled = 309] = "MessagingGroupChatDisabled";
        n[n.MessagingMustIncludeSelfInPrivateMessage = 310] = "MessagingMustIncludeSelfInPrivateMessage";
        n[n.MessagingSenderIsBanned = 311] = "MessagingSenderIsBanned";
        n[n.AddSurveyAnswersUnknownSqlException = 400] = "AddSurveyAnswersUnknownSqlException";
        n[n.ForumBodyCannotBeEmpty = 500] = "ForumBodyCannotBeEmpty";
        n[n.ForumSubjectCannotBeEmptyOnTopicPost = 501] = "ForumSubjectCannotBeEmptyOnTopicPost";
        n[n.ForumCannotLocateParentPost = 502] = "ForumCannotLocateParentPost";
        n[n.ForumThreadLockedForReplies = 503] = "ForumThreadLockedForReplies";
        n[n.ForumUnknownSqlResultDuringCreatePost = 504] = "ForumUnknownSqlResultDuringCreatePost";
        n[n.ForumUnknownTagCreationError = 505] = "ForumUnknownTagCreationError";
        n[n.ForumUnknownSqlResultDuringTagItem = 506] = "ForumUnknownSqlResultDuringTagItem";
        n[n.ForumUnknownExceptionCreatePost = 507] = "ForumUnknownExceptionCreatePost";
        n[n.ForumQuestionMustBeTopicPost = 508] = "ForumQuestionMustBeTopicPost";
        n[n.ForumExceptionDuringTagSearch = 509] = "ForumExceptionDuringTagSearch";
        n[n.ForumExceptionDuringTopicRetrieval = 510] = "ForumExceptionDuringTopicRetrieval";
        n[n.ForumAliasedTagError = 511] = "ForumAliasedTagError";
        n[n.ForumCannotLocateThread = 512] = "ForumCannotLocateThread";
        n[n.ForumUnknownExceptionEditPost = 513] = "ForumUnknownExceptionEditPost";
        n[n.ForumCannotLocatePost = 514] = "ForumCannotLocatePost";
        n[n.ForumUnknownExceptionGetOrCreateTags = 515] = "ForumUnknownExceptionGetOrCreateTags";
        n[n.ForumEditPermissionDenied = 516] = "ForumEditPermissionDenied";
        n[n.ForumUnknownSqlResultDuringTagIdRetrieval = 517] = "ForumUnknownSqlResultDuringTagIdRetrieval";
        n[n.ForumCannotGetRating = 518] = "ForumCannotGetRating";
        n[n.ForumUnknownExceptionGetRating = 519] = "ForumUnknownExceptionGetRating";
        n[n.ForumRatingsAccessError = 520] = "ForumRatingsAccessError";
        n[n.ForumRelatedPostAccessError = 521] = "ForumRelatedPostAccessError";
        n[n.ForumLatestReplyAccessError = 522] = "ForumLatestReplyAccessError";
        n[n.ForumUserStatusAccessError = 523] = "ForumUserStatusAccessError";
        n[n.ForumAuthorAccessError = 524] = "ForumAuthorAccessError";
        n[n.ForumGroupAccessError = 525] = "ForumGroupAccessError";
        n[n.ForumUrlExpectedButMissing = 526] = "ForumUrlExpectedButMissing";
        n[n.ForumRepliesCannotBeEmpty = 527] = "ForumRepliesCannotBeEmpty";
        n[n.ForumRepliesCannotBeInDifferentGroups = 528] = "ForumRepliesCannotBeInDifferentGroups";
        n[n.ForumSubTopicCannotBeCreatedAtThisThreadLevel = 529] = "ForumSubTopicCannotBeCreatedAtThisThreadLevel";
        n[n.ForumCannotCreateContentTopic = 530] = "ForumCannotCreateContentTopic";
        n[n.ForumTopicDoesNotExist = 531] = "ForumTopicDoesNotExist";
        n[n.ForumContentCommentsNotAllowed = 532] = "ForumContentCommentsNotAllowed";
        n[n.ForumUnknownSqlResultDuringEditPost = 533] = "ForumUnknownSqlResultDuringEditPost";
        n[n.ForumUnknownSqlResultDuringGetPost = 534] = "ForumUnknownSqlResultDuringGetPost";
        n[n.ForumPostValidationBadUrl = 535] = "ForumPostValidationBadUrl";
        n[n.ForumBodyTooLong = 536] = "ForumBodyTooLong";
        n[n.ForumSubjectTooLong = 537] = "ForumSubjectTooLong";
        n[n.ForumAnnouncementNotAllowed = 538] = "ForumAnnouncementNotAllowed";
        n[n.ForumCannotShareOwnPost = 539] = "ForumCannotShareOwnPost";
        n[n.ForumEditNoOp = 540] = "ForumEditNoOp";
        n[n.ForumUnknownDatabaseErrorDuringGetPost = 541] = "ForumUnknownDatabaseErrorDuringGetPost";
        n[n.ForumExceeedMaximumRowLimit = 542] = "ForumExceeedMaximumRowLimit";
        n[n.ForumCannotSharePrivatePost = 543] = "ForumCannotSharePrivatePost";
        n[n.ForumCannotCrossPostBetweenGroups = 544] = "ForumCannotCrossPostBetweenGroups";
        n[n.ForumIncompatibleCategories = 555] = "ForumIncompatibleCategories";
        n[n.ForumCannotUseTheseCategoriesOnNonTopicPost = 556] = "ForumCannotUseTheseCategoriesOnNonTopicPost";
        n[n.ForumCanOnlyDeleteTopics = 557] = "ForumCanOnlyDeleteTopics";
        n[n.ForumDeleteSqlException = 558] = "ForumDeleteSqlException";
        n[n.ForumDeleteSqlUnknownResult = 559] = "ForumDeleteSqlUnknownResult";
        n[n.ForumTooManyTags = 560] = "ForumTooManyTags";
        n[n.ForumCanOnlyRateTopics = 561] = "ForumCanOnlyRateTopics";
        n[n.ForumBannedPostsCannotBeEdited = 562] = "ForumBannedPostsCannotBeEdited";
        n[n.ForumThreadRootIsBanned = 563] = "ForumThreadRootIsBanned";
        n[n.ForumCannotUseOfficialTagCategoryAsTag = 564] = "ForumCannotUseOfficialTagCategoryAsTag";
        n[n.ForumAnswerCannotBeMadeOnCreatePost = 565] = "ForumAnswerCannotBeMadeOnCreatePost";
        n[n.ForumAnswerCannotBeMadeOnEditPost = 566] = "ForumAnswerCannotBeMadeOnEditPost";
        n[n.ForumAnswerPostIdIsNotADirectReplyOfQuestion = 567] = "ForumAnswerPostIdIsNotADirectReplyOfQuestion";
        n[n.ForumAnswerTopicIdIsNotAQuestion = 568] = "ForumAnswerTopicIdIsNotAQuestion";
        n[n.ForumUnknownExceptionDuringMarkAnswer = 569] = "ForumUnknownExceptionDuringMarkAnswer";
        n[n.ForumUnknownSqlResultDuringMarkAnswer = 570] = "ForumUnknownSqlResultDuringMarkAnswer";
        n[n.ForumCannotRateYourOwnPosts = 571] = "ForumCannotRateYourOwnPosts";
        n[n.ForumPollsMustBeTheFirstPostInTopic = 572] = "ForumPollsMustBeTheFirstPostInTopic";
        n[n.ForumInvalidPollInput = 573] = "ForumInvalidPollInput";
        n[n.ForumGroupAdminEditNonMember = 574] = "ForumGroupAdminEditNonMember";
        n[n.ForumCannotEditModeratorEditedPost = 575] = "ForumCannotEditModeratorEditedPost";
        n[n.ForumRequiresDestinyMembership = 576] = "ForumRequiresDestinyMembership";
        n[n.ForumUnexpectedError = 577] = "ForumUnexpectedError";
        n[n.ForumAgeLock = 578] = "ForumAgeLock";
        n[n.ForumMaxPages = 579] = "ForumMaxPages";
        n[n.ForumMaxPagesOldestFirst = 580] = "ForumMaxPagesOldestFirst";
        n[n.ForumCannotApplyForumIdWithoutTags = 581] = "ForumCannotApplyForumIdWithoutTags";
        n[n.ForumCannotApplyForumIdToNonTopics = 582] = "ForumCannotApplyForumIdToNonTopics";
        n[n.ForumCannotDownvoteCommunityCreations = 583] = "ForumCannotDownvoteCommunityCreations";
        n[n.ForumTopicsMustHaveOfficialCategory = 584] = "ForumTopicsMustHaveOfficialCategory";
        n[n.ForumRecruitmentTopicMalformed = 585] = "ForumRecruitmentTopicMalformed";
        n[n.ForumRecruitmentTopicNotFound = 586] = "ForumRecruitmentTopicNotFound";
        n[n.ForumRecruitmentTopicNoSlotsRemaining = 587] = "ForumRecruitmentTopicNoSlotsRemaining";
        n[n.ForumRecruitmentTopicKickBan = 588] = "ForumRecruitmentTopicKickBan";
        n[n.ForumRecruitmentTopicRequirementsNotMet = 589] = "ForumRecruitmentTopicRequirementsNotMet";
        n[n.ForumRecruitmentTopicNoPlayers = 590] = "ForumRecruitmentTopicNoPlayers";
        n[n.ForumRecruitmentApproveFailMessageBan = 591] = "ForumRecruitmentApproveFailMessageBan";
        n[n.ForumRecruitmentGlobalBan = 592] = "ForumRecruitmentGlobalBan";
        n[n.ForumUserBannedFromThisTopic = 593] = "ForumUserBannedFromThisTopic";
        n[n.ForumRecruitmentFireteamMembersOnly = 594] = "ForumRecruitmentFireteamMembersOnly";
        n[n.GroupMembershipApplicationAlreadyResolved = 601] = "GroupMembershipApplicationAlreadyResolved";
        n[n.GroupMembershipAlreadyApplied = 602] = "GroupMembershipAlreadyApplied";
        n[n.GroupMembershipInsufficientPrivileges = 603] = "GroupMembershipInsufficientPrivileges";
        n[n.GroupIdNotReturnedFromCreation = 604] = "GroupIdNotReturnedFromCreation";
        n[n.GroupSearchInvalidParameters = 605] = "GroupSearchInvalidParameters";
        n[n.GroupMembershipPendingApplicationNotFound = 606] = "GroupMembershipPendingApplicationNotFound";
        n[n.GroupInvalidId = 607] = "GroupInvalidId";
        n[n.GroupInvalidMembershipId = 608] = "GroupInvalidMembershipId";
        n[n.GroupInvalidMembershipType = 609] = "GroupInvalidMembershipType";
        n[n.GroupMissingTags = 610] = "GroupMissingTags";
        n[n.GroupMembershipNotFound = 611] = "GroupMembershipNotFound";
        n[n.GroupInvalidRating = 612] = "GroupInvalidRating";
        n[n.GroupUserFollowingAccessError = 613] = "GroupUserFollowingAccessError";
        n[n.GroupUserMembershipAccessError = 614] = "GroupUserMembershipAccessError";
        n[n.GroupCreatorAccessError = 615] = "GroupCreatorAccessError";
        n[n.GroupAdminAccessError = 616] = "GroupAdminAccessError";
        n[n.GroupPrivatePostNotViewable = 617] = "GroupPrivatePostNotViewable";
        n[n.GroupMembershipNotLoggedIn = 618] = "GroupMembershipNotLoggedIn";
        n[n.GroupNotDeleted = 619] = "GroupNotDeleted";
        n[n.GroupUnknownErrorUndeletingGroup = 620] = "GroupUnknownErrorUndeletingGroup";
        n[n.GroupDeleted = 621] = "GroupDeleted";
        n[n.GroupNotFound = 622] = "GroupNotFound";
        n[n.GroupMemberBanned = 623] = "GroupMemberBanned";
        n[n.GroupMembershipClosed = 624] = "GroupMembershipClosed";
        n[n.GroupPrivatePostOverrideError = 625] = "GroupPrivatePostOverrideError";
        n[n.GroupNameTaken = 626] = "GroupNameTaken";
        n[n.GroupDeletionGracePeriodExpired = 627] = "GroupDeletionGracePeriodExpired";
        n[n.GroupCannotCheckBanStatus = 628] = "GroupCannotCheckBanStatus";
        n[n.GroupMaximumMembershipCountReached = 629] = "GroupMaximumMembershipCountReached";
        n[n.NoDestinyAccountForClanPlatform = 630] = "NoDestinyAccountForClanPlatform";
        n[n.AlreadyRequestingMembershipForClanPlatform = 631] = "AlreadyRequestingMembershipForClanPlatform";
        n[n.AlreadyClanMemberOnPlatform = 632] = "AlreadyClanMemberOnPlatform";
        n[n.GroupJoinedCannotSetClanName = 633] = "GroupJoinedCannotSetClanName";
        n[n.GroupLeftCannotClearClanName = 634] = "GroupLeftCannotClearClanName";
        n[n.GroupRelationshipRequestPending = 635] = "GroupRelationshipRequestPending";
        n[n.GroupRelationshipRequestBlocked = 636] = "GroupRelationshipRequestBlocked";
        n[n.GroupRelationshipRequestNotFound = 637] = "GroupRelationshipRequestNotFound";
        n[n.GroupRelationshipBlockNotFound = 638] = "GroupRelationshipBlockNotFound";
        n[n.GroupRelationshipNotFound = 639] = "GroupRelationshipNotFound";
        n[n.GroupAlreadyAllied = 641] = "GroupAlreadyAllied";
        n[n.GroupAlreadyMember = 642] = "GroupAlreadyMember";
        n[n.GroupRelationshipAlreadyExists = 643] = "GroupRelationshipAlreadyExists";
        n[n.InvalidGroupTypesForRelationshipRequest = 644] = "InvalidGroupTypesForRelationshipRequest";
        n[n.GroupAtMaximumAlliances = 646] = "GroupAtMaximumAlliances";
        n[n.GroupCannotSetClanOnlySettings = 647] = "GroupCannotSetClanOnlySettings";
        n[n.ClanCannotSetTwoDefaultPostTypes = 648] = "ClanCannotSetTwoDefaultPostTypes";
        n[n.GroupMemberInvalidMemberType = 649] = "GroupMemberInvalidMemberType";
        n[n.GroupInvalidPlatformType = 650] = "GroupInvalidPlatformType";
        n[n.GroupMemberInvalidSort = 651] = "GroupMemberInvalidSort";
        n[n.GroupInvalidResolveState = 652] = "GroupInvalidResolveState";
        n[n.ClanAlreadyEnabledForPlatform = 653] = "ClanAlreadyEnabledForPlatform";
        n[n.ClanNotEnabledForPlatform = 654] = "ClanNotEnabledForPlatform";
        n[n.ClanEnabledButCouldNotJoinNoAccount = 655] = "ClanEnabledButCouldNotJoinNoAccount";
        n[n.ClanEnabledButCouldNotJoinAlreadyMember = 656] = "ClanEnabledButCouldNotJoinAlreadyMember";
        n[n.ClanCannotJoinNoCredential = 657] = "ClanCannotJoinNoCredential";
        n[n.NoClanMembershipForPlatform = 658] = "NoClanMembershipForPlatform";
        n[n.GroupToGroupFollowLimitReached = 659] = "GroupToGroupFollowLimitReached";
        n[n.ChildGroupAlreadyInAlliance = 660] = "ChildGroupAlreadyInAlliance";
        n[n.OwnerGroupAlreadyInAlliance = 661] = "OwnerGroupAlreadyInAlliance";
        n[n.AllianceOwnerCannotJoinAlliance = 662] = "AllianceOwnerCannotJoinAlliance";
        n[n.GroupNotInAlliance = 663] = "GroupNotInAlliance";
        n[n.ChildGroupCannotInviteToAlliance = 664] = "ChildGroupCannotInviteToAlliance";
        n[n.GroupToGroupAlreadyFollowed = 665] = "GroupToGroupAlreadyFollowed";
        n[n.GroupToGroupNotFollowing = 666] = "GroupToGroupNotFollowing";
        n[n.ClanMaximumMembershipReached = 667] = "ClanMaximumMembershipReached";
        n[n.ClanNameNotValid = 668] = "ClanNameNotValid";
        n[n.ClanNameNotValidError = 669] = "ClanNameNotValidError";
        n[n.AllianceOwnerNotDefined = 670] = "AllianceOwnerNotDefined";
        n[n.AllianceChildNotDefined = 671] = "AllianceChildNotDefined";
        n[n.ClanNameIllegalCharacters = 672] = "ClanNameIllegalCharacters";
        n[n.ClanTagIllegalCharacters = 673] = "ClanTagIllegalCharacters";
        n[n.ClanRequiresInvitation = 674] = "ClanRequiresInvitation";
        n[n.ClanMembershipClosed = 675] = "ClanMembershipClosed";
        n[n.ClanInviteAlreadyMember = 676] = "ClanInviteAlreadyMember";
        n[n.GroupInviteAlreadyMember = 677] = "GroupInviteAlreadyMember";
        n[n.GroupJoinApprovalRequired = 678] = "GroupJoinApprovalRequired";
        n[n.ClanTagRequired = 679] = "ClanTagRequired";
        n[n.GroupNameCannotStartOrEndWithWhiteSpace = 680] = "GroupNameCannotStartOrEndWithWhiteSpace";
        n[n.ClanCallsignCannotStartOrEndWithWhiteSpace = 681] = "ClanCallsignCannotStartOrEndWithWhiteSpace";
        n[n.ClanMigrationFailed = 682] = "ClanMigrationFailed";
        n[n.ClanNotEnabledAlreadyMemberOfAnotherClan = 683] = "ClanNotEnabledAlreadyMemberOfAnotherClan";
        n[n.GroupModerationNotPermittedOnNonMembers = 684] = "GroupModerationNotPermittedOnNonMembers";
        n[n.ClanCreationInWorldServerFailed = 685] = "ClanCreationInWorldServerFailed";
        n[n.ClanNotFound = 686] = "ClanNotFound";
        n[n.ClanMembershipLevelDoesNotPermitThatAction = 687] = "ClanMembershipLevelDoesNotPermitThatAction";
        n[n.ClanMemberNotFound = 688] = "ClanMemberNotFound";
        n[n.ClanMissingMembershipApprovers = 689] = "ClanMissingMembershipApprovers";
        n[n.ClanInWrongStateForRequestedAction = 690] = "ClanInWrongStateForRequestedAction";
        n[n.ClanNameAlreadyUsed = 691] = "ClanNameAlreadyUsed";
        n[n.ClanTooFewMembers = 692] = "ClanTooFewMembers";
        n[n.ActivitiesUnknownException = 701] = "ActivitiesUnknownException";
        n[n.ActivitiesParameterNull = 702] = "ActivitiesParameterNull";
        n[n.ActivityCountsDiabled = 703] = "ActivityCountsDiabled";
        n[n.ActivitySearchInvalidParameters = 704] = "ActivitySearchInvalidParameters";
        n[n.ActivityPermissionDenied = 705] = "ActivityPermissionDenied";
        n[n.ShareAlreadyShared = 706] = "ShareAlreadyShared";
        n[n.ActivityLoggingDisabled = 707] = "ActivityLoggingDisabled";
        n[n.ItemAlreadyFollowed = 801] = "ItemAlreadyFollowed";
        n[n.ItemNotFollowed = 802] = "ItemNotFollowed";
        n[n.CannotFollowSelf = 803] = "CannotFollowSelf";
        n[n.GroupFollowLimitExceeded = 804] = "GroupFollowLimitExceeded";
        n[n.TagFollowLimitExceeded = 805] = "TagFollowLimitExceeded";
        n[n.UserFollowLimitExceeded = 806] = "UserFollowLimitExceeded";
        n[n.FollowUnsupportedEntityType = 807] = "FollowUnsupportedEntityType";
        n[n.NoValidTagsInList = 900] = "NoValidTagsInList";
        n[n.BelowMinimumSuggestionLength = 901] = "BelowMinimumSuggestionLength";
        n[n.CannotGetSuggestionsOnMultipleTagsSimultaneously = 902] = "CannotGetSuggestionsOnMultipleTagsSimultaneously";
        n[n.NotAValidPartialTag = 903] = "NotAValidPartialTag";
        n[n.TagSuggestionsUnknownSqlResult = 904] = "TagSuggestionsUnknownSqlResult";
        n[n.TagsUnableToLoadPopularTagsFromDatabase = 905] = "TagsUnableToLoadPopularTagsFromDatabase";
        n[n.TagInvalid = 906] = "TagInvalid";
        n[n.TagNotFound = 907] = "TagNotFound";
        n[n.SingleTagExpected = 908] = "SingleTagExpected";
        n[n.TagsExceededMaximumPerItem = 909] = "TagsExceededMaximumPerItem";
        n[n.IgnoreInvalidParameters = 1e3] = "IgnoreInvalidParameters";
        n[n.IgnoreSqlException = 1001] = "IgnoreSqlException";
        n[n.IgnoreErrorRetrievingGroupPermissions = 1002] = "IgnoreErrorRetrievingGroupPermissions";
        n[n.IgnoreErrorInsufficientPermission = 1003] = "IgnoreErrorInsufficientPermission";
        n[n.IgnoreErrorRetrievingItem = 1004] = "IgnoreErrorRetrievingItem";
        n[n.IgnoreCannotIgnoreSelf = 1005] = "IgnoreCannotIgnoreSelf";
        n[n.IgnoreIllegalType = 1006] = "IgnoreIllegalType";
        n[n.IgnoreNotFound = 1007] = "IgnoreNotFound";
        n[n.IgnoreUserGloballyIgnored = 1008] = "IgnoreUserGloballyIgnored";
        n[n.IgnoreUserIgnored = 1009] = "IgnoreUserIgnored";
        n[n.NotificationSettingInvalid = 1100] = "NotificationSettingInvalid";
        n[n.PsnApiExpiredAccessToken = 1204] = "PsnApiExpiredAccessToken";
        n[n.PSNExForbidden = 1205] = "PSNExForbidden";
        n[n.PSNExSystemDisabled = 1218] = "PSNExSystemDisabled";
        n[n.PsnApiErrorCodeUnknown = 1223] = "PsnApiErrorCodeUnknown";
        n[n.PsnApiErrorWebException = 1224] = "PsnApiErrorWebException";
        n[n.PsnApiBadRequest = 1225] = "PsnApiBadRequest";
        n[n.PsnApiAccessTokenRequired = 1226] = "PsnApiAccessTokenRequired";
        n[n.PsnApiInvalidAccessToken = 1227] = "PsnApiInvalidAccessToken";
        n[n.PsnApiBannedUser = 1229] = "PsnApiBannedUser";
        n[n.PsnApiAccountUpgradeRequired = 1230] = "PsnApiAccountUpgradeRequired";
        n[n.PsnApiServiceTemporarilyUnavailable = 1231] = "PsnApiServiceTemporarilyUnavailable";
        n[n.PsnApiServerBusy = 1232] = "PsnApiServerBusy";
        n[n.PsnApiUnderMaintenance = 1233] = "PsnApiUnderMaintenance";
        n[n.PsnApiProfileUserNotFound = 1234] = "PsnApiProfileUserNotFound";
        n[n.PsnApiProfilePrivacyRestriction = 1235] = "PsnApiProfilePrivacyRestriction";
        n[n.PsnApiProfileUnderMaintenance = 1236] = "PsnApiProfileUnderMaintenance";
        n[n.PsnApiAccountAttributeMissing = 1237] = "PsnApiAccountAttributeMissing";
        n[n.XblExSystemDisabled = 1300] = "XblExSystemDisabled";
        n[n.XblExUnknownError = 1301] = "XblExUnknownError";
        n[n.XblApiErrorWebException = 1302] = "XblApiErrorWebException";
        n[n.XblStsTokenInvalid = 1303] = "XblStsTokenInvalid";
        n[n.XblStsMissingToken = 1304] = "XblStsMissingToken";
        n[n.XblStsExpiredToken = 1305] = "XblStsExpiredToken";
        n[n.XblAccessToTheSandboxDenied = 1306] = "XblAccessToTheSandboxDenied";
        n[n.XblMsaResponseMissing = 1307] = "XblMsaResponseMissing";
        n[n.XblMsaAccessTokenExpired = 1308] = "XblMsaAccessTokenExpired";
        n[n.XblMsaInvalidRequest = 1309] = "XblMsaInvalidRequest";
        n[n.XblMsaFriendsRequireSignIn = 1310] = "XblMsaFriendsRequireSignIn";
        n[n.XblUserActionRequired = 1311] = "XblUserActionRequired";
        n[n.XblParentalControls = 1312] = "XblParentalControls";
        n[n.XblDeveloperAccount = 1313] = "XblDeveloperAccount";
        n[n.XblUserTokenExpired = 1314] = "XblUserTokenExpired";
        n[n.XblUserTokenInvalid = 1315] = "XblUserTokenInvalid";
        n[n.XblOffline = 1316] = "XblOffline";
        n[n.XblUnknownErrorCode = 1317] = "XblUnknownErrorCode";
        n[n.XblMsaInvalidGrant = 1318] = "XblMsaInvalidGrant";
        n[n.ReportNotYetResolved = 1400] = "ReportNotYetResolved";
        n[n.ReportOverturnDoesNotChangeDecision = 1401] = "ReportOverturnDoesNotChangeDecision";
        n[n.ReportNotFound = 1402] = "ReportNotFound";
        n[n.ReportAlreadyReported = 1403] = "ReportAlreadyReported";
        n[n.ReportInvalidResolution = 1404] = "ReportInvalidResolution";
        n[n.ReportNotAssignedToYou = 1405] = "ReportNotAssignedToYou";
        n[n.LegacyGameStatsSystemDisabled = 1500] = "LegacyGameStatsSystemDisabled";
        n[n.LegacyGameStatsUnknownError = 1501] = "LegacyGameStatsUnknownError";
        n[n.LegacyGameStatsMalformedSneakerNetCode = 1502] = "LegacyGameStatsMalformedSneakerNetCode";
        n[n.DestinyAccountAcquisitionFailure = 1600] = "DestinyAccountAcquisitionFailure";
        n[n.DestinyAccountNotFound = 1601] = "DestinyAccountNotFound";
        n[n.DestinyBuildStatsDatabaseError = 1602] = "DestinyBuildStatsDatabaseError";
        n[n.DestinyCharacterStatsDatabaseError = 1603] = "DestinyCharacterStatsDatabaseError";
        n[n.DestinyPvPStatsDatabaseError = 1604] = "DestinyPvPStatsDatabaseError";
        n[n.DestinyPvEStatsDatabaseError = 1605] = "DestinyPvEStatsDatabaseError";
        n[n.DestinyGrimoireStatsDatabaseError = 1606] = "DestinyGrimoireStatsDatabaseError";
        n[n.DestinyStatsParameterMembershipTypeParseError = 1607] = "DestinyStatsParameterMembershipTypeParseError";
        n[n.DestinyStatsParameterMembershipIdParseError = 1608] = "DestinyStatsParameterMembershipIdParseError";
        n[n.DestinyStatsParameterRangeParseError = 1609] = "DestinyStatsParameterRangeParseError";
        n[n.DestinyStringItemHashNotFound = 1610] = "DestinyStringItemHashNotFound";
        n[n.DestinyStringSetNotFound = 1611] = "DestinyStringSetNotFound";
        n[n.DestinyContentLookupNotFoundForKey = 1612] = "DestinyContentLookupNotFoundForKey";
        n[n.DestinyContentItemNotFound = 1613] = "DestinyContentItemNotFound";
        n[n.DestinyContentSectionNotFound = 1614] = "DestinyContentSectionNotFound";
        n[n.DestinyContentPropertyNotFound = 1615] = "DestinyContentPropertyNotFound";
        n[n.DestinyContentConfigNotFound = 1616] = "DestinyContentConfigNotFound";
        n[n.DestinyContentPropertyBucketValueNotFound = 1617] = "DestinyContentPropertyBucketValueNotFound";
        n[n.DestinyUnexpectedError = 1618] = "DestinyUnexpectedError";
        n[n.DestinyInvalidAction = 1619] = "DestinyInvalidAction";
        n[n.DestinyCharacterNotFound = 1620] = "DestinyCharacterNotFound";
        n[n.DestinyInvalidFlag = 1621] = "DestinyInvalidFlag";
        n[n.DestinyInvalidRequest = 1622] = "DestinyInvalidRequest";
        n[n.DestinyItemNotFound = 1623] = "DestinyItemNotFound";
        n[n.DestinyInvalidCustomizationChoices = 1624] = "DestinyInvalidCustomizationChoices";
        n[n.DestinyVendorItemNotFound = 1625] = "DestinyVendorItemNotFound";
        n[n.DestinyInternalError = 1626] = "DestinyInternalError";
        n[n.DestinyVendorNotFound = 1627] = "DestinyVendorNotFound";
        n[n.DestinyRecentActivitiesDatabaseError = 1628] = "DestinyRecentActivitiesDatabaseError";
        n[n.DestinyItemBucketNotFound = 1629] = "DestinyItemBucketNotFound";
        n[n.DestinyInvalidMembershipType = 1630] = "DestinyInvalidMembershipType";
        n[n.DestinyVersionIncompatibility = 1631] = "DestinyVersionIncompatibility";
        n[n.DestinyItemAlreadyInInventory = 1632] = "DestinyItemAlreadyInInventory";
        n[n.DestinyBucketNotFound = 1633] = "DestinyBucketNotFound";
        n[n.DestinyCharacterNotInTower = 1634] = "DestinyCharacterNotInTower";
        n[n.DestinyCharacterNotLoggedIn = 1635] = "DestinyCharacterNotLoggedIn";
        n[n.DestinyDefinitionsNotLoaded = 1636] = "DestinyDefinitionsNotLoaded";
        n[n.DestinyInventoryFull = 1637] = "DestinyInventoryFull";
        n[n.DestinyItemFailedLevelCheck = 1638] = "DestinyItemFailedLevelCheck";
        n[n.DestinyItemFailedUnlockCheck = 1639] = "DestinyItemFailedUnlockCheck";
        n[n.DestinyItemUnequippable = 1640] = "DestinyItemUnequippable";
        n[n.DestinyItemUniqueEquipRestricted = 1641] = "DestinyItemUniqueEquipRestricted";
        n[n.DestinyNoRoomInDestination = 1642] = "DestinyNoRoomInDestination";
        n[n.DestinyServiceFailure = 1643] = "DestinyServiceFailure";
        n[n.DestinyServiceRetired = 1644] = "DestinyServiceRetired";
        n[n.DestinyTransferFailed = 1645] = "DestinyTransferFailed";
        n[n.DestinyTransferNotFoundForSourceBucket = 1646] = "DestinyTransferNotFoundForSourceBucket";
        n[n.DestinyUnexpectedResultInVendorTransferCheck = 1647] = "DestinyUnexpectedResultInVendorTransferCheck";
        n[n.DestinyUniquenessViolation = 1648] = "DestinyUniquenessViolation";
        n[n.DestinyErrorDeserializationFailure = 1649] = "DestinyErrorDeserializationFailure";
        n[n.DestinyValidAccountTicketRequired = 1650] = "DestinyValidAccountTicketRequired";
        n[n.DestinyShardRelayClientTimeout = 1651] = "DestinyShardRelayClientTimeout";
        n[n.DestinyShardRelayProxyTimeout = 1652] = "DestinyShardRelayProxyTimeout";
        n[n.DestinyPGCRNotFound = 1653] = "DestinyPGCRNotFound";
        n[n.DestinyAccountMustBeOffline = 1654] = "DestinyAccountMustBeOffline";
        n[n.DestinyCanOnlyEquipInGame = 1655] = "DestinyCanOnlyEquipInGame";
        n[n.DestinyCannotPerformActionOnEquippedItem = 1656] = "DestinyCannotPerformActionOnEquippedItem";
        n[n.DestinyQuestAlreadyCompleted = 1657] = "DestinyQuestAlreadyCompleted";
        n[n.DestinyQuestAlreadyTracked = 1658] = "DestinyQuestAlreadyTracked";
        n[n.DestinyTrackableQuestsFull = 1659] = "DestinyTrackableQuestsFull";
        n[n.DestinyItemNotTransferrable = 1660] = "DestinyItemNotTransferrable";
        n[n.DestinyVendorPurchaseNotAllowed = 1661] = "DestinyVendorPurchaseNotAllowed";
        n[n.DestinyContentVersionMismatch = 1662] = "DestinyContentVersionMismatch";
        n[n.DestinyItemActionForbidden = 1663] = "DestinyItemActionForbidden";
        n[n.DestinyRefundInvalid = 1664] = "DestinyRefundInvalid";
        n[n.DestinyPrivacyRestriction = 1665] = "DestinyPrivacyRestriction";
        n[n.DestinyActionInsufficientPrivileges = 1666] = "DestinyActionInsufficientPrivileges";
        n[n.DestinyInvalidClaimException = 1667] = "DestinyInvalidClaimException";
        n[n.DestinyLegacyPlatformRestricted = 1668] = "DestinyLegacyPlatformRestricted";
        n[n.DestinyLegacyPlatformInUse = 1669] = "DestinyLegacyPlatformInUse";
        n[n.DestinyLegacyPlatformInaccessible = 1670] = "DestinyLegacyPlatformInaccessible";
        n[n.FbInvalidRequest = 1800] = "FbInvalidRequest";
        n[n.FbRedirectMismatch = 1801] = "FbRedirectMismatch";
        n[n.FbAccessDenied = 1802] = "FbAccessDenied";
        n[n.FbUnsupportedResponseType = 1803] = "FbUnsupportedResponseType";
        n[n.FbInvalidScope = 1804] = "FbInvalidScope";
        n[n.FbUnsupportedGrantType = 1805] = "FbUnsupportedGrantType";
        n[n.FbInvalidGrant = 1806] = "FbInvalidGrant";
        n[n.InvitationExpired = 1900] = "InvitationExpired";
        n[n.InvitationUnknownType = 1901] = "InvitationUnknownType";
        n[n.InvitationInvalidResponseStatus = 1902] = "InvitationInvalidResponseStatus";
        n[n.InvitationInvalidType = 1903] = "InvitationInvalidType";
        n[n.InvitationAlreadyPending = 1904] = "InvitationAlreadyPending";
        n[n.InvitationInsufficientPermission = 1905] = "InvitationInsufficientPermission";
        n[n.InvitationInvalidCode = 1906] = "InvitationInvalidCode";
        n[n.InvitationInvalidTargetState = 1907] = "InvitationInvalidTargetState";
        n[n.InvitationCannotBeReactivated = 1908] = "InvitationCannotBeReactivated";
        n[n.InvitationNoRecipients = 1910] = "InvitationNoRecipients";
        n[n.InvitationGroupCannotSendToSelf = 1911] = "InvitationGroupCannotSendToSelf";
        n[n.InvitationTooManyRecipients = 1912] = "InvitationTooManyRecipients";
        n[n.InvitationInvalid = 1913] = "InvitationInvalid";
        n[n.InvitationNotFound = 1914] = "InvitationNotFound";
        n[n.TokenInvalid = 2e3] = "TokenInvalid";
        n[n.TokenBadFormat = 2001] = "TokenBadFormat";
        n[n.TokenAlreadyClaimed = 2002] = "TokenAlreadyClaimed";
        n[n.TokenAlreadyClaimedSelf = 2003] = "TokenAlreadyClaimedSelf";
        n[n.TokenThrottling = 2004] = "TokenThrottling";
        n[n.TokenUnknownRedemptionFailure = 2005] = "TokenUnknownRedemptionFailure";
        n[n.TokenPurchaseClaimFailedAfterTokenClaimed = 2006] = "TokenPurchaseClaimFailedAfterTokenClaimed";
        n[n.TokenUserAlreadyOwnsOffer = 2007] = "TokenUserAlreadyOwnsOffer";
        n[n.TokenInvalidOfferKey = 2008] = "TokenInvalidOfferKey";
        n[n.TokenEmailNotValidated = 2009] = "TokenEmailNotValidated";
        n[n.TokenProvisioningBadVendorOrOffer = 2010] = "TokenProvisioningBadVendorOrOffer";
        n[n.TokenPurchaseHistoryUnknownError = 2011] = "TokenPurchaseHistoryUnknownError";
        n[n.TokenThrottleStateUnknownError = 2012] = "TokenThrottleStateUnknownError";
        n[n.TokenUserAgeNotVerified = 2013] = "TokenUserAgeNotVerified";
        n[n.TokenExceededOfferMaximum = 2014] = "TokenExceededOfferMaximum";
        n[n.TokenNoAvailableUnlocks = 2015] = "TokenNoAvailableUnlocks";
        n[n.TokenMarketplaceInvalidPlatform = 2016] = "TokenMarketplaceInvalidPlatform";
        n[n.TokenNoMarketplaceCodesFound = 2017] = "TokenNoMarketplaceCodesFound";
        n[n.TokenOfferNotAvailableForRedemption = 2018] = "TokenOfferNotAvailableForRedemption";
        n[n.TokenUnlockPartialFailure = 2019] = "TokenUnlockPartialFailure";
        n[n.TokenMarketplaceInvalidRegion = 2020] = "TokenMarketplaceInvalidRegion";
        n[n.TokenOfferExpired = 2021] = "TokenOfferExpired";
        n[n.RAFExceededMaximumReferrals = 2022] = "RAFExceededMaximumReferrals";
        n[n.RAFDuplicateBond = 2023] = "RAFDuplicateBond";
        n[n.RAFNoValidVeteranDestinyMembershipsFound = 2024] = "RAFNoValidVeteranDestinyMembershipsFound";
        n[n.RAFNotAValidVeteranUser = 2025] = "RAFNotAValidVeteranUser";
        n[n.RAFCodeAlreadyClaimedOrNotFound = 2026] = "RAFCodeAlreadyClaimedOrNotFound";
        n[n.RAFMismatchedDestinyMembershipType = 2027] = "RAFMismatchedDestinyMembershipType";
        n[n.RAFUnableToAccessPurchaseHistory = 2028] = "RAFUnableToAccessPurchaseHistory";
        n[n.RAFUnableToCreateBond = 2029] = "RAFUnableToCreateBond";
        n[n.RAFUnableToFindBond = 2030] = "RAFUnableToFindBond";
        n[n.RAFUnableToRemoveBond = 2031] = "RAFUnableToRemoveBond";
        n[n.RAFCannotBondToSelf = 2032] = "RAFCannotBondToSelf";
        n[n.RAFInvalidPlatform = 2033] = "RAFInvalidPlatform";
        n[n.RAFGenerateThrottled = 2034] = "RAFGenerateThrottled";
        n[n.RAFUnableToCreateBondVersionMismatch = 2035] = "RAFUnableToCreateBondVersionMismatch";
        n[n.RAFUnableToRemoveBondVersionMismatch = 2036] = "RAFUnableToRemoveBondVersionMismatch";
        n[n.RAFRedeemThrottled = 2037] = "RAFRedeemThrottled";
        n[n.NoAvailableDiscountCode = 2038] = "NoAvailableDiscountCode";
        n[n.DiscountAlreadyClaimed = 2039] = "DiscountAlreadyClaimed";
        n[n.DiscountClaimFailure = 2040] = "DiscountClaimFailure";
        n[n.DiscountConfigurationFailure = 2041] = "DiscountConfigurationFailure";
        n[n.DiscountGenerationFailure = 2042] = "DiscountGenerationFailure";
        n[n.DiscountAlreadyExists = 2043] = "DiscountAlreadyExists";
        n[n.ApiExceededMaxKeys = 2100] = "ApiExceededMaxKeys";
        n[n.ApiInvalidOrExpiredKey = 2101] = "ApiInvalidOrExpiredKey";
        n[n.ApiKeyMissingFromRequest = 2102] = "ApiKeyMissingFromRequest";
        n[n.ApplicationDisabled = 2103] = "ApplicationDisabled";
        n[n.ApplicationExceededMax = 2104] = "ApplicationExceededMax";
        n[n.ApplicationDisallowedByScope = 2105] = "ApplicationDisallowedByScope";
        n[n.AuthorizationCodeInvalid = 2106] = "AuthorizationCodeInvalid";
        n[n.OriginHeaderDoesNotMatchKey = 2107] = "OriginHeaderDoesNotMatchKey";
        n[n.AccessNotPermittedByApplicationScope = 2108] = "AccessNotPermittedByApplicationScope";
        n[n.ApplicationNameIsTaken = 2109] = "ApplicationNameIsTaken";
        n[n.RefreshTokenNotYetValid = 2110] = "RefreshTokenNotYetValid";
        n[n.PartnershipInvalidType = 2200] = "PartnershipInvalidType";
        n[n.PartnershipValidationError = 2201] = "PartnershipValidationError";
        n[n.PartnershipValidationTimeout = 2202] = "PartnershipValidationTimeout";
        n[n.PartnershipAccessFailure = 2203] = "PartnershipAccessFailure";
        n[n.PartnershipAccountInvalid = 2204] = "PartnershipAccountInvalid";
        n[n.PartnershipGetAccountInfoFailure = 2205] = "PartnershipGetAccountInfoFailure";
        n[n.PartnershipDisabled = 2206] = "PartnershipDisabled";
        n[n.PartnershipAlreadyExists = 2207] = "PartnershipAlreadyExists"
    }(n.PlatformErrorCodes || (n.PlatformErrorCodes = {}));
    uu = n.PlatformErrorCodes,
    function(n) {
        n[n.Off = 0] = "Off";
        n[n.Unlock = 1] = "Unlock";
        n[n.Platform = 2] = "Platform";
        n[n.Expired = 3] = "Expired";
        n[n.Consumable = 4] = "Consumable"
    }(n.OfferRedeemMode || (n.OfferRedeemMode = {}));
    fu = n.OfferRedeemMode,
    function(n) {
        n[n.Unknown = 0] = "Unknown";
        n[n.Blue = 1] = "Blue";
        n[n.Yellow = 2] = "Yellow";
        n[n.Red = 3] = "Red"
    }(n.GlobalAlertLevel || (n.GlobalAlertLevel = {}));
    eu = n.GlobalAlertLevel,
    function(n) {
        n[n.GlobalAlert = 0] = "GlobalAlert";
        n[n.StreamingAlert = 1] = "StreamingAlert"
    }(n.GlobalAlertType || (n.GlobalAlertType = {}));
    ou = n.GlobalAlertType,
    function(n) {
        n[n.BNet = 0] = "BNet";
        n[n.Plain = 1] = "Plain";
        n[n.EMail = 2] = "EMail";
        n[n.Push = 3] = "Push"
    }(n.TemplateFormat || (n.TemplateFormat = {}));
    su = n.TemplateFormat,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Plaintext = 1] = "Plaintext";
        n[n.Html = 2] = "Html";
        n[n.Dropdown = 3] = "Dropdown";
        n[n.List = 4] = "List";
        n[n.Json = 5] = "Json";
        n[n.Content = 6] = "Content";
        n[n.Representation = 7] = "Representation";
        n[n.Set = 8] = "Set";
        n[n.File = 9] = "File";
        n[n.FolderSet = 10] = "FolderSet";
        n[n.Date = 11] = "Date";
        n[n.MultilinePlaintext = 12] = "MultilinePlaintext";
        n[n.DestinyContent = 13] = "DestinyContent"
    }(n.ContentPropertyDataTypeEnum || (n.ContentPropertyDataTypeEnum = {}));
    hu = n.ContentPropertyDataTypeEnum,
    function(n) {
        n[n.CreationDate = 0] = "CreationDate";
        n[n.CmsPath = 1] = "CmsPath";
        n[n.ModifiedDate = 2] = "ModifiedDate"
    }(n.ContentSortBy || (n.ContentSortBy = {}));
    cu = n.ContentSortBy,
    function(n) {
        n[n.All = 0] = "All";
        n[n.Today = 1] = "Today";
        n[n.Yesterday = 2] = "Yesterday";
        n[n.ThisMonth = 3] = "ThisMonth";
        n[n.ThisYear = 4] = "ThisYear";
        n[n.LastYear = 5] = "LastYear";
        n[n.EarlierThanLastYear = 6] = "EarlierThanLastYear"
    }(n.ContentDateRange || (n.ContentDateRange = {}));
    lu = n.ContentDateRange,
    function(n) {
        n[n.Create = 0] = "Create";
        n[n.Edit = 1] = "Edit";
        n[n.Delete = 2] = "Delete";
        n[n.Rate = 3] = "Rate";
        n[n.Follow = 4] = "Follow";
        n[n.Unfollow = 5] = "Unfollow";
        n[n.Apply = 6] = "Apply";
        n[n.Rescind = 7] = "Rescind";
        n[n.Approve = 8] = "Approve";
        n[n.Deny = 9] = "Deny";
        n[n.Kick = 10] = "Kick";
        n[n.EditMembershipType = 11] = "EditMembershipType";
        n[n.Like = 12] = "Like";
        n[n.Unlike = 13] = "Unlike";
        n[n.Share = 14] = "Share";
        n[n.TaggedGroup = 15] = "TaggedGroup";
        n[n.TaggedTopic = 16] = "TaggedTopic";
        n[n.AvatarChanged = 17] = "AvatarChanged";
        n[n.DisplayNameChanged = 18] = "DisplayNameChanged";
        n[n.TitleChanged = 19] = "TitleChanged";
        n[n.TitleUnlocked = 20] = "TitleUnlocked";
        n[n.GroupTopicCreate = 21] = "GroupTopicCreate";
        n[n.GroupReplyCreate = 22] = "GroupReplyCreate";
        n[n.Reply = 23] = "Reply";
        n[n.ChangeGroupName = 24] = "ChangeGroupName";
        n[n.GroupAllianceRejected = 26] = "GroupAllianceRejected";
        n[n.GroupAllianceApproved = 27] = "GroupAllianceApproved";
        n[n.GroupAllianceBroken = 28] = "GroupAllianceBroken";
        n[n.TransferFromVault = 1e3] = "TransferFromVault";
        n[n.TransferToVault = 1001] = "TransferToVault";
        n[n.TrackQuest = 1002] = "TrackQuest";
        n[n.UntrackQuest = 1003] = "UntrackQuest";
        n[n.EquipItem = 1004] = "EquipItem";
        n[n.BuyItem = 1005] = "BuyItem";
        n[n.LockItem = 1008] = "LockItem";
        n[n.UnlockItem = 1009] = "UnlockItem";
        n[n.RefundItem = 1010] = "RefundItem";
        n[n.None = -1] = "None"
    }(n.ActivityType || (n.ActivityType = {}));
    au = n.ActivityType,
    function(n) {
        n[n.User = 0] = "User";
        n[n.Post = 1] = "Post";
        n[n.Topic = 2] = "Topic";
        n[n.Group = 3] = "Group";
        n[n.Tag = 4] = "Tag";
        n[n.CommunityContent = 5] = "CommunityContent";
        n[n.Destiny = 6] = "Destiny";
        n[n.None = -1] = "None"
    }(n.AffectedItemType || (n.AffectedItemType = {}));
    vu = n.AffectedItemType,
    function(n) {
        n[n.Unresolved = 0] = "Unresolved";
        n[n.Accepted = 1] = "Accepted";
        n[n.Denied = 2] = "Denied";
        n[n.Rescinded = 3] = "Rescinded"
    }(n.GroupApplicationResolveState || (n.GroupApplicationResolveState = {}));
    yu = n.GroupApplicationResolveState,
    function(n) {
        n[n.Following = 1] = "Following";
        n[n.Unfollowing = 2] = "Unfollowing";
        n[n.ManagingGroupMembers = 8] = "ManagingGroupMembers";
        n[n.UpdatingSettings = 16] = "UpdatingSettings";
        n[n.ManagingGroups = 32] = "ManagingGroups"
    }(n.SuccessMessages || (n.SuccessMessages = {}));
    pu = n.SuccessMessages,
    function(n) {
        n[n.Newsletter = 1] = "Newsletter";
        n[n.System = 2] = "System";
        n[n.Marketing = 4] = "Marketing";
        n[n.UserResearch = 8] = "UserResearch";
        n[n.CustomerService = 16] = "CustomerService"
    }(n.OptInFlags || (n.OptInFlags = {}));
    wu = n.OptInFlags,
    function(n) {
        n[n.Specific = 0] = "Specific";
        n[n.MonthOnly = 1] = "MonthOnly";
        n[n.Custom = 2] = "Custom"
    }(n.ContentDateType || (n.ContentDateType = {}));
    bu = n.ContentDateType,
    function(n) {
        n[n.Unreviewed = 0] = "Unreviewed";
        n[n.Approved = 1] = "Approved";
        n[n.Rejected = 2] = "Rejected"
    }(n.InvitationResponseState || (n.InvitationResponseState = {}));
    ku = n.InvitationResponseState,
    function(n) {
        n[n.None = 0] = "None";
        n[n.GroupAllianceJoinFromChild = 1] = "GroupAllianceJoinFromChild";
        n[n.ClanJoinInvite = 2] = "ClanJoinInvite";
        n[n.GroupAllianceInviteFromOwner = 3] = "GroupAllianceInviteFromOwner";
        n[n.GroupJoinInvite = 4] = "GroupJoinInvite";
        n[n.ClanJoinRequest = 5] = "ClanJoinRequest";
        n[n.GroupJoinRequest = 6] = "GroupJoinRequest"
    }(n.InvitationType || (n.InvitationType = {}));
    du = n.InvitationType,
    function(n) {
        n[n.None = 0] = "None";
        n[n.User = 1] = "User";
        n[n.Group = 2] = "Group";
        n[n.Post = 3] = "Post";
        n[n.Invitation = 4] = "Invitation";
        n[n.Report = 5] = "Report";
        n[n.Activity = 6] = "Activity";
        n[n.Conversation = 7] = "Conversation";
        n[n.Tag = 8] = "Tag"
    }(n.EntityType || (n.EntityType = {}));
    gu = n.EntityType,
    function(n) {
        n[n.Contains = 0] = "Contains";
        n[n.Exact = 1] = "Exact";
        n[n.StartsWith = 2] = "StartsWith";
        n[n.EndsWith = 3] = "EndsWith"
    }(n.TextParameterSearchType || (n.TextParameterSearchType = {}));
    nf = n.TextParameterSearchType,
    function(n) {
        n[n.Offline = 0] = "Offline";
        n[n.Online = 1] = "Online";
        n[n.Idle = 2] = "Idle"
    }(n.FriendOnlineStatus || (n.FriendOnlineStatus = {}));
    tf = n.FriendOnlineStatus,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Image = 1] = "Image";
        n[n.Video = 2] = "Video";
        n[n.Youtube = 3] = "Youtube"
    }(n.ForumMediaType || (n.ForumMediaType = {}));
    rf = n.ForumMediaType,
    function(n) {
        n[n.Empty = 0] = "Empty";
        n[n.Default = 1] = "Default";
        n[n.Discussed = 2] = "Discussed";
        n[n.CoolStory = 3] = "CoolStory";
        n[n.HeatingUp = 4] = "HeatingUp";
        n[n.Hot = 5] = "Hot"
    }(n.ForumPostPopularity || (n.ForumPostPopularity = {}));
    uf = n.ForumPostPopularity,
    function(n) {
        n[n.None = 0] = "None";
        n[n.TextOnly = 1] = "TextOnly";
        n[n.Media = 2] = "Media";
        n[n.Link = 4] = "Link";
        n[n.Poll = 8] = "Poll";
        n[n.Question = 16] = "Question";
        n[n.Answered = 32] = "Answered";
        n[n.Announcement = 64] = "Announcement";
        n[n.ContentComment = 128] = "ContentComment";
        n[n.BungieOfficial = 256] = "BungieOfficial";
        n[n.NinjaOfficial = 512] = "NinjaOfficial";
        n[n.Recruitment = 1024] = "Recruitment"
    }(n.ForumPostCategoryEnums || (n.ForumPostCategoryEnums = {}));
    ff = n.ForumPostCategoryEnums,
    function(n) {
        n[n.None = 0] = "None";
        n[n.BungieStaffPost = 1] = "BungieStaffPost";
        n[n.ForumNinjaPost = 2] = "ForumNinjaPost";
        n[n.ForumMentorPost = 4] = "ForumMentorPost";
        n[n.TopicBungieStaffPosted = 8] = "TopicBungieStaffPosted";
        n[n.TopicBungieVolunteerPosted = 16] = "TopicBungieVolunteerPosted";
        n[n.QuestionAnsweredByBungie = 32] = "QuestionAnsweredByBungie";
        n[n.QuestionAnsweredByNinja = 64] = "QuestionAnsweredByNinja";
        n[n.CommunityContent = 128] = "CommunityContent"
    }(n.ForumFlagsEnum || (n.ForumFlagsEnum = {}));
    ef = n.ForumFlagsEnum,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Casual = 1] = "Casual";
        n[n.Professional = 2] = "Professional"
    }(n.ForumRecruitmentIntensityLabel || (n.ForumRecruitmentIntensityLabel = {}));
    of = n.ForumRecruitmentIntensityLabel,
    function(n) {
        n[n.None = 0] = "None";
        n[n.FamilyFriendly = 1] = "FamilyFriendly";
        n[n.Rowdy = 2] = "Rowdy"
    }(n.ForumRecruitmentToneLabel || (n.ForumRecruitmentToneLabel = {}));
    sf = n.ForumRecruitmentToneLabel,
    function(n) {
        n[n.All = 0] = "All";
        n[n.LastYear = 1] = "LastYear";
        n[n.LastMonth = 2] = "LastMonth";
        n[n.LastWeek = 3] = "LastWeek";
        n[n.LastDay = 4] = "LastDay"
    }(n.ForumTopicsQuickDateEnum || (n.ForumTopicsQuickDateEnum = {}));
    hf = n.ForumTopicsQuickDateEnum,
    function(n) {
        n[n.Default = 0] = "Default";
        n[n.LastReplied = 1] = "LastReplied";
        n[n.MostReplied = 2] = "MostReplied";
        n[n.Popularity = 3] = "Popularity";
        n[n.Controversiality = 4] = "Controversiality";
        n[n.Liked = 5] = "Liked";
        n[n.HighestRated = 6] = "HighestRated";
        n[n.MostUpvoted = 7] = "MostUpvoted"
    }(n.ForumTopicsSortEnum || (n.ForumTopicsSortEnum = {}));
    cf = n.ForumTopicsSortEnum,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Links = 1] = "Links";
        n[n.Questions = 2] = "Questions";
        n[n.AnsweredQuestions = 4] = "AnsweredQuestions";
        n[n.Media = 8] = "Media";
        n[n.TextOnly = 16] = "TextOnly";
        n[n.Announcement = 32] = "Announcement";
        n[n.BungieOfficial = 64] = "BungieOfficial";
        n[n.Polls = 128] = "Polls"
    }(n.ForumTopicsCategoryFiltersEnum || (n.ForumTopicsCategoryFiltersEnum = {}));
    lf = n.ForumTopicsCategoryFiltersEnum,
    function(n) {
        n[n.Default = 0] = "Default";
        n[n.OldestFirst = 1] = "OldestFirst"
    }(n.ForumPostSortEnum || (n.ForumPostSortEnum = {}));
    af = n.ForumPostSortEnum,
    function(n) {
        n[n.Trending = 0] = "Trending";
        n[n.Latest = 1] = "Latest";
        n[n.HighestRated = 2] = "HighestRated"
    }(n.CommunityContentSortMode || (n.CommunityContentSortMode = {}));
    vf = n.CommunityContentSortMode,
    function(n) {
        n[n.Public = 0] = "Public";
        n[n.News = 1] = "News";
        n[n.Group = 2] = "Group";
        n[n.Alliance = 3] = "Alliance";
        n[n.RelatedPosts = 4] = "RelatedPosts"
    }(n.ForumTypeEnum || (n.ForumTypeEnum = {}));
    yf = n.ForumTypeEnum,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Leaderboards = 1] = "Leaderboards";
        n[n.Callsign = 2] = "Callsign"
    }(n.Capabilities || (n.Capabilities = {}));
    pf = n.Capabilities,
    function(n) {
        n[n.All = 0] = "All";
        n[n.Founded = 1] = "Founded";
        n[n.NonFounded = 2] = "NonFounded"
    }(n.GroupsForMemberFilter || (n.GroupsForMemberFilter = {}));
    wf = n.GroupsForMemberFilter,
    function(n) {
        n[n.Error = 0] = "Error";
        n[n.NotFound = 1] = "NotFound";
        n[n.Success = 2] = "Success";
        n[n.Unknown = 3] = "Unknown"
    }(n.GameServiceStatus || (n.GameServiceStatus = {}));
    bf = n.GameServiceStatus,
    function(n) {
        n[n.None = 0] = "None";
        n[n.AwaitingNewPlayerDestinyMembership = 1] = "AwaitingNewPlayerDestinyMembership";
        n[n.AwaitingNewPlayerVerification = 2] = "AwaitingNewPlayerVerification";
        n[n.NewPlayerVerified = 3] = "NewPlayerVerified";
        n[n.BondLockedIn = 100] = "BondLockedIn";
        n[n.BondRemoved = -100] = "BondRemoved";
        n[n.FailedNewPlayerAlreadyReferred = -3] = "FailedNewPlayerAlreadyReferred";
        n[n.FailedNewPlayerIsVeteranPlayer = -2] = "FailedNewPlayerIsVeteranPlayer";
        n[n.FailedNewPlayerIsNotNew = -1] = "FailedNewPlayerIsNotNew"
    }(n.RAFBondState || (n.RAFBondState = {}));
    kf = n.RAFBondState,
    function(n) {
        n[n.Unknown = 0] = "Unknown";
        n[n.PurchaseRequired = 1] = "PurchaseRequired";
        n[n.NewPlayerEligible = 2] = "NewPlayerEligible";
        n[n.NotEligible = -1] = "NotEligible"
    }(n.RAFEligibility || (n.RAFEligibility = {}));
    df = n.RAFEligibility,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Ascending = 1] = "Ascending";
        n[n.Descending = 2] = "Descending"
    }(n.DestinyExplorerOrderDirection || (n.DestinyExplorerOrderDirection = {}));
    gf = n.DestinyExplorerOrderDirection,
    function(n) {
        n[n.None = 0] = "None";
        n[n.Name = 1] = "Name";
        n[n.ItemType = 2] = "ItemType";
        n[n.Rarity = 3] = "Rarity";
        n[n.ItemTypeName = 4] = "ItemTypeName";
        n[n.ItemStatHash = 5] = "ItemStatHash";
        n[n.MinimumRequiredLevel = 6] = "MinimumRequiredLevel";
        n[n.MaximumRequiredLevel = 7] = "MaximumRequiredLevel"
    }(n.DestinyExplorerOrderBy || (n.DestinyExplorerOrderBy = {}));
    ne = n.DestinyExplorerOrderBy,
    function(n) {
        n[n.None = 0] = "None";
        n[n.UserResearchWebPageOne = 1] = "UserResearchWebPageOne";
        n[n.UserResearchWebPageTwo = 2] = "UserResearchWebPageTwo"
    }(n.SurveyCompletionFlags || (n.SurveyCompletionFlags = {}));
    te = n.SurveyCompletionFlags
}(Globals || (Globals = {})),
function(n) {
    bungieNetPlatform.assetRenderer = {
        renderAsset: function(t) {
            var i = n.extend({
                path: "",
                width: "auto",
                height: "auto",
                fixedRatioHeight: "auto",
                hasAgeGate: !1,
                minimumAge: 0,
                ratingImagePath: "",
                display: "auto"
            }, t), e, c, s, p, h, b, k, d, a, u, r, v, f, y;
            if (n(".ageGateTemplate").length != 0 && typeof viewModels != "undefined" && viewModels.userMinimumAge || (i.hasAgeGate = !1),
            typeof viewModels != "undefined" && viewModels.loggedInUserModelIsLoaded() && viewModels.loggedInUserModel().adultMode() && (i.hasAgeGate = !1),
            s = "",
            i.display != "auto" && (s = "display: " + i.display + ";"),
            p = Utility.urlToLinkObject(i.path),
            c = p.pathname.match(/\.(jpg|jpeg|png|gif)$/i))
                u = i.width == "auto" ? "" : "width: " + i.width + "; ",
                r = i.height == "auto" ? "" : "height: " + i.height + "; ",
                e = "<img src='" + Utility.ContentVersioned(i.path) + "' style='" + u + r + s + "' />";
            else if (c = p.pathname.match(/\.(mov|avi|mp4)$/i))
                u = i.width == "auto" ? "" : "width='" + i.width + "' ",
                r = i.height == "auto" ? "" : "height='" + i.height + "' ",
                e = "<video " + u + r + " style='" + s + "'><source src='" + Utility.ContentVersioned(i.path) + "' type='video/" + c[1] + "' /><\/video>";
            else if (c = i.path.match(/^(?:https?:\/\/)?(?:(www|m)\.)?(youtube\.com|youtu\.be)+(\/\w)/i))
                if (i.path.toLowerCase().indexOf("playlist") > -1)
                    e = "<a class='externalLink' href='" + i.path + "' style='" + s + "'>" + i.path + "<\/a>";
                else {
                    var o = i.path, l, w = {}, g = Utility.getYouTubeId(i.path);
                    o.indexOf("?") > -1 && (w = Utility.parseQueryString(o));
                    (i.path.indexOf("#t=") > -1 || i.path.indexOf("?t=") > -1) && (h = i.path.match(/[#|\?]t=((\d+m)?(\d+[s]?)?)/i),
                    h.length > 1 && (h = h[0].split("=")[1]),
                    b = h.match("m") ? h.split("m")[0] : 0,
                    k = b.length ? h.split("m")[1].split("s")[0] : h.split("s")[0],
                    l = parseInt(b * 60) + parseInt(k ? k : 0));
                    o = "https://youtube.com/embed/" + g + "/";
                    typeof w.start != "undefined" && (l = w.start);
                    window.location.protocol.indexOf("https") > -1 && o.indexOf("https") === -1 && (o = o.replace("http", "https"));
                    l && (o = o + "?start=" + l);
                    u = i.width == "auto" ? "" : "width='" + i.width + "' ";
                    r = i.height == "auto" ? "" : "height='" + i.height + "' ";
                    i.fixedRatioHeight != "auto" && (r = "height='" + i.fixedRatioHeight + "' ");
                    d = l ? "&" : "?";
                    e = "<iframe class='youtube-player' style='" + s + "' type='text/html' " + u + r + " src='" + o + d + "wmode=transparent&rel=0&fs=1' frameborder='0' allowfullscreen><\/iframe>"
                }
            else {
                if (c = i.path.match(/player\.ooyala\.com/i))
                    return u = i.width == "auto" ? "" : "width='" + i.width + "' ",
                    r = i.height == "auto" ? "" : "height='" + i.height + "' ",
                    i.fixedRatioHeight != "auto" && (r = "height='" + i.fixedRatioHeight + "' "),
                    "<iframe src='" + i.path + "' " + u + r + " style='" + s + "' frameBorder='0'><\/iframe>";
                (c = i.path.match(/soundcloud\.com/i)) ? (a = i.path.replace("http://soundcloud.com", "http://api.soundcloud.com"),
                a = encodeURIComponent(a.replace("http://www.soundcloud.com", "http://api.soundcloud.com")),
                u = i.width == "auto" ? "" : "width='" + i.width + "' ",
                r = i.height == "auto" ? "" : "height='" + i.height + "' ",
                i.fixedRatioHeight != "auto" && (r = "height='" + i.fixedRatioHeight + "' "),
                v = "https://w.soundcloud.com/player/?url=" + a + "&buying=false&sharing=false&download=false&show_bpm=false&show_playcount=false&auto_play=false&show_artwork=false&show_comments=false&show_user=false",
                v = n("<div />").text(v).html(),
                e = "<iframe " + u + r + " scrolling='no' frameborder='no' src='" + v + "'><\/iframe>") : e = i.path.match(/^http/i) ? "<a class='externalLink' href='" + i.path + "' style='" + s + "'>" + i.path + "<\/a>" : ""
            }
            return i.hasAgeGate && (f = n("<div>" + n(".ageGateTemplate").html() + "<\/div>"),
            y = f.find(".ageGateContents"),
            y.attr("data-minimumAge", i.minimumAge),
            f.find(".ageGatePrompt").attr("data-minimumAge", i.minimumAge),
            i.width && i.width != "auto" && f.find(".ageGatePrompt").css("width", i.width + "px"),
            i.height && i.height != "auto" && f.find(".ageGatePrompt").css("height", i.height + "px"),
            f.find(".ratingImage").attr("src", i.ratingImagePath),
            f.find(".ratingImage").css("width", "auto"),
            f.find(".ratingAllowed li").each(function() {
                var t = n(this);
                t.html(t.html().replace("#AGE", i.minimumAge))
            }),
            y.html(e),
            i.minimumAge <= viewModels.userMinimumAge() && (f.find(".ageGatePrompt").addClass("hide"),
            y.removeClass("hide")),
            e = "<div class='ageGate'>" + f.html() + "<\/div>"),
            e
        },
        getYoutubeId: function(n) {
            return (matches = n.match(/youtube\.com|youtu\.be/i)) ? n.indexOf("v=") > -1 ? n.replace(/^([\s\S]*)(youtube\.com|youtu\.be)[\s\S]*?v=([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$3") : n.replace(/^([\s\S]*)(youtube\.com|youtu\.be)[\s\S]*\/([0-9A-Za-z\_\-]+)((&[\s\S]+)|$)/i, "$3") : ""
        },
        renderAssetThumbnail: function(t) {
            var i = n.extend({
                path: "",
                width: "auto",
                height: "auto",
                quality: "default"
            }, t), r = "", u, s = !1, e = "", f, o;
            if (i.width != "auto" && (e = "width: " + i.width + ";"),
            f = "",
            i.height != "auto" && (f = "height: " + i.height + ";"),
            u = i.path.match(/\.(jpg|jpeg|png|bmp|gif|tiff)(\?(.)*){0,1}$/i))
                r = i.path;
            else if (u = i.path.match(/youtube\.com|youtu\.be/i))
                s = !0,
                o = bungieNetPlatform.assetRenderer.getYoutubeId(i.path),
                o != "" && (r = "http://i2.ytimg.com/vi/" + o + "/" + i.quality + ".jpg");
            else {
                if (u = i.path.match(/player\.ooyala\.com/i))
                    return "<div style='" + e + f + " padding: 10px; border: solid 1px black; overflow: hide;'><iframe src='" + i.path + "' frameBorder='0'><\/iframe><\/div>";
                if (u = i.path.match(/\.mp4/i))
                    return "<div style='" + e + f + " padding: 10px; border: solid 1px black; overflow: hide;'><video src='" + i.path + "' width='" + i.width + "'><\/video><\/div>"
            }
            return r != "" ? s ? "<img draggable='false' src='" + Utility.ContentVersioned(r) + "' class='thumbnailImages youtubeVideo' />" : i.path.indexOf("http://") > -1 ? "<img draggable='false' src='" + r + "' class='thumbnailImages' />" : "<img draggable='false' src='" + Utility.ContentVersioned(r) + "' class='thumbnailImages' />" : ""
        }
    }
}(jQuery),
function(n) {
    function t(t, i, r, u) {
        var e = n.extend({
            templateType: "",
            isTypeAgnostic: !1,
            headOnly: !1,
            itemRenderedCallback: function() {},
            renderCompleteCallback: function() {},
            errorCallback: function() {},
            renderAttributes: []
        }, t), f, o, s;
        e.query = n.extend(i, t.query);
        f = {
            results: [],
            query: {
                itemsPerPage: 10,
                currentPage: 1
            }
        };
        for (o in bungieNetPlatform.contentCache)
            if (r(bungieNetPlatform.contentCache[o], e)) {
                f.results.push(bungieNetPlatform.contentCache[o]);
                break
            }
        f.results.length > 0 ? (f.query.itemsPerPage = f.results.length,
        f.totalResults = f.results.length,
        f.hasMore = !1,
        bungieNetPlatform.contentRenderer.renderContentItemList(f, e)) : (s = u(e),
        n.when(s).done(function(n) {
            bungieNetPlatform.contentRenderer.renderContentItemList(n, e)
        }))
    }
    bungieNetPlatform.contentRenderer = {
        renderContentItemList: function(t, i) {
            var r, f, u, e = t.results, o = i;
            e.length > 0 ? i.firstResultCallback() : i.renderCompleteCallback(e.length, u, t);
            n.each(e, function() {
                var i = this, t;
                r ? (t = n.Deferred(),
                n.when(r).done(function() {
                    n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(i, o)).done(function(n) {
                        u = u + n;
                        t.resolve()
                    }).fail(function() {
                        console.log("renderContentItemList: LoadTemplateDeferred Failed.");
                        t.resolve()
                    })
                }),
                r = t) : (f = n.Deferred(),
                r = f,
                n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(i, o)).done(function(n) {
                    u = u + n;
                    f.resolve()
                }).fail(function() {
                    console.log("renderContentItemList: LoadTemplateDeferred Failed.");
                    f.resolve()
                }))
            });
            r && n.when(r).done(function() {
                o.renderCompleteCallback(e.length, u, t)
            }).fail(function() {
                console.log("renderContentItemList: renderCompleteCallback Failed.")
            })
        },
        loadTemplateDeferred: function(t, i) {
            var r = t.cType, u;
            return i.isTypeAgnostic && (r = "generic"),
            u = "/Scripts/templates/",
            u += i.templateType + "/" + r + ".js",
            templateEngine.getTemplate(u, i.templateType + "/" + r, t, i.parents, i.renderAttributes, function(r) {
                if (bungieNetPlatform.platformSettings.renderContentEditLinks) {
                    var f = n(r)
                      , u = "<div class='firehoseEditLink'><a href='/Firehose/Content/EditWithNewPackage/" + t.contentId + "'>(Edit this item)<\/a><\/div>";
                    f.prepend(u);
                    r = r.trim()[0] == "<" ? r.slice(0, r.indexOf(">") + 1) + u + r.slice(r.indexOf(">") + 1) : u + r
                }
                i.itemRenderedCallback(t, r)
            })
        },
        renderContentFromId: function(t) {
            var i = n.extend({
                contentId: 0,
                locale: bungieNetPlatform.platformSettings.currentLocale,
                templateType: "",
                isTypeAgnostic: !1,
                headOnly: !1,
                itemRenderedCallback: function() {},
                renderCompleteCallback: function() {},
                errorCallback: function() {},
                renderAttributes: []
            }, t), r;
            if (typeof bungieNetPlatform.contentCache[i.contentId] != "undefined")
                n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(bungieNetPlatform.contentCache[i.contentId], i)).done(function(n) {
                    i.renderCompleteCallback(1, n, bungieNetPlatform.contentCache[i.contentId])
                });
            else {
                if (isNaN(i.contentId) || i.contentId <= 0) {
                    i.renderCompleteCallback(0, "", null );
                    return
                }
                r = bungieNetPlatform.previewableContentServices.getForId({
                    contentId: i.contentId,
                    locale: i.locale,
                    headOnly: i.headOnly,
                    callback: function() {},
                    errorCallback: function(n) {
                        console.log("renderContentFromId: Failed (" + n + ")");
                        i.errorCallback(n)
                    }
                });
                n.when(r).done(function(t) {
                    n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(t, i)).done(function(n) {
                        i.renderCompleteCallback(1, n, t)
                    })
                })
            }
        },
        renderContent: function(t) {
            var i = n.extend({
                contentObject: null ,
                templateType: "",
                isTypeAgnostic: !1,
                itemRenderedCallback: function() {},
                renderCompleteCallback: function() {},
                errorCallback: function() {},
                renderAttributes: []
            }, t);
            if (!i.contentObject) {
                i.renderCompleteCallback(0, "", null );
                return
            }
            n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(i.contentObject, i)).done(function(n) {
                i.renderCompleteCallback(1, n, i.contentObject)
            })
        },
        renderNewsContent: function(n) {
            t(n, {
                contentType: "",
                newsType: "",
                locale: bungieNetPlatform.platformSettings.currentLocale,
                itemsPerPage: 10,
                currentPage: 1
            }, function(n, t) {
                return n.cType == t.query.contentType
            }, function(n) {
                return bungieNetPlatform.contentService.GetNews(n.query.newsType, n.query.locale, n.query.itemsPerPage, n.query.currentPage, function() {}, function(t) {
                    console.log("renderNewsContent: Search Failed (" + t + ")");
                    n.errorCallback(t)
                })
            })
        },
        renderContentFromQuery: function(n) {
            t(n, {
                contentTypes: [],
                tag: "",
                notTag: "",
                locale: bungieNetPlatform.platformSettings.currentLocale,
                itemsPerPage: 100,
                currentPage: 1,
                sortBy: Globals.ContentSortBy.CreationDate,
                creationDate: Globals.ContentDateRange.All,
                modifiedDate: Globals.ContentDateRange.All
            }, function(n, t) {
                return n.cType == t.query.contentTypes[contentType]
            }, function(n) {
                return bungieNetPlatform.contentService.SearchContentEx(n.query, n.query.locale, n.headOnly, function() {}, function(t) {
                    console.log("renderContentFromQuery: Search Failed (" + t + ")");
                    n.errorCallback(t)
                })
            })
        },
        renderPromoWidget: function(t) {
            var i = n.extend({
                locale: bungieNetPlatform.platformSettings.currentLocale,
                templateType: "",
                isTypeAgnostic: !1,
                headOnly: !1,
                itemRenderedCallback: function() {},
                renderCompleteCallback: function() {},
                errorCallback: function() {},
                renderAttributes: []
            }, t)
              , r = bungieNetPlatform.contentService.GetPromoWidget(function() {}, function(n) {
                console.log("renderContentFromId: Failed (" + n + ")");
                i.errorCallback(n)
            });
            n.when(r).done(function(t) {
                n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(t, i)).done(function(n) {
                    i.renderCompleteCallback(1, n, t)
                })
            })
        },
        renderContentFromTagAndType: function(n) {
            t(n, {
                contentType: "",
                tag: "",
                locale: bungieNetPlatform.platformSettings.currentLocale,
                itemsPerPage: 10,
                currentPage: 1
            }, function(n, t) {
                return n.cType == t.query.contentType
            }, function(n) {
                return bungieNetPlatform.previewableContentServices.searchForTagAndType({
                    tag: n.query.tag,
                    contentType: n.query.contentType,
                    locale: n.query.locale,
                    headOnly: n.headOnly,
                    currentPage: n.query.currentPage,
                    itemsPerPage: n.query.itemsPerPage,
                    callback: function() {},
                    errorCallback: function(t) {
                        console.log("renderContentFromTagAndType: Search Failed (" + t + ")");
                        n.errorCallback(t)
                    },
                    headOnly: !1
                })
            })
        },
        renderContentItemFromTagAndType: function(t) {
            var i = n.extend({
                contentType: "",
                tag: "",
                locale: bungieNetPlatform.platformSettings.currentLocale,
                templateType: "",
                isTypeAgnostic: !1,
                headOnly: !1,
                renderCompleteCallback: function() {},
                errorCallback: function() {},
                renderAttributes: []
            }, t)
              , r = bungieNetPlatform.previewableContentServices.getForTagAndType({
                tag: i.tag,
                contentType: i.contentType,
                locale: i.locale,
                callback: function() {},
                errorCallback: function(n) {
                    console.log("renderContentItemFromTagAndType: Search Failed (" + n + ")");
                    i.errorCallback(n)
                },
                headOnly: i.headOnly
            });
            n.when(r).done(function(t) {
                n.when(bungieNetPlatform.contentRenderer.loadTemplateDeferred(t, i)).done(function(n) {
                    i.renderCompleteCallback(1, n, t)
                })
            })
        },
        renderContentData: function(t) {
            var i = n.extend({
                content: "",
                width: "auto",
                height: "auto",
                templateType: ""
            }, t), r = "", f, u;
            if (i.content == "")
                return "(blank)";
            if (typeof i.content == "object") {
                for (u = 0; u < i.content.length; u++)
                    r += "Item " + u + ": " + bungieNetPlatform.contentRenderer.renderContentData(n.extend(n.extend({}, i), {
                        content: i.content[u]
                    })),
                    r += "<br />";
                return r
            }
            return isNaN(i.content) ? (f = i.content.match(/\<\//)) ? "<div style='width: " + i.width + "; height: " + i.height + ";'>" + i.content + "<\/div>" : (r = bungieNetPlatform.assetRenderer.renderAsset({
                path: i.content,
                width: i.width,
                height: i.height
            }),
            r != "") ? r + ("<div data-asset-path='" + i.content + "'><\/div><div><strong>Stored URL:<\/strong>" + i.content + "<\/div>\n") : i.content : "(Content Item Reference #" + i.content + ")<br /> [[data-content-id='" + i.content + "' data-template-type='" + i.templateType + "']]"
        }
    }
}(jQuery),
function() {
    function t(t) {
        var i = t.split("[[").join("<div class='MacroProcess' ").split("]]").join("><\/div>");
        return n(i).trim()
    }
    function n(n) {
        for (var u = new RegExp(/\{\{url=\'([^\}]+)\'\}\}([^\{]+)\{\{\/url\}\}/g), t, r; (t = u.exec(n)) != null ; ) {
            var f = t[0]
              , i = t[1]
              , e = t[2];
            i[0] == "/" && (i = "/" + bungieNetPlatform.platformSettings.currentLocale + i);
            r = "<a href='" + i + "'>" + e + "<\/a>";
            n = n.split(f).join(r)
        }
        return n
    }
    function i(n) {
        return n[0] == "/" && (n = "/" + bungieNetPlatform.platformSettings.currentLocale + n),
        n
    }
    bungieNetPlatform.macroProcessor = {
        getNormalizedHtml: function(n) {
            return t(n)
        },
        renderWithHints: function(n, t) {
            return n = n.replace(/\{\{more\}\}[\s\S]*/g, ""),
            n = n.replace(/\{\{([^}]*)\}\}/g, ""),
            bungieNetPlatform.macroProcessor.processTemplateOverride(n, t)
        },
        renderIgnoreHints: function(n, t) {
            return n = n.replace(/\{\{([^}]*)\}\}/g, ""),
            bungieNetPlatform.macroProcessor.processTemplateOverride(n, t)
        },
        renderWithHintDebug: function(t, i) {
            return t = n(t),
            t = t.replace(/\{\{([^}]*)\}\}/g, "<br /><strong><i>&lt;-- $1 --&gt;<\/i><\/strong><br />"),
            bungieNetPlatform.macroProcessor.processTemplateOverride(t, i)
        },
        processUrls: n,
        convertRelativeUrl: i,
        processTemplateOverride: function(n, t) {
            return typeof t != "undefined" && t != null && t != "" ? n.replace(/data\-template\-type\=\'([^\']+)\'/g, "data-template-type='" + t + "'") : n
        }
    }
}(jQuery),
function(n) {
    bungieNetPlatform.contentRepresentationServices = {
        dataStore: [],
        data: {
            get: function(n, t) {
                return bungieNetPlatform.contentRepresentationServices.dataStore[n + "_" + t]
            },
            set: function(n, t, i) {
                bungieNetPlatform.contentRepresentationServices.dataStore[n + "_" + t] = i
            }
        },
        getRepresentationsForType: function(t) {
            var i = n.extend({
                contentType: "",
                locale: bungieNetPlatform.platformSettings.currentLocale,
                callback: function() {},
                errorCallback: function() {}
            }, t), r = bungieNetPlatform.contentRepresentationServices.data.get(i.contentType, i.locale), u;
            return r ? n.Deferred(function(n) {
                i.callback(r);
                n.resolve(r)
            }).promise() : (u = bungieNetPlatform.platformSettings.platformUrl + "/Content/Representation/GetRepresentationsForType/" + i.contentType + "/" + i.locale + "/",
            bungieNetPlatform.serviceLibrary.get(u, function(n) {
                bungieNetPlatform.contentRepresentationServices.data.set(i.contentType, i.locale, n);
                i.callback(n)
            }, i.errorCallback))
        }
    }
}(jQuery),
function(n) {
    bungieNetPlatform.previewableContentServices = {
        dataStore: [],
        contentData: {
            getContent: function(n, t) {
                return bungieNetPlatform.previewableContentServices.dataStore[n + "_" + t]
            },
            setContent: function(n) {
                bungieNetPlatform.previewableContentServices.dataStore[n.contentId + "_" + n.locale] = n
            }
        },
        getCachedResultsForQuery: function(n) {
            var t = {
                results: [],
                query: n,
                totalResults: 0
            }, i, r;
            for (i in bungieNetPlatform.contentCache)
                for (r in n.contentTypes)
                    if (bungieNetPlatform.contentCache[i].cType == n.contentTypes[r]) {
                        t.results.push(bungieNetPlatform.contentCache[i]);
                        break
                    }
            return t.totalResults = t.results.length,
            t
        },
        getCachedResultsForType: function(n) {
            var t = {
                results: [],
                query: {
                    contentType: n
                },
                totalResults: 0
            }, i;
            for (i in bungieNetPlatform.contentCache)
                bungieNetPlatform.contentCache[i].cType == n && t.results.push(bungieNetPlatform.contentCache[i]);
            return t.totalResults = t.results.length,
            t
        },
        search: function(t) {
            var i = n.extend({
                callback: function() {},
                errorCallback: function() {},
                headOnly: !1
            }, t), u = n.extend({
                contentTypes: [""],
                tag: "",
                notTag: "",
                locale: bungieNetPlatform.platformSettings.currentLocale,
                itemsPerPage: 100,
                currentPage: 1,
                sortBy: Globals.ContentSortBy.CreationDate,
                creationDate: Globals.ContentDateRange.All,
                modifiedDate: Globals.ContentDateRange.All
            }, t.query), f = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery(i.query), r;
            return f.results.length > 0 ? (r = n.Deferred(),
            i.callback(f),
            r.resolve(),
            r) : bungieNetPlatform.contentService.SearchContentEx(u, u.locale, i.headOnly, i.callback, i.errorCallback)
        },
        getHomepageContent: function(t) {
            var r = n.extend({
                locale: bungieNetPlatform.platformSettings.currentLocale,
                callback: function() {},
                errorCallback: function() {}
            }, t), i = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
                contentTypes: ["ContentSet"]
            }), f = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
                contentTypes: ["News"]
            }), u, e;
            return i.results.length > 0 || f.results.length > 0 ? (u = n.Deferred(),
            e = {
                rotator: {
                    ErrorCode: 1,
                    ErrorStatus: i.results.length > 0 ? "Success" : "Fail",
                    Message: "Ok",
                    Response: i.results.length > 0 ? i.results[0] : null
                },
                blog: {
                    ErrorCode: 1,
                    ErrorStatus: "Success",
                    Message: "Ok",
                    Response: f.results
                },
                calloutSet: {
                    ErrorCode: 1,
                    ErrorStatus: i.results.length > 0 ? "Success" : "Fail",
                    Message: "Ok",
                    Response: i.results.length > 0 ? i.results[0] : null
                }
            },
            r.callback(e),
            u.resolve(),
            u) : bungieNetPlatform.contentService.GetHomepageContent(r.locale, r.callback, r.errorCallback)
        },
        getForId: function(t) {
            var i = n.extend({
                contentId: 0,
                locale: bungieNetPlatform.platformSettings.currentLocale,
                callback: function() {},
                errorCallback: function() {},
                headOnly: !1
            }, t), u, r;
            return typeof bungieNetPlatform.contentCache[i.contentId] != "undefined" ? (u = n.Deferred(),
            i.callback(bungieNetPlatform.contentCache[i.contentId]),
            u.resolve(),
            u) : (r = null ,
            r = bungieNetPlatform.previewableContentServices.contentData.getContent(i.contentId, i.locale),
            r ? n.Deferred(function(n) {
                i.callback(r);
                n.resolve(r)
            }).promise() : bungieNetPlatform.contentService.GetContentById(i.contentId, i.locale, i.headOnly, function(n) {
                bungieNetPlatform.previewableContentServices.contentData.setContent(n);
                i.callback(n)
            }, i.errorCallback))
        },
        getForTagAndType: function(t) {
            var i = n.extend({
                tag: "",
                contentType: "",
                locale: bungieNetPlatform.platformSettings.currentLocale,
                callback: function() {},
                errorCallback: function() {},
                headOnly: !1
            }, t)
              , r = bungieNetPlatform.previewableContentServices.getCachedResultsForType(t.contentType);
            return r.results.length ? n.Deferred(function(n) {
                i.callback(r.results[0]);
                n.resolve(r.results[0])
            }).promise() : bungieNetPlatform.contentService.GetContentByTagAndType(i.tag, i.contentType, i.locale, i.headOnly, i.callback, i.errorCallback)
        },
        searchForTagAndType: function(t) {
            var i = n.extend({
                tag: "",
                contentType: "",
                locale: bungieNetPlatform.platformSettings.currentLocale,
                currentPage: 1,
                itemsPerPage: 10,
                callback: function() {},
                errorCallback: function() {},
                headOnly: !1
            }, t)
              , r = bungieNetPlatform.previewableContentServices.getCachedResultsForType(t.contentType);
            return r.results.length ? n.Deferred(function(n) {
                i.callback(r);
                n.resolve(r)
            }).promise() : bungieNetPlatform.contentService.SearchContentByTagAndType(i.tag, i.contentType, i.locale, i.headOnly, i.currentPage, i.itemsPerPage, i.callback, i.errorCallback)
        },
        getJobs: function(t) {
            var i = n.extend({
                locale: bungieNetPlatform.platformSettings.currentLocale,
                callback: function() {},
                errorCallback: function() {}
            }, t), u = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
                contentTypes: ["ContentSet"]
            }), r;
            if (u.results.length > 0)
                return r = n.Deferred(),
                i.callback(u),
                r.resolve(),
                r;
            bungieNetPlatform.contentService.GetJobs(i.locale, i.callback, i.errorCallback)
        },
        getPublications: function(t) {
            var i = n.extend({
                locale: bungieNetPlatform.platformSettings.currentLocale,
                callback: function() {},
                errorCallback: function() {}
            }, t), u = bungieNetPlatform.previewableContentServices.getCachedResultsForQuery({
                contentTypes: ["ContentSet"]
            }), r;
            if (u.results.length > 0)
                return r = n.Deferred(),
                i.callback(u),
                r.resolve(),
                r;
            bungieNetPlatform.contentService.GetPublications(i.locale, i.callback, i.errorCallback)
        }
    }
}(jQuery);
this.templateEngine = {
    version: "cv=0&av=0"
},
function() {
    var n = {}, t;
    templateEngine.template = function(t) {
        var r, i;
        return t.identifier = t.identifier || t.str,
        n[t.identifier] ? i = n[t.identifier] : (r = "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');",
        i = !/\W/.test(t.str) && t.str != "" ? templateEngine.template({
            str: document.getElementById(t.str).innerHTML,
            identifier: t.identifier
        }) : new Function("obj","parents","renderAttributes",r),
        /\W/.test(t.identifier) || (n[t.identifier] = i)),
        t.data ? i(t.data, t.parents, t.renderAttributes) : i
    }
    ;
    t = 1;
    templateEngine.getTemplate = function(t, i, r, u, f, e, o) {
        return n[i] ? $.Deferred(function(t) {
            var o = n[i](r, u, f);
            o = bungieNetPlatform.macroProcessor.getNormalizedHtml(o);
            e && e(o);
            t.resolve(o)
        }).promise() : $.Deferred(function(n) {
            $.ajax({
                type: "GET",
                url: t + "?" + templateEngine.version,
                dataType: "text",
                success: function(t) {
                    var o = templateEngine.template({
                        str: t,
                        identifier: i,
                        data: r,
                        parents: u,
                        renderAttributes: f
                    });
                    o = bungieNetPlatform.macroProcessor.getNormalizedHtml(o);
                    e && e(o);
                    n.resolve(o)
                },
                error: function(i, r, u) {
                    o && o(i, r, u);
                    console.log("templateEngine.getTemplate: template not found at '" + t + "'.");
                    n.reject()
                }
            })
        }).promise()
    }
}(),
function(n) {
    function r(n, i) {
        var r = t(n);
        if (r.length < i)
            return !1
    }
    function t(n) {
        return i(n).pop()
    }
    function i(n) {
        return n.split(/,\s*/)
    }
    n.fn.tagAutocomplete = function(u) {
        var f = n.extend({
            minimumChars: "1",
            multiple: !1,
            onSelect: function() {}
        }, u);
        return this.each(function() {
            var u = n(this);
            u.autocomplete({
                source: function(i, r) {
                    var u = i.term;
                    f.multiple && t(i.term);
                    bungieNetPlatform.tagServices.search({
                        phrase: u,
                        callback: function(t) {
                            r(n.map(t, function(n) {
                                return n.tagText
                            }))
                        },
                        errorCallback: function() {
                            r([])
                        }
                    })
                },
                search: function() {
                    return r(this.value, f.minimumChars)
                },
                focus: function() {
                    return !1
                },
                select: function(n, t) {
                    var r = t.item.value;
                    f.multiple ? (r = i(this.value),
                    r.pop(),
                    r.push(t.item.value),
                    r.push(""),
                    this.value = r.join(", ")) : this.value = r;
                    u.trigger("tagSelect", r);
                    f.onSelect(r);
                    return !1
                }
            })
        })
    }
}(jQuery),
function(n) {
    function t(t) {
        var i = n.extend({
            content: "",
            parents: [],
            itemRenderedCallback: function() {},
            renderCompleteCallback: function() {}
        }, t);
        return i.parents = n.merge([], i.parents),
        i
    }
    function i(t, i) {
        return t.hasClass("MacroProcess") ? n.when(t.renderContentFromAttributes(i), t.find(".MacroProcess").renderContentFromAttributes(i)) : n.when(t.find(".MacroProcess").renderContentFromAttributes(i))
    }
    n.fn.htmlWithMacroProcessing = function(r) {
        var u = bungieNetPlatform.macroProcessor.getNormalizedHtml(r.content);
        return this.each(function() {
            var f = n(this);
            f.html(u);
            f.each(function() {
                var u = t(r);
                i(n(this), u)
            })
        })
    }
    ;
    n.fn.appendWithMacroProcessing = function(r) {
        var u = bungieNetPlatform.macroProcessor.getNormalizedHtml(r.content);
        if (u != "")
            return this.each(function() {
                var e = n(this)
                  , f = n(u);
                e.append(f);
                f.each(function() {
                    var u = t(r);
                    i(n(this), u)
                })
            })
    }
    ;
    n.fn.MacroProcess = function(r) {
        return this.each(function() {
            var u = n(this)
              , f = t(r);
            i(u, f)
        })
    }
}(jQuery),
function(n) {
    n.fn.renderAsset = function(t) {
        var i = n.extend({
            path: "",
            width: "auto",
            height: "auto",
            onComplete: function() {}
        }, t);
        return this.each(function() {
            var t = n(this)
              , r = {
                path: t.attr("data-asset-path") ? t.attr("data-asset-path") : i.path,
                width: t.attr("data-asset-width") ? t.attr("data-asset-width") : i.width,
                height: t.attr("data-asset-height") ? t.attr("data-asset-height") : i.height
            }
              , u = bungieNetPlatform.assetRenderer.renderAsset(r);
            t.append(u);
            i.onComplete(t)
        })
    }
    ;
    n.fn.renderAssetThumbnail = function(t) {
        var i = n.extend({
            path: "",
            width: "auto",
            height: "auto",
            onComplete: function() {}
        }, t);
        return this.each(function() {
            var t = n(this)
              , r = {
                path: t.attr("data-asset-path") ? t.attr("data-asset-path") : i.path,
                width: t.attr("data-asset-width") ? t.attr("data-asset-width") : i.width,
                height: t.attr("data-asset-height") ? t.attr("data-asset-height") : i.height
            }
              , u = bungieNetPlatform.assetRenderer.renderAssetThumbnail(r);
            t.append(u);
            i.onComplete(t)
        })
    }
}(jQuery),
function(n) {
    function o(n, t, i, r, u, f) {
        var e = n.children();
        n.hasClass("MacroProcess") && n.replaceWith(e);
        f(t, i, r);
        u.transaction.popCall(u.identifier);
        u.transaction.actions.length == 0 && u.traversalCompleteCallback(u.transaction.count)
    }
    function s(t, i, r, u, f) {
        var e;
        e = i ? n.merge(n.merge([], u.parents), [i]) : n.merge([], u.parents);
        t.appendWithMacroProcessing({
            content: r,
            parents: e,
            templateType: u.templateType,
            transaction: u.transaction,
            traversalCompleteCallback: u.traversalCompleteCallback
        });
        f(i, r)
    }
    function r(n, t) {
        var u = t[0], r, i;
        for (n.renderAttributes = [],
        r = 0; r < u.attributes.length; r++)
            i = u.attributes[r],
            i && i.name.indexOf("data-") > -1 && (n.renderAttributes[i.name] = i.value)
    }
    function u(t, i) {
        var u = t.itemRenderedCallback
          , f = t.renderCompleteCallback
          , r = n.extend({}, t, {
            path: i.attr("data-content-path") ? i.attr("data-content-path") : t.contentPath,
            contentId: i.attr("data-content-id") ? i.attr("data-content-id") : t.contentId,
            locale: i.attr("data-content-locale") ? i.attr("data-content-locale") : t.locale,
            templateType: i.attr("data-template-type") ? i.attr("data-template-type") : t.templateType,
            propertyName: i.attr("data-property-name") ? i.attr("data-property-name") : t.propertyName,
            isTypeAgnostic: i.attr("data-is-type-agnostic") ? i.attr("data-is-type-agnostic").toLowerCase() == "true" : t.isTypeAgnostic
        });
        return r.itemRenderedCallback = function(n, t) {
            s(i, n, t, r, u)
        }
        ,
        r.renderCompleteCallback = function(n, t, u) {
            o(i, n, t, u, r, f)
        }
        ,
        r.firstResultCallback = function() {
            i.html("")
        }
        ,
        r
    }
    function f(i, f, e, o, s, h) {
        var c = n.extend({
            templateType: "",
            isTypeAgnostic: !1,
            itemRenderedCallback: function() {},
            renderCompleteCallback: function() {},
            traversalCompleteCallback: function() {},
            errorCallback: function() {},
            parents: [],
            transaction: new t,
            headOnly: !1,
            renderAttributes: []
        }, e);
        return h.each(function() {
            var h = n(this), t = u(c, h), e;
            t.query = n.extend(o, c.query);
            for (e in o)
                typeof s[e] != "undefined" && (t.query[e] = h.attr(s[e]) ? h.attr(s[e]) : t.query[e]);
            t.identifier = t.transaction.pushCall(i);
            r(t, h);
            f(t)
        })
    }
    function e(i, f, e, o, s, h) {
        var c = n.extend({
            templateType: "",
            isTypeAgnostic: !1,
            itemRenderedCallback: function() {},
            renderCompleteCallback: function() {},
            traversalCompleteCallback: function() {},
            errorCallback: function() {},
            parents: [],
            transaction: new t,
            headOnly: !1,
            renderAttributes: []
        }, e);
        return h.each(function() {
            var h = n(this), t, e;
            c.identifier = c.transaction.pushCall(i);
            t = u(c, h);
            t = n.extend(o, t);
            for (e in o)
                typeof s[e] != "undefined" && (t[e] = h.attr(s[e]) ? h.attr(s[e]) : t[e]);
            r(t, h);
            f(t)
        })
    }
    var t = function() {
        var n = this;
        n.count = 0;
        n.identifiers = 0;
        n.actions = [];
        n.pushCall = function(t) {
            n.count++;
            var i = n.identifiers;
            return n.identifiers++,
            n.actions.push({
                command: t,
                identifier: i
            }),
            i
        }
        ;
        n.popCall = function(t) {
            for (i = 0; i < n.actions.length; i++)
                if (n.actions[i].identifier == t)
                    return n.actions.splice(i, 1),
                    !0;
            console.log("Transaction: No Identifier for popped call " + t + "!")
        }
    }
    ;
    n.fn.renderContentFromId = function(i) {
        var f = n.extend({
            contentId: 0,
            locale: bungieNetPlatform.platformSettings.currentLocale,
            templateType: "",
            isTypeAgnostic: !1,
            itemRenderedCallback: function() {},
            renderCompleteCallback: function() {},
            traversalCompleteCallback: function() {},
            errorCallback: function() {},
            parents: [],
            transaction: new t,
            headOnly: !1,
            renderAttributes: []
        }, i);
        return this.each(function() {
            var i = n(this)
              , t = u(f, i);
            t.identifier = t.transaction.pushCall("renderContentFromId");
            r(t, i);
            bungieNetPlatform.contentRenderer.renderContentFromId(t)
        })
    }
    ;
    n.fn.renderContentItemFromTagAndType = function(n) {
        e("renderContentItemFromTagAndType", bungieNetPlatform.contentRenderer.renderContentItemFromTagAndType, n, {
            tag: "",
            contentType: "",
            locale: bungieNetPlatform.platformSettings.currentLocale
        }, {
            contentType: "data-content-type",
            tag: "data-content-tag",
            locale: "data-content-locale"
        }, this)
    }
    ;
    n.fn.renderPromoWidget = function(n) {
        e("renderPromoWidget", bungieNetPlatform.contentRenderer.renderPromoWidget, n, {}, {}, this)
    }
    ;
    n.fn.renderContent = function(i) {
        var f = n.extend({
            contentObject: null ,
            templateType: "",
            isTypeAgnostic: !1,
            itemRenderedCallback: function() {},
            renderCompleteCallback: function() {},
            traversalCompleteCallback: function() {},
            errorCallback: function() {},
            parents: [],
            transaction: new t,
            headOnly: !1,
            renderAttributes: []
        }, i);
        return this.each(function() {
            var i = n(this)
              , t = u(f, i);
            t.identifier = t.transaction.pushCall("renderContent");
            r(t, i);
            bungieNetPlatform.contentRenderer.renderContent(t)
        })
    }
    ;
    n.fn.renderContentList = function(i) {
        var f = n.extend({
            contentList: [],
            templateType: "",
            isTypeAgnostic: !1,
            itemRenderedCallback: function() {},
            renderCompleteCallback: function() {},
            traversalCompleteCallback: function() {},
            errorCallback: function() {},
            parents: [],
            transaction: new t,
            headOnly: !1,
            renderAttributes: []
        }, i);
        return this.each(function() {
            var i = n(this), t = u(f, i), e;
            t.identifier = t.transaction.pushCall("renderContentList");
            r(t, i);
            e = {
                hasMore: !1,
                query: {
                    contentTypes: [],
                    creationDate: 0,
                    currentPage: 1,
                    itemsPerPage: t.contentList.length,
                    modifiedDate: 0,
                    sortBy: 0,
                    tag: ""
                },
                results: t.contentList,
                totalResults: t.contentList.length
            };
            bungieNetPlatform.contentRenderer.renderContentItemList(e, t)
        })
    }
    ;
    n.fn.renderContentFromAttributes = function(i) {
        var r = n.extend({
            templateType: "",
            locale: bungieNetPlatform.platformSettings.currentLocale,
            itemRenderedCallback: function() {},
            renderCompleteCallback: function() {},
            traversalCompleteCallback: function() {},
            errorCallback: function() {},
            parents: [],
            transaction: new t,
            headOnly: !1,
            renderAttributes: []
        }, i);
        return this.each(function() {
            var t = n(this)
              , i = "id";
            t.attr("data-render-command") && (i = t.attr("data-render-command"));
            switch (i) {
            case "id":
                t.renderContentFromId(r);
                break;
            case "query":
                t.renderContentFromQuery(r)
            }
        })
    }
    ;
    n.fn.renderContentFromQuery = function(n) {
        f("renderContentFromQuery", bungieNetPlatform.contentRenderer.renderContentFromQuery, n, {
            contentTypes: [],
            tag: "",
            notTag: "",
            locale: bungieNetPlatform.platformSettings.currentLocale,
            itemsPerPage: 100,
            currentPage: 1,
            sortBy: Globals.ContentSortBy.CreationDate,
            creationDate: Globals.ContentDateRange.All,
            modifiedDate: Globals.ContentDateRange.All
        }, {
            contentTypes: "data-content-types",
            tag: "data-content-tag",
            notTag: "data-content-not-tag",
            locale: "data-content-locale",
            itemsPerPage: "data-content-items-per-page",
            currentPage: "data-content-current-page",
            sortBy: "data-content-sort-by"
        }, this)
    }
    ;
    n.fn.renderContentFromTagAndType = function(n) {
        f("renderContentFromTagAndType", bungieNetPlatform.contentRenderer.renderContentFromTagAndType, n, {
            contentType: "",
            tag: "",
            locale: bungieNetPlatform.platformSettings.currentLocale,
            itemsPerPage: 10,
            currentPage: 1
        }, {
            contentType: "data-content-type",
            tag: "data-content-tag",
            locale: "data-content-locale",
            itemsPerPage: "data-content-items-per-page",
            currentPage: "data-content-current-page"
        }, this)
    }
    ;
    n.fn.renderNewsContent = function(n) {
        f("renderNewsContent", bungieNetPlatform.contentRenderer.renderNewsContent, n, {
            contentTypes: "",
            newsType: "",
            locale: bungieNetPlatform.platformSettings.currentLocale,
            itemsPerPage: 10,
            currentPage: 1
        }, {
            contentType: "data-content-type",
            newsType: "data-content-news-type",
            locale: "data-content-locale",
            itemsPerPage: "data-content-items-per-page",
            currentPage: "data-content-current-page"
        }, this)
    }
}(jQuery);
Cookies = {
    Path: "/",
    Set: function(n, t) {
        document.cookie = n + "=" + encodeURIComponent(t) + ";path=" + this.Path
    },
    SetWithExpires: function(n, t, i) {
        document.cookie = n + "=" + encodeURIComponent(t) + ";path=" + this.Path + ";expires=" + i.toUTCString()
    },
    Get: function(n) {
        var t = document.cookie.match(n + "=(.*?)(;|$)");
        return t ? decodeURIComponent(t[1]) : null
    },
    GetMulti: function(n, t) {
        var r = document.cookie.match(n + "=(.*?)(;|$)"), u, i, f;
        if (r && r.length >= 1)
            for (u = r[1].split("&"),
            i = 0; i < u.length; i++)
                if (f = u[i].split("="),
                f[0] == t)
                    return decodeURIComponent(f[1]);
        return null
    },
    GetMultiDictionary: function(n) {
        var t = {}, r = document.cookie.match(n + "=(.*?)(;|$)"), u, i, f;
        if (r && r.length >= 1)
            for (u = r[1].split("&"),
            i = 0; i < u.length; i++)
                f = u[i].split("="),
                t[f[0]] = f[1];
        return t == null && (t = {}),
        t
    },
    SetMulti: function(n, t) {
        var i = "", r;
        for (r in t)
            i += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]) + "&";
        i.length > 0 && (i = i.substr(0, i.length - 1));
        document.cookie = n + "=" + i + ";path=" + this.Path
    },
    SetMultiWithExpires: function(n, t, i) {
        var r = "", u;
        for (u in i)
            r += encodeURIComponent(u) + "=" + encodeURIComponent(i[u]) + "&";
        r.length > 0 && (r = r.substr(0, r.length - 1));
        document.cookie = n + "=" + r + ";path=" + this.Path + ";expires=" + t.toUTCString()
    },
    GetInMulti: function(n, t) {
        var i = Cookies.GetMultiDictionary(n);
        return i[t]
    },
    SetInMulti: function(n, t, i) {
        var r = Cookies.GetMultiDictionary(n);
        r[t] = i;
        Cookies.SetMulti(n, r)
    },
    SetInMultiWithExpires: function(n, t, i, r) {
        var u = Cookies.GetMultiDictionary(n);
        u[t] = i;
        Cookies.SetMultiWithExpires(n, r, u)
    },
    SetInMultiFromDictionary: function(n, t) {
        var r = Cookies.GetMultiDictionary(n), i;
        for (i in t)
            r[i] = t[i];
        Cookies.SetMulti(n, r)
    },
    SetInMultiFromDictionaryWithExpires: function(n, t, i) {
        var u = Cookies.GetMultiDictionary(n), r;
        for (r in i)
            u[r] = i[r];
        Cookies.SetMultiWithExpires(n, t, u)
    },
    Delete: function(n) {
        if (this.Get(n)) {
            var t = new Date;
            t.setTime(t.getTime() - 1);
            document.cookie = n + "=;path=" + this.Path + ";expires=" + t.toUTCString()
        }
        return !0
    }
};
bungieNetPlatform.dateUtility = {
    formatShortDate: function(n) {
        return n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear()
    },
    formatTime: function(n) {
        var t = n.getHours() % 12
          , i = n.getMinutes();
        return t + ":" + i
    },
    getAmPm: function(n) {
        return n.getHours() / 12 >= 1 ? "PM" : "AM"
    }
},
function() {
    bungieNetPlatform.linkHelper = {
        linkRegex: new RegExp(/([\s\(\>]|^|>)((http|https)\:\/\/([^\s\<\[]*))((?=[\,\.\!\:\;\-\"\)]([\s\<]|$)))/gi),
        linkFineRegex: new RegExp(/([\s]|^|>)((http|https)\:\/\/([^\"\s\<]*))/gi),
        injectLinks: function(n) {
            var t = "";
            return typeof n != "undefined" && (t = n.replace(bungieNetPlatform.linkHelper.linkRegex, '$1<a href="$2" rel="nofollow" class="externalLink">$2<\/a>'),
            t = t.replace(bungieNetPlatform.linkHelper.linkFineRegex, '$1<a href="$2" rel="nofollow" class="externalLink">$2<\/a>')),
            t
        }
    }
}(),
function() {
    bungieNetPlatform.tagHelper = {
        hashRegex: new RegExp(/(\#([a-zA-Z\u00C0-\u017F\u01FA-\u0217][a-zA-Z\u00C0-\u017F\u01FA-\u0217_0-9]{2,29}))(?!.*?\[\/(url|google)\])/gi),
        injectSpans: function(n) {
            return n.replace(bungieNetPlatform.tagHelper.hashRegex, '<span data-tag="$2">$1<\/span>')
        }
    }
}()
