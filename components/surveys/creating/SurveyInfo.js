import { useState, useEffect } from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import LabelText from "./text/labelText";
import AddTagsInput from "./addTagsInput";

export default function SurveyInfo({ isDataFilled, setIsDataFilled }) {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const teams = [
    "Software Engineering",
    "Product",
    "Design",
    "Marketing",
    "Sales",
  ];
  const [isSchedulingEnabled, setIsSchedulingEnabled] = useState(false);
  const [isExpirationEnabled, setIsExpirationEnabled] = useState(false);
  const [
    isAllowMultipleSubmissionsEnabled,
    setIsAllowMultipleSubmissionsEnabled,
  ] = useState(false);

  const selectTeam = (team) => {
    setSelectedTeams([...selectedTeams, team]);
  };

  const deselectTeam = (team) => {
    setSelectedTeams(selectedTeams.filter((t) => t !== team));
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleAddTeam = (team) => {
    if (team.trim() !== "") {
      setSelectedTeams([...selectedTeams, team]);
    }
  };

  const handleRemoveTeam = (team) => {
    setSelectedTeams(selectedTeams.filter((t) => t !== team));
  };

  const checkIfDataFilled = () => {
    console.log(
      surveyTitle,
      surveyDescription,
      selectedTeams.length,
      tags.length
    );
    if (
      surveyTitle !== "" &&
      surveyDescription !== "" &&
      selectedTeams.length > 0 &&
      tags.length > 0
    ) {
      setIsDataFilled(true);
    } else {
      setIsDataFilled(false);
    }
  };

  useEffect(() => {
    checkIfDataFilled();
  }, [surveyTitle, surveyDescription, selectedTeams, tags]);

  return (
    <div className="fade-in-down w-full flex flex-col">
      <LabelText forLabel="surveyTitle" label="Survey Title" required />
      <input
        id="surveyTitle"
        placeholder="e.g. Employee Engagement Survey"
        value={surveyTitle}
        onChange={(e) => {
          setSurveyTitle(e.target.value);
        }}
        type="text"
        className="mt-2 min-h-10 rounded-lg border border-mainBlue/20 px-2 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
      />
      <LabelText
        forLabel="surveyDescription"
        label="Survey Description"
        className="mt-4"
        required
      />
      <textarea
        type="text"
        placeholder="e.g. This survey is designed to gather feedback from employees about their work experience and overall satisfaction."
        id="surveyDescription"
        className="min-h-24 mt-2 py-2 rounded-lg border border-mainBlue/20 px-2 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
        onChange={(e) => {
          setSurveyDescription(e.target.value);
        }}
      />
      <div className="flex flex-col gap-2">
        <LabelText
          forLabel="surveyTags"
          label="Tags"
          className="mt-4"
          required
        />
        <AddTagsInput
          tags={tags}
          setTags={setTags}
          tagInput={tagInput}
          setTagInput={setTagInput}
          handleAddTag={handleAddTag}
        />
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-row gap-2 items-center justify-between">
            <LabelText
              className="mt-2"
              forLabel="surveyTeam"
              label="Select Team(s)/Departments to send to"
              required
            />
            <div className="flex flex-row gap-3 items-center">
              <button
                onClick={() => setSelectedTeams(teams)}
                className="text-sm w-max flex flex-row gap-1 items-center poppins-regular border-b-2 border-transparent hover:border-mainYellow transition-all duration-500"
              >
                Select All
                <RiCheckLine className="text-base" />
              </button>
              <button
                onClick={() => setSelectedTeams([])}
                className="text-sm w-max flex flex-row gap-1 items-center poppins-regular border-b-2 border-transparent hover:border-mainYellow transition-all duration-500"
              >
                Clear
                <RiCloseLine className="text-base" />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() =>
                  selectedTeams.includes(team)
                    ? deselectTeam(team)
                    : selectTeam(team)
                }
                className={`text-sm flex flex-row gap-1 items-center border border-mainBlue/20 px-2 py-1 rounded-xl poppins-regular
                        ${
                          selectedTeams.includes(team)
                            ? "bg-mainBlue text-white"
                            : "bg-white text-mainBlue"
                        }
                        `}
              >
                {team}
                {selectedTeams.includes(team) ? (
                  <RiCheckLine className="text-base" />
                ) : (
                  <RiCloseLine className="text-base" />
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center mt-2">
            <div className="flex flex-col gap-2 w-full">
              {/* <label htmlFor="schedule" className="text-sm poppins-regular">
                Schedule
              </label>
              <button
                onClick={() => setIsSchedulingEnabled(!isSchedulingEnabled)}
                className="mb-2 px-2 py-2 text-sm rounded-lg bg-mainBlue text-white hover:bg-mainYellow hover:text-mainBlue transition-all duration-500 ease-in-out"
              >
                {isSchedulingEnabled
                  ? "Disable Scheduling"
                  : "Enable Scheduling"}
              </button> */}
              <div className="flex items-end justify-between">
                <LabelText
                  forLabel="schedule"
                  label="Schedule"
                  className="mt-2"
                />
                <div className="relative inline-block w-12 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    id="toggle-schedule"
                    checked={isSchedulingEnabled}
                    onChange={() =>
                      setIsSchedulingEnabled(!isSchedulingEnabled)
                    }
                    className="sr-only"
                  />
                  <label
                    htmlFor="toggle-schedule"
                    className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                      isSchedulingEnabled ? "bg-mainBlue" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                        isSchedulingEnabled ? "translate-x-6" : "translate-x-0"
                      }`}
                    ></span>
                  </label>
                </div>
              </div>
              {isSchedulingEnabled && (
                <div className="flex flex-row gap-2 items-center">
                  <input
                    type="date"
                    id="schedule"
                    disabled={!isSchedulingEnabled}
                    className="min-h-10 w-1/2 rounded-lg border border-mainBlue/20 px-2 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                  />
                  <input
                    type="time"
                    id="schedule"
                    disabled={!isSchedulingEnabled}
                    className="min-h-10 w-1/2 rounded-lg border border-mainBlue/20 px-2 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-end justify-between">
                <LabelText
                  forLabel="expiration"
                  label="Expiration"
                  className="mt-2"
                />
                <div className="relative inline-block w-12 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    id="expirationToggle"
                    checked={isExpirationEnabled}
                    onChange={() =>
                      setIsExpirationEnabled(!isExpirationEnabled)
                    }
                    className="sr-only"
                  />
                  <label
                    htmlFor="expirationToggle"
                    className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                      isExpirationEnabled ? "bg-mainBlue" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                        isExpirationEnabled ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </label>
                </div>
              </div>
              {isExpirationEnabled && (
                <div className="flex flex-row gap-2 items-center">
                  <input
                    type="date"
                    id="expiration"
                    className="min-h-10 w-1/2 rounded-lg border border-mainBlue/20 px-2 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                  />
                  <input
                    type="time"
                    id="expiration"
                    className="min-h-10 w-1/2 rounded-lg border border-mainBlue/20 px-2 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-end justify-between">
              <LabelText
                forLabel="allowMultipleSubmissions"
                label="Allow Multiple Submissions"
                className="mt-2"
              />
              <div className="relative inline-block w-12 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  id="allowMultipleSubmissionsToggle"
                  checked={isAllowMultipleSubmissionsEnabled}
                  onChange={() =>
                    setIsAllowMultipleSubmissionsEnabled(
                      !isAllowMultipleSubmissionsEnabled
                    )
                  }
                  className="sr-only"
                />
                <label
                  htmlFor="allowMultipleSubmissionsToggle"
                  className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                    isAllowMultipleSubmissionsEnabled
                      ? "bg-mainBlue"
                      : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
                      isAllowMultipleSubmissionsEnabled
                        ? "translate-x-6"
                        : "translate-x-0"
                    }`}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
