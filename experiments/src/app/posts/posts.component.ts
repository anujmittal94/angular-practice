import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = this.http.get<Post[]>(
    'http://localhost:3000/posts'
  );

  posts!: Post[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.http.get<Post[]>('http://localhost:3000/posts').subscribe((res) => {
      this.posts = res;
    });
  }

  deletePost() {
    this.http.delete(`http://localhost:3000/posts/1`).subscribe();
  }
  createPost() {
    this.http
      .post(`http://localhost:3000/posts`, {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      })
      .subscribe();
  }
}
