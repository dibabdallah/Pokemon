import { Component, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-f-group',
  templateUrl: './f-group.component.html',
  styleUrls: ['./f-group.component.css']
})
export class FGroupComponent {
 userForm = new FormGroup({
   name: new FormControl(),
  email: new FormControl(),
   address: new  FormGroup({
   street: new FormControl(),
   city: new FormControl(),
   postalcode: new FormControl()
  })
 });
 onSubmit() {
   console.log(this.userForm.value);
 }
}
