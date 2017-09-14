import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fakeServerData = [
      { id: "5446846343", value: { "CompanyInformation": { "Regon": null, "Name": "Nazwa-firmy dla NIP 5446846343", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },

      { id: "41240007741569", value: { "CompanyInformation": { "Regon": 41240007741569, "Name": "Nazwa-firmy dla REGON 41240007741569", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },

      { id: "KRS0000999911", value: { "CompanyInformation": { "Regon": null, "Name": "Nazwa-firmy dla KRS0000999911", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },
      { id: "7777777777", value: { "CompanyInformation": { "Regon": null, "Name": "Nazwa-firmy dla NIP 7777777777", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },
      { id: "8532387587", value: { "CompanyInformation": { "Regon": null, "Name": "Nazwa-firmy dla 8532387587", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },
      { id: "3871035552", value: { "CompanyInformation": { "Regon": null, "Name": "Nazwa-firmy dla 3871035552", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },

    ];
    return { fakeServerData };
  }
}