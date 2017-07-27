import {
    Component
} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string;

    clickCount = 0;
    visibility = 'inactive';
    lists = [
        {name: '教程1', link: 'https://angular.io/tutorial'},
        {name: '教程2', link: 'https://angular.io/tutorial'},
        {name: '教程3', link: 'https://angular.io/tutorial'}
    ]
    constructor() {
        this.title = 'Navigation';
    }
    onClickMe() {
        this.clickCount++;
    }
}