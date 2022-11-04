import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  constructor(private readonly gifsService: GifsService) {}

  get result() {
    return this.gifsService.result;
  }

  ngOnInit(): void {}
}
