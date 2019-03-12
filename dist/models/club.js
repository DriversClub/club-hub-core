"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Club;
(function (Club) {
    var Type;
    (function (Type) {
        Type["Car"] = "CAR";
        Type["Golf"] = "GOLF";
    })(Type = Club.Type || (Club.Type = {}));
    Club.defaultMembershipTypes = ['EQUITY', 'SPOUSE', 'PARENT'];
    Club.defaultEventTypes = ['Member', 'Outside', 'Club'];
    var ClubInfoDataType;
    (function (ClubInfoDataType) {
        ClubInfoDataType["single"] = "single";
        ClubInfoDataType["table"] = "table";
    })(ClubInfoDataType = Club.ClubInfoDataType || (Club.ClubInfoDataType = {}));
    var ClubInfoDataAction;
    (function (ClubInfoDataAction) {
        ClubInfoDataAction["call"] = "call";
        ClubInfoDataAction["email"] = "email";
    })(ClubInfoDataAction = Club.ClubInfoDataAction || (Club.ClubInfoDataAction = {}));
})(Club || (Club = {}));
exports.default = Club;
