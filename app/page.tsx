'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
// import { Link } from "lucide-react";
import Link from 'next/link';
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
// import fetchCountryNames from "./api";
// import { Link } from ''; // Adjust the import based on your setup
import CountryTable from "@/components/CountryTable";
import { useState } from "react";
import { Country } from "@/type";

// async function fetchCountryNames() {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/all");
//     const data = await response.json();
    
//     // Map through the data to extract the common name
//     const countryNames = data.map((country: { name: { common: string } }) => country.name.common);
    
//     console.log(countryNames);

//   } catch (error) {
//     console.error("Error fetching country names:", error);
//   }
// }

// type Country = {
//   name: string;
//   population: number;
//   languages: string;
// }

// async function fetchCountriesData(): Promise<{ name: string; population: number; languages: string[]} > {
async function fetchCountriesData(): Promise< Country[] > {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  console.log(data);

  const countryInfo = data.map((country: { name: { common: string }, population: number, languages: {[key: string]: string} }) => ({
    name: country.name.common, 
    population: country.population,
    languages: Object.values(country.languages || {}).join(", "),
  }));
  // const countryPopulation = data.map((country: { name: { common: string } }) => country.name.common);
  // console.log(countryNames);
  return countryInfo
}

export default function Home() {
const [countryNames, setCountryNames] = useState<Country[]>([]);

const handleFetchCountries = async() => {
  const countries = await fetchCountriesData();
  const sortedCountries = countries.sort((a, b) => a.name.localeCompare(b.name));
  setCountryNames(sortedCountries);
}

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h2>Main</h2>
        <SearchBar /> <br />
        <Button onClick={handleFetchCountries} > Retrieve all Countries </Button>
        <br /><br />
        <CountryTable countries={countryNames} />
      </main>
      
    </div>
  );
}
