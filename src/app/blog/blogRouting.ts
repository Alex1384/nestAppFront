import { Route } from '@angular/router';
import { PostListComponent } from './post/list/post-list/post-list.component';
import { BlogGuard } from './guards/blogGuard';


export const BlogRouting: Route[] = [
  {path: 'blog', children: [
    {path: 'list', component: PostListComponent, canActivate: [BlogGuard]}
  ]
}
];
