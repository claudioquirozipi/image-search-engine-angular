import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private readonly gifsService: GifsService) {}

  ngOnInit(): void {}

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search() {
    const query = this.txtSearch.nativeElement.value;
    if (query.trim().length === 0) return;
    this.gifsService.searchGifs(query);
    this.txtSearch.nativeElement.value = '';
  }
}
