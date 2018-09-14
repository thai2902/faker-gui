import { Component, OnInit } from '@angular/core';
import { FAKER_TYPES } from './faker-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typeList = [
    { name: 'number', displayName: 'Number' }
  ];

  JSONSchema: any;

  fields = [];

  fakerTypes = FAKER_TYPES;
  fakerTypeList = [];

  sampleJSONSchema = `{
    "$id": "https://example.com/person.schema.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Person",
    "type": "object",
    "properties": {
      "firstName": {
        "type": "string",
        "description": "The person's first name."
      },
      "lastName": {
        "type": "string",
        "description": "The person's last name."
      },
      "age": {
        "description": "Age in years which must be equal to or greater than zero.",
        "type": "integer",
        "minimum": 0
      }
    }
  }`;

  constructor() {
    this.JSONSchema = JSON.parse(this.sampleJSONSchema);
    this.fields = Object.keys(this.JSONSchema.properties);
    this.fakerTypeList = Object.keys(this.fakerTypes);

  }

  ngOnInit() {
  }

}
