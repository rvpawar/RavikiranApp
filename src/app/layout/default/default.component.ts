import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-default',
    //standalone: true,
    templateUrl: './default.component.html',
    styleUrl: './default.component.css',
    //imports: [SharedModule,RouterOutlet]
})
export class DefaultComponent {

}
