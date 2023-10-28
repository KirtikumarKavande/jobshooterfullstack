import React, { useState } from "react";
import UserDetailsContainer from "../utilities/style/UserDetailsContainer";
import Input from "../utilities/style/Input";
import Button from "../../utilities/styles/Button";
import SearchAndSelect from "../utilities/style/SearchAndSelect";
import { Country, State, City } from "country-state-city";
const LocationDetails = () => {
  const [isShowSuggestionForCountry, setIsShowSuggestionForCountry] =
    useState(false);
  const [isShowSuggestionForState, setIsShowSuggestionForState] =
    useState(false);
  const [isShowSuggestionForCity, setIsShowSuggestionForCity] = useState(false);

  const [countryInput, setCountryInput] = useState();
  const [stateInput, setStateInput] = useState();
  const [cityInput, setCityInput] = useState();

  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState();

 
  const clickOnCountry = (item) => {
    setCountryCode(item.isoCode);
    setCountryInput(item.name);

    setIsShowSuggestionForCountry(false);
  };
  const clickOnState = (item) => {
    setStateCode(item.isoCode);
    setStateInput(item.name);

    setIsShowSuggestionForState(false);
  };
  const clickOnCity = (item) => {
    setCityInput(item.name);
   setIsShowSuggestionForCity(false);
  };
  return (
    <UserDetailsContainer>
      {/* <div className="w-full relative">
       <input className="w-full border mt-5" />
      <input className="w-full border mt-5" />


      </div> */}
      <SearchAndSelect
        onChange={(e)=>{setCountryInput(e.target.value)}}
        label="Country/Region"
        name="country"
        data={Country.getAllCountries()}
        searchString={countryInput}
        value={countryInput}
        onClick={clickOnCountry}
        setIsShowSuggestion={setIsShowSuggestionForCountry}
        isShowSuggestion={isShowSuggestionForCountry}
        onFocus={() => {
          setIsShowSuggestionForCountry(true);
        }}
        onBlur={() => {
          setIsShowSuggestionForCountry(false);
        }}
      />
      <SearchAndSelect
        onChange={(e)=>{setStateInput(e.target.value)}}
        label="State"
        name="state"
        data={State.getStatesOfCountry(countryCode || "IN")}
        searchString={stateInput}
        value={stateInput}
        setIsShowSuggestion={setIsShowSuggestionForState}
        isShowSuggestion={isShowSuggestionForState}
        onFocus={() => {
          setIsShowSuggestionForState(true);
        }}
        onBlur={() => {
          setIsShowSuggestionForState(false);
        }}
        onClick={clickOnState}
      />

      <SearchAndSelect
        onChange={(e)=>{setCityInput(e.target.value)}}
        label="City"
        name="city"
        data={City.getCitiesOfState(countryCode, stateCode)}
        searchString={cityInput}
        value={cityInput}
        setIsShowSuggestion={setIsShowSuggestionForCity}
        isShowSuggestion={isShowSuggestionForCity}
        onFocus={() => {
          setIsShowSuggestionForCity(true);
        }}
        onBlur={() => {
          setIsShowSuggestionForCity(false);
        }}
        onClick={clickOnCity}
      />
      <Button bgColor={"#0A66C2"} height={"7vh"} textColour={"white"}>
        Continue
      </Button>
    </UserDetailsContainer>
  );
};

export default LocationDetails;
