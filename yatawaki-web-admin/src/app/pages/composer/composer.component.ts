import { Component, OnInit } from '@angular/core';
import { ComposerService } from '../../service/composer.service'


@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent implements OnInit {

  composers = new Array<any>();

  constructor(private composerService: ComposerService) { }

  ngOnInit(): void {
    this.composerService.getComposers().subscribe(response => {
      console.log(response)
      this.composers = response;
    });
  }

}
