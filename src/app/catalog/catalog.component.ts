import {Component, Inject, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService, @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  onSelect(item: Item) {
    this.selectedItem = item;
  }
}
