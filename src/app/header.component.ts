import { Component } from '@angular/core'

@Component({
    selector: 'app-header',
    template:  `
        <header>
            <div class="row">
                <div class="col s4 offset-s4 search-btn center-align">
                    <span class="material-icons">search</span>
                </div>
            </div>
        </header>
    `
})

export class HeaderComponent {

}
