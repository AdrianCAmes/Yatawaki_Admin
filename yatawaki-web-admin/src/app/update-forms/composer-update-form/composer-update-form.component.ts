import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from 'src/app/service/composer.service';

@Component({
  selector: 'app-composer-update-form',
  templateUrl: './composer-update-form.component.html',
  styleUrls: ['./composer-update-form.component.css']
})
export class ComposerUpdateFormComponent implements OnInit {

  
  id: number = 0;
  composer: Composer = new Composer();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private composerService: ComposerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.composerService.getComposerById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.composer = datos;
      }
    );
  }

  actualizarComposer() {
    if(this.composer.name === ''){
      this.composer.name = null;
    }
    console.log(JSON.stringify(this.composer))
    this.composerService.updateComposer(this.composer).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.composer = new Composer();
  }

}
