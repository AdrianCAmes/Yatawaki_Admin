import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from 'src/app/service/composer.service';

@Component({
  selector: 'app-composer-change-form',
  templateUrl: './composer-change-form.component.html',
  styleUrls: ['./composer-change-form.component.css']
})
export class ComposerChangeFormComponent implements OnInit {

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

  changeComposer() {
    this.composerService.changeComposer(this.composer).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.composer = new Composer();
  }

}
