import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private readonly gitsService: GifsService) {}

  ngOnInit(): void {}

  get record() {
    return this.gitsService.record;
  }

  search(term: string) {
    this.gitsService.searchGifs(term);
  }
}
