"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CommonForm from "../common-form";
import {
  candidateOnboardFormControls,
  initialCandidateFormData,
  initialRecruiterFormData,
  recruiterOnboardFormControls,
} from "@/utils";
import { useUser } from "@clerk/nextjs";
import { createProfileAction } from "@/actions";

function OnBoard() {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );
  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateFormData
  );

  const currentAuthUser = useUser();
  const { user } = currentAuthUser;
  console.log(currentAuthUser, "current auth user");

  function handleTabChange(value) {
    setCurrentTab(value);
  }

  // console.log(recruiterFormData, "recruiter form data");

  function handleRecruiterFormValid() {
    return (
      recruiterFormData &&
      recruiterFormData.name.trim() !== "" &&
      recruiterFormData.companyName.trim() !== "" &&
      recruiterFormData.companyRole.trim() !== ""
    );
  }

  async function createProfile() {
    const data = {
      recruiterInfo: recruiterFormData,
      role: "recruiter",
      isPremiumUser: false,
      userId: user?.id,
      email: user?.primaryEmailAddress?.emailAddress,
    };

    await createProfileAction(data, "/onboard");
  }
  // =======================================
  return (
    <div className="bg-white">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex max-md:flex-col max-md:gap-4 items-baseline justify-between border-b pb-6 pt-5 md:pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Joining page
            </h1>
            <TabsList>
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="candidate">
          <CommonForm
            formControls={candidateOnboardFormControls}
            buttonText={"Join as candidate"}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
          />
        </TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControls={recruiterOnboardFormControls}
            buttonText={"Join as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            isBtnDisabled={!handleRecruiterFormValid()}
            action={createProfile}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
