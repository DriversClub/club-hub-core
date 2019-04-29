import { Types } from 'mongoose';
import CarMeta from './subModels/car';
import GolfMeta from './subModels/golf';
import Location from './subModels/shared/location';
declare namespace User {
    interface Model {
        _id?: Types.ObjectId;
        addresses?: Location.Model[];
        admin?: boolean;
        birthday?: Date | null;
        clubID?: Types.ObjectId;
        remoteID?: string;
        email?: string;
        firstName?: string;
        jobTitle?: string;
        joined?: Date;
        lastName?: string;
        middleName?: string;
        password?: string;
        salt?: string;
        phone?: string;
        photoURL?: string;
        username?: string;
        groups?: string[];
        memberNumber?: string;
        membershipType?: Types.ObjectId;
        maritalStatus?: MaritalStatus;
        memberStatus?: MemberStatus;
        meta?: UserMeta;
        displaySettings?: DisplaySettings;
        agentAccessCode?: string;
        hostIDs?: Types.ObjectId[];
    }
    enum DefaultUserGroups {
        AllAdmins = "All Admins",
        AllMembers = "All Members"
    }
    interface UserGroup {
        _id?: Types.ObjectId;
        name: string;
        description?: string;
        users?: Types.ObjectId[] | Model[];
    }
    interface UserMeta {
        _id?: Types.ObjectId;
        hide?: boolean;
        golf?: GolfMeta.Model;
        car?: CarMeta.Model;
    }
    enum MaritalStatus {
        Single = "SINGLE",
        InRelationship = "IN_RELATIONSHIP",
        Married = "MARRIED",
        Divorced = "DIVORCED",
        Widowed = "WIDOWED"
    }
    enum MemberStatus {
        Prospect = "PROSPECT",
        Active = "ACTIVE",
        Lapsed = "LAPSED",
        Guest = "GUEST"
    }
    interface DisplaySettings {
        publicProfile: boolean;
        publicContact: boolean;
    }
}
export default User;
