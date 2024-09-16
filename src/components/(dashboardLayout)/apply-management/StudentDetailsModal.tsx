/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateApplicationsMutation } from "@/redux/api/applicationApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import { Button, Divider, Modal } from "antd";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  data: any;
};

const StudentDetailsModal = ({ open, setOpen, data }: TPropsType) => {
  const [updateApplication] = useUpdateApplicationsMutation();
  const handleApproveAndReject = async (status: string) => {
    console.log(status);
    try {
      if (status === "approved") {
        await updateApplication({
          id: data?._id,
          body: { status: "approved" },
        }).unwrap();
        Success_model({ title: "Application has been approved" });
        setOpen(false);
      } else if (status === "reject") {
        await updateApplication({
          id: data?._id,
          body: { status: "rejected" },
        }).unwrap();
        Success_model({ title: "Application has been rejected" });
        setOpen(false);
      }
    } catch (error: any) {
      Error_Modal(error?.data?.message);
    }
  };
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      style={{
        minWidth: "max-content",
        position: "relative",
      }}
    >
      <div className="space-y-5">
        {/* ACCOUNT HOLDER information */}
        <div>
          <h4 className="text-xl font-medium">ACCOUNT HOLDER DETAILS:</h4>
          <div className="mt-2  font-medium flex justify-between  gap-10">
            <div className="space-y-1">
              <div className="flex justify-between gap-5">
                <h4>Surname:</h4>
                <p className="font-medium">{data?.applicant?.surName}</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>First Name:</h4>
                <p className="font-medium">
                  {data?.applicant?.name?.firstName}
                </p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>Middle Name:</h4>
                <p className="font-medium">
                  {" "}
                  {data?.applicant?.name?.middleName}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between gap-5">
                <h4>Email Address:</h4>
                <p className="font-medium">{data?.applicant?.email}</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>Phone No:</h4>
                <p className="font-medium">{data?.applicant?.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>

        {/* personal information */}
        <div>
          <h4 className="text-xl font-medium">ACCOUNT HOLDER DETAILS:</h4>
          <div className="mt-2 ">
            <div className="space-y-1">
              <div className="flex justify-between gap-5">
                <h4>Date of Birth:</h4>
                <p className="font-medium">{data?.dateOfBirth}</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>Home Address:</h4>
                <p className="font-medium">{data?.homeAddress}.</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>Citizenship:</h4>
                <p className="font-medium">{data?.citizenship}.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Qualifications: */}

        <div className="font-medium ">
          <h4 className="text-xl font-medium">Current Qualifications:</h4>
          <header className="grid grid-cols-4 gap-7 justify-between mt-3">
            <h1></h1>
            <h1>Undergraduate</h1>
            <h1>Postgraduate-1 (If Any)</h1>
            <h3>Postgraduate-2 (If Any)</h3>
          </header>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Degree</p>
            <p>{data?.qualifications?.[0]?.degree}</p>
            <p>{data?.qualifications?.[1]?.degree ?? "N/A"}</p>
            <p>{data?.qualifications?.[2]?.degree ?? "N/A"}</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Discipline / Area</p>
            <p>{data?.qualifications?.[0]?.discipline ?? "N/A"}</p>
            <p>{data?.qualifications?.[1]?.discipline ?? "N/A"}</p>
            <p>{data?.qualifications?.[2]?.discipline ?? "N/A"}</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>University</p>
            <p>{data?.qualifications?.[0]?.university ?? "N/A"}</p>
            <p>{data?.qualifications?.[1]?.university ?? "N/A"}</p>
            <p>{data?.qualifications?.[2]?.university ?? "N/A"}</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Commenced</p>
            <p>{data?.qualifications?.[0]?.commenced ?? "N/A"}</p>
            <p>{data?.qualifications?.[1]?.commenced ?? "N/A"}</p>
            <p>{data?.qualifications?.[2]?.commenced ?? "N/A"}</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Completed</p>
            <p>{data?.qualifications?.[0]?.completed ?? "N/A"}</p>
            <p>{data?.qualifications?.[1]?.completed ?? "N/A"}</p>
            <p>{data?.qualifications?.[2]?.completed ?? "N/A"}</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Overall Marks (%)</p>
            <p>{data?.qualifications?.[0]?.overallMark ?? "N/A"}</p>
            <p>{data?.qualifications?.[1]?.overallMark ?? "N/A"}</p>
            <p>{data?.qualifications?.[2]?.overallMark ?? "N/A"}</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Overall GPA</p>
            <p>{data?.qualifications?.[0]?.overallGPA ?? "N/A"}</p>
            <p>{data?.qualifications?.[1]?.overallGPA ?? "N/A"}</p>
            <p>{data?.qualifications?.[2]?.overallGPA ?? "N/A"}</p>
          </div>
        </div>

        {/* English Language Proficiency: */}

        <div className="font-medium ">
          <h4 className="text-xl font-medium">
            English Language Proficiency::
          </h4>
          <header className="grid grid-cols-4 gap-7 justify-between mt-3">
            <h1 className=" flex justify-center border-r-2 border-gray-600">
              English Test taken
            </h1>
            <h3 className="col-span-3 flex justify-center">Result</h3>
          </header>
          <Divider></Divider>
          <header className="grid grid-cols-6 gap-7 justify-between mt-3">
            <h1></h1>
            <h1>Overall</h1>
            <h1>Listening</h1>
            <h3>Reading</h3>
            <h3>Speaking</h3>
            <h3>Writing</h3>
          </header>
          <Divider></Divider>
          <div className="grid grid-cols-6 ga-5 justify-between items-center">
            <div className="border-r-2 mr-4 pr-3 border-black">
              <div className="flex justify-between mb-2 gap-5">
                <h4>Test:</h4>
                <p className="font-medium">ILETS</p>
              </div>
              <div className="flex justify-between gap-5">
                <h4>Date:</h4>
                <p className="font-medium">
                  {data?.englishProficiency?.testDate}
                </p>
              </div>
            </div>
            <div>
              <p>{data?.englishProficiency?.overall}</p>
            </div>
            <div>
              <p>{data?.englishProficiency?.listening}</p>
            </div>
            <div>
              <p>{data?.englishProficiency?.reading}</p>
            </div>
            <div>
              <p>{data?.englishProficiency?.speaking}</p>
            </div>
            <div>
              <p>{data?.englishProficiency?.writing}</p>
            </div>
            <div></div>
          </div>
        </div>

        {/* Intended Post-graduate Studies in Australia: */}

        <div className="font-medium ">
          <h4 className="text-xl font-medium">
            Intended Post-graduate Studies in Australia:
          </h4>
          <header className="grid grid-cols-4 gap-7 justify-between mt-3">
            <h1></h1>
            <h1>Option 1</h1>
            <h1>Option-2 (If Any)</h1>
            <h3>Option-3 (If Any)</h3>
          </header>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Degree</p>
            <p>{data?.intendedPostGraduateStudies?.[0]?.degree}.</p>
            <p>{data?.intendedPostGraduateStudies?.[1]?.degree ?? "N/A"}.</p>
            <p>{data?.intendedPostGraduateStudies?.[2]?.degree ?? "N/A"}.</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Discipline / Area</p>
            <p>{data?.intendedPostGraduateStudies?.[0]?.discipline}.</p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.discipline ?? "N/A"}.
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.discipline ?? "N/A"}.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>University</p>
            <p>{data?.intendedPostGraduateStudies?.[0]?.university}.</p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.university ?? "N/A"}.
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.university ?? "N/A"}.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Planned Start</p>
            <p>{data?.intendedPostGraduateStudies?.[0]?.university}.</p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.university ?? "N/A"}.
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.university ?? "N/A"}.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Duration</p>
            <p>{data?.intendedPostGraduateStudies?.[0]?.university}.</p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.university ?? "N/A"}.
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.university ?? "N/A"}.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>University Tuition Fee (AU$/Year)</p>
            <p>
              {data?.intendedPostGraduateStudies?.[0]?.tuitionFee ?? "N/A"}.
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.tuitionFee ?? "N/A"}.
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.tuitionFee ?? "N/A"}.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Already Applied?</p>
            <p>
              {data?.intendedPostGraduateStudies?.[0]?.alreadyApplied
                ? "Yes"
                : "No"}
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.alreadyApplied
                ? "Yes"
                : "No"}
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.alreadyApplied
                ? "Yes"
                : "No"}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Admission Granted?</p>
            <p>
              {data?.intendedPostGraduateStudies?.[0]?.admissionGranted
                ? "Yes"
                : "No"}
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.admissionGranted
                ? "Yes"
                : "No"}
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.admissionGranted
                ? "Yes"
                : "No"}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Australian Visa Applied?</p>
            <p>
              {data?.intendedPostGraduateStudies?.[0]?.australianVisaApplied
                ? "Yes"
                : "No"}
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.australianVisaApplied
                ? "Yes"
                : "No"}
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.australianVisaApplied
                ? "Yes"
                : "No"}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Australian Visa Granted?</p>
            <p>
              {data?.intendedPostGraduateStudies?.[0]?.australianVisaGranted
                ? "Yes"
                : "No"}
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[1]?.australianVisaGranted
                ? "Yes"
                : "No"}
            </p>
            <p>
              {data?.intendedPostGraduateStudies?.[2]?.australianVisaGranted
                ? "Yes"
                : "No"}
            </p>
          </div>
        </div>
      </div>
      {data?.status === "pending" ? (
        <div className="flex justify-end gap-x-4">
          <Button
            className="border border-red-500 text-red-500 w-[100px]"
            onClick={() => handleApproveAndReject("reject")}
          >
            Reject
          </Button>
          <Button
            className="bg-gray-600 border text-white w-[100px]"
            onClick={() => handleApproveAndReject("approved")}
          >
            Approve
          </Button>
        </div>
      ) : (
        <></>
      )}
    </Modal>
  );
};

export default StudentDetailsModal;
