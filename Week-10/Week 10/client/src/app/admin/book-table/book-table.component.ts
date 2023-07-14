import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookRepository } from 'src/app/model/book.repository';

@Component({
  templateUrl: './book-table.component.html'
})
export class BookTableComponent implements OnInit {

  constructor(private repository: BookRepository,
              private router: Router) { }

  ngOnInit(): void {
  }

  getBooks(): Book[]
  {
    return this.repository.getBooks();
  }

  deleteBook(id: number): void
  {
    if (confirm('Are you sure?') && (id !== undefined))
    {
      this.repository.deleteBook(id);
    }
    else
    {
      window.location.reload(); // refresh fix
      this.router.navigateByUrl('/admin/main/books');
    }
  }

  addBook(): void
  {
    this.router.navigateByUrl('/admin/main/books/add');
  }

  editBook(id: number): void
  {
    this.router.navigateByUrl('/admin/main/books/edit/' + id);
  }

}
