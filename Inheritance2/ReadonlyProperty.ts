interface ProfileDetails {
    readonly profileId: number;
    profileName: string;
    profileAge: number;
}

const profileData: ProfileDetails = {
    profileId: 101,
    profileName: "Rajani",
    profileAge: 25
};

console.log(profileData.profileId);

// Error: Cannot assign to 'profileId'
// because it is a read-only property
profileData.profileId = 102;