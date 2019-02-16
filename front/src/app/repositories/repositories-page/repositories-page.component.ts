import {Component, OnInit} from "@angular/core";
import {RepositoriesService} from "../service/repositories.service";

@Component({
  templateUrl: './repositories-page.component.html'
})
export class RepositoriesPageComponent implements OnInit {

  repos: any;

  constructor(
    private privaterepositoryService: RepositoriesService)
  { }


  ngOnInit(): void {
    this.privaterepositoryService.findAllRepos().subscribe((repos) => {
      this.repos = repos;
    })
  }

}
