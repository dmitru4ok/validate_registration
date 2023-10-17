import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit{

  form: FormGroup;
  email!: string;
  pkey!: string;
  rkey!: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.form = new FormGroup({
      'code': new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParams['email'];
    this.pkey = this.route.snapshot.queryParams['pkey'];
    this.rkey = this.route.snapshot.queryParams['rkey'];
    console.log(this.email);
  }

  onSubmit(){
    console.log(this.form.value);
    const data = {...this.form.value, 'email': this.email, 'PartitionKey': this.pkey, 'RowKey': this.rkey};
    // link to logic app 2 post 
    this.http.post('https://prod-60.northeurope.logic.azure.com:443/workflows/e0ec260ab1b14a8f8e2581c4f3545e02/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UadCDquY2ioIeGxXqgfz8D5uwg07Tpn7X0uvkZkxsp0', data)
    .subscribe(data => {
      console.log(data);
    }); 
  }
}

