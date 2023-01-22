// Generated by https://quicktype.io

export interface DrugRecordTypes {
  meta  ?:    Meta;
  results ?: Result[];
}

export interface Meta {
  disclaimer:   string;
  terms:        string;
  license:      string;
  last_updated: string;
  results:      String;
}

export interface Results {
  skip:  number;
  limit: number;
  total: number;
}

export interface Result {
  submissions:        Submission[];
  application_number: string;
  sponsor_name:       string;
  openfda:            Openfda;
  products:           Product[];
}

export interface Openfda {
  application_number:     ApplicationNumber[];
  brand_name:         BrandName[];
  generic_name:     GenericName[];
  manufacturer_name: ManufacturerName[];
}

export interface ApplicationNumber{
  application_number: String;
}

export interface BrandName{
  brand_name: String;
}

export interface GenericName{
  generic_name: String;
}

export interface ManufacturerName{
  manufacturer_name: String;
}
export interface Product {
  product_number:     string;
  reference_drug:     Reference;
  brand_name:         string;
  active_ingredients: ActiveIngredient[];
  reference_standard: Reference;
  dosage_form:        string;
  route:              Route;
  marketing_status:   MarketingStatus;
}

export interface ActiveIngredient {
  name:     string;
  strength: string;
}

export enum MarketingStatus {
  OverTheCounter = "Over-the-counter",
}

export enum Reference {
  No = "No",
  Yes = "Yes",
}

export enum Route {
  Nasal = "NASAL",
  Oral = "ORAL",
  Topical = "TOPICAL",
}

export interface Submission {
  submission_type:                    SubmissionType;
  submission_number:                  string;
  submission_status:                  SubmissionStatus;
  submission_status_date:             string;
  review_priority?:                   ReviewPriority;
  submission_class_code?:             SubmissionClassCode;
  submission_class_code_description?: SubmissionClassCodeDescription;
  application_docs?:                  ApplicationDoc[];
}

export interface ApplicationDoc {
  id:   string;
  url:  string;
  date: string;
  type: string;
}

export enum ReviewPriority {
  Standard = "STANDARD",
  Unknown = "UNKNOWN",
}

export enum SubmissionClassCode {
  Labeling = "LABELING",
  ManufCmc = "MANUF (CMC)",
  Unknown = "UNKNOWN",
}

export enum SubmissionClassCodeDescription {
  Labeling = "Labeling",
  ManufacturingCMC = "Manufacturing (CMC)",
}

export enum SubmissionStatus {
  Ap = "AP",
}

export enum SubmissionType {
  Orig = "ORIG",
  Suppl = "SUPPL",
}

// export interface ItunesTypes {
//   resultCount?: number;
//   results?: Result[];
// }

// export interface Result {
//   wrapperType: string;
//   collectionType: string;
//   artistId: number;
//   collectionId: number;
//   amgArtistId?: number;
//   artistName: string;
//   collectionName: string;
//   collectionCensoredName: string;
//   artistViewUrl: string;
//   collectionViewUrl: string;
//   artworkUrl60: string;
//   artworkUrl100: string;
//   collectionPrice: number;
//   collectionExplicitness: string;
//   contentAdvisoryRating?: string;
//   trackCount: number;
//   copyright: string;
//   country: string;
//   currency: number;
//   releaseDate: string;
//   primaryGenreName: string;
// }