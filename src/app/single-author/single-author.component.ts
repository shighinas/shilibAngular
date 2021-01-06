import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { AuthorsModel } from '../authors/authors.model';

@Component({
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.css']
})
export class SingleAuthorComponent implements OnInit {
  author: AuthorsModel = {'_id':'', 'name':'', 'awards':'', 'dob':new Date(), 'description':'', 'pic':'', 'work':''};
  constructor(private authorservice: AuthorsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authorservice.getSingleAuthor(this.route.snapshot.paramMap.get('id'))
    .subscribe( (data)=>{
      this.author = JSON.parse(JSON.stringify(data));
      console.log(this.author);
    });
  }

}
