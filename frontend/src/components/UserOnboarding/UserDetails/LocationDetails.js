import React, { useState } from "react";
import UserDetailsContainer from "../utilities/style/UserDetailsContainer";
import Input from "../utilities/style/Input";
import Button from "../../utilities/styles/Button";
import SearchAndSelect from "../utilities/style/SearchAndSelect";
import { Country, State, City } from "country-state-city";
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLocationDetails } from "../../store/LocationSlice";
import usePostDataToDB  from "../../hooks/usePostDataToDB"
const LocationDetails = () => {

  const navigate = useNavigate();
  const postDataToDB=usePostDataToDB()
  const locationDetails= useSelector(store=>store.location)
  const [isShowSuggestionForCountry, setIsShowSuggestionForCountry] =
    useState(false);
  const [isShowSuggestionForState, setIsShowSuggestionForState] =
    useState(false);
  const [isShowSuggestionForCity, setIsShowSuggestionForCity] = useState(false);
  const { userInput, onChange, setUserInput } = useInput({
    country: "",
    state: "",
    city: "",
  });
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState();

  const clickOnCountry = (item) => {
    setCountryCode(item.isoCode);
    setUserInput({ ...userInput, country: item.name });
    dispatch(updateLocationDetails({ country: item.name }));
    setIsShowSuggestionForCountry(false);
  };
  const clickOnState = (item) => {
    setStateCode(item.isoCode);
    dispatch(updateLocationDetails({ state: item.name }));

    setUserInput({ ...userInput, state: item.name });
    setIsShowSuggestionForState(false);
  };
  const clickOnCity = (item) => {
    dispatch(updateLocationDetails({ city: item.name }));

    setUserInput({ ...userInput, city: item.name });
    setIsShowSuggestionForCity(false);
  };

  const handleLocationData = () => {
    postDataToDB('location',locationDetails)
  };
  return (
    <UserDetailsContainer>
      <SearchAndSelect
        onChange={onChange}
        label="Country/Region"
        name="country"
        data={Country.getAllCountries()}
        searchString={userInput.country}
        value={userInput.country}
        onClick={clickOnCountry}
        setIsShowSuggestion={setIsShowSuggestionForCountry}
        isShowSuggestion={isShowSuggestionForCountry}
        zIndexOfInput={50}
        onFocus={() => {
          setIsShowSuggestionForCountry(true);
        }}
        onBlur={() => {
          setIsShowSuggestionForCountry(false);
        }}
        setCode={setCountryCode}
        setSearchString={setUserInput}
        userInput={userInput}
      />
      <SearchAndSelect
        onChange={onChange}
        label="State"
        name="state"
        data={State.getStatesOfCountry(countryCode || "IN")}
        searchString={userInput.state}
        value={userInput.state}
        setIsShowSuggestion={setIsShowSuggestionForState}
        isShowSuggestion={isShowSuggestionForState}
        zIndexOfInput={40}
        onFocus={() => {
          setIsShowSuggestionForState(true);
        }}
        onBlur={() => {
          setIsShowSuggestionForState(false);
        }}
        onClick={clickOnState}
        setSearchString={setUserInput}
        setCode={setStateCode}
        userInput={userInput}
      />

      <SearchAndSelect
        onChange={onChange}
        label="City"
        name="city"
        data={City.getCitiesOfState(countryCode, stateCode)}
        searchString={userInput.city}
        value={userInput.city}
        setIsShowSuggestion={setIsShowSuggestionForCity}
        isShowSuggestion={isShowSuggestionForCity}
        zIndexOfInput={30}
        onFocus={() => {
          setIsShowSuggestionForCity(true);
        }}
        onBlur={() => {
          setIsShowSuggestionForCity(false);
        }}
        onClick={clickOnCity}
        setSearchString={setUserInput}
        userInput={userInput}
      />
      <Button
        bgColor={"#0A66C2"}
        height={"7vh"}
        textColour={"white"}
        onClick={handleLocationData}
      >
        Continue
      </Button>
    </UserDetailsContainer>
  );
};

export default LocationDetails;
