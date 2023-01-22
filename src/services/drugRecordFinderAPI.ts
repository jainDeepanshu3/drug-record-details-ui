import { DrugRecordTypes } from "../types/DrugRecordTypes.interface";

export const findDrugRecordApplications = async (search: string, searchOptionalText :string): Promise<DrugRecordTypes> =>
  await fetch(
    `http://localhost:8082/api.fda.gov/drug/drugsfda.json?manufacturerName=${search}&brandName=${searchOptionalText}`
  ).then(val => val.json());
