import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about-age',
  templateUrl: './about-age.component.html',
  styleUrls: ['./about-age.component.css']
})
export class AboutAgeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AboutAgeComponent>) { }

  ngOnInit(): void {
  }

}
