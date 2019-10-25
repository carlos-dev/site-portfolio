import { Component, OnInit } from '@angular/core';
import { HttpService } from '../Shared/http.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  loading = false;
  buttionText = 'Enviar';

  constructor(public http: HttpService) { }

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  commentFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);

  ngOnInit() {
    console.log(this.http.test);
  }

  register() {
    this.loading = true;
    this.buttionText = 'Enviando...';
    const user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      comment: this.commentFormControl.value
    };
    this.http.sendEmail('http://localhost:3000/sendmail', user).subscribe(
      data => {
        const res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = 'Enviar';
      }, () => {
        this.loading = false;
        this.buttionText = 'Enviar';
      }
    );
  }
}
