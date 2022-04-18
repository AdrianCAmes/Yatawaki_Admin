import { Component, OnInit } from '@angular/core';
import { UnlockableService } from '../../service/unlockable.service'

@Component({
  selector: 'app-unlockable',
  templateUrl: './unlockable.component.html',
  styleUrls: ['./unlockable.component.css']
})
export class UnlockableComponent implements OnInit {

  unlockables = new Array<any>();

  constructor(private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.unlockableService.getUnlockables().subscribe(response => {
      console.log(response)
      this.unlockables = response;
    });
  }

}
