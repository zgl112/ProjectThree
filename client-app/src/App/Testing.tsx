import React, { useContext } from "react";
import { useState } from "react";
import AutoSuggest from "react-autosuggest";
import "./testing.css";
import { jobtitles } from "./Util/JobTitles";
import { IQueryRequest } from "./Models/Models";
import { JobStore } from "./Store/jobsStore";

const lowerCasedJobTitles = jobtitles.map((language) => language.toLowerCase());

const Auto = () => {
  const jobsStore = useContext(JobStore);
  const { setSearchParamsAutosuggest } = jobsStore;
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [query, setQuery] = React.useState<IQueryRequest>();

  function getSuggestions(value: string): string[] {
    return lowerCasedJobTitles.filter((language) =>
      language.startsWith(value.trim().toLowerCase())
    );
  }
  return (
    <div>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={async (_, { suggestionValue }) => {
          await setQuery({
            ...query!,
            jobTitle: suggestionValue,
          });

          await setSearchParamsAutosuggest(query!);

          console.log(suggestionValue);
          console.log(query?.jobTitle);
        }}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => <span>{suggestion}</span>}
        inputProps={{
          placeholder: "e.g. nurse",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
    </div>
  );
};
export default Auto;
