import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fakeServerData = [
    {id: "KRS730215244", value: { "CompanyInformation": { "Regon": 730215244, "Name": "Test1", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true }},

    {id: "5446846343", value: { "CompanyInformation": { "Regon": 5446846343, "Name": "Test1", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true }},

    {id: "KRS201587", value: { "CompanyInformation": { "Regon": "KRS201587", "Name": "Test1", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true }},

    {id: "7685484836", value: { "CompanyInformation": { "Regon": 7685484836, "Name": "Test1", "Province": "Wielkopolskie", "County": "Poznański", "Community": "Poznań", "Place": "Poznań", "PostalCode": "61-500", "Street": "Marcinkowskiego", "HouseNumber": "1", "ApartmentNumber": "1", "BusinessActivityStart": "2017-08-25T16:34:26.8569686+02:00", "Type": "Indywidualna działalność gospodarcza" }, "Success": true }},
    
    ];
    return {fakeServerData};
  }
}