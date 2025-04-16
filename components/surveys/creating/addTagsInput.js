import { RiCloseLine } from "react-icons/ri";

export default function AddTagsInput({
  tags,
  setTags,
  tagInput,
  setTagInput,
  handleAddTag,
}) {
  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <div className="flex flex-row gap-2">
        <input
          placeholder="e.g. Culture, Burnout, Feedback"
          type="text"
          value={tagInput}
          onChange={handleTagInputChange}
          id="surveyTags"
          className="min-h-10 w-full max-h-10 rounded-lg border border-mainBlue/20 px-2 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
        />
        <button
          onClick={handleAddTag}
          className="h-max min-h-10 max-h-10 px-5 text-sm rounded-xl bg-mainBlue text-white hover:bg-mainYellow hover:text-mainBlue transition-all duration-500 ease-in-out"
        >
          Add
        </button>
      </div>
      <div className="h-max min-h-20 w-full p-4 rounded-lg border border-mainBlue/20">
        {tags.length === 0 && (
          <p className="text-sm w-full h-full flex items-center justify-center poppins-regular text-mainBlue/40">
            No tags added yet
          </p>
        )}
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleRemoveTag(tag)}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm poppins-regular bg-mainBlue/10 text-mainBlue hover:bg-mainBlue/30 transition-all duration-500 ease-in-out"
          >
            {tag}
            <RiCloseLine className="text-base" />
          </button>
        ))}
      </div>
    </>
  );
}
