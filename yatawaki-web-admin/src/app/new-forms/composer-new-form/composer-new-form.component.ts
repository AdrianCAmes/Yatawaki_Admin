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
  unlockerTypes: any[] = [];

  constructor(private composerService: ComposerService, private unlockableService: UnlockableService) { }

  ngOnInit(): void {
    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
    this.unlockableService.getUnlockerTypes().subscribe(
      datos => {
        console.log(datos)
        this.unlockerTypes = datos;
      }
    );
  }

  insertComposer() {
    this.composerService.createComposer(this.composer).subscribe(
      (datos) => console.log(datos)
      //(error) => console.log(error)
    );
    this.composer = new Composer();
    //this.router.navigate(['ListCustomer']);
  }

}
