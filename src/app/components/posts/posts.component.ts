import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isEdit: boolean = false;
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  posts: Post[]
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((post) => {
      console.log(post);
      this.posts = post;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  deletePost(post: Post) {
    if (confirm('Are you sure')) {
      this.postService.removePost(post.id).subscribe(() => {
        console.log('Deleted');
        this.posts.forEach((item, index) => {
          if (item.id = post.id) {
            this.posts.splice(index, 1)
          }
        });
      })
    }
  }
  onUpdatedPost(post: Post) {
    this.posts.forEach((item, index) => {
      if (post.id == item.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(item);
      }
    });
    this.isEdit = false;
    this.currentPost = {
      id: 0,
      title: '',
      body: ''
    };
  }
}
