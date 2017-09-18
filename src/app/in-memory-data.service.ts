import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fakeServerData = [
      { id: "5446846343", value: { "CompanyInformation": { "Regon": null, "Name": "Firma XYZ", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "2", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },

      { id: "41240007741569", value: { "CompanyInformation": { "Regon": 41240007741569, "Name": "Firma Foo", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "3", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },

      { id: "KRS0000999911", value: { "CompanyInformation": { "Regon": null, "Name": "Przedsiębiorstwo Bar", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "4", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },
      { id: "7777777777", value: { "CompanyInformation": { "Regon": null, "Name": "Foo-Bar Company", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "5", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },
      { id: "PL8532387587", value: { "CompanyInformation": { "Regon": null, "Name": "Bar-Baz", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "6", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },
      { id: "3871035552", value: { "CompanyInformation": { "Regon": null, "Name": "Foo-Baz", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "7", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true } },

    ];
    return { fakeServerData };
  }
}