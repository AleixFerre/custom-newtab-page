import { Component, OnInit } from '@angular/core';
import { Bookmark } from './bookmark-item/bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  bookmarks: Bookmark[] = [];

  constructor(
    private bookmarksService: BookmarksService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.bookmarks = this.bookmarksService.getBookmarksInitDefault();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drop(event: CdkDragDrop<any>) {
    this.bookmarks[event.previousContainer.data.index] =
      event.container.data.item;
    this.bookmarks[event.container.data.index] =
      event.previousContainer.data.item;
    const message = this.bookmarksService.updateBookmarks(this.bookmarks);
    this.openSnackBar(message ?? 'Bookmarks updated successfully');
  }

  openNewItemModal() {
    this.openSnackBar('TODO: Open new item modal here');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 5000,
    });
  }
}
