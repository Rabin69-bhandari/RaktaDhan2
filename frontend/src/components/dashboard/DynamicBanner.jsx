import React from "react";
import ProfileProgress from "./ProfileProgress";
import CommunityChallenge from "./CommunityChallenge";

const DynamicBanner = ({ onboardingStep }) => {
  return onboardingStep < 4 ? (
    <ProfileProgress onboardingStep={onboardingStep} />
  ) : (
    <CommunityChallenge />
  );
};

export default DynamicBanner;