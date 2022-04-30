import { Component, OnInit } from '@angular/core';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from 'src/app/service/composer.service';
import { UnlockableService } from 'src/app/service/unlockable.service';

@Component({
  selector: 'app-composer-new-form',
  templateUrl: './composer-new-form.component.html',
  styleUrls: ['./composer-new-form.component.css']
})
export class ComposerNewFormComponent implements OnInit {

  
  composer: Composer = new Composer();
  statuses: any[] = [];

  constructor(private composerService: ComposerService, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInput(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = '';
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  insertComposer() {
    if(this.composer.name === ''){
      this.composer.name = null;
    }
    this.composerService.createComposer(this.composer).subscribe(
      (datos) => console.log(datos)
      //(error) => console.log(error)
    );
    this.composer = new Composer();
    //this.router.navigate(['ListCustomer']);
  }

}
