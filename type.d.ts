export type Country = {
    name: string;
    population: number;
    languages: string[];
    // capital:  String?;  // Optional, since not all countries have a capital listed
    // area:      Float?;   // Area in square kilometers, optional
    // continent: String?;  // Continent name, optional
    // flags:     String?;  // URL or base64 of the flag image, optional
    // region:    String?  // Region name, optional
  };