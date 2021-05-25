import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Comment } from '../interfaces/comment';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AboutAgeComponent } from '../about-age/about-age.component';
import { PolicyComponent } from '../policy/policy.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentForm: FormGroup;
  comment: Comment;

  ages: Number[] = [];
  
  constructor(private formBuilder: FormBuilder,
    private location: Location,
    public dialog: MatDialog) {
    this.createForm();
    this.validAges();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      age: '',
      agreement: false,
      comment: ''
    })
  }

  validAges(): Number[] {
    let start = 20;
    while (start < 81) {
      this.ages.push(start);
      start += 1;
    }
    return this.ages;
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    console.log(this.comment);
    this.commentForm.reset();
  }

  goBack() {
    this.location.back()
  }

  openAboutAge() {
    this.dialog.open(AboutAgeComponent);
  }

  openPolicy() {
    this.dialog.open(PolicyComponent);
  }
}
