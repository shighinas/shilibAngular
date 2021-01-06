import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { AuthorsModel } from '../authors/authors.model';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  title: string = 'Add new Author';
  authorItem = new AuthorsModel('','',new Date(),'','','','');
  author: AuthorsModel = {'_id':'', 'name':'', 'awards':'', 'dob':new Date(), 'description':'', 'pic':'', 'work':''};

  constructor(private authorservice: AuthorsService, private router: Router, private route: ActivatedRoute) { }
  id: any = this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    if(this.id != null){
      this.title = 'Update Author';
      console.log(this.id);
      this.authorservice.getSingleAuthor(this.id)
      .subscribe( (data)=>{
        this.author = JSON.parse(JSON.stringify(data));
        console.log(this.author);
        this.authorItem._id = this.id;
        this.authorItem.name = this.author.name;
        this.authorItem.work = this.author.work;
        this.authorItem.awards = this.author.awards;
        this.authorItem.dob = this.author.dob;
        this.authorItem.description = this.author.description;
        this.authorItem.pic = this.author.pic;
      });
    }
  }

  add(){
    this.authorservice.addAuthor(this.authorItem);
    this.router.navigate(['/nav/authors']);
  }

  cancel(){
    this.router.navigate(['nav/authors']);
  }

}
