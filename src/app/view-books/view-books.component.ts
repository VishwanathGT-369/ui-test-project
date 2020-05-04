
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BookService } from '../book.service';

export interface Book {
  id: string,
  title: string;
  author: string;
  category_name: string;
  dept_name: string;
  lang_name: string;
  description: string;
  price: string;
  version: string;
  entryDate: string;
  status: string;
  copies: string;
}


/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'category_name', 'dept_name', 'lang_name', 'description', 'version', 'entryDate', 'status', 'copies'];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {

    this.bookService.getBooks().subscribe((books: Book[]) => {
        this.dataSource = new MatTableDataSource(books);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }, () => {
      console.log("Error while retriving books")
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

