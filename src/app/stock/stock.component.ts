import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogout(){
    return axios.post(
      'http://localhost:3000/graphql',
      {
        query: `

          mutation {
            addStock(
              Symbol: "TOM",
              Stockname: "TomCompany",
              Price: "52.23",
            )
            {
              Symbol,
            }
          }
        `
      }
    );
    }
  }
