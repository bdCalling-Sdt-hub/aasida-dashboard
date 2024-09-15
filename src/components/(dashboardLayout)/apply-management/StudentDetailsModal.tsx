import { Divider, Modal } from "antd";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const StudentDetailsModal = ({ open, setOpen }: TPropsType) => {
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
                <p className="font-medium">Opu</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>First Name:</h4>
                <p className="font-medium">Nur</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>Middle Name:</h4>
                <p className="font-medium">Mohammad</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between gap-5">
                <h4>Email Address:</h4>
                <p className="font-medium">Opu@gmail.com</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>Phone No:</h4>
                <p className="font-medium">0188*******</p>
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
                <p className="font-medium">12-23-2000</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>Home Address:</h4>
                <p className="font-medium">XXXXXXXXXXXXXX</p>
              </div>

              <div className="flex justify-between gap-5">
                <h4>Citizenship:</h4>
                <p className="font-medium">England</p>
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
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Discipline / Area</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>University</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Commenced</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Completed</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Overall Marks (%)</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Overall GPA</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
        </div>

        {/* English Language Proficiency: */}

        <div className="font-medium ">
          <h4 className="text-xl font-medium">English Language Proficiency::</h4>
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
              <p className="font-medium">12-23-2000</p>
            </div>
            </div>
            <div>
                <p>xxxxxxx</p>
            </div>
            <div>
                <p>xxxxxxx</p>
            </div>
            <div>
                <p>xxxxxxx</p>
            </div>
            <div>
                <p>xxxxxxx</p>
            </div>
            <div>
                <p>xxxxxxx</p>
            </div>
            <div>

            </div>
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
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Discipline / Area</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>University</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Planned Start</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Duration</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>University Tuition Fee (AU$/Year)</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
            <p>xxxxxxxxxxx</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Already Applied?</p>
            <p>Yes/No</p>
            <p>Yes/No</p>
            <p>Yes/No</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Admission Granted?</p>
            <p>Yes/No</p>
            <p>Yes/No</p>
            <p>Yes/No</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Australian Visa Applied?</p>
            <p>Yes/No</p>
            <p>Yes/No</p>
            <p>Yes/No</p>
          </div>
          <div className="grid grid-cols-4 gap-7 justify-between mt-2">
            <p>Australian Visa Granted?</p>
            <p>Yes/No</p>
            <p>Yes/No</p>
            <p>Yes/No</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StudentDetailsModal;
