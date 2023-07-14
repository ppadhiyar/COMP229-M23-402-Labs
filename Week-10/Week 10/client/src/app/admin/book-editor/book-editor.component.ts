import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookRepository } from 'src/app/model/book.repository';

@Component({
  templateUrl: './book-editor.component.html'
})
export class BookEditorComponent implements OnInit {
  editing = false;
  book: Book = new Book();

  constructor(private repository: BookRepository,
              private router: Router,
              activeRoute: ActivatedRoute)
  {
    this.editing = activeRoute.snapshot.params.mode === 'edit';

    if (this.editing)
    {
      Object.assign(this.book, repository.getBook(activeRoute.snapshot.params.id));
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm): void
  {
    this.repository.saveBook(this.book);
    this.router.navigateByUrl('/admin/main/books');
  }

}
