import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arg-prg',
  templateUrl: './arg-prg.component.html',
  styleUrls: ['./arg-prg.component.css']
})
export class ArgPrgComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit():void {

  }
  login(){
    this.router.navigate(['/login'])
  }
}
