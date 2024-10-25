import React from "react";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface Country {
    name: string;
    population: number;
    languages: string[];
  }

type CountryTableProps = {
    countries : Country [];
    
}

// const CountryTable: React.FC<CountryTableProps> = ({countries = [] }) => {
const CountryTable = ({ countries }: CountryTableProps) => {


    return (
        <div className="max-h-[500px] overflow-auto">
            <Table className="min-w-full border">
                <TableCaption> A list of countries</TableCaption>    
                {/* <thead className="bg-white sticky top-0 z-10">
                    <tr>
                        <th className="border border-gray-300 p-2">#</th>
                        <th className="border border-gray-300 p-2">Country Name</th>
                        <th className="border border-gray-300 p-2">Population</th>
                        <th className="border border-gray-300 p-2">Languages</th>
                    </tr>
                </thead> */}
                <TableHeader className="bg-slate-200 " >
                    <TableRow  >
                        <TableHead className="w-[50px]">#</TableHead>
                        <TableHead className=" ">Country</TableHead>
                        <TableHead className="text-center ">Population</TableHead>
                        <TableHead className=" ">Languages</TableHead>
                    </TableRow>
                </TableHeader>
                {/* <tbody>
                    {countries.slice(0.20).map((country, index) => (
                        <tr key={index}>
                            <td className="border border-gray-200 px-5">{index+1}</td>
                            <td className="border border-gray-200 px-5">{country.name}</td>
                            <td className="border border-gray-300 text-right pr-5" >{country.population}</td>
                            <td className="border border-gray-300 px-5">{country.languages}</td>
                        </tr>
                    ))}
                </tbody> */}
                <TableBody>
                    {countries.map((country, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index+1}</TableCell>
                            <TableCell className="font-medium">{country.name}</TableCell>
                            <TableCell className="font-medium text-right pr-12">{country.population}</TableCell>
                            <TableCell className="font-medium">{country.languages}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        
    )
}

export default CountryTable;